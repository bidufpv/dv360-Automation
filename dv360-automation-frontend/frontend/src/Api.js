import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createCampaign = (data) => API.post("/campaign/create", data);
export const createLineItem = (data) => API.post("/lineitem/create", data);
