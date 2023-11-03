import React, { useState, useEffect } from "react";
import LocalStorage from "./localStorage";
import PokemonDetail from "./PokemonDetails";
import IconTypes from "./IconTypes";
export default function ListPokemon() {
  //////////////////////////////////////////
  const [pokemon, setpokemon] = useState([]);
  const [search, setSearch] = useState("");

  //This code uses useEffect to make a GET request to the Pokémon API using the value of "search" as a parameter, or the default number (25) if it's empty, then stores the resulting data in the "pokemon" state
  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${search ? search : 25}/`;
    fetch(apiUrl, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setpokemon(data))
      .catch((error) => console.error(error));
    // console.log(data);
  }, [search]);

  // This function, "handleSearch," takes an event (typically a text input change event) as an argument. It extracts the value from the triggering element and sets it as the new value for the "search" state.
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // console.log(pokemon);

  return (
    <div>
      {/* shearch bar */}
      <div className="search">
        <div className="txt">
          <input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>

        <div className="DisplayPokemon">
          <div className="pni">
            {/* display name */}
            <p>{pokemon.name}</p>
          </div>

          {/* display image */}
          <img src={pokemon.sprites?.front_default} alt="pokemon" />

          {/* display id */}
          <p>{pokemon.id}</p>

          {/* display weight */}
          <p>Weight: {pokemon.weight} kg</p>

          {/* display type */}
          <p>
            Types:{" "}
            <div className="type">
              {pokemon.types ? (
                pokemon.types.map((type, index) => (
                  <IconTypes
                    key={index}
                    type={type.type.name}
                    pokemonTypes={pokemon.types}
                  />
                ))
              ) : (
                <span>Loading types...</span>
              )}
            </div>
          </p>
        </div>

        {/* Add to pokedex */}
        <div className="add">
          <LocalStorage id={pokemon.id} />
        </div>
      </div>
    </div>
  );
}
