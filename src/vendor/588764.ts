module.exports = function (e) {
  if (!e) return "";
  try {
    return e.displayName || e.name || (String(e).match(/function ([^\s(]+)/) || [])[1];
  } catch (e) {
    return "";
  }
};