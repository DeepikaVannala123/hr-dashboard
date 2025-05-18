
const {getTenantController} = require("../controllers/tenants");
const getTenants = (req, res) => {
  try{
    const { company } = req.params;
    const tenants = getTenantController(company);

    if (!tenants) {
      return res.status(404).json({ message: "No Companies are listed" });
    }
    res.json(tenants);
  }
  catch(error){
    console.error("Error fetching employees:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {getTenants};
