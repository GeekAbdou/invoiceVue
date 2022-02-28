<template>
  <header flex-row class="header">
    <div class="header__navigation-bar">
      <div class="header__logo">
        <img class="logo-img" src="../assets/imgs/logo.png" alt="" />
      </div>
      <!-- header__logo -->
      <div class="header__control">
        <div class="header__control__light-dark">
          <img src="../assets/imgs/icon-moon.svg" alt="" />
        </div>
        <!-- control__light-dark -->
        <img
          class="header__control__user-profile"
          src="../assets/imgs/771188_man_512x512.png"
          alt=""
        />
      </div>
      <!-- header__control -->
    </div>
  </header>
</template>

<script>
export default {
  name: "navigationBar",
};
</script>

<style lang="scss">
.header {
  width: 80px;

  &__navigation-bar {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    width: 80px;
    background: rgb(55, 59, 83) none repeat scroll 0% 0%;
    border-radius: 0 10px 0 0;
  }
  .logo-img {
    width: 80px;
    height: 80px;
    border-radius: 0 10px 10px 0;
  }

  &__control {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__light-dark {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 25px;

      &::after {
        content: "";
        height: 1px;
        width: 80px;
        background: rgb(73, 78, 110) none repeat scroll 0% 0%;
        margin-top: 25px;
      }
    }

    &__user-profile {
      width: 50px;
      height: 50px;
      border-radius: 0 10px 10px 0;
      margin-bottom: 25px;
    }
  }
}
</style>
