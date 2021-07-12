import React from "react";
import ReactDom from "react-dom";

//import Animations from "./_animations.js";
import VideoPlayer from "./_video-player.js";
import DateHelper from "./_date-helper.js";
import HomeBrain from "./_home-brain.js";
import App from "./components/App.js";

import {
  featuresContainer,
  videoPlayer,
  iframePlaceholder,
  closeIcon,
  openBtns,
} from "./model/_model.js";

export function init() {
  ReactDom.render(<App />, document.getElementById("root"));
  //new Animations();
  new VideoPlayer(videoPlayer, iframePlaceholder, closeIcon, openBtns);
  new DateHelper();
  new HomeBrain(featuresContainer);
  console.log("App correctly initiated");
}
