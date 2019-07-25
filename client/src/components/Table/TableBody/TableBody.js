import React, { Fragment } from "react";
import RowStatus from "../RowStatus/RowStatus";

const TableBody = ({ data }) => {
  const animals = data.map(item => {
    return (
      <div className="Table-row" role="rowgroup" key={item._id}>
        <div className="Table-row__cell" role="cell">
          {item.ui}
        </div>
        <div className="Table-row__cell" role="cell">
          {item.name}
        </div>
        <div className="Table-row__cell" role="cell">
          {item.breed}
        </div>
        <div className="Table-row__cell" role="cell">
          {item.age}
        </div>
        <div className="Table-row__cell" role="cell">
          {item.lastUpdate}
        </div>
        <div className="Table-row__cell" role="cell">
          <RowStatus status={item.status} />
        </div>
      </div>
    );
  });

  return <Fragment>{animals}</Fragment>;
};

export default TableBody;
