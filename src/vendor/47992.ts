function n() {
  Promise.prototype.finally = Promise.prototype.finally || {
    finally: function (e) {
      var r = function (r) {
        return Promise.resolve(e()).then(r);
      };
      return this.then(function (e) {
        return r(function () {
          return e;
        });
      }, function (e) {
        return r(function () {
          return Promise.reject(e);
        });
      });
    }
  }.finally;
}
exports.$$default = n;
