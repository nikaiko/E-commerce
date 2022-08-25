import React from "react";

import filterIcon from "@assets/filter-icon.svg";
import filterTitle from "@assets/filter-title.svg";
import Button from "@components/Button";

import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <Button className={styles.filter}>
      <img src={filterIcon} alt="filter-icon" />
      <img src={filterTitle} alt="filter-title" />
    </Button>
  );
};

export default Filter;
