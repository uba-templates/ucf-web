# UCF标准前端工程

### 1. 使用

1. 克隆项目脚手架 `git clone https://github.com/uba-templates/ucf-web-multi.git`
2. 通过工具获取

### 2. 环境

1. [node.js](https://nodejs.org/en/download/) v10.15.x
2. [npm](https://www.npmjs.com/) v6.x.x
3. [git](https://git-scm.com/) v2.17.x

### 3. 运行

待定

### 4. 开发目录结构

1. ucf-web 目录文件

```bash
.
├── LICENSE
├── README.md
├── docs
│   └── README.md
├── package.json
├── ucf-app-order
│   ├── dist
│   │   └── README.md
│   ├── package.json
│   ├── src
│   │   ├── components
│   │   │   └── Order
│   │   │       ├── index.js
│   │   │       └── index.less
│   │   ├── pages
│   │   │   └── ucf-app-order-pay
│   │   │       ├── app.js
│   │   │       ├── app.less
│   │   │       ├── components
│   │   │       │   └── Pay
│   │   │       │       ├── index.js
│   │   │       │       └── index.less
│   │   │       ├── container.js
│   │   │       ├── index.html
│   │   │       ├── model.js
│   │   │       └── routes.js
│   │   ├── static
│   │   │   ├── fonts
│   │   │   │   ├── demo.css
│   │   │   │   ├── demo_fontclass.html
│   │   │   │   ├── demo_symbol.html
│   │   │   │   ├── demo_unicode.html
│   │   │   │   ├── iconfont.css
│   │   │   │   ├── iconfont.eot
│   │   │   │   ├── iconfont.js
│   │   │   │   ├── iconfont.svg
│   │   │   │   ├── iconfont.ttf
│   │   │   │   └── iconfont.woff
│   │   │   ├── images
│   │   │   │   └── nodata.png
│   │   │   └── others
│   │   │       └── README.md
│   │   ├── styles
│   │   │   └── index.less
│   │   └── utils
│   │       ├── index.js
│   │       └── request.js
│   └── test
│       └── README.md
├── ucf-boot-starter
│   └── boot.config.js
├── ucf-common
│   └── src
│       ├── components
│       │   └── Example
│       │       ├── index.js
│       │       └── index.less
│       ├── static
│       │   └── README.md
│       └── utils
│           └── index.js
├── ucf-workbench
│   └── src
│       ├── Layout.js
│       └── Layout.less
├── webpack.common.js
├── webpack.development.js
└── webpack.production.js
```

2. ucf-app-order 目录文件

```bash
ucf-app-order
├── dist
│   └── README.md
├── package.json
├── src
│   ├── .DS_Store
│   ├── components
│   │   └── Order
│   │       ├── index.js
│   │       └── index.less
│   ├── pages
│   │   └── ucf-app-order-pay
│   │       ├── app.js
│   │       ├── app.less
│   │       ├── components
│   │       │   └── Pay
│   │       │       ├── index.js
│   │       │       └── index.less
│   │       ├── container.js
│   │       ├── index.html
│   │       ├── model.js
│   │       └── routes.js
│   ├── static
│   │   ├── fonts
│   │   │   ├── demo.css
│   │   │   ├── demo_fontclass.html
│   │   │   ├── demo_symbol.html
│   │   │   ├── demo_unicode.html
│   │   │   ├── iconfont.css
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.js
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   └── iconfont.woff
│   │   ├── images
│   │   │   └── nodata.png
│   │   └── others
│   │       └── README.md
│   ├── styles
│   │   └── index.less
│   └── utils
│       ├── index.js
│       └── request.js
└── test
    └── README.md
```

### 5. 开发说明

1. 外层模块说明

- `ucf-app-order` 具体业务模块
- `ucf-boot-starter` 用于启动全部工程或某一块
- `ucf-common` 公共类可以发包
- `ucf-workbench` 布局类或工作台

2. 内层模块说明

- `ucf-app-order/src/pages/ucf-app-order-pay` 微服务工程，包括入口、模型、路由、公共组件等
- `ucf-app-order/src/components` 此类作为微服务内部需要的依赖资源