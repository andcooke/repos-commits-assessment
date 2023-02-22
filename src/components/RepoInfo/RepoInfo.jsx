import React from "react";


export default function RepoInfo({repoInfo}) {


// console.log(repoInfo);

  return (
    <div>
      {console.log(repoInfo)}
      {
        repoInfo.map((element, i) => (
          <div>
            <h3 key={i}>{element.name}</h3>
            <p key={i}>{element.description}</p>
            <p>Stars: {element.stars}</p>
            <p>Forks: {element.forks}</p>
          </div>
        ))
      }
    </div>
  )
}