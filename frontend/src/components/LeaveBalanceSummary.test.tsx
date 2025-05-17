import { render, screen } from "@testing-library/react";
import LeaveBalanceSummary from "../components/LeaveBalanceSummary";

test("renders leave balance summary correctly", () => {
  render(<LeaveBalanceSummary name="John Doe" usedLeaves={5} availableLeaves={10}  leaveDetails={[
        { leaveType: "Annual", used: 2, remaining: 3 },
        { leaveType: "Sick", used: 1, remaining: 4 },
        { leaveType: "Casual", used: 2, remaining: 3 }
      ]}/>);

  expect(screen.getByText("Leave Balance for John Doe")).toBeInTheDocument();
  expect(screen.getByText(/Used Leaves/i)).toHaveTextContent("Used Leaves: 5");
  expect(screen.getByText(/Available Leaves/i)).toHaveTextContent("Available Leaves: 10");
});
