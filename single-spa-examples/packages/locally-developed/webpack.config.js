const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "andric",
    projectName: "locally-developed",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/i,
    //       use: ["style-loader", "css-loader"],
    //     },
    //   ],
    // },
  })
};
