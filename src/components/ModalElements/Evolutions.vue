<script setup>
import { onMounted, ref, inject } from "vue";
import axios from "axios";
import getEvolutionChain from "../../utils/getEvolutionChain";
import getPokemonData from "../../utils/getPokemonData";

const props = defineProps({
  evolutionChainURL: String,
});

const isLoading = ref(true);
const evolutionsList = ref([]);
const evolutionsData = ref([]);
const currentLanguage = inject('currentLanguage')

const fetchEvolutionChain = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(props.evolutionChainURL);
    const data = await response.data.chain;
    evolutionsList.value = getEvolutionChain(data, []);
    evolutionsList.value.map(async (item) => {
      const pokemon = await getPokemonData(item.name, isLoading.value);
      const { name, sprites, id } = pokemon;
      evolutionsData.value.push({ id, name, sprites });
    });
    evolutionsData.value.sort((a, b) => a.id - b.id);
  } catch (error) {
    console.log("error", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await fetchEvolutionChain();
});
</script>
<template>
  <div
    class="evolutions-container px-2 px-md-5 d-flex flex-column align-items-center"
  >
    <h6 class="fs-4">
      {{ $translate(`options.${currentLanguage}.modal.evolutions`) }}
    </h6>
    <div
      v-if="evolutionsData.length !== null"
      class="evolution-list d-flex flex-wrap gap-3"
    >
      <div
        v-for="evolution in evolutionsData"
        class="evolution d-flex flex-column align-items-center justify-content-center"
      >
        <img
          class="rounded"
          :src="
            evolution.sprites.other['official-artwork'].front_default ||
            evolution.sprites.front_default
          "
          :alt="
            evolution.name[0].toUpperCase() +
            evolution.name.slice(1, evolution.name.length)
          "
          :title="
            evolution.name[0].toUpperCase() +
            evolution.name.slice(1, evolution.name.length)
          "
        />
        <p class="text-capitalize">{{ evolution.name }}</p>
      </div>
    </div>
    <div v-else>
      <p class="text-dark fs-5">This Pokemon doesn't evolve</p>
    </div>
  </div>
</template>

<style>
.evolution {
  cursor: pointer;
}

.evolution img {
  max-width: 80px;
  height: auto;
  background-color: var(--gray);
}

.evolution:hover {
  scale: 1.02;
  transition: 0.2s ease-in-out;
}
</style>
