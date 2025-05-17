import React, { useContext } from 'react';
import { Box, Breadcrumbs, Card, CardContent, FormControl, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material';
import { AppContext } from '../context/AppContext';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
interface CompanySwitcherProps {
  companies: Record<string, { name: string }>;
}
const CompanySwitcher = ({ companies }: { companies: Array<{ value: string; name?: string;totalEmployees?:number;totalAttendance:number; leaveRequests:number; payrollTime:string}> }) => {
  const { state, dispatch } = useContext(AppContext);
const summary = companies.find((e: any) => e.value === state.selectedCompany);

console.log(summary);
 return (
  <>
    {/* Breadcrumbs and Dropdown in one row */}
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} flexWrap="wrap" gap={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Typography color="primary"
          sx={{  display: 'flex', alignItems: 'center', fontWeight:'bold' }}
        >
          Dashboard
        </Typography>
      </Breadcrumbs>

      {/* Small dropdown aligned right */}
      <FormControl sx={{ minWidth: 200 }} size="small">
        <InputLabel id="company-label">Company</InputLabel>
        <Select
          labelId="company-label"
          value={state.selectedCompany}
          onChange={(e) => dispatch({ type: 'SET_COMPANY', payload: e.target.value })}
          label="Company"
        >
          {companies.map((company) => (
            <MenuItem key={company.value} value={company.value}>
              {company.name || company.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>

    {/* Summary Cards */}
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2} mt={3}>
      <Card variant="outlined" sx={{ flex: '1 1 22%', minWidth: 220,  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <PeopleIcon color="primary" />
            <Typography variant="h6" sx={{ color: '#7c7e81;', fontWeight: '600', fontSize:'medium;' }}>Total Employees</Typography>
          <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize:'xx-large;' }}>{summary?.totalEmployees}</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ flex: '1 1 22%', minWidth: 220,  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)'  }}>
        <CardContent>
          <EventAvailableIcon color="secondary" />
          <Typography variant="h6" sx={{ color: '#7c7e81;', fontWeight: '600', fontSize:'medium;' }}>Attendance</Typography>
          <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize:'xx-large;' }}>{summary?.totalAttendance}</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ flex: '1 1 22%', minWidth: 220,  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)'  }}>
        <CardContent>
          <WorkHistoryIcon color="error" />
            <Typography variant="h6" sx={{ color: '#7c7e81;', fontWeight: '600', fontSize:'medium;' }}>Leave Requests</Typography>
          <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize:'xx-large;' }}>{summary?.leaveRequests}</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ flex: '1 1 22%', minWidth: 220,  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)'  }}>
        <CardContent>
          <RequestQuoteIcon color="success" />
               <Typography variant="h6" sx={{ color: '#7c7e81;', fontWeight: '600', fontSize:'medium;' }}>PayrollTime</Typography>
          <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold', fontSize:'xx-large;' }}>{summary?.payrollTime}</Typography>
        </CardContent>
      </Card>
    </Box>
  </>
);

};

export default CompanySwitcher;
