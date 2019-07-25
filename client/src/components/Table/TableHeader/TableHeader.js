import React from "react";

const TableHeader = () => {
  return (
    <div className="Table-header" role="rowgroup">
      <div className="Table-header__row" role="columnheader">
        id
      </div>
      <div className="Table-header__row" role="columnheader">
        name
      </div>
      <div className="Table-header__row" role="columnheader">
        breed
      </div>
      <div className="Table-header__row" role="columnheader">
        age
      </div>
      <div className="Table-header__row" role="columnheader">
        last update
      </div>
      <div className="Table-header__row" role="columnheader">
        status
      </div>
    </div>
  );
};

export default TableHeader;
