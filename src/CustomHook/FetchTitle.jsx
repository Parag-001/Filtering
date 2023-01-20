import React from "react";
import useFechData from "./useFechData";

const FetchData = () => {
  const data = useFechData("https://jsonplaceholder.typicode.com/posts");
  return (
    <>
      <h1>Title</h1>
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

export default FetchData;
