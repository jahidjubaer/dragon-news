import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../auth-provider/AuthContext";

const Register = () => {
  // get the function write in auth provider ;
  const { createNewUser, setUser, userProfileUpdate } = use(AuthContext);
  // form validation ;
  const [nameError, setNameError] = useState("");
  const [urlError, setUrlError] = useState("");

  const navigate = useNavigate();

  // url validation ;
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "([\\w-]+\\.)+[\\w-]{2,}" + // domain name
      "(\\:[0-9]{1,5})?" + // optional port
      "(\\/.*)?$", // path
    "i"
  );

  // handle register
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const imgUrl = event.target.imgUrl.value;
    // console.log({ name, email, password });

    // name validation ;
    if (name.length < 6) {
      setNameError("name should be six character");
      return;
    }
    // url validation ;
    if (pattern.test(imgUrl) !== true) {
      setUrlError("invalid url");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        navigate("/");
        userProfileUpdate({
          displayName: name,
          photoURL: imgUrl,
        })
          .then(() => {
            setUser(...result.user, name, imgUrl);
          })
          .catch(() => {
            setUser(result.user);
          });
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
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          {/* url */}
          <label className="label">Photo URL</label>
          <input
            name="imgUrl"
            type="text"
            className="input"
            placeholder="Photo URL"
          />
          {urlError && <p className="text-red-500 text-xm">{urlError}</p>}
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
