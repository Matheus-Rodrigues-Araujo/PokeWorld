<script setup>
import Evolutions from "./ModalElements/Evolutions.vue";
import Stats from "./ModalElements/Stats.vue";
import Weakness from "./ModalElements/Weakness.vue";
import Moves from "./ModalElements/Moves.vue";
import Type from "./ModalElements/Type.vue";
import MainSprite from "./ModalElements/MainSprite.vue";

defineProps({
  pokemon: Object,
});
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <MainSprite :name="pokemon.name" :sprites="pokemon?.sprites" />
    <Evolutions :id="pokemon.id" />
    <Type />
    <Stats />
    <Weakness />
    <Moves />
  </div>
</template>