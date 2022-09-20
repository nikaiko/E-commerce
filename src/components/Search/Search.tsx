import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import noop from "@utils/noop";

import s from "./Search.module.scss";

type SearchProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.ChangeEventHandler<HTMLFormElement>;
  loading?: boolean;
};

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  onSubmit = noop,
  loading = false,
}) => {
  return (
    <form className={s.search} onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        className={s.search__input}
        placeholder="Search title"
        loading={loading}
      />
      <Button className={s.search__button} type="submit" loading={loading}>
        Find
      </Button>
    </form>
  );
};

export default Search;
