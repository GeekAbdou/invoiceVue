module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import './src/scss/index.scss';`,
      },
    },
  },
  /*   defineConfig({
    transpileDependencies: true;
  }) */
};
