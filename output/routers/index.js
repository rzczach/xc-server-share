'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _index = require('./component/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VERSION = 'v1';

var router = new _koaRouter2.default({
    prefix: '/api/xc-server-share/' + VERSION
});

router.use(_index2.default.routes());

exports.default = router;