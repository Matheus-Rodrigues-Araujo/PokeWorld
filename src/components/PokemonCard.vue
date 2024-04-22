<script setup>
import axios from "axios";
import PokedexData from "./PokedexData.vue";
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
  url: String,
});

const showPokedexData = ref(false);
const pokemon = reactive({});

onMounted(() => {
  fetchPokemon();
});

const fetchPokemon = async () => {
  try {
    const response = await axios.get(props.url);
    const data = await response.data;
    pokemon.value = data;
  } catch (error) {
    console.error("Erro ao buscar dados do Pokémon:", error);
  }
};

const togglePokedexData = () => {
  showPokedexData.value = !showPokedexData.value;
  document.body.classList.toggle("no-scroll");
};
</script>

<template>
  <div
    class="pokemon-card flex-grow-1 d-flex flex-column"
    @click="togglePokedexData"
    style="cursor: pointer"
  >
    <div
      class="position-absolute fs-5 left-2 p-1 bg-dark text-white"
      style="border-bottom-right-radius: 5px; border-top-left-radius: 4px"
    >
      #{{
        pokemon.value?.id < 10
          ? "00" + pokemon.value?.id
          : pokemon.value?.id < 100
          ? "0" + pokemon.value?.id
          : pokemon.value?.id
      }}
    </div>
    <div class="pokemon-img rounded-top d-flex justify-content">
      <img
        :src="pokemon.value?.sprites.other['official-artwork'].front_default"
        :alt="pokemon.value?.name"
        :title="pokemon.value?.name"
      />
    </div>
    <div
      class="rounded-bottom card-info py-2 px-2 d-flex justify-content-between align-items-center"
    >
      <h4 class="text-white text-capitalize">{{ pokemon.value?.name }}</h4>
      <ul class="list-unstyled d-flex gap-1">
        <li class="type text-white rounded-1 px-2 fs-5 fw-medium bg-success">
          Grass
        </li>
        <li
          class="type text-white rounded-1 px-2 fs-5 fw-medium"
          style="background-color: purple"
        >
          Poison
        </li>
      </ul>
    </div>
  </div>
  <PokedexData
    v-if="showPokedexData"
    :togglePokedexData="togglePokedexData"
    :pokemon="pokemon.value"
    to
  />
</template>
<style>
.no-scroll {
  overflow-y: hidden;
}

.pokemon-img {
  background-color: var(--gray);
}

.pokemon-card:hover {
  scale: 1.02;
  transition: 0.2s ease-in-out;
}

.pokemon-card img {
  /* max-width: 215px;
  max-height: 215px;
  min-width: 180px; */
  max-width: 100%;
  margin-inline: auto;
}

.pokemon-card .card-info {
  background-color: var(--light-gray);
}
</style>
