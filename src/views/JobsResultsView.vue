<template>
  <router-link to="/">goToHome</router-link>
  <br />
  <router-link :to="{ name: 'Home' }">goToHome</router-link>
  <br />
  <router-link :to="{ path: '/' }">goToHome</router-link>
  <h1 class="text-6xl font-bold">Job Results View</h1>
  <button @click="goToHome">goToHome</button>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      // this.$router.push({ name: "Home" });
      this.$router.push({ path: "/" });
    },
  },
};
</script>
