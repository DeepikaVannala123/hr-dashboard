const tenantsData = require('../model/tenants.js');
const getTenantController = () => {
  return tenantsData;
};

module.exports = {
  getTenantController
};