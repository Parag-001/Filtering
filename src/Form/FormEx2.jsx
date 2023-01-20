import React from "react";
import { useState, useEffect } from "react";
import SignEx from "./LoginEx";
import Sign from "./Sign";
import swal from "sweetalert";
import {
  login,
  loginout,
  isAuthenticat,
  istoggle,
} from "../Redux/action/action";
import { useSelector, useDispatch } from "react-redux";

const FormEx2 = () => {
  const loginData = useSelector((stat) => stat.Authenticate.login);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    num: "",
    name: "",
    email: "",
    password: "",
    city: "",
  });
  const getData = () => {
    const data = localStorage.getItem("token");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [data, setData] = useState(getData());
  const [error, setError] = useState({
    num: false,
    name: false,
    email: false,
    password: false,
    city: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...input };
    setData([...data, newRecord]);
    dispatch(login());
    swal("Great", "Sign Up SuccessFully", "success");
    document.forms[0].reset();
    setInput({ num: "", name: "", email: "", password: "" });
  };
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(data));
  }, [data]);

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(loginout());
    dispatch(isAuthenticat());
    dispatch(istoggle());
  };
  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
    switch (name) {
      case "num":
        [name].length === 0
          ? setError({ num: true })
          : setError({ num: false });
        break;
      case "name":
        input.name.length < 2
          ? setError({ name: true })
          : setError({ name: false });
        break;
      case "email":
        input.email.length < 7
          ? setError({ email: true })
          : setError({ email: false });
        break;
      case "password":
        let exp = /^[0-9]/;
        input.password.match(exp)
          ? setError({ password: false })
          : setError({ password: true });
        break;
      case "city":
        input.city.valueOf() === "Nothing"
          ? setError({ city: true })
          : setError({ city: false });
        break;
    }
  };
  return (
    <>
      {!loginData ? (
        <Sign
          data={handleData}
          submit={handleSubmit}
          input={input}
          error={error}
        />
      ) : (
        <SignEx data={data} log={logout} />
      )}
    </>
  );
};

export default FormEx2;
