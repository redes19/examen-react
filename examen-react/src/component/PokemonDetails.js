import React from "react";
import LocalStorage from "./localStorage";
import IconTypes from "./IconTypes";

const PokemonDetail = ({ pokemon, pokemonTypes }) => {
  return (
    <div className={`detail ${pokemon.types[0].type.name}`}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.id}</p>
      <p>Weight: {pokemon.weight} kg</p>
      <p>
        Types:{" "}
        <div className="type">
          {pokemon.types.map((type, index) => (
            <IconTypes
              key={index}
              type={type.type.name}
              pokemonTypes={pokemonTypes}
            />
          ))}
        </div>
      </p>
      {/* display abilities */}

      <div className="add">
        <LocalStorage id={pokemon.id} />
      </div>
    </div>
  );
};

export default PokemonDetail;
