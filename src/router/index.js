import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import AdminView from "../views/AdminView.vue";
import CreatePostView from "../views/CreatePostView.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "home",
         component: HomeView,
      },
      {
         path: "/post/:id",
         name: "post",
         component: PostView,
      },
      {
         path: "/admin",
         name: "admin",
         component: AdminView,
      },
      {
         path: "/create",
         name: "create",
         component: CreatePostView,
      },
   ],
});

export default router;
