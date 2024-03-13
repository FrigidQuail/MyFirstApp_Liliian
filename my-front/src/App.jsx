import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import TestHead from "./components/TestHead";
import SymptomsList from "./components/SymptomsList"; // new
import Definition from "./components/Definition"; // new

function App() {
  const [count, setCount] = useState(0);

  let header = "Depression and Anxiety Disorder";
  let info =
    "These are ongoing conditions rather than the feelings around a specific event. Take the quiz below to check if you are presenting the symptoms.";
     
  return (
    <>
      <TestHead text="Welcome" color="plum" />
      <div>
        <h2>{header}</h2>
        <p>{info}</p>
      </div>
      <h1>Mental Health Quiz</h1>

      <Definition />
      <SymptomsList />

      <p className="read-the-docs">
      <div className='subtext'>
        Please consult the HSE for more information <a href="http://www.hse.gov.uk" target="_blank">here</a>.
      </div>
      </p>
    </>
  );
}

export default App;
