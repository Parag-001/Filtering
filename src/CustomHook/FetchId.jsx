import React from "react";
import useFechData from "./useFechData";

const FetchId = () => {
  const data = useFechData("https://jsonplaceholder.typicode.com/posts");
  return (
    <>
      <h1>Id</h1>
      {data.slice(0, 10).map((cur) => {
        return (
          <div key={cur.id}>
            <h3>{cur.title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default FetchId;
