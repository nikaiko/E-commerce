import React from "react";

import filterIcon from "@assets/images/filter-icon.svg";
import Button from "@components/Button";

import s from "./Filter.module.scss";

const Filter: React.FC = () => {
  return (
    <Button className={s.filter}>
      <img src={filterIcon} alt="filter-icon" />
      <p className={s.filter__title}>Filter</p>
    </Button>
  );
};

export default Filter;
