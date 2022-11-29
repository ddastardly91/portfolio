<script setup></script>

<template>
   <div class="post">
      <div class="post-image">
         <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="post image"
         />
      </div>
      <div class="post-content">
         <h4>Header</h4>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            inventore soluta totam temporibus eveniet explicabo tempora facilis
            minima...
         </p>
      </div>
      <div class="post-details">
         <p><strong>Aaron</strong></p>
         <p>29/11/2022</p>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.post {
   margin-top: 15px;
   min-width: 280px;
   border: 1px solid #efeff5;
   border-radius: 3px;

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
