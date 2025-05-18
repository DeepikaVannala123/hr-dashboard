const {getEmployeesController} = require("../controllers/employees");
const getEmployees = (req, res) => {
  try{
    const { company } = req.query;
    const employees = getEmployeesController(company);

    if (!employees) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.json(employees);
  }
  catch(error){
    console.error("Error fetching employees:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {getEmployees};
