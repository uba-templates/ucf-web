# UCF标准前端工程

### 1. 使用

1. 克隆项目脚手架 `git clone https://github.com/uba-templates/ucf-web-multi.git`
2. 通过工具获取

### 2. 环境

1. [node.js](https://nodejs.org/en/download/) v10.15.x
2. [npm](https://www.npmjs.com/) v6.x.x
3. [git](https://git-scm.com/) v2.17.x

### 3. 运行&构建

运行微服务工程需切换到`ucf-app-order`根目录下，运行`npm run dev`或构建`npm run build`

### 4. 开发目录结构

1. ucf-web 目录文件

```bash
.
├── LICENSE
├── README.md
├── docs
│   └── README.md
├── package.json
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
├── ucf-publish
│   └── ucf-app-order-pay
│       ├── index.d2275b2e.css
│       ├── index.d2275b2e.js
│       ├── index.d2275b2e.js.map
│       └── index.html
└── ucf-workbench
    └── src
        ├── Layout.js
        └── Layout.less
```

2. ucf-app-order 目录文件

```bash
ucf-app-order
├── .DS_Store
├── README.md
├── dist
│   └── ucf-app-order-pay
│       ├── index.ec4ade37.css
│       ├── index.ec4ade37.js
│       ├── index.ec4ade37.js.map
│       └── index.html
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
│   │       ├── routes.js
│   │       └── service.js
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
├── test
│   ├── README.md
│   └── app.test.js
└── uba.config.js
```

### 5. 开发说明

1. 外层模块说明

- `docs` 业务开发文档
- `ucf-app-order` 具体业务模块此处为订单
- `ucf-boot-starter` 用于启动全部工程或某一块
- `ucf-common` 公共类可以发包
- `ucf-workbench` 布局类或工作台
- `ucf-publish` 构建发布资源

2. 内层模块说明

以`ucf-app-order`为例,它是一个单独可运行、构建的微服务工程，可以使用路由、状态管理

- `dist` 构建出来的资源，是包括不同目录的微服务模块
- `src` 里面是微服务的主要代码
- `src/components` 微服务工程公共组件
- `src/static` 微服务工程静态资源
- `src/styles` 微服务工程公共样式
- `src/utils` 微服务工程公共函数库

最主要的`pages`里面是我们微服务工程的子模块，这里又分为以下几点：

- `pages/ucf-app-order-pay` 微服务工程子模块
- `ucf-app-order-pay/components` 子模块组件提取
- `ucf-app-order-pay/app.js` 入口文件
- `ucf-app-order-pay/app.less` 子模块全局样式
- `ucf-app-order-pay/container.js` 子模块容器组件
- `ucf-app-order-pay/model.js` 子模块模型
- `ucf-app-order-pay/routes.js` 子模块路由
- `ucf-app-order-pay/service.js` 子模块服务请求类
