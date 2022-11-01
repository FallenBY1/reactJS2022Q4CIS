const { merge } = require('webpack-merge');
const developmentConfig = require('./webpack.config.dev')
const productionConfig = require('./webpack.config.prod')

const commonConfig = {
    entry: './src/index.tsx',
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
};


module.exports = (env, args) => {
    switch(args.mode) {
        case 'development':
            return merge(commonConfig, developmentConfig);
        case 'production':
            return merge(commonConfig, productionConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
}