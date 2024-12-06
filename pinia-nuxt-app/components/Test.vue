<template>
  <div>
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.password }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "user"],
  setup(props) {
    const user = reactive({
      name: props.user.name,
      email: props.user.email,
      password: props.user.password,
    });
    return {
      name: props.name,
      user: user,
    };
  },
};
</script>

<style lang="scss" scoped></style>
