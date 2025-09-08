import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, signIn } from "../service/FirebaseService";
import { toast } from "react-toastify";

const LoginDiv = () => {
  const [signState, setSignState] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signState === "Sign In") {
      const user = await signIn(email, password);
      if (user) {
        toast.success("Sign in successful.");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      }
      // Errors are handled in signIn function
    } else {
      const user = await signUp(name, email, password);
      if (user) {
        toast.success("Account created! Log in now.");
        setEmail("");
        setPassword("");
        setName("");
        setSignState("Sign In");
      }
      // Errors are handled in signUp function
    }
  };

  const inputStyle =
    "mb-6 p-3 bg-zinc-800 rounded-sm outline-none focus:outline-red-600";

  return (
    <div className="netflix-bg relative flex justify-center items-center h-screen">
      <div className="absolute top-4 left-16">
        <img
          onClick={() => navigate("/")}
          className="w-[164px] h-[40px] pl-[16px] cursor-pointer"
          src="/Netflix-logo.png"
          alt=""
        />
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className="p-14 flex flex-col w-[390px] bg-black/70 rounded-md">
          <p className="text-2xl font-bold mb-6">{signState}</p>
          {signState === "Sign In" ? null : (
            <input
              className={inputStyle}
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            className={inputStyle}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-red-600 px-7 py-2 rounded-sm text-xl mb-2">
            {signState}
          </button>
          <div className="flex justify-between mb-6">
            <div>
              <input type="checkbox" />
              {" "}Remember Me
            </div>
            <p>Need Help?</p>
          </div>
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                className="font-medium cursor-pointer"
                onClick={() => setSignState("Sign Up")}
              >
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Alredy have account?{" "}
              <span
                className="font-medium cursor-pointer"
                onClick={() => setSignState("Sign In")}
              >
                Sign in now
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginDiv;
