import './App.css';
import React, { useState } from 'react';

import Search from './components/Search/Search';
import RepoInfo from './components/RepoInfo/RepoInfo';



function App() {

  const [input, setInput] = useState('');
  const [perPage, setPerPage] = useState(5);
  const [repoInfo, setRepoInfo] = useState([]);


  const requestURL = `https://api.github.com/orgs/${input}/repos?per_page=${perPage}`
  

  const fetchRepoData = (e) => {
    e.preventDefault();
    fetch(requestURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((data) => refineData(data))
    .catch((err) => console.error(err));
    setInput('');
  }


  const refineData = (repos) => {
    const repoInfo = [];
     
    if (repos.length > 0) {
      repos.forEach((element) => {

      const commitInfo =[];

      const commitsUrl = element.commits_url.split('{/sha}')[0] + "?per_page=5";
      fetch(commitsUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
          "Content-Type": "application/json",
        }
      })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
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
          commitInfo.push(currentCommits);
        })
      })
      .catch((err) => console.error(err));

        const currentRepo = {
          name: element.name,
          language: element.language,
          description: element.description,
          stars: element.stargazers_count,
          forks: element.forks_count,
          date: element.created_at,
          commits: commitInfo,
        };
        repoInfo.push(currentRepo);
      })
      repoInfo.sort((a, b) => b.stars - a.stars)
      setRepoInfo(repoInfo)
    } 
  }



  return (
    <div className="App">
      <Search input={input} setInput={setInput} setPerPage={setPerPage} fetchRepoData={fetchRepoData}/>
      <RepoInfo repoInfo={repoInfo} input={input}/>
    </div>
  );
}

export default App;
