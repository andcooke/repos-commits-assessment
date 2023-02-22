import React from "react";

import './styles.css';


export default function RepoInfo({repoInfo}) {

// const sampleLanguages = {
// 'C': 2061805,
// 'C++': 8387801,
// 'CMake': 30878,
// 'CSS': 8792,
// 'HTML': 108884,
// 'JavaScript': 972040,
// 'M4': 19094,
// 'Makefile': 800405,
// 'Objective-C': 5439,
// 'PHP': 1023,
// 'Python': 704102,
// 'R': 262,
// 'Shell': 303788,
// }


  // const languageFetcher = (url) => {
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => console.log("languages", data))
  // }


// console.log(repoInfo);

  // return (
  //   <div className="repo-container flex">
  //     <div className="repo-card flex">
  //       <div className="repo-title flex">
  //         <h3>astyanax</h3>
  //       </div>
  //       <div className="repo-content flex">
  //         <p>Cassandra Java Client</p>
  //         <p>Java</p>
  //         <p>Stars: 1028</p>
  //         <p>Forks: 362</p> 
  //       </div>
  //     </div>

  //     <div className="repo-card flex">
  //       <div className="repo-title flex">
  //         <h3>astyanax</h3>
  //       </div>
  //       <div className="repo-content flex">
  //         <p>Cassandra Java Client</p>
  //         <p>Java</p>
  //         <p>Stars: 1028</p>
  //         <p>Forks: 362</p> 
  //       </div>
  //     </div>

  //   </div>
  // )



  return (
    <div className="repo-container flex">
      {/* {console.log(repoInfo)} */}
      {
        repoInfo && repoInfo.map((element, i) => (
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
        ))
      }
    </div>
  )
}