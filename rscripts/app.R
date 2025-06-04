#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    https://shiny.posit.co/
#

library(shiny)
library(tidyverse)
library(readxl)
library(openintro)
library(ggplot2)
library(plotly)
library(reshape2)

#first and second tab

college_aid_2000_2022 <- read_excel("college aid 2000-2022.xlsx", skip = 2)
college_aid <- college_aid_2000_2022 |>
  rename(Year = `Control and level of institution, and year`)

college_aid <- college_aid |>
  mutate(Type = ifelse(is.na(`Number enrolled`), Year, NA)) |>
  fill(Type) |>
  mutate(Type = str_squish(Type), 
         Year = str_squish(Year)) |>
  filter(!is.na(`Number enrolled`)) |>
  mutate(Level = ifelse(Type %in% c("2-year", "4-year"), Type, "Both")) |>
  select(Type, Level, everything()) |>
  mutate(Type = ifelse(Type %in% c("2-year", "4-year"), NA, Type)) |>
  fill(Type)

names(college_aid)<- c(
  "type",
  "level",
  "year",
  "num_of_enrolled",
  "num_awarded_aid",
  "pct_sutdents_awarded_aid",
  "pct_with_fed_grants", 
  "pct_with_state_local_grants", 
  "pct_with_institutional_grant", 
  "pct_student_loans",
  "avg_federal_grants_award", 
  "avg_state_local_grants_award", 
  "avg_inst_grants_award", 
  "avg_student_loans_award",
  "avg_federal_grants_const", 
  "avg_state_local_grants_const", 
  "avg_inst_grants_const", 
  "avg_student_loans_const"
)

college_aid <- college_aid |>
  mutate(across(
    .cols = num_of_enrolled:avg_student_loans_const,
    .fns  = ~ round(as.numeric(.), 3)
  ))

aid_group_long <- college_aid |>
  pivot_longer(
    cols = c(avg_federal_grants_award, 
             avg_state_local_grants_award, 
             avg_inst_grants_award, 
             avg_student_loans_award),
    values_to = "avg_award",
    names_to = "aid_type") |>
  mutate(
    aid_type = recode(aid_type,
                      avg_federal_grants_award   = "Federal Grants",
                      avg_state_local_grants_award = "State/Local Grants",
                      avg_inst_grants_award = "Institutional Grants",
                      avg_student_loans_award = "Student Loans"),
    year = factor(year, levels = unique(year)),
    year_numeric = as.numeric(sub("-.*", "", year))) |>
  select(type, level, year, aid_type, avg_award, year_numeric)

different_aid <- college_aid |>
  select(year, type, level, avg_federal_grants_award, avg_state_local_grants_award, avg_inst_grants_award, avg_student_loans_award, avg_federal_grants_const, avg_state_local_grants_const, avg_inst_grants_const, avg_student_loans_const) |>
  pivot_longer(
    cols = -c(type, level, year),
    names_to    = c("aidtype", "currency"),
    names_pattern = "avg_(.*)_(award|const)$") |>
  mutate(aidtype = recode(aidtype,
                          federal_grants        = "Federal grants",
                          state_local_grants    = "State/local grants",
                          inst_grants           = "Institutional grants",
                          student_loans         = "Student loans"
  ),
  currency = factor(
    recode(currency,
           award = "Current Dollars",
           const = "Constant (2022-23) Dollars"
    ),
    levels = c("Current Dollars", "Constant (2022-23) Dollars")
  ),
  year = factor(year, levels = unique(year)),
  year_numeric = as.numeric(sub("-.*", "", year))
  )

#third tab
line_data <- read_excel("line_data.xlsx")
merged_df <- read_excel("merged_df.xlsx")


#fourth tab
college_aid_subset1 <- college_aid[college_aid$type %in% c("Private nonprofit", "Private for-profit", "Public"), ]
college_aid_subset_nonvsfor <- college_aid_subset1[college_aid_subset1$level %in% c("Both"), ]
college_aid_subset_nonvsfor$year_numeric <- as.numeric(sub("-.*", "", college_aid_subset_nonvsfor$year))

