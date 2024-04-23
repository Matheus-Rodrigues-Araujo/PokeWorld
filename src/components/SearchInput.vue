<script setup>
import { inject } from "vue";

const searchValue = inject('searchValue')

const handleInputChange = (e) => {
  searchValue.value = e.target.value
};

</script>
<template>
  <div class="search-input-container py-5">
    <div class="d-grid gap-1">
      <label for="" class="fs-4 text-white fw-semibold">Name or Number</label>
      <div class="d-flex">
        <input type="text" @input="handleInputChange" autocomplete="off" />
        <button
          class="text-white"
          style="
            background-color: var(--custom-red);
            border: none;
            border-top-right-radius: 0.3rem;
            border-bottom-right-radius: 0.3rem;
          "
        >
          <i class="bi bi-search fs-5 px-3"></i>
        </button>
      </div>
      <!-- <p class="text-white">
        keyboard shortcut to search:
        <span class="fs-6 bg-warning text-black px-1">Ctrl</span> +
        <span class="fs-6 bg-warning text-black px-1">K</span>
      </p> -->
    </div>
  </div>
</template>
<style>
.search-input-container {
  background-color: var(--light-gray);
  min-height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
}

input {
  height: 48px;
  width: 300px;
  border: none;
  padding: 5px;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  border-color: none;
}
</style>
