<template>
  <div
    class="flex flex-col justify-center items-center text-3xl font-extrabold text-orange-800"
  >
    <h1>Count : {{ count }}</h1>
    <h1>Square Count : {{ squereCount }}</h1>
    <button @click="count++" class="px-3 py-2 text-white bg-blue-200">
      Add Counter
    </button>
  </div>
</template>

<script setup>
const count = ref(10);
</script>

<style lang="scss" scoped></style>
