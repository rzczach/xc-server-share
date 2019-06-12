
import Koa from 'koa';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import { initDatabase } from './models';
import databaseConfig from './models/config';
import router from './routers';
const app = new Koa();
const port = 2999;
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
// 返回响应头 'Content-Type' 固定为 'application/json'
app.use((context, next) => {
    if (context.body) {
        if (context.body.errcode === undefined) {
            context.body = {
                errcode: 0,
                result: context.body
            };
        }
        // 返回数据为 json 格式
        context.set('Content-Type', 'application/json');
        context.body = JSON.stringify(context.body);
    }
    return next();
});
// 初始化数据库
initDatabase(databaseConfig)
    .then(startServer)
    .catch((err) => {
        console.log(err);
    });
function startServer() {
    app.listen(port, () => {
        console.log(`server listening on ${port}...`);
    });
}