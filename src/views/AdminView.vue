<script setup>
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { NInput, NButton, NAlert } from "naive-ui";
import { useAuthStore } from "../stores/authStore";
import { storeToRefs } from "pinia";

const router = useRouter();

const useAuth = useAuthStore();
const { handleLogin, clearErrorMessage } = useAuth;
const { user, errorMessage } = storeToRefs(useAuth);

const credentials = reactive({
   email: "",
   password: "",
   username: "Aaron",
});

const handleSubmit = async () => {
   if (user.value) {
      credentials.email = "";
      credentials.password = "";
      clearErrorMessage();
   } else {
      await handleLogin(credentials);
   }
};

watch(user, () => {
   if (user.value) {
      router.push("/");
   }
});
</script>

<template>
   <div class="admin-container">
      <h1>Admin Login</h1>
      <form>
         <label>Email:</label>
         <n-input
            v-model:value="credentials.email"
            size="large"
            placeholder="example@example.com"
         />
         <label>Password:</label>
         <n-input
            class="input-password"
            v-model:value="credentials.password"
            type="password"
            show-password-on="mousedown"
            placeholder="Password"
            minlength="6"
         />
         <n-alert v-if="errorMessage" type="error">
            {{ errorMessage }}
         </n-alert>
         <n-button type="warning" @click="handleSubmit">Login</n-button>
      </form>
   </div>
</template>

<style lang="scss" scoped>
.admin-container {
   margin: 0 auto;
   max-width: 1440px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 55vh;

   h1 {
      margin-bottom: 30px;
   }

   form {
      display: flex;
      flex-direction: column;

      span {
         color: crimson;
      }
   }

   .n-input {
      margin: 10px 0;
      width: 250px;
      text-align: center;
   }

   .input-password {
      margin-bottom: 20px;
   }

   .n-button {
      margin-top: 10px;
   }
}
</style>
