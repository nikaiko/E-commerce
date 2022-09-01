import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import log from "@utils/log";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [, setQs] = useSearchParams({});

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    log(e.target);
    if (!search) {
      setQs({});
      return;
    }
    setQs({ search: search });
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <Input
        value={search}
        onChange={handleChange}
        className={styles.search__input}
        placeholder="Search property"
        name="search"
      />
      <Button className={styles.search__button} type="submit">
        Find
      </Button>
    </form>
  );
};

export default Search;
