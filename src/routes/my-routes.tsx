import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Beranda, Kontak, Portofolio, TentangSaya } from "../pages";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/tentang-saya" element={<TentangSaya />} />
                <Route path="/portofolio" element={<Portofolio />} />
                <Route path="/kontak" element={<Kontak />} />
            </Routes>
        </BrowserRouter>
    )
}