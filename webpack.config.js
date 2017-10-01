const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve('dist/'),
        filename: 'mario-broid.js',
    },
    externals: {
        pixijs: 'PIXI',
    },
    module: {
        rules: [{
            test: /.ts$/,
            loader: 'ts-loader',
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
        }],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'assets/index.html',
                to: '',
            }, {
                from: 'assets/images/*',
                to: 'images/',
            }, {
                from: 'node_modules/pixi.js/dist/pixi.js',
                to: 'vendor/pixijs/pixi.js',
            },
        ]),
    ],
}
