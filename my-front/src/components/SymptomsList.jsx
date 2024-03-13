import React from "react";
import "./SymptomsList.css";
import { useState } from "react";

const SympDep = [
  "continuous low mood or sadness",
  "feeling hopeless and helpless",
  "having low self-esteem",
  "feeling tearful",
  "feeling worthless or guilty",
  "feeling irritable and intolerant of others",
  "having no motivation or interest in things",
  "finding it difficult to make decisions",
  "not getting any enjoyment out of life",
  "irritable mood",
  "feeling anxious or worried",
  "having suicidal thoughts or thoughts of harming yourself",
];

const SympAnx = [
  "restlessness",
  "a sense of dread",
  "feeling on edge",
  "difficulty concentrating",
  "irritability",
  "muscle tension",
  "disturbed sleep",
  "dizziness",
  "tiredness",
  "a strong, fast or irregular heartbeat",
  "muscle aches and tension",
  "trembling or shaking",
  "a dry mouth",
  "excessive sweating",
  "shortness of breath",
  "tummy ache",
  "feeling sick",
  "a headache",
  "pins and needles",
  "difficulty falling or staying asleep",
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
      <h3>
      Tick the boxes for symptoms that you've been experiencing for over two weeks.
      </h3>
      <div className="container-col">
      <div className="col">
        <div>
          {SympDep.map((x) => (
            <div>
              <input type="checkbox" id={x} name={x} onClick={(i) => Add(i)} />
              <label for={x}>{x}</label>
            </div>
          ))}
        </div>
        <div>
          {SympAnx.map((x) => (
            <div>
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
