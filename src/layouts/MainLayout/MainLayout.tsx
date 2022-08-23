import React from "react";

import Header from "@components/Header";
import { Outlet } from "react-router-dom";
import "./MainLayout.scss";

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
