import React, { useEffect } from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";
import Picture from "./Picture";

export default function Results(props) {
  useEffect(() => {
    if (props.results && props.results.word !== "curiosity") {
      const element = document.querySelector(".Results");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [props.results]);
  if (props.error) {
    return (
      <div className="Results">
        <div className="content">
          <h2 className="title">
            Hey! Could't find a matching word!<br></br>Maybe try one more time:)
          </h2>
        </div>
      </div>
    );
  }
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
          <div>
            <Picture photos={props.photos} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="Results" />;
  }
}
