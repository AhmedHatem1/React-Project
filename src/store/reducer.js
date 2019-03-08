import * as actionTypes from "./action";
import ProductImg from "../assets/img/products/product-grey-1.jpg";
import PersonalImg from "../assets/img/PersonalImage.png";
import IconImg from "../assets/img/icons/icon-cart-big.svg";
import Product1Img from "../assets/img/products/product-1.jpg";

const intiateState = {
  products: [
    {
      id: 1,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    },
    {
      id: 2,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    },
    {
      id: 3,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    },
    {
      id: 4,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    },
    {
      id: 5,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    },
    {
      id: 6,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    },
    {
      id: 7,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    },
    {
      id: 8,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    },
    {
      id: 9,
      name: "photo camera",
      ProductImg: ProductImg,
      PersonalImg: PersonalImg,
      IconImg: IconImg,
      Product1Img: Product1Img,
      priceBefore: 135,
      priceAfter: 100
    }
  ],
  pageSize: 6,
  currentPage: 1
};

const reducer = (state = intiateState) => {
  return {
    ...state
  };
};
export default reducer;
