import React from "react";
import { useState } from "react";
import Form from "./Table";

const Serch = ({ data }) => {
  const [serch, setSerch] = useState("");
  const [serchData, setSerchData] = useState(data);
  const [searchNewData, setSearchNewData] = useState("");
  const [allData, setAllData] = useState([]);

  let key;
  data.forEach((cur) => {
    key = Object.keys(cur);
    key.shift();
    key.shift();
  });
  let newkey = [...new Set(key)];

  const unique = (data, val) => {
    const newval = data.map((cur) => {
      return cur[val];
    });
    return [...new Set(newval)];
  };
  const city = unique(data, "city");
  const category = unique(data, "category");
  const type = unique(data, "type");
  const active = unique(data, "active");

  const findData = (data, temp) => {
    for (var i = 0; i <= data.length - 1; i++) {
      if (temp.includes(data[i])) {
        return true;
      }
    }
    return false;
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let check = e.target.checked;

    const ind = allData.findIndex((cur) => {
      return cur === value;
    });

    let find = ind === -1 ? [...allData] : allData.splice(ind, 1);
    const temp = check ? [...allData, value] : [...allData];
    setAllData(temp);

    const fnfilter = data.filter((cur) => {
      if (
        (!findData(city, temp) || temp.includes(cur.city)) &&
        (!findData(category, temp) || temp.includes(cur.category)) &&
        (!findData(type, temp) || temp.includes(cur.type)) &&
        (!findData(active, temp) || temp.includes(cur.active))
      ) {
        return cur;
      }
    });
    setSerchData(fnfilter);
  };

  const search = (e) => {
    setSerch(e.target.value);
    const val = serchData.filter((cur) => {
      if (cur.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return cur;
      }
    });
    setSearchNewData(val);
  };
  return (
    <>
      <div className="main-div container mt-2">
        {newkey.map((cur) => {
          const findValues =
            cur === "city"
              ? city
              : cur === "category"
              ? category
              : cur === "type"
              ? type
              : active;
          return (
            <React.Fragment key={cur}>
              <div className="div-city">
                <div className="div-name">
                  <h3>{cur}</h3>
                </div>
                <div>
                  {findValues.map((city, ind) => {
                    return (
                      <div className="all-city" key={ind}>
                        <label className="switch">
                          <input
                            type="checkbox"
                            name={city}
                            value={city}
                            onChange={handleChange}
                          />
                          <div></div>
                        </label>
                        <span className="div-cityname">{city}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <div className="div-input">
          <input
            type="text"
            placeholder="Name"
            value={serch}
            onChange={search}
            className="input-search"
          />
        </div>
      </div>
      <Form
        data={data}
        serchData={serchData}
        serch={searchNewData}
        serching={serch}
      />
    </>
  );
};

export default Serch;
