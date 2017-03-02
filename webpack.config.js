module.exports = {
    entry: ['./Site/startup.js'],
    output: {
        path: '/Build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './Build',
        inline: true
    }
}