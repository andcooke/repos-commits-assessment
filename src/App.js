import './App.css';
import React, { useState } from 'react';

import Search from './components/Search/Search';
import RepoInfo from './components/RepoInfo/RepoInfo';


function App() {

  const [input, setInput] = useState('');
  const [perPage, setPerPage] = useState(5);

  const requestURL = `https://api.github.com/orgs/${input}/repos?per_page=${perPage}`
  
  const [repoInfo, setRepoInfo] = useState([]);

  const fetchRepoData = (e) => {
    e.preventDefault();
    fetch(requestURL)
    .then((response) => response.json())
    .then((data) => refineData(data))
    .catch((err) => console.error(err));
    renderRepos(repoInfo);
    setInput('');
  }

  const refineData = (repos) => {
    // console.log(repos);
    const updatedInfo = [];

    if (repos.length >= 0) {
      repos.forEach((element) => {
        const currentRepo = {
          name: element.name,
          language: element.language,
          description: element.description,
          stars: element.stargazers_count,
          forks: element.forks_count,
          date: element.created_at,
          commits: element.commits_url
        };
        updatedInfo.push(currentRepo);
      })
      updatedInfo.sort((a, b) => b.stars - a.stars)
      setRepoInfo(updatedInfo)
    } else {
      return;
    }

  }

  const renderRepos = (repoInfo) => {
      return <RepoInfo repoInfo={repoInfo}/>
  }

  return (
    <div className="App">
      <Search input={input} setInput={setInput} setPerPage={setPerPage} fetchRepoData={fetchRepoData}/>
      {renderRepos(repoInfo)}
    </div>
  );
}

export default App;
