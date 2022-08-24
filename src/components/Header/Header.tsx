import React from "react";

import bagIcon from "@assets/bag-icon.svg";
import logoSvg from "@assets/logo.svg";
import title from "@assets/title.svg";
import userIcon from "@assets/user-icon.svg";
import classNames from "classnames";
import { Link } from "react-router-dom";

import MenuButton from "./components/MenuButton";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logoTitle}>
        <img src={logoSvg} alt="logo-svg" className={styles.header__logo} />
        <img src={title} alt="title" className={styles.header__title} />
      </Link>
      <nav className={styles.header__nav}>
        <Link
          to="/products"
          className={classNames(
            styles.header__link,
            styles.header__link_active
          )}
        >
          Product
        </Link>
        <Link to="/services" className={styles.header__link}>
          Services
        </Link>
        <Link to="/article" className={styles.header__link}>
          Article
        </Link>
        <Link to="/about" className={styles.header__link}>
          About Us
        </Link>
      </nav>
      <div className={styles.header__icons}>
        <img src={userIcon} alt="user-icon" />
        <img src={bagIcon} alt="bag-icon" />
      </div>
      <MenuButton />
    </header>
  );
};

export default Header;
