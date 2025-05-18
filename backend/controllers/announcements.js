const announcementsData = require("../model/announcements.js");

const getAnnouncementsController = (companyName) => {
  return announcementsData[companyName]||[];
};

module.exports = {
  getAnnouncementsController
};