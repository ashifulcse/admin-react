import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export default function BasePage() { 
    const Dashboard = lazy(() => import("./Dashboard")); 

    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/Transition" element={<Transition />} />  */}
            </Routes>
        </Suspense>
    );
}