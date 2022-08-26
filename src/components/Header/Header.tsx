import React from "react";

import basketIcon from "@assets/images/basket-icon.svg";
import logoSvg from "@assets/images/logo.svg";
import profileIcon from "@assets/images/profile-icon.svg";
import titleSvg from "@assets/images/title.svg";
import { Link, NavLink } from "react-router-dom";

import MenuButton from "./components/MenuButton";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logoTitle}>
        <img src={logoSvg} alt="logo-svg" className={styles.header__logo} />
        <img src={titleSvg} alt="title" className={styles.header__title} />
      </Link>
      <nav className={styles.header__nav}>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? styles.header__link_active : styles.header__link
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? styles.header__link_active : styles.header__link
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/article"
          className={({ isActive }) =>
            isActive ? styles.header__link_active : styles.header__link
          }
        >
          Article
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.header__link_active : styles.header__link
          }
        >
          About Us
        </NavLink>
      </nav>
      <div className={styles.header__icons}>
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
