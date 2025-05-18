// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // user = { username }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(); // Clear auth context
    setAnchorEl(null);
    navigate('/login'); // redirect to login page
  };

  return (
    <AppBar position='fixed' 
  sx={{ backgroundColor: '#ffffff', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)' }} >
  <Toolbar>
    {/* Logo and Role */}
    <Box
      sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, cursor: 'pointer' }}
      onClick={() => navigate('/')}
    >
      {/* Random logo URL */}
      <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUi0cAsn-p8D78SYAk3xo1tz3n3lZZ0_ly8A&s"
        alt="Logo"
        style={{ height: 63, marginRight: 10 }}
      />
    </Box>

    {/* Username and Profile Icon */}
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography 
        variant="h5"
        sx={{ fontSize: 'medium', marginRight: 1, color: 'text.secondary', textTransform:'capitalize' }}
      >
        {user?.role || 'User'}
      </Typography>
      <IconButton onClick={handleMenu} color="primary" size="large" sx={{ display: 'flex', alignItems: 'center' }}>
        <AccountCircleIcon />
      </IconButton>
    </Box>

    {/* Menu */}
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem onClick={handleLogout}>
        <LogoutIcon fontSize="small" />
        &nbsp;Logout
      </MenuItem>
    </Menu>
  </Toolbar>
</AppBar>

  );
};

export default Navbar;
