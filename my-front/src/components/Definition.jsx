import React from "react";
import "./Definition.css";

export default function Definition() {
  return (
    <>
      <div className="Def">
        <h2>➨ Clinical Depression</h2>
        <p className="inboxdef">
          Depressive disorder, also known as depression is a common mental
          disorder. It involves a depressed mood or loss of pleasure or interest
          in activities for long periods of time. </p> 
          
        <p style={{ fontStyle: 'italic', textAlign: 'right', fontSize: 'smaller' }}>Source: World Health Organization.
        </p>

        <h2>➨ Anxiety Disorder</h2>
        <p className="inboxdef">
          Anxiety disorders are characterised by excessive fear and worry and
          related behavioural disturbances. Symptoms are severe enough to result
          in significant distress or significant impairment in functioning.
          </p>
        <p style={{ fontStyle: 'italic', textAlign: 'right', fontSize: 'smaller' }}>Source: World Health Organization.
          </p>
      </div>
    </>
  );
}
