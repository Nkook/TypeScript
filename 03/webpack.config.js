// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入插件 打包编译前先把dist文件清空再生成新的
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack中的所有配置信息 都应该写在 module.exports 中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: "bundle.js",

        // 告诉webpack 不使用箭头函数。
        environment: {
            arrowFunction: false
        }
    },
    mode: 'development',

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件：匹配所有的以ts结尾的文件
                test: /\.ts$/,
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets: { // 指定浏览器版本
                                            "chrome": '58',
                                            "ie": '11'
                                        },
                                        // 当使用Promise时，这俩配置就会起作用
                                        "corejs": '3', // 下载的版本号
                                        "useBuiltIns": 'usage', // 使用corejs的方式usage' 表示按需加载
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader', // 用ts-loader去处理
                ], // use里的loader是从后往前执行。ts文件先去找ts-loader转成js，js文件再去找babel转成老版本的js
                exclude: /node_modules/     // 要排除的文件
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '哈哈哈', // 打包出来的index.html文件里title是哈哈哈
            template: "./src/index.html" // 根据这个模板去打包
        }),
        
    ],
    // 用来设置引用模块 以ts和js结尾的文件可以通过import引入作为模块使用
    resolve: {
        extensions: ['.ts', '.js']
    }

}