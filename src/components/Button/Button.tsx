import React from "react";

import WithLoader from "@components/WithLoader";
import cn from "classnames";

import s from "./Button.module.scss";

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
}

export type ButtonProps = {
  loading?: boolean;
  color?: ButtonColor;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  loading = false,
  color = ButtonColor.primary,
  className = "",
  disabled = false,
  children,
  ...rest
}) => {
  const isBlocked = loading || disabled;

  return (
    <button
      className={cn(
        s.button,
        isBlocked ? s.button_disabled : s[`button_color-${color}`],
        className
      )}
      disabled={isBlocked}
      {...rest}
    >
      <WithLoader loading={loading} className={s.loader}>
        {children}
      </WithLoader>
    </button>
  );
};

export default Button;
