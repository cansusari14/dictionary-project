import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Dictionary from "./Dictionary";
import Results from "./Results";

function App() {
  let [results, setResults] = useState();
  let [photos, setPhotos] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleError() {
    alert("Hey! Couldn't find a matching explanation!");
  }

  function handleSearch(keyword) {
    //documentation https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);

    let pexelsApiKey =
      "563492ad6f917000010000018320c0fddb4345d5830d364f01e100a2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  useEffect(() => {
    handleSearch("curiosity");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <main>
        <Dictionary onSearch={handleSearch} />
        <Results results={results} photos={photos} word="curiosity" />
      </main>
    </div>
  );
}

export default App;
