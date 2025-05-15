import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

interface LeaveBalanceSummaryProps {
  name: string;
  usedLeaves: number;
  availableLeaves: number;
}

const LeaveBalanceSummary: React.FC<LeaveBalanceSummaryProps> = ({
  name,
  usedLeaves,
  availableLeaves,
}) => {
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
    },
    title: {
      text: `${name}'s Leave Summary`,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: true,
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

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LeaveBalanceSummary;
