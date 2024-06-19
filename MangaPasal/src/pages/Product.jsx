import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Display from "../components/Display/Display.jsx";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay.jsx";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox.jsx";
import Similar from "../components/SimilarManga/Similar.jsx";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Display product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <Similar />
    </div>
  );
};

export default Product;
