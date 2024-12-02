<template>
  <div>
    <header class="mx-auto text-white p-4 container bg-orange-400">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo and Home Link -->
        <div class="text-2xl font-semibold">
          <NuxtLink to="/" class="text-white hover:text-gray-300"
            >Recipe Finder</NuxtLink
          >
        </div>

        <!-- Navigation Links -->
        <nav class="space-x-6 text-md font-extrabold capitalize">
          <NuxtLink to="/" class="text-white hover:text-gray-300"
            >Home</NuxtLink
          >
          <NuxtLink to="/profile" class="text-white hover:text-gray-300"
            >Profile</NuxtLink
          >
          <NuxtLink to="/categories" class="text-white hover:text-gray-300"
            >Categories</NuxtLink
          >
          <NuxtLink to="/favorites" class="text-white hover:text-gray-300"
            >Favorites</NuxtLink
          >
          <NuxtLink to="/login" class="text-white hover:text-gray-300"
            >Login</NuxtLink
          >
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    searchRecipes() {
      if (this.searchQuery.trim()) {
        this.$router.push({
          path: "/search",
          query: { query: this.searchQuery },
        });
      }
    },
  },
};
</script>

<style scoped>
/* Tailwind styles are enough for this layout */
</style>
