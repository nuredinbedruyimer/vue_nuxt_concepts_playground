<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- Card Wrapper -->
    <div class="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
      <!-- Conditional Rendering for Sign In / Sign Up -->
      <div>
        <div class="flex items-center justify-center">
          <div class="flex-1 border-t-2 border-orange-400"></div>
          <span class="mx-4 text-2xl text-orange-600 font-extrabold">
            Create Account
          </span>
          <div class="flex-1 border-t-2 border-orange-400"></div>
        </div>

        <!-- Sign Up Form -->
        <form @submit.prevent="handleSignUp">
          <div class="space-y-4">
            <div class="mt-4">
              <label
                for="username"
                class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <input
                type="username"
                id="username"
                v-model="username"
                class="w-full p-3 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full p-3 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full p-3 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div class="flex items-center justify-between">
              <label
                for="remember"
                class="flex items-center text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  id="remember"
                  v-model="rememberMe"
                  class="mr-2"
                />
                Remember me
              </label>
              \
            </div>

            <button
              type="submit"
              class="w-full p-3 mt-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:ring-2 focus:ring-orange-500"
            >
              Sign Up
            </button>
            <p>
              Already have an account?
              <span
                class="text-md font-extrabold text-orange-600 cursor-pointer"
                ><NuxtLink to="/login">Login</NuxtLink></span
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Form data
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const isSignUp = ref(true); // Controls if it's Sign Up or Sign In

// Toggle between Sign Up and Sign In
const toggleForm = () => {
  isSignUp.value = !isSignUp.value;
};

// Handle Sign Up
const handleSignUp = () => {
  console.log(
    "Signing up with:",
    email.value,
    password.value,
    rememberMe.value
  );
  // Add sign-up logic here (API call, etc.)
};

// Handle Sign In
const handleSignIn = () => {
  console.log(
    "Signing in with:",
    email.value,
    password.value,
    rememberMe.value
  );
  // Add sign-in logic here (API call, etc.)
};

// Handle Forgot Password
const handleForgotPassword = () => {
  console.log("Password reset requested");
  // Add forgot password logic here (API call, etc.)
};
</script>

<style scoped>
/* Add some styling for the container */
</style>
