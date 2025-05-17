// backend/routes/tenants.js
const express = require("express");
const router = express.Router();

const tenantsData = [
  { value:"zepto",  totalEmployees:20,
    totalAttendance: 19,
  leaveRequests:1,
  payrollTime:"10:00"
 },
{value:"acme",totalEmployees:20,
    totalAttendance: 18,
  leaveRequests:2,
  payrollTime:"11:00"},

 {value:"swiggy",
    totalEmployees:20,
    totalAttendance: 17,
  leaveRequests:3,
  payrollTime:"12:00"
   },
        {value:"phenom",
            totalEmployees:20,
    totalAttendance: 10,
  leaveRequests:10,
  payrollTime:"10:00"
         },
    {value:"synopsis",
        totalEmployees:20,
    totalAttendance: 16,
  leaveRequests:4,
  payrollTime:"10:00"
       }

]


// GET all tenants (company summaries)
router.get("/tenants", (req, res) => {
  res.json(tenantsData); // ✅ return full list
});


module.exports = router;
