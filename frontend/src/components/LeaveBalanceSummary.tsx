import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";

// Props interface for the LeaveBalanceSummary component
interface LeaveBalanceSummaryProps {
  name: string;
  usedLeaves: number;
  availableLeaves: number;
  leaveDetails: LeaveDetail[];
}

// Interface for each leave detail row
interface LeaveDetail {
  leaveType: string;
  used: number;
  remaining: number;
}

const LeaveBalanceSummary: React.FC<LeaveBalanceSummaryProps> = ({
  name,
  usedLeaves,
  availableLeaves,
  leaveDetails,
}) => {
  // Highcharts pie chart configuration
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      margin: [0, 0, 0, 0], // Remove chart margins
      spacing: [0, 0, 0, 0], // Remove chart spacing
    },
    title: {
      text: undefined, // No chart title (handled by Typography)
    },
    credits: {
      enabled: false, // Hide Highcharts credits
    },
    legend: {
      enabled: true, // Show legend
    },
    plotOptions: {
      pie: {
        allowPointSelect: true, // Allow selecting pie slices
        cursor: "pointer", // Show pointer cursor on hover
        size: "60%", // Pie size relative to container
        dataLabels: {
          enabled: true, // Show data labels on pie slices
        },
      },
    },
    series: [
      {
        name: "Leaves",
        type: "pie",
        data: [
          {
            name: `Used Leaves (${usedLeaves})`, // Label for used leaves
            y: usedLeaves, // Value for used leaves
          },
          {
            name: `Available Leaves (${availableLeaves})`, // Label for available leaves
            y: availableLeaves, // Value for available leaves
          },
        ],
      },
    ],
    colors: ["#8884d8", "#ff8042"], // Custom colors for pie slices
  };

  return (
    <Box p={2}>
      {/* Pie chart section */}
      <Box>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>

      {/* Table heading */}
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2", fontSize: "large" }}
      >
        Leave Summary
      </Typography>

      {/* Leave summary table */}
      <Table size="small" sx={{ border: "1px solid #ccc" }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Leave Type</strong>
            </TableCell>
            <TableCell>
              <strong>Used</strong>
            </TableCell>
            <TableCell>
              <strong>Remaining</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Render each leave detail row */}
          {leaveDetails.map((leave, index) => (
            <TableRow key={index}>
              <TableCell>{leave.leaveType}</TableCell>
              <TableCell>{leave.used}</TableCell>
              <TableCell>{leave.remaining}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default LeaveBalanceSummary;