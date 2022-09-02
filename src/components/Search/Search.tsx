import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("search") || "");

  const handleClick = () => {
    search ? setSearchParams({ search }) : setSearchParams({});
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value || "");
  };

  return (
    <div className={styles.search}>
      <Input
        value={search}
        onChange={handleChange}
        className={styles.search__input}
        placeholder="Search property"
      />
      <Button className={styles.search__button} onClick={handleClick}>
        Find
      </Button>
    </div>
  );
};

export default Search;
