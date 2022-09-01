import React from "react";

import classNames from "classnames";

import styles from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className = "",
  disabled = false,
  type = "text",
  ...rest
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={classNames(
        styles.input,
        disabled && styles.input_disabled,
        className
      )}
      disabled={disabled}
      {...rest}
    />
  );
};

export default Input;
