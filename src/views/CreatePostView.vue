<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../stores/authStore";
import { NButton, NUpload } from "naive-ui";
import { storeToRefs } from "pinia";

const useAuth = useAuthStore();
const { user, errorMessage } = storeToRefs(useAuth);
const { handleNewPost } = useAuth;

const postData = reactive({
   title: "",
   content: "",
   imageURL: "",
   author_id: user.id,
});
</script>

<template>
   <div class="create-post-container">
      <!-- <img :src="imagePreview" /> -->
      <div class="input-container">
         <input class="title-input" type="text" placeholder="Title..." />
         <textarea placeholder="Enter some content..."></textarea>
         <n-upload :on-change="handleNewPost" accept=".jpeg,.jpg,.png" :max="1">
            <n-button>Upload File</n-button>
         </n-upload>
         <n-button type="warning">Publish</n-button>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.create-post-container {
   margin: 50px auto;

   img {
      max-height: 300px;
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
   }

   .input-container {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .title-input {
         font-size: 35px;
         border: none;
         border-bottom: 2px solid lightgray;
      }

      textarea {
         font-family: inherit;
         font-size: 24px;
         min-height: 200px;
         min-width: 100%;
         max-width: 100%;
         border: none;
         border-bottom: 2px solid lightgray;
      }
   }
}
</style>
