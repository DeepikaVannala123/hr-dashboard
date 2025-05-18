import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Box, Paper, Typography } from '@mui/material';

// Employee interface for type safety
interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
  status: string;
  totalLeaves: number;
  usedLeaves: number;
  joiningDate: string;
}

// Props interface expects an array of employees
interface Props {
  employees: Employee[];
}

const DepartmentLeaveChart: React.FC<Props> = ({ employees }) => {
  // Used Leaves by Department
  const leaveMap: Record<string, number> = {};
  const headcountMap: Record<string, number> = {};

  // Aggregate used leaves per department
  employees.forEach(({ department, usedLeaves }) => {
    if (!leaveMap[department]) {
      leaveMap[department] = 0;
    }
    leaveMap[department] += usedLeaves;
  });

  // Aggregate headcount per department
  employees.forEach(({ department }) => {
    if (!headcountMap[department]) {
      headcountMap[department] = 0;
    }
    headcountMap[department] += 1;
  });

  // Prepare data for pie chart (leave utilization)
  const leavePieData = Object.entries(leaveMap).map(([dept, leaves]) => ({
    name: dept,
    y: leaves,
  }));

  // Prepare categories and data for bar chart (headcount)
  const headcountCategories = Object.keys(headcountMap);
  const headcountData = Object.values(headcountMap);

  // Total number of employees
  const totalEmployees = employees.length;

  // Highcharts options for the donut (pie) chart
  const leavePieOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      events: {
        // Custom render event to show total employees in the center
        render() {
          const chart = this;

          const centerX = chart.plotWidth / 2 + chart.plotLeft;
          const centerY = chart.plotHeight / 2 + chart.plotTop;

          const html = `
            <div style="text-align: center;">
              <div style="font-size: 12px; color: #666;">Total Employees</div>
              <div style="font-size: 22px; font-weight: bold; color: #000;">${totalEmployees}</div>
            </div>
          `;

          // Destroy old label if it exists
          if ((chart as any).centerLabel) {
            (chart as any).centerLabel.destroy();
          }

          // Add new label in the center of the donut
          (chart as any).centerLabel = chart.renderer
            .label(html, centerX - 50, centerY - 30, 'rect', undefined, undefined, true) // `true` enables useHTML
            .attr({
              padding: 0,
              zIndex: 5,
            })
            .css({
              color: '#000',
            })
            .add();
        },
      },
    },
    title: {
      text: '',
    },
    tooltip: {
      pointFormat: '<b>{point.name}</b>: {point.y} leaves',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: '60%', // Donut chart
        size: "70%",
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}',
        },
      },
    },
    legend: {
      useHTML: true,
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'vertical',
      itemMarginBottom: 8,
      labelFormatter: function () {
        return '<b>{point.name}</b>: {point.y} leaves';
      },
      enabled: true,
    },
    series: [
      {
        name: 'Used Leaves',
        type: 'pie',
        data: leavePieData,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  // Highcharts options for the bar (column) chart
  const headcountBarOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: headcountCategories,
      title: {
        text: 'Departments',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Employee Count',
        align: 'high',
      },
    },
    tooltip: {
      valueSuffix: ' employees',
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'Employees',
        type: 'column',
        data: headcountData,
        color: '#70AD47',
      },
    ],
    credits: {
      enabled: false,
    },
  };

  // Render the two charts side by side (responsive)
  return (
    <Box mb={4}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
        {/* Pie/Donut Chart: Leave Utilization */}
        <Box flex={{ xs: 1, md: 0.4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography color="primary" variant="h6" mb={2} sx={{ textAlign: 'center', fontWeight: 'bold' }} gutterBottom>
              Department-Wise Leave Utilization
            </Typography>
            <HighchartsReact highcharts={Highcharts} options={leavePieOptions} />
          </Paper>
        </Box>
        {/* Bar Chart: Employee Headcount */}
        <Box flex={{ xs: 1, md: 0.6 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography gutterBottom color="primary" variant="h6" mb={2} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
              Department-Wise Employee Headcount
            </Typography>
            <HighchartsReact highcharts={Highcharts} options={headcountBarOptions} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default DepartmentLeaveChart;