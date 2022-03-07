<template>
  <div class="container invoices-wrapper">
    <InvoiceTopBar />
    <InvoiceBar
      v-for="(invoice, index) in invoiceData"
      v-bind:invoice="invoice"
      :key="index"
    />
  </div>
</template>

<script>
import InvoiceTopBar from "./InvoiceTopBar.vue";
import InvoiceBar from "./InvoiceBar.vue";
import { mapState } from "vuex";
export default {
  name: "invoice",
  components: {
    InvoiceTopBar,
    InvoiceBar,
  },
  computed: {
    ...mapState(["invoiceData"]),
  },
};
</script>

<style lang="scss">
.invoices-wrapper {
  flex-direction: column;
}
</style>
