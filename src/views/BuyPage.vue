<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4 text-blue-900">Nehnuteľnosti v okolí</h1>
    <Map :address="address" />
  </div>
</template>

<script>
import Map from "../components/Map.vue";

export default {
  name: "BuyPage",
  components: {
    Map,
  },
  data() {
    return {
      address: this.$route.query.address || "", // Získanie adresy z query parametrov
    };
  },
};
</script>
