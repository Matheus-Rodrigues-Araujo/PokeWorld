<script setup>
defineProps({
  name: String,
  sprites: Object,
});
</script>
<template>
  <div class="px-2 px-md-5 d-flex flex-column align-items-center">
    <h6 class="fs-4 text-capitalize">{{ name }}</h6>
    <img
      :src="sprites.other['official-artwork'].front_default"
      :alt="name"
      :title="name"
      style="background-color: cyan"
      class="main-sprite rounded"
    />
  </div>
</template>
<style>
.main-sprite {
  max-width: 300px;
}
</style>
