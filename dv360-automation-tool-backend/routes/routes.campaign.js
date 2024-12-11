const express = require("express");
const { google } = require("googleapis");
const router = express.Router();
const oauth2Client = require("../config/googleAuth");

router.post("/create", async (req, res) => {
    const { advertiserId, displayName, budget, startDate, endDate } = req.body;

    try {
        const displayvideo = google.displayvideo({ version: "v2", auth: oauth2Client });
        const response = await displayvideo.advertisers.campaigns.create({
            advertiserId: advertiserId,
            requestBody: {
                campaign: {
                    displayName: displayName,
                    budget: {
                        budgetUnit: "BUDGET_UNIT_CURRENCY",
                        budgetAmountMicros: budget * 1000000,
                    },
                    flight: {
                        plannedDates: {
                            startDate,
                            endDate,
                        },
                    },
                    entityStatus: "ENTITY_STATUS_ACTIVE",
                },
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create campaign" });
    }
});

module.exports = router;
