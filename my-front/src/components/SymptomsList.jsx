import React, {useState} from "react";
import "./SymptomsList.css";



const SympDep = [
  " Continuous low mood or sadness",
  " Feeling hopeless and helpless",
  " Having low self-esteem",
  " Feeling tearful",
  " Feeling worthless or guilty",
  " Feeling irritable and intolerant of others",
  " Having no motivation or interest in things",
  " Finding it difficult to make decisions",
  " Not getting any enjoyment out of life",
  " Irritable mood",
  " Feeling anxious or worried",
  " Having suicidal thoughts or thoughts of harming yourself",
];

const SympAnx = [
  " Restlessness",
  " A sense of dread",
  " Feeling on edge",
  " Difficulty concentrating",
  " Irritability",
  " Muscle tension",
  " Disturbed sleep",
  " Dizziness",
  " Tiredness",
  " A strong, fast or irregular heartbeat",
  " Muscle aches and tension",
  " Trembling or shaking",
  " A dry mouth",
  " Excessive sweating",
  " Shortness of breath",
  " Stomach ache",
  " Feeling sick",
  " A headache",
  " Pins and needles",
  " Difficulty falling or staying asleep",
];

const SymptomsList = () => {
  const [count, setCount] = useState(0);
  const [adv, setAdv] = useState("");

  const handleItemTick = (itemId, isChecked) => {
    console.log(`Item ${itemId} is now ${isChecked ? 'checked' : 'unchecked'}`);
  };

  const Item = ({ id, name, onItemTick }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleTick = async () => {
      setIsChecked(!isChecked);
      // Send request to backend when user ticks/unticks an item
      
      try {
        await fetch("/api/tick-item", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: id, isChecked: !isChecked }),
        });
      
      // Call callback function to update parent component state if needed
        onItemTick(id, !isChecked);
      } catch (error) {
        console.error("Error ticking item:", error);
      }
    };

    return (
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleTick}
        />
        <label>{name}</label>
      </div>
    );
  };

  function Add() {
    setCount((prevCount) => prevCount + 1);
  }

  function Sub() {
    // Count the total number of ticked items
    const totalTickedItems = document.querySelectorAll('input[type="checkbox"]:checked').length;
  
    // Define the message based on the count of ticked items
    let message = "";
    if (totalTickedItems >= 5) {
      message = (
        <div className="container-consult-message">
          <div className="consult-message">Consult your doctor about getting help with depression or anxiety. There are many online resources for finding a therapist in your area, and many offer sliding scale options for more affordable mental health care. You're not alone.</div>
        </div>
      );
    } else {
      message = "You're doing okay. Keep monitoring your symptoms and know there are many resources online to help you when or if you want it.";
    }
  
    // Update the message state
    setAdv(message);
  
    // Reset the count
    setCount(0);
  }

  return (
    <>
      <div className="tick-instructions">
        <img 
          src="/tick-instructions.png" 
          alt="Instructions" 
          style={{ width: '35%', height: '35%' }} 
        />
      </div>

      <div className="container-col">
        <div className="col">
          <div>
            {SympDep.map((x, index) => (
              <Item key={`dep_${index}`} id={`dep_${index}`} name={x} onItemTick={handleItemTick} />
            ))}
          </div>
          <div>
            {SympAnx.map((x, index) => (
              <Item key={`anx_${index}`} id={`anx_${index}`} name={x} onItemTick={handleItemTick} />
            ))}
          </div>
        </div>
      </div>
      <button onClick={Sub}>Submit</button>
      <br />
      <div className="adv">{adv}</div>
    </>
  );
}

export default SymptomsList;

        {/* <div>
          {SympDep.map((x) => (
            <div className="firstcol">
              <input type="checkbox" id={x} name={x} onClick={(i) => Add(i)} />
              <label for={x}>{x}</label>
            </div>
          ))}
        </div>
        <div>
          {SympAnx.map((x) => (
            <div className="seccol">
              <input type="checkbox" id={x} name={x} onClick={Add} />
              <label for={x}>{x}</label>
            </div>
          ))}
        </div> */}
