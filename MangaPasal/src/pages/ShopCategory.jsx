import React, { useContext } from "react";
import "./ShopCategory.css";
import dropdown from "../components/assets/dropdown.png";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item.jsx";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className="shopcategory-banner" />
      <div className="shopcategory-index">
        <p>
          <span>Showing 1-12</span> Out of 36 Products.
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
