import { defineStore } from "pinia";

export const useCountStore = defineStore("storeId", {
  state: () => ({
    // Reactive state properties
    count: 0,
    user: null,
  }),
  actions: {
    // Methods to modify state
    increment() {
      this.count++;
    },
    setUser(userData) {
      this.user = userData;
    },
  },
  getters: {
    // Derived state
    isLoggedIn: (state) => !!state.user,
  },
});
