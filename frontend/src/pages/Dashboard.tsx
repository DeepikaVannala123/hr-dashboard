// Dashboard.tsx
import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  Alert,
  Container,
  Typography,
  Stack,
} from '@mui/material';
import { AppContext } from '../context/AppContext';
import CompanySwitcher from '../components/CompanySwitcher';
import LeaveBalanceSummary from '../components/LeaveBalanceSummary';
import EmployeeList from '../components/EmployeeList';
import AnnouncementsFeed from '../components/AnnouncementsFeed';
import { useAuth } from "../context/AuthContext";
import Navbar from '../components/Navbar';
import DepartmentLeaveChart from '../components/DepartmentLeaveChart';
import Footer from '../components/Footer';

const Dashboard = () => {
  const { state } = useContext(AppContext); // Access global app state (e.g., selected company)
  const { user } = useAuth(); // Get authenticated user info

  const [employees, setEmployees] = useState([]); // Employees data
  const [announcements, setAnnouncements] = useState([]); // Announcements data
  const [companiesList, setCompaniesList] = useState<{ value: string; name?: string;totalEmployees:number;totalAttendance:number; leaveRequests:number;payrollTime:string }[]>([]); // List of companies

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [isCompanySwitching, setIsCompanySwitching] = useState(false); // State for company switch loading

  useEffect(() => {
    // Fetch companies on initial load
    const fetchCompanies = async () => {
      try {
        const tenantsRes = await fetch(`http://localhost:5000/api/tenants`);
        if (!tenantsRes.ok) {
          throw new Error('Failed to fetch companies');
        }
        const tenantData = await tenantsRes.json();
        setCompaniesList(tenantData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading false after fetching companies
      }
    };

    fetchCompanies();
  }, []);

  useEffect(() => {
    // Fetch employees and announcements when selected company changes
    const fetchDashboardData = async () => {
      if (state.selectedCompany) {
        setIsCompanySwitching(true); // Start loading when company changes
        setError(null);
        try {
          const [empRes, annRes] = await Promise.all([
            fetch(`http://localhost:5000/api/employees?company=${state.selectedCompany}`),
            fetch(`http://localhost:5000/api/announcements?company=${state.selectedCompany}`),
          ]);

          if (!empRes.ok || !annRes.ok) {
            throw new Error('Failed to fetch dashboard data');
          }

          const [empData, annData] = await Promise.all([empRes.json(), annRes.json()]);

          setEmployees(empData);
          setAnnouncements(annData);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setIsCompanySwitching(false); // Stop loading
        }
      }
    };

    fetchDashboardData();
  }, [state.selectedCompany]); // Re-run when selected company changes

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 12, mb: 10 }}>
        <Box mb={4}>
          <CompanySwitcher companies={companiesList} />
        </Box>

        {(isCompanySwitching) && (
          <Stack justifyContent="center" alignItems="center" sx={{ mt: 10 }}>
            <CircularProgress size="30px" sx={{ mt:20,display: 'block', margin: '0 auto' }}  />
            {isCompanySwitching && (
              <Typography variant="body2" color="primary" mt={1}>
                Fetching Data...
              </Typography>
            )}
          </Stack>
        )}

        {error && !isCompanySwitching && (
          <Alert severity="error">{error}</Alert>
        )}

        {!isCompanySwitching && !error && (
          <>
            <Box mb={4}>
              <EmployeeList employees={employees} />
            </Box>
            <Box mb={4}>
              <DepartmentLeaveChart employees={employees} />
            </Box>
            <Box mb={4}>
              <AnnouncementsFeed announcements={announcements} />
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;

