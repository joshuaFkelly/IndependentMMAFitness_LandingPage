const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public/scripts'),
        filename: 'app.bundle.js',
    },

    module: {
        rules: [
            {
                test: /(.js|.jsx)$/,
                exclude: /(node_modules)$/,
                loader: 'babel-loader'
            }
        ]
    }
}