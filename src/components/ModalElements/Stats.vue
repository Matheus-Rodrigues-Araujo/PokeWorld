<script setup>
const statList = [
  {
    name: "Hp",
    total: "100%",
    color: "red",
  },
  {
    name: "Atk",
    total: "80%",
    color: "orangered",
  },
  {
    name: "Def",
    total: "82%",
    color: "cyan",
  },
  {
    name: "SpA",
    total: "70%",
    color: "#ec539c",
  },
  {
    name: "SpD",
    total: "78%",
    color: "lightblue",
  },
  {
    name: "Spe",
    total: "95%",
    color: "gray",
  },
];
</script>

<template>
  <div class="statistic px-2 px-md-5  align-items-center">
    <h6 class="fs-4 text-center">Stats</h6>
    <ul class="list-unstyled">
      <li
        v-for="item in statList"
        class="stat-item d-flex align-items-center gap-3"
      >
        <span
          class="fs-6 fw-medium"
          style="color: var(--lighter-gray); width: 10%"
          >{{ item.name }}
        </span>
        <div class="percentage w-100" style="height: 15px">
          <div
            :style="{
              height: '15px',
              width: item.total,
              backgroundColor: item.color,
            }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style></style>
