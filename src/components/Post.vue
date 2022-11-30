<script setup>
const { post } = defineProps(["post"]);
</script>

<template>
   <div class="post">
      <div class="post-image">
         <img :src="post.imageURL" alt="post image" />
      </div>
      <div class="post-content">
         <h4>{{ post.title }}</h4>
         <p>
            {{ post.content.substring(0, 150) + "...." }}
         </p>
      </div>
      <div class="post-details">
         <p><strong>Aaron</strong></p>
         <p>{{ new Date(post.created_at).toLocaleDateString() }}</p>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.post {
   margin-top: 15px;
   min-width: 280px;
   border: 1px solid #efeff5;
   border-radius: 3px;
   cursor: pointer;

   &:hover {
      box-shadow: 0 6px 16px -9px rgba(0, 0, 0, 0.08),
         0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03);
   }

   .post-image {
      max-width: 100%;

      img {
         max-width: 100%;
      }
   }

   .post-content {
      padding: 15px;

      h4 {
         font-size: 18px;
         color: #000;
         font-weight: 500;
      }

      p {
         font-size: 15px;
      }
   }

   .post-details {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background-color: #fafafc;
   }
}
</style>
