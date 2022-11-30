import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../../supabase";

export const useAuthStore = defineStore("users", () => {
   const user = ref(null);
   const errorMessage = ref("");
   const successMessage = ref("");
   const posts = ref([]);
   const singlePost = ref(null);

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

   const handleNewPost = async (postData) => {
      const { title, content, file, authorID } = postData;

      if (!title) {
         return (errorMessage.value = "Title field cannot be empty.");
      }

      if (title.length < 3) {
         return (errorMessage.value =
            "Title length must be at least 3 characters.");
      }

      if (!content) {
         return (errorMessage.value = "Content field cannot be empty.");
      }

      if (content.length < 20) {
         return (errorMessage.value =
            "Content must be at least 20 characters in length.");
      }

      if (!file) {
         return (errorMessage.value = "You must add an image to your post.");
      }

      if (file.size > 1500000) {
         return (errorMessage.value = "File size cannot exceed 1.5MB.");
      }

      if (!authorID) {
         return (errorMessage.value =
            "You must be logged in to create a post.");
      }

      const generateImageID = Math.floor(Math.random() * 10000000000000);
      const { data, error } = await supabase.storage
         .from("post-images")
         .upload("public/" + generateImageID, file);

      if (error) {
         return (errorMessage.value = error.message);
      }

      let baseImgURL =
         "https://vlunvffzaxoykpbpbatf.supabase.co/storage/v1/object/public/post-images/";

      await supabase.from("posts").insert({
         author_id: authorID,
         title,
         content,
         imageURL: baseImgURL + data.path,
      });

      return (successMessage = "Post published successfully!");
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

   const getPosts = async () => {
      const { data, error } = await supabase.from("posts").select("*");

      if (!data) {
         return (errorMsg.value = "There are no posts. Check back later.");
      }

      if (error) {
         return (errorMsg.value = error.message);
      }

      posts.value = data;
   };

   const getSinglePost = async (postID) => {
      const { data, error } = await supabase
         .from("posts")
         .select()
         .eq("id", postID)
         .single();

      if (error) {
         return error.message;
      }

      return (singlePost.value = data);
   };

   const handleDeletePost = async (postID) => {
      const { data, error } = await supabase
         .from("posts")
         .delete()
         .eq("id", postID);

      if (error) {
         return (errorMessage.value = error.message);
      }

      return (successMessage.value = "Post deleted successfully.");
   };

   const clearErrorMessage = () => {
      errorMessage.value = "";
   };

   return {
      user,
      posts,
      singlePost,
      errorMessage,
      successMessage,
      handleLogin,
      handleSignup,
      handleLogout,
      handleNewPost,
      handleDeletePost,
      getUser,
      getPosts,
      getSinglePost,
      clearErrorMessage,
   };
});
