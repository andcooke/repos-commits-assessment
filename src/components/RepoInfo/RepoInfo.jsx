import React, { useState, useEffect, lazy, Suspense } from "react";

import CommitInfo from "../CommitInfo/CommitInfo";

import './styles.css';


export default function RepoInfo({repoInfo, input}) {

  // const CommitInfo = lazy(() => wait(300).then(() => import("../CommitInfo/CommitInfo")));

  // function wait(time) {
  //   return new Promise(resolve => {
  //     setTimeout(resolve, time)
  //   })
  // }

  const [showCommit, setShowCommit] = useState([]);

  const [commits, setCommits] = useState([]);
  const [activeRepo, setActiveRepo] = useState('');
  const [clickedActive, setClickedActive] = useState(false);

  // useEffect (() => {
  //   setActiveRepo('')
  // },[clickedActive])

  function checkActiveRepo (event, index, info) {
      const commitOrder = [];
      const repoName = event.currentTarget.getAttribute("name");
      info.forEach((element) => {
        if (element.name === repoName) {
          commitOrder.push(true)
        } else {
          commitOrder.push(false);
        }
      })
      console.log(commitOrder);
      setShowCommit(commitOrder);
  }




  // const fetchCommits = (commits, event) => {
  //   const commitsUrl = commits.split('{/sha}')[0] + "?per_page=5";
  //   const repoIndex = event.currentTarget.getAttribute("name");
  //   if (activeRepo === repoIndex) {
  //     setClickedActive(!clickedActive);
  //   }
  //   fetch(commitsUrl)
  //   .then((response) => response.json())
  //   .then((data) => refineCommits(data))
  //   .catch((err) => console.error(err));
  //   setActiveRepo(repoIndex);
  // }

  // const refineCommits = (commits) => {
  //   // console.log(commits);
  //   const updatedCommits = [];
  //   if (commits.length >= 0) {
  //     commits.forEach((element) => {
  //       let username = element.commit.author.name
        
  //       if (element.author && element.author.login) {
  //         username = element.author.login;
  //       } 
        
  //       const currentCommits = {
  //         title: element.commit.message,
  //         username: username,
  //         hash: element.sha,
  //         date: element.commit.author.date,
  //       };
  //       updatedCommits.push(currentCommits);
  //     })
  //     setCommits(updatedCommits);
  //   }
  // }

  return (
    <div className="repo-commit-container flex">
      {/* {console.log(input)} */}
      {/* <h1>Repositories by {input}</h1> */}
      {
        repoInfo && repoInfo.map((element, i) => (
          <div  key={i} className="repo-container flex" >
            <div className="repo-card flex" name={element.name} onClick={(event) => {
              checkActiveRepo(event, i, repoInfo);
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