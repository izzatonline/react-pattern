import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../modules/Dashboard";
import Member from "../modules/Dashboard/Member";
import Settings from "../modules/Dashboard/Settings";
import Dictionary from "../modules/Dictionary";

const DashboardRoutes = () => {
  const isAuth = true;

  // early return pattern
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dictionary" element={<Dictionary />} />
      <Route path="/members" element={<Member />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default DashboardRoutes;
