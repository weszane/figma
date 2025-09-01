var r;
(r || (r = {})).length = function (t) {
  return "number" == typeof t.$$delete ? t.$$delete : "number" == typeof t.retain ? t.retain : "object" == typeof t.retain && null !== t.retain ? 1 : "string" == typeof t.insert ? t.insert.length : 1;
};
exports.$$default = r;