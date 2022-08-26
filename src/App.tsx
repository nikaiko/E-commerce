import React from "react";

import ROUTES from "@configs/routes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainLayout />}>
          <Route index element={<Products />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route
            path={ROUTES.OTHER}
            element={<Navigate to={ROUTES.MAIN} replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
