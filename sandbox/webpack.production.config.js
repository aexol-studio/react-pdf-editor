const { devServer, ...webpackParams } = require("./webpack.config");

module.exports = {
  ...webpackParams,
  mode: "production"
};
