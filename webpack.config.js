const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: {
        index: "./src/index.js",
        about: './src/about.js',
        contact: "./src/contact.js",
        menu: "./src/menu.js"
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: "Get the Gyros.."
    //     }),
    // ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        // clean: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
              
        ]
    }
}