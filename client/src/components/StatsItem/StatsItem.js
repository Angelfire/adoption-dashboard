import React from "react";

import "./StatsItem.scss";

const StatsItem = ({ color, number, info, icon }) => (
  <div className={`StatsItem StatsItem--${color}`}>
    <i className={`StatsItem__icon ${icon}`} />
    <h3 className="StatsItem__number">{number}</h3>
    <p className="StatsItem__info">{info}</p>
  </div>
);

export default StatsItem;
