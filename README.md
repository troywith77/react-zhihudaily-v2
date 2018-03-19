# 知乎日报(mobile)

用 `React`，`Redux`，`material-ui` 和 `Koa` 重构了之前写的知乎日报，[check the demo](http://45.32.37.144)

## 开发环境

### 命令

```
// For dev, run this two commands simultaneously in two terminal tabs.

npm run proxy // koa proxy
npm start     // webpack-dev-server

// For production
// you can use nginx or Koa to server html file. I'm using nginx in my server.

npm run server // start pm2

server {
  listen 80;
  server_name _;
  root /var/www/zhihudaily/build;
  location / {
    try_files $uri /index.html;
  }
}

```

### 说明

日报的 `API` 在开发环境要解决跨域可以直接使用 `webpack-dev-server` 的 `proxy` 进行转发，不过这样只能代理 `API`，图片仍然会 403 Forbidden，所以使用 `Koa` 做了一层代理，转发了知乎图片和日报的 `API`。

## API DOC

[href](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)