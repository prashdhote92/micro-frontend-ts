const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const deps = require('./package.json').dependencies;

const buildDate = new Date().toLocaleString();

module.exports = () => {
    return {
        entry: './src/index.ts',
        mode: 'development',
        devServer: {
            port: 3000,
            open: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx|ts)$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
                { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
            ],
        },

        plugins: [
            new webpack.EnvironmentPlugin({BUILD_DATE: buildDate}),
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(process.env),
            }),
            new ModuleFederationPlugin({
                name: 'converterApp',
                remotes: {
                    length_pack: "length_pack@http://localhost:3001/remoteConverter.js",
                    //app2: isProduction ? process.env.PROD_APP2 : process.env.DEV_APP2,
                },
                shared: {
                    ...deps,
                    react: {singleton: true, eager: true, requiredVersion: deps.react},
                    'react-dom': {
                        singleton: true,
                        eager: true,
                        requiredVersion: deps['react-dom'],
                    },
                },
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
        ],
    };
};