import React from "react";
import Quote from "./components/quote";
import "./App.css";
import Submit from "./components/submit";
import Dropdown from "./components/dropdown";

const chuckQuote = "Chuck Norris can spawn threads that complete before they are started."

export default function App() {
  return (
    <div className="App">
      <h1>CHUCK NORRIS QUOTES</h1>
      <Quote newQuote={chuckQuote}/>
      <label>Choose a category: </label>
      <Dropdown />
      <h6> </h6>
      <Submit />
    </div>
  );
}
