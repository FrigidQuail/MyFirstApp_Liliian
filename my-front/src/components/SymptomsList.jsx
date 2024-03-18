import React from "react";
import "./SymptomsList.css";
import { useState } from "react";

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

export default function SymptomsList() {
  const [count, setCount] = useState(0);
  const [adv, setAdv] = useState("");

  function Add() {
    setCount((prevCount) => prevCount + 1);
  }

  function Sub() {
    if (count >= 5) {
      setAdv(
      <div className="container-consult-message">
      <div className="consult-message">Consult your doctor about getting help with depression or anxiety. There are many online resources for finding a therapist in your area, and many offer sliding scale options for more affordable mental health care. You're not alone.</div>
      </div>
      );
    } else {
      setAdv("You're doing okay. Keep monitoring your symptoms and know there are many resources online to help you when or if you want it.");
    }
    setCount(0);
  }

  return (
    <>
    <div className="tick-instructions">
      <img 
      src="/tick-instructions.png" 
      alt="Instructions" 
      style={{ width: '30%', height: '30%' }} 
    /></div>

      {/* <h3>
      Tick the boxes for symptoms that you've been experiencing for over two weeks.
      </h3> */}

      <div className="container-col">
      <div className="col">
        <div>
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
        </div>
      </div>
      </div>
      <button onClick={Sub}>Submit</button>
      <br />
      <div className="adv">{adv}</div>
    </>
  );
}
