// src/AppRouter.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Photo from "./pages/Photo";
import Navbar from "./components/Navbar";
import GameOne from "./pages/GameOne";
import GameTwo from "./pages/GameTwo";
import GameThree from "./pages/GameThree";
import GameFour from "./pages/GameFour";

const AppRouter: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/photos" element={<Photo />} />
        <Route path="/game-one" element={<GameOne />} />
        <Route path="/game-two" element={<GameTwo />} />
        <Route path="/game-three" element={<GameThree />} />
        <Route path="/game-four" element={<GameFour />} />
      </Routes>
    </>
  );
};

export default AppRouter;
