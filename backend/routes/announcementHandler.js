// backend/routes/announcement.js


const {getAnnouncementsController} = require("../controllers/announcements");
const getAnnouncements = (req, res) => {
  try{
    const { company } = req.query;
    const announcements = getAnnouncementsController(company);

    if (!announcements) {
      return res.status(404).json({ message: "No Announcements are found" });
    }
    res.json(announcements);
  }
  catch(error){
    console.error("Error fetching employees:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {getAnnouncements};