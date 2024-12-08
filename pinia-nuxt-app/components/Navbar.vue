<template>
  <div class="flex justify-between container py-4 mx-auto items-center">
    <h1 class="text-3xl font-extrabold text-purple-600">'Nuredin Bedru'</h1>
    <div class="flex gap-12">
      <nav v-for="navigation in navigationData" :key="navigation.id" class="">
        <NuxtLink :to="navigation.path" class="cursor-pointer">
          <span class="uppercase text-blue-700">{{ navigation.name }}</span>
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script>
import navigationData from "~/config";
export default {
  setup() {
    return {
      navigationData: navigationData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
