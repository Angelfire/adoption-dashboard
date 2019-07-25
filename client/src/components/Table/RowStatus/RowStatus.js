import React from "react";

import "./RowStatus.scss";

const RowStatus = ({ status }) => {
  return <span className={`RowStatus RowStatus--${status}`}>{status}</span>;
};

export default RowStatus;
