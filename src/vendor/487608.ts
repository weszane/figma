let r = /^[-+]?0x[a-fA-F0-9]+$/;
let n = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
let i = {
  hex: !0,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
};
function s(e, a = {}) {
  if (a = Object.assign({}, i, a), !e || "string" != typeof e) return e;
  let h = e.trim();
  if (void 0 !== a.skipLike && a.skipLike.test(h)) return e;
  if (a.hex && r.test(h)) return Number.parseInt(h, 16);
  {
    let r = n.exec(h);
    if (!r) return e;
    {
      let n = r[1];
      let i = r[2];
      let s = o(r[3]);
      let d = r[4] || r[6];
      if (!a.leadingZeros && i.length > 0 && n && "." !== h[2]) return e;
      {
        if (!a.leadingZeros && i.length > 0 && !n && "." !== h[1]) return e;
        let r = Number(h);
        let o = "" + r;
        return -1 !== o.search(/[eE]/) || d ? a.eNotation ? r : e : -1 !== h.indexOf(".") ? "0" === o && "" === s ? r : o === s ? r : n && o === "-" + s ? r : e : i ? s === o ? r : n + s === o ? r : e : h === o ? r : h === n + o ? r : e;
      }
    }
  }
}
function o(e) {
  e && -1 !== e.indexOf(".") && ("." === (e = e.replace(/0+$/, "")) ? e = "0" : "." === e[0] ? e = "0" + e : "." === e[e.length - 1] && (e = e.substr(0, e.length - 1)));
  return e;
}
module.exports = s;