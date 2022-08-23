import React from "react";

import { Link } from "react-router-dom";

import Logo from "./Logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Lalasia logo" />
      </Link>
      Header
    </header>
  );
};

export default Header;
