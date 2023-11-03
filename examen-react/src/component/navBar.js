import React from "react";
import { Link } from "react-router-dom";
import Logo from "./image/pok-mon-go-logo-png-30.png";

export default function NavBar() {
  // display of nav bar
  return (
    <div className="navBar">
      <div className="header">
        <div className="img">
          <img src={Logo} alt="" />
        </div>
        <ul className="list-nav">
          <li>
            <Link to="/">List Pokemon</Link>
          </li>
          <li>
            <Link to="/MyPokemon">Pokedex</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
