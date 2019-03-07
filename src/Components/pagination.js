import React from "react";
const Pagination = () => {
  return (
    <div className="paging">
      <div className="paging__arrow">
        <i className="fas fa-angle-left" />
      </div>

      <div className="paging__number active">1</div>
      <div className="paging__number">2</div>
      <div className="paging__number">3</div>

      <div className="paging__arrow">
        <i className="fas fa-angle-right" />
      </div>
    </div>
  );
};

export default Pagination;
