import React, { useState, useEffect } from "react";

import CommitInfo from "../CommitInfo/CommitInfo";

import './styles.css';


export default function RepoInfo({repoInfo}) {

  const [commits, setCommits] = useState([]);
  const [activeRepo, setActiveRepo] = useState('');
  const [clickedActive, setClickedActive] = useState(false);

  useEffect (() => {
    setActiveRepo('')
  },[clickedActive])


  const fetchCommits = (commits, event) => {
    const commitsUrl = commits.split('{/sha}')[0] + "?per_page=5";
    fetch(commitsUrl)
    .then((response) => response.json())
    .then((data) => refineCommits(data))
    .catch((err) => console.error(err));
    const repoIndex = event.currentTarget.getAttribute("name");
    if (activeRepo === repoIndex) {
      setClickedActive(!clickedActive);
    }
    setActiveRepo(repoIndex);
  }

  const refineCommits = (commits) => {
    // console.log(commits);
    const updatedCommits = [];
    if (commits.length >= 0) {
      commits.forEach((element) => {
        let username = element.commit.author.name
        
        if (element.author && element.author.login) {
          username = element.author.login;
        } 
        
        const currentCommits = {
          title: element.commit.message,
          username: username,
          hash: element.sha,
          date: element.commit.author.date,
        };
        updatedCommits.push(currentCommits);
      })
      setCommits(updatedCommits);
    }
  }

  return (
    <div className="repo-commit-container flex">
      {
        repoInfo && repoInfo.map((element, i) => (
          <div  key={i} className="repo-container flex" >
            <div className="repo-card flex" name={element.name} onClick={(event) => fetchCommits(element.commits, event)}>
              <div className="repo-info flex">
                <h2 id="repo-title">{element.name}</h2>
                <p>{element.language}</p>
                <p>Stars: {element.stars}</p>
                <p>Forks: {element.forks}</p>
                <p>{element.date.split('T')[0]}</p>
              </div>
              <div className="repo-description flex">
                <h4>{element.description}</h4>
              </div>
            </div>
            <div className="commit-container">
               {((element.name === activeRepo) ?  <CommitInfo commits={commits}/> : '')}               
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