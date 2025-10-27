import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../auth-provider/AuthContext";

const Register = () => {
  // get the function write in auth provider ;
  const { createNewUser, setUser } = use(AuthContext);

  // handle register
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const imgUrl = event.target.imgUrl.value;
    // console.log({ name, email, password });

    createNewUser(email, password)
      .then((result) => {
        // console.log(result.user);
        result.user.displayName = name;
        result.user.photoURL = imgUrl;
        setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <h1 className="text-2xl font-bold text-center my-4">
            Register your account
          </h1>
          <hr className=" my-3" />
          {/* name */}
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          {/* url */}
          <label className="label">Photo URL</label>
          <input
            name="imgUrl"
            type="text"
            className="input"
            placeholder="Photo URL"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          {/* password */}
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          {/* check box */}
          <label className="label">
            <input type="checkbox" defaultChecked className="checkbox" />
            Accept Term & Conditions
          </label>
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <p className="font-semibold mt-4 text-sm text-center">
            Have An Account ?
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
