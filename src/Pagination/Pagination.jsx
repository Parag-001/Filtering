import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [no, setNo] = useState(1);
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${no}/comments`
      );
      const res = await data.json();
      console.log("res :>> ", res);
      setdata(res);
    };
    getData();
  }, [no]);

  const prevPage = () => {
    no === 1 ? setNo(1) : setNo(no - 1);
  };
  const nextPage = () => {
    no === 100 ? setNo(100) : setNo(no + 1);
  };
  return (
    <>
      <button className="btn btn-warning mx-4 my-3" onClick={() => prevPage()}>
        Prev
      </button>
      {no}
      <button className="btn btn-warning mx-4 my-3" onClick={() => nextPage()}>
        Next
      </button>
      {data.map((cur) => {
        const { id, name, email, postId } = cur;
        return (
          <div key={id}>
            <h3>{postId}</h3>
            <h3>{name}</h3>
            <h3>{email}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Pagination;
