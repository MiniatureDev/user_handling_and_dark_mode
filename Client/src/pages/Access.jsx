import React from "react";
import { useState } from "react";
import SignIn from "./SignIn";

function Access() {
  const [registeredUser, setRegisteredUser] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
            <label htmlFor=""> Already Registered? </label>
          <button
            className="btn btn-outline-secondary mx-3"
            onClick={() => {
              setRegisteredUser(true);
            }}
          >
            Sign In
          </button>
          <button
            className="btn btn-outline-secondary mx-3"
            onClick={() => {
              setRegisteredUser(false);
            }}
          >
            Sign Up
          </button>
          {registeredUser ? <SignIn /> : <h1>Sign Up</h1>}
        </div>
      </div>
    </div>
  );
}

export default Access;
