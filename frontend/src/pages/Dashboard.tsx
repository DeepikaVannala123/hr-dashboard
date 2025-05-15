import React, { useContext, useEffect, useState } from 'react';
import { Box, CircularProgress,Divider, Alert, Container, Typography } from '@mui/material';
import { AppContext } from '../context/AppContext';
import CompanySwitcher from '../components/CompanySwitcher';
import LeaveBalanceSummary from '../components/LeaveBalanceSummary';
import EmployeeList from '../components/EmployeeList';
import AnnouncementsFeed from '../components/AnnouncementsFeed';
import { useAuth } from "../context/AuthContext";
const Dashboard = () => {
  const { state } = useContext(AppContext);
  const [employees, setEmployees] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const { user } = useAuth();
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [empRes, annRes] = await Promise.all([
          fetch(`http://localhost:5000/api/${state.selectedCompany}/employees`),
          fetch(`http://localhost:5000/api/${state.selectedCompany}/announcements`),
        ]);

        if (!empRes.ok || !annRes.ok) throw new Error("Failed to fetch data");

        const [empData, annData] = await Promise.all([
          empRes.json(),
          annRes.json(),
        ]);

        setEmployees(empData);
        setAnnouncements(annData);
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h6" gutterBottom>
        Logged in as: <strong>{user?.role.toUpperCase()}</strong>
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {/* Header */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          HR Dashboard — {state.selectedCompany}
        </Typography>
        <CompanySwitcher />
      </Box>

      {/* Employee List */}
      <Box mb={4}>
        <EmployeeList employees={employees} />
      </Box>

      {/* Announcements Feed */}
      <Box mb={4}>
        <AnnouncementsFeed announcements={announcements} />
      </Box>
    </Container>
  );
};

export default Dashboard;
