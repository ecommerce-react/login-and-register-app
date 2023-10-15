import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
