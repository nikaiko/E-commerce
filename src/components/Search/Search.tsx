import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";

import s from "./Search.module.scss";

type SearchProps = {
  value: string;
  onChange: (e: any) => void;
  onClick?: () => void;
};

const Search: React.FC<SearchProps> = ({ value, onChange, onClick }) => {
  return (
    <div className={s.search}>
      <Input
        value={value}
        onChange={onChange}
        className={s.search__input}
        placeholder="Search property"
      />
      <Button className={s.search__button} onClick={onClick}>
        Find
      </Button>
    </div>
  );
};

export default Search;
