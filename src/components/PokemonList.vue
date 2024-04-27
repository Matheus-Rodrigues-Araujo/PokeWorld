<script setup>
import { inject, onMounted, onUnmounted, ref, watchEffect } from "vue";
import PokemonCard from "./PokemonCard.vue";
import axios from "axios";
const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const searchValue = inject("searchValue");
const pokemonsList = inject("pokemonsList");
const pokemonArray = ref([]);
const isLoading = ref(false);
const enableInfiniteScroll = ref(true); // Variável para controlar o scroll infinito
let limit = 20;

const fetchPokemonArray = async (url) => {
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

watchEffect(() => {
  if (searchValue.value && searchValue.value.length > 2) {
    const filtered = pokemonsList.value.filter(
      (pokemon) =>
        pokemon.name.includes(searchValue.value.toLowerCase()) ||
        pokemon.id.toString() === searchValue.value
    );

    if (filtered) {
      const uniqueFiltered = [
        ...new Set(filtered.map((pokemon) => pokemon.name)),
      ].map((name) => filtered.find((pokemon) => pokemon.name === name));
      pokemonArray.value = uniqueFiltered;
      enableInfiniteScroll.value = false;
    } else {
      enableInfiniteScroll.value = false;
      fetchPokemonArray(
        `https://pokeapi.co/api/v2/pokemon/${searchValue.value}`
      );
    }
  } else {
    fetchPokemonArray(baseURL);
    enableInfiniteScroll.value = true;
  }
});

onMounted(() => {
  if (limit <= 10000) {
    fetchPokemonArray(baseURL, true);
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
      v-if="isLoading && enableInfiniteScroll.value"
      class="loading-indicator fs-4"
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
