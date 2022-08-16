import React from "react";
import "@/../assets/sass/style.css";
import App from "@/Layout/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "@/Layout/Test";
import Harga from "@/Layout/Harga";
import Integrasi from "@/Layout/Integrasi";

export default function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/solusi" element={<Test />} />
                <Route path="/harga" element={<Harga />} />
                <Route path="integrasi" element={<Integrasi />} />
            </Routes>
        </Router>
    );
}
