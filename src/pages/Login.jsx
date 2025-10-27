import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../auth-provider/AuthContext";

const Login = () => {
  const { user, userSignOut } = use(AuthContext);

  // signOutUser
  const signOutUser = () => {};

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <h1 className="text-2xl font-bold text-center my-4">
            Login your account
          </h1>
          <hr className=" my-3" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          {/* dynamic login logout ;  */}
          {user ? (
            <button onClick={signOutUser} className="btn btn-neutral mt-4">
              Logout
            </button>
          ) : (
            <button className="btn btn-neutral mt-4">Login</button>
          )}
          <p className="font-semibold mt-4 text-sm text-center">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              Register
            </Link>{" "}
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
