import React, { Component } from "react";
// import image from "../assets/img/products/product-grey-1.jpg";
import Filter from "../Components/filter";
import Product from "../Components/product";
import Pagination from "../Components/pagination";
import { connect } from "react-redux";

class ProductList extends Component {
  Paginate(items, pageNumber, pageSize) {
    let startindex = (pageNumber - 1) * pageSize;
    return items.slice(startindex, startindex + pageSize);
  }

  allProducts = this.Paginate(
    this.props.pr,
    this.props.currentPage,
    this.props.pageSize
  );

  render() {
    const products = this.allProducts.map((product, index) => (
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
      <section className="item-listing">
        <Filter />
        <div className="item-listing__items item-listing--3items">
          {products}
        </div>
        <Pagination
          pageChanged={this.pageChangedHandler}
          itemsCount={this.props.pr.length}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
        />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    pr: state.products,
    pageSize: state.pageSize,
    currentPage: state.currentPage
  };
};
export default connect(
  mapStateToProps,
  null
)(ProductList);
