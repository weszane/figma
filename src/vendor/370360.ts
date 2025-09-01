import _require from "../vendor/231998";
!function (r, i) {
  module.exports = i(_require);
}(0, function (e) {
  "use strict";

  var r = function (e) {
    return e && "object" == typeof e && "default" in e ? e : {
      default: e
    };
  }(e);
  var n = {
    name: "ko",
    weekdays: "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),
    weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
    weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
    months: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
    monthsShort: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
    ordinal: function (e) {
      return e;
    },
    formats: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "YYYY.MM.DD.",
      LL: "YYYY\uB144 MMMM D\uC77C",
      LLL: "YYYY\uB144 MMMM D\uC77C A h:mm",
      LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm",
      l: "YYYY.MM.DD.",
      ll: "YYYY\uB144 MMMM D\uC77C",
      lll: "YYYY\uB144 MMMM D\uC77C A h:mm",
      llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm"
    },
    meridiem: function (e) {
      return e < 12 ? "\uC624\uC804" : "\uC624\uD6C4";
    },
    relativeTime: {
      future: "%s \uD6C4",
      past: "%s \uC804",
      s: "\uBA87 \uCD08",
      m: "1\uBD84",
      mm: "%d\uBD84",
      h: "\uD55C \uC2DC\uAC04",
      hh: "%d\uC2DC\uAC04",
      d: "\uD558\uB8E8",
      dd: "%d\uC77C",
      M: "\uD55C \uB2EC",
      MM: "%d\uB2EC",
      y: "\uC77C \uB144",
      yy: "%d\uB144"
    }
  };
  r.$$default.locale(n, null, !0);
  return n;
});