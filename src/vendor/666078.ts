import r from "../vendor/588764";
module.exports = function (e) {
  return e.constructor && e.constructor.name || "function" == typeof e.constructor && r(e.constructor) || null;
};