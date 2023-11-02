import React, { useState, useEffect } from "react";
import Shearch from "./Shearch";
import PokemonDetail from "./PokemonDetails";

export default function ListPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Faites un appel à l'API pour récupérer la liste des noms de Pokémon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10") // Remplacez 10 par le nombre de Pokémon que vous souhaitez afficher
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        const promises = results.map((result) =>
          fetch(result.url).then((response) => response.json())
        );

        Promise.all(promises)
          .then((pokemonData) => {
            setPokemonList(pokemonData);
          })
          .catch((error) => {
            console.error(error);
          });
      });
  }, []);

  //////////////////////////////////////////////////////////////

  return (
    <div>
      <Shearch />
      {/* list of pokemon */}
      <div>
        {pokemonList.map((pokemon) => (
          <PokemonDetail key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {/*  previous pages */}
      <button onClick={() => setPage(page - 1)}>Load Less</button>
      {/* next pages */}
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
}
