<template>
  <div v-if="isAuth" class="container mx-auto mt-12">
    <h1>Welcome, {{ user.username }}</h1>
    <button @click="logout">Logout</button>
  </div>
  <div v-else class="container mx-auto mt-12">
    <button @click="login('admin', 'password')">Login</button>
  </div>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";

const { user, isAuth, login, logout } = useAuth();
</script>
