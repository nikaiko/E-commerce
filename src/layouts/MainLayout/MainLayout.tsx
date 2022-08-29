import React from "react";

import Header from "@components/Header";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";

const MainLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
