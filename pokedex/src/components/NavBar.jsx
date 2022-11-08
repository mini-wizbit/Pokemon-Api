import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
