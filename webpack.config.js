/*
 * @Author: your name
 * @Date: 2019-10-22 20:58:31
 * @LastEditTime: 2019-11-04 20:58:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-element-admin-master/Users/yu/Desktop/practise/webpack/webpack.config.js
 */
// 因为webpack是基于nodejs 构建的所以用的是nodejs 语法
const path = require('path');
// 引入webpack
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 引入插件
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,'./src/main.js'), // 获取出口文件路经
    output:{
        path:path.join(__dirname,'dist'), // 指定打包好的文件，输出到哪个目录
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {
                test:/\.(jpg|png|gif|jpeg|bmp)/,
                use:'url-loader?limit=114290&name=[hash-8]-[name].[ext]'
            },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { 
                test:/\.js$/,
                loader: 'babel-loader',
                query: {
                    compact: true,
                    cacheDirectory: true
                }
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }

        ]
    },
    resolve:{
        // alias:{
        //     'vue$':'vue/dist/vue.js'
        // }
        
    }
}