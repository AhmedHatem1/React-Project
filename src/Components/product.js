import React from "react";
import { Link } from "react-router-dom";
const Product = props => {
  return (
    <div className="item-medium-1">
      <div className="item-medium-1__alert">Sale</div>
      <div
        className="item-medium-1__image image"
        style={{ backgroundImage: "url(" + props.ProductImg + ")" }}
      >
        <a href="/" className="item-medium-1__action">
          Add to Cart
        </a>
      </div>
      <Link to={"/product-details/" + props.id}>
        <h4>{props.name}</h4>
        <div className="flex-row">
          <div>
            <del>{props.priceBefore}</del>
            <span className="lable">{props.priceAfter}</span>
          </div>
        </div>
      </Link>
      <div className="crud-actions">
        <a href="/">
          <i className="far fa-eye" />
        </a>
        <a href="/">
          <i className="fas fa-edit" />
        </a>
        <a href="/">
          <i className="fas fa-trash-alt" />
        </a>
      </div>
    </div>
  );
};

export default Product;
