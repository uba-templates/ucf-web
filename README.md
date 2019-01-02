# UCF标准前端工程

### 1. 使用

1. 克隆项目脚手架 `git clone https://github.com/uba-templates/ucf-web-multi.git`
2. 通过命令`uba init ucf-web-multi`来下载`UCF`开发框架

### 2. 环境

1. [node.js](https://nodejs.org/en/download/) v10.15.x
2. [npm](https://www.npmjs.com/) v6.x.x
3. [git](https://git-scm.com/) v2.17.x

### 3. 运行

1. 启动服务 `npm run dev`
2. 构建服务 `npm run build`

### 4. 开发目录规范

1. 源码目录规范

```bash

├── src
│   ├── components              # 项目级别的公共封装业务组件
│   │   └── Example             # 具体公共组件
│   ├── pages                   # 业务页面节点
│   │   └── example             # 具体页面节点
│   │       ├── components      # 页面内提取公共业务组件
│   │       │   └── Example     # 公共组件
│   │       └── routes          # 路由配置
│   ├── static                  # 图片、字体、第三方资源
│   │   ├── font                # 字体
│   │   ├── images              # 图片
│   │   └── trd                 # 其他第三方资源
│   ├── styles                  # 工程全局样式
│   └── utils                   # 公共函数类
└── test
```

2. 页面目录规范

```bash

└── example
    ├── app.js                  # 逻辑入口文件
    ├── components              # 页面内公共组件
    │   └── Example             # 公共组件
    │       ├── index.js        # 组件文件
    │       └── index.less      # 组件样式
    ├── container.js            # 容器类
    ├── index.html              # 模板文件
    ├── model.js                # 模型层，基于mirrorx定义组件的vm逻辑
    ├── routes                  # 路由层，如果该模块为单页应用，可以在此配置
    │   └── index.js
    └── service.js              # 服务请求层，基于axios，只完成服务请求的API编写
```