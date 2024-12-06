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
    favorites() {
      return this.tasks.filter((task) => task.isFav);
    },
  },
});
