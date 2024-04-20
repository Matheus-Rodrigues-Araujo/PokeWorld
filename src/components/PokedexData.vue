<script setup>
import Stats from "./Stats.vue";

defineProps({
  togglePokedexData: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="pokedex-data-container z-3 position-fixed top-0  start-0 min-vh-100 w-100">
    <div class="pokedex-data">
      <div
        class="d-flex px-5 justify-content-between align-items-center"
        style="background-color: var(--custom-red); height: 60px;"
      >
        <div class="d-flex align-items-center py-2 gap-1">
          <svg
            fill="white"
            width="40px"
            height="60px"
            viewBox="0 0 512 512"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path
              d="M450.46,256.09C449.35,175.17,399.81,102.71,324,73.79,247.59,44.67,157.49,69,105.82,132.13,54.4,195,46.61,285.58,88.49,355.68c41.8,69.95,123.74,106,203.55,91.63,91-16.37,156.14-98.12,158.35-189.14A20.16,20.16,0,0,0,450.46,256.09ZM119.05,174.38C152.76,118,220.23,87,285,99.43c69.4,13.29,120.43,70.47,128.83,139H318.41c-8.26-27.36-32-48-62.62-48-29.65,0-55.15,20.65-63.11,48H97.74A158,158,0,0,1,119.05,174.38ZM286.13,256.1c-2,38.75-60.67,39.4-60.67,0S284.17,217.33,286.13,256.1Zm24,149.79C246.85,428.58,175,408.74,132.3,356.82a157.53,157.53,0,0,1-34.57-83H192.6c7.91,27.39,33.7,48,63.19,48,30.67,0,54.36-20.68,62.62-48h95.45C406.61,333,367.54,385.32,310.14,405.89Z"
            />
          </svg>
          <h5 class="text-white fs-3 m-0 text-white fs-3 fw-bold">POKÉDATA</h5>
        </div>
        <span class="fs-1" style="cursor: pointer" @click="togglePokedexData" >X</span>
      </div>
      <div class="data-wrapper bg-white d-flex flex-column">
        <div class="d-flex flex-column gap-3 my-3 ">
          <Stats />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.pokedex-data-container {
  background-color: rgba(63, 63, 63, 43%);
}

.data-wrapper{
  overflow-y: auto;
  scrollbar-width: none;
  max-height: calc(100vh - 50px);
  touch-action: pan-y;
}

.pokemon img {
  max-width: 100%;
  height: auto;
  margin-inline: auto;
}
</style>
