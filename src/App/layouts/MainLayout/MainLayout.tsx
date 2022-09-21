import React from "react";

import * as Router from "react-router-dom";

import Header from "./components/Header";
import s from "./MainLayout.module.scss";

const MainLayout: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        <Router.Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
