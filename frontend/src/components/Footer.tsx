import { Box, Typography } from '@mui/material';
// adding a footer 
const Footer = () => {
  return (
    <Box color='secondary'
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        py: 2,
        textAlign: 'center',
        zIndex: 1300, // keeps it above other content
         backgroundColor: '#ffffff', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
         borderTop:'1px solid #00000036'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Kredily. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
