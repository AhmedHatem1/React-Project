import React, { Component } from "react";
// import image from "../assets/img/products/product-grey-1.jpg";
import Filter from "../Components/filter";
import Product from "../Components/product";
import Pagination from "../Components/pagination";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    const products = this.props.pr.map((product, index) => (
      <Product
        key={index}
        id={product.id}
        name={product.name}
        priceBefore={product.priceBefore}
        priceAfter={product.priceAfter}
        ProductImg={product.ProductImg}
      />
    ));
    return (
      <section class="item-listing">
        <Filter />
        <div className="item-listing__items item-listing--3items">
          {products}
        </div>
        <Pagination />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    pr: state.products
  };
};
export default connect(
  mapStateToProps,
  null
)(ProductList);
