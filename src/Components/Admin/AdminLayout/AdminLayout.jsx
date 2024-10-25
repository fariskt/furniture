import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminNavbar from "../Navbar/AdminNavbar";
import SideBar from "../Sidebar/SideBar";

const AdminLayout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/admin/login"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <AdminNavbar />}
      <SideBar/>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
