<script setup>
import { provide, reactive, ref } from "vue";
import AdvancedSearch from "./components/AdvancedSearch.vue";
import Filters from "./components/Filters.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SearchInput from "./components/SearchInput.vue";
import PokemonList from "./components/PokemonList.vue";
import { i18n } from "./main";
const searchValue = ref("");
const pokemonsList = ref([]);
const translation = reactive(i18n);
const currentLanguage = ref("en");

provide("searchValue", searchValue);
provide("pokemonsList", pokemonsList);
provide("translation", translation);
provide("currentLanguage", currentLanguage);
</script>

<template>
  <div class="app-container" >
    <Header />
    <main>
      <SearchInput />
      <div class="pokedex-content d-flex flex-column justify-content-center">
        <PokemonList />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.pokedex-content {
  max-width: 1100px;
  margin-inline: auto;
}

</style>
