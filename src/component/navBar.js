import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/MyPokemon">MyPokemon</Link>
        </li>
      </ul>
    </div>
  );
}