# Define UI for application that draws a histogram
ui <- fluidPage(
  titlePanel("Student Aid Data Explorer"),
  tabsetPanel(id = "tab",
              tabPanel(title = "Aid Type", value = "line_plot",
                       sidebarPanel(
                         selectInput("type_line", "Institution Type:",
                                     choices = unique(college_aid$type),
                                     selected = "All Institutions"),
                         selectInput("level_line", "Program Duration:",
                                     choices = c("Both", "2-year", "4-year"),
                                     selected = "Both")
                       )
              ),
              
              tabPanel(title = "Award Type & Currency", value = "bar_plot",
                       sidebarPanel(
                         selectInput("type_bar", "Institution Type:",
                                     choices = unique(college_aid$type),
                                     selected = "All institutions"),
                         selectInput("year_sel_bar", "Academic Year(s):",
                                     choices = levels(different_aid$year),
                                     selected = levels(different_aid$year),
                                     multiple = TRUE, selectize = TRUE)
                       )
              ),
              
              tabPanel("Cost vs CPI Analysis", value = "cost_tab"),
              
              tabPanel("Regression: Loans by Type", value = "regression_tab",
                       sidebarPanel(
                         selectInput("loan_type", "Loan Type:",
                                     choices = c("Student Loans" = "avg_student_loans_award", 
                                                 "Federal Grants" = "avg_federal_grants_award",
                                                 "Institutional Grants" = "avg_inst_grants_award",
                                                 "State/Local Grants" = "avg_state_local_grants_award"),
                                     selected = "avg_student_loans_award"),
                         selectizeInput("institution_types", "Select Institution Type(s):",
                                        choices = unique(college_aid_subset_nonvsfor$type),
                                        selected = unique(college_aid_subset_nonvsfor$type),
                                        multiple = TRUE))
),
  
  mainPanel(
    conditionalPanel(
      condition = "input.tab == 'line_plot' || input.tab == 'bar_plot'",
      h3(textOutput("titleText")),
      plotOutput("aidPlot", height = "600px"),
      h5("Original table:", 
         tags$a(href = "https://nces.ed.gov/programs/digest/d23/tables/dt23_331.20.asp?current=yes", 
                "NCES Table 331.20"), 
         "- Digest of Education Statistics (2023)"),
      ),
    conditionalPanel(
      condition = "input.tab == 'cost_tab'",
      plotlyOutput("costPlot", width = "750px", height = "600px"),
      h5("Average Undergraduate Institution Cost Table:",
         tags$a(href = "https://nces.ed.gov/programs/digest/d23/tables/dt23_330.10.asp",
                "NCES Table 330.10"),
         "- Digest of Education Statistics (2023)"),
      h5("Consumer Price Index Table:",
         tags$a(href = "https://fred.stlouisfed.org/series/CPIAUCSL",
                "FRED Table 320.321"),
         "- Federal Reserve of Economic Data (2025)")
      ),
    conditionalPanel(
      condition = "input.tab == 'regression_tab'",
      plotOutput("regressionPlot", height = "600px"),
      h5("Note: Linear regression lines illustrate trends over time by institution type.")
    )
)))

