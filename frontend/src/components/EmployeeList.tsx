import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  IconButton,
  TablePagination,
  Divider,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LeaveBalanceSummary from "./LeaveBalanceSummary"; 
import { Sheet, Typography, ModalClose } from '@mui/joy';
import Tooltip from '@mui/material/Tooltip';

// Define the structure for leave details
interface LeaveDetail {
  leaveType: string;
  used: number;
  remaining: number;
}

// Define the structure for employee data
interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
  status: string;
  totalLeaves: number;
  usedLeaves: number;
  leaveDetails:LeaveDetail[]
}

// Modal styling
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400, // Adjust this value to your desired width
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const EmployeeList = ({ employees }: { employees: Employee[] }) => {
  // State for modal open/close
  const [open, setOpen] = useState(false);
  // State for currently selected employee
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  // State for pagination: current page
  const [page, setPage] = useState(0);
  // State for pagination: rows per page
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Open modal and set selected employee
  const handleOpen = (employee: Employee) => {
    setSelectedEmployee(employee);
    setOpen(true);
  };

  // Close modal and clear selected employee
  const handleClose = () => {
    setOpen(false);
    setSelectedEmployee(null);
  };

  // Handle page change in pagination
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle change in rows per page for pagination
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Slice employees array for current page
  const paginatedEmployees = employees.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
    {/* Title */}
    <Typography  sx={{ mb: 2, mt: 4, textAlign: 'left', fontWeight: 'bold', color: '#1976d2', fontSize:'large' }}>
  Employee Details and Leave Summary
</Typography>

      {/* Employee Table */}
      <TableContainer elevation={3} component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Designation</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Leave Summary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render each employee row */}
            {paginatedEmployees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.designation}</TableCell>
                {/* Status with colored chip */}
                <TableCell>
                  <Chip
                    label={emp.status}
                    size="small"
                    sx={{
                      backgroundColor: emp.status === 'active' ? '#4caf50' : '#f44336',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  />
                </TableCell>
                {/* Button to open leave summary modal */}
                <TableCell>
                  <Tooltip title="Employee Leave Summary">
                    <Button  variant="contained" onClick={() => handleOpen(emp)}>
                      View
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination controls */}
        <TablePagination
          component="div"
          count={employees.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </TableContainer>
      {/* Modal for leave summary */}
      <Modal
        aria-labelledby="leave-balance-modal-title"
        aria-describedby="leave-balance-modal-description"
        open={open}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 600, // Adjust as needed
            maxHeight: '80vh', // Adjust the maximum height of the modal body
            overflowY: 'auto', // Enable vertical scrolling if content overflows
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          {/* Close button for modal */}
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          {/* Render leave summary for selected employee */}
          {selectedEmployee && (
            <>
              <Typography
                component="h2"
                id="leave-balance-modal-title"
                level="h4"
                sx={{fontWeight:'bold', color: '#1976d2', fontSize:'large' }}
              >
                Leave Balance for {selectedEmployee.name}
              </Typography>
              {/* LeaveBalanceSummary component displays leave details */}
              <LeaveBalanceSummary
                name={selectedEmployee.name}
                usedLeaves={selectedEmployee.usedLeaves}
                availableLeaves={selectedEmployee.totalLeaves - selectedEmployee.usedLeaves}
                leaveDetails={selectedEmployee.leaveDetails}
              />
            </>
          )}
        </Sheet>
      </Modal>
    </>
  );
};

export default EmployeeList;