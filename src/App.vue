<template>
  <Navigation />
  <TopBar />
  <Invoice />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import TopBar from "./components/TopBar.vue";
import Invoice from "./components/Invoice.vue";
export default {
  name: "App",
  components: {
    Navigation,
    TopBar,
    Invoice,
  },
};
</script>

<style lang="scss"></style>
