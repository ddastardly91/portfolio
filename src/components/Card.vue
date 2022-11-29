<script setup>
import { NCard, NTag, NButton } from "naive-ui";
import { NConfigProvider } from "naive-ui";

const props = defineProps(["data"]);

const themeOverrides = {
   common: {
      primaryColor: "#ff6347",
      primaryColorHover: "#ff8a75",
      primaryColorPressed: "#ff7961",
   },
};
</script>

<template>
   <NConfigProvider :theme-overrides="themeOverrides">
      <n-card :title="props.data.title" hoverable>
         <template #cover>
            <img :src="props.data.imgURL" />
         </template>
         {{ props.data.content }}
         <template #footer>
            <n-tag type="success" round v-for="skill in props.data.skills">{{
               skill
            }}</n-tag>
         </template>
         <template #action>
            <a :href="props.data.link" target="_blank">
               <n-button type="primary"> View Site </n-button>
            </a>
         </template>
      </n-card>
   </NConfigProvider>
</template>

<style lang="scss" scoped>
.n-card {
   min-width: 450px;
   max-height: 470px;
   min-height: 470px;

   img {
      object-fit: cover;
   }

   .n-tag {
      margin-right: 10px;
      font-weight: 500;
      transition: 300ms ease-in;

      &:hover {
         background-color: hsl(157, 100%, 83%);
      }
   }

   .n-button {
      float: right;
   }
}
</style>
