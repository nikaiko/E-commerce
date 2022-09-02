import React, { useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchparams.get("search") || "");

  const handleClick = () => {
    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={styles.search}>
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value || "");
        }}
        className={styles.search__input}
        placeholder="Search property"
        type={"text"}
      />
      <Button className={styles.search__button} onClick={handleClick}>
        Find
      </Button>
    </div>
  );
};

export default Search;
