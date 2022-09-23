<script setup>
import searchFunction from "../composables/search";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const result = ref([]);
const { searchResults, searchItunes } = searchFunction();
const search = async () => {
  await searchItunes({
    term: route.params.slug,
    artistName: route.params.slug,
  });
  if (searchResults.value.length > 0) {
    result.value.push(...searchResults.value.slice(0, 4));
  }
};
search();
const more = () => {
  result.value.push(...searchResults.value.slice(5, 9));
};
</script>

<template>
  <div class="container" style="height: 100vh; background-color: aliceblue">
    <div class="bar flex justify-between items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#ffffff"
        class="bi bi-list cursor-pointer"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>

      <p class="text-white">ngmusic</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#ffffff"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
    </div>

    <div class="mt-[39px] mb-[39px]">
      <p class="text-center">
        Search result for:
        <span class="capitalize font-semibold" style="color: #7b34dd">{{
          route.params.slug
        }}</span>
      </p>
    </div>

    <div
      class="card ml-[25px] mr-[25px] mb-[20px] rounded-lg shadow-lg p-3 flex overflow-hidden"
      v-for="item in result"
      :key="item.idx"
      style="background-color: #ffffff; height: 123px"
    >
      <div>
        <img class="rounded-md" :src="item.artworkUrl100" alt="" />
      </div>

      <div
        class="ml-3"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 60%;
        "
      >
        <div>
          <p class="text-xs">{{ item.artistName }}</p>
          <p class="text-sm font-semibold mt-1">{{ item.trackName }}</p>
        </div>
        <div class="flex justify-between items-center">
          <p
            style="background: #10b981"
            class="text-xs align-text-bottom pl-2 pr-2 pt-1 pb-1 rounded-xl text-white"
          >
            {{ item.primaryGenreName }}
          </p>
          <p class="text-xs font-semibold" style="color: #f5b014">
            $
            {{ item.collectionPrice }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center mt-8">
      <button
        @click="more"
        class="pl-[20px] pr-[20px] rounded-full text-slate-500 text-xs"
        style="
          height: 34px;
          background-color: #e2e8f0;
          border: none;
          outline: none;
        "
      >
        Load More
      </button>
    </div>
  </div>
</template>

<style scoped>
.bar {
  height: 60px;
  padding: 18px 15px 22.2px;
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  background-image: linear-gradient(100deg, #712bda, #a45deb 100%);
  border-bottom-right-radius: 40%;
  border-bottom-left-radius: 40%;
}
</style>
