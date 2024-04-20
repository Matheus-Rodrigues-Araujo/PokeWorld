<script setup>
import Evolutions from "./StatsComponents/Evolutions.vue";
import Statistic from "./StatsComponents/Statistic.vue";
import Weakness from "./StatsComponents/Weakness.vue";
import Moves from "./StatsComponents/Moves.vue";
import Type from "./StatsComponents/Type.vue";
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <div class="px-5">
      <h6 class="fs-4">#001 Bulbasaur</h6>
      <div class="pokemon-card bg-dark">
        <img src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
      </div>
    </div>
    <Evolutions />

  </div>
  <Type />
  <Statistic />
  <Weakness />
  <Moves />
</template>
