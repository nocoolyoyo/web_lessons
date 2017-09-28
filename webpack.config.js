module.exports = {
    devtool: '#eval-source-map',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "build.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader',
        },
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },

    module: {
        rules: [
            //转化ES6语法
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            //解析.vue文件
            {
                test:/\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/
            },
            //图片文件模块化
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            //css模块
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },

            //sass模块
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }

        ]
    }

};