// Dashboard.tsx
import React, { useContext, useEffect, useState } from 'react';
import {
  Box, CircularProgress, Divider, Alert, Container, Typography
} from '@mui/material';
import { AppContext } from '../context/AppContext';
import CompanySwitcher from '../components/CompanySwitcher';
import LeaveBalanceSummary from '../components/LeaveBalanceSummary';
import EmployeeList from '../components/EmployeeList';
import AnnouncementsFeed from '../components/AnnouncementsFeed';
import { useAuth } from "../context/AuthContext";
import Navbar from '../components/Navbar';
import DepartmentLeaveChart from '../components/DepartmentLeaveChart';

const Dashboard = () => {
  const { state } = useContext(AppContext);
  const { user } = useAuth();

  const [employees, setEmployees] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
const [companiesList, setCompaniesList] = useState<{ value: string; name?: string;totalEmployees:number;totalAttendance:number; leaveRequests:number;payrollTime:string }[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [empRes, annRes, tenantsRes] = await Promise.all([
          fetch(`http://localhost:5000/api/${state.selectedCompany}/employees`),
          fetch(`http://localhost:5000/api/${state.selectedCompany}/announcements`),
          fetch(`http://localhost:5000/api/tenants`)
        ]);

        if (!empRes.ok || !annRes.ok || !tenantsRes.ok)
          throw new Error("Failed to fetch data");

        const [empData, annData, tenantData] = await Promise.all([
          empRes.json(),
          annRes.json(),
          tenantsRes.json()
        ]);

        setEmployees(empData);
        setAnnouncements(annData);

       
        setCompaniesList(tenantData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [state.selectedCompany]);

  if (loading) return <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
       <Navbar />
       
        <Container   maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
     
      <Box mb={4}>
       
        <CompanySwitcher companies={companiesList} />
      </Box>

      <Box mb={4}>
        <EmployeeList employees={employees} />
      </Box>
<Box mb={4}>
        <DepartmentLeaveChart employees={employees} />
      </Box>
      <Box mb={4}>
        <AnnouncementsFeed announcements={announcements} />
      </Box>
    </Container>
    </>
   
  );
};

export default Dashboard;
