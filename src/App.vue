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
    <div class="pokedex-content d-flex flex-column justify-content-center" >
      <Filters />
      <PokemonList />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.pokedex-content{
  max-width: 1100px;
  margin-inline: auto;
}

</style>
