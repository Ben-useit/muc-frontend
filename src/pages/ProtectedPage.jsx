import { Outlet, Navigate } from "react-router-dom";
import { useAppContext } from "../context";

const ProtectedPage = () => {
  const { user } = useAppContext();
  return user ? <Outlet /> : <Navigate to="/welcome" />;
};

export default ProtectedPage;
