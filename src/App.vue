<template>
  <Navigation />
  <Invoice />
  <InvoiceModal />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Invoice from "./components/Invoice.vue";
import InvoiceModal from "./components/InvoiceModal.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Invoice,
    InvoiceModal,
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
