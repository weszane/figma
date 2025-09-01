import n from "../vendor/35020";
module.exports = function (t) {
  return !!t && !!t.ownerDocument && n(t) && "BR" === t.nodeName;
};