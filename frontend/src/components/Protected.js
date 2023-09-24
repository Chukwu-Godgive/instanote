import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// get the Authentication data
const userAuthentic = () => {
    let userDetails = JSON.parse(sessionStorage.getItem("currentUser"));
    return userDetails;
};

function Protected() {
    const isUserAuthentic = userAuthentic();
    return isUserAuthentic ? <Outlet/> : <Navigate to="/login"/>
};

export default Protected;