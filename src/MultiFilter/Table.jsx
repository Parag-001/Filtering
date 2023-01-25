import React from "react";

const Form = ({ serchData, serch, serching, data }) => {
  const findData = serching.length > 0 ? serch : serchData;
  let key;
  data.forEach((cur) => {
    key = Object.keys(cur);
  });
  let newkey = [...new Set(key)];
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
