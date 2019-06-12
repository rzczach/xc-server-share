'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getComponentController = getComponentController;

var _index = require('../../models/component/index');

async function getComponentController(context, next) {
    var _context$request$quer = context.request.query,
        page = _context$request$quer.page,
        count = _context$request$quer.count;

    var list = await (0, _index.getComponent)(page, count);
    context.body = { list: list };
    next();
}