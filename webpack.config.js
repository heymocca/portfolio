var path = require('path');
module.exports = {
    entry: "./app/assets/scripts/scripts.js",
    output: {
        path: path.resolve(__dirname, "./app/compile/scripts"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}
