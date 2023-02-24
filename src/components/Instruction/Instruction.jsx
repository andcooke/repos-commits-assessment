import React from "react";

import './styles.css'

export default function Instruction () {

  return (
    <div className="instruction-container">
      <h3>Type in the name of any organization with GitHub repositories to see a list of their public repos! </h3>
      <p>You can adjust how many repos return with the dropdown selector.</p>
      <p>Once repos are visible, click any of them to see their most recent commits.</p>
    </div>
  )
}