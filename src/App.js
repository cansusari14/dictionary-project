import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Dictionary from "./Dictionary";
import Results from "./Results";

function App() {
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSearch(keyword) {
    //documentation https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000018320c0fddb4345d5830d364f01e100a2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  return (
    <div className="App">
      <main>
        <Dictionary onSearch={handleSearch} />
        <Results results={results} photos={photos} />
      </main>
    </div>
  );
}

export default App;
