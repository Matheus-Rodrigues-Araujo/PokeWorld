<script setup>
const props = defineProps({
  typesList: Array,
});

// console.log(props.types[0].type.name)
</script>
<template>
  <div class="moves px-2 px-md-5 d-flex flex-column align-items-center">
    <h6 class="fs-4">Type</h6>
    <ul class="list-unstyled d-flex gap-1">
      <li
        v-for="type in props.typesList"
        class="type rounded-1 px-2 fs-5 fw-medium"
        :class="type.type.name"
      >
        {{ type.type.name }}
      </li>
    </ul>
  </div>
</template>

