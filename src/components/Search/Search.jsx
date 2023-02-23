import React from "react";
import './styles.css';

// import { useState } from "react";

export default function Search({ input, setInput, perPage, setPerPage, fetchRepoData }) {
  


  return (
    <div className="search-input-container flex">
      {console.log(perPage)};
      <form className="flex">
        <input type="text" value={input} placeholder="type org name here" onChange={(e) => setInput(e.target.value)}></input>
        <input className="btn" type="submit" onClick={fetchRepoData}></input>
        <div className="per-page-container">
          <label for="per-page">How many?</label>
          <select name="per-page" id="per-page" onChange={(e, i, value) => setPerPage(value)}>
            <option value="1">1</option>
            <option value="5" selected>5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

      </form>
    </div>
  )
}