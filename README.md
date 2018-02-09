# Dva2.0 Demo 基于Dva2.0搭建
### 项目为多入口形式，支持多入口打包，提取公共部分，私有SVG等

##结构划分
```
.
├── /dist/                  # 打包后文件
├── /mock/                  # 数据mock的接口文件
├── /node_modules/          # 依赖包
├── /src/                   # 项目源码
│ ├── /App/                 # 项目总目录
│ │ ├── /DEMO/              # 项目平台
│ │ │ ├── ...               # 项目
│ │ │ │ ├── ...             # 各项目组件、数据模型等
│ ├── /components/          # 公共组件
│ ├── /models/              # 公共数据模型
│ ├── /services/            # 公共数据接口
│ ├── /themes/              # 公共主题
│ ├───/public/              # 静态文件
│ │ ├───/svg/               # svg存放目录
│ ├── /utils/               # 公共工具函数 
│ │ ├── index.ejs           # HTML模板
├── package.json            # 项目信息
└── .roadhogrc.mock.js      # 数据mock配置
```

### 项目入口
```
在根目录 .roadhogrc.js 中的 entry 下 
```

### Demo
```
1、Demo1: 所有内容装载于 entry.js 页面，有详细的步骤
2、Demo2：基于Demo1将各个步骤拆分到独立文件中，并且添加模拟数据mockjs
3、Demo3在的Demo2的基础上，添加 TabBars 等
```

### MyIcon
```
所有 ***.svg格式Icon 都存放在 /public/svg 文件夹内， 可在 svg 下自定义项目文件夹
使用私有 ICON 时，引入 Myicon 组件后，与antd-mobile的Icon使用方法一致
```

### 总结
```
此Demo适合对dva不熟悉的小伙伴，所有东西都比较初级，特别附上三个项目大致样式
```

## Demo1
Demo1 :![Image text](https://github.com/zhouyi318/dva2.0/blob/master/src/public/Demo1.png)
## Demo2
![Image text](https://github.com/zhouyi318/dva2.0/blob/master/src/public/Demo2_1.png)
![Image text](https://github.com/zhouyi318/dva2.0/blob/master/src/public/Demo2_2.png)
## Demo3
![Image text](https://github.com/zhouyi318/dva2.0/blob/master/src/public/Demo3_1.png)
![Image text](https://github.com/zhouyi318/dva2.0/blob/master/src/public/Demo3_2.png)

## 启动项目方法
```
1、克隆 clone git ***@....
2、进入文件夹 cd ...
3、下载依赖 yarn || npm i 
4、修改 .roadhogrc.js 入口
5、启动 yarn start || npm start
```

## 项目打包
```
1、修改 .roadhogrc.js 入口（单项目其它注销，多项目解开）
2、npm run build (打生产包)
3、npm run build:tool (打带有控制台的包)
4、npm run build:charts (打带有Echarts图分析包内存包)
```


