import i from "../vendor/86483";
import s from "../vendor/533786";
var o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
function h(e) {
  return (e = s(e)) && e.replace(o, i).replace(a, "");
}
module.exports = h;