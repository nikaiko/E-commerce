import React from "react";

import cn from "classnames";
import { NavLink } from "react-router-dom";

import s from "./MenuButton.module.scss";

const MenuButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className={s.menu}>
      <div
        className={open ? s.menu__button_open : s.menu__button}
        onClick={handleClick}
      >
        <span className={cn(s.line, s.line__top)} />
        <span className={cn(s.line, s.line__mid)} />
        <span className={cn(s.line, s.line__bot)} />
      </div>
      {open && (
        <nav className={s.menu__popup}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? s.menu__link_active : s.menu__link
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/basket"
            className={({ isActive }) =>
              isActive ? s.menu__link_active : s.menu__link
            }
          >
            Basket
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? s.menu__link_active : s.menu__link
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? s.menu__link_active : s.menu__link
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/article"
            className={({ isActive }) =>
              isActive ? s.menu__link_active : s.menu__link
            }
          >
            Article
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? s.menu__link_active : s.menu__link
            }
          >
            About Us
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default MenuButton;
