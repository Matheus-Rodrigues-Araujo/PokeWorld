<script setup>
import Evolutions from "./StatsComponents/Evolutions.vue";
import Statistic from "./StatsComponents/Statistic.vue";
import Weakness from "./StatsComponents/Weakness.vue";
import Moves from "./StatsComponents/Moves.vue";
import Type from "./StatsComponents/Type.vue";

// defineProps({
//   id: Number,
//   name: String,
//   types: Array,
//   weight: Number,
//   sprites: Array,
//   moves: Array,
//   forms: Array,
//   species: Object,
// });
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <div class="px-5 w-50 mx-auto">
      <h6 class="fs-4 text-capitalize">{{ name }}</h6>
      <div class="pokemon-card rounded-3">
        <img
          src="/src/assets/bulbasaur.png"
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
