<script setup>
const props = defineProps({
  moves: Array,
});
</script>
<template>
  <div class="moves px-2 px-md-5 d-flex flex-column">
    <h6 class="fs-4 text-center">Moves</h6>
    <ul class="moves-list gap-1 p-0">
      <li v-for="move in props.moves" class="move fs-6 text-center rounded-1">
        {{ move.move.name }}
      </li>
    </ul>
  </div>
</template>
<style>
.moves-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.move {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: rgb(37, 40, 45);
  color: white;
  text-transform: capitalize;
}

@media screen and (max-width: 720px) {
  .moves-list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
