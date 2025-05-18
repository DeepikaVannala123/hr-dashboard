const express = require('express');
const {getEmployees} = require('./employeeHandler.js'); // Import the employees routes
const {getAnnouncements} = require('./announcementHandler.js'); // Import the announcements routes
const {getTenants} = require('./tenantsHandler.js'); // Import the tenants routes
const router = express.Router();

// Example route: GET /
router.get('/employees', getEmployees); // Use the imported handler for the /employees route
router.get('/announcements',getAnnouncements); // Use the imported handler for the /announcements router
router.get('/tenants',getTenants); // Use the imported handler for the /tenants router
module.exports = router;