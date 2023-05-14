import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Pages/MusicPlayer";
import HomePage from "../Pages/HomePage";
import MusicPlayer from "../Pages/MusicPlayer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/music"} element={<MusicPlayer />} />
    </Routes>
  );
};

export default AllRoutes;
