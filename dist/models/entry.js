"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.entry = mod.exports;
  }
})(this, function (exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var store = [];
  var idCounter = store.length;

  var all = function all() {
    return store;
  };

  var create = function create(attrs) {
    attrs.id = idCounter += 1;
    attrs.enteredAt = Date.now();
    store.push(attrs);
  };

  exports.all = all;
  exports.create = create;
});
