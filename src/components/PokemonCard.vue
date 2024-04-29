<script setup>
import PokemonModal from "./PokemonModal.vue";
import axios from "axios";
import Loading from "./Loading.vue";
import { inject, onMounted, reactive, ref } from "vue";
import getPokemonData from "../utils/getPokemonData";
const props = defineProps({
  name: String,
});

const showPokedexData = ref(false);
const pokemon = reactive({});
const isLoading = ref(true);
const pokemonsList = inject("pokemonsList");

onMounted(() => {
  savePokemon();
});

const savePokemon = async () => {
  try {
    const pokemonResponse = await getPokemonData(props.name, isLoading.value);
    const pokemonData = await pokemonResponse;
    const speciesURL = await pokemonResponse.species;
    if (speciesURL) {
      const speciesResponse = await fetchSpeciesInformation(speciesURL);
      const data = await speciesResponse;
      const { names, evolution_chain } = data;
      const translations = names.filter(
        (item) =>
          item.language.name === "en" ||
          item.language.name === "es" ||
          item.language.name === "pt-BR"
      );
      pokemonData.translations = translations
      pokemonData.evolution_chain = evolution_chain
      pokemon.value = pokemonData
      pokemonsList.value.push(pokemon.value)
    }
  } catch (error) {
    console.error("error", error);
  }
};

const fetchSpeciesInformation = async (species) => {
  try {
    const response = await axios.get(species.url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("error", error);
    return false;
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

.normal {
  background-color: #a8a878;
  color: #000000;
}
.fighting {
  background-color: #c03028;
  color: #ffffff;
}
.flying {
  background-color: #a890f0;
  color: #000000;
}
.poison {
  background-color: #a040a0;
  color: #ffffff;
}
.ground {
  background-color: #e0c068;
  color: #000000;
}
.rock {
  background-color: #b8a038;
  color: #ffffff;
}
.bug {
  background-color: #a8b820;
  color: #000000;
}
.ghost {
  background-color: #705898;
  color: #ffffff;
}
.steel {
  background-color: #b8b8d0;
  color: #000000;
}
.fire {
  background-color: #f08030;
  color: #ffffff;
}
.water {
  background-color: #6890f0;
  color: #ffffff;
}
.grass {
  background-color: #7ae644;
  color: 000000;
}
.electric {
  background-color: #f8d030;
  color: #000000;
}
.psychic {
  background-color: #f85888;
  color: #ffffff;
}
.ice {
  background-color: #98d8d8;
  color: #000000;
}
.dragon {
  background-color: #7038f8;
  color: #ffffff;
}
.dark {
  background-color: #705848;
  color: #ffffff;
}
.fairy {
  background-color: #ee99ac;
  color: #000000;
}
.unknown {
  background-color: #68a090;
  color: #ffffff;
}
.shadow {
  background-color: #604e82;
  color: #ffffff;
}
</style>
