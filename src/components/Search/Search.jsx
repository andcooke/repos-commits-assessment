import React from "react";

import './styles.css';


export default function Search({ input, setInput, setPerPage, fetchRepoData }) {
  
  return (
    <div className="search-input-container flex" id="search">
      <form className="flex">
        <input type="text" value={input} placeholder="type org name here" onChange={(e) => setInput(e.target.value)}></input>
        <input className="btn" type="submit" onClick={fetchRepoData}></input>
        <div className="per-page-container">
          <label htmlFor="per-page">How many?</label>
          <select name="per-page" id="per-page" defaultValue={5} onChange={(e) => setPerPage(e.target.value)}>
            <option value="1">1</option>
            <option value="3" >3</option>
            <option value="5" >5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

      </form>
    </div>
  )
}