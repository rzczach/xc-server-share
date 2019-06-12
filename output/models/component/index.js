'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateComponent = exports.createComponent = exports.getComponentByName = exports.getComponentById = exports.getComponent = undefined;

var _index = require('../index');

var _mongodb = require('mongodb');

var _utils = require('../utils');

var collectionName = 'components';

var getComponent = exports.getComponent = function getComponent() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // console.log(start, count, params)
    return (0, _utils.getPageContent)({
        collectionName: collectionName,
        page: page,
        count: count,
        params: params
    });
};

var getComponentById = exports.getComponentById = function getComponentById(id) {
    if (id.length < 24) {
        throw new Error('找不到该组件！');
    }
    return getComponent({
        _id: (0, _mongodb.ObjectId)(id)
    });
};

var getComponentByName = exports.getComponentByName = function getComponentByName(page, count, params) {
    var reg = new RegExp(params.name);
    var op = {
        name: reg
    };
    return (0, _utils.getPageContent)({
        collectionName: collectionName,
        page: page,
        count: count,
        op: op
    });
};

var createComponent = exports.createComponent = function createComponent(params) {
    return (0, _index.getCollection)(collectionName).insertOne(params);
};

var updateComponent = exports.updateComponent = function updateComponent(id, params) {
    return (0, _index.getCollection)(collectionName).findOneAndUpdate({
        _id: (0, _mongodb.ObjectId)(id)
    }, {
        $set: params
    });
};