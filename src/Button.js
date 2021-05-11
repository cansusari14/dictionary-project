import React from "react";

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
        <span>Play/Pause</span>
      </button>
    </div>
  );
}