# Define server logic required to draw a histogram
server <- function(input, output, session) {
  output$aidPlot <- renderPlot({
    if (input$tab == "line_plot") {
      req(input$type_line, input$level_line)
      
      plot_data <- aid_group_long |>
        filter(type == input$type_line, level == input$level_line)
      
      validate(
        need(nrow(plot_data) > 0 && !all(is.na(plot_data$avg_award)),
             "No data available for the selected Institution Type and Program Duration."))
      
      local_max_y <- max(plot_data$avg_award, na.rm = TRUE)
      
      ggplot(plot_data, aes(x = year_numeric, y = avg_award, color = aid_type)) +
        geom_line(size = 0.8) +
        geom_point(size = 2) +
        coord_cartesian(ylim = c(0, local_max_y)) +
        scale_color_brewer(palette = "Set2") +
        labs(
          title = paste("Average Aid Awards by Aid Type", "\nfor", input$type_line),
          x = "Academic Year", y = "Average Award Amount ($)", color = "Aid Type"
        ) +
        theme_minimal(base_size = 13) +
        theme(axis.text.x = element_text(angle = 80, hjust = 1),
              plot.title = element_text(face = "bold", hjust = 0.5))
      
    } else {
      req(input$type_bar, input$year_sel_bar)
      plot_data <- different_aid |>
        filter(type == input$type_bar, year %in% input$year_sel_bar)
      
      local_max_y <- max(plot_data$value, na.rm = TRUE)
      
      ggplot(plot_data, aes(x = year, y = value, fill = aidtype)) +
        geom_col(position = "dodge") +
        facet_wrap(~currency, ncol = 2) +
        coord_cartesian(ylim = c(0, local_max_y)) +
        labs(
          title = paste("Grants and loans for", input$type_bar),
          x = ("Academic Year"), 
          y = ("Average Award Amount ($)"),
          fill = ("Aid Type")) +
        theme_minimal(base_size = 13) +
        theme(axis.text.x = element_text(angle = 45, hjust = 1),
              plot.title = element_text(face = "bold", hjust = 0.5))
    }
  })
  
  output$costPlot <- renderPlotly({
    line_data <- melt(merged_df, 
                      id.vars = "Year and control of institution",
                      measure.vars = c("pct_change_Current_TFRB_4-year_public", 
                                       "pct_change_Current_TFRB_4-year_private"),
                      variable.name = "Institution_Type", 
                      value.name = "Percent_Change")
    
    line_data$Institution_Type <- gsub("pct_change_Current_TFRB_4-year_", "", line_data$Institution_Type)
    line_data$Institution_Type <- ifelse(line_data$Institution_Type == "public", 
                                         "Public Universities", 
                                         "Private Non-Profit Universities")
    
    p <- ggplot() +
      geom_bar(data = merged_df, 
               aes(x = `Year and control of institution`, y = pct_change_CPI,
                   text = paste("Year:", `Year and control of institution`, 
                                "<br>CPI Change:", round(pct_change_CPI, 1), "%")),
               stat = "identity", fill = "lightblue", alpha = 0.7, width = 0.7) +
      geom_line(data = line_data, 
                aes(x = `Year and control of institution`, y = Percent_Change, 
                    color = Institution_Type, group = Institution_Type,
                    text = paste(Institution_Type, "<br>Year:", `Year and control of institution`, 
                                 "<br>Change:", round(Percent_Change, 1), "%")),
                size = 1.2) +
      geom_point(data = line_data,
                 aes(x = `Year and control of institution`, y = Percent_Change, 
                     color = Institution_Type, group = Institution_Type),
                 size = 2.5) +
      labs(x = "Year", y = "Percent Change (%)", color = "Institution Type") +
      scale_color_manual(values = c("Public Universities" = "#E41A1C", 
                                    "Private Non-Profit Universities" = "#377EB8")) +
      theme_minimal() +
      theme(panel.grid.minor = element_blank(),
            axis.title = element_text(face = "bold"),
            legend.position = "bottom",
            legend.title = element_text(face = "bold"))
    
    ggplotly(p, tooltip = "text", width = 750, height = 600) |>
      layout(
        title = list(
          text = "Tuition, Fees, Room & Board Costs vs. Overall CPI in<br>Public and Private Nonprofit Colleges (2000–2023)<br><span style='font-size:12px;color:gray'>Percentage change from base year 2000</span>",
          y = 0.95,
          x = 0.5
        ),
        margin = list(t = 100),
        hovermode = "closest",
        legend = list(orientation = "h", y = -0.2)
      ) |>
      config(displayModeBar = TRUE)
  })
  
  output$regressionPlot <- renderPlot({
    req(input$loan_type)
    
    y_label <- switch(input$loan_type,
                      avg_student_loans_award = "Average Student Loans",
                      avg_federal_grants_award = "Average Federal Grants",
                      avg_inst_grants_award = "Average Institutional Grants",
                      avg_state_local_grants_award = "Average State/Local Grants")
    
    subset_data_regression <- college_aid_subset_nonvsfor |>
      filter(type %in% input$institution_types)
    
    ggplot(subset_data_regression, aes_string(x = "year_numeric", y = input$loan_type, color = "type")) +
      geom_point(alpha = 0.6) +
      geom_smooth(method = "lm", se = FALSE, size = 1.2) +
      theme_minimal(base_size = 14) +
      labs(title = paste("Trend of", y_label, "Award", "\nby Institution Type"),
           x = "Year", y = y_label, color = "Institution Type") +
      theme(plot.title = element_text(face = "bold", hjust = 0.5),
            axis.text.x = element_text(angle = 45, hjust = 1))
    })
}
# Run the application 
shinyApp(ui = ui, server = server)