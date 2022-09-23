<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const input = ref("");

const search = async () => {
  router.push(`/results/${input.value}`);
};
</script>

<template>
  <div
    class="absolute h-screen flex items-center justify-center w-screen pointer-events-none"
  >
    <img src="../assets/vector/logo.svg" alt="" />
  </div>
  <div class="container flex items-center justify-end flex-col pb-[26px]">
    <input
      type="text"
      class="w-[280px] rounded-full text-center"
      placeholder="Artist / Album / Title"
      v-model="input"
      style="height: 40px; outline: none"
    />
    <button
      @click="search"
      class="mt-[15px] w-[280px] rounded-full text-white"
      style="background-color: rgba(255, 255, 255, 0.2); height: 40px"
    >
      Search
    </button>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(153deg, #712bda, #a45deb 100%);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
