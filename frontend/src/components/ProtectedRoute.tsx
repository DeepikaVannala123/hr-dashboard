import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { JSX } from "react";

const ProtectedRoute = ({ children, allowedRoles }: { children: JSX.Element; allowedRoles: string[] }) => {
  const { user } = useAuth();

  // If there is no authenticated user, redirect to login page
  if (!user) return <Navigate to="/login" replace />;
  // If the user's role is not allowed, redirect to unauthorized page
  if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  // Render the protected children if user is authenticated and authorized
  return children;
};

export default ProtectedRoute;