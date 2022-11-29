<script setup>
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

const themeOverrides = {
   common: {
      primaryColor: "#ff6347",
   },
   Input: {
      borderHover: "1px solid rgba(255, 99, 71, 0.5)",
      borderFocus: "1px solid rgba(255, 99, 71, 0.3)",
   },
};
</script>

<template>
   <NConfigProvider :theme-overrides="themeOverrides">
      <main>
         <Navbar />
         <RouterView />
      </main>
   </NConfigProvider>
</template>

<style lang="scss" scoped>
main {
   margin: 50px;
}
</style>
