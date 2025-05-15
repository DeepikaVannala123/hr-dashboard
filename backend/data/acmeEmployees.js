// Example for Zepto (create similar for Acme as well)
const acmeEmployees = [
  {
    id: 1,
    name: "Deepu",
    department: "Engineering",
    designation: "Software Engineer",
    status: "active",
    totalLeaves: 20,  // Total leaves
    usedLeaves: 5,    // Used leaves
  },
  {
    id: 2,
    name: "Preethi",
    department: "HR",
    designation: "HR Manager",
    status: "active",
    totalLeaves: 18,
    usedLeaves: 3,
  },
  // Add more employees
];

// Mock Announcements for Zepto
const acmeAnnouncements = [
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

module.exports = { acmeEmployees, acmeAnnouncements };
