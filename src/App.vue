<template>
  <Navigation />
  <Invoice />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Invoice from "./components/Invoice.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Invoice,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: row;
  background-color: #f8f8fb;
}
</style>
