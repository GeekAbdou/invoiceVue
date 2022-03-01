<template>
  <header class="topBar">
    <div class="topBar__topBar-left">
      <span>Invoices</span>
      <div>There are 50 total invoices.</div>
    </div>
    <!--topBar-left-->

    <div class="topBar-right">
      <div class="topBar-right__filter">
        <div class="topBar-right__filter__toggle" @click="toggleFilterMenu">
          <span>
            Filter by status
            <span v-if="filteredInvoice">: {{ filteredInvoice }} </span>
          </span>
          <img src="../assets/imgs/icon-arrow-down.svg" alt="" />
        </div>

        <ul v-show="filterMenu" class="filter-menu">
          <li @click="filteredInvoices">
            <input type="radio" id="draft" name="select" value="Draft" />
            Draft
          </li>

          <li @click="filteredInvoices">
            <input type="radio" id="pending" name="select" value="Pending" />
            Pending
          </li>

          <li @click="filteredInvoices">
            <input type="radio" id="paid" name="select" value="Paid" />
            Paid
          </li>

          <li @click="filteredInvoices">
            <input type="radio" id="clear" name="select" value="Clear Filter" />
            Clear Filter
          </li>
        </ul>
      </div>
      <!--topBar__topBar-right__filter-->

      <div class="topBar-right__filter__Button">
        <div class="filter__Button__inner-plus">
          <img src="../assets/imgs/icon-plus.svg" alt="" />
        </div>
        <span>New Invoice</span>
      </div>
      <!--topBar-right__filter__Button-->
    </div>
    <!--topBar-right-->
  </header>
</template>

<script>
export default {
  name: "InvoiceTopBar",
  data() {
    return {
      filterMenu: null,
      filteredInvoice: null,
    };
  },
  methods: {
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
};
</script>

<style lang="scss">
.topBar {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 4rem;
  margin-top: 4rem;
  width: 100%;
  max-width: 50rem;
  height: 10%;

  &__topBar-left {
    & > span {
      display: block;
      font-size: 35px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    & > div {
      display: block;
      font-size: 12px;
      font-family: "Spartan", sans-serif;
      transition: all 0.3s ease 0s;
      color: rgb(136, 142, 176);
    }
  }

  .topBar-right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &__filter {
      margin-right: 30px;
      cursor: pointer;
      color: rgb(12, 14, 22);
      font-family: "Spartan", sans-serif;
      font-weight: bold;
      transition: color 0.3s ease 0s;
      font-size: 13px;
      user-select: none;

      &__toggle > span {
        margin-right: 15px;
      }

      ul {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        background-color: white;
        width: 170px;
        height: 130px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: rgba(72, 84, 159, 0.25) 0px 10px 20px;
        margin-bottom: 12px;
        cursor: pointer;
        position: absolute;
        li {
          margin-bottom: 10px;

          input[type="radio"] {
            margin-right: 10px;
          }
        }
      }
    }

    &__filter__Button {
      display: flex;
      background-color: #066cff;
      padding: 0 15px 0 15px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 10rem;
      color: white;
      font-family: "Spartan", sans-serif;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease 0s, color 0.3s ease 0s;

      span {
        margin-left: 10px;
      }
    }
  }

  .filter__Button__inner-plus {
    padding-top: 10px;
    img {
      text-align: center;
      height: 30px;
      line-height: 30px;
      margin-right: 0.5rem;
      padding: 10px;
      background-color: white;
      border-radius: 50%;
    }
  }
}
</style>
