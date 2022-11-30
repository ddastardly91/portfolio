<script setup>
import { onMounted } from "vue";
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/authStore";
import Navbar from "./components/Navbar.vue";

const useAuth = useAuthStore();
const { getUser, getPosts } = useAuth;

const themeOverrides = {
   common: {
      primaryColor: "#ff6347",
      fontSize: "15px",
   },
   Input: {
      borderHover: "1px solid rgba(255, 99, 71, 0.5)",
      borderFocus: "1px solid rgba(255, 99, 71, 0.3)",
   },
};

onMounted(() => {
   getUser();
   getPosts();
});
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
