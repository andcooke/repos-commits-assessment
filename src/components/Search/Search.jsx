import React from "react";
// import { useState } from "react";

export default function Search({ input, setInput, fetchRepoData }) {
  
  return (
    <div>
      <form>
        <input type="text" value={input} placeholder="org name" onChange={(e) => setInput(e.target.value)}></input>
        <input type="submit" onClick={fetchRepoData}></input>
      </form>
    </div>
  )
}