const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['babel-polyfill', './Client/Components/CarRentalMainJs.js'],
    output:
    {
        filename: 'CarRental-bundle.js',

        path: path.join(__dirname, 'wwwroot/dist')

    },

    module: {

        rules: [{

            loader: 'babel-loader',

            test: /\.js$/,

            exclude: /node_modules/

        }]

    }

};