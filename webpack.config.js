const path = require('path');

module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出目录
        publicPath: '/', // 公共路径
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 匹配 JavaScript 文件
                exclude: /node_modules/, // 排除 node_modules 目录
                use: {
                    loader: 'babel-loader', // 使用 Babel 转译 ES6+ 代码
                },
            },
            {
                test: /\.css$/, // 匹配 CSS 文件
                use: ['style-loader', 'css-loader'], // 加载和处理 CSS 文件
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // 匹配图像文件
                type: 'asset/resource', // 处理图像文件
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'public'), // 开发服务器的根目录
        compress: true, // 启用 gzip 压缩
        port: 9000, // 端口号
        historyApiFallback: true, // 支持 HTML5 History API
    },
    resolve: {
        extensions: ['.js', '.jsx'], // 处理的文件扩展名
    },
};
