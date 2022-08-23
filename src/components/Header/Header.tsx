import React from "react";

import { Link } from "react-router-dom";

import Bag from "./components/Bag";
import Logo from "./components/Logo";
import User from "./components/User";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <Logo />
      </Link>
      <div className="header__nav">
        <Link to="/product">Product</Link>
        <Link to="/setvices">Setvices</Link>
        <Link to="/article">Article</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="header__icons">
        <Bag />
        <User />
      </div>
    </header>
  );
};

export default Header;
