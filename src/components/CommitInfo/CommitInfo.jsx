import React, {useEffect} from "react";

export default function CommitInfo({commits}) {


  useEffect(() => {
    // console.log(commits);
    // console.log("inside commit component", activeRepo);
  },[commits])



  return (
    <div>
      test
    </div>
  )
}