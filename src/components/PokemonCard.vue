<script setup>
import axios from "axios";
import PokemonModal from "./PokemonModal.vue";
import Loading from "./Loading.vue";
import { inject, onMounted, reactive, ref } from "vue";

const props = defineProps({
  name: String,
});

const showPokedexData = ref(false);
const pokemon = reactive({});
const isLoading = ref(true);
const pokemonsList = inject("pokemonsList");
onMounted(() => {
  fetchPokemon();
});

const fetchPokemon = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${props.name}/`
    );
    const data = await response.data;
    pokemon.value = data;
    pokemonsList.value.push(pokemon.value);
  } catch (error) {
    console.error("Erro ao buscar dados do Pokémon:", error);
  } finally {
    isLoading.value = false;
  }
};

const togglePokedexData = () => {
  showPokedexData.value = !showPokedexData.value;
  document.body.classList.toggle("no-scroll");
};
</script>

<template>
  <Loading v-if="isLoading && !pokemon.value?.name" />
  <div
    v-else
    class="pokemon-card flex-grow-1 d-flex flex-column"
    @click="togglePokedexData"
  >
    <div
      class="pokemon-id position-absolute fs-5 left-2 p-1 bg-dark text-white"
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
      class="card-info rounded-bottom py-2 px-2 d-flex justify-content-between align-items-center"
    >
      <h4 class="text-white text-capitalize">{{ pokemon.value?.name }}</h4>
      <ul class="list-unstyled d-flex gap-1">
        <li
          v-for="typeItem in pokemon.value?.types"
          class="type rounded-1 px-2 fs-5 fw-medium"
          :class="typeItem.type.name"
        >
          {{ typeItem.type.name }}
        </li>
      </ul>
    </div>
  </div>
  <PokemonModal
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

.pokemon-id {
  border-bottom-right-radius: 5px;
  border-top-left-radius: 4px;
}

.pokemon-card {
  cursor: pointer;
}

.pokemon-card:hover {
  scale: 1.02;
  transition: 0.2s ease-in-out;
}

.pokemon-img img {
  background-color: var(--gray);
  max-width: 100%;
  margin-inline: auto;
}

.card-info {
  background-color: var(--light-gray);
}

.type {
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
}

.normal { background-color: #A8A878; color: #000000; }
.fighting { background-color: #C03028; color: #FFFFFF; }
.flying { background-color: #A890F0; color: #000000; }
.poison { background-color: #A040A0; color: #FFFFFF; }
.ground { background-color: #E0C068; color: #000000; }
.rock { background-color: #B8A038; color: #FFFFFF; }
.bug { background-color: #A8B820; color: #000000; }
.ghost { background-color: #705898; color: #FFFFFF; }
.steel { background-color: #B8B8D0; color: #000000; }
.fire { background-color: #F08030; color: #FFFFFF; }
.water { background-color: #6890F0; color: #FFFFFF; }
.grass { background-color: #7ae644; color: 000000; }
.electric { background-color: #F8D030; color: #000000; }
.psychic { background-color: #F85888; color: #FFFFFF; }
.ice { background-color: #98D8D8; color: #000000; }
.dragon { background-color: #7038F8; color: #FFFFFF; }
.dark { background-color: #705848; color: #FFFFFF; }
.fairy { background-color: #EE99AC; color: #000000; }
.unknown { background-color: #68A090; color: #FFFFFF; }
.shadow { background-color: #604E82; color: #FFFFFF; }
</style>
