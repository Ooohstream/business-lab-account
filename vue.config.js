module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/base.scss";`,
      },
    },
  },
  devServer: {
	  port: 80,
	  host: '0.0.0.0',
	  proxy: 'http://78.142.222.201:8080',
  },
};
