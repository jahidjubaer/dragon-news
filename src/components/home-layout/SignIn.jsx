import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="flex flex-col my-4 space-y-4">
      <button className="btn   btn-outline    btn-secondary  ">
        <FcGoogle size={24} />
        Login with Google
      </button>
      <button className="btn  btn-outline  btb-primary  ">
        <FaGithub size={24} />
        Login with GitHub
      </button>
    </div>
  );
};

export default SignIn;
