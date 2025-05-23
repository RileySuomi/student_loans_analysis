import './App.css'

function App() {
  
  return (
    <>
      <div className= "mx-auto max-w-3xl space-y-4 mb-20">
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
                    To important note : Dr. Gill said this in on the assignment itself - "
                    You should probably NOT include every detail of every analysis that you 
                    considered during the quarter -- focus on key results and telling a clear 
                    story grounded in the data. Your group has a key research question or two.
                    The report should be built around addressing the research questions in a 
                    clear and relatively concise manner. Start by thinking about the key message 
                    or story that you want to tell. Build the report around that story, firmly 
                    grounding your key conclusions in the data. Leave out extraneous analyses
                    that do not contribute to that story. " - Dr. Gill
                </p>
                <p className="text-left mx-6 mt-2 max-w-4xl text-gray-700">
                    So we should just focus on key things related to whatever our
                    research question is. Make it nice and professional but simple.
                </p>
            </div>
        </div>
        {/* methods */}
        <div className="space-y-2 text-center py-10 rounded-lg shadow-md">  
            <h2 className="text-2xl font-bold">Methods</h2>
            <div>
            <h2 className="text-1xl text-left mx-6 max-w-3xl font-bold">Data Collection</h2>
                <p className="text-left mx-6 max-w-3xl text-gray-700">
                    This section we can use for the data collection methods. lol. 
                    Idk describe this section as how we collected and who collected the 
                    data we collected. And further what we did to the data to clean/wrangle.
                </p>
            <h2 className="text-1xl text-left mx-6 mt-4 max-w-3xl font-bold">Variables</h2>
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
        {/* reslults */}
        <div className="space-y-2 text-center py-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Results</h2>
            <div>
                <p className="text-left mx-6 max-w-4xl text-gray-700">
                    This is the Results section where we will insert the text of the results. 
                    I'm still typing so I see how it looks as far as UI for the webpage!
                    So, this obviously isn't the final text, but it is a placeholder for now.
                    I will be adding more text to this section to see how it looks. Okay,
                    I think this is enough text for now.
                </p>
                <p className="text-left mx-6 mt-2 max-w-4xl text-gray-700">
                    Will have to figure out how to add the interactive visualizations to this section.
                    For non-interactive plots we can simply upload as a .png
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