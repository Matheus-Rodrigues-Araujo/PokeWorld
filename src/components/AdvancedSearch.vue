<template>
  <div
    class="position-relative"
    style="background-color: var(--dark-gray); height: 50px"
  >
    <button
      class="advanced-search-btn gap-1 d-flex align-items-center justify-content-center text-white fw-medium border-0"
      style="background-color: var(--dark-gray)"
    >
      Show Advanced Search
      <i class="bi bi-hexagon-half fs-5"></i>
    </button>
  </div>
</template>
<style>
.advanced-search-btn {
  position: absolute;
  width: 280px;
  border-radius: 3rem;

  left: 50%;
  bottom: -15px;
  padding: 5px 20px;
  transform: translateX(-50%);
}
</style>
