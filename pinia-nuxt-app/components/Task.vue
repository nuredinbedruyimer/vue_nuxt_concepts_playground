<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/taskStore.js";

const toggleTasks = ref("all");
const toggleButton = (state) => {
  if (state === "favorites") {
    toggleTasks.value = "favorites";
  } else if (state === "all") {
    toggleTasks.value = "all";
  }
};
let taskName = ref("");

const handleTaskCreation = (name) => {
  console.log("Value At Funtion : ", name);
  if (name) {
    addTask(name);
    taskName.value = "";
  }
};

const taskStore = useTaskStore();

const { removeTask, tasksCount, favCount, allTasks, favorites, addTask } =
  taskStore;
</script>

<template>
  <div class="py-3 px-4 bg-white flex flex-col gap-12 rounded-md min-w-[600px]">
    <div class="w-full">
      <input
        type="text"
        name=""
        v-model="taskName"
        id=""
        class="px-4 py-3 bg-gray-200"
      />
      <button
        class="px-4 py-3 bg-blue-600 text-white"
        @click="handleTaskCreation(taskName)"
      >
        Add Task
      </button>
    </div>
    <div class="flex justify-between items-center">
      <p class="text-md text-black font-bold" v-if="toggleTasks === 'all'">
        You have {{ tasksCount }} tasks to do
      </p>
      <p
        class="text-md text-black font-bold"
        v-if="toggleTasks === 'favorites'"
      >
        You have {{ favCount }} favorites to do
      </p>
      <div class="flex gap-4">
        <button
          class="px-8 py-1 border-2 border-black rounded-sm text-blue-700"
          @click="toggleButton('favorites')"
        >
          Favorite Tasks
        </button>
        <button
          class="px-8 py-1 border-2 border-black rounded-sm text-blue-700"
          @click="toggleButton('all')"
        >
          All Tasks
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-8" v-if="toggleTasks === 'all'">
      <div v-for="task in allTasks" :key="task.id" class="">
        <div
          class="flex justify-between w-full p-4 rounded-md border border-purple-800"
        >
          {{ task.title }}
          <div class="flex gap-6 items-center">
            <Icon
              name="uil:trash"
              class="cursor-pointer"
              size="24"
              style="color: black"
              @click="removeTask(task.id)"
            />

            <!-- Heart Icon -->
            <Icon
              name="uil:heart"
              size="24"
              :style="task.isFav ? 'color: red;' : 'color: black;'"
              class="{`"
              cursor-pointer
              ${tas}`}
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-8" v-if="toggleTasks === 'favorites'">
      <div v-for="task in favorites" :key="task.id" class="">
        <div
          class="flex justify-between w-full p-4 rounded-md border border-purple-800"
        >
          {{ task.title }}
          <div class="flex gap-6 items-center">
            <Icon
              name="uil:trash"
              class="cursor-pointer"
              size="24"
              style="color: black"
              @click="removeTask(task.id)"
            />

            <!-- Heart Icon -->
            <Icon
              name="uil:heart"
              size="24"
              :style="task.isFav ? 'color: red;' : 'color: black;'"
              class="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
