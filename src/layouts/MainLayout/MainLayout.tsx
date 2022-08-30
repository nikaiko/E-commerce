import React from "react";

import Header from "@components/Header";
import { Outlet } from "react-router-dom";

import s from "./MainLayout.module.scss";

const MainLayout: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
