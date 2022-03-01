<template>
  <Navigation />
  <Invoice />
  <InvoiceModal v-if="invoiceModal" />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Invoice from "./components/Invoice.vue";
import InvoiceModal from "./components/InvoiceModal.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Navigation,
    Invoice,
    InvoiceModal,
  },
  computed: {
    ...mapState(["invoiceModal"]),
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
