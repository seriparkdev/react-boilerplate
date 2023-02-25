const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "esnext",
      }),
    ],
  },
});
