import React from "react";

import cn from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./MenuButton.module.scss";

const MenuButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className={styles.menu}>
      <div
        className={open ? styles.menu__button_open : styles.menu__button}
        onClick={handleClick}
      >
        <span className={cn(styles.line, styles.line__top)} />
        <span className={cn(styles.line, styles.line__mid)} />
        <span className={cn(styles.line, styles.line__bot)} />
      </div>
      {open && (
        <nav className={styles.menu__popup}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.menu__link_active : styles.menu__link
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/basket"
            className={({ isActive }) =>
              isActive ? styles.menu__link_active : styles.menu__link
            }
          >
            Basket
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? styles.menu__link_active : styles.menu__link
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? styles.menu__link_active : styles.menu__link
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/article"
            className={({ isActive }) =>
              isActive ? styles.menu__link_active : styles.menu__link
            }
          >
            Article
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.menu__link_active : styles.menu__link
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
