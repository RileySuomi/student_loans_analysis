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
                    The exponential growth of student debt in the United States represents a major 
                    economic issue, with outstanding loans increasing from $387 billion in 2000 to 
                    $1.8 trillion in 2020 (Looney & Yannelis, 2024). This study investigates how institutional 
                    type affects student debt accumulation and grant distribution across public, private nonprofit, 
                    and private for-profit universities. Using data from the National Center for Education 
                    Statistics and the U.S. Bureau of Labor Statistics, we employed linear regression analyses to 
                    examine differences in student loan amounts and financial aid distribution across different types
                    of institutions. The results demonstrated that both private non-profit and private for-profit 
                    institutions generate significantly higher average student loan amounts per enrolled student compared 
                    to public universities (p-value less than 0.05). Private for-profit institutions initially showed 
                    the highest loans amount at approximately $6,000 in 2000, but private non-profit universities increased at 
                    a faster rate, surpassing for-profit averages from 2015 onwards. Our analysis of institutional grant 
                    allocation showed disparities between institution types, with private nonprofit universities increasing
                    awards from $7,400 to $25,000 (2000-2022), while public and for-profit institutions only increased by 
                    $3000-$4000 during the same period. Federal grants all increased in amount, but there was no correlation 
                    with institution type. These findings reveal structural differences in the ways students finance their 
                    education across different types of institutions. 
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
                <h2 className="text-1xl text-left mx-6 max-w-3xl font-bold">Data Analysis</h2>
                <p className="text-left mx-6 max-w-3xl text-gray-700">To investigate the differences between aid types across universities, we looked 
                    at federal loans awarded, state and local grants awarded, and institutional grants 
                    awarded as well as student loans as previously stated. We performed linear regression 
                    analyses in Rstudio between each institution type for each aid type using year and 
                    type of institution as predictors, as well as the interaction between year and type.</p>
                <br />
                <h2 className="text-1xl text-left mx-6 max-w-3xl font-bold">Variables</h2>
                <p className="text-left mx-6 max-w-3xl text-gray-700">
                    Our main dataset was collected from the National Center for Education Statistics (NCES) which has
                    been the federal statistical agency responsible for collecting, analyzing, and reporting data 
                    on the condition of U.S. education—from early childhood to adult education. 
                    <a
                      href="https://nces.ed.gov/programs/digest/d23/tables/dt23_331.20.asp?current=yes"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > You can view the data here.</a>
                </p>
                <ul className="list-disc list-inside mx-6 mt-2 text-left text-gray-700">
                    <li><b>Type:</b> Type of institution (public, private non-profit, private for-profit)</li>
                    <li><b>Level:</b> Duration of program (2-year, 4-year, both) </li>
                    <li><b>Year:</b> Academic year</li>
                    <li><b>num_of_enrolled:</b> Total number of students enrolled during the specified academic year</li>
                    <li><b>num_awarded_aid:</b> Number of enrolled students who received financial aid</li>
                    <li><b>ave_federal_grants_award:</b> Average federal grant amount awarded per student in the current academic year dollar</li>
                    <li><b>avg_state_local_grants_award:</b> Average state financial award/local grant amount awarded per student in the current academic year dollar</li>
                    <li><b>avg_inst_grants_award:</b> Average institutional grant and scholarship amount per student in the current academic year dollar  </li>
                    <li><b>avg_student_loans_award:</b> Average student loan amount per student in the current academic year dollar </li>
                    <li><b>avg_federal_grants_const:</b> Average federal grant amount awarded per student adjusted for inflation to constant 2022-23 academic year dollars</li>
                    <li><b>avg_state_local_grants_const:</b> Average state financial award/local grant amount per student adjusted for inflation to constant 2022-23 academic year dollars</li>
                    <li><b>avg_inst_grants_const:</b> Average institutional grant and scholarship amount per student adjusted for inflation to constant 2022-23 academic year dollars</li>
                    <li><b>avg_student_loans_const:</b> Average student loan amount per student adjusted for inflation to constant 2022-23 academic year dollars</li>
                </ul>
                <br />
                <p className="text-left mx-6 max-w-3xl text-gray-700">
                    Then we used a merging of two datasets, one from the  
                    <a
                      href="https://fred.stlouisfed.org/series/CPIAUCSL"
                      className='text-blue-400 hover:text-blue-600 hover:underline'> Federal Reserve of Economic Data (FRED) </a> 
                       and one from the  
                    <a
                      href="https://nces.ed.gov/programs/digest/d23/tables/dt23_330.10.asp"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > NCES</a>
                    , to look at how cost of attending college
                    has changed over time, compared to overall inflation over the course of 2000-2023.
                </p>
                <br />
                <p className="text-1xl text-left mx-6 max-w-3xl font-bold">Cost of Institution sheet</p>
                <ul className="list-disc list-inside mx-6 mt-2 text-left text-gray-700">
                    <li><b>pct_change_Current_TFRB_4-year_public:</b> Percent change of current dollars for tuition, fees, room, and board (TFRB) at a 4 year public university </li>
                    <li><b>pct_change_Current_TFRB_4-year_private:</b> Percent change of current dollars for tuition, fees, room, and board (TFRB) at a 4 year private university </li>
                    <li><b>Year and control of institution:</b> Year that the institution is being observed </li>
                </ul>
                <br />
                <p className="text-1xl text-left mx-6 max-w-3xl font-bold">FRED sheet</p>
                <ul className="list-disc list-inside mx-6 mt-2 text-left text-gray-700">
                    <li><b> pct_change_CPI:</b> Percent change in consumer price inflation (CPI)</li>
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
                <br />
                <br />
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
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    Higher education is a driving force in the development of countries across the world 
                    (Cheng & You, 2016). However, in the last few decades, we have witnessed a rise in the 
                    average cost of attending higher education universities. Rising tuition rates paired with 
                    cuts in state and federal funding has created a standard of student debt across the United 
                    States (Cheng & You, 2016). Today, we witness a system of high tuition met with high amounts 
                    of financial aid to help students battle the costs of attending college or university. 
                    The amount of financial aid provided to students ends up leaving millions of students in debt 
                    that can last decades and have serious implications on a person's ability to rise economically. 
                    Typically, higher education is meant to provide a path to higher salaries, which then aids in a 
                    person’s ability to pay off their student debt, however, in recent years studies have shown that
                    the return on investment for graduates does not meet that standard (Cheng & You, 2016). From the
                    years 2000-2010 average undergraduate tuition fees increased by 3.4% each year for public 
                    universities and rose by 2.8% each year for private universities. These fees are each an 
                    average of 2.5% higher than the average annual rate of inflation, showing that the cost of 
                    attending university has become fundamentally more expensive (Cheng & You, 2016).  
                </p>
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    In this study we have looked at student loans, which must be paid back after attending college,
                    as well as different types of grants, which do not have to be paid back by students. From our 
                    results we can see that the average amount of student loans, federal grants, institutional 
                    grants, and state and local grants have risen since the 2000-2001 academic year across all 
                    university types, meaning that the amount of debt needed to be paid back is rising across the 
                    board, but the amount of aid provided rises with it. What type of institution a prospective 
                    student chooses to attend, however, can impact how much debt a student ends up in or how much 
                    aid they receive.  
                </p>
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    Looking at for-profit universities, we can see an increasing trend in the amount of student loans that have been awarded from 2000-01 to 2021-22, and in the 2000-01 academic year student loans were around $1,500 greater than private non-profit universities and around $2,500 greater than private universities. On top of this, for-profit universities have also provided the lowest amount of institutional grants to their students, and since 2015 they have also had the lowest amount of state and local grants provided. This shows how the need for student loans while attending a for-profit university continues to rise, likely because there is not enough aid being provided by these institutions to cut tuition costs. Literature on for-profit universities has also shown that students who attend for-profit universities are also more likely to default on their loans as these universities attempt to appeal to more disadvantaged communities and have higher loan rates in general (Armona et al., 2022). Peak enrollment into for-profit universities was in 2010, at 9.6% percent of all higher education enrollment, which coincides with the peak in student loans shown in our data (Armona et al., 2022). More students mean more student loans, but with this we should also see a rise in aid provided by these institutions, but the amount of institutional and state/local grants provided by for-profit institutions in 2010 were less than $500 greater than what was provided in 2005. Meanwhile there was a jump of over $1,500 in student loans. In combination, high loans and little aid leave students in greater debt and therefore at greater risk of defaulting on their loans. Furthermore, research shows that post-enrollment earnings are also lower for graduates of for-profit universities, meaning there is little return on investment. 
                </p>
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    Private non-profit universities have also shown an interesting rise in student loans provided, surpassing that of for-profit universities in 2016. However, we also see a much greater rise in both institutional and state/local grants provided to students of non-profit institutions in stark contrast to for-profit. Grants from non-profit institutions have not only been greater on average than either for-profit or public universities, but they have also risen at a greater rate. The rise in student loans awarded to those attending private non-profit institutions is likely due to increased enrollment in these types of institutions. It has historically been thought that these non-profit institutions appealed only to wealthier families as they typically have high tuition rates in comparison to public universities (Chingos, 2017). However, recent studies have shown that in recent decades private universities, on average, are not much more selective than public universities and serve a similar proportion of low-income students as public institutions (Chingos, 2017). These non-profit institutions are typically funded by tuition and endowments, which are donated assets that have been aggregated and are used to fund students, faculty, and other university needs. These endowments are long term and connects donors with a university that typically aligns with the donor's beliefs or mission, and without these donors' private non-profit universities could not exist (American Council of Education, 2024). For example, many non-profit universities are religious institutions and are therefore funded by donors who align with that belief system.
                </p>
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700"> 
                    As non-profit colleges have gained more popularity, we have seen an increase in student loans, but with the help of donors these institutions often commit to providing high financial aid, to reduce future debt for graduates. This pattern of rising loans paired with rising aid, especially in the institutional grant sector, can be seen through our data. 
                </p>
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700"> 
                    Although public universities remain with the lowest on average student debt, the institutional, state/local, and federal grants provided to these students are comparable to for-profit universities. With lower tuition rates, public universities remain a popular option for many students, but students who want smaller class sizes, or flexibility through online classes might decide that private universities better fit their needs. This paper has aimed to fill gaps in how student loans and grants function across different types of universities to help inform students to make the best long-term financial decision for them.
                </p>
                <h3 className='text-1xl text-left mx-6 mt-4 max-w-3xl font-bold'>Financial Crisis and COVID: </h3>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    Trends in our graphs not only show how different types of universities handle financial aid and student loans, but they also show how the previous financial crises affected the types of aid that students apply for and the type of school they attend. From 2008-2010, the Great Recession occurred and acted as a turning point for students that wanted to return to school and pursue a different degree which led to universities enrollment levels increasing. Federal, institutional, and student loans during the 2008-2009 academic year had a higher average award amount trend while state and local grants rose gradually. We notice that after the 2009-2010 academic year the federal grants and student loans drop in amount while institutional grants and state/local grants rose.
                </p>
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    When COVID-19 occurred and the economy was put on a pause, we can notice another disruption within the data. Leading up to 2020, there is a downwards decline of federal grants and student loans. During the 2020-2021 academic year, we can notice an upward trend in all types of aid, with institutional grants rising the most in average award amount. A study conducted in June of 2024 found that K-12 school received nearly $190 billion in federal relief during the COVID-19 pandemic which 90% was found to be sent directly to local districts (Ross, 2024). With this information, we can predict that the upward trend could be associated with the federal stimulus checks that were given to universities, that were then put back into the school to offer students additional funding.  
                </p>
                <h3 className='text-1xl text-left mx-6 mt-4 max-w-3xl font-bold'>Current dilemmas and laws:  </h3>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                     In 2020 when COVID-19 occurred, conversations around student loan forgiveness shifted dramatically. In response to the national emergency, the federal government put a pause on student loan payments, froze interest rates and dropped them to 0%, while also stopping collections on defaulted loans. The goal of these changes was to temporarily provide financial relief to millions of Americans that were facing job loss, economic instability, and general uncertainty. This was put in place from March 13th, 2020, until September 1st, 2023, and was known as an administrative forbearance under the CARES Act (Coronavirus Aid, Relief, and Economic Security Act) and then extended through executive actions and the Department of Education authority.  
                </p>
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    Following the end of the 2020 pandemic freeze, the Biden administration attempted to formalize a broad-based student loan forgiveness. They proposed a cancel of up to $20,000 in federal student loans for eligible borrowers, by providing long-term relief and address the growing national debt burden upon students. However, in 2023 the U.S. Supreme Court shut down this plan stating that the executive branch is going past their authority. The administration then focused on targeted relief efforts, making adjustments to the Public Service Loan Forgiveness (PSLF) and reforms to the Income-Driven Repayment (IDR).  
                </p>
                <br />
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    During the shift of the presidency to former President Trump, Republican lawmakers have begun advancements on new student loan policies. As of May 22nd, the House of Representatives passed a part of the “The One Big Beautiful Bill Act” to propose significant changes to the federal student loan systems while cutting $350 billion in federal spending. This specific bill is the “Student Success and Taxpayer Savings Plan” and it hopes to put savings back in taxpayers’ pockets, simplify loan repayments, streamline student loan options, and create accountability for students and taxpayers (Education and Workforce Committee, 2025). Due to these current laws, it became a challenge to predict how we different types of student loans could look like in the future. The type, structure, and availability of relief programs are going to be subject to the political leadership and court decisions, making long-term planning for any borrowers uncertain and complex.  
                </p>
                <br />
            </div>
        </div>
        <div className="space-y-2 text-center py-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">References & Related Links</h2>
            <br />
            <ul className="list-disc list-inside mx-6 mt-2 text-left text-gray-700">
                <li>View the 
                    <a
                      href="https://github.com/RileySuomi/student_loans_analysis"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > Github Repository </a>
                      associated with this study.
                </li>
                <li> The
                    <a
                      href="https://daltonmermis.shinyapps.io/college_aid_app/"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > R ShinyApp </a>
                      associated with this study. 
                </li>
            </ul>
            <h3 className='text-1xl text-left mx-6 mt-4 max-w-3xl font-bold'>Literatures</h3>
            <ul className="list-disc list-inside mx-6 mt-2 text-left text-gray-700 text-align-justify">
                <li>Journal of Financial Economics - 
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X21005250?casa_token=G2ms_xX8L7AAAAAA:rAtt2g-qRAUTK7SdkVLZ9rKLTmNaDXHMuMlChrhjV2prig2W_70xAue-qATfjfixcgldBFhNEQI"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > Student debt and default: The role of for-profit colleges</a>
                      .
                </li>
                <li>Education and Workforce Commitee's 
                    <a
                      href="https://edworkforce.house.gov/news/documentsingle.aspx?DocumentID=412489"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > Student Success and Taxpayer Savings Plan </a>
                      associated with this study.
                </li>
                <li>Ecomin Studies at Brookings - 
                    <a
                      href="https://www.brookings.edu/wp-content/uploads/2017/02/es_20170216_chingos_evidence_speaks.pdf"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > Don't forget private, non-profit colleges </a>
                      .
                </li>
                <li>
                    <a
                      href="https://www.acenet.edu/Documents/Understanding-College-and-University-Endowments.pdf"
                      className='text-blue-400 hover:text-blue-600 hover:underline' >Understanding College Endowments</a>
                      .
                </li>
                <li> Harvard Study on
                    <a
                      href="https://www.gse.harvard.edu/ideas/news/24/06/how-federal-pandemic-aid-impacted-schools"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > How Federal Pandemic Aid Impacted Schools</a>
                      .
                </li>
                <li> Cheng, L., & You, C. (2016).
                    <a 
                      href="https://www.brookings.edu/wp-content/uploads/2017/02/es_20170216_chingos_evidence_speaks.pdf"
                      className='text-blue-400 hover:text-blue-600 hover:underline' > Analysis of rising tuition rates in the United States based on clustering analysis and regression models</a>
                      .
                </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default App