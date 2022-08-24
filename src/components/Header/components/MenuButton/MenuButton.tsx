import React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./MenuButton.module.scss";

const BurgerButton = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* <nav
        className={classNames(
          styles.menu__popup,
          `${show ? `${styles.menu__popup_open}` : ""}`
        )}
      >
        <Link to="/products" className={styles.menu__link}>
          Product
        </Link>
        <Link to="/services" className={styles.menu__link}>
          Services
        </Link>
        <Link to="/article" className={styles.menu__link}>
          Article
        </Link>
        <Link to="/about" className={styles.menu__link}>
          About Us
        </Link>
      </nav> */}
      <div
        className={`${styles.burger} ${open ? `${styles.open}` : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className={`${styles.burger_line} ${styles.top_line}`} />
        <span className={`${styles.burger_line} ${styles.mid_line}`} />
        <span className={`${styles.burger_line} ${styles.bottom_line}`} />
      </div>
    </>
  );
};

export default BurgerButton;
