const config = {
    mode: 'production',
    entry: {
        index: ['./src/js/index.js'],
        pizza: ['./src/js/pizza.js'],
        foods: ['./src/js/foods.js'],
        deserts: ['./src/js/deserts.js'],
        drinks: ['./src/js/drinks.js'],


    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader,css-loader'],
            }
        ]


    }
}
module.exports = config