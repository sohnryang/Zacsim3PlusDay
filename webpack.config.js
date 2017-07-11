module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/out/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/out/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
