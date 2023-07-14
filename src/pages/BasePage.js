import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export default function BasePage() { 
    const Dashboard = lazy(() => import("./Dashboard")); 
    const SimpleLogin = lazy(() => import("../demo_pages/authentication/simple-login"));
    const CardLogin = lazy(() => import("../demo_pages/authentication/card-login"));
    const BasicTable = lazy(() => import("../components/tables/basic-table"));

    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/simple-login" element={<SimpleLogin />} /> 
                <Route path="/card-login" element={<CardLogin />} /> 
                <Route path="/basic-table" element={<BasicTable />} /> 
            </Routes>
        </Suspense>
    );
}