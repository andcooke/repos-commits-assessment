import React from "react";

import './styles.css';

export default function CommitInfo({commit}) {

  return (
    <div className="all-commits">
      <div className="commit-card">
        <div className="commit-title">
          <h2>{commit.title}</h2>
        </div>
        <div className="flex commit-info">
          <p id="commit-author">by: {commit.username}</p>
          <p>{commit.date.split('T')[0]}</p>
          <div className="hash flex">
          <p>{commit.hash}</p>
          </div>
        </div>
      </div>
    </div>
  )
}