import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to="/admin/products">
        <p>All Products</p>
      </Link>
      <Link to="/admin/product">
        <p>New Product</p>
      </Link>
      <Link to="/admin/accessories">
        <p>All Accessories</p>
      </Link>
      <Link to="/admin/accessory">
        <p>New Accessories</p>
      </Link>
      <Link to="/admin/units">
        <p>All Unit Price</p>
      </Link>
      <Link to="/admin/unit">
        <p>New Unit Price</p>
      </Link>
    </div>
  );
};

export default Sidebar;
