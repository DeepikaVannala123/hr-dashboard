// Get all employees (sample implementation)
const employeesData = require("../model/employees.js");

const getEmployeesController = (companyName) => {

  return employeesData[companyName]||[];
};

module.exports = {
  getEmployeesController
};