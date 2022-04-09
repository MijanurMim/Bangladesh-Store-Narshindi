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
    </div>
  );
};

export default Sidebar;
