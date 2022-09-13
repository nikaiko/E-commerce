import React from "react";

import routes from "@configs/routes";
import * as Router from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProductsLayout from "./layouts/ProductsLayout";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";

const App: React.FC = () => {
  return (
    <Router.BrowserRouter>
      <Router.Routes>
        <Router.Route path={routes.main.mask} element={<MainLayout />}>
          <Router.Route index element={<MainPage />} />
          <Router.Route
            path={routes.products.mask}
            element={<ProductsLayout />}
          >
            <Router.Route index element={<ProductsPage />} />
          </Router.Route>
          <Router.Route
            path={routes.products.detail.mask}
            element={<ProductDetailPage />}
          />
          <Router.Route
            path={routes.other.mask}
            element={<Router.Navigate to={routes.main.mask} replace />}
          />
        </Router.Route>
      </Router.Routes>
    </Router.BrowserRouter>
  );
};

export default App;
