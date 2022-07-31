import "reset-css";
import React from "react";
import ReactDOM from "react-dom/client";
import EmotionCompRenderer from "components/emotion-ui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <EmotionCompRenderer />
  // </React.StrictMode>
);
