import "./Menu.css";
import Logo from "../../assets/Wallet logo.svg";
import React from "react";

const Menu = () => {
  return (
    <header>
      <a href="#principal">
        <img src={Logo} alt="" />
      </a>

      <nav>
        <a id="Link" href="#login">Sign up</a>
        <button>Log in</button>
      </nav>
    </header>
  );
};

export default Menu;
