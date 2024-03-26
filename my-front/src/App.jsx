import React from "react";
import "./App.css";
import TestHead from "./components/TestHead";
import SymptomsList from "./components/SymptomsList"; // new
import Definition from "./components/Definition"; // new


function App() {

  //Old code: (13-17)
  // const [count, setCount] = useState(0);

  // let header = "Depression and Anxiety Disorder";
  // let info =
  // <p className="ongoing"> These are ongoing conditions rather than the feelings around a specific event. Take the quiz below to check if you are presenting the symptoms.</p>;
     
  return (
    <>
      <TestHead text="Welcome!" color="plum" />
      <img 
      src="/quiz-title.png" 
      alt="Intro to page" 
      style={{ width: '40%', height: '40%' }} 
    />
      {/* <div>
        <h2>{header}</h2>
        <p>{info}</p>
      </div> */}
      
      <div className="mentalhealthtitleimg">
      <img 
      src="/mental-health-quiz-title.png" 
      alt="Intro to page" 
      style={{ width: '50%', height: '50%' }} 
    /></div>

      {/* <h1>Mental Health Quiz</h1> */}
      <Definition />
      <SymptomsList />
      <p className="read-the-docs">
      <div className='subtext'>
        <hr />
        Please consult the HSE for more information <a href="http://www.hse.gov.uk" target="_blank">here</a>.
      </div>
      </p>
    </>
  );
}


export default App;
