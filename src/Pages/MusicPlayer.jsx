import React, { useState } from "react";
import Poster from "../Components/Poster";
import Player from "../Components/Player";

const MusicPlayer = () => {
  const [songInd, setSongInd] = useState(0);
  function changeSong(ope) {
    if (ope === "NEXT") {
      if (songInd === 5) {
        setSongInd(0);
      } else {
        setSongInd((prev) => prev + 1);
      }
    } else {
      if (songInd === 0) {
        setSongInd(5);
      } else {
        setSongInd((prev) => prev - 1);
      }
    }
  }

  return (
    <div
      style={{ backgroundColor: "#1E1E1E", color: "white", height: "100vh" }}
    >
      <Poster songInd={songInd} />
      <Player songInd={songInd} changeSong={changeSong} />
    </div>
  );
};

export default MusicPlayer;
