import React from "react";
import StatsItem from "../StatsItem/StatsItem";
import AnimalBase from "../AnimalBase/AnimalBase";

import data from "../../data/dogs.json";

import "./Content.scss";

const Content = () => {
  return (
    <div className="Content">
      <aside className="Content__sidebar">
        <StatsItem
          color="tertiaryShade"
          number="32"
          info="Adopted Out"
          icon="icon-heart"
        />
        <StatsItem
          color="secundaryShade"
          number="9"
          info="Requests"
          icon="icon-envelope-letter"
        />
        <StatsItem
          color="primaryShade"
          number="32"
          info="Waiting list"
          icon="icon-clock"
        />
      </aside>
      <AnimalBase animal="Dogs" data={data} />
    </div>
  );
};

export default Content;
