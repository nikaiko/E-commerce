import React from "react";

import cn from "classnames";
import "./MultiDropdown.scss";

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  pluralizeOptions: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  pluralizeOptions,
}) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const newTitle = pluralizeOptions(value);
    setTitle(newTitle);
  }, [value]);

  const handleClick = (option: Option) => {
    if (!isSelected(option)) {
      onChange([...value, option]);
    } else {
      const newValue = value.filter((current) => current.key !== option.key);
      onChange([...newValue]);
    }
  };

  const isSelected = (option: Option) => {
    return value.some((current) => current.key === option.key);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setOpen(!open)}
        disabled={disabled}
        className={cn(
          "dropdown__button",
          disabled && "dropdown__button_disabled"
        )}
      >
        {title}
      </button>
      {open && !disabled && (
        <ul className="dropdown__popup">
          {options.map((option) => (
            <li
              key={option.key}
              onClick={() => handleClick(option)}
              className={cn(
                "dropdown__option",
                isSelected(option) && "dropdown__option_active"
              )}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiDropdown;
