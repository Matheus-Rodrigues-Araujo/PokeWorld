<script setup>
import PokedexData from './PokedexData.vue';
</script>
<template>
    <div class="pokemon-card">
        <img src="/src/assets/bulbasaur.png" alt="Bulbasaur">
        <div class="card-info py-2 px-2 d-flex justify-content-between align-items-center">
            <h4 class="text-white" >Bulbasaur</h4>
            <ul class="list-unstyled d-flex gap-1" >
                <li class="type text-white rounded-1 px-2 fs-5 fw-medium bg-success">Grass</li>
                <li class="type text-white rounded-1 px-2 fs-5 fw-medium" style="background-color: purple;">Poison</li>
            </ul>
        </div>
    </div>
    <PokedexData />
</template>
<style>
    .pokemon-card{
        display: flex;
        background-color: var(--gray);
        flex-direction: column;
        width: 100%;
        cursor: pointer;
    }

    .pokemon-card:hover{
        scale: 1.02;
        transition: 0.2s ease-in-out;
    }

    .pokemon-card img{
        max-width: 100%;
        height: auto;
        margin-inline: auto;
    }

    .pokemon-card .card-info{
        background-color: var(--light-gray);
    }

</style>