import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CrudEx = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [toggale, setToggale] = useState(false);
  const [edit, setEdit] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);
  const handleData = async (e) => {
    if (!name || !email) {
      alert("Please Enter Data");
    } else if (toggale) {
      await fetch(`https://jsonplaceholder.typicode.com/users/${edit}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: name,
          email: email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(() => {
          setData(
            data.map((cur) => {
              if (cur.id === edit) {
                return { ...data, name: name, email: email };
              }
              return cur;
            })
          );
          setName("");
          setEmail("");
          setToggale(false);
        })
        .catch((err) => console.log(err));
    } else {
      await axios
        .post(`https://jsonplaceholder.typicode.com/users`, {
          body: JSON.stringify({
            name: name,
            email: email,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
        .then(() => {
          const newData = {
            id: new Date().getTime().toString(),
            name: name,
            email: email,
          };
          console.log(newData);
          setData([...data, newData]);
          setName("");
          setEmail("");
        });
    }
  };
  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        Object.assign(config, { newlist: [...data] });
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (config) => {
        console.log(config);
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  });
  const updateData = (index) => {
    const updated = data.find((cur) => {
      return cur.id === index;
    });
    setName(updated.name);
    setEdit(index);
    setEmail(updated.email);
    setToggale(true);
  };
  const deleted = async (index) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${index}`, {
      method: "DELETE",
    }).then(() => {
      setData(
        data.filter((cur) => {
          return cur.id !== index;
        })
      );
    });
  };
  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="">email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        {toggale ? (
          <input type="submit" id="btm" value="Update" onClick={handleData} />
        ) : (
          <input type="submit" id="btm" value="submit" onClick={handleData} />
        )}
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Modify</th>
          </tr>
        </thead>
        {data.map((cur, ind) => {
          return (
            <React.Fragment key={ind}>
              <tbody>
                <tr>
                  <td>{cur.id}</td>
                  <td>{cur.name}</td>
                  <td>{cur.email}</td>
                  <th>
                    <button onClick={() => updateData(cur.id)}>Update</button>
                    <button onClick={() => deleted(cur.id)}>Delete</button>
                  </th>
                </tr>
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
    </>
  );
};

export default CrudEx;
