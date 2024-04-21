<template>
  <div class="evolutions-container px-2 px-md-5 d-flex flex-column">
    <h6 class="fs-4">Evolutions</h6>
    <div class="evolution-list d-flex flex-wrap justify-content-center gap-3">
      <div class="evolution bg-dark rounded-3 d-flex justify-content-center">
        <img src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
      </div>

      <div class="evolution bg-dark rounded-3 d-flex justify-content-center">
        <img src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
      </div>

      <div class="evolution bg-dark rounded-3 d-flex justify-content-center">
        <img src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
      </div>
    </div>
  </div>
</template>

<style>
.evolution {
  flex: 1;
  cursor: pointer;
}


.evolution img {
  max-width: 120px;
  height: auto;
}

.evolution:hover {
  scale: 1.02;
  transition: 0.2s ease-in-out;
}
</style>
