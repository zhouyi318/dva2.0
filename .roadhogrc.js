/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:40:25 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-09 11:18:45
 */
import 'babel-polyfill';
import path from 'path';
import fs from 'fs';
import entryConfig from './debugConfig/index';


let [ entryAllArray, entryArray] = [[],[]]

let svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),
  path.resolve(__dirname, 'src/public/svg/'),
];

export default {
  entry: getEntry(),
  publicPath: '',
  theme: `${__dirname}/theme.config.js`,
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

function getEntry() {
  let entry = {}
  
  readDirSync(`${__dirname}/src/App`)
  
  getProEntry()

  entryAllArray.map(item=>{
    entryArray.map(key=>{
      if(item.indexOf(key) != -1){
        entry[item.split('App/')[1]] = `${item}/entry.js`
      }
    })
  })

  return entry
}

function getProEntry(){
  for(let key in entryConfig){
    if (entryConfig.hasOwnProperty(key)) {
      entryArray.push(key)
    } 
  }
}

function readDirSync(path, callback) {
  let pa = fs.readdirSync(path);
  pa.forEach(function(ele, index) {
    let info = fs.statSync(path + "/" + ele)
    if (info.isDirectory()) {
      readDirSync(path + "/" + ele);
    } else {
      if (ele.indexOf('entry') != '-1') {
        entryAllArray.push(path)
      }
    }
  })
}






