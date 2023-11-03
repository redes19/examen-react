import React, { useState, useEffect } from "react";
import PokemonDetail from "./PokemonDetails";

export default function MyPokemon() {
  const [pokemons, setPokemons] = useState([]); // State to store the list of stored Pokemon IDs.
  const [pokemonDetails, setPokemonDetails] = useState([]); // State to store detailed information about the stored Pokemon.

  // UseEffect to load stored Pokemon IDs from LocalStorage when the component mounts.
  useEffect(() => {
    const storedPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    setPokemons(storedPokemons);
  }, []);

  // UseEffect to fetch and load detailed information about stored Pokemon.
  useEffect(() => {
    // Function to fetch Pokemon details for each stored Pokemon ID.
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        pokemons.map(async (pokemonId) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
          );
          const data = await response.json();
          return data;
        })
      );
      setPokemonDetails(details); // Update the state with the fetched Pokemon details.
    };

    fetchPokemonDetails(); // Call the function to initiate the data fetching.
  }, [pokemons]); // Trigger this effect whenever the list of stored Pokemon IDs changes.

  // remove all pokemon
  const clear = () => {
    localStorage.removeItem("pokemons");
    setPokemons([]); // Update the local state if necessary.
  };

  return (
    <div className="myPokedex">
      <h1 className="title">pokedex</h1>
      <div className="pokedex">
        {pokemonDetails.map((pokemon, index) => (
          <p key={index}>
            {/* Render the PokemonDetail component for each Pokemon */}
            <PokemonDetail pokemon={pokemon} />
          </p>
        ))}
      </div>
      <div id="clear">
        <button onClick={clear}>relachez tous les pokemons</button>
      </div>
    </div>
  );
}
