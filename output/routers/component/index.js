'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _index = require('../../controllers/component/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentRouter = new _koaRouter2.default({
    prefix: '/component'
});

componentRouter.get('/item', _index.getComponentController);

exports.default = componentRouter;