import { render, screen } from "@testing-library/react";
import LeaveBalanceSummary from "../components/LeaveBalanceSummary";

test("renders leave balance summary correctly", () => {
  render(<LeaveBalanceSummary name="John Doe" usedLeaves={5} availableLeaves={10} />);

  expect(screen.getByText("Leave Balance for John Doe")).toBeInTheDocument();
  expect(screen.getByText(/Used Leaves/i)).toHaveTextContent("Used Leaves: 5");
  expect(screen.getByText(/Available Leaves/i)).toHaveTextContent("Available Leaves: 10");
});
