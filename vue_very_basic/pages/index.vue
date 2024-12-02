<template>
  <div
    class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3"
  >
    <div class="" v-for="product in products" v-bind:key="product.id">
      <div class="border border-black p-4 flex flex-col gap-2 h-[400px]">
        <img :src="product.image" class="h-40" alt:="product.title">
        <p>{{ product.title }}</p>
        <div class="flex justify-between items-center">
          <span class="text-lg text-black font-extrabold">{{
            product.category
          }}</span>
          <p class="text-lg font-extrabold text-orange-600">
            {{ product.price }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p>Some Thing Here</p>
          <p>
            {{ product.rating.rate }}
            <span class="text-blue-800"
              >({{ product.rating.count }} reviews)</span
            >
          </p>
        </div>
        <button class="w-full bg-blue-500 text-white rounded-md py-1">
          Product Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: products } = useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
