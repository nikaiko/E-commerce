import React from "react";

import WithLoader from "@components/WithLoader";
import ButtonColor from "@configs/ButtonColor";
import classNames from "classnames";

import styles from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  loading = false,
  color = ButtonColor.primary,
  className = "",
  disabled,
  children,
  ...rest
}) => {
  const isBlocked = loading || disabled;
  const isPrimary = color === ButtonColor.primary;

  return (
    <button
      className={classNames(
        styles.button,
        isBlocked
          ? styles.button_disabled
          : isPrimary
          ? styles.button_primary
          : styles.button_secondary,
        className
      )}
      disabled={isBlocked}
      {...rest}
    >
      <WithLoader loading={loading} className={styles.loader}>
        {children}
      </WithLoader>
    </button>
  );
};

export default Button;
