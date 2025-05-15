import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: "admin" | "employee") => {
    login({ name: role === "admin" ? "Admin User" : "Employee User", role });
    navigate("/");
  };

  return (
    <Stack spacing={2} alignItems="center" mt={4}>
      <Typography variant="h5">Login as:</Typography>
      <Button variant="contained" onClick={() => handleLogin("admin")}>
        Admin
      </Button>
      <Button variant="contained" onClick={() => handleLogin("employee")}>
        Employee
      </Button>
    </Stack>
  );
};

export default Login;
