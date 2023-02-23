import React, { useState, useEffect, lazy, Suspense } from "react";

import CommitInfo from "../CommitInfo/CommitInfo";

import './styles.css';


export default function RepoInfo({repoInfo, input}) {


  const [showCommit, setShowCommit] = useState([]);

  // const [commits, setCommits] = useState([]);
  // const [activeRepo, setActiveRepo] = useState('');
  // const [clickedActive, setClickedActive] = useState(false);

  // useEffect (() => {
  //   setActiveRepo('')
  // },[clickedActive])

  function checkActiveRepo (event, info) {
      const commitOrder = []
      // console.log(info);
      // console.log(commitOrder);
      const repoName = event.currentTarget.getAttribute("name");
        info.map((element, i) => {
          // console.log(element);
          commitOrder.push(false);
        })
        info.map((element, i) => {
          if (element.name === repoName) {
            console.log(commitOrder.splice(i, 1, !(showCommit[i])));
            // commitOrder.splice(i, 1, !showCommit)
          }
        })
        // if (element.name === repoName) {
        //   // commitOrder.splice(i, 1, !showCommit)
        //   console.log(commitOrder);
        // } 
      // console.log(commitOrder);
      setShowCommit(commitOrder);
  }

  return (
    <div className="repo-commit-container flex">
      {/* <h1>Repositories by {input}</h1> */}
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
          <a href='#'>Click here to return to the top</a> 
        :
          '')}
      </div>
    </div>
  )
}