import React, { useState } from "react";
import { createLineItem } from "../Api.js";

const LineItemForm = () => {
    const [formData, setFormData] = useState({
        advertiserId: "",
        insertionOrderId: "",
        displayName: "",
        bidAmount: "",
        geoRegions: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const geoRegionIds = formData.geoRegions.split(",").map((id) => id.trim());
            const response = await createLineItem({
                ...formData,
                geoRegions: geoRegionIds,
            });
            console.log("Line Item Created:", response.data);
            alert("Line Item created successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to create Line Item. Please check the console for errors.");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
                type="text"
                name="advertiserId"
                placeholder="Advertiser ID"
                value={formData.advertiserId}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="insertionOrderId"
                placeholder="Insertion Order ID"
                value={formData.insertionOrderId}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="displayName"
                placeholder="Line Item Name"
                value={formData.displayName}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="bidAmount"
                placeholder="Bid Amount (USD)"
                value={formData.bidAmount}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="geoRegions"
                placeholder="Geo Region IDs (comma-separated)"
                value={formData.geoRegions}
                onChange={handleChange}
                required
            />
            <button type="submit" style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>
                Create Line Item
            </button>
        </form>
    );
};

export default LineItemForm;
