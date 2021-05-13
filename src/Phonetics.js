import React from "react";
import "./Phonetics.css";
import Button from "./Button";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <Button audioUrl={props.phonetic.audio} />
      <h2 className="text">{props.phonetic.text}</h2>
    </div>
  );
}
