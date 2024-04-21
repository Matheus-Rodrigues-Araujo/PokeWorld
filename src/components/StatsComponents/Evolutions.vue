<template>
  <div class="evolutions-container px-2 px-md-5 d-flex flex-column">
    <h6 class="fs-4">Evolutions</h6>
    <div class="evolution-list d-flex flex-wrap justify-content-between gap-3">
      <div class="evolution d-flex justify-content-center">
        <img class="rounded" src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
      </div>

      <div class="evolution d-flex justify-content-center">
        <img class="rounded" src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
      </div>

      <div class="evolution d-flex justify-content-center">
        <img class="rounded" src="/src/assets/bulbasaur.png" alt="Bulbasaur" />
      </div>
    </div>
  </div>
</template>

<style>
.evolution {
  cursor: pointer;
}


.evolution img {
  max-width: 120px;
  height: auto;
  background-color: var(--gray);
}

.evolution:hover {
  scale: 1.02;
  transition: 0.2s ease-in-out;
}
</style>
