<script setup>
import { ref } from "vue";

const props = defineProps({
  moves: Array,
});

const count = ref(12);
</script>
<template>
  <div class="moves px-2 px-md-5 d-flex flex-column">
    <h6 class="fs-4 text-center">Moves</h6>
    <ul class="moves-list gap-1 p-0">
      <li
        v-for="move in props.moves.slice(0, count)"
        class="move fs-6 text-center rounded-1"
      >
        {{ move.move.name }}
      </li>
    </ul>
    <button
      class="w-50 p-2 mx-auto mt-3 text-white fs-5 fw-bold border-0 rounded-1"
      @click="count < props.moves.length ? (count += 8) : (count = 12)"
      v-if="props.moves.length > 20"
      style="background-color: var(--custom-red)"
    >
      {{ count < props.moves.length ? "Show more moves" : "Show less" }}
    </button>
  </div>
</template>
<style>
.moves-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}
.move {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: rgb(37, 40, 45);
  color: white;
  text-transform: capitalize;
}

@media screen and (max-width: 800px) {
  .moves-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .moves-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
