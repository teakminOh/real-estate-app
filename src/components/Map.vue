<script>
import L from "leaflet"; // Import Leaflet pomocou ES Modules

export default {
  name: "MapComponent",
  props: {
    address: String, // Adresa prijatá z query parametrov alebo props
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const map = L.map("map").setView([48.1486, 17.1077], 13); // Defaultná pozícia (Bratislava)

      // Pridaj OpenStreetMap vrstvu
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Ak bola zadaná adresa, zavolaj geokódovaciu službu
      if (this.address) {
        this.geocodeAddress(this.address, map);
      }
    },
    geocodeAddress(address, map) {
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const { lat, lon } = data[0];
            map.setView([lat, lon], 14);
            L.marker([lat, lon])
              .addTo(map)
              .bindPopup(`<b>${address}</b>`)
              .openPopup();
          }
        })
        .catch((error) => console.error("Geocoding error:", error));
    },
  },
};
</script>

<template>
  <div id="map" class="w-full h-[500px] rounded-md shadow-md"></div>
</template>

<style scoped>
#map {
  height: 500px;
}
</style>
