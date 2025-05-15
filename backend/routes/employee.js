const express = require("express");
const router = express.Router();
const employeesData ={
  zepto:[
      {
    id: 1,
    name: "Priti",
    department: "Engineering",
    designation: "Software Engineer",
    status: "active",
    totalLeaves: 20,  // Total leaves
    usedLeaves: 5,    // Used leaves
  },
  {
    id: 2,
    name: "Ramesh",
    department: "HR",
    designation: "HR Manager",
    status: "active",
    totalLeaves: 20,
    usedLeaves: 3,
  },
   {
    id: 3,
    name: "Suresh",
    department: "HR",
    designation: "Frontend Engineer",
    status: "active",
    totalLeaves: 20,
    usedLeaves: 12,
  },
    {
            "id": 4,
            "name": "Divya Mishra",
            "department": "HR",
            "designation": "HR Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 10
         },
         {
            "id": 5,
            "name": "Kavita Joshi",
            "department": "Finance",
            "designation": "Auditor",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 16
         },
         {
            "id": 6,
            "name": "Anjali Gupta",
            "department": "Sales",
            "designation": "Account Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 0
         },
         {
            "id": 7,
            "name": "Neha Joshi",
            "department": "Support",
            "designation": "Support Executive",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 8
         },
         {
            "id": 8,
            "name": "Karan Joshi",
            "department": "Sales",
            "designation": "Account Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 9,
            "name": "Amit Yadav",
            "department": "HR",
            "designation": "Recruiter",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 0
         },
         {
            "id": 10,
            "name": "Manish Gupta",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 5
         },
         {
            "id": 11,
            "name": "Sneha Gupta",
            "department": "Engineering",
            "designation": "Frontend Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 10
         },
         {
            "id": 12,
            "name": "Rohit Kapoor",
            "department": "Engineering",
            "designation": "Backend Engineer",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 1
         },
         {
            "id": 13,
            "name": "Meena Verma",
            "department": "HR",
            "designation": "Recruiter",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 13
         },
  ],
  acme:[
         {
            "id": 1,
            "name": "Neha Mishra",
            "department": "Engineering",
            "designation": "Frontend Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 4
         },
         {
            "id": 2,
            "name": "Karan Sharma",
            "department": "Sales",
            "designation": "Account Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 16
         },
         {
            "id": 3,
            "name": "Rahul Yadav",
            "department": "HR",
            "designation": "HR Executive",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 9
         },
         {
            "id": 4,
            "name": "Vikram Joshi",
            "department": "Sales",
            "designation": "Account Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 5,
            "name": "Simran Reddy",
            "department": "Support",
            "designation": "Customer Support",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 13
         },
         {
            "id": 6,
            "name": "Anjali Patel",
            "department": "Engineering",
            "designation": "DevOps Engineer",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 4
         },
         {
            "id": 7,
            "name": "Simran Yadav",
            "department": "Marketing",
            "designation": "Content Writer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 6
         },
         {
            "id": 8,
            "name": "Nitin Gupta",
            "department": "HR",
            "designation": "HR Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 16
         },
         {
            "id": 9,
            "name": "Kavita Patel",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 7
         },
         {
            "id": 10,
            "name": "Amit Joshi",
            "department": "Sales",
            "designation": "Sales Executive",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 12
         },
         {
            "id": 11,
            "name": "Simran Mishra",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 7
         },
         {
            "id": 12,
            "name": "Priya Reddy",
            "department": "Finance",
            "designation": "Accountant",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 1
         },
         {
            "id": 13,
            "name": "Sneha Verma",
            "department": "Finance",
            "designation": "Accountant",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 8
         },
         {
            "id": 14,
            "name": "Meena Reddy",
            "department": "Sales",
            "designation": "Sales Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 14
         },
         {
            "id": 15,
            "name": "Karan Sharma",
            "department": "HR",
            "designation": "HR Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 5
         },
         {
            "id": 16,
            "name": "Simran Sharma",
            "department": "Finance",
            "designation": "Accountant",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 17,
            "name": "Anjali Kapoor",
            "department": "HR",
            "designation": "Recruiter",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 19
         },
         {
            "id": 18,
            "name": "Ravi Kapoor",
            "department": "Finance",
            "designation": "Accountant",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 1
         },
         {
            "id": 19,
            "name": "Anjali Yadav",
            "department": "Marketing",
            "designation": "Content Writer",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 0
         },
         {
            "id": 20,
            "name": "Neha Gupta",
            "department": "HR",
            "designation": "Recruiter",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 15
         }
   
  ],
  swiggy:[
         {
            "id": 1,
            "name": "Manish Kapoor",
            "department": "Support",
            "designation": "Support Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 13
         },
         {
            "id": 2,
            "name": "Arjun Patel",
            "department": "Sales",
            "designation": "Sales Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 3,
            "name": "Rahul Patel",
            "department": "Support",
            "designation": "Support Executive",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 10
         },
         {
            "id": 4,
            "name": "Divya Verma",
            "department": "Finance",
            "designation": "Auditor",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 20
         },
         {
            "id": 5,
            "name": "Karan Mishra",
            "department": "Finance",
            "designation": "Accountant",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 14
         },
         {
            "id": 6,
            "name": "Rahul Patel",
            "department": "Sales",
            "designation": "Sales Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 5
         },
         {
            "id": 7,
            "name": "Vikram Yadav",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 1
         },
         {
            "id": 8,
            "name": "Simran Sharma",
            "department": "Marketing",
            "designation": "Content Writer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 4
         },
         {
            "id": 9,
            "name": "Sanjay Joshi",
            "department": "Finance",
            "designation": "Accountant",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 17
         },
         {
            "id": 10,
            "name": "Rahul Sharma",
            "department": "Engineering",
            "designation": "Software Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 2
         },
         {
            "id": 11,
            "name": "Amit Sharma",
            "department": "Support",
            "designation": "Customer Support",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 12,
            "name": "Simran Verma",
            "department": "Finance",
            "designation": "Accountant",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 13
         },
         {
            "id": 13,
            "name": "Pooja Yadav",
            "department": "Support",
            "designation": "Support Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 15
         },
         {
            "id": 14,
            "name": "Arjun Sharma",
            "department": "HR",
            "designation": "HR Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 12
         },
         {
            "id": 15,
            "name": "Divya Gupta",
            "department": "Finance",
            "designation": "Accountant",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 3
         },
         {
            "id": 16,
            "name": "Divya Gupta",
            "department": "Sales",
            "designation": "Sales Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 2
         },
         {
            "id": 17,
            "name": "Ravi Yadav",
            "department": "Engineering",
            "designation": "DevOps Engineer",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 20
         },
         {
            "id": 18,
            "name": "Karan Reddy",
            "department": "Engineering",
            "designation": "QA Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 20
         },
         {
            "id": 19,
            "name": "Neha Joshi",
            "department": "Sales",
            "designation": "Sales Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 20,
            "name": "Rahul Verma",
            "department": "Engineering",
            "designation": "QA Engineer",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 6
         }
      
  ],
  phenom :[
         {
            "id": 1,
            "name": "Neha Mishra",
            "department": "Marketing",
            "designation": "SEO Specialist",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 14
         },
         {
            "id": 2,
            "name": "Sneha Mishra",
            "department": "Support",
            "designation": "Customer Support",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 3
         },
         {
            "id": 3,
            "name": "Vikram Verma",
            "department": "Engineering",
            "designation": "QA Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 15
         },
         {
            "id": 4,
            "name": "Manish Verma",
            "department": "Engineering",
            "designation": "Frontend Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 5,
            "name": "Karan Mehta",
            "department": "Finance",
            "designation": "Accountant",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 6,
            "name": "Karan Mehta",
            "department": "Marketing",
            "designation": "Content Writer",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 20
         },
         {
            "id": 7,
            "name": "Tina Sharma",
            "department": "Finance",
            "designation": "Accountant",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 15
         },
         {
            "id": 8,
            "name": "Anjali Reddy",
            "department": "HR",
            "designation": "Recruiter",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 19
         },
         {
            "id": 9,
            "name": "Anjali Gupta",
            "department": "Support",
            "designation": "Support Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 0
         },
         {
            "id": 10,
            "name": "Priya Yadav",
            "department": "HR",
            "designation": "HR Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 14
         },
         {
            "id": 11,
            "name": "Karan Yadav",
            "department": "HR",
            "designation": "HR Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 19
         },
         {
            "id": 12,
            "name": "Nitin Mishra",
            "department": "Sales",
            "designation": "Sales Executive",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 8
         },
         {
            "id": 13,
            "name": "Pooja Yadav",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 17
         },
         {
            "id": 14,
            "name": "Neha Yadav",
            "department": "Support",
            "designation": "Customer Support",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 10
         },
         {
            "id": 15,
            "name": "Sanjay Joshi",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 14
         },
         {
            "id": 16,
            "name": "Sneha Mishra",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 20
         },
         {
            "id": 17,
            "name": "Simran Verma",
            "department": "Marketing",
            "designation": "Content Writer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 1
         },
         {
            "id": 18,
            "name": "Rohit Sharma",
            "department": "Engineering",
            "designation": "Frontend Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 18
         },
         {
            "id": 19,
            "name": "Nitin Joshi",
            "department": "Marketing",
            "designation": "SEO Specialist",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 4
         },
         {
            "id": 20,
            "name": "Meena Mehta",
            "department": "Engineering",
            "designation": "Software Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 1
         }
      
  ],
  synopsis:[
         {
            "id": 1,
            "name": "Rohit Gupta",
            "department": "Support",
            "designation": "Customer Support",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 11
         },
         {
            "id": 2,
            "name": "Sanjay Gupta",
            "department": "Support",
            "designation": "Support Executive",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 19
         },
         {
            "id": 3,
            "name": "Kavita Verma",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 1
         },
         {
            "id": 4,
            "name": "Anjali Mishra",
            "department": "Support",
            "designation": "Tech Support",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 13
         },
         {
            "id": 5,
            "name": "Sanjay Mehta",
            "department": "Finance",
            "designation": "Finance Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 9
         },
         {
            "id": 6,
            "name": "Sneha Mehta",
            "department": "Engineering",
            "designation": "Backend Engineer",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 18
         },
         {
            "id": 7,
            "name": "Neha Gupta",
            "department": "Finance",
            "designation": "Finance Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 4
         },
         {
            "id": 8,
            "name": "Kavita Kapoor",
            "department": "Support",
            "designation": "Customer Support",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 8
         },
         {
            "id": 9,
            "name": "Sanjay Patel",
            "department": "Sales",
            "designation": "Sales Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 9
         },
         {
            "id": 10,
            "name": "Arjun Kapoor",
            "department": "Support",
            "designation": "Tech Support",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 1
         },
         {
            "id": 11,
            "name": "Ravi Verma",
            "department": "Marketing",
            "designation": "Marketing Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 20
         },
         {
            "id": 12,
            "name": "Meena Joshi",
            "department": "Support",
            "designation": "Customer Support",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 2
         },
         {
            "id": 13,
            "name": "Tina Yadav",
            "department": "Finance",
            "designation": "Auditor",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 9
         },
         {
            "id": 14,
            "name": "Meena Patel",
            "department": "HR",
            "designation": "HR Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 18
         },
         {
            "id": 15,
            "name": "Sneha Joshi",
            "department": "HR",
            "designation": "HR Manager",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 1
         },
         {
            "id": 16,
            "name": "Nitin Mishra",
            "department": "HR",
            "designation": "Recruiter",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 15
         },
         {
            "id": 17,
            "name": "Kavita Mehta",
            "department": "Marketing",
            "designation": "SEO Specialist",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 12
         },
         {
            "id": 18,
            "name": "Vikram Reddy",
            "department": "Sales",
            "designation": "Sales Manager",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 10
         },
         {
            "id": 19,
            "name": "Pooja Kapoor",
            "department": "Marketing",
            "designation": "Content Writer",
            "status": "active",
            "totalLeaves": 20,
            "usedLeaves": 0
         },
         {
            "id": 20,
            "name": "Nitin Mishra",
            "department": "Marketing",
            "designation": "SEO Specialist",
            "status": "inactive",
            "totalLeaves": 20,
            "usedLeaves": 18
         }
      
  ]
}



router.get("/:company/employees", (req, res) => {
  const { company } = req.params;
  const employees = employeesData[company];
  if (!employees) {
    return res.status(404).json({ message: "Company not found" });
  }
  res.json(employees);
});

module.exports = router;
