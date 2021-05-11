import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Button(props) {
  function handleClick() {
    let audioElement = new Audio(props.audioUrl);
    audioElement.play();
  }
  return (
    <div className="Button">
      <button
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faVolumeUp} />
      </button>
    </div>
  );
}
