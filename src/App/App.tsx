import React from "react";

import routes from "@configs/routes";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.main.mask} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={routes.products.mask} element={<Products />} />
        <Route path={routes.products.detail.mask} element={<ProductDetail />} />
        <Route
          path={routes.other.mask}
          element={<Navigate to={routes.main.mask} replace />}
        />
      </Route>
    </Routes>
  );
};

export default App;
