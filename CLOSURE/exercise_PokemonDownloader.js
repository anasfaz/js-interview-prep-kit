
import fetch from "node-fetch";

const PokemonDownloader = () => {
  let PokemonCache = {};
  const BaseURl = "https://pokeapi.co/api/v2/pokemon/";
  const download = async (pokemonName) => {
    if (PokemonCache[pokemonName]) {
        //it is in the Cache
        console.log(`${pokemonName} was in the Cache`);
      return PokemonCache[pokemonName];
    } else {
      //ditto
        const res = await fetch(BaseURl + pokemonName);
        
        const json = await res.json()
        console.log(`${pokemonName} fetch from the API`);
        PokemonCache[pokemonName] = json;
        return json
    }
  };

  return download;
};


const getPokemon = PokemonDownloader()

 getPokemon('ditto')
getPokemon('ditto')