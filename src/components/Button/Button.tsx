import React from "react";

import WithLoader from "@components/WithLoader";
import classNames from "classnames";

import "./Button.scss";

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
}

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

  return (
    <button
      {...rest}
      className={classNames(
        "button",
        `${isBlocked ? "button_disabled" : `button_color-${color}`}`,
        `${className}`
      )}
      disabled={isBlocked}
    >
      <WithLoader loading={loading}>{children}</WithLoader>
    </button>
  );
};

export default Button;
