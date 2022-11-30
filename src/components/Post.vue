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
         <p v-if="post.created_at">
            {{ post.content.substring(0, 150) + "...." }}
         </p>
         <p v-else>{{ post.content }}</p>
         <p v-if="post.skills">
            <span v-for="skill in post.skills">{{ skill }}</span>
         </p>
      </div>
      <div class="post-details">
         <p><strong>Aaron</strong></p>

         <p v-if="post.created_at">
            {{ new Date(post.created_at).toLocaleDateString() }}
         </p>
         <a v-else :href="post.link" target="_blank">VIEW SITE</a>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.post {
   margin-top: 15px;
   min-width: 345px;
   flex: 1;
   gap: 20px;
   border: 1px solid #efeff5;
   border-radius: 3px;
   cursor: pointer;

   &:hover {
      box-shadow: 0 6px 16px -9px rgba(0, 0, 0, 0.08),
         0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03);
   }

   .post-image {
      max-width: 100%;
      max-height: 400px;
      overflow: hidden;

      img {
         min-height: 300px;
         width: 100%;
         object-fit: cover;
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

      span {
         background-color: rgb(0, 204, 160);
         padding: 2px 7px;
         border-radius: 25px;
         font-size: 12px;
         margin-right: 5px;
         color: white;
         font-weight: 500;
         transition: 300ms ease-in;

         &:hover {
            background-color: rgb(0, 146, 114);
         }
      }
   }

   .post-details {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background-color: #fafafc;

      a {
         font-weight: bold;
         color: rgb(0, 204, 160);
         transition: 300ms ease-in;

         &:hover {
            color: rgb(0, 146, 114);
         }
      }
   }
}

@media (max-width: 1280px) {
   .post {
      min-width: 100%;
   }
}
</style>
