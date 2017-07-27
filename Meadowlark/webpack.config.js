var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    {
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
                        path.resolve(__dirname, '/')
                    ],
                    exclude: /(node_modules|bower_components|dist|views|routes)/,
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015", "stage-1"]
                    }
                }
            ]
        },
        target: 'node',
        externals: [nodeExternals()],
        node: {
            fs: "empty",
            net: "empty"
        }

    }
    
]