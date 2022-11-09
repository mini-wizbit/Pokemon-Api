import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search for Pokemon</Link>
      </nav>
    </div>
  );
}
