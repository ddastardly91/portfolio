<script setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "../stores/authStore";
import { NButton, NUpload } from "naive-ui";
import { storeToRefs } from "pinia";

const useAuth = useAuthStore();
const { handleNewPost } = useAuth;
const { user, errorMessage, successMessage } = storeToRefs(useAuth);

const postData = reactive({
   title: "",
   content: "",
   file: null,
   authorID: null,
});

const handleFileUpload = (file) => {
   postData.file = file.file.file;
   postData.authorID = user.value.id;
};

const sendPost = () => {
   console.log(postData);
};
</script>

<template>
   <div class="create-post-container">
      <!-- <img :src="imagePreview" /> -->
      <div class="input-container">
         <input
            v-model="postData.title"
            class="title-input"
            type="text"
            placeholder="Title..."
         />
         <textarea
            v-model="postData.content"
            placeholder="Enter some content..."
         ></textarea>
         <n-upload
            :on-change="handleFileUpload"
            accept=".jpeg,.jpg,.png"
            :max="1"
         >
            <n-button>Upload File</n-button>
         </n-upload>
         <span class="error-message" v-show="errorMessage">{{
            errorMessage
         }}</span>
         <span class="success-message" v-show="successMessage">{{
            successMessage
         }}</span>
         <n-button type="warning" @click="handleNewPost(postData)"
            >Publish</n-button
         >
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

      .error-message {
         color: crimson;
         font-weight: bold;
      }

      .success-message {
         color: greenyellow;
         font-weight: bold;
      }
   }
}
</style>
