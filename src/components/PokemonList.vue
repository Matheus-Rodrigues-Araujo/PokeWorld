<script setup>
import { onMounted, ref } from "vue";
import PokemonCard from "./PokemonCard.vue";
import axios from "axios";
const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=700";

const pokemonList = ref([]);

const fetchPokemonList = async () => {
  try {
    const response = await axios.get(baseURL);
    const data = await response.data;
    pokemonList.value = data.results;
  } catch (error) {
    console.error("error", error);
  }
};

onMounted(() => {
  fetchPokemonList();
});
</script>
<template>
  <ul
    v-if="pokemonList.length > 0"
    class="pokemon-list px-5 w-100 my-3 gap-3 list-unstyled"
  >
    <PokemonCard
      v-for="pokemon in pokemonList"
      :key="pokemon.name"
      :url="pokemon.url"
    />
  </ul>
</template>
<style>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(3, 320px);
  max-width: 1100px;
}

@media screen and (max-width: 1020px) {
  .pokemon-list {
    grid-template-columns: repeat(2, 320fr);
  }
}

@media screen and (max-width: 700px) {
  .pokemon-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
