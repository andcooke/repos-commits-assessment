import React from "react";

import CommitInfo from "../CommitInfo/CommitInfo";

import './styles.css';


export default function RepoInfo({repoInfo}) {

// console.log(repoInfo);


  return (
    <div className="repo-container flex">
      {/* {console.log(repoInfo)} */}
      {
        repoInfo && repoInfo.map((element, i) => (
          <div className="repo-commit-container">
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
            <CommitInfo />
          </div>
        ))
      }

    </div>
  )
}