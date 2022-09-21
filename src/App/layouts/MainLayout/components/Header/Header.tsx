import React from "react";

import basketIcon from "@assets/images/basket-icon.svg";
import logoSvg from "@assets/images/logo.svg";
import profileIcon from "@assets/images/profile-icon.svg";
import titleSvg from "@assets/images/title.svg";
import routes from "@configs/routes";
import cn from "classnames";
import * as Router from "react-router-dom";

import MenuButton from "./components/MenuButton";
import s from "./Header.module.scss";

const Header: React.FC = () => {
  const styleLink = React.useCallback(({ isActive }: { isActive: boolean }) => {
    return cn(s.header__link, isActive && s.header__link_active);
  }, []);

  return (
    <header className={s.header}>
      <Router.Link to={routes.main.mask} className={s.header__logoTitle}>
        <img src={logoSvg} alt="logo-svg" className={s.header__logo} />
        <img src={titleSvg} alt="title" className={s.header__title} />
      </Router.Link>
      <nav className={s.header__nav}>
        <Router.NavLink to={routes.products.mask} className={styleLink}>
          Product
        </Router.NavLink>
        <Router.NavLink to={routes.services.mask} className={styleLink}>
          Services
        </Router.NavLink>
        <Router.NavLink to={routes.article.mask} className={styleLink}>
          Article
        </Router.NavLink>
        <Router.NavLink to={routes.about.mask} className={styleLink}>
          About Us
        </Router.NavLink>
      </nav>
      <div className={s.header__icons}>
        <Router.Link to={routes.profile.mask}>
          <img src={profileIcon} alt="profile-icon" />
        </Router.Link>
        <Router.Link to={routes.basket.mask}>
          <img src={basketIcon} alt="basket-icon" />
        </Router.Link>
      </div>
      <MenuButton />
    </header>
  );
};

export default Header;
