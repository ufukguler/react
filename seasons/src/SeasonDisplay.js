import "./seasonDisplay.css";
import React from "react";

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={` season-display ${season}`}>
      <i className={`icon-left ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "let's hit the beach",
    iconName: "massive sun",
  },
  winter: {
    text: "burr it is cold",
    iconName: "massive snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default SeasonDisplay;
