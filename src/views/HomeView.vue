<script setup>
import { ref } from "vue";
const input = ref("");
</script>

<template>
  <div class="container flex items-center justify-end flex-col pb-[26px]">
    <input
      type="text"
      class="w-[280px] rounded-full text-center"
      placeholder="Artist / Album / Title"
      v-model="input"
      style="height: 40px; outline: none"
    />
    <button
      class="mt-[15px] w-[280px] rounded-full text-white"
      style="background-color: rgba(255, 255, 255, 0.2); height: 40px"
    >
      Search
    </button>
  </div>
</template>

<style>
.container {
  background-image: url("../assets/vector/logo.svg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
