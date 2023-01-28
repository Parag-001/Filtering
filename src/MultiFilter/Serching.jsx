import React from "react";
import { useState, useEffect } from "react";
import Form from "./Table";

const Serching = () => {
  const data = [
    {
      id: 1,
      name: "foo",
      city: "dallas",
      category: "one",
      type: "A",
      active: "FALSE",
    },
    {
      id: 2,
      name: "bar",
      city: "dallas",
      category: "one",
      type: "B",
      active: "FALSE",
    },
    {
      id: 3,
      name: "jim",
      city: "san francisco",
      category: "one",
      type: "B",
      active: "TRUE",
    },
    {
      id: 4,
      name: "jane",
      city: "denver",
      category: "two",
      type: "C",
      active: "FALSE",
    },
  ];
  const [serch, setSerch] = useState("");
  const [serchData, setSerchData] = useState(data);
  const [searchNewData, setSearchNewData] = useState("");
  const [allData, setAllData] = useState([]);
  const [newkey, setNewKey] = useState([]);

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

  const unique = (data, val) => {
    const newVal = data.map((cur) => {
      return cur[val];
    });
    return [...new Set(newVal)];
  };

  const findData = (data, temp, val) => {
    for (var i = 0; i <= data.length - 1; i++) {
      if (temp.includes(data[i][val])) {
        return true;
      }
    }
    return false;
  };

  let ob = {};
  newkey.slice(2).map((cur) => {
    return (ob = { ...ob, [cur]: unique(data, [cur]) });
  });

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
      return newkey.every(
        (i) => !findData(data, temp, i) || temp.includes(cur[i])
      );
    });
    setSerchData(fnfilter);
  };

  const search = (e) => {
    setSerch(e.target.value);
    const val = serchData.filter((cur) => {
      if (cur.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return cur;
      }
      return null;
    });
    setSearchNewData(val);
  };
  return (
    <>
      <div className="main-div container mt-2">
        {newkey.slice(2).map((cur) => {
          return (
            <React.Fragment key={cur}>
              <div className="div-city">
                <div className="div-name">
                  <h3>{cur}</h3>
                </div>
                <div>
                  {ob[cur].map((val, ind) => {
                    return (
                      <div className="all-city" key={ind}>
                        <label className="switch">
                          <input
                            type="checkbox"
                            name={val}
                            value={val}
                            onChange={handleChange}
                          />
                          <div></div>
                        </label>
                        <span className="div-cityname">{val}</span>
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

export default Serching;
