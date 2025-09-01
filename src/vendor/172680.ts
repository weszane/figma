import { OrderedMap } from "../vendor/116740";
var n = OrderedMap;
module.exports = {
  createFromArray: function (t) {
    return n(t.map(function (t) {
      return [t.getKey(), t];
    }));
  }
};