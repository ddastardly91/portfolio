<script setup>
import { CommandLineIcon } from "@heroicons/vue/24/outline";
import { latestProjects } from "../data/data";
import Post from "./Post.vue";
</script>

<template>
   <div class="hero-container">
      <div class="brand">
         <CommandLineIcon class="icon" />
         <h2>Dastardly</h2>
      </div>

      <div class="about">
         <h1>
            Hello, my name is Aaron.
            <br />
            I'm a <span>front-end web developer</span> from Preston, UK.
         </h1>
         <p>Here are some of the skills I have picked up along my journey.</p>
         <div class="skills-bar">
            <img src="https://skills.thijs.gg/icons?i=html" />
            <img src="https://skills.thijs.gg/icons?i=css" />
            <img src="https://skills.thijs.gg/icons?i=js" />
            <img src="https://skills.thijs.gg/icons?i=sass" />
            <img src="https://skills.thijs.gg/icons?i=react" />
            <img src="https://skills.thijs.gg/icons?i=vue" />
            <img src="https://skills.thijs.gg/icons?i=vite" />
            <img src="https://skills.thijs.gg/icons?i=supabase" />
            <img src="https://skills.thijs.gg/icons?i=git" />
            <img src="https://skills.thijs.gg/icons?i=github" />
         </div>
      </div>
      <div class="featured-projects">
         <h3>Featured Projects</h3>
         <p>Why not take a look at some of my projects.</p>

         <div class="card-container">
            <Post v-for="post in latestProjects" :key="post.id" :post="post" />
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.card-container {
   margin: 0 auto;
   max-width: 1440px;
   display: flex;
   gap: 20px;
   flex-wrap: wrap;
}

.brand {
   font-weight: 900;
   letter-spacing: 1.5px;

   display: flex;
   align-items: center;

   margin-bottom: 40px;

   cursor: pointer;

   .icon {
      width: 32px;
      margin-right: 10px;
   }

   h2 {
      transition: 500ms ease;

      &:hover {
         color: rgb(255, 99, 71);
      }
   }
}

.about {
   margin-bottom: 50px;
   h1 {
      font-size: 44px;
      margin-bottom: 25px;
   }

   span {
      color: tomato;
      cursor: pointer;

      &:hover {
         text-decoration: underline;
      }
   }

   p {
      margin-bottom: 15px;
   }

   .skills-bar {
      display: flex;
      align-items: center;

      img {
         margin-right: 10px;
         transition: 300ms ease;
         cursor: pointer;

         &:hover {
            scale: 1.3;
         }
      }
   }
}
.featured-projects {
   h3 {
      font-size: 28px;
   }

   p {
      margin-bottom: 15px;
   }
   .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 20px;
   }
}

p {
   letter-spacing: 1.1px;
}

@media (max-width: 705px) {
   .skills-bar {
      display: flex;
      flex-wrap: wrap;

      img {
         margin-bottom: 10px;
      }
   }
}
</style>
