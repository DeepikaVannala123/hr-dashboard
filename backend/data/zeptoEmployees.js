// Example for Zepto (create similar for Acme as well)
const zeptoEmployees = [
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
  // Add more employees
];

// Mock Announcements for Zepto
const zeptoAnnouncements = [
  {
    id: 1,
    title: "Holiday Announcement",
    message: "The office will be closed on the 25th for the holiday.",
    timestamp: new Date().toISOString(),
    author: "HR Team",
  },
  {
    id: 2,
    title: "New Project Launched",
    message: "We are launching a new product next month. Stay tuned!",
    timestamp: new Date().toISOString(),
    author: "Product Team",
  },
];

module.exports = { zeptoEmployees, zeptoAnnouncements };
