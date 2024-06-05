import { Outlet } from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <MainMenu />
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
