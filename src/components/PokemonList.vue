<script setup>
import { onMounted, reactive } from "vue";
import PokemonCard from "./PokemonCard.vue";
import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const pokemonData = reactive({
  id: 0,
  name: '',
  types: [],
  weight: 0,
  sprites: [],
  moves: [],
  forms: [],
  species: {},
});

const fetchPokemon = async () => {
  try {
    const res = await axios.get(`${baseURL}/2`);
    const data = await res.data;

    pokemonData.id = data.id
    pokemonData.name = data.name
    pokemonData.types = data.types
    pokemonData.weight = data.weight
    pokemonData.sprites = data.sprites
    pokemonData.moves = data.moves
    pokemonData.forms = data.forms
    pokemonData.species = data.species

    console.log(pokemonData.types)
  } catch (error) {
    console.error("error", error);
  }
};

onMounted(() => {
  fetchPokemon();
  fetchPokedex()
});
</script>
<template>
 <div v-if="pokemonData.name">
    <ul class="d-flex flex-wrap px-5 w-100 my-3 gap-3">
      <PokemonCard
        :id="pokemonData.id"
        :name="pokemonData.name"
        :weight="pokemonData.weight"
        :sprites="pokemonData.sprites"
        :moves="pokemonData.moves"
        :forms="pokemonData.forms"
        :species="pokemonData.species"
        :types="pokemonData.types"
      />
      
    </ul>
  </div>
</template>
