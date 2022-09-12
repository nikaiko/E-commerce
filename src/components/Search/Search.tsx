import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";

import s from "./Search.module.scss";

type SearchProps = {
  value: string;
  onChange: (e: any) => void;
  onSubmit?: (e: any) => void;
};

const Search: React.FC<SearchProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form className={s.search} onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        className={s.search__input}
        placeholder="Search title"
      />
      <Button className={s.search__button} type="submit">
        Find
      </Button>
    </form>
  );
};

export default Search;
