import React, { use } from "react";
import AuthContext from "../auth-provider/AuthContext";
import { Navigate } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const { loading } = use(AuthContext);
  console.log(loading);
  

  if (loading) {
    return <div>Loading.......</div>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }
};

export default PrivetRoute;
