import { useAuth } from "../context/AuthContext"; // Import custom authentication context
import { useNavigate } from "react-router-dom"; // Import navigation hook from React Router
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material"; // Import MUI components

const Login = () => {
  const { login } = useAuth(); // Get login function from AuthContext
  const navigate = useNavigate(); // Get navigation function

  // Handle login for both admin and employee roles
  const handleLogin = (role: "admin" | "employee") => {
    // Call login with user info based on role
    login({ name: role === "admin" ? "Admin User" : "Employee User", role });
    navigate("/"); // Redirect to home page after login
  };

  return (

<Card sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 2 }}>
  <CardContent>
    {/* Login Image */}
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
        alt="Login"
        style={{ width: '100%', maxWidth: 250 }}
      />
    </Box>

    {/* Title */}
    <Stack spacing={2} alignItems="center" mb={2}>
      <Typography variant="h5">Login as</Typography>
    </Stack>

    {/* Buttons Side by Side */}
    <Stack direction="row" spacing={2} justifyContent="center">
      {/* Admin login button */}
      <Button variant="contained" onClick={() => handleLogin("admin")}>
        Admin
      </Button>
      {/* Employee login button */}
      <Button variant="contained" onClick={() => handleLogin("employee")}>
        Employee
      </Button>
    </Stack>
  </CardContent>
</Card>

  );
};

export default Login;