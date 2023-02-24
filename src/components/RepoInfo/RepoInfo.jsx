import React, { useState } from "react";

import CommitInfo from "../CommitInfo/CommitInfo";

import './styles.css';


export default function RepoInfo({repoInfo}) {

  const [showCommit, setShowCommit] = useState([]);

  function checkActiveRepo (event, info) {
      const commitOrder = [...showCommit];
      const repoName = event.currentTarget.getAttribute("name");
      if (commitOrder.length === 0) {
        info.forEach(() => {
          commitOrder.push(false);
        })
      }
        info.forEach((element, i) => {
          if (element.name === repoName) {
            commitOrder.splice(i, 1, !(showCommit[i]));
          }
        })
      
      setShowCommit(commitOrder);
  }

  return (
    <div className="repo-commit-container flex">
      
      {
        repoInfo && repoInfo.map((element, i) => (
          <div  key={i} className="repo-container flex" >
            <div className="repo-card flex" name={element.name} onClick={(event) => {
              checkActiveRepo(event, repoInfo);
              }}>
              <div className="repo-info flex">
                <h2 id="repo-title">{element.name}</h2>
                <p>Primary Language: {element.language}</p>
                <p>Stars: {element.stars}</p>
                <p>Forks: {element.forks}</p>
                <p>Date Created: {element.date.split('T')[0]}</p>
              </div>
              <div className="repo-description flex">
                <h4>{element.description}</h4>
              </div>
            </div>
            <div className={(showCommit[i]) ? 'show commit-container' : 'hidden commit-container'} >
              {
              element.commits.map((element, i) => <CommitInfo key={i} commit={element} />)
              }
            </div>
          </div>
        ))
      }
      <div className="link-to-top flex">
        {(
          repoInfo.length 
        ? 
          <a href='#/'>Click here to return to the top</a> 
        :
          '')}
      </div>
    </div>
  )
}