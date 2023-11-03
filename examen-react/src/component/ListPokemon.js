import React, { useState, useEffect } from "react";
import Shearch from "./Shearch"; // Import the 'Shearch' component.
import PokemonDetail from "./PokemonDetails"; // Import the 'PokemonDetail' component.

export default function ListPokemon() {
  const [pokemonList, setPokemonList] = useState([]); // State for storing the list of Pokemon.
  const [page, setPage] = useState(1); // State for managing the current page number.
  const [totalPages, setTotalPages] = useState(1); // State for tracking the total number of pages.

  //////////////////////////////////////////////////////////////

  useEffect(() => {
    // This useEffect hook is used to fetch and update the list of Pokemon when the 'page' state changes.

    // Make an API call to retrieve the list of Pokemon names.
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${(page - 1) * 10}`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        const promises = results.map((result) =>
          fetch(result.url).then((response) => response.json())
        );

        // Retrieve details of each Pokemon using Promise.all.
        Promise.all(promises)
          .then((pokemonData) => {
            setPokemonList(pokemonData); // Update the 'pokemonList' state with the fetched data.
            setTotalPages(Math.ceil(data.count / 10)); // Calculate and update the total number of pages.
          })
          .catch((error) => {
            console.error(error);
          });
      });
  }, [page]);

  //////////////////////////////////////////////////////////////

  return (
    <div>
      <h1>List Pokemon</h1>
      <div className="listPokemon">
        <Shearch /> {/* Render the 'Shearch' component for searching. */}
        {/* List of Pokemon Details */}
        <div className="pokemonDetail">
          {pokemonList.map((pokemon) => (
            <PokemonDetail
              key={pokemon.id}
              pokemon={pokemon}
              pokemonTypes={pokemon.types}
            />
          ))}
        </div>
        {/* End of Pokemon Details Rendering */}
        {/* Pagination Controls */}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous Page
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
