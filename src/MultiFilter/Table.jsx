import React from "react";

const Form = ({ serchData, serch, serching }) => {
  const findData = serching.length > 0 ? serch : serchData;
  return (
    <>
      <table className="table  container main-form">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CITY</th>
            <th>CATEGORY</th>
            <th>TYPE</th>
            <th>ACTIVE</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {findData.map((cur) => {
            return (
              <tr key={cur.id}>
                <td>{cur.id}</td>
                <td>{cur.name}</td>
                <td>{cur.city}</td>
                <td>{cur.category}</td>
                <td>{cur.type}</td>
                <td>{cur.active}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Form;
