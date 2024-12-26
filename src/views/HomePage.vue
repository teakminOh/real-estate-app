<template>
  <div class="text-center mt-10">
    <h1 class="text-3xl font-bold">Vitajte na RealEstateApp</h1>
    <p>Začnite vyhľadávať nehnuteľnosti podľa vašej adresy.</p>
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
};
</script>
