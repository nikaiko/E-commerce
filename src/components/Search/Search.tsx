import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

type SearchProps = {
  value: string;
  onChange: (e: any) => void;
  onClick?: () => void;
};

const Search: React.FC<SearchProps> = ({ value, onChange, onClick }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [title, setTitle] = React.useState(searchParams.get("title") || "");

  // const handleClick = () => {
  //   title ? setSearchParams({ title }) : setSearchParams({});
  // };

  // const handleChange = (e: any) => {
  //   setTitle(e.target.value || "");
  // };

  return (
    <div className={styles.search}>
      <Input
        value={value}
        onChange={onChange}
        className={styles.search__input}
        placeholder="Search property"
      />
      <Button className={styles.search__button} onClick={onClick}>
        Find
      </Button>
    </div>
  );
};

export default Search;
