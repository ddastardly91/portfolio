<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/authStore";
import Comment from "../components/Comment.vue";
import { onBeforeMount } from "vue";
import { TrashIcon } from "@heroicons/vue/24/outline";

const useAuth = useAuthStore();
const { getSinglePost, handleDeletePost } = useAuth;
const { singlePost, successMessage, errorMessage } = storeToRefs(useAuth);
const route = useRoute();

onBeforeMount(() => {
   getSinglePost(route.params.id);
});

const deletePost = () => {
   handleDeletePost(route.params.id);
   console.log(route.params.id);
};
</script>

<template>
   <div class="post-container" v-if="singlePost">
      <div class="post-image">
         <img :src="singlePost.imageURL" />
      </div>
      <div class="post-header">
         <div v-if="successMessage" :style="{ color: 'green' }">
            {{ successMessage }}
         </div>
         <div v-if="errorMessage" :style="{ color: 'crimson' }">
            {{ errorMessage }}
         </div>
         <h1>
            {{ singlePost.title }}
            <TrashIcon class="icon" @click="deletePost" />
         </h1>
         <div class="header-details">
            <p><strong>Author:</strong> Aaron</p>
            <p>
               <strong>Posted on:</strong>
               {{ new Date(singlePost.created_at).toLocaleDateString() }}
            </p>
         </div>
      </div>
      <div class="post-content">
         <p>
            {{ singlePost.content }}
         </p>
      </div>
   </div>
   <div v-else><h1>Post Loading...</h1></div>
   <div class="comment-container">
      <h1>Comments</h1>
      <Comment />
      <Comment />
      <Comment />
   </div>
</template>

<style lang="scss" scoped>
.post-container {
   margin: 0 auto;
   max-width: 1440px;

   .post-image {
      display: flex;
      align-items: center;
      justify-content: center;
      object-fit: cover;
      overflow: hidden;

      border-radius: 15px;

      max-height: 400px;

      img {
         width: 100%;
         height: 100%;
      }
   }

   .post-header {
      h1 {
         font-size: 50px;
         margin-top: 20px;
      }

      .icon {
         width: 30px;
         color: crimson;
         cursor: pointer;
      }
   }

   .header-details {
      font-size: 16px;
   }

   .post-content {
      margin-top: 20px;

      p {
         font-size: 18px;
         letter-spacing: 1.1px;
      }

      p::first-letter {
         font-weight: bold;
         font-size: 30px;
      }
   }
}
.comment-container {
   margin: 50px auto 0 auto;
   max-width: 1440px;
}
</style>
