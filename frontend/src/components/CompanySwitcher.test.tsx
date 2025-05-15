import { render, screen, fireEvent } from "@testing-library/react";
import CompanySwitcher from "../components/CompanySwitcher";
import { AppContext } from "../context/AppContext";

const mockDispatch = jest.fn();

const renderWithContext = (selectedCompany = "zepto") =>
  render(
    <AppContext.Provider value={{ state: { selectedCompany }, dispatch: mockDispatch }}>
      <CompanySwitcher />
    </AppContext.Provider>
  );

test("renders dropdown and changes company", () => {
  renderWithContext();

  const dropdown = screen.getByLabelText(/company/i);
  fireEvent.mouseDown(dropdown);
  const option = screen.getByRole("option", { name: "Acme" });
  fireEvent.click(option);

  expect(mockDispatch).toHaveBeenCalledWith({
    type: "SET_COMPANY",
    payload: "acme",
  });
});
