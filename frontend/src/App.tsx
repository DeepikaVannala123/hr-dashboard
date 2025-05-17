import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Dashboard from './pages/Dashboard';
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";
import Navbar from "./components/Navbar";
import './App.css';

function AppWrapper() {
  const location = useLocation();

  // Hide Navbar on login page
  if (location.pathname === '/login') return <Routes>
    <Route path="/login" element={<Login />} />
  </Routes>;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/"
          element={
            <ProtectedRoute allowedRoles={["admin", "employee"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <AppWrapper />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
