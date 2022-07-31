import "reset-css";
import React from "react";
import ReactDOM from "react-dom/client";
import MusicPlayer from "components/music-player";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <MusicPlayer />
  // </React.StrictMode>
);
