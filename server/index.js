const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('koa-router')();
const axios = require('axios');
const superagent = require('superagent');

const app = new Koa();
const PORT = require('../package.json').proxySrverPort;

app.use(cors());

router.get('/', (ctx) => {
  ctx.body = 'This is the proxy sercer, please confirm your url.'
})

router.get('/api/*', async (ctx) => {
  const url = `http://news-at.zhihu.com${ctx.url}`
  const res = await axios.get(url)
  ctx.body = res.data
});

router.get('/image', async (ctx) => {
  ctx.body = ctx.req.pipe(superagent.get(ctx.query.url))
});

app.use(router.routes())

app.listen(PORT, () => console.log(`proxy server is running at port ${PORT}.`))