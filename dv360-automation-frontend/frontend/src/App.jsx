import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampaignForm from "./components/CampaignForm";
import LineItemForm from "./components/LineItemForm";
import NavBar from "./components/NavBar";

const App = () => {
    return (
      <>
      <h1 className="text-2xl text-slate-900 text-justify"> Welcome to DV360 Automation Tool</h1>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" />
                <Route path="/campaign" element={<CampaignForm />} />
                <Route path="/lineitem" element={<LineItemForm />} />
                <Route path="/creatives" element={<h1>Creatives Page</h1>} />
                <Route path="/login" element={<h1>Login Page</h1>} />
            </Routes>
        </Router>
        </>
    );
};

export default App;
