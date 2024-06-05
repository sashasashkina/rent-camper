import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogePage = lazy(() => import("./pages/CatalogePage/CatalogePage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const Layout = lazy(() => import("./components/Layout/Layout.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
