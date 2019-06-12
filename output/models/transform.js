"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformId = transformId;
exports.transformIds = transformIds;
function transformId(object) {
    if (!object) {
        return Promise.resolve(null);
    }
    var _id = object._id;

    return Promise.resolve({
        id: _id
    });
}

function transformIds(array) {
    return Promise.resolve(array.map(function (object) {
        console.log(object);
        var _id = object._id,
            name = object.name;

        return {
            id: _id
        };
    }));
}