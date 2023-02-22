import React, { useState } from "react";

import CommitInfo from "../CommitInfo/CommitInfo";

import './styles.css';


export default function RepoInfo({repoInfo}) {


  const [showCommits, setShowCommits] = useState(false);
// console.log(repoInfo);



  return (
    <div className="repo-commit-container flex">
      {/* {console.log(repoInfo)} */}
      {
        repoInfo && repoInfo.map((element, i) => (
          <div className="repo-container flex" onClick={() => setShowCommits(!showCommits)}>
            <div key={i} className="repo-card flex">
              <div className="repo-info flex">
                <h2 id="repo-title">{element.name}</h2>
                <p>{element.language}</p>
                <p>Stars: {element.stars}</p>
                <p>Forks: {element.forks}</p> 
              </div>
              <div className="repo-description flex">
                <h4>{element.description}</h4>
              </div>
            </div>
            <div className="commit-container">
              {showCommits ? <CommitInfo /> : ""}
              {/* <CommitInfo /> */}
            </div>
          </div>
        ))
      }

    </div>
  )
}