import React from "react";
// import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <ol>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <li key={index}>
              <div>{definition.definition}</div>
              <br />
              {/* <em>{definition.example}</em> */}
              {/* <Synonyms synonyms={definition.synonyms} /> */}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
