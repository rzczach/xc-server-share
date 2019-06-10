
import Koa from 'koa';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import router from './routers';
const app = new Koa();

const port = 3000;
app.use(cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'token', 'X-Requested-With']
}));
// 解析 Request Body
app.use(bodyParser({
    jsonLimit: '50mb',
    enableTypes: ['json', 'form', 'multipart']
}));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);