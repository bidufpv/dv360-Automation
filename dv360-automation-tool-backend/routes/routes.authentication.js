const express = require("express");
const oauth2Client = require("../config/googleAuth");
const router = express.Router();

router.get("/login", (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: ["https://www.googleapis.com/auth/display-video"],
    });
    res.redirect(authUrl);
});

router.get("/callback", async (req, res) => {
    const code = req.query.code;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    res.json({ message: "Authentication successful", tokens });
});

module.exports = router;
