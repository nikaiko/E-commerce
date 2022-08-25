import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";

import styles from "./Search.module.scss";

const Search = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className={styles.search}>
      <Input
        value={search}
        onChange={setSearch}
        className={styles.search__input}
        placeholder="Search property"
      />
      <Button className={styles.search__button} />
    </div>
  );
};

export default Search;
