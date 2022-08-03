/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import Axios from "axios";
import "./App.css";
import { DICTIONATY_API } from "./constants/constants";
import { RANDOM_WORD_GENERATOR_API } from "./constants/constants";

function App() {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");
 
  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data);
    });
  }

  function getRandomWord() {
    Axios.get(
      `$RANDOM_WORD_GENERATR_API${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }
 
  return (
      <div className="App">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          } } />
        <button
          onClick={() => {
            getMeaning();
          } }
        >
          Search
        </button>
      </div>
      <div className="searchBox2">
        <h1>WORD OF THE DAY</h1>
        <h2>Hello: Used as a greeting or to begin a phone conversation</h2> 
      </div>
      {data && ( 
      <div className="showResults">
        <h2>
          {data.word}{" "}</h2>
          <h3>Definition:</h3>
            <p>{data.meanings[0].definitions[0].definition}</p>
      </div>
      )}
  </div>
  );
}

export default App;