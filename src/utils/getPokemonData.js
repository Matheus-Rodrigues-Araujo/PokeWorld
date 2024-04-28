import axios from "axios";

const getPokemonData = async (pokemon=String) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do Pokémon:", error);
  } 
};

export default getPokemonData