<script setup>
import getSpritesURL from "../../utils/getSpritesURL";
const props = defineProps({
  name: String,
  sprites: Object,
});

const spritesList = [];
getSpritesURL(props.sprites, spritesList);
</script>
<template>
  <div class="px-2 px-md-5 d-flex flex-column gap-3 align-items-center">
    <h6 class="fs-4 text-capitalize">{{ props.name }}</h6>
    <img
      :src="props.sprites?.other['official-artwork'].front_default"
      :alt="props.name"
      :title="props.name"
      style="background-color: cyan"
      class="main-sprite rounded"
    />
    <div class="sprites-container d-flex flex-column gap-3">
      <h6 class="fs-4 text-capitalize text-center">Sprites</h6>
      <div class="sprites-list rounded">
        <img
          v-for="sprite in spritesList"
          :src="sprite"
          :alt="props.name"
          :title="props.name"
          class="rounded"
        />
      </div>
    </div>
  </div>
</template>
<style>
.main-sprite {
  max-width: 300px;
}

.sprites-container {
  width: 100%;
}

.sprites-list {
  display: flex;
  gap: 3px;
  height: 100px;
  overflow-x: scroll;
}

.sprites-list img {
  background-color: rgb(222, 255, 224);
}
</style>
