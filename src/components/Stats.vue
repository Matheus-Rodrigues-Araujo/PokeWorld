<script setup>
import Evolutions from "./StatsComponents/Evolutions.vue";
import Statistic from "./StatsComponents/Statistic.vue";
import Weakness from "./StatsComponents/Weakness.vue";
import Moves from "./StatsComponents/Moves.vue";
import Type from "./StatsComponents/Type.vue";

defineProps({
  pokemon: Object,
});
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <div class="px-5 w-50 mx-auto">
      <h6 class="fs-4 text-capitalize">{{ pokemon.name }}</h6>
      <div class="pokemon-card rounded-3">
        <img
          :src="pokemon?.sprites.other['official-artwork'].front_default"
          :alt="pokemon.name"
          :title="pokemon.name"
          style="background-color: cyan"
          class="rounded"
        />
      </div>
    </div>
    <Evolutions />
  </div>
  <Type />
  <Statistic />
  <Weakness />
  <Moves />
</template>
