import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";

import "./Table.scss";

const Table = ({ data }) => {
  return (
    <div
      className="Table Table__container"
      role="table"
      aria-label="Animal Base"
    >
      <TableHeader />
      <TableBody data={data} />
    </div>
  );
};

export default Table;
