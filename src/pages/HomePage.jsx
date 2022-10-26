import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <>
      <div>HomePage</div>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default HomePage;
