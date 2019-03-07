import React from "react";
import prodImage from "../assets/img/products/product-grey-7.jpg";
const ProductCockpit = () => {
  return (
    <section className="product-details__main">
      <div className="slider">
        <div className="slider__items">
          <div
            className="slider__item active"
            style={{ backgroundImage: `url(${prodImage})` }}
          />
          <div
            className="slider__item"
            style={{ backgroundImage: `url(${prodImage})` }}
          />
          <div
            className="slider__item"
            style={{ backgroundImage: `url(${prodImage})` }}
          />
        </div>

        <div className="slider__indicators">
          <span className="slider__indicator active" />
          <span className="slider__indicator" />
          <span className="slider__indicator" />
        </div>
      </div>

      <div className="product-details__info">
        <h1>Blue Ladies Handbag</h1>
        <div className="rating">
          <div className="rating__stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </div>
          <div className="rating__data">2 reviews</div>
        </div>
        <div className="product-details__amount">$22</div>
        <p className="product-details__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          nibh sed elimttis adipiscing. Fusce in hendrerit purus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed tempus nibh sed
          elimttis adipiscing. Fusce in hendrerit purus.
        </p>
        <div className="product-details__add">
          <div className="increment-control">
            <a href="#" className="increment-control__action">
              -
            </a>
            <input type="text" className="form-control" title="Qty" value="1" />
            <a href="#" className="increment-control__action">
              +
            </a>
          </div>
          <button href="#" className="btn btn--primary">
            Add to cart
          </button>
        </div>
        <div className="product-details__meta">
          Categories:{" "}
          <a rel="tag" href="#">
            Accessories
          </a>
          ,{" "}
          <a rel="tag" href="#">
            Bags
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default ProductCockpit;
