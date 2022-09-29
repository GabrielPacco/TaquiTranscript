module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}
