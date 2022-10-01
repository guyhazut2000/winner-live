//icons
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
//css
// components
import { ChangeEvent, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import UserService from "../services/UserService";

const SignUp :React.FC = () => {
  interface User {
    name: String;
    email: String;
    password: String;
    repeatPassword: String;
  }

  const initialUserState: User = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const [user, setUser] = useState(initialUserState);

  async function handleSubmit(e: MouseEvent): Promise<any>  {
    e.preventDefault()

    try {
      const result = await UserService.getUserByEmail(user.email);
      console.log(result);
    } catch (error) {
      throw Error('sign up failed. ' + error)
    }

  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const value = e.target.value;
    const key = e.target.id;
    setUser({ ...user, [key]: value });
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 shadow-lg p-3 mb-5 bg-white rounded">
          <h1 className="h3 mb-3 fw-normal text-center">Please Sign Up</h1>
          <form className="form-outline mb-4" autoComplete="off">
            <div className="row mb-3">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <BsPerson className="" size={32} />
              </div>
              <div className="col-11">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="emailInput">Name</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <AiOutlineMail className="" size={32} />
              </div>
              <div className="col-11">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    onChange={handleChange}
                  />
                  <label htmlFor="emailInput">Email</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <RiLockPasswordLine className="" size={32} />
              </div>
              <div className="col-11">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <label htmlFor="passwordInput">Password</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <RiLockPasswordLine className="" size={32} />
              </div>
              <div className="col-11">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                  <label htmlFor="confirmPasswordInput">Confirm Password</label>
                </div>
              </div>
            </div>

            <br />
            <p className="text-center">
              Already have an account ?
              <Link className="fw-bold text-decoration-none" to="/login">
                Login
              </Link>
            </p>
            <button
              className="w-100 btn btn-lg btn-primary mt-3"
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
          </form>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default SignUp;
