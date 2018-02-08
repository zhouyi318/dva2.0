/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:40:25 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-08 09:45:39
 */
import 'babel-polyfill'
const path = require('path');
const fs = require('fs');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),
  path.resolve(__dirname, 'public/svg/'),
];

const roadhogConfig = {
  /* 切换入口 */
  entry: {
    // "demo1": `${__dirname}/src/App/DEMO/Demo1/entry.js`,
    "demo2": `${__dirname}/src/App/DEMO/Demo2/entry.js`,
    // "demo3": `${__dirname}/src/App/DEMO/Demo3/entry.js`,
  },
  publicPath: '',
  svgSpriteLoaderDirs: svgSpriteDirs,
  disableCSSModules: false,
  multipage: true,
  hash: true,
  autoprefixer: {
    "browsers": [
      "iOS >= 8", "Android >= 4"
    ]
  },
  extraBabelPlugins:[
    "transform-runtime",
    ["import", {
      "libraryName": "antd-mobile",
      "libraryDirectory": "lib",
      "style": true
    }]
  ],
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
      ]
    }
  }
}

export default roadhogConfig
