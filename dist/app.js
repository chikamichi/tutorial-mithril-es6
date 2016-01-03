'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./models/Entry', './components/EntryList', 'util'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./models/Entry'), require('./components/EntryList'), require('util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Entry, global.EntryList, global.util);
    global.app = mod.exports;
  }
})(this, function (_Entry, _EntryList, util) {
  var Entry = _interopRequireWildcard(_Entry);

  var _EntryList2 = _interopRequireDefault(_EntryList);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  var debug = function debug() {
    console.log(util.inspect.apply(this, arguments, {
      colors: true,
      depth: null
    }));
  };

  Entry.create({
    "enteredAt": 1443018758199,
    "volunteers": [{
      name: "Alice",
      email: "alice@example.com"
    }, {
      name: "Bob",
      email: "bob@example.com"
    }]
  });
  Entry.create({
    "enteredAt": 1443019047227,
    "volunteers": [{
      name: "Carl",
      email: "carl@example.com"
    }, {
      name: "Dan",
      email: "dan@example.com"
    }, {
      name: "Erl",
      email: "erl@example.com"
    }]
  });
  debug(Entry.all());
  var list = new _EntryList2.default();
  debug(list.view());
});
