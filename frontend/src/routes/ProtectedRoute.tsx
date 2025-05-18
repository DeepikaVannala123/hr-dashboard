import { Navigate } from "react-router-dom"; // Import navigation component for redirects
import { useAuth } from "../context/AuthContext"; // Custom hook to access authentication context
import { JSX } from "react"; // Import JSX type for typing props

// ProtectedRoute component restricts access based on authentication and user roles
const ProtectedRoute = ({ children, allowedRoles }: { children: JSX.Element; allowedRoles: string[] }) => {
  const { user } = useAuth(); // Get current user from auth context

  // If user is not authenticated, redirect to login page
  if (!user) return <Navigate to="/login" replace />;
  // If user's role is not allowed, redirect to unauthorized page
  if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  // If authenticated and authorized, render the child component(s)
  return children;
};

export default ProtectedRoute; // Export the ProtectedRoute component