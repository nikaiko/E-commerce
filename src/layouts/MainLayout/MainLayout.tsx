import React from "react";

import Header from "@components/Header";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
