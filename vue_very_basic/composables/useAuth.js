import { ref } from "vue";
export const useAuth = () => {
  const user = ref(null);
  const isAuth = ref(false);

  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      user.value = { username };
      isAuth.value = true;
    }
  };
  const logout = () => {
    user.value = null;
    isAuth.value = false;
  };

  return {
    user,
    isAuth,
    login,
    logout,
  };
};
