import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: "admin" | "employee") => {
    login({ name: role === "admin" ? "Admin User" : "Employee User", role });
    navigate("/");
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
      <Button variant="contained" onClick={() => handleLogin("admin")}>
        Admin
      </Button>
      <Button variant="contained" onClick={() => handleLogin("employee")}>
        Employee
      </Button>
    </Stack>
  </CardContent>
</Card>

  );
};

export default Login;
