import React, { useState } from "react";
import { createCampaign } from "../Api.js";

const CampaignForm = () => {
    const [formData, setFormData] = useState({ displayName: "", budget: "", startDate: "", endDate: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createCampaign(formData);
            console.log("Campaign Created:", response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="displayName" placeholder="Campaign Name" onChange={handleChange} />
            <input name="budget" placeholder="Budget (USD)" onChange={handleChange} />
            <input name="startDate" type="date" onChange={handleChange} />
            <input name="endDate" type="date" onChange={handleChange} />
            <button type="submit">Create Campaign</button>
        </form>
    );
};

export default CampaignForm;
