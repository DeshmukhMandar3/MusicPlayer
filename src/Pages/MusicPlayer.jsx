import React from "react";
import Poster from "../Components/Poster";
import Player from "../Components/Player";

const MusicPlayer = () => {
  return (
    <div
      style={{ backgroundColor: "#1E1E1E", color: "white", height: "100vh" }}
    >
      <Poster />
      <Player />
    </div>
  );
};

export default MusicPlayer;
