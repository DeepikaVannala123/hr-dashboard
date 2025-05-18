import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Dashboard from './pages/Dashboard';
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from "./components/Footer";

// AppWrapper handles conditional rendering based on route
function AppWrapper() {
  const location = useLocation();

  // Hide Navbar on login page by only rendering the login route
  if (location.pathname === '/login') return <Routes>
    <Route path="/login" element={<Login />} />
  </Routes>;

  return (
    <>
      {/* Show Navbar on all pages except login */}
      <Navbar />
      <Routes>
        {/* Unauthorized page route */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* Protected dashboard route, only accessible by admin and employee roles */}
        <Route
          path="/"
          element={
            <ProtectedRoute  allowedRoles={["admin", "employee"]}>
              <Dashboard  />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* Footer is always visible except on login */}
      <Footer/>
    </>
  );
}

// App sets up providers and router for the entire app
function App() {
  return (
    <Router>
      {/* AuthProvider manages authentication state */}
      <AuthProvider>
        {/* AppProvider manages global app state */}
        <AppProvider>
          {/* AppWrapper handles routing and layout */}
          <AppWrapper />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;