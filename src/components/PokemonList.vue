<script setup>
import { inject, onMounted, onUnmounted, ref, watchEffect } from "vue";
import PokemonCard from "./PokemonCard.vue";
import axios from "axios";
const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const searchValue = inject("searchValue");
const pokemonsList = inject("pokemonsList");
const pokemonArray = ref([]);
const isLoading = ref(false);
let offset = 20;

const fetchPokemonArray = async (url) => {
  try {
    isLoading.value = true;
    const response = await axios.get(url);
    const data = await response.data;
    pokemonArray.value = [...pokemonArray.value, ...data.results];
    offset += 20; // Atualizando o offset para a próxima página
    isLoading.value = false;
  } catch (error) {
    console.error("error", error);
    isLoading.value = false;
  }
};

watchEffect(() => {
  if (searchValue.value.length > 2) {
    const filtered = pokemonsList.value.filter(
      (pokemon) =>
        pokemon.name.includes(searchValue.value.toLowerCase()) ||
        pokemon.id.toString() === searchValue.value
    );

    const uniqueFiltered = [
      ...new Set(filtered.map((pokemon) => pokemon.name)),
    ].map((name) => filtered.find((pokemon) => pokemon.name === name));
    pokemonArray.value = uniqueFiltered;
  } else {
    fetchPokemonArray(baseURL);
  }
});

onMounted(() => {
  fetchPokemonArray(baseURL);
});

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const totalHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= totalHeight && !isLoading.value) {
    fetchPokemonArray(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
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
    <div v-if="isLoading" class="loading-indicator">Carregando...</div>
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
