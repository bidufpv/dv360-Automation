const express = require("express");
const { google } = require("googleapis");
const router = express.Router();
const oauth2Client = require("../config/googleAuth");

router.post("/create", async (req, res) => {
    const { advertiserId, insertionOrderId, displayName, bidAmount, geoRegions } = req.body;

    try {
        const displayvideo = google.displayvideo({ version: "v2", auth: oauth2Client });
        const response = await displayvideo.advertisers.lineItems.create({
            advertiserId: advertiserId,
            requestBody: {
                lineItem: {
                    insertionOrderId,
                    displayName,
                    entityStatus: "ENTITY_STATUS_ACTIVE",
                    bidStrategy: {
                        fixedBid: { bidAmountMicros: bidAmount * 1000000 },
                    },
                    targeting: {
                        geoRegion: { targetedGeoRegionIds: geoRegions },
                    },
                },
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create line item" });
    }
});

module.exports = router;
