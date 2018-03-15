# 知乎日报

用 `React`，`Redux`，`material-ui` 和 `Koa` 重构了之前写的知乎日报，[check the demo](http://45.32.37.144)

## 开发环境

### 命令

```
// For dev, run this two commands simultaneously in terminal.

npm run proxy // koa proxy
npm start     // webpack-dev-server
```

### 说明

使用 `Koa` 做了一层代理，转发了知乎图片（不转发直接请求会403）和日报的接口，日报的接口在开发环境要解决跨域可以直接使用 `webpack-dev-server` 进行转发，但是因为要部署生产环境，所以同时使用了 `Koa` 来做一个代理。

## API DOC

[href](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)