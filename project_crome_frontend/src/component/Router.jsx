import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/my-account" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
