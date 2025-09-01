let n = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  allowBooleanAttributes: !1,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function (e, r) {
    return r;
  },
  attributeValueProcessor: function (e, r) {
    return r;
  },
  stopNodes: [],
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function (e, r, n) {
    return e;
  }
};
let i = function (e) {
  return Object.assign({}, n, e);
};
exports.buildOptions = i;
exports.defaultOptions = n;