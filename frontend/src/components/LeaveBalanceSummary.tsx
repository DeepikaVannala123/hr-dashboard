import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";

interface LeaveBalanceSummaryProps {
  name: string;
  usedLeaves: number;
  availableLeaves: number;
  leaveDetails: LeaveDetail[];
}

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
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      
       margin: [0, 0, 0, 0], // Set all margins to 0
        spacing: [0, 0, 0, 0], // Set all spacing to 0
    },
    title: {
      text: undefined, // Title handled outside by Typography
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        size: "60%",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "Leaves",
        type: "pie",
        data: [
          {
            name: `Used Leaves (${usedLeaves})`,
            y: usedLeaves,
          },
          {
            name: `Available Leaves (${availableLeaves})`,
            y: availableLeaves,
          },
        ],
      },
    ],
    colors: ["#8884d8", "#ff8042"],
  };

  return (
    <Box p={2}>

      {/* Pie chart */}
      <Box >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>

      {/* Table Heading */}
      <Typography variant="subtitle1" align="center" gutterBottom sx={{fontWeight:'bold', color: '#1976d2', fontSize:'large' }}>
        Leave Summary
      </Typography>

      {/* Leave Summary Table */}
      <Table size="small" sx={{ border: "1px solid #ccc" }}>
        <TableHead>
          <TableRow>
            <TableCell><strong>Leave Type</strong></TableCell>
            <TableCell><strong>Used</strong></TableCell>
            <TableCell><strong>Remaining</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
