/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:01 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-08 17:54:28
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfig, env) => {

    if (webpackConfig.module) {
        webpackConfig.module.rules.map((item) => {
            if(String(item.loader) === 'url'){
                item.options.limit = 1024000
            }
            return item
        })
    }

    /* 快捷选项 */
    webpackConfig.resolve.alias = {
        mock: `${__dirname}/mock`,
        public: `${__dirname}/public`,
        assets: `${__dirname}/src/assets`,
        components: `${__dirname}/src/components`,
        models: `${__dirname}/src/models`,
        services: `${__dirname}/src/services`,
        utils: `${__dirname}/src/utils`,
        debugConfig: `${__dirname}/src/models`,
        svg: `${__dirname}/pubilc/svg`,
    };


    /* HTML模版 */
    let htmlArray = []

    for (let key in webpackConfig.entry) {
        if (webpackConfig.entry.hasOwnProperty(key)) {
            htmlArray.push(key)
        }
    }

    for (let n = 0,len = htmlArray.length; n < len; n++) {
        webpackConfig.plugins.push(
            new HtmlWebpackPlugin({
                title: `${htmlArray[n].split('/')[1]}`, 
                filename: `${htmlArray[n]}.html`,
                template: "./src/index.ejs",
            })
        )
    }
    
    /* 全局变量 */
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV)
    }));

    return webpackConfig
};
