import React, { use } from "react";
import AuthContext from "../auth-provider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const { loading } = use(AuthContext);
  console.log(loading);

  const location = useLocation(); 
  console.log(location);
  
  

  if (loading) {
    return <div>Loading.......</div>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
};

export default PrivetRoute;
