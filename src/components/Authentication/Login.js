import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle } from "../../Firebase";
import { useAuth } from "../Context/AuthContext";
import LoginAvatar from "../../images/LoginAvatar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const loginHandler = async (event) => {
    event.preventDefault();
    toast.success("Logged in successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
    login(email, password)
      .then(() => history.push("/"))
      .catch((err) => err);
  };

  return (
    <div className=" w-[22%] m-auto rounded-xl bg-gray-300 relative top-16 flex flex-col gap-4 p-5">
      <img
        src={LoginAvatar}
        className=" m-auto w-24 h-24 rounded-full"
        alt=""
      />
      <form className=" flex flex-col gap-4" onSubmit={loginHandler}>
        <input
          className=" outline-none rounded-lg border-none h-12 placeholder:text-xl text-xl p-2 bg-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className=" outline-none rounded-lg border-none h-12 placeholder:text-xl text-xl p-2 bg-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold flex justify-center p-2 rounded-lg"
        >
          Login
        </button>
        <ToastContainer />
      </form>
      <Link
        to="/signUp"
        type="submit"
        className=" w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold flex justify-center text-lg p-2 rounded-lg"
      >
        New user ? &nbsp; <span className=" underline">Sign Up</span>
      </Link>
      <button
        className="  items-center text-lg gap-2  bg-gradient-to-r from-indigo-400 via-purple-400 font-semibold to-pink-400 flex justify-center p-2 rounded-lg"
        onClick={signInWithGoogle}
      >
        <FcGoogle /> Sign in with Google
      </button>
    </div>
  );
}

export default Login;
