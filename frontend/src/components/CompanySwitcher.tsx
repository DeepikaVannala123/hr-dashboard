import React, { useContext } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { AppContext } from '../context/AppContext';
import { Box, CircularProgress, Alert, Container, Typography } from '@mui/material';
const CompanySwitcher = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <FormControl fullWidth>
      <InputLabel id="company-label">Company</InputLabel>
      <Select
        labelId="company-label"
        value={state.selectedCompany}
        onChange={(e) =>{console.log( e.target.value ); dispatch({ type: 'SET_COMPANY', payload: e.target.value })}}
        label="Company"
      >
        <MenuItem value="zepto">Zepto</MenuItem>
        <MenuItem value="acme">Acme</MenuItem>
         <MenuItem value="swiggy">Swiggy</MenuItem>
        <MenuItem value="phenom">Phenom</MenuItem>
         <MenuItem value="synopsis">Ajio</MenuItem>
      </Select>
    </FormControl>
    
    
  );
};

export default CompanySwitcher;
