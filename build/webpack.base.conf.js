
const config = require('./config');
const path=require('path')
const SRC_PATH=path.resolve(__dirname,"../src");

module.exports = {
    entry: {
        main: config.entry_path
    },
    resolveLoader: {
        modules: ['node_modules']
    },
    resolve: {
        extensions: config.resolve_extensions_group,
        alias: {
            "@":path.resolve(__dirname,"../src")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: config.src_path,
                exclude: /node_modules/
            },
            {
                test: /\.(tsx|ts)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff|eot|woff2|tff|jpg|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test:/\.svg$/,
                loader:"svg-sprite-loader"
            }
        ]
    },
    plugins: []
}
