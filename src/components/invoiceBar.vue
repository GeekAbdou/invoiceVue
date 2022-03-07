<template>
  <div class="invoice flex">
    <div class="left flex">
      <span class="tracking-number">#{{ invoice.invoiceId }}</span>
      <span class="due-date">{{ invoice.paymentDueDate }}</span>
      <span class="person">{{ invoice.clientName }}</span>
    </div>
    <div class="right flex">
      <span class="price">${{ invoice.invoiceTotal }}</span>
      <div
        class="status-button flex"
        :class="{
          paid: invoice.invoicePaid,
          draft: invoice.invoiceDraft,
          pending: invoice.invoicePending,
        }"
      >
        <span v-if="invoice.invoicePaid">Paid</span>
        <span v-if="invoice.invoiceDraft">Draft</span>
        <span v-if="invoice.invoicePending">Pending</span>
      </div>
      <div class="icon">
        <img src="../assets/imgs/icon-arrow-right.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invoice",
  props: ["invoice"],
};
</script>

<style lang="scss" scoped>
.invoice {
  width: 80%;
  max-width: 45rem;
  margin: 0 auto;
  padding: 100px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px 32px;
  background-color: #1e2139;
  align-items: center;
  span {
    font-size: 13px;
  }
  .left {
    align-items: center;
    flex-basis: 60%;
    gap: 25px;
    span {
      flex: 1;
    }
    .tracking-number {
      text-transform: uppercase;
    }
  }
  .right {
    gap: 50px;
    flex-basis: 50%;
    align-items: center;
    .price {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
.flex {
  display: flex;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
</style>
