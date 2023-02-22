import React, {useEffect} from "react";

export default function CommitInfo({commits}) {


  useEffect(() => {
    console.log(commits);
  },[commits])

  return (
    <div>
      {
        commits && commits.map((element, i) => (
          <div key={i}>{element.title}</div>
        ))
      }
    </div>
  )
}