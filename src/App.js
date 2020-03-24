import React from "react";
import Quote from "./components/quote";
import "./App.css";
import Submit from "./components/submit";
import Dropdown from "./components/dropdown";

export default function App() {
  return (
    <div className="App">
      <h1>CHUCK NORRIS QUOTES</h1>
      <Quote />
      <label>Choose a category: </label>
      <Dropdown />
      <h6> </h6>
      <Submit />
    </div>
  );
}