import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Fashion</Link>
        </li>
        <li>
          <Link to="/products/p2">Sports</Link>
        </li>
        <li>
          <Link to="/products/p3">Electronics</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
