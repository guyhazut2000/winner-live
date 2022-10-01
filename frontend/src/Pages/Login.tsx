//icons
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
//components
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
 

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 shadow-lg p-3 mb-5 bg-white rounded">
          <h1 className="h3 mb-3 fw-normal text-center"> Login</h1>
          <form className="form-outline mb-4">
            <div className="row mb-3">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <AiOutlineMail className="" size={32} />
              </div>
              <div className="col-11">
                <div className="form-floating ">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                  />
                  <label className="form-label" htmlFor="emailInput">
                    Email
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <RiLockPasswordLine
                  className="d-flex justify-content-center align-content-center"
                  size={32}
                />
              </div>
              <div className="col-11">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Password"
                  />
                  <label className="form-label" htmlFor="passwordInput">
                    Password
                  </label>
                </div>
              </div>
            </div>
            <br />
            <div className="row mb-4">
              <div className="col ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                  />
                  <label className="form-check-label" htmlFor="checkbox">
                    Remember me ?
                  </label>
                </div>
              </div>
              <br />
              <br />
              <div className="col d-flex justify-content-end">
                <p className="">
                  Forgot
                  <Link className="text-decoration-none" to="/forgot-password">
                    <span className="fw-bold"> Password ?</span>
                  </Link>
                </p>
              </div>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
            <hr />
            <div className="text-center my-2 mx-2">
              <p className="d-flex align-items-center justify-content-center">
                Not a Member ?
                <Link className="text-decoration-none" to="/sign-up">
                  <div className="mx-2 fw-bold">Register</div>
                </Link>
              </p>
              <div className="mt-4 social-icons d-flex justify-content-center gap-5  ">
                <div
                  className="social-icons-item facebook"
                  role="button"
                >
                  <FaFacebook className="icon"size={32} />
                </div>
                <div className="social-icons-item google" role="button">
                  <FaGoogle className="icon"size={32} />
                </div>
                <div className="social-icons-item twitter" role="button">
                  <FaTwitter className="icon"size={32} />
                </div>
              </div>
            </div>

            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
          </form>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default Login;
