"use client";

import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

const Login = () => {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const [reveledPassword, setReveledPassword] = useState(false);

  const handleBlurName = () => {
    if (inputName === "") {
      setIsNameFocus(false);
    }
  };
  const handleBlurPassword = () => {
    if (inputPassword === "") {
      setIsPasswordFocus(false);
    }
  };

  return (
    <form className="flex flex-col justify-center alin-center w-120 p-8 bg-gray-200 gap-12 rounded-lg shadow-[0rem_0rem_.5rem_0rem_rgba(122,53,122,1)]">
      <h1 className="text-3xl font-semibold">Sign In</h1>
      <div className="flex flex-col gap-4">
        <div className="relative w-80 h-12">
          <label htmlFor="name" className="w-full h-full">
            <input
              className="w-full h-full peer pl-2 pt-2 bg-gray-200 focus:outline-none hover:bg-gray-300 focus:bg-gray-100 border-solid border border-slate-700 focus:border-purple-700 focus:shadow-[0rem_0rem_.25rem_0rem_rgba(122,53,122,1)] text-sm font-sans rounded"
              type="text"
              name="name"
              id="name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              onFocus={() => setIsNameFocus(true)}
              onBlur={handleBlurName}
            />
            <span
              className={`absolute left-0 translate-y-[-50%] transition-all ease-in-out ${
                isNameFocus
                  ? "top-0 mt-2 ml-1 text-xs font-semibold"
                  : "top-2/4 ml-2 text-sm"
              } `}
            >
              Name
            </span>
          </label>
        </div>
        <div className="relative w-80 h-12">
          <label htmlFor="password" className="w-full h-full">
            <span
              className={`absolute left-0 translate-y-[-50%] transition-all ease-in-out ${
                isPasswordFocus
                  ? "top-0 mt-2 ml-1 text-xs font-semibold"
                  : "top-2/4 ml-2 text-sm"
              } `}
            >
              Password
            </span>
            <input
              className="peer w-full h-full pl-2 pt-2 bg-gray-200 focus:outline-none hover:bg-gray-300 focus:bg-gray-100 border-solid border border-slate-700 focus:border-purple-700 focus:shadow-[0rem_0rem_.25rem_0rem_rgba(122,53,122,1)] text-sm font-sans rounded"
              type={`${reveledPassword ? "text" : "password"}`}
              name="password"
              id="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              onFocus={() => setIsPasswordFocus(true)}
              onBlur={handleBlurPassword}
            />
            <span className="absolute right-0 translate-y-[-50%] top-2/4 mr-2">
              {reveledPassword ? (
                <PiEyeSlash
                  className="text-lg cursor-pointer"
                  onClick={() => setReveledPassword(!reveledPassword)}
                />
              ) : (
                <PiEye
                  className="text-lg cursor-pointer"
                  onClick={() => setReveledPassword(!reveledPassword)}
                />
              )}
            </span>
          </label>
          <span className="text-xs hover:text-purple-700 cursor-pointer select-none">
            I forgot my password
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="w-80 h-12 bg-purple-500 hover:bg-purple-600 rounded text-gray-900 font-semibold select-none"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
