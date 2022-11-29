<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
   <main>
      <Navbar />
      <RouterView />
   </main>
</template>

<style lang="scss" scoped>
main {
   margin: 50px;
}
</style>
