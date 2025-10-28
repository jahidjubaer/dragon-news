import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import AuthContext from "../auth-provider/AuthContext";

const Login = () => {
  const { userLogIn } = use(AuthContext);
  // location ;
  const location = useLocation();

  const navigate = useNavigate();

  // error state ;
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    userLogIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <h1 className="text-2xl font-bold text-center my-4">
            Login your account
          </h1>
          <hr className=" my-3" />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          {/* password */}
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p className="font-semibold mt-4 text-sm text-center">
            Dont’t Have An Account ?{" "}
            <Link to="/auth/register" className="text-secondary">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
