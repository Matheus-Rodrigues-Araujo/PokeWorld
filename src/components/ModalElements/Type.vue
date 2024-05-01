<script setup>
import { inject } from "vue";
const props = defineProps({
  typesList: Array,
});
const currentLanguage = inject("currentLanguage");
</script>
<template>
  <div class="moves px-2 px-md-5 d-flex flex-column align-items-center">
    <h6 class="fs-4">
      {{ $translate(`options.${currentLanguage}.type.title`) }}
    </h6>
    <ul class="list-unstyled d-flex gap-1">
      <li
        v-for="typeItem in props.typesList"
        class="type rounded-1 px-2 fs-5 fw-medium"
        :class="typeItem.type.name"
      >
        {{
          $translate(
            `options.${currentLanguage}.type.type_list.${typeItem.type.name}`
          )
        }}
      </li>
    </ul>
  </div>
</template>
