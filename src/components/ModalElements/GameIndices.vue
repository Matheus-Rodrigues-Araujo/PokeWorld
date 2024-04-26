<script setup>
const props = defineProps({
  games: Array,
});
</script>
<template>
  <div class="games px-2 px-md-5 d-flex flex-column">
    <h6 class="fs-4 text-center">Games Indices</h6>
    <ul class="games-list gap-1 p-0">
      <li
        v-for="game in games"
        class="game d-flex flex-column p-1 gap-1 align-items-center justify-content-center fs-6 rounded-1"
      >
        <p class="m-0">Index {{ game.game_index }}</p>
        <p class="m-0">Version {{ game.version.name }}</p>
      </li>
    </ul>
  </div>
</template>
<style>
.games-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
