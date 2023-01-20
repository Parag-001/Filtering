import { useState } from "react";
import { useEffect } from "react";

const useFechData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url);
      const res = await data.json();
      setData(res);
    };
    getData();
  }, [url]);
  return data;
};

export default useFechData;
