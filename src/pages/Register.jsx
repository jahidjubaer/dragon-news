import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <h1 className="text-2xl font-bold text-center my-4">
            Register your account
          </h1>
          <hr className=" my-3" />
          {/* name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          {/* url */}
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo URL" />
          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <label className="label">
            <input type="checkbox" defaultChecked className="checkbox"  />
            Accept Term & Conditions
          </label>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="font-semibold mt-4 text-sm text-center"  >
            Have An Account ?
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
