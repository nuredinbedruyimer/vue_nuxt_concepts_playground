<template>
  <div
    class="flex flex-col border-2 border-t-orange-400 h-[400px] p-4 rounded-md shadow-md"
  >
    <img :src="strCategoryThumb" :alt="strCategory" class="" />
    <div class="flex flex-col">
      <strong class="text-2xl font-bold text-lime-600">{{
        strCategory
      }}</strong>
      <p class="text-blue-600">{{ strCategoryDescription.slice(0, 200) }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  idCategory: String,
  strCategory: String,
  strCategoryThumb: String,
  strCategoryDescription: String,
});
</script>

<style lang="scss" scoped></style>
