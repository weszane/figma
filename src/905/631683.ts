var i;
var n;
var r;
(function (e, t) {
  for (var i in t) Object.defineProperty(e, i, {
    enumerable: !0,
    get: t[i]
  });
})(exports, {
  I18nTranslationIssueType: function () {
    return r;
  },
  Locale: function () {
    return i;
  },
  PseudoLocale: function () {
    return n;
  },
  PseudoLocales: function () {
    return a;
  },
  SupportedLocales: function () {
    return s;
  }
});
(function (e) {
  e.DEFAULT = "en";
  e.JA = "ja";
  e.ES_ES = "es-es";
  e.KO_KR = "ko-kr";
  e.PT_BR = "pt-br";
  e.ES_LA = "es-la";
})(i || (i = {}));
(function (e) {
  e.AAA = "aaa";
  e.AAL = "aal";
})(n || (n = {}));
let a = [n.AAA, n.AAL];
let s = [i.DEFAULT, i.JA, i.ES_ES, i.KO_KR, i.PT_BR, i.ES_LA, ...a];
!function (e) {
  e.BAD = "Bad translation";
  e.MISSING = "Missing string";
  e.DICT_NOT_LOADED = "Dict Not Loaded";
  e.MISSING_ARGS = "Missing Args";
}(r || (r = {}));