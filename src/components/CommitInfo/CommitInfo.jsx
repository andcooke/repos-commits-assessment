import React, {useEffect} from "react";
import './styles.css';

export default function CommitInfo({commits}) {


  useEffect(() => {
    // console.log(commits);
    // console.log("inside commit component", activeRepo);
  },[commits])



  return (
    <div className="all-commits">
      {
        commits.map((element, i) => (
          <div key={i} className="commit-card">
            <div className="commit-title">
              <h2>{element.title}</h2>
            </div>
            <div className="flex commit-info">
              <p className="commit-author">by: {element.username}</p>
              <p>{element.date.split('T')[0]}</p>
              <p>{element.hash}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}