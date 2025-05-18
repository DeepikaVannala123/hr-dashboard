import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of a User object
type User = {
  name: string;
  role: "admin" | "employee";
};

// Define the context type, including user and auth functions
type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

// Create the AuthContext with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component to wrap the app and provide auth state
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // State to hold the current user (null if not logged in)
  const [user, setUser] = useState<User | null>(null);

  // Function to log in a user
  const login = (user: User) => setUser(user);
  // Function to log out the user
  const logout = () => setUser(null);

  // Provide the user and auth functions to children components
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Ensure the hook is used within an AuthProvider
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};