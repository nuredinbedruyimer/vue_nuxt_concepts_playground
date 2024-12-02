<template>
  <div class="container mx-auto mt-12 space-y-12">
    <!-- Header with centered text -->
    <div class="flex items-center justify-center">
      <div class="flex-1 border-t-2 border-orange-400"></div>
      <span class="mx-4 text-2xl text-orange-600 font-extrabold">
        All Categories
      </span>
      <div class="flex-1 border-t-2 border-orange-400"></div>
    </div>

    <!-- Categories Grid -->
    <div class="grid gap-8 grid-cols-3">
      <NuxtLink
        v-for="category in categories"
        :key="category.idCategory"
        :to="`/categories/${category.idCategory}`"
        class="hover:scale-105 transform transition duration-200"
      >
        <Category v-bind="category" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const response = await useFetch(
  () => `https://www.themealdb.com/api/json/v1/1/categories.php`
);

const categories = response.data?._rawValue?.categories;
</script>

<style lang="scss" scoped></style>
