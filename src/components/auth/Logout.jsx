import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({})
    navigate("/login");
  };
  return (
    <button onClick={handleLogout} className="icon-btn">
      <img src={LogoutIcon} alt="" />
    </button>
  );
};

export default Logout;
