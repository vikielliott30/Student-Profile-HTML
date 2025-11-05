import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/AuthHook";

export default function PrivateRoute() {
  const { user } = useAuth();
  const location = useLocation();
  return user ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />;
}