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
    s: "ein paar Sekunden",
    m: ["eine Minute", "einer Minute"],
    mm: "%d Minuten",
    h: ["eine Stunde", "einer Stunde"],
    hh: "%d Stunden",
    d: ["ein Tag", "einem Tag"],
    dd: ["%d Tage", "%d Tagen"],
    M: ["ein Monat", "einem Monat"],
    MM: ["%d Monate", "%d Monaten"],
    y: ["ein Jahr", "einem Jahr"],
    yy: ["%d Jahre", "%d Jahren"]
  };
  function i(e, r, i) {
    var s = n[i];
    Array.isArray(s) && (s = s[r ? 0 : 1]);
    return s.replace("%d", e);
  }
  var s = {
    name: "de",
    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
    ordinal: function (e) {
      return e + ".";
    },
    weekStart: 1,
    yearStart: 4,
    formats: {
      LTS: "HH:mm:ss",
      LT: "HH:mm",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY HH:mm",
      LLLL: "dddd, D. MMMM YYYY HH:mm"
    },
    relativeTime: {
      future: "in %s",
      past: "vor %s",
      s: i,
      m: i,
      mm: i,
      h: i,
      hh: i,
      d: i,
      dd: i,
      M: i,
      MM: i,
      y: i,
      yy: i
    }
  };
  r.$$default.locale(s, null, !0);
  return s;
});