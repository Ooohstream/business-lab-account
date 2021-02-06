module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/base.scss";`,
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:8080'
  }
};
