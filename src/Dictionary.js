import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(keyword);
  }

  return (
    <div className="Dictionary">
      <div className="content">
        <h1 className="title">Dictionary</h1>
        <h2 className="secondary-title">/dɪkʃ(ə)n(ə)ri/</h2>
        <p className="explanation">
          A web app in react, created by{" "}
          <a
            className="personal-link"
            href="https://hi-there-its-cansu.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            me
          </a>
          <br />
          simple, hustle-free <br />
          just enter your desired word and surprise thee.
        </p>
        <p className="explanation">Type a word to search...</p>
        <form onSubmit={handleSubmit} onChange={handleKeywordChange}>
          <input
            type="search"
            autoFocus="{true}"
            placeholder="ex:dog,cat,hippopotamus"
          />
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
