const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Existing employee route
const employeeRoutes = require("./routes/employee");
app.use("/api", employeeRoutes);

// ✅ Add this new line for announcements
const announcementRoutes = require("./routes/announcement");
app.use("/api", announcementRoutes);

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
