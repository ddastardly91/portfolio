<script setup>
import Comment from "../components/Comment.vue";
</script>

<template>
   <div class="post-container">
      <div class="post-image">
         <img
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            alt=""
         />
      </div>
      <div class="post-header">
         <h1>Post Title</h1>
         <div class="header-details">
            <p><strong>Author:</strong> Aaron</p>
            <p><strong>Posted on:</strong> 11/29/2022</p>
         </div>
      </div>
      <div class="post-content">
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            mollitia fugit molestias in, magnam illum dolorem saepe
            reprehenderit quo vero iste deserunt quisquam tenetur eos laboriosam
            modi quae itaque doloremque. Enim aliquid nostrum fuga rem omnis
            eius. Enim harum perspiciatis voluptas. Aspernatur iusto temporibus
            cupiditate quis quo quos minima. Sapiente labore ipsam et? Voluptas,
            quibusdam consequatur minima esse ea eveniet! Consequatur, in
            exercitationem ex tempore aliquid cumque accusamus rem eveniet.
            Odio, quidem! Ad, deleniti modi harum incidunt corporis sequi
            laborum aliquid? Tempore perspiciatis quis quaerat eaque est nam
            animi molestias. Possimus, ullam vel? Tenetur voluptates aperiam,
            aliquam ex ea amet quia accusantium est, quaerat placeat earum?
            Velit, corrupti id doloremque voluptate aspernatur porro et dolorem
            dicta, reprehenderit aliquid assumenda libero? Praesentium sequi
            similique voluptate ea, assumenda sunt cum voluptatibus soluta
            aspernatur eius ullam voluptates. Inventore rerum totam numquam
            officiis tenetur et nulla sint? Ipsa, officiis qui libero maiores id
            animi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi mollitia fugit molestias in, magnam illum dolorem saepe
            reprehenderit quo vero iste deserunt quisquam tenetur eos laboriosam
            modi quae itaque doloremque. Enim aliquid nostrum fuga rem omnis
            eius. Enim harum perspiciatis voluptas. Aspernatur iusto temporibus
            cupiditate quis quo quos minima. Sapiente labore ipsam et? Voluptas,
            quibusdam consequatur minima esse ea eveniet! Consequatur, in
            exercitationem ex tempore aliquid cumque accusamus rem eveniet.
            Odio, quidem! Ad, deleniti modi harum incidunt corporis sequi
            laborum aliquid? Tempore perspiciatis quis quaerat eaque est nam
            animi molestias. Possimus, ullam vel? Tenetur voluptates aperiam,
            aliquam ex ea amet quia accusantium est, quaerat placeat earum?
            Velit, corrupti id doloremque voluptate aspernatur porro et dolorem
            dicta, reprehenderit aliquid assumenda libero? Praesentium sequi
            similique voluptate ea, assumenda sunt cum voluptatibus soluta
            aspernatur eius ullam voluptates. Inventore rerum totam numquam
            officiis tenetur et nulla sint? Ipsa, officiis qui libero maiores id
            animi!
         </p>
      </div>
   </div>
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
