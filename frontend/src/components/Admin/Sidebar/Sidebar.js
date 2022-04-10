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
    </div>
  );
};

export default Sidebar;
