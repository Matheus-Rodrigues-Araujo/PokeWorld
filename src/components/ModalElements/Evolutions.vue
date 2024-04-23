<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
const evolutionChain = reactive({});
const isLoading = ref(false);

const props = defineProps({
  id: Number,
});

const fetchEvolutionChain = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/evolution-chain/${props.id}/`
    );
    const data = await response.data;
    evolutionChain.value = data;
    console.log(evolutionChain.value);
    isLoading.value = false;
  } catch (error) {
    console.error("error", error);
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchEvolutionChain();
});
</script>
<template>
  <div
    class="evolutions-container px-2 px-md-5 d-flex flex-column align-items-center"
  >
    <h6 class="fs-4">Evolutions</h6>
    <div
      v-if="evolutionChain.value"
      class="evolution-list d-flex flex-wrap gap-3"
    >
      <div class="evolution d-flex justify-content-center">
        <img class="rounded" src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
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
