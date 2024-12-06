<template>
  <div class="py-3 px-4 bg-white flex justify-between rounded-md min-w-[600px]">
    <p>{{ title }}</p>
    <div class="flex gap-4">
      <p>Delete</p>
      <p>Fav</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  components: {
    HeartIcon,
  },
  setup(props) {
    console.log("props", props.task.title);

    return {
      title: props.task.title,
    };
  },
};
import { HeartIcon } from "@heroicons/vue/16/solid";
</script>

<style lang="scss" scoped></style>
