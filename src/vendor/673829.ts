!function (e) {
  var t = e.util.clone(e.languages.typescript);
  e.languages.tsx = e.languages.extend("jsx", t);
  delete e.languages.tsx.parameter;
  delete e.languages.tsx["literal-property"];
  var n = e.languages.tsx.tag;
  n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags);
  n.lookbehind = !0;
}(Prism);