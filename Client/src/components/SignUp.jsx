import React from 'react'
import { useSelector } from "react-redux";

function SignUp() {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <body class="text-center">
            <main class="form-signin">
              <form className="p-3 border border-dark border-3">
                <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="User 1"
                  />
                  <label for="floatingInput">User ID</label>
                </div>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="FirstUserOfUtterlyStupid"
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button class={darkMode?"w-100 btn btn-lg btn-dark":"w-100 btn btn-lg btn-primary"} type="submit">
                  Sign in
                </button>
              <p class="mt-5 mb-3 text-muted">© Utterly Stupid 2022</p>
              </form>
            </main>
          </body>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}

export default SignUp