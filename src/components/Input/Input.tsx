import React from "react";

import cn from "classnames";

import s from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  loading?: boolean;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  loading = false,
  disabled,
  className,
  type = "text",
  ...rest
}) => {
  const isBlocked = loading || disabled;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={cn(s.input, disabled && s.input_disabled, className)}
      disabled={isBlocked}
      {...rest}
    />
  );
};

export default Input;
