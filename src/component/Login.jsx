import axios from "axios";
import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Login.scss";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  //   const { setAUth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const response = await axios.post(
        "https://caccf-backend-core.herokuapp.com/api/v1/admin/auth/login/",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data.data);
      localStorage.setItem("token", response.data.data);
      //   setAUth(response.data.data);
      navigate("/home");
      setEmail("");
      setPassword("");
    } catch (err) {
      //   setError(true);
      if (err) {
        setErrMsg("invalid credentials");
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  return (
    <>
      <div className="container">
        <p ref={errRef} className={error ? "err-message" : "off-screen"}>
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              ref={userRef}
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
