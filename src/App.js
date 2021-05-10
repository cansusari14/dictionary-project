import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Dictionary from "./Dictionary";
import Results from "./Results";

function App() {
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }
  function handleSearch(keyword) {
    //documentation https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="App">
      <main>
        <Dictionary onSearch={handleSearch} />
        <Results results={results} />
      </main>
    </div>
  );
}

export default App;
