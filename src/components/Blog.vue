<script setup>
import Post from "./Post.vue";
</script>

<template>
   <div class="blog-container">
      <div class="header">
         <h3>Posts</h3>
         <p>Here's what I've been thinking.</p>
      </div>

      <div class="post-container">
         <Post />
         <Post />
      </div>
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
