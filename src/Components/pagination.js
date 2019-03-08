import React from "react";
const Pagination = props => {
  let pageCount = Math.ceil(props.itemsCount / props.pageSize);
  if (pageCount === 1) return null;
  let pageArr = [];
  for (let i = 1; i <= pageCount; i++) {
    pageArr.push(i);
  }
  const { currentPage } = props;
  return (
    <div className="paging">
      <div className="paging__arrow">
        <i className="fas fa-angle-left" />
      </div>

      {pageArr.map((item, index) => {
        return (
          <div
            className={
              item === currentPage ? "paging__number active" : "paging__number"
            }
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="paging__arrow">
        <i className="fas fa-angle-right" />
      </div>
    </div>
  );
};

export default Pagination;
