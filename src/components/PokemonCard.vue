<script setup>
import PokedexData from "./PokedexData.vue";
import { ref } from "vue";

defineProps({
  id: Number,
  name: String,
  types: Array,
  weight: Number,
  sprites: Array,
  moves: Array,
  forms: Array,
  species: Object,
});

const showPokedexData = ref(false);
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
      #{{ id }}
    </div>
    <div class="pokemon-img rounded-top d-flex justify-content">
      <img
        :src="sprites.other['official-artwork'].front_default"
        alt="Bulbasaur"
      />
    </div>
    <div
      class="rounded-bottom card-info py-2 px-2 d-flex justify-content-between align-items-center"
    >
      <h4 class="text-white text-capitalize">{{ name }}</h4>
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
    :name="name"
    :weight="weight"
    :sprites="sprites"
    :moves="moves"
    :forms="forms"
    :species="species"
    :types="types"
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
  max-width: 215px;
  max-height: 215px;
  min-width: 180px;
  margin-inline: auto;
}

.pokemon-card .card-info {
  background-color: var(--light-gray);
}
</style>
