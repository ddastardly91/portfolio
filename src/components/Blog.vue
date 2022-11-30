<script setup>
import Post from "./Post.vue";

import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/authStore";

const useAuth = useAuthStore();
const { posts } = storeToRefs(useAuth);
const router = useRouter();

const handleOpenPost = (postID) => {
   router.push("/post/" + postID);
};
</script>

<template>
   <div class="blog-container">
      <div class="header">
         <h3>Posts</h3>
         <p>Here's what I've been thinking.</p>
      </div>

      <div v-if="posts.length > 0" class="post-container">
         <Post
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @click="handleOpenPost(post.id)"
         />
      </div>
      <div class="no-posts" v-else>
         <h3>No posts. Check back later.</h3>
      </div>
   </div>
</template>
;

<style lang="scss" scoped>
.blog-container {
   margin: 50px auto;
   max-width: 1440px;

   .post-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
   }

   .no-posts {
      text-align: center;

      h3 {
         font-size: 25px;
      }
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
