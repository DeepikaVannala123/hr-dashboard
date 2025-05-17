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

interface LeaveDetail {
  leaveType: string;
  used: number;
  remaining: number;
}

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
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpen = (employee: Employee) => {
    setSelectedEmployee(employee);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEmployee(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedEmployees = employees.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
    <Typography  sx={{ mb: 2, mt: 4, textAlign: 'left', fontWeight: 'bold', color: '#1976d2', fontSize:'large' }}>
  Employee Details and Leave Summary
</Typography>

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
            {paginatedEmployees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.designation}</TableCell>
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
       <IconButton
  onClick={handleClose}
  sx={{ position: 'absolute', top: 8, right: 8 }}
  aria-label="Close"
>
  <CloseIcon />
</IconButton>
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
            {/* Render your LeaveBalanceSummary component here */}
            {/* Example: */}
            {/* <Typography id="leave-balance-modal-description" textColor="text.tertiary">
              Used Leaves: {selectedEmployee.usedLeaves}
              <br />
              Available Leaves: {selectedEmployee.totalLeaves - selectedEmployee.usedLeaves}
            </Typography> */}
            {/* Make sure your LeaveBalanceSummary component is correctly rendering here */}
            {/* If LeaveBalanceSummary itself uses Box with width: 100%, that might be the issue */}
            {/* Ensure LeaveBalanceSummary respects the maxWidth of the Sheet */}
            {/* Consider passing the data as props as you were doing before */}
            <LeaveBalanceSummary
              name={selectedEmployee.name}
              usedLeaves={selectedEmployee.usedLeaves}
              availableLeaves={selectedEmployee.totalLeaves - selectedEmployee.usedLeaves}
              leaveDetails={selectedEmployee.leaveDetails}
            />
            {/* Adjust the above line with your actual LeaveBalanceSummary usage */}
          </>
        )}
      </Sheet>
    </Modal>
    </>
  );
};

export default EmployeeList;
