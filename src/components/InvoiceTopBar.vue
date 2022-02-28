<template>
  <header class="topBar">
    <div class="topBar-left">
      <h1>Invoices</h1>
      <span>There are 50 total invoices</span>
    </div>
    <div class="topBar-right">
      <div class="">
        <span
          >Filter by status
          <span v-if="filteredInvoice">: {{ filteredInvoice }} </span>
        </span>
        <img src="../assets/imgs/icon-arrow-down.svg" alt="" />
        <ul v-show="filterMenu" class="filter-menu">
          <li @click="filteredInvoices">Draft</li>
          <li @click="filteredInvoices">Pending</li>
          <li @click="filteredInvoices">Paid</li>
          <li @click="filteredInvoices">Clear Filter</li>
        </ul>
      </div>
      <div class="button">
        <div class="inner-button">
          <img src="../assets/imgs/icon-plus.svg" alt="" />
        </div>
        <span>New Invoice</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "InvoiceTopBar",
};
</script>

<style lang="scss">
.topBar {
  display: flex;
}
</style>
