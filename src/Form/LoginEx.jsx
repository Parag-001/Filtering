import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { authentication, toggle } from "../Redux/action/action";

const SignEx = ({ data, log }) => {
  const toggleData = useSelector((stat) => stat.Authenticate.toggle);
  const dispatch = useDispatch();
  // const [toggle, setToggle] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    data.map((cur) => {
      if (cur.email === input.email && cur.password === input.password) {
        dispatch(authentication());
        swal("Great!!", "Your Login SuccessFully", "success");
        dispatch(toggle());
      } else {
        swal("Oh No!!", "Your Id and Password Not Match", "error");
      }
    });
    setInput({ email: "", password: "" });
  };

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  return (
    <>
      {toggleData ? (
        <>
          <h1 className="text-center my-5">Login Form</h1>
          <form
            action=""
            className="form w-50 mx-auto my-4"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Email Address:
              </label>
              <input
                type="email"
                className="form-control"
                autoComplete="off"
                name="email"
                value={input.email}
                onChange={handleData}
              />
              <span id="enum"></span>
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Password :
              </label>
              <input
                type="password"
                className="form-control"
                autoComplete="off"
                name="password"
                value={input.password}
                onChange={handleData}
              />
              <span id="ename"></span>
            </div>
            <br />
            <div className="form-group text-center">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </form>
        </>
      ) : (
        <div>
          <h1 className="text-center my-5">User Login SuccessFully</h1>
          <div className="form-group text-center">
            <button className="btn btn-warning" onClick={() => log()}>
              Logout
            </button>
          </div>
          <br />
        </div>
      )}
    </>
  );
};

export default SignEx;
