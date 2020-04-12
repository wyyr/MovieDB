const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "movieku.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff|woff2|ttf)$/,
                loaders: [
                    "img-loader",
                    "file-loader?name=/src/images/[name].[ext]",
                ],
            },
            {
                test: /\.(sass|scss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        })
    ],
};
