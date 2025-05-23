const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
