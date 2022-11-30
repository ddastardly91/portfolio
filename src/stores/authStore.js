import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../../supabase";

export const useAuthStore = defineStore("users", () => {
   const user = ref(null);
   const errorMessage = ref("");

   // BASIC EMAIL VALIDATION
   const validateEmail = (email) => {
      return String(email)
         .toLowerCase()
         .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         );
   };

   const handleSignup = async (credentials) => {
      const { email, password, username } = credentials;

      // BASIC VALIDATION
      if (!email) {
         return (errorMessage.value = "Email field cannot be empty.");
      }

      if (!validateEmail(email)) {
         return (errorMessage.value = "Invalid email address.");
      }

      if (!password) {
         return (errorMessage.value = "Password field cannot be empty.");
      }

      if (password.length < 6) {
         return (errorMessage.value =
            "Password must contain at least 6 characters.");
      }

      // USER SIGNUP
      let { error } = await supabase.auth.signUp({
         email,
         password,
      });

      if (error) {
         return (errorMessage.value = error.message);
      }

      // INSERTING NEW USER INSIDE 'USERS' TABLE
      await supabase.from("users").insert({
         email,
         username,
      });

      // GRABBING NEWLY CREATED USER FROM 'USERS' TABLE
      const { data: newUser } = await supabase
         .from("users")
         .select()
         .eq("email", email)
         .single();

      // ASSIGNING NEW USER TO THE USER REF (LOGGED IN)
      user.value = {
         id: newUser.id,
         email: newUser.email,
         username: newUser.username,
      };
      console.log(newUser);

      clearErrorMessage();
   };

   const handleLogin = async (credentials) => {
      const { email, password } = credentials;

      // BASIC VALIDATION
      if (!email) {
         return (errorMessage.value = "Email field cannot be empty.");
      }

      if (!validateEmail(email)) {
         return (errorMessage.value = "Invalid email address.");
      }

      if (!password) {
         return (errorMessage.value = "Password field cannot be empty.");
      }

      // USER SIGN IN
      const { error, data } = await supabase.auth.signInWithPassword({
         email,
         password,
      });

      if (error) {
         return (errorMessage.value = error.message);
      }

      // GRABS USER FROM "USERS" TABLE
      const { data: existingUser } = await supabase
         .from("users")
         .select()
         .eq("email", email)
         .single();

      // ASSIGNS USER DATA TO USER VARIABLE
      user.value = {
         id: existingUser.id,
         email: existingUser.email,
         username: existingUser.username,
      };

      clearErrorMessage();
   };

   const handleLogout = async () => {
      await supabase.auth.signOut();
      user.value = null;
   };

   const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (!data.user) {
         console.error(error.message);
         return (user.value = null);
      }

      const { data: userWithEmail } = await supabase
         .from("users")
         .select()
         .eq("email", data.user.email)
         .single();

      user.value = {
         id: userWithEmail.id,
         email: userWithEmail.email,
         username: userWithEmail.username,
      };
   };

   const handleUpload = async (file) => {
      const image = file.file.file;
      const imageID = Math.floor(Math.random() * 1000000000000);

      const { data, error } = await supabase.storage
         .from("post-images")
         .upload("public/" + imageID, image);

      if (error) {
         return (errorMessage.value = error.message);
      }
   };

   const clearErrorMessage = () => {
      errorMessage.value = "";
   };

   return {
      user,
      errorMessage,
      handleLogin,
      handleSignup,
      handleLogout,
      handleUpload,
      getUser,
      clearErrorMessage,
   };
});
