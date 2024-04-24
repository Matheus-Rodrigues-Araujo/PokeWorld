<script setup>
const props = defineProps({
  statsList: Array
})
</script>

<template>
  <div class="statistic px-2 px-md-5  align-items-center">
    <h6 class="fs-4 text-center">Stats</h6>
    <ul class="d-flex flex-column list-unstyled" style="gap: 2px;" >
      <li
        v-for="stat in statsList"
        class="stat-item"
      >
        <span
          class="fw-medium text-uppercase"
          >{{ stat.stat.name }}
        </span>
        <div class="percentage w-100">
          <div
            :style="{
              height: '100%',
              width: `${stat.base_stat}%`,
              backgroundColor: 'cyan',
            }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.stat-item{
  display: grid;
  grid-template-columns: auto 60%;
  gap: 2px;
}

.stat-item span{
  font-size: 12px;
  color: white;
  padding-left: 5px;
  background-color: var(--light-gray);
}

</style>
