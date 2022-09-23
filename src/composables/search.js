import { ref } from "vue";
import API from "../../axiosConfig";

const useSearch = () => {
  const searchResults = ref([]);

  const searchItunes = async (input) => {
    const space = input.artistName.replace(/ /g, "+");
    const response = await API.get(
      `search?term=${input.term}&limit=200&country=US&artistName=${space}`
    );
    searchResults.value = response.data.results;
  };

  return {
    searchResults,
    searchItunes,
  };
};

export default useSearch;
