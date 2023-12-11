import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/plane-icon.png";
const Header = () => {
  const store = useSelector((store) => store);
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <h2>Flight radar for the most beautiful Flower.</h2>
      </div>

      <h4>{store.isLoading && "Flights are being prepared..."}</h4>
    </header>
  );
};

export default Header;
