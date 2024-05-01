<script setup>
import { inject, watch } from "vue";
const currentLanguage = inject("currentLanguage");

defineProps({
  isSidebarVisible: Boolean,
});

watch(
  currentLanguage,
  (newLocale) => {
    currentLanguage.value = newLocale;
  },
  { immediate: true }
);
</script>

<template>
  <div class="sidebar d-flex flex-column p-3 vh-100 position-fixed end-0 z-1">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="d-flex align-items-center gap-1 mx-3">
        <i class="bi bi-globe-americas text-white"></i>
        <label for="selectLanguage">
          <select id="selectLanguage" v-model="currentLanguage">
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: black;
  transition: 2s ease-in-out;
  width: 280px;
  top: 60px;
  position: fixed;
  right: 0;
}

.sidebar select {
  background-color: black;
}
</style>
