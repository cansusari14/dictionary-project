import React from "react";
import "./Phonetics.css";
import Button from "./Button";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <Button audioUrl={props.phonetic.audio} />
      <br />
      <h2 className="text">{props.phonetic.text}</h2>
    </div>
  );
}
