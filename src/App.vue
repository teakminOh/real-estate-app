<script setup>
import Navbar from "./components/Navbar.vue"
import SearchBar from "./components/SearchBar.vue";


</script>

<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style>
@import "./style.css";
</style>
