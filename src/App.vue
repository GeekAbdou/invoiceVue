<template>
  <Navigation />
  <Invoice />
  <transition name="invoiceModal">
    <InvoiceModal v-if="invoiceModal" />
  </transition>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Invoice from "./components/Invoice.vue";
import InvoiceModal from "./components/InvoiceModal.vue";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "App",

  components: {
    Navigation,
    Invoice,
    InvoiceModal,
  },
  computed: {
    ...mapState(["invoiceModal", "modalActive", "invoicesLoaded"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    ...mapActions(["GET_INVOICE"]),

    newInvoice() {
      this.TOGGLE_INVOICE();
    },
  },

  created() {
    this.GET_INVOICE();
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: row;
  background-color: #f8f8fb;
}

// animated invoice
.invoiceModal-enter-active,
.invoiceModal-leave-active {
  transition: 0.5s ease all;
}
.invoiceModal-enter-from,
.invoiceModal-leave-to {
  transform: translateX(-500px);
}
</style>
