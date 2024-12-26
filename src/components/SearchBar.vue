<template>
  <div class="bg-gray-100 p-6 rounded-md shadow-md max-w-lg mx-auto mt-10">
    <!-- Search Form -->
    <h2 class="text-2xl font-bold mb-4 text-center text-blue-900">Nájdi svoju nehnuteľnosť</h2>
    <form @submit.prevent="handleSearch" class="flex items-center">
      <!-- Input Field -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Zadajte adresu alebo lokalitu"
        class="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <!-- Search Button -->
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
      >
        Hľadaj
      </button>
    </form>
    <!-- Search Result (Optional) -->
    <div v-if="searchResult" class="mt-4 text-green-700">
      <p>Výsledok hľadania pre: <strong>{{ searchResult }}</strong></p>
    </div>
  </div>
</template>


<script>
export default {
  name: "SearchBar",
  data() {
  return {
    searchQuery: "",
    searchResult: null, // Pridáme túto premennú
  };
},
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        // Presmeruj na BuyPage a prenes adresu
        this.$router.push({
          path: "/buy",
          query: { address: this.searchQuery.trim() },
        });
      }
    },
  },
};
</script>



<style scoped>
/* Prispôsobenie vzhľadu */
</style>
