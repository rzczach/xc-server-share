'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koa2Cors = require('koa2-cors');

var _koa2Cors2 = _interopRequireDefault(_koa2Cors);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _models = require('./models');

var _config = require('./models/config');

var _config2 = _interopRequireDefault(_config);

var _routers = require('./routers');

var _routers2 = _interopRequireDefault(_routers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var port = 2999;
app.use((0, _koa2Cors2.default)({
    origin: '*',
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'token', 'X-Requested-With']
}));
// 解析 Request Body
app.use((0, _koaBodyparser2.default)({
    jsonLimit: '50mb',
    enableTypes: ['json', 'form', 'multipart']
}));
app.use(_routers2.default.routes());
app.use(_routers2.default.allowedMethods());
// 返回响应头 'Content-Type' 固定为 'application/json'
app.use(function (context, next) {
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
(0, _models.initDatabase)(_config2.default).then(startServer).catch(function (err) {
    console.log(err);
});
function startServer() {
    app.listen(port, function () {
        console.log('server listening on ' + port + '...');
    });
}