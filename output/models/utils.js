'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPageContent = undefined;

var _index = require('./index');

var _transform = require('./transform');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 返回分页数据
 * @param {object} option
 * list 当前页面数据
 * page 当前页码
 * count 当前页数据数量
 * total 总数据数量
 * totalCount 总页数
 */
var getPageContent = exports.getPageContent = async function getPageContent(option) {
    var _getCollection, _getCollection2;

    var collectionName = option.collectionName,
        page = option.page,
        count = option.count,
        params = option.params;

    console.log(collectionName, page, count, params);
    var totalList = await (_getCollection = (0, _index.getCollection)(collectionName)).find.apply(_getCollection, _toConsumableArray(params)).toArray();
    var total = totalList.length;
    var totalPage = Math.ceil(total / count);
    var start = (page - 1) * count;
    var list = await (_getCollection2 = (0, _index.getCollection)(collectionName)).find.apply(_getCollection2, _toConsumableArray(params)).sort({
        date: -1
    }).skip(Number(start)).limit(Number(count)).toArray().then(_transform.transformIds);
    return {
        total: total,
        totalPage: totalPage,
        page: Number(page),
        count: Number(count),
        list: list
    };
};