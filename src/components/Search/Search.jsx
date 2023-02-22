import React from "react";
import './styles.css';

// import { useState } from "react";

export default function Search({ input, setInput, fetchRepoData }) {
  
  return (
    <div className="search-input-container">
      <form>
        <input type="text" value={input} placeholder="type org name here" onChange={(e) => setInput(e.target.value)}></input>
        <input className="btn" type="submit" onClick={fetchRepoData}></input>
      </form>
    </div>
  )
}