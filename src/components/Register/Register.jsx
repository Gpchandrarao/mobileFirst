import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const heandelPassword = (e) => {
    setPassword(e.target.value);
  };

  const heandelUsername = (e) => {
    setUsername(e.target.value);
  };

  const successed = (token) => {
    navigate("/");
  };

  const failure = () => {
    navigate("/login");
  };
  const heandelSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "https://swivl-backend.onrender.com/users/register";

    const userDetails = { username, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    try {
      const response = await fetch(apiUrl, options);
      console.log(response.ok);
      if (response.ok === true) {
        const data = await response.json();
        successed(data.jwt_token);
      } else {
        failure();
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  return (
    <div className="d-flex flex-row justify-content-center align-items-center w-100  min-vh-100 register-container">
      <form
        className="d-flex flex-column  p-5 rounded h-100 w-25 shadow-lg bg-transparent"
        onSubmit={heandelSubmit}
      >
        <h1 className="text-center font-weight-bolder text-monospace">
          Regisset
        </h1>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label font-weight-bold"
          >
            <h5>Username</h5>
          </label>
          <input
            type="text"
            className="form-control "
            id="exampleInputEmail1"
            value={username}
            onChange={heandelUsername}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label font-weight-bold"
          >
            <h5>Password</h5>
          </label>
          <input
            type="password"
            className="form-control outline-none"
            id="exampleInputPassword1"
            value={password}
            onChange={heandelPassword}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success font-weight-bold display-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
