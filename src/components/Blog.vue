<script setup>
import Post from "./Post.vue";

import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/authStore";

const useAuth = useAuthStore();
const { posts } = storeToRefs(useAuth);

console.log(posts);
</script>

<template>
   <div class="blog-container">
      <div class="header">
         <h3>Posts</h3>
         <p>Here's what I've been thinking.</p>
      </div>

      <div v-if="posts" class="post-container">
         <Post v-for="post in posts" :post="post" :key="post.id" />
      </div>
      <div v-else>No posts. Check back later.</div>
   </div>
</template>
;

<style lang="scss" scoped>
.blog-container {
   margin: 50px auto;
   max-width: 1440px;

   .post-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
   }
}

.header {
   h3 {
      font-size: 28px;
   }
}

p {
   letter-spacing: 1.1px;
}
</style>
