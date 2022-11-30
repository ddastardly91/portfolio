<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline";
</script>

<template>
   <div class="comments">
      <div class="comment-avatar">
         <img
            src="https://images.unsplash.com/photo-1631680900243-3c207cf5a481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            alt="profile name avatar"
         />
      </div>
      <div class="content">
         <div class="author">
            <h3>Mayranne</h3>
            <p>11/29/2022</p>
         </div>
         <div class="body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, consectetur ea asperiores non omnis rerum rem velit
            molestias! Enim repudiandae non totam unde, consectetur quia facere
            alias praesentium consequuntur ab!
         </div>
      </div>
      <div class="action-container">
         <TrashIcon class="icon" />
      </div>
   </div>
</template>

<style lang="scss" scoped>
.comments {
   border: 1px solid lightgray;
   padding: 10px;
   border-radius: 10px;
   display: flex;
   margin-bottom: 20px;
}

.comment-avatar {
   min-width: 70px;
   max-width: 70px;
   height: 70px;
   border-radius: 10px;
   overflow: hidden;
   margin-right: 10px;

   img {
      width: 100%;
   }
}

.content {
   .author {
      display: flex;
      flex-direction: column;
      align-items: left;
   }
}

.action-container {
   .icon {
      width: 20px;
      margin: 5px;
   }
}
</style>
