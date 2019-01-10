# UCF标准前端工程

### 1. 使用

1. 克隆项目脚手架 `git clone https://github.com/uba-templates/ucf-web-multi.git`

### 2. 环境

1. [node.js](https://nodejs.org/en/download/) v10.15.x
2. [npm](https://www.npmjs.com/) v6.x.x
3. [git](https://git-scm.com/) v2.17.x

### 3. 运行

1. 启动服务 `npm run dev`
2. 构建服务 `npm run build`

### 4. 开发目录规范

1. ucf-web 目录规范

```bash
.
├── docs
├── ucf-app-order
├── ucf-boot-starter
├── ucf-common
│   └── src
│       ├── components
│       │   └── Example
│       ├── static
│       └── utils
└── ucf-workbench
    └── src
```

2. ucf-app-order 目录规范

```bash
ucf-app-order
├── dist
├── src
│   ├── components
│   │   └── Order
│   ├── pages
│   │   └── ucf-app-order-pay
│   │       └── components
│   │           └── Pay
│   ├── static
│   │   ├── fonts
│   │   ├── images
│   │   └── others
│   ├── styles
│   └── utils
└── test
```