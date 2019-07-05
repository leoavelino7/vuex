const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const PATHS = {
    src: path.join(__dirname, ".."),
    build: path.join(__dirname, "../public/js"),
}

const commonConfig = {
    entry: `${PATHS.src}/main.js`,
    output: {
        filename: '[name].js',
        path: PATHS.build
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};

module.exports = {
    commonConfig
};