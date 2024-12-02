<template>
  <div class="container mx-auto">
    <h1>{{ $route.params }}</h1>
    <div
      class="flex flex-col items-center justify-center w-full border-2 border-t-orange-400 w-3/4 p-4 rounded-md shadow-md"
    >
      <img :src="category?.strCategoryThumb" alt="abebe" class="h-80" />
      <div class="flex flex-col">
        <strong class="text-2xl font-bold text-lime-600">{{}}</strong>
        <p class="text-blue-600">
          {{ category?.strCategoryDescription.slice(0, 200) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const response = await useFetch(
  () => `https://www.themealdb.com/api/json/v1/1/categories.php`
);

const categories = response.data?._rawValue?.categories;
const route = useRoute();

const categoryID = route.params.categoryID;

const category = categories.find(
  (category) => category.idCategory === categoryID
);

console.log("Category : ", category);
</script>

<style lang="scss" scoped></style>
