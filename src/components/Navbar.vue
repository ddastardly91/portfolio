<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
</script>

<template>
   <nav>
      <div class="nav-right">
         <Bars3Icon class="icon" />
      </div>
   </nav>
</template>

<style lang="scss" scoped>
nav {
   margin: 0 auto;
   max-width: 1440px;

   .nav-right {
      display: flex;
      justify-content: end;

      .icon {
         width: 4%;
         cursor: pointer;
         transition: 500ms ease;

         &:hover {
            color: tomato;
         }
      }
   }
}
</style>
