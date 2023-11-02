import React, { useState, useEffect } from "react";

export default function ListPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(JSON.parse(localStorage.getItem("pokemons") || "[]"));
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

  //////////////////////////////////////////
  const [pokemon, setpokemon] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // console.log(pokemon);

  const displayAbility =
    pokemon.abilities && pokemon.abilities.length > 0
      ? pokemon.abilities[0].ability.name
      : "";

  return (
    <div>
      <h1>List Pokemon!</h1>

      {/* shearch bar */}
      <div>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
      </div>

      <div>
        {/* display name */}
        <h2>{pokemon.name}</h2>

        {/* display id */}
        <h2>{pokemon.id}</h2>

        {/* display image */}
        <img src={pokemon.sprites?.front_default} alt="pokemon" />

        {/* display ability */}
        <h2>{displayAbility}</h2>

        {/* display type */}
        <h2>{pokemon.types?.[0].type.name}</h2>
      </div>

      {/* Add to pokedex */}
      <div className="add">
        <button onClick={() => addPokemons(pokemon.id)} className="buttonAdd">
          +
        </button>
      </div>
    </div>
  );
}
