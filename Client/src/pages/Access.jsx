import React from "react";
import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useSelector } from "react-redux";

function Access() {
  const [registeredUser, setRegisteredUser] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="text-center">
            <div className="text-center">
            <label htmlFor=""> Already Registered? </label>
          <button
            className={darkMode?"btn btn-outline-light mx-3":"btn btn-outline-dark mx-3"}
            onClick={() => {
              setRegisteredUser(true);
            }}
          >
            Sign In
          </button>
          </div>
          <div className="mt-1">
          <label htmlFor=""> Not Registered? </label>
          <button
            className={darkMode?"btn btn-outline-light mx-3":"btn btn-outline-dark mx-3"}
            onClick={() => {
              setRegisteredUser(false);
            }}
          >
            Sign Up
          </button>
          </div>
          {registeredUser ? <SignIn /> : <SignUp/>}
        </div>
      </div>
    </div>
  );
}

export default Access;
