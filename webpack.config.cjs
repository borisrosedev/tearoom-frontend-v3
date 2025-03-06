
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {

    entry: "./main.ts",
    output: {
        filename: "[name].bundle.js",
        path : path.resolve(__dirname, "dist"),
        clean: true
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".ts", ".cjs"]
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(jp(e)?g|pgn|webp|gif)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from : "data", to : "data"
                },
                {
                    from : "assets" , to : "assets"
                }
            ]
        })
    ]

}