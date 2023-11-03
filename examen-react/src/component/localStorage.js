import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LocalStorage({ id }) {
  //////////////////////////////////////////////////////////////////////////////
  // LocalStorage
  const [pokemons, setPokemons] = useState([]); // State for managing the list of stored Pokemon IDs.
  const location = useLocation(); // Access the current route location.

  // add pokemon
  const addPokemons = (id) => {
    if (id !== null) {
      const storedPokemons = JSON.parse(localStorage.getItem("pokemons")) || []; // Retrieve stored Pokemon IDs from LocalStorage.
      if (!storedPokemons.includes(id)) {
        const updatedPokemons = [...storedPokemons, id]; // Add the new Pokemon ID to the list.
        localStorage.setItem("pokemons", JSON.stringify(updatedPokemons)); // Update LocalStorage with the updated list.
        setPokemons(updatedPokemons); // Update the state with the new list.

        console.log(id);
        console.log(updatedPokemons);
        console.log(localStorage);
      } else {
        window.alert("Already in the Pokedex");
      }
    }
  };

  /////////////////////////////////////////////////
  // remove pokemon
  const removePokemon = (id) => {
    const storedPokemons = JSON.parse(localStorage.getItem("pokemons")) || []; // Retrieve stored Pokemon IDs from LocalStorage.
    const updatedPokemons = storedPokemons.filter(
      (pokemonId) => pokemonId !== id
    ); // Remove the specified Pokemon ID from the list.
    localStorage.setItem("pokemons", JSON.stringify(updatedPokemons)); // Update LocalStorage with the modified list.
    setPokemons(updatedPokemons); // Update the state with the new list.
    console.log(updatedPokemons);
    window.location.reload(); // Reload the page to reflect the changes.
  };

  return (
    <div>
      {location.pathname === "/MyPokemon" ? ( // Conditionally render buttons based on the current route.
        <div className="buttonRemove" id="button">
          <button onClick={() => removePokemon(id)}>-</button>
          {/* Button to remove a Pokemon. */}
        </div>
      ) : (
        <div className="buttonAdd" id="button">
          <button onClick={() => addPokemons(id)}>+</button>
          {/* Button to add a Pokemon. */}
        </div>
      )}
    </div>
  );
}
