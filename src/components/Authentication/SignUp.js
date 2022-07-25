import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import SignupLogo from "../../images/SignupLogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { signUp } = useAuth();

  const signUpHandler = async (e) => {
    e.preventDefault();
    toast("Signed up successfully", { position: toast.POSITION.TOP_CENTER });
    signUp(email, password)
      .then(() => history.push("/login"))
      .catch((err) => err);
  };

  return (
    <div className=" w-[22%] m-auto rounded-xl bg-gray-300 relative top-16 flex flex-col gap-4 p-5">
      <img src={SignupLogo} className="rounded-lg" alt="" />
      <form className=" flex flex-col gap-4" onSubmit={signUpHandler}>
        <input
          className=" rounded-lg outline-none border-none h-12 placeholder:text-xl text-xl p-2 bg-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className=" rounded-lg outline-none border-none h-12 placeholder:text-xl text-xl p-2 bg-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-semibold p-2 rounded-lg"
        >
          Sign Up
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Login;
