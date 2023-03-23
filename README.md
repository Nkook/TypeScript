# TypeScript
## TypeScript讲解

### 【01】
#### 1. 开发环境搭建
    1. 下载node.js 安装
    2. 安装typescript  npm i -g typescript  通过tsc查看是否安装
    3. 创建一个ts文件
    4. 执行 tsc xxx.ts 就可以将ts文件编译成js文件，在html中引用后可以在浏览器中访问

#### 2. 类型
    number
    string
    boolean
    字面量
    any
    unknown
    void
    never
    object
    array
    tuple
    enum

### 【02】
#### 1. 监测自动编译
        1. 监测单个文件：将ts文件自动编译到js文件里。 执行命令：sc xxx.ts -w  只能针对单个文件进行监测
        2. 监测所有文件：执行一个命令，将所有的ts文件全部编译完成。新建 tsconfig.json文件，执行命令：tsc 当前项目下的所有ts文件都会编译成js文件。执行命令：tsc -w 就会监测所有文件。
#### 2. 编译选项 tsconfig.json
        1. tsconfig.json 是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译
        2. 配置选项有很多，除了配置需要编译的文件外，compilerOptions里的属性主要是编译选项，决定了怎么编译。

### 【03】 使用webpack打包ts代码
    1. npm init -y 项目初始化，生成package.json
    2. 安装依赖 cnpm i -D webpack webpack-cli typescript ts-loader  // -D是只在开发环境安装， ts包，ts-loader是把webpack和ts整合到一起
    3. 编写webpack配置文件 webpack.config.js
    4. 编写ts配置文件 tsconfig.json 
    5. 写命令 package.json 中写 "build": "webpack"
    6. 直接通过npm run build 就可以直接通过webpack打包了
    7. 【打包后自动生成html文件】：安装插件 cnpm i -D html-webpack-plugin 帮助我们自动的生成html文件
        在package.json的plugins中对该插件进行配置
        再去npm run build 在dist文件夹中就会自动生成一个index.html文件
    8. 【根据已有的html模板生成】：在src下写一个index.html文件，在插件中配置template: "./src/index.html"
        打包的时候会将src下的这个文件作为模版生成dist/index.html文件
    9. 【文件更新浏览器自动刷新】：运行项目后，在浏览器自动打开，根据项目的改变自动在浏览器刷新看到结果。
        cnpm i -D webpack-dev-server 安装
        "start": "webpack serve --open"
    10. 【打包编译前先把dist文件清空再生成新的】
        cnpm i -D clean-webpack-plugin 安装
        plugins: [                      配置
            new cleanWebpackPlugin()
        ]
    11. 【引入模块配置】ts默认是不可以作为模块使用的，想要支持important模块引入，需要配置告诉webpack哪些文件可以作为模块被引入
        resolve: {
            extensions: ['.ts', '.js']
        }
    12. 【引入bable工具，兼容更多浏览器】：配置好了babel，写代码想用什么语法用什么。
        作用：
            把新语法转成旧语法
            把新的方法在旧浏览器中支持

        步骤：
                <!--   babel、预设不同的环境、babel和webpack结合、模拟js的运行环境 -->
        1. 安装依赖 cnpm i -D @babel/core @babel/preset-env babel-loader core-js
        2. 修改webpack配置文件里的module。 // 配置babel
        3. webpack新版本处理不兼容老版本浏览器了，比如：打包后会出现箭头函数。如果想兼容去配置arrowFunction: false。这样webpack就不会进行处理了，会使用我们自己配置的babel将箭头函数转成普通函数。

        打包编译过程：
            ts文件先去找ts-loader转成js，js文件再去找babel转成老版本的js
        

        







