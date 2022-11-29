<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import {
   Bars3Icon,
   MagnifyingGlassIcon,
   HomeIcon,
   CodeBracketIcon,
   CommandLineIcon,
   ChatBubbleBottomCenterIcon,
   ShieldCheckIcon,
} from "@heroicons/vue/24/outline";

import { NInput, NDrawer, NDrawerContent, NAvatar, NPopover } from "naive-ui";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { handleLogout } = authStore;
const { user } = storeToRefs(authStore);

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

         <n-avatar v-if="user">AL</n-avatar>

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
                     <RouterLink :to="{ name: 'home' }">Home</RouterLink>
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
                     <a href="https://github.com/ddastardly91" target="_blank"
                        >Github</a
                     >
                  </li>
                  <li>
                     <ChatBubbleBottomCenterIcon
                        :style="{ width: '25px', marginRight: '10px' }"
                     />
                     Contact
                  </li>
                  <br />
                  <li>
                     <ShieldCheckIcon
                        :style="{ width: '25px', marginRight: '10px' }"
                     />
                     <div v-if="user" @click="handleLogout">Logout</div>
                     <RouterLink v-else :to="{ name: 'admin' }"
                        >Admin</RouterLink
                     >
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
         margin-right: 5px;
      }

      .nav-search {
         width: 250px;
         margin-right: 25px;
      }

      .n-avatar {
         margin-right: 25px;
         cursor: pointer;
      }
   }
}
</style>
