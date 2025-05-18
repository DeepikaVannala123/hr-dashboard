import { Typography } from "@mui/material";
//if the user is not authorized to access the page, show this page
// This component is displayed when a user tries to access a page they are not authorized to view
const Unauthorized = () => {
  return <Typography variant="h4" align="center" mt={4}>403 — Unauthorized</Typography>;
};

export default Unauthorized;
