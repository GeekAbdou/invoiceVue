module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '/scss/index.scss';`,
      },
    },
  },
  /*   defineConfig({
    transpileDependencies: true;
  }) */
};
