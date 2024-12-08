<template>
  <div class="text-blue-700 w-full flex justify-center flex-col items-center">
    <Navbar />
  </div>
</template>

<script>
import { useCountStore } from "#build/imports";
import Navbar from "./components/Navbar.vue";

export default {
  setup() {
    const countStore = useCountStore();
    console.log("CountSTore : ", countStore);

    return {
      countStore: countStore,
    };
  },
};
</script>

<style lang="scss" scoped></style>
