const path = require('path');
const Koa = require('koa');
const koaStatic = require('koa-static');
const mount = require('koa-mount');
const _ = require('koa-route');

const app = new Koa();
const port = process.env.PORT || 1234;
const htmlBase = require('./html-base')({title: 'Movies search test'});

const requestHelper = require('./request-helper');

app.use(mount('/assets', koaStatic(path.join(__dirname, '..', 'dist'))));

app.use(_.get('/', async (ctx) => {
  ctx.body = htmlBase;
}));

app.use(_.get('/api/all', async (ctx) => {
  ctx.set('Cache-Control', 'max-age=604800');
  ctx.body = await requestHelper();
}))

app.use(_.get('*', async (ctx) => {
  ctx.redirect('/');
}));

app.listen(port, () => console.log(`App running at http://localhost:${port}`));
