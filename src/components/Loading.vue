<template>
  <div class="loading-container rounded-top flex-grow-1 d-flex flex-column">
    <div
      class="loading-id position-absolute fs-5 left-2 p-1 bg-dark text-white"
      style="border-bottom-right-radius: 5px; border-top-left-radius: 4px"
    ></div>
    <div class="loading-img d-flex justify-content"></div>
    <div
      class="loading-card-info rounded-bottom card-info py-2 px-2 d-flex justify-content-between align-items-center"
    >
      <div class="loading-name bg-dark rounded-1"></div>
      <ul class="loading-types list-unstyled d-flex gap-1">
        <li
          class="loading-type text-white bg-dark rounded-1 px-2 fs-5 fw-medium"
        ></li>
        <li class="loading-type text-white bg-dark rounded-1 px-2 fs-5 fw-medium"></li>
      </ul>
    </div>
  </div>
</template>
<style>
.loading-container {
  background-color: darkgrey;
  border: 0.5px soldi black;
}

.loading-img {
  max-width: 100%;
  margin-inline: auto;
  background-color: red;
  flex: 320px;
}

.loading-id {
  width: 50px;
  height: 30px;
}

.loading-card-info {
  background-color: var(--light-gray);
  flex: 50px;
}

.loading-name{
    width: 70px;
    height: 25px;
}

.loading-type{
    width: 45px;
    height: 25px;
}

@media screen and (max-width:750px) {
  .loading-container {
    width: 300px;
  }
}
</style>
