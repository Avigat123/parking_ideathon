// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const parkingRoutes = require("./routes/parking");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/routes/parking", parkingRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("Current working directory:", __dirname);
console.log("Looking for:", __dirname + "/routes/parking.js");

});
