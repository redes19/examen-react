import React, { useState, useEffect } from "react";

export default function LocalStorage() {
  //////////////////////////////////////////////////////////////////////////////
  // LocalStorage
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsInput, setpokemonsInput] = useState("");

  useEffect(() => {
    setPokemons(JSON.parse(localStorage.getItem("pokemons") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  const addPokemons = () => {
    if (pokemonsInput.trim() !== "") {
      setPokemons([...pokemons, pokemonsInput]);
      setpokemonsInput("");
    }
  };

  const deletepokemons = (e) => {
    const updatedPokemons = pokemons.filter((_, index) => index !== e);
    setPokemons(updatedPokemons);
  };
  return <div>localStorage</div>;
}
