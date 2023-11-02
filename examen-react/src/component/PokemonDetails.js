import React, { useState, useEffect } from "react";

const PokemonDetail = ({ pokemon }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const storedPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    setPokemons(storedPokemons);
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  const addPokemons = (id) => {
    if (id !== null) {
      const storedPokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
      if (!storedPokemons.includes(id)) {
        const updatedPokemons = [...storedPokemons, id];
        localStorage.setItem("pokemons", JSON.stringify(updatedPokemons));
        setPokemons(updatedPokemons);
        console.log(id);
        console.log(updatedPokemons);
        console.log(localStorage);
      } else {
        console.log("déjà dans le pokedex");
      }
    }
  };

  const clear = () => {
    localStorage.removeItem("pokemons");
    setPokemons([]); // Mettez à jour l'état local également si nécessaire
  };

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Weight: {pokemon.weight} kg</p>
      {/* display types */}
      <p>
        Types:{" "}
        {pokemon.types.map((type, index) => (
          <span key={index}>{type.type.name}</span>
        ))}
      </p>
      {/* display abilities */}
      <p>
        Abilities:{" "}
        {pokemon.abilities.map((ability, index) => (
          <span key={index}>{ability.ability.name}</span>
        ))}
      </p>
      {/* / Add to pokedex */}
      <div className="add">
        <button onClick={() => addPokemons(pokemon.id)} className="buttonAdd">
          +
        </button>
        <button onClick={() => clear()} className="buttonAdd">
          -
        </button>
      </div>
    </div>
  );
};

export default PokemonDetail;
