import React, { Component } from "react";
import Product from "../assets/img/products/product-grey-7.jpg";

class AddProduct extends Component {
  state = {};

  // pageChangedHandler = page => {
  //   this.setState({ currentPage: page });
  // };

  render() {
    return (
      <div className="add-product container">
        <form action="">
          <div className="add-product__images slider">
            <div className="add-product__image-actions">
              <div className="add-product__image-action">
                <a href="/">
                  <i className="fas fa-plus-square" />
                </a>
                <a href="/">
                  <i className="fas fa-edit" />
                </a>
                <a href="/">
                  <i className="fas fa-trash-alt" />
                </a>
              </div>
            </div>
            <div className="slider__items">
              <div
                className="slider__item active"
                style={{ backgroundImage: `url(${Product})` }}
              />
              <div
                className="slider__item"
                style={{ backgroundImage: `url(${Product})` }}
              />
              <div
                className="slider__item"
                style={{ backgroundImage: `url(${Product})` }}
              />
            </div>
            <div className="slider__indicators">
              <span className="slider__indicator active" />
              <span className="slider__indicator" />
              <span className="slider__indicator" />
            </div>
          </div>

          <div className="add-product__data">
            <div className="form-controls">
              <section className="tabs">
                <div className="tabs__headers">
                  <div className="tabs__header active">English</div>
                  <div className="tabs__header">Arabic</div>
                </div>
                <div className="tabs__bodies">
                  <div className="tabs__body active">
                    <div className="form-group invalid">
                      <label htmlFor="">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                      />
                    </div>
                  </div>
                  <div className="tabs__body ">
                    <div className="form-group invalid">
                      <label htmlFor="">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description</label>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="form-group">
                <label htmlFor="">Price</label>
                <input className="form-control" type="text" name="" id="" />
              </div>
              <div className="add-product__discount">
                <div className="form-group">
                  <label htmlFor="">Satus</label>
                  <div className="form-group__radios">
                    <div className="form-group__radio">
                      <input type="radio" name="" id="" />
                      <span>On Sale</span>
                    </div>
                    <div className="form-group__radio">
                      <input type="radio" name="" id="" />
                      <span>Not On Sale</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Discount</label>
                  <input className="form-control" type="text" name="" id="" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Payment Types</label>
                <div className="form-group__checkboxs">
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Direct Bank Transfare </span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Cheque Payment</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Paypal</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Visa</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>Mastercard</span>
                  </div>
                  <div className="form-group__checkbox">
                    <input type="checkbox" name="" id="" />
                    <span>On Dilivery</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Category</label>
                <select className="form-control" name="" id="">
                  <option value="">Arts & Crafts</option>
                  <option value="">Automotive</option>
                  <option value="">Baby</option>
                  <option value="">Books</option>
                  <option value="">Eletronics</option>
                  <option value="">Women's Fashion</option>
                  <option value="">Men's Fashion</option>
                  <option value="">Health & Household</option>
                  <option value="">Home & Kitchen</option>
                  <option value="">Military Accessories</option>
                  <option value="">Movies & Television</option>
                  <option value="">Sports & Outdoors</option>
                  <option value="">Tools & Home Improvement</option>
                  <option value="">Toys & Games</option>
                </select>
              </div>

              <div className="taged-textbox form-group">
                <label className="taged-textbox__lable" htmlFor="">
                  Tags
                </label>
                <div className="taged-textbox__data">
                  <div className="taged-textbox__tags">
                    <div className="taged-textbox__tag">
                      <span>tag1</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag2</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag3</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag4</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag5</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag6</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag7</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag8</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag9</span>
                      <a href="/" className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                    <div className="taged-textbox__tag">
                      <span>tag10</span>
                      <a className="taged-textbox__remove">
                        <i className="fas fa-times" />
                      </a>
                    </div>
                  </div>
                  <div className="taged-textbox__clear">
                    <a href="/">
                      <i className="fas fa-times" />
                    </a>
                  </div>
                </div>
                <input
                  className="taged-textbox__textbox form-control"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="add-product__actions">
                <button href="/" className="btn btn--gray">
                  Cancel
                </button>
                <button href="/" className="btn btn--primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProduct;
