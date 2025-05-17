const express = require("express");
const router = express.Router();
const employeesData ={
zepto:[
  {
    "id": 1,
    "name": "Priti",
    "department": "Engineering",
    "designation": "Software Engineer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 17,
    "joiningDate": "2023-07-24",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 10,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 2,
        "remaining": 8
      },
      {
        "leaveType": "Casual",
        "used": 5,
        "remaining": 5
      }
    ]
  },
  {
    "id": 2,
    "name": "Ramesh",
    "department": "HR",
    "designation": "HR Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 3,
    "joiningDate": "2023-10-12",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 6
      }
    ]
  },
  {
    "id": 3,
    "name": "Suresh",
    "department": "HR",
    "designation": "Frontend Engineer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 12,
    "joiningDate": "2023-11-03",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 7,
        "remaining": 3
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 2
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 8
      }
    ]
  },
  {
    "id": 4,
    "name": "Divya Mishra",
    "department": "HR",
    "designation": "HR Executive",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 10,
    "joiningDate": "2023-06-28",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 1
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 7
      }
    ]
  },
  {
    "id": 5,
    "name": "Kavita Joshi",
    "department": "Finance",
    "designation": "Auditor",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 16,
    "joiningDate": "2023-09-03",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 9,
        "remaining": 1
      },
      {
        "leaveType": "Sick",
        "used": 5,
        "remaining": 0
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 3
      }
    ]
  },
  {
    "id": 6,
    "name": "Anjali Gupta",
    "department": "Sales",
    "designation": "Account Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 0,
    "joiningDate": "2023-03-20",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 0,
        "remaining": 5
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 5
      }
    ]
  },
  {
    "id": 7,
    "name": "Neha Joshi",
    "department": "Support",
    "designation": "Support Executive",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 8,
    "joiningDate": "2024-01-04",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 2
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 9
      }
    ]
  },
  {
    "id": 8,
    "name": "Karan Joshi",
    "department": "Sales",
    "designation": "Account Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 11,
    "joiningDate": "2023-04-18",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 5,
        "remaining": 5
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 1
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 7
      }
    ]
  },
  {
    "id": 9,
    "name": "Amit Yadav",
    "department": "HR",
    "designation": "Recruiter",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 0,
    "joiningDate": "2023-03-16",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 8
      },
      {
        "leaveType": "Sick",
        "used": 0,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 5
      }
    ]
  },
  {
    "id": 10,
    "name": "Manish Gupta",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 5,
    "joiningDate": "2023-08-24",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 2,
        "remaining": 8
      },
      {
        "leaveType": "Sick",
        "used": 2,
        "remaining": 3
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 6
      }
    ]
  },
  {
    "id": 11,
    "name": "Sneha Gupta",
    "department": "Engineering",
    "designation": "Frontend Engineer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 10,
    "joiningDate": "2023-03-02",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 2
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 7
      }
    ]
  },
  {
    "id": 12,
    "name": "Rohit Kapoor",
    "department": "Engineering",
    "designation": "Backend Engineer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-02-08",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 6
      }
    ]
  },
  {
    "id": 13,
    "name": "Meena Verma",
    "department": "HR",
    "designation": "Recruiter",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 13,
    "joiningDate": "2023-11-29",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 8,
        "remaining": 2
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 2
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 6
      }
    ]
  }
],
  acme: [
  {
    "id": 1,
    "name": "Neha Mishra",
    "department": "Engineering",
    "designation": "Frontend Engineer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 4,
    "joiningDate": "2023-02-20"
  },
  {
    "id": 2,
    "name": "Karan Sharma",
    "department": "Sales",
    "designation": "Account Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 16,
    "joiningDate": "2023-03-14"
  },
  {
    "id": 3,
    "name": "Rahul Yadav",
    "department": "HR",
    "designation": "HR Executive",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 9,
    "joiningDate": "2023-04-05"
  },
  {
    "id": 4,
    "name": "Vikram Joshi",
    "department": "Sales",
    "designation": "Account Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 11,
    "joiningDate": "2023-06-08"
  },
  {
    "id": 5,
    "name": "Simran Reddy",
    "department": "Support",
    "designation": "Customer Support",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 13,
    "joiningDate": "2023-04-21"
  },
  {
    "id": 6,
    "name": "Anjali Patel",
    "department": "Engineering",
    "designation": "DevOps Engineer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 4,
    "joiningDate": "2023-07-01"
  },
  {
    "id": 7,
    "name": "Simran Yadav",
    "department": "Marketing",
    "designation": "Content Writer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 6,
    "joiningDate": "2023-03-14"
  },
  {
    "id": 8,
    "name": "Nitin Gupta",
    "department": "HR",
    "designation": "HR Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 16,
    "joiningDate": "2023-06-23"
  },
  {
    "id": 9,
    "name": "Kavita Patel",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 7,
    "joiningDate": "2023-08-11"
  },
  {
    "id": 10,
    "name": "Amit Joshi",
    "department": "Sales",
    "designation": "Sales Executive",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 12,
    "joiningDate": "2023-02-20"
  },
  {
    "id": 11,
    "name": "Simran Mishra",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 7,
    "joiningDate": "2023-10-04"
  },
  {
    "id": 12,
    "name": "Priya Reddy",
    "department": "Finance",
    "designation": "Accountant",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-05-30"
  },
  {
    "id": 13,
    "name": "Sneha Verma",
    "department": "Finance",
    "designation": "Accountant",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 8,
    "joiningDate": "2023-07-18"
  },
  {
    "id": 14,
    "name": "Meena Reddy",
    "department": "Sales",
    "designation": "Sales Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 14,
    "joiningDate": "2023-08-11"
  },
  {
    "id": 15,
    "name": "Karan Sharma",
    "department": "HR",
    "designation": "HR Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 5,
    "joiningDate": "2023-06-01"
  },
  {
    "id": 16,
    "name": "Simran Sharma",
    "department": "Finance",
    "designation": "Accountant",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 11,
    "joiningDate": "2023-02-28"
  },
  {
    "id": 17,
    "name": "Anjali Kapoor",
    "department": "HR",
    "designation": "Recruiter",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 19,
    "joiningDate": "2023-04-12"
  },
  {
    "id": 18,
    "name": "Ravi Kapoor",
    "department": "Finance",
    "designation": "Accountant",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-10-04"
  },
  {
    "id": 19,
    "name": "Anjali Yadav",
    "department": "Marketing",
    "designation": "Content Writer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 0,
    "joiningDate": "2023-09-09"
  },
  {
    "id": 20,
    "name": "Neha Gupta",
    "department": "HR",
    "designation": "Recruiter",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 15,
    "joiningDate": "2023-05-11"
  }
],
  swiggy:[
  {
    "id": 1,
    "name": "Priti",
    "department": "Engineering",
    "designation": "Software Engineer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 17,
    "joiningDate": "2023-07-24",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 10,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 2,
        "remaining": 8
      },
      {
        "leaveType": "Casual",
        "used": 5,
        "remaining": 5
      }
    ]
  },
  {
    "id": 2,
    "name": "Ramesh",
    "department": "HR",
    "designation": "HR Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 3,
    "joiningDate": "2023-10-12",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 1,
        "remaining": 19
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 11
      }
    ]
  },
  {
    "id": 3,
    "name": "Suresh",
    "department": "HR",
    "designation": "Frontend Engineer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 12,
    "joiningDate": "2023-11-03",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 7,
        "remaining": 13
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 4,
    "name": "Divya Mishra",
    "department": "HR",
    "designation": "HR Executive",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 10,
    "joiningDate": "2023-06-28",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 4,
        "remaining": 16
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 17
      }
    ]
  },
  {
    "id": 5,
    "name": "Kavita Joshi",
    "department": "Finance",
    "designation": "Auditor",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 16,
    "joiningDate": "2023-09-03",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 9,
        "remaining": 11
      },
      {
        "leaveType": "Sick",
        "used": 5,
        "remaining": 5
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 13
      }
    ]
  },
  {
    "id": 6,
    "name": "Anjali Gupta",
    "department": "Sales",
    "designation": "Account Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 0,
    "joiningDate": "2023-03-20",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 0,
        "remaining": 10
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 10
      }
    ]
  },
  {
    "id": 7,
    "name": "Neha Joshi",
    "department": "Support",
    "designation": "Support Executive",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 8,
    "joiningDate": "2024-01-04",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 3,
        "remaining": 17
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 11
      }
    ]
  },
  {
    "id": 8,
    "name": "Karan Joshi",
    "department": "Sales",
    "designation": "Account Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 11,
    "joiningDate": "2023-04-18",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 5,
        "remaining": 15
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 17
      }
    ]
  },
  {
    "id": 9,
    "name": "Amit Yadav",
    "department": "HR",
    "designation": "Recruiter",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 0,
    "joiningDate": "2023-03-16",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 0,
        "remaining": 10
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 10
      }
    ]
  },
  {
    "id": 10,
    "name": "Manish Gupta",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 5,
    "joiningDate": "2023-08-24",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 2,
        "remaining": 18
      },
      {
        "leaveType": "Sick",
        "used": 2,
        "remaining": 8
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 19
      }
    ]
  },
  {
    "id": 11,
    "name": "Sneha Gupta",
    "department": "Engineering",
    "designation": "Frontend Engineer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 10,
    "joiningDate": "2023-03-02",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 6,
        "remaining": 14
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 19
      }
    ]
  },
  {
    "id": 12,
    "name": "Rohit Kapoor",
    "department": "Engineering",
    "designation": "Backend Engineer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-02-08",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 11
      }
    ]
  },
  {
    "id": 13,
    "name": "Meena Verma",
    "department": "HR",
    "designation": "Recruiter",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 13,
    "joiningDate": "2023-11-29",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 8,
        "remaining": 12
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  }
],
  phenom :[
  {
    "id": 1,
    "name": "Neha Mishra",
    "department": "Marketing",
    "designation": "SEO Specialist",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 14,
    "joiningDate": "2023-04-12",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 7,
        "remaining": 13
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 2,
    "name": "Sneha Mishra",
    "department": "Support",
    "designation": "Customer Support",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 3,
    "joiningDate": "2023-01-20",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 1,
        "remaining": 19
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 11
      }
    ]
  },
  {
    "id": 3,
    "name": "Vikram Verma",
    "department": "Engineering",
    "designation": "QA Engineer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 15,
    "joiningDate": "2023-06-18",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 8,
        "remaining": 12
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 16
      }
    ]
  },
  {
    "id": 4,
    "name": "Manish Verma",
    "department": "Engineering",
    "designation": "Frontend Engineer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 11,
    "joiningDate": "2023-06-18",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 6,
        "remaining": 14
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 5,
    "name": "Karan Mehta",
    "department": "Finance",
    "designation": "Accountant",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 11,
    "joiningDate": "2023-08-22",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 6,
        "remaining": 14
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 6,
    "name": "Karan Mehta",
    "department": "Marketing",
    "designation": "Content Writer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 20,
    "joiningDate": "2023-05-03",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 10,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 4,
        "remaining": 6
      }
    ]
  },
  {
    "id": 7,
    "name": "Tina Sharma",
    "department": "Finance",
    "designation": "Accountant",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 15,
    "joiningDate": "2023-08-22",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 8,
        "remaining": 12
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 8,
    "name": "Anjali Reddy",
    "department": "HR",
    "designation": "Recruiter",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 19,
    "joiningDate": "2023-03-15",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 10,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 9,
    "name": "Anjali Gupta",
    "department": "Support",
    "designation": "Support Executive",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 0,
    "joiningDate": "2023-12-05",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 0,
        "remaining": 10
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 10
      }
    ]
  },
  {
    "id": 10,
    "name": "Priya Yadav",
    "department": "HR",
    "designation": "HR Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 14,
    "joiningDate": "2023-03-15",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 7,
        "remaining": 13
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 11,
    "name": "Karan Yadav",
    "department": "HR",
    "designation": "HR Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 19,
    "joiningDate": "2023-11-30",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 10,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 12,
    "name": "Nitin Mishra",
    "department": "Sales",
    "designation": "Sales Executive",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 8,
    "joiningDate": "2023-07-25",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 4,
        "remaining": 16
      },
      {
        "leaveType": "Sick",
        "used": 2,
        "remaining": 8
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 13,
    "name": "Pooja Yadav",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 17,
    "joiningDate": "2023-09-12",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 9,
        "remaining": 11
      },
      {
        "leaveType": "Sick",
        "used": 5,
        "remaining": 5
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 14,
    "name": "Neha Yadav",
    "department": "Support",
    "designation": "Customer Support",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 10,
    "joiningDate": "2023-12-05",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 5,
        "remaining": 15
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 15,
    "name": "Sanjay Joshi",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 14,
    "joiningDate": "2023-04-12",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 7,
        "remaining": 13
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 16,
    "name": "Sneha Mishra",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 20,
    "joiningDate": "2023-10-08",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 10,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 4,
        "remaining": 6
      }
    ]
  },
  {
    "id": 17,
    "name": "Simran Verma",
    "department": "Marketing",
    "designation": "Content Writer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-10-08",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 11
      }
    ]
  },
  {
    "id": 18,
    "name": "Rohit Sharma",
    "department": "Engineering",
    "designation": "Frontend Engineer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 18,
    "joiningDate": "2023-02-11",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 9,
        "remaining": 11
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 19,
    "name": "Nitin Joshi",
    "department": "Marketing",
    "designation": "SEO Specialist",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 4,
    "joiningDate": "2023-01-20",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 2,
        "remaining": 18
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 19
      }
    ]
  },
  {
    "id": 20,
    "name": "Meena Mehta",
    "department": "Engineering",
    "designation": "Software Engineer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-07-25",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 11
      }
    ]
  }
],
  synopsis:[
  {
    "id": 1,
    "name": "Rohit Gupta",
    "department": "Support",
    "designation": "Customer Support",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 11,
    "joiningDate": "2023-04-10",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 6,
        "remaining": 14
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 2,
    "name": "Sanjay Gupta",
    "department": "Support",
    "designation": "Support Executive",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 19,
    "joiningDate": "2023-05-20",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 10,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 3,
    "name": "Kavita Verma",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-01-30",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 11
      }
    ]
  },
  {
    "id": 4,
    "name": "Anjali Mishra",
    "department": "Support",
    "designation": "Tech Support",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 13,
    "joiningDate": "2023-08-14",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 7,
        "remaining": 13
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 5,
    "name": "Sanjay Mehta",
    "department": "Finance",
    "designation": "Finance Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 9,
    "joiningDate": "2023-07-07",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 4,
        "remaining": 16
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 6,
    "name": "Sneha Mehta",
    "department": "Engineering",
    "designation": "Backend Engineer",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 18,
    "joiningDate": "2023-02-27",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 9,
        "remaining": 11
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 7,
    "name": "Neha Gupta",
    "department": "Finance",
    "designation": "Finance Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 4,
    "joiningDate": "2023-09-19",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 2,
        "remaining": 18
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 1,
        "remaining": 19
      }
    ]
  },
  {
    "id": 8,
    "name": "Kavita Kapoor",
    "department": "Support",
    "designation": "Customer Support",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 8,
    "joiningDate": "2023-06-11",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 4,
        "remaining": 16
      },
      {
        "leaveType": "Sick",
        "used": 2,
        "remaining": 8
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 9,
    "name": "Sanjay Patel",
    "department": "Sales",
    "designation": "Sales Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 9,
    "joiningDate": "2023-03-04",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 4,
        "remaining": 16
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 10,
    "name": "Arjun Kapoor",
    "department": "Support",
    "designation": "Tech Support",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-11-22",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 11
      }
    ]
  },
  {
    "id": 11,
    "name": "Ravi Verma",
    "department": "Marketing",
    "designation": "Marketing Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 20,
    "joiningDate": "2023-05-18",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 10,
        "remaining": 10
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 4,
        "remaining": 6
      }
    ]
  },
  {
    "id": 12,
    "name": "Meena Joshi",
    "department": "Support",
    "designation": "Customer Support",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 2,
    "joiningDate": "2023-08-25",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 1,
        "remaining": 19
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 11
      }
    ]
  },
  {
    "id": 13,
    "name": "Tina Yadav",
    "department": "Finance",
    "designation": "Auditor",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 9,
    "joiningDate": "2023-03-15",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 4,
        "remaining": 16
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 14,
    "name": "Meena Patel",
    "department": "HR",
    "designation": "HR Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 18,
    "joiningDate": "2023-02-07",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 9,
        "remaining": 11
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 15,
    "name": "Sneha Joshi",
    "department": "HR",
    "designation": "HR Manager",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 1,
    "joiningDate": "2023-10-30",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 1,
        "remaining": 9
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 11
      }
    ]
  },
  {
    "id": 16,
    "name": "Nitin Mishra",
    "department": "HR",
    "designation": "Recruiter",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 15,
    "joiningDate": "2023-01-16",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 8,
        "remaining": 12
      },
      {
        "leaveType": "Sick",
        "used": 4,
        "remaining": 6
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 17,
    "name": "Kavita Mehta",
    "department": "Marketing",
    "designation": "SEO Specialist",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 12,
    "joiningDate": "2023-11-10",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 6,
        "remaining": 14
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
  },
  {
    "id": 18,
    "name": "Vikram Reddy",
    "department": "Sales",
    "designation": "Sales Manager",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 10,
    "joiningDate": "2023-06-04",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 5,
        "remaining": 15
      },
      {
        "leaveType": "Sick",
        "used": 3,
        "remaining": 7
      },
      {
        "leaveType": "Casual",
        "used": 2,
        "remaining": 18
      }
    ]
  },
  {
    "id": 19,
    "name": "Pooja Kapoor",
    "department": "Marketing",
    "designation": "Content Writer",
    "status": "active",
    "totalLeaves": 40,
    "usedLeaves": 0,
    "joiningDate": "2023-07-29",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 0,
        "remaining": 20
      },
      {
        "leaveType": "Sick",
        "used": 0,
        "remaining": 10
      },
      {
        "leaveType": "Casual",
        "used": 0,
        "remaining": 10
      }
    ]
  },
  {
    "id": 20,
    "name": "Nitin Mishra",
    "department": "Marketing",
    "designation": "SEO Specialist",
    "status": "on leave",
    "totalLeaves": 40,
    "usedLeaves": 18,
    "joiningDate": "2023-04-09",
    "leaveDetails": [
      {
        "leaveType": "Annual",
        "used": 9,
        "remaining": 11
      },
      {
        "leaveType": "Sick",
        "used": 6,
        "remaining": 4
      },
      {
        "leaveType": "Casual",
        "used": 3,
        "remaining": 17
      }
    ]
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
