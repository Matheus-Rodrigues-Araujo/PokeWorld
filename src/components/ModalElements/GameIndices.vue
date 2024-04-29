<script setup>
import { ref, inject } from 'vue';

const props = defineProps({
  games: Array,
});

const currentLanguage = inject('currentLanguage')

const count = ref(8)
</script>
<template>
  <div class="games px-2 px-md-5 d-flex flex-column">
    <h6 class="fs-4 text-center">
      {{ $translate(`options.${currentLanguage}.modal.game_indices.title`) }}
    </h6>
    <ul class="games-list p-0">
      <li v-for="game in games.slice(0, count)"
        class="game d-flex flex-column p-2 align-items-center justify-content-center  rounded-1"
      >
        <p class="m-0 fs-6">Index {{ game.game_index }}</p>
        <p class="m-0 fs-6 ">Version {{ game.version.name }}</p>
      </li>
    </ul>
    <button
      class="w-50 p-2 mx-auto mt-3 text-white fs-5 fw-bold border-0 rounded-1"
      @click="count < props.games.length ? (count += 4) : (count = 8)"
      v-if="props.games.length > 12"
      style="background-color: var(--custom-red)"
    >
      {{ count < props.games.length ? "Show more games" : "Show less" }}
    </button>
  </div>
</template>
<style>

.games-list{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}
.game {
  width: auto;
  background-color: rgb(66, 31, 179);
  color: white;
  text-transform: capitalize;
}

@media screen and (max-width: 720px) {
  .games-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .games-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
