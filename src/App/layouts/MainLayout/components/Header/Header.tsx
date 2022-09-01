import React from "react";

import basketIcon from "@assets/images/basket-icon.svg";
import logoSvg from "@assets/images/logo.svg";
import profileIcon from "@assets/images/profile-icon.svg";
import titleSvg from "@assets/images/title.svg";
import { Link, NavLink } from "react-router-dom";

import MenuButton from "./components/MenuButton";
import s from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.header__logoTitle}>
        <img src={logoSvg} alt="logo-svg" className={s.header__logo} />
        <img src={titleSvg} alt="title" className={s.header__title} />
      </Link>
      <nav className={s.header__nav}>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? s.header__link_active : s.header__link
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? s.header__link_active : s.header__link
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/article"
          className={({ isActive }) =>
            isActive ? s.header__link_active : s.header__link
          }
        >
          Article
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? s.header__link_active : s.header__link
          }
        >
          About Us
        </NavLink>
      </nav>
      <div className={s.header__icons}>
        <Link to="/profile">
          <img src={profileIcon} alt="profile-icon" />
        </Link>
        <Link to="/basket">
          <img src={basketIcon} alt="basket-icon" />
        </Link>
      </div>
      <MenuButton />
    </header>
  );
};

export default Header;
