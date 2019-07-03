const merge =  require("webpack-merge");

const { commonConfig } = require("./webpack.common.js");
const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");

module.exports = env => {
    console.log("env", env);
    return merge(commonConfig, (env === "development") ? devConfig : prodConfig);
}