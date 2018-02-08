/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:01 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-08 09:47:56
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfig, env) => {

    /* HTML模版 */
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            title: "DEMO", 
            filename: "index.html", 
            template: "./src/index.ejs"
        })
    )

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
    
    /* 全局变量 */
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV)
    }));

    return webpackConfig
};
