<template>
  <section
    class="bg-cover bg-center container mx-auto text-white py-10"
    style="background-image: url('/images/hero-bg.jpg')"
  >
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-extrabold mb-4 text-orange-800">
        Find Your Favorite Recipes
      </h1>
      <p class="text-xl mb-6 font-bold text-blue-800">
        Explore new recipes, save your favorites, and create culinary magic!
      </p>
      <form @submit.prevent="searchRecipes" class="flex justify-center">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for recipes"
          class="p-2 rounded-l-lg w-1/2 text-black bg-gray-200 py-4 px-2"
        />
        <button
          type="submit"
          class="bg-yellow-500 text-white p-2 px-12 rounded-r-lg"
        >
          Search
        </button>
      </form>
    </div>
  </section>
</template>
