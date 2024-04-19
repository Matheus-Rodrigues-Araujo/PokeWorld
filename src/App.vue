<script setup>
import AdvancedSearch from "./components/AdvancedSearch.vue";
import Filters from "./components/Filters.vue";
import Header from "./components/Header.vue";
import SearchInput from "./components/SearchInput.vue";
import PokemonList from "./components/PokemonList.vue";
</script>

<template>
  <Header />
  <main>
    <SearchInput />
    <AdvancedSearch />
    <Filters />
    <PokemonList />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
