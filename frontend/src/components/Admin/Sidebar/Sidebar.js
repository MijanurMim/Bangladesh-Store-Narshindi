import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to="/">
        <p>Go Back Home</p>
      </Link>
      <Link to="/admin/dashboard">
        <p>Dashboard</p>
      </Link>
      <Link to="/admin/products">
        <p>All Products</p>
      </Link>
      <Link to="/admin/product">
        <p>Single Product</p>
      </Link>
      <Link to="/admin/product">
        <p>Single Product</p>
      </Link>
      <Link to="/admin/product">
        <p>Single Product</p>
      </Link>
      <Link to="/admin/product">
        <p>Single Product</p>
      </Link>
    </div>
  );
};

export default Sidebar;
