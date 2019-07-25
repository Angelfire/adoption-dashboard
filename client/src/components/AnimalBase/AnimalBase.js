import React from "react";
import Table from "../Table/Table";

import "./AnimalBase.scss";

const AnimalBase = ({ animal, data }) => {
  return (
    <div className="AnimalBase">
      <h2 className="AnimalBase__title">{animal}</h2>
      <Table data={data} />
    </div>
  );
};

export default AnimalBase;
