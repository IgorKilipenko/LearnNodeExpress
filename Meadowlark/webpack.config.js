var path = require('path');

module.exports = {
    entry: './meadowlark.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: /(node_modules|bower_components)/,
                enforce: "pre",
                enforce: "post",
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};