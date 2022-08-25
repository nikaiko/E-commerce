import React from "react";

import searchIcon from "@assets/search-icon.svg";
import Button from "@components/Button";
import Input from "@components/Input";

import styles from "./Search.module.scss";

const Search = () => {
  const [search, setSearch] = React.useState("");

  return (
    <div className={styles.search}>
      <Input value={search} onChange={setSearch} />
      <Button />
      <img src={searchIcon} alt="search-icon" className={styles.search__icon} />
    </div>
  );
};

export default Search;
