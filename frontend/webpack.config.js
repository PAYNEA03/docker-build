// webpack.config.js
import path from 'path';

export const resolve = {
    fallback: {
        crypto: require.resolve('crypto-browserify'),
    },
};
