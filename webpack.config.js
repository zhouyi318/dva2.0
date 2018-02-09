/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:01 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-09 11:20:17
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfig, env) => {

    let webpackPlugs = [
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]

    if(env === 'production'){
        webpackConfig.plugins = webpackConfig.plugins.concat(webpackPlugs)
    }

    if(env === 'tool'){
        webpackConfig.plugins = webpackConfig.plugins.concat(webpackPlugs)
        webpackConfig.plugins.push(
            new VConsolePlugin({
                enable: true
            })
        )
    }

    if (env === 'charts') {
        webpackConfig.plugins = webpackConfig.plugins.concat(webpackPlugs)
        webpackConfig.plugins.push(
            new Visualizer()
        )
    }

    if (webpackConfig.module) {
        webpackConfig.module.rules.map((item) => {
            if(String(item.loader) === 'url'){
                item.options.limit = 102400
            }
            return item
        })
    }

    /* 快捷选项 */
    webpackConfig.resolve.alias = {
        mock: `${__dirname}/mock`,
        public: `${__dirname}/src/public`,
        assets: `${__dirname}/src/assets`,
        components: `${__dirname}/src/components`,
        models: `${__dirname}/src/models`,
        services: `${__dirname}/src/services`,
        utils: `${__dirname}/src/utils`,
        debugConfig: `${__dirname}/src/models`,
        svg: `${__dirname}/src/pubilc/svg`,
    };


    /* HTML模版 */
    let [htmlArray, htmlArrObj] = [[],[]]

    for (let key in webpackConfig.entry) {
        if (webpackConfig.entry.hasOwnProperty(key)) {
            htmlArray.push(key)
        }
    }

    for (let i = 0; i < htmlArray.length; i++) {
        htmlArrObj[i] = {};
        htmlArrObj[i].excludeChunks = [];
        for (let j = 0; j < htmlArray.length; j++) {
            if (htmlArray[j] !== htmlArray[i]) {
                htmlArrObj[i].excludeChunks.push(htmlArray[j])
            }
        }
    }

    for (let n = 0,len = htmlArray.length; n < len; n++) {
        webpackConfig.plugins.push(
            new HtmlWebpackPlugin({
                title: `${htmlArray[n].split('/')[1]}`, 
                filename: `${htmlArray[n].split('/')[1]}.html`,
                template: "./src/index.ejs",
                excludeChunks: htmlArrObj[n].excludeChunks,
                inject: false
            })
        )
    }
    
    /* 全局变量 */
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV)
    }));

    return webpackConfig
};
