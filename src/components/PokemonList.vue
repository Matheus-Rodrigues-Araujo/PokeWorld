<script setup>
import { inject, onMounted, onUnmounted, ref, watchEffect } from "vue";
import PokemonCard from "./PokemonCard.vue";
import axios from "axios";
import filteredPokemon from "../utils/filteredPokemon";
import getPokemonData from "../utils/getPokemonData";

const searchValue = inject("searchValue");
const pokemonsList = inject("pokemonsList");
const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const pokemonArray = ref([]);
const isLoading = ref(false);
const enableInfiniteScroll = ref(true);
let limit = 20;

const fetchPokemonArray = async (url = String) => {
  try {
    isLoading.value = true;
    const response = await axios.get(url);
    const data = await response.data;
    pokemonArray.value = data.results;
    isLoading.value = false;
  } catch (error) {
    console.error("error", error);
    isLoading.value = false;
  }
};

watchEffect(async () => {
  isLoading.value = true;
  if (searchValue.value.length > 0) {
    const filtered = filteredPokemon(pokemonsList, searchValue);

    if (filtered.length > 0) {
      const uniqueFiltered = [
        ...new Set(filtered.map((pokemon) => pokemon.name)),
      ].map((name) => filtered.find((pokemon) => pokemon.name === name));
      pokemonArray.value = uniqueFiltered;
      enableInfiniteScroll.value = false;
      isLoading.value = false;
    } else {
      const pokemonData = await getPokemonData(searchValue.value);
      if (pokemonData) {
        pokemonArray.value = [pokemonData];
        enableInfiniteScroll.value = false;
        isLoading.value = false;
      } else {
      }
    }
  } else {
    fetchPokemonArray(baseURL);
    enableInfiniteScroll.value = true;
  }
});

onMounted(() => {
  if (limit <= 10000) {
    fetchPokemonArray(baseURL);
  }
});

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const totalHeight = document.documentElement.scrollHeight;

  if (
    enableInfiniteScroll.value &&
    scrollPosition >= totalHeight &&
    !isLoading.value
  ) {
    limit += 20;
    fetchPokemonArray(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
    );
  }
};

window.addEventListener("scroll", handleScroll);

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <ul
    v-if="pokemonArray.length > 0"
    class="pokemon-list px-5 w-100 my-3 gap-3 list-unstyled"
  >
    <PokemonCard
      v-for="pokemon in pokemonArray"
      :key="pokemon.name"
      :name="pokemon.name"
    />
    <div
      v-if="isLoading.value && enableInfiniteScroll.value"
      class="loading-indicator fs-3"
      style="color: var(--custom-red)"
    >
      Loading...
    </div>
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
