import React from "react";

import basketIcon from "@assets/images/basket-icon.svg";
import logoSvg from "@assets/images/logo.svg";
import profileIcon from "@assets/images/profile-icon.svg";
import titleSvg from "@assets/images/title.svg";
import routes from "@configs/routes";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";

import MenuButton from "./components/MenuButton";
import s from "./Header.module.scss";

const Header: React.FC = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    `${s.header__link} ${isActive && s.header__link_active}`;
  // isActive ? s.header__link_active : s.header__link;

  return (
    <header className={s.header}>
      <Link to={routes.main.mask} className={s.header__logoTitle}>
        <img src={logoSvg} alt="logo-svg" className={s.header__logo} />
        <img src={titleSvg} alt="title" className={s.header__title} />
      </Link>
      <nav className={s.header__nav}>
        <NavLink to={routes.products.mask} className={setActive}>
          Product
        </NavLink>
        <NavLink to={routes.services.mask} className={setActive}>
          Services
        </NavLink>
        <NavLink to={routes.article.mask} className={setActive}>
          Article
        </NavLink>
        <NavLink to={routes.about.mask} className={setActive}>
          About Us
        </NavLink>
      </nav>
      <div className={s.header__icons}>
        <Link to={routes.profile.mask}>
          <img src={profileIcon} alt="profile-icon" />
        </Link>
        <Link to={routes.basket.mask}>
          <img src={basketIcon} alt="basket-icon" />
        </Link>
      </div>
      <MenuButton />
    </header>
  );
};

export default Header;
