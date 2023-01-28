import React, { useEffect, useState } from "react";

const Form = ({ serchData, serch, serching, data }) => {
  const [newkey, setNewKey] = useState([]);
  const findData = serching.length > 0 ? serch : serchData;

  useEffect(() => {
    let key = [];
    data.forEach((cur) => {
      Object.keys(cur).forEach((i) => {
        if (!key.includes(i)) {
          key.push(i);
        }
      });
    });
    setNewKey(key);
  }, []);
  return (
    <>
      <table className="table  container main-form">
        <thead>
          <tr>
            {newkey.map((cur, ind) => {
              return <td key={ind}>{cur}</td>;
            })}
          </tr>
        </thead>
        <tbody id="tbody">
          {findData.map((cur) => {
            return (
              <tr key={cur.id}>
                {newkey.map((data, ind) => {
                  return <td key={ind}>{cur[data]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Form;
