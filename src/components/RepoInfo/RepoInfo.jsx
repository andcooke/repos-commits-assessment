import React, { useState } from "react";

import CommitInfo from "../CommitInfo/CommitInfo";

import './styles.css';


export default function RepoInfo({repoInfo}) {

  const [commits, setCommits] = useState([]);
  const [activeRepo, setActiveRepo] = useState('');
  // const [showCommits, setShowCommits] = useState(false);


  const fetchCommits = (commits, event) => {
    const commitsUrl = commits.split('{/sha}')[0] + "?per_page=1";
    fetch(commitsUrl)
    .then((response) => response.json())
    .then((data) => refineCommits(data))
    .catch((err) => console.error(err));
    const repoName = event.currentTarget.getAttribute("name");
    setActiveRepo(repoName);
  }

  const refineCommits = (commits) => {
    const updatedCommits = [];
    // console.log(commits)
    if (commits.length >= 0) {
      commits.forEach((element) => {
        const currentCommits = {
          title: element.commit.message,
          username: element.commit.author.name,
          hash: element.sha,
          date: element.commit.author.date,
        };
        updatedCommits.push(currentCommits);
      })
      setCommits(updatedCommits);
    }
  }

  const renderCommits = () => {

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
              {/* this is where the commits go */}
 
            </div>
          </div>
        ))
      }

    </div>
  )
}