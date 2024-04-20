<script setup></script>

<template>
  <div
    class="sidebar d-flex flex-column p-3 vh-100 position-fixed end-0 z-1"
    style="width: 240px; top: 60px;"
  >
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <a href="#" class="nav-link text-white">
          <i class="bi bi-bookmark-fill"></i>
          My List
        </a>
      </li>
      <li class="cursor-pointer">
        <span href="#" class="nav-link text-white">
          <i class="bi bi-brightness-high-fill"></i>
          Theme
        </span>
      </li>
      <li class="d-flex align-items-center gap-1 mx-3">
        <i class="bi bi-globe-americas text-white"></i>
        <label for="selectLanguage">
          <select id="selectLanguage">
            <option value="pt-br" >Português (Brasil)</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
    .sidebar {
        background-color: black;
        transition: 0.3s ease;
    }
    select{
        background-color: black;
        color: white;
        border: none;
    }

    option{
        background-color: var(--light-gray);
        color: white;
    }

    i {
        font-sihe: 20px;
    }
</style>
