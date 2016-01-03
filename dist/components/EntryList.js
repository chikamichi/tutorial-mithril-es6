'use strict';

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../models/Entry'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../models/Entry'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Entry);
    global.EntryList = mod.exports;
  }
})(this, function (exports, _Entry) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  var buildEntryView = function buildEntryView(entry) {
    var date = new Date(entry.enteredAt);
    return m('.entry', [m('label', 'Entered at: ' + date.toString()), m('ul', entry.volunteers.map(buildVolunteerView))]);
  };

  var buildVolunteerView = function buildVolunteerView(volunteer) {
    return m('li.volunteer', [m('label', volunteer.name), m('label', '(' + volunteer.email + ')')]);
  };

  var EntryList = (function () {
    function EntryList() {
      _classCallCheck(this, EntryList);
    }

    _createClass(EntryList, [{
      key: 'view',
      value: function view() {
        return m('.entry-list', [m('h1', 'All entries'), (0, _Entry.all)().map(buildEntryView)]);
      }
    }]);

    return EntryList;
  })();

  exports.default = EntryList;
});
