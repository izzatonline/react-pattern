import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "../components/Page404";
import Home from "../modules/Home";
import Login from "../modules/Login";
import Register from "../modules/Register";
import DashboardRoutes from "./DashboardRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app/*" element={<DashboardRoutes />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
