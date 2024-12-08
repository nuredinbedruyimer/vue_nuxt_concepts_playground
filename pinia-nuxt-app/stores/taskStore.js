import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "Finish the project documentation",
        isFav: true,
      },
      {
        id: 2,
        title: "Set up the server environment",
        isFav: false,
      },
      {
        id: 3,
        title: "Design the user interface",
        isFav: true,
      },
      {
        id: 4,
        title: "Implement authentication system",
        isFav: false,
      },
      {
        id: 5,
        title: "Write unit tests for the API",
        isFav: true,
      },
    ],
  }),
  getters: {
    allTasks() {
      return this.tasks;
    },
    tasksCount(this) {
      return this.tasks.length;
    },
    favorites(this) {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount(this) {
      return this.tasks.filter((task) => task.isFav).length;
    },
  },
  actions: {
    addTask(taskName) {
      console.log("Tas Name : ", taskName);
      const task = {
        id: this.tasks.length + 1,
        title: taskName,
        isFav: false,
      };
      this.tasks.push(task);
    },
    removeTask(id) {
      this.tasks= this.tasks.filter((task) => task.id !== id);
      console.log(this.tasks);
    },
  },
});
