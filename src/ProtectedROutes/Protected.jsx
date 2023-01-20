import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const state = useSelector((stat) => stat.Authenticate.isAuthenticate);
  if (!state) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
