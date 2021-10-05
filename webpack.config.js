const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // used to resolve absolute path to project's root directory (where web pack.config.js should be located)

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // property identifies which file or files should be transformed.
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // property indicates which loader should be used to do the transforming.
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                },
            },
            {
                test: /\.css$/,   //.css 확장자로 끝나는 모든 파일
                use: ['style-loader', 'css-loader'] // stlye-loader : js로 변경된 css내용을 동적으로 dom에css-loader : css 파일이 js 코드로 변경
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
    mode: 'development',
    performance: {
        hints: false
    }
};