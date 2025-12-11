import { Navigate } from "react-router-dom";

const isAuthenticated = false; // Change to true to simulate login

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
