<script setup>
import Evolutions from "./StatsComponents/Evolutions.vue";
import Statistic from "./StatsComponents/Statistic.vue";
import Weakness from "./StatsComponents/Weakness.vue";
import Moves from "./StatsComponents/Moves.vue";
</script>

<template>
  <div class="d-flex flex-column gap-3 my-3">
    <div class="px-5">
      <h6 class="fs-4">#001 Bulbasaur</h6>
      <div class="pokemon-card bg-dark">
        <img src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
        <div
          style="background-color: var(--custom-red)"
          class="card-info py-2 px-2 d-flex justify-content-center align-items-center"
        >
          <ul class="list-unstyled d-flex gap-1">
            <li class="type text-white rounded-1 px-2 fs-5 fw-medium bg-success">
              Grass
            </li>
            <li class="type text-white rounded-1 px-2 fs-5 fw-medium" style="background-color: purple">
              Poison
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Evolutions />
  </div>
  <Statistic />
  <Weakness />
  <Moves />
</template>
