<script setup>
import { ref } from "vue";
import {
   Bars3Icon,
   MagnifyingGlassIcon,
   HomeIcon,
   CodeBracketIcon,
   CommandLineIcon,
   ChatBubbleBottomCenterIcon,
} from "@heroicons/vue/24/outline";

import { NInput, NDrawer, NDrawerContent } from "naive-ui";

const searchText = ref("");
const searchLoading = ref(false);

const menuActive = ref(false);

const menuActivate = () => {
   menuActive.value = true;
};
</script>

<template>
   <nav>
      <div class="nav-right">
         <MagnifyingGlassIcon class="icon-search" />
         <NInput
            class="nav-search"
            v-model:value="searchText"
            type="text"
            size="large"
            placeholder="Search..."
            :loading="searchLoading"
         />

         <Bars3Icon class="icon" @click="menuActivate" />
         <n-drawer v-model:show="menuActive" :width="350" placement="right">
            <n-drawer-content
               title="Navigation"
               :header-style="{ fontSize: '25px' }"
               closable
            >
               <ul class="nav-list">
                  <li>
                     <HomeIcon
                        :style="{ width: '25px', marginRight: '10px' }"
                     />
                     Home
                  </li>
                  <li>
                     <CodeBracketIcon
                        :style="{ width: '25px', marginRight: '10px' }"
                     />
                     Projects
                  </li>
                  <li>
                     <CommandLineIcon
                        :style="{ width: '25px', marginRight: '10px' }"
                     />
                     Github
                  </li>
                  <li>
                     <ChatBubbleBottomCenterIcon
                        :style="{ width: '25px', marginRight: '10px' }"
                     />
                     Contact
                  </li>
               </ul>
            </n-drawer-content>
         </n-drawer>
      </div>
   </nav>
</template>

<style lang="scss" scoped>
nav {
   margin: 0 auto 30px auto;
   max-width: 1440px;
   position: relative;

   .nav-right {
      display: flex;
      justify-content: end;
      align-items: center;

      img {
         margin-right: 20px;
         width: 35px;
         cursor: pointer;
      }

      .icon {
         width: 40px;
         cursor: pointer;
         transition: 500ms ease;

         &:hover {
            color: tomato;
         }
      }

      .icon-search {
         width: 20px;
         color: #999;
         position: absolute;
         right: 292px;
         z-index: 2;
      }

      .nav-search {
         width: 250px;
         padding-left: 30px;
         margin-right: 35px;
      }
   }
}
</style>
