import React from "react";

import routes from "@configs/routes";
import cn from "classnames";
import * as Router from "react-router-dom";

import s from "./MenuButton.module.scss";

const MenuButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const styleLink = React.useCallback(({ isActive }: { isActive: boolean }) => {
    return cn(s.menu__link, isActive && s.menu__link_active);
  }, []);

  const handleClick = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={s.menu}>
      <div
        className={cn(s.menu__button, open && s.menu__button_open)}
        onClick={handleClick}
      >
        <span className={cn(s.line, s.line__top)} />
        <span className={cn(s.line, s.line__mid)} />
        <span className={cn(s.line, s.line__bot)} />
      </div>
      {open && (
        <nav className={s.menu__popup}>
          <Router.NavLink
            to={routes.profile.mask}
            className={styleLink}
            onClick={handleClick}
          >
            Profile
          </Router.NavLink>
          <Router.NavLink
            to={routes.basket.mask}
            className={styleLink}
            onClick={handleClick}
          >
            Basket
          </Router.NavLink>
          <Router.NavLink
            to={routes.products.mask}
            className={styleLink}
            onClick={handleClick}
          >
            Product
          </Router.NavLink>
          <Router.NavLink
            to={routes.services.mask}
            className={styleLink}
            onClick={handleClick}
          >
            Services
          </Router.NavLink>
          <Router.NavLink
            to={routes.article.mask}
            className={styleLink}
            onClick={handleClick}
          >
            Article
          </Router.NavLink>
          <Router.NavLink
            to={routes.about.mask}
            className={styleLink}
            onClick={handleClick}
          >
            About Us
          </Router.NavLink>
        </nav>
      )}
    </div>
  );
};

export default MenuButton;
