function r(e) {
  return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
}
function n(e) {
  return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0));
} /*!
  * Determine if an object is a Buffer
  *
  * @author   Feross Aboukhadijeh <https://feross.org>
  * @license  MIT
  */
module.exports = function (e) {
  return null != e && (r(e) || n(e) || !!e._isBuffer);
};