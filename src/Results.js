import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";
import Picture from "./Picture";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="content">
          <h2 className="title">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
          <Picture photos={props.photos} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
