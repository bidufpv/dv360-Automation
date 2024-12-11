const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const campaignRoutes = require("./routes/campaign");
const ioRoutes = require("./routes/io");
const lineItemRoutes = require("./routes/lineitem");
const creativeRoutes = require("./routes/creative");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/campaign", campaignRoutes);
app.use("/io", ioRoutes);
app.use("/lineitem", lineItemRoutes);
app.use("/creative", creativeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
