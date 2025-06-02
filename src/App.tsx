import './App.css'
import studentloans from './assets/studentloans1.jpg'
import statelocalgrants from './assets/StateLocalGrants3.jpg'
import institionalgrants from './assets/InstitutionalGrants2.jpg'

function App() {
  
  return (
    <>
      <div className= "mx-auto max-w-4xl space-y-4 mb-20">
        {/* title */}
        <div className="space-y-2 text-center py-10 rounded-lg shadow-md">
            <h1 
            className="text-5xl font-bold tracking-light mb-2">
                Degrees of Debt: The Rise of Student Loans Over Time
            </h1>
            <div className="flex items-center mt-4 space-x-4 text-gray-400 justify-center">
                <span> Riley Suomi, Dalton Mermis, Pablo Preciado, Belle Burnside</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-400 justify-center">
                <span> Seattle Pacific University</span>
                <div className="h-4 w-px bg-gray-400"></div>
                <span> DAT4500</span>
            </div>
        </div>

        {/* abstract */}
         <div className="space-y-2 text-center py-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Abstract</h2>
            <div>
                <p className="text-left mx-6 max-w-3xl text-gray-700">
                    This is the Abstract where we will insert the text of the abstract. 
                    I'm still typing so I see how it looks as far as UI for the webpage!
                    So, this obviously isn't the final text, but it is a placeholder for now.
                    I will be adding more text to this section to see how it looks. Okay,
                    I think this is enough text for now.
                </p>
            </div>
          </div>
          {/* intro */}
          <div className="space-y-2 text-center py-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <div>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    The rising cost of higher education within the United States over the 
                    last few decades has placed an increasingly large financial burden on 
                    students and their families. Outstanding student loan debt ballooned 
                    from $387 billion in 2000 to $1.8 trillion in 2020,  (Looney & Yannelis, 2024). 
                    These rising costs include costs of tuition, as well as fees and boarding 
                    expenses for living on campus. With these rising costs, more students and 
                    families are relying upon different types of aid to be able to access post-secondary education. 
                    Students and families must rely on financial aid, including federal and private loans. 
                    This project aims to investigate how different types of institutions – public, private 
                    nonprofit, and private for-profit – affect the amount and structure of student debt. 
                    By examining how the type of institution attended correlates with borrowing trends, 
                    we aim to find patterns between the university type and amount of student debt incurred. 
                    Our report also features an assessment of how college costs have trended compared to overall U.S. 
                    inflation, which we measured through the Consumer Price Index (CPI). Through this analysis, 
                    we were able to measure how much college attendance costs have increased between 1999 and 2023, 
                    and we quantified the erosion of consumer purchasing power across that period. This allows us to 
                    look closer at how the rising costs and any economic pressures may impact borrowers depending on 
                    the type of institution they attend and the type of aid they hope to receive.  
                </p>
            </div>
        </div>
        {/* methods */}
        <div className="space-y-2 text-center py-10 rounded-lg shadow-md">  
            <h2 className="text-2xl font-bold">Methods</h2>
            <div>
                <h2 className="text-1xl text-left mx-6 max-w-3xl font-bold">Data Collection</h2>
                <p className="text-left mx-6 max-w-3xl text-gray-700">
                    We gathered data from the National Center for Education Statistics and 
                    the Federal Reserve of Economic Data and created graphics to visualize 
                    trends in student debt based off types of aid such as federal grants, 
                    institutional grants, state/local grants, and student loans. This analysis 
                    was paired with an investigation into some potential drivers of the student 
                    debt crisis, specifically increases in tuition/room and board prices and 
                    higher education operating costs. We also looked at visualizations based 
                    off institution type which included public universities, private nonprofit, 
                    and private for-profit universities, as well as dividing each of these 
                    institution types into 2- or 4-year colleges.  To investigate the differences 
                    between the average student loan amount per student enrolled in different 
                    university types across academic years we performed a linear regression 
                    analysis in Rstudio for each possible combination (public vs private nonprofit; 
                    public vs private for-profit; private nonprofit vs private for-profit). 
                    The models predicting average student loan amount for private nonprofit vs. 
                    private for-profit and public vs. private for-profit were built using institution 
                    type, years, and the interaction between type and year. The model for public vs. 
                    private nonprofit was built using only type and years as predictor variables.  
                </p>
                <br />
                <h2 className="text-1xl text-left mx-6 max-w-3xl font-bold">Data Collection</h2>
                <p className="text-left mx-6 max-w-3xl text-gray-700">To investigate the differences between aid types across universities, we looked 
                    at federal loans awarded, state and local grants awarded, and institutional grants 
                    awarded as well as student loans as previously stated. We performed linear regression 
                    analyses in Rstudio between each institution type for each aid type using year and 
                    type of institution as predictors, as well as the interaction between year and type.</p>
                <br />
                <h2 className="text-1xl text-left mx-6 max-w-3xl font-bold">Variables</h2>
                <p className="text-left mx-6 max-w-3xl text-gray-700">
                    Once we have the main dataset we perform analysis with, we can list the 
                    variables below. Use this paragraph space to describe what we did 
                    as far as naming the variables and what they mean.
                </p>
                <ul className="list-disc list-inside mx-6 mt-2 text-left">
                    <li>Year</li>
                    <li>Money</li>
                </ul>
            </div>
        </div>
        {/* results */}
        <div className="space-y-2 text-center py-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Results</h2>
            <div>
                <h3 className='text-1xl text-left mx-6 mt-4 max-w-3xl font-bold'>Student Loan Awards</h3>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    When looking at private universities vs. public universities, both 
                    private nonprofit and private for-profit showed significantly higher
                    average student loan amounts per person enrolled than public universities
                    (t = -3.23, df = 16, p-value less than 0.05; t = -14.57, df = 16, p-value 
                    less than 0.05). The rates of change in the average student loan amounts 
                    also significantly differed across time, with private nonprofit universities 
                    showing a slightly steeper trend in loan amounts over time (t = -8.28, df = 16, 
                    a p-value less than 0.05). However, when looking at private for-profit 
                    institutions against public institutions we see that for-profit colleges 
                    began with a much greater student loan amount in the year 2000 but have a 
                    less steep increase than that of public universities.  
                </p>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    Private nonprofit universities and private for-profit universities also 
                    show a significant difference in average student loans as well as differing 
                    rates of change over time (-3.27, df =16, p-value less than 0.05). In 2000, for-profit 
                    universities had higher student loan amounts on average at approximately $5,500. 
                    However, since 2015 private non-profit universities have surpassed for-profit 
                    universities and awarded greater amounts of student loans, following a steeper 
                    increasing trend than that of for-profit universities (t = 4.26, df = 16, p-value 
                    less than 0.05).  
                    <img src={studentloans}
                    alt="Student Loans Over Time"
                    className="mx-auto mt-4 max-w-3xl rounded-lg shadow-md" 
                    />    
                </p>
                <h3 className='text-1xl text-left mx-6 mt-4 max-w-3xl font-bold'>Institutional Grant Awards</h3>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    When looking at how institutional grants have been awarded to students who attend 
                    public, private nonprofit, and private for-profit universities, there is a 
                    significant difference in the average amount of institutional grants awarded 
                    between each university type (p-value less than 0.05). We also see that the rates 
                    of change over time for grant awards are different for each university type. Private 
                    non-profit universities show the greatest increase in awarding institutional grants 
                    and have been the highest on average awarder of this grant type from 2000 to 2021, 
                    increasing from approximately $7,400 awarded in the 2000-2001 school year to almost $25,000 
                    in the 2021-2022 school year, for an increase of almost $18,000. Meanwhile, public and 
                    private for-profit universities have each only increased by approximately $3,000 to $4,000 
                    from 2000-01 to 2021-22. 
                    <img src={institionalgrants}
                    alt="Institutional Grants Over Time"
                    className="mx-auto mt-4 max-w-3xl rounded-lg shadow-md" 
                    />  
                </p>
                <h3 className='text-1xl text-left mx-6 mt-4 max-w-3xl font-bold'>Federal Grants</h3>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    The average amount of federal grants awarded to students enrolled does not 
                    significantly differ between any institution type (p-value greater than 0.05). 
                    However, year does appear to be significant between each type of university, 
                    showing that the rates of change in average federal grants awarded is different 
                    between university types. All institution types also show an increase in the amount 
                    of federal grants awarded over time (t = 5.06, df = 16, p-value less than 0.05; t = 9.50, 
                    df = 16, p-value less than 0.05; t = 6.62, df = 16, p-value less than 0.05).   
                </p>
                <h3 className='text-1xl text-left mx-6 mt-4 max-w-3xl font-bold'>State and Local Grants</h3>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    The amount of state and local grants awarded to students does significantly 
                    differ across institution types. Although the amount of state and local grants 
                    awarded increases for all university types, private nonprofit universities have 
                    a significantly greater amount awarded than both public and private for-profit 
                    (t = -2.45, df = 16, p = 0.0261; t = -3.57, df = 16, p = 0.0025). In comparing 
                    private for-profit and public institutions, private for-profit have greater state 
                    and local grants awarded from 2000 to 2015 school years, then grants awarded by public 
                    institutions increases above that of for-profit institutions, showing that state and 
                    local grants awarded by public institutions have increased at a greater rate than 
                    those awarded by private for-profit universities.   
                    <img src={statelocalgrants}
                    alt="State and Local Grants Over Time"
                    className="mx-auto mt-4 max-w-3xl rounded-lg shadow-md"     
                    />
                </p>
                <iframe src = "https://daltonmermis.shinyapps.io/college_aid_app/"
                title = "Shiny App Visuals"
                width = "100%"
                height = "800px"
                style = {{ border: "none", marginTop: "20px" }}>
                </iframe>
            </div>
        </div>
        {/* disussion */}
        <div className="space-y-2 text-center py-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Discussion</h2>
            <div>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    This is the Discussion where we will insert the text of the discussion. 
                    I'm still typing so I see how it looks as far as UI for the webpage!
                    So, this obviously isn't the final text, but it is a placeholder for now.
                    I will be adding more text to this section to see how it looks. Okay,
                    I think this is enough text for now.
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App