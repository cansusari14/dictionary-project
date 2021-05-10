import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
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
        <form onSubmit={search} onChange={handleKeywordChange}>
          <input type="search" autoFocus="{true}" />
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}
