'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCollection = exports.getDB = exports.initDatabase = undefined;

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var database = void 0;

var initDatabase = exports.initDatabase = async function initDatabase(config) {
    if (database) {
        return;
    }

    database = new _database2.default(config);
    await database.initDatabase();
};

var getDB = exports.getDB = function getDB() {
    return database.getDB();
};

var getCollection = exports.getCollection = function getCollection(collectionName) {
    return getDB().collection(collectionName);
};