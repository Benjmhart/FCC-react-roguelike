import React from "react";
import Map from "./Map";
import HUD from "./HUD";

const GameView = () => {
  return (
    <div className="game-view">
      <Map />
      <HUD />
    </div>
  );
};
export default GameView;
