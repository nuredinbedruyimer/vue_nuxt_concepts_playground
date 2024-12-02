<template>
  <div>
    <h1>About Page</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <p>{{ product.title }}</p>
      <img :src="product.image" alt:="product.title">
    </div>
  </div>
</template>

<script setup>
const { data: products } = useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
