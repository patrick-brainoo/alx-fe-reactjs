import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // this will be our custom hook

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
