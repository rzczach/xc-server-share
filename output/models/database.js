'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongodb = require('mongodb');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Database = function () {
    function Database(_ref) {
        var host = _ref.host,
            port = _ref.port,
            dbName = _ref.dbName;

        _classCallCheck(this, Database);

        this.host = host;
        this.port = port;
        this.dbName = dbName;
        this.db = undefined;
    }

    _createClass(Database, [{
        key: 'initDatabase',
        value: async function initDatabase() {
            if (this.db) {
                return Promise.resolve(this.db);
            }
            var url = this.host + ':' + this.port;
            try {
                var client = await _mongodb.MongoClient.connect(url, { useNewUrlParser: true });
                this.db = client.db(this.dbName);
                return this.db;
            } catch (err) {
                throw err;
            }
        }
    }, {
        key: 'getDB',
        value: function getDB() {
            return this.db;
        }
    }]);

    return Database;
}();

exports.default = Database;