import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import noop from "@utils/noop";
import cn from "classnames";

import s from "./Search.module.scss";

type SearchProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.ChangeEventHandler<HTMLFormElement>;
  loading?: boolean;
  className?: string;
};

const Search: React.FC<SearchProps> = ({
  value = "",
  onChange = noop,
  onSubmit = noop,
  loading = false,
  className = "",
}) => {
  return (
    <form className={cn(s.search, className)} onSubmit={onSubmit}>
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
