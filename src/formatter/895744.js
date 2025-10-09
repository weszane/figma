var r = Object.create;
var i = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var o = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf;
var _ = Object.prototype.hasOwnProperty;
var l = (e, t) => {
  for (var n in t) i(e, n, {
    get: t[n],
    enumerable: !0
  });
};
var u = (e, t, n, r) => {
  if (t && "object" == typeof t || "function" == typeof t) for (let s of o(t)) _.call(e, s) || s === n || i(e, s, {
    get: () => t[s],
    enumerable: !(r = a(t, s)) || r.enumerable
  });
  return e;
};
var c = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
};
var p = (e, t, n) => (c(e, t, "read from private field"), n ? n.call(e) : t.get(e));
var d = (e, t, n) => {
  if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
};
var m = (e, t, n, r) => (c(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var f = ((e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports))(e => {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.extract = function (e) {
    let t = e.match(r);
    return t ? t[0].trimLeft() : "";
  };
  e.parse = function (e) {
    return u(e).pragmas;
  };
  e.parseWithComments = u;
  e.print = function ({
    comments: e = "",
    pragmas: t = {}
  }) {
    let n = `
`;
    let r = Object.keys(t);
    let i = r.flatMap(e => c(e, t[e])).map(e => ` * ${e}${n}`).join("");
    if (!e) {
      if (0 === r.length) return "";
      if (1 === r.length && !Array.isArray(t[r[0]])) {
        let e = t[r[0]];
        return `/** ${c(r[0], e)[0]} */`;
      }
    }
    let a = e.split(n).map(e => ` * ${e}`).join(n) + n;
    return "/**" + n + (e ? a : "") + (e && r.length ? " *" + n : "") + i + " */";
  };
  e.strip = function (e) {
    let t = e.match(r);
    return t && t[0] ? e.substring(t[0].length) : e;
  };
  var t = /\*\/$/;
  var n = /^\/\*\*?/;
  var r = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/;
  var i = /(^|\s+)\/\/([^\r\n]*)/g;
  var a = /^(\r?\n)+/;
  var o = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g;
  var s = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;
  var _ = /(\r?\n|^) *\* ?/g;
  var l = [];
  function u(e) {
    let r = `
`;
    e = e.replace(n, "").replace(t, "").replace(_, "$1");
    let u = "";
    for (; u !== e;) {
      u = e;
      e = e.replace(o, `${r}$1 $2${r}`);
    }
    e = e.replace(a, "").trimRight();
    let c = Object.create(null);
    let p = e.replace(s, "").replace(a, "").trimRight();
    let d;
    for (; d = s.exec(e);) {
      let e = d[2].replace(i, "");
      "string" == typeof c[d[1]] || Array.isArray(c[d[1]]) ? c[d[1]] = l.concat(c[d[1]], e) : c[d[1]] = e;
    }
    return {
      comments: p,
      pragmas: c
    };
  }
  function c(e, t) {
    return l.concat(t).map(t => `@${e} ${t}`.trim());
  }
});
var h = {};
l(h, {
  languages: () => $$az1,
  options: () => $$aq2,
  printers: () => $$aU3
});
var y = {};
l(y, {
  canAttachComment: () => nU,
  embed: () => rp,
  experimentalFeatures: () => aN,
  getCommentChildNodes: () => nz,
  getVisitorKeys: () => W,
  handleComments: () => t2,
  insertPragma: () => rf,
  isBlockComment: () => $,
  isGap: () => nW,
  massageAstNode: () => tn,
  print: () => aP,
  printComment: () => t1,
  willPrintOwnComments: () => nK
});
var g = (e, t, n, r) => {
  if (!(e && null == t)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
};
var b = (e, t, n) => {
  if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[n < 0 ? t.length + n : n] : t.at(n);
};
var D = /^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/;
var x = e => D.test(e);
var v = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var T = e => !(function (e) {
  return 12288 === e || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}(e) || function (e) {
  return e >= 4352 && e <= 4447 || 8986 === e || 8987 === e || 9001 === e || 9002 === e || e >= 9193 && e <= 9196 || 9200 === e || 9203 === e || 9725 === e || 9726 === e || 9748 === e || 9749 === e || e >= 9800 && e <= 9811 || 9855 === e || 9875 === e || 9889 === e || 9898 === e || 9899 === e || 9917 === e || 9918 === e || 9924 === e || 9925 === e || 9934 === e || 9940 === e || 9962 === e || 9970 === e || 9971 === e || 9973 === e || 9978 === e || 9981 === e || 9989 === e || 9994 === e || 9995 === e || 10024 === e || 10060 === e || 10062 === e || e >= 10067 && e <= 10069 || 10071 === e || e >= 10133 && e <= 10135 || 10160 === e || 10175 === e || 11035 === e || 11036 === e || 11088 === e || 11093 === e || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || 94192 === e || 94193 === e || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || 110589 === e || 110590 === e || e >= 110592 && e <= 110882 || 110898 === e || e >= 110928 && e <= 110930 || 110933 === e || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || 126980 === e || 127183 === e || 127374 === e || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || 127568 === e || 127569 === e || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || 127988 === e || e >= 127992 && e <= 128062 || 128064 === e || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || 128378 === e || 128405 === e || 128406 === e || 128420 === e || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || 128716 === e || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || 128747 === e || 128748 === e || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || 129008 === e || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}(e));
var S = /[^\x20-\x7F]/;
var C = function (e) {
  if (!e) return 0;
  if (!S.test(e)) return e.length;
  e = e.replace(v(), "  ");
  let t = 0;
  for (let n of e) {
    let e = n.codePointAt(0);
    e <= 31 || e >= 127 && e <= 159 || e >= 768 && e <= 879 || (t += T(e) ? 1 : 2);
  }
  return t;
};
function E(e) {
  return (t, n, r) => {
    let i = !!(null != r && r.backwards);
    if (!1 === n) return !1;
    let {
      length
    } = t;
    let o = n;
    for (; o >= 0 && o < length;) {
      let n = t.charAt(o);
      if (e instanceof RegExp) {
        if (!e.test(n)) return o;
      } else if (!e.includes(n)) return o;
      i ? o-- : o++;
    }
    return (-1 === o || o === length) && o;
  };
}
E(/\s/);
var w = E(" 	");
var A = E(",; 	");
var k = E(/[^\n\r]/);
var F = function (e, t, n) {
  let r = !!(null != n && n.backwards);
  if (!1 === t) return !1;
  let i = e.charAt(t);
  if (r) {
    if ("\r" === e.charAt(t - 1) && i === `
`) return t - 2;
    if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i) return t - 1;
  } else {
    if ("\r" === i && e.charAt(t + 1) === `
`) return t + 2;
    if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i) return t + 1;
  }
  return t;
};
var P = function (e, t, n = {}) {
  let r = w(e, n.backwards ? t - 1 : t, n);
  let i = F(e, r, n);
  return r !== i;
};
var N = function (e, t) {
  if (!1 === t) return !1;
  if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
    for (let n = t + 2; n < e.length; ++n) if ("*" === e.charAt(n) && "/" === e.charAt(n + 1)) return n + 2;
  }
  return t;
};
var I = function (e, t) {
  return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? k(e, t) : t);
};
var O = function (e, t) {
  let n = null;
  let r = t;
  for (; r !== n;) {
    n = r;
    r = A(e, r);
    r = N(e, r);
    r = w(e, r);
  }
  r = I(e, r);
  return !1 !== (r = F(e, r)) && P(e, r);
};
var B = function (e) {
  return Array.isArray(e) && e.length > 0;
};
var j = function (e, t) {
  let n = !0 === t || "'" === t ? "'" : '"';
  let r = "'" === n ? '"' : "'";
  let i = 0;
  let a = 0;
  for (let t of e) t === n ? i++ : t === r && a++;
  return i > a ? r : n;
};
var M = function (e, t, n) {
  let r = '"' === t ? "'" : '"';
  let i = g(!1, e, /\\(.)|(["'])/gs, (e, i, a) => i === r ? i : a === t ? "\\" + a : a || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i) ? i : "\\" + i));
  return t + i + t;
};
var L = function (e, t) {
  let n = e.slice(1, -1);
  let r = "json" !== t.parser && "jsonc" !== t.parser && ("json5" !== t.parser || "preserve" !== t.quoteProps || t.singleQuote) ? t.__isInHtmlAttribute ? "'" : j(n, t.singleQuote) : '"';
  return M(n, r, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.__embeddedInHtml));
};
function R(e) {
  var t;
  var n;
  var r;
  let i = (null == (t = e.range) ? void 0 : t[0]) ?? e.start;
  let a = null == (r = (null == (n = e.declaration) ? void 0 : n.decorators) ?? e.decorators) ? void 0 : r[0];
  return a ? Math.min(R(a), i) : i;
}
function J(e) {
  var t;
  return (null == (t = e.range) ? void 0 : t[1]) ?? e.end;
}
function q(e, t) {
  let n = R(e);
  return Number.isInteger(n) && n === R(t);
}
var U = null;
function z(e) {
  if (null !== U && (U.property, 1)) {
    let e = U;
    U = z.prototype = null;
    return e;
  }
  U = z.prototype = e ?? Object.create(null);
  return new z();
}
for (let e = 0; e <= 10; e++) z();
var K = function (e, t = "type") {
  z(e);
  return function (n) {
    let r = n[t];
    let i = e[r];
    if (!Array.isArray(i)) throw Object.assign(Error(`Missing visitor keys for '${r}'.`), {
      node: n
    });
    return i;
  };
};
var W = K({
  ArrayExpression: ["elements"],
  AssignmentExpression: ["left", "right"],
  BinaryExpression: ["left", "right"],
  InterpreterDirective: [],
  Directive: ["value"],
  DirectiveLiteral: [],
  BlockStatement: ["directives", "body"],
  BreakStatement: ["label"],
  CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
  CatchClause: ["param", "body"],
  ConditionalExpression: ["test", "consequent", "alternate"],
  ContinueStatement: ["label"],
  DebuggerStatement: [],
  DoWhileStatement: ["test", "body"],
  EmptyStatement: [],
  ExpressionStatement: ["expression"],
  File: ["program"],
  ForInStatement: ["left", "right", "body"],
  ForStatement: ["init", "test", "update", "body"],
  FunctionDeclaration: ["id", "params", "body", "returnType", "typeParameters", "predicate"],
  FunctionExpression: ["id", "params", "body", "returnType", "typeParameters"],
  Identifier: ["typeAnnotation", "decorators"],
  IfStatement: ["test", "consequent", "alternate"],
  LabeledStatement: ["label", "body"],
  StringLiteral: [],
  NumericLiteral: [],
  NullLiteral: [],
  BooleanLiteral: [],
  RegExpLiteral: [],
  LogicalExpression: ["left", "right"],
  MemberExpression: ["object", "property"],
  NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
  Program: ["directives", "body"],
  ObjectExpression: ["properties"],
  ObjectMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  ObjectProperty: ["key", "value", "decorators"],
  RestElement: ["argument", "typeAnnotation", "decorators"],
  ReturnStatement: ["argument"],
  SequenceExpression: ["expressions"],
  ParenthesizedExpression: ["expression"],
  SwitchCase: ["test", "consequent"],
  SwitchStatement: ["discriminant", "cases"],
  ThisExpression: [],
  ThrowStatement: ["argument"],
  TryStatement: ["block", "handler", "finalizer"],
  UnaryExpression: ["argument"],
  UpdateExpression: ["argument"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id", "init"],
  WhileStatement: ["test", "body"],
  WithStatement: ["object", "body"],
  AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"],
  ArrayPattern: ["elements", "typeAnnotation", "decorators"],
  ArrowFunctionExpression: ["params", "body", "returnType", "typeParameters", "predicate"],
  ClassBody: ["body"],
  ClassExpression: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators", "superTypeArguments"],
  ClassDeclaration: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators", "superTypeArguments"],
  ExportAllDeclaration: ["source", "attributes", "exported"],
  ExportDefaultDeclaration: ["declaration"],
  ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"],
  ExportSpecifier: ["local", "exported"],
  ForOfStatement: ["left", "right", "body"],
  ImportDeclaration: ["specifiers", "source", "attributes"],
  ImportDefaultSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportSpecifier: ["local", "imported"],
  ImportExpression: ["source", "options", "attributes"],
  MetaProperty: ["meta", "property"],
  ClassMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  ObjectPattern: ["properties", "typeAnnotation", "decorators"],
  SpreadElement: ["argument"],
  Super: [],
  TaggedTemplateExpression: ["tag", "quasi", "typeParameters", "typeArguments"],
  TemplateElement: [],
  TemplateLiteral: ["quasis", "expressions"],
  YieldExpression: ["argument"],
  AwaitExpression: ["argument"],
  Import: [],
  BigIntLiteral: [],
  ExportNamespaceSpecifier: ["exported"],
  OptionalMemberExpression: ["object", "property"],
  OptionalCallExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
  ClassProperty: ["key", "value", "typeAnnotation", "decorators", "variance"],
  ClassAccessorProperty: ["key", "value", "typeAnnotation", "decorators"],
  ClassPrivateProperty: ["key", "value", "decorators", "typeAnnotation", "variance"],
  ClassPrivateMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  PrivateName: ["id"],
  StaticBlock: ["body"],
  AnyTypeAnnotation: [],
  ArrayTypeAnnotation: ["elementType"],
  BooleanTypeAnnotation: [],
  BooleanLiteralTypeAnnotation: [],
  NullLiteralTypeAnnotation: [],
  ClassImplements: ["id", "typeParameters"],
  DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
  DeclareFunction: ["id", "predicate"],
  DeclareInterface: ["id", "typeParameters", "extends", "body"],
  DeclareModule: ["id", "body"],
  DeclareModuleExports: ["typeAnnotation"],
  DeclareTypeAlias: ["id", "typeParameters", "right"],
  DeclareOpaqueType: ["id", "typeParameters", "supertype"],
  DeclareVariable: ["id"],
  DeclareExportDeclaration: ["declaration", "specifiers", "source"],
  DeclareExportAllDeclaration: ["source"],
  DeclaredPredicate: ["value"],
  ExistsTypeAnnotation: [],
  FunctionTypeAnnotation: ["typeParameters", "params", "rest", "returnType", "this"],
  FunctionTypeParam: ["name", "typeAnnotation"],
  GenericTypeAnnotation: ["id", "typeParameters"],
  InferredPredicate: [],
  InterfaceExtends: ["id", "typeParameters"],
  InterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
  InterfaceTypeAnnotation: ["extends", "body"],
  IntersectionTypeAnnotation: ["types"],
  MixedTypeAnnotation: [],
  EmptyTypeAnnotation: [],
  NullableTypeAnnotation: ["typeAnnotation"],
  NumberLiteralTypeAnnotation: [],
  NumberTypeAnnotation: [],
  ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"],
  ObjectTypeInternalSlot: ["id", "value", "optional", "static", "method"],
  ObjectTypeCallProperty: ["value"],
  ObjectTypeIndexer: ["id", "key", "value", "variance"],
  ObjectTypeProperty: ["key", "value", "variance"],
  ObjectTypeSpreadProperty: ["argument"],
  OpaqueType: ["id", "typeParameters", "supertype", "impltype"],
  QualifiedTypeIdentifier: ["id", "qualification"],
  StringLiteralTypeAnnotation: [],
  StringTypeAnnotation: [],
  SymbolTypeAnnotation: [],
  ThisTypeAnnotation: [],
  TupleTypeAnnotation: ["types", "elementTypes"],
  TypeofTypeAnnotation: ["argument", "typeArguments"],
  TypeAlias: ["id", "typeParameters", "right"],
  TypeAnnotation: ["typeAnnotation"],
  TypeCastExpression: ["expression", "typeAnnotation"],
  TypeParameter: ["bound", "default", "variance"],
  TypeParameterDeclaration: ["params"],
  TypeParameterInstantiation: ["params"],
  UnionTypeAnnotation: ["types"],
  Variance: [],
  VoidTypeAnnotation: [],
  EnumDeclaration: ["id", "body"],
  EnumBooleanBody: ["members"],
  EnumNumberBody: ["members"],
  EnumStringBody: ["members"],
  EnumSymbolBody: ["members"],
  EnumBooleanMember: ["id", "init"],
  EnumNumberMember: ["id", "init"],
  EnumStringMember: ["id", "init"],
  EnumDefaultedMember: ["id"],
  IndexedAccessType: ["objectType", "indexType"],
  OptionalIndexedAccessType: ["objectType", "indexType"],
  JSXAttribute: ["name", "value"],
  JSXClosingElement: ["name"],
  JSXElement: ["openingElement", "children", "closingElement"],
  JSXEmptyExpression: [],
  JSXExpressionContainer: ["expression"],
  JSXSpreadChild: ["expression"],
  JSXIdentifier: [],
  JSXMemberExpression: ["object", "property"],
  JSXNamespacedName: ["namespace", "name"],
  JSXOpeningElement: ["name", "attributes", "typeArguments", "typeParameters"],
  JSXSpreadAttribute: ["argument"],
  JSXText: [],
  JSXFragment: ["openingFragment", "children", "closingFragment"],
  JSXOpeningFragment: [],
  JSXClosingFragment: [],
  Noop: [],
  Placeholder: [],
  V8IntrinsicIdentifier: [],
  ArgumentPlaceholder: [],
  BindExpression: ["object", "callee"],
  ImportAttribute: ["key", "value"],
  Decorator: ["expression"],
  DoExpression: ["body"],
  ExportDefaultSpecifier: ["exported"],
  RecordExpression: ["properties"],
  TupleExpression: ["elements"],
  DecimalLiteral: [],
  ModuleExpression: ["body"],
  TopicReference: [],
  PipelineTopicExpression: ["expression"],
  PipelineBareFunction: ["callee"],
  PipelinePrimaryTopicReference: [],
  TSParameterProperty: ["parameter", "decorators"],
  TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"],
  TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"],
  TSQualifiedName: ["left", "right"],
  TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSPropertySignature: ["key", "typeAnnotation"],
  TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSIndexSignature: ["parameters", "typeAnnotation"],
  TSAnyKeyword: [],
  TSBooleanKeyword: [],
  TSBigIntKeyword: [],
  TSIntrinsicKeyword: [],
  TSNeverKeyword: [],
  TSNullKeyword: [],
  TSNumberKeyword: [],
  TSObjectKeyword: [],
  TSStringKeyword: [],
  TSSymbolKeyword: [],
  TSUndefinedKeyword: [],
  TSUnknownKeyword: [],
  TSVoidKeyword: [],
  TSThisType: [],
  TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
  TSTypeReference: ["typeName", "typeParameters", "typeArguments"],
  TSTypePredicate: ["parameterName", "typeAnnotation"],
  TSTypeQuery: ["exprName", "typeParameters", "typeArguments"],
  TSTypeLiteral: ["members"],
  TSArrayType: ["elementType"],
  TSTupleType: ["elementTypes"],
  TSOptionalType: ["typeAnnotation"],
  TSRestType: ["typeAnnotation"],
  TSNamedTupleMember: ["label", "elementType"],
  TSUnionType: ["types"],
  TSIntersectionType: ["types"],
  TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
  TSInferType: ["typeParameter"],
  TSParenthesizedType: ["typeAnnotation"],
  TSTypeOperator: ["typeAnnotation"],
  TSIndexedAccessType: ["objectType", "indexType"],
  TSMappedType: ["typeParameter", "typeAnnotation", "nameType"],
  TSLiteralType: ["literal"],
  TSExpressionWithTypeArguments: ["expression", "typeParameters"],
  TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
  TSInterfaceBody: ["body"],
  TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
  TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"],
  TSAsExpression: ["expression", "typeAnnotation"],
  TSSatisfiesExpression: ["expression", "typeAnnotation"],
  TSTypeAssertion: ["typeAnnotation", "expression"],
  TSEnumDeclaration: ["id", "members"],
  TSEnumMember: ["id", "initializer"],
  TSModuleDeclaration: ["id", "body"],
  TSModuleBlock: ["body"],
  TSImportType: ["argument", "qualifier", "typeParameters", "typeArguments"],
  TSImportEqualsDeclaration: ["id", "moduleReference"],
  TSExternalModuleReference: ["expression"],
  TSNonNullExpression: ["expression"],
  TSExportAssignment: ["expression"],
  TSNamespaceExportDeclaration: ["id"],
  TSTypeAnnotation: ["typeAnnotation"],
  TSTypeParameterInstantiation: ["params"],
  TSTypeParameterDeclaration: ["params"],
  TSTypeParameter: ["constraint", "default", "name"],
  ChainExpression: ["expression"],
  ExperimentalRestProperty: ["argument"],
  ExperimentalSpreadProperty: ["argument"],
  Literal: [],
  MethodDefinition: ["decorators", "key", "value"],
  PrivateIdentifier: [],
  Property: ["key", "value"],
  PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"],
  AccessorProperty: ["decorators", "key", "typeAnnotation", "value"],
  TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"],
  TSAbstractKeyword: [],
  TSAbstractMethodDefinition: ["key", "value"],
  TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
  TSAsyncKeyword: [],
  TSClassImplements: ["expression", "typeArguments", "typeParameters"],
  TSDeclareKeyword: [],
  TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"],
  TSExportKeyword: [],
  TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"],
  TSPrivateKeyword: [],
  TSProtectedKeyword: [],
  TSPublicKeyword: [],
  TSReadonlyKeyword: [],
  TSStaticKeyword: [],
  TSTemplateLiteralType: ["quasis", "types"],
  AsExpression: ["expression", "typeAnnotation"],
  BigIntLiteralTypeAnnotation: [],
  BigIntTypeAnnotation: [],
  ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"],
  DeclareEnum: ["id", "body"],
  InferTypeAnnotation: ["typeParameter"],
  KeyofTypeAnnotation: ["argument"],
  ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"],
  QualifiedTypeofIdentifier: ["qualification", "id"],
  TupleTypeLabeledElement: ["label", "elementType", "variance"],
  TupleTypeSpreadElement: ["label", "typeAnnotation"],
  TypeOperator: ["typeAnnotation"],
  TypePredicate: ["parameterName", "typeAnnotation", "asserts"],
  NGRoot: ["node"],
  NGPipeExpression: ["left", "right", "arguments"],
  NGChainedExpression: ["expressions"],
  NGEmptyExpression: [],
  NGMicrosyntax: ["body"],
  NGMicrosyntaxKey: [],
  NGMicrosyntaxExpression: ["expression", "alias"],
  NGMicrosyntaxKeyedExpression: ["key", "expression"],
  NGMicrosyntaxLet: ["key", "value"],
  NGMicrosyntaxAs: ["key", "alias"],
  JsExpressionRoot: ["node"],
  JsonRoot: ["node"],
  TSJSDocAllType: [],
  TSJSDocUnknownType: [],
  TSJSDocNullableType: ["typeAnnotation"],
  TSJSDocNonNullableType: ["typeAnnotation"],
  NeverTypeAnnotation: [],
  UndefinedTypeAnnotation: [],
  UnknownTypeAnnotation: [],
  AsConstExpression: ["expression"],
  SatisfiesExpression: ["expression", "typeAnnotation"]
});
var V = function (e) {
  let t = new Set(e);
  return e => t.has(e?.type);
};
var $ = V(["Block", "CommentBlock", "MultiLine"]);
var H = V(["AnyTypeAnnotation", "ThisTypeAnnotation", "NumberTypeAnnotation", "VoidTypeAnnotation", "BooleanTypeAnnotation", "BigIntTypeAnnotation", "SymbolTypeAnnotation", "StringTypeAnnotation", "NeverTypeAnnotation", "UndefinedTypeAnnotation", "UnknownTypeAnnotation", "EmptyTypeAnnotation", "MixedTypeAnnotation"]);
var G = function ({
  type: e
}) {
  return e.startsWith("TS") && e.endsWith("Keyword");
};
function X(e, t) {
  return t(e) || function (e, {
    getVisitorKeys: t,
    predicate: n
  }) {
    for (let r of function* (e, t) {
      let n = [e];
      for (let e = 0; e < n.length; e++) for (let r of function* (e, t) {
        let {
          getVisitorKeys,
          filter = () => !0
        } = t;
        let i = e => null !== e && "object" == typeof e && filter(e);
        for (let t of getVisitorKeys(e)) {
          let n = e[t];
          if (Array.isArray(n)) for (let e of n) i(e) && (yield e);else i(n) && (yield n);
        }
      }(n[e], t)) {
        yield r;
        n.push(r);
      }
    }(e, {
      getVisitorKeys: t
    })) if (n(r)) return !0;
    return !1;
  }(e, {
    getVisitorKeys: W,
    predicate: t
  });
}
function Y(e) {
  return "AssignmentExpression" === e.type || "BinaryExpression" === e.type || "LogicalExpression" === e.type || "NGPipeExpression" === e.type || "ConditionalExpression" === e.type || ev(e) || eT(e) || "SequenceExpression" === e.type || "TaggedTemplateExpression" === e.type || "BindExpression" === e.type || "UpdateExpression" === e.type && !e.prefix || e8(e) || "TSNonNullExpression" === e.type || "ChainExpression" === e.type;
}
function Q(e) {
  if (e.expressions) return ["expressions", 0];
  if (e.left) return ["left"];
  if (e.test) return ["test"];
  if (e.object) return ["object"];
  if (e.callee) return ["callee"];
  if (e.tag) return ["tag"];
  if (e.argument) return ["argument"];
  if (e.expression) return ["expression"];
  throw Error("Unexpected node has no left side.");
}
var Z = V(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose", "Hashbang", "InterpreterDirective"]);
var ee = V(["ExportDefaultDeclaration", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration", "DeclareExportAllDeclaration"]);
var et = V(["ArrayExpression", "TupleExpression"]);
var en = V(["ObjectExpression", "RecordExpression"]);
function er(e) {
  return "NumericLiteral" === e.type || "Literal" === e.type && "number" == typeof e.value;
}
function ei(e) {
  return "UnaryExpression" === e.type && ("+" === e.operator || "-" === e.operator) && er(e.argument);
}
function ea(e) {
  return "StringLiteral" === e.type || "Literal" === e.type && "string" == typeof e.value;
}
function eo(e) {
  return "RegExpLiteral" === e.type || "Literal" === e.type && !!e.regex;
}
var es = V(["Literal", "BooleanLiteral", "BigIntLiteral", "DecimalLiteral", "DirectiveLiteral", "NullLiteral", "NumericLiteral", "RegExpLiteral", "StringLiteral"]);
var e_ = V(["Identifier", "ThisExpression", "Super", "PrivateName", "PrivateIdentifier", "Import"]);
var el = V(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]);
var eu = V(["FunctionExpression", "ArrowFunctionExpression"]);
function ec(e) {
  return ev(e) && "Identifier" === e.callee.type && ["async", "inject", "fakeAsync", "waitForAsync"].includes(e.callee.name);
}
var ep = V(["JSXElement", "JSXFragment"]);
function ed(e) {
  return e.method && "init" === e.kind || "get" === e.kind || "set" === e.kind;
}
function em(e) {
  return ("ObjectTypeProperty" === e.type || "ObjectTypeInternalSlot" === e.type) && !e.$$static && !e.method && "get" !== e.kind && "set" !== e.kind && "FunctionTypeAnnotation" === e.value.type;
}
var ef = V(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
function eh(e) {
  return eT(e) || "BindExpression" === e.type && !!e.object;
}
var ey = V(["TSThisType", "NullLiteralTypeAnnotation", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType"]);
function eg(e) {
  return G(e) || H(e) || ey(e) || ("GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type) && !e.typeParameters;
}
var eb = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
function eD(e, t) {
  var n;
  var r;
  if ("CallExpression" !== e.type) return !1;
  if (1 === e.$$arguments.length) {
    if (ec(e) && t && eD(t)) return eu(e.$$arguments[0]);
    if ("Identifier" === e.callee.type && 1 === e.$$arguments.length && /^(?:before|after)(?:Each|All)$/.test(e.callee.name)) return ec(e.$$arguments[0]);
  } else if ((2 === e.$$arguments.length || 3 === e.$$arguments.length) && ("TemplateLiteral" === e.$$arguments[0].type || ea(e.$$arguments[0])) && (n = e.callee, eb.some(e => function (e, t) {
    let n = t.split(".");
    for (let t = n.length - 1; t >= 0; t--) {
      let r = n[t];
      if (0 === t) return "Identifier" === e.type && e.name === r;
      if ("MemberExpression" !== e.type || e.optional || e.computed || "Identifier" !== e.property.type || e.property.name !== r) return !1;
      e = e.object;
    }
  }(n, e)))) return (!e.$$arguments[2] || !!er(e.$$arguments[2])) && ((2 === e.$$arguments.length ? eu(e.$$arguments[1]) : ("FunctionExpression" === (r = e.$$arguments[1]).type || "ArrowFunctionExpression" === r.type && "BlockStatement" === r.body.type) && eV(e.$$arguments[1]).length <= 1) || ec(e.$$arguments[1]));
  return !1;
}
var ex = e => t => (t?.type === "ChainExpression" && (t = t.expression), e(t));
var ev = ex(V(["CallExpression", "OptionalCallExpression"]));
var eT = ex(V(["MemberExpression", "OptionalMemberExpression"]));
function eS(e) {
  return !e1(e) && (es(e) || e_(e));
}
function eC(e, t = 5) {
  return function e(t, n) {
    let r = 0;
    for (let i in t) {
      let a = t[i];
      if (a && "object" == typeof a && "string" == typeof a.type && (r++, r += e(a, n - r)), r > n) break;
    }
    return r;
  }(e, t) <= t;
}
function eE(e, t) {
  let {
    printWidth
  } = t;
  if (e1(e)) return !1;
  let r = .25 * printWidth;
  if ("ThisExpression" === e.type || "Identifier" === e.type && e.name.length <= r || ei(e) && !e1(e.argument)) return !0;
  let i = "Literal" === e.type && "regex" in e && e.regex.pattern || "RegExpLiteral" === e.type && e.pattern;
  return i ? i.length <= r : ea(e) ? L(ej(e), t).length <= r : "TemplateLiteral" === e.type ? 0 === e.expressions.length && e.quasis[0].value.raw.length <= r && !e.quasis[0].value.raw.includes(`
`) : "UnaryExpression" === e.type ? eE(e.argument, {
    printWidth
  }) : "CallExpression" === e.type && 0 === e.$$arguments.length && "Identifier" === e.callee.type ? e.callee.name.length <= r - 2 : es(e);
}
function ew(e, t) {
  return ep(t) ? eQ(t) : e1(t, eZ.Leading, t => P(e, J(t)));
}
function eA(e, t) {
  return "json" !== t.parser && "jsonc" !== t.parser && ea(e.key) && ej(e.key).slice(1, -1) === e.key.value && (x(e.key.value) && !("babel-ts" === t.parser && "ClassProperty" === e.type || "typescript" === t.parser && "PropertyDefinition" === e.type) || ek(e.key.value) && String(Number(e.key.value)) === e.key.value && ("babel" === t.parser || "acorn" === t.parser || "espree" === t.parser || "meriyah" === t.parser || "__babel_estree" === t.parser));
}
function ek(e) {
  return /^(?:\d+|\d+\.\d+)$/.test(e);
}
function eF(e) {
  return e.quasis.some(e => e.value.raw.includes(`
`));
}
function eP(e, t) {
  return ("TemplateLiteral" === e.type && eF(e) || "TaggedTemplateExpression" === e.type && eF(e.quasi)) && !P(t, R(e), {
    backwards: !0
  });
}
function eN(e) {
  if (!e1(e)) return !1;
  let t = b(!1, e2(e, eZ.Dangling), -1);
  return t && !$(t);
}
function eI(e) {
  let {
    node,
    parent,
    key
  } = e;
  return "callee" === key && ev(node) && ev(parent) && parent.$$arguments.length > 0 && node.$$arguments.length > parent.$$arguments.length;
}
var eO = new Set(["!", "-", "+", "~"]);
function eB(e, t = 2) {
  if (t <= 0) return !1;
  if ("ChainExpression" === e.type || "TSNonNullExpression" === e.type) return eB(e.expression, t);
  let n = e => eB(e, t - 1);
  if (eo(e)) return 5 >= C(e.pattern ?? e.regex.pattern);
  if (es(e) || e_(e) || "ArgumentPlaceholder" === e.type) return !0;
  if ("TemplateLiteral" === e.type) return e.quasis.every(e => !e.value.raw.includes(`
`)) && e.expressions.every(n);
  if (en(e)) return e.properties.every(e => !e.computed && (e.shorthand || e.value && n(e.value)));
  if (et(e)) return e.elements.every(e => null === e || n(e));
  if (e6(e)) {
    if ("ImportExpression" === e.type || eB(e.callee, t)) {
      let r = eH(e);
      return r.length <= t && r.every(n);
    }
    return !1;
  }
  return eT(e) ? eB(e.object, t) && eB(e.property, t) : (!!("UnaryExpression" === e.type && eO.has(e.operator)) || "UpdateExpression" === e.type) && eB(e.argument, t);
}
function ej(e) {
  var t;
  return (null == (t = e.extra) ? void 0 : t.raw) ?? e.raw;
}
function eM(e, t = "es5") {
  return "es5" === e.trailingComma && "es5" === t || "all" === e.trailingComma && ("all" === t || "es5" === t);
}
function eL(e, t) {
  switch (e.type) {
    case "BinaryExpression":
    case "LogicalExpression":
    case "AssignmentExpression":
    case "NGPipeExpression":
      return eL(e.left, t);
    case "MemberExpression":
    case "OptionalMemberExpression":
      return eL(e.object, t);
    case "TaggedTemplateExpression":
      return "FunctionExpression" !== e.tag.type && eL(e.tag, t);
    case "CallExpression":
    case "OptionalCallExpression":
      return "FunctionExpression" !== e.callee.type && eL(e.callee, t);
    case "ConditionalExpression":
      return eL(e.test, t);
    case "UpdateExpression":
      return !e.prefix && eL(e.argument, t);
    case "BindExpression":
      return e.object && eL(e.object, t);
    case "SequenceExpression":
      return eL(e.expressions[0], t);
    case "ChainExpression":
    case "TSSatisfiesExpression":
    case "TSAsExpression":
    case "TSNonNullExpression":
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
      return eL(e.expression, t);
    default:
      return t(e);
  }
}
var eR = {
  "==": !0,
  "!=": !0,
  "===": !0,
  "!==": !0
};
var eJ = {
  "*": !0,
  "/": !0,
  "%": !0
};
var eq = {
  ">>": !0,
  ">>>": !0,
  "<<": !0
};
function eU(e, t) {
  return !(eK(t) !== eK(e) || "**" === e || eR[e] && eR[t] || "%" === t && eJ[e] || "%" === e && eJ[t] || t !== e && eJ[t] && eJ[e] || eq[e] && eq[t]);
}
var ez = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((e, t) => e.map(e => [e, t])));
function eK(e) {
  return ez.get(e);
}
var eW = new WeakMap();
function eV(e) {
  if (eW.has(e)) return eW.get(e);
  let t = [];
  e.$$this && t.push(e.$$this);
  Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params);
  e.rest && t.push(e.rest);
  eW.set(e, t);
  return t;
}
var e$ = new WeakMap();
function eH(e) {
  if (e$.has(e)) return e$.get(e);
  if ("ChainExpression" === e.type) return eH(e.expression);
  let t = e.$$arguments;
  "ImportExpression" === e.type && (t = [e.source], e.attributes && t.push(e.attributes), e.options && t.push(e.options));
  e$.set(e, t);
  return t;
}
function eG(e, t) {
  let {
    node
  } = e;
  if ("ChainExpression" === node.type) return e.call(() => eG(e, t), "expression");
  "ImportExpression" === node.type ? (e.call(e => t(e, 0), "source"), node.attributes && e.call(e => t(e, 1), "attributes"), node.options && e.call(e => t(e, 1), "options")) : e.each(t, "arguments");
}
function eX(e, t) {
  let n = [];
  if ("ChainExpression" === e.type && n.push("expression"), "ImportExpression" === e.type) {
    if (0 === t || t === (e.attributes || e.options ? -2 : -1)) return [...n, "source"];
    if (e.attributes && (1 === t || -1 === t)) return [...n, "attributes"];
    if (e.options && (1 === t || -1 === t)) return [...n, "options"];
    throw RangeError("Invalid argument index");
  }
  if (t < 0 && (t = e.$$arguments.length + t), t < 0 || t >= e.$$arguments.length) throw RangeError("Invalid argument index");
  return [...n, "arguments", t];
}
function eY(e) {
  return "prettier-ignore" === e.value.trim() && !e.unignore;
}
function eQ(e) {
  return e?.prettierIgnore || e1(e, eZ.PrettierIgnore);
}
var eZ = {
  Leading: 2,
  Trailing: 4,
  Dangling: 8,
  Block: 16,
  Line: 32,
  PrettierIgnore: 64,
  First: 128,
  Last: 256
};
var e0 = (e, t) => {
  if ("function" == typeof e && (t = e, e = 0), e || t) return (n, r, i) => !(e & eZ.Leading && !n.leading || e & eZ.Trailing && !n.trailing || e & eZ.Dangling && (n.leading || n.trailing) || e & eZ.Block && !$(n) || e & eZ.Line && !Z(n) || e & eZ.First && 0 !== r || e & eZ.Last && r !== i.length - 1 || e & eZ.PrettierIgnore && !eY(n) || t && !t(n));
};
function e1(e, t, n) {
  if (!B(e?.comments)) return !1;
  let r = e0(t, n);
  return !r || e.comments.some(r);
}
function e2(e, t, n) {
  if (!Array.isArray(e?.comments)) return [];
  let r = e0(t, n);
  return r ? e.comments.filter(r) : e.comments;
}
var e3 = (e, {
  originalText: t
}) => O(t, J(e));
function e6(e) {
  return ev(e) || "NewExpression" === e.type || "ImportExpression" === e.type;
}
function e4(e) {
  return e && ("ObjectProperty" === e.type || "Property" === e.type && !ed(e));
}
var e8 = V(["TSAsExpression", "TSSatisfiesExpression", "AsExpression", "AsConstExpression", "SatisfiesExpression"]);
var e5 = V(["UnionTypeAnnotation", "TSUnionType"]);
var e7 = V(["IntersectionTypeAnnotation", "TSIntersectionType"]);
var e9 = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]);
var te = e => {
  for (let t of e.quasis) delete t.value;
};
function tt(e, t, n) {
  var r;
  var i;
  if ("Program" === e.type && delete t.sourceType, ("BigIntLiteral" === e.type || "BigIntLiteralTypeAnnotation" === e.type) && t.value && (t.value = t.value.toLowerCase()), ("BigIntLiteral" === e.type || "Literal" === e.type) && t.bigint && (t.bigint = t.bigint.toLowerCase()), "DecimalLiteral" === e.type && (t.value = Number(t.value)), "Literal" === e.type && t.decimal && (t.decimal = Number(t.decimal)), "EmptyStatement" === e.type || "JSXText" === e.type || "JSXExpressionContainer" === e.type && ("Literal" === e.expression.type || "StringLiteral" === e.expression.type) && " " === e.expression.value) return null;
  if (("Property" === e.type || "ObjectProperty" === e.type || "MethodDefinition" === e.type || "ClassProperty" === e.type || "ClassMethod" === e.type || "PropertyDefinition" === e.type || "TSDeclareMethod" === e.type || "TSPropertySignature" === e.type || "ObjectTypeProperty" === e.type) && "object" == typeof e.key && e.key && ("Literal" === e.key.type || "NumericLiteral" === e.key.type || "StringLiteral" === e.key.type || "Identifier" === e.key.type) && delete t.key, "JSXElement" === e.type && "style" === e.openingElement.name.name && e.openingElement.attributes.some(e => "JSXAttribute" === e.type && "jsx" === e.name.name)) for (let {
    type,
    expression
  } of t.children) "JSXExpressionContainer" === type && "TemplateLiteral" === expression.type && te(expression);
  "JSXAttribute" === e.type && "css" === e.name.name && "JSXExpressionContainer" === e.value.type && "TemplateLiteral" === e.value.expression.type && te(t.value.expression);
  "JSXAttribute" === e.type && (null == (r = e.value) ? void 0 : r.type) === "Literal" && /["']|&quot;|&apos;/.test(e.value.value) && (t.value.value = g(!1, t.value.value, /["']|&quot;|&apos;/g, '"'));
  let a = e.expression || e.callee;
  if ("Decorator" === e.type && "CallExpression" === a.type && "Component" === a.callee.name && 1 === a.$$arguments.length) {
    let n = e.expression.$$arguments[0].properties;
    for (let [e, r] of t.expression.$$arguments[0].properties.entries()) switch (n[e].key.name) {
      case "styles":
        et(r.value) && te(r.value.elements[0]);
        break;
      case "template":
        "TemplateLiteral" === r.value.type && te(r.value);
    }
  }
  if ("TaggedTemplateExpression" === e.type && ("MemberExpression" === e.tag.type || "Identifier" === e.tag.type && ("gql" === e.tag.name || "graphql" === e.tag.name || "css" === e.tag.name || "md" === e.tag.name || "markdown" === e.tag.name || "html" === e.tag.name) || "CallExpression" === e.tag.type) && te(t.quasi), "TemplateLiteral" === e.type && (null != (i = e.leadingComments) && i.some(e => $(e) && ["GraphQL", "HTML"].some(t => e.value === ` ${t} `)) || "CallExpression" === n.type && "graphql" === n.callee.name || !e.leadingComments) && te(t), ("TSIntersectionType" === e.type || "TSUnionType" === e.type) && 1 === e.types.length) return t.types[0];
  "ChainExpression" === e.type && "TSNonNullExpression" === e.expression.type && ([t.type, t.expression.type] = [t.expression.type, t.type]);
}
tt.ignoredProperties = e9;
var tn = tt;
var tr = "string";
var ti = "array";
var ta = "cursor";
var to = "indent";
var ts = "align";
var t_ = "trim";
var tl = "group";
var tu = "fill";
var tc = "if-break";
var tp = "indent-if-break";
var td = "line-suffix";
var tm = "line-suffix-boundary";
var tf = "line";
var th = "label";
var ty = "break-parent";
var tg = new Set([ta, to, ts, t_, tl, tu, tc, tp, td, tm, tf, th, ty]);
var tb = function (e) {
  if ("string" == typeof e) return tr;
  if (Array.isArray(e)) return ti;
  if (!e) return;
  let {
    type
  } = e;
  if (tg.has(type)) return type;
};
var tD = e => new Intl.ListFormat("en-US", {
  type: "disjunction"
}).format(e);
var tx = class extends Error {
  name = "InvalidDocError";
  constructor(e) {
    super(function (e) {
      let t = null === e ? "null" : typeof e;
      if ("string" !== t && "object" !== t) return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
      if (tb(e)) throw Error("doc is valid.");
      let n = Object.prototype.toString.call(e);
      if ("[object Object]" !== n) return `Unexpected doc '${n}'.`;
      let r = tD([...tg].map(e => `'${e}'`));
      return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
    }(e));
    this.doc = e;
  }
};
var tv = {};
var tT = function (e, t, n, r) {
  let i = [e];
  for (; i.length > 0;) {
    let e = i.pop();
    if (e === tv) {
      n(i.pop());
      continue;
    }
    n && i.push(e, tv);
    let a = tb(e);
    if (!a) throw new tx(e);
    if (t?.(e) !== !1) switch (a) {
      case ti:
      case tu:
        {
          let t = a === ti ? e : e.parts;
          for (function () {
            let e = t.length;
            let n = e - 1;
          }(); n >= 0; --n) i.push(t[n]);
          break;
        }
      case tc:
        i.push(e.flatContents, e.breakContents);
        break;
      case tl:
        if (r && e.expandedStates) for (function () {
          let t = e.expandedStates.length;
          let n = t - 1;
        }(); n >= 0; --n) i.push(e.expandedStates[n]);else i.push(e.contents);
        break;
      case ts:
      case to:
      case tp:
      case th:
      case td:
        i.push(e.contents);
        break;
      case tr:
      case ta:
      case t_:
      case tm:
      case tf:
      case ty:
        break;
      default:
        throw new tx(e);
    }
  }
};
var tS = () => {};
function tC(e) {
  tS(e);
  return {
    type: to,
    contents: e
  };
}
function tE(e, t) {
  tS(t);
  return {
    type: ts,
    contents: t,
    n: e
  };
}
function tw(e, t = {}) {
  tS(e);
  tS(t.expandedStates, !0);
  return {
    type: tl,
    id: t.id,
    contents: e,
    break: !!t.shouldBreak,
    expandedStates: t.expandedStates
  };
}
function tA(e, t) {
  return tw(e[0], {
    ...t,
    expandedStates: e
  });
}
function tk(e) {
  tS(e);
  return {
    type: tu,
    parts: e
  };
}
function tF(e, t = "", n = {}) {
  tS(e);
  "" !== t && tS(t);
  return {
    type: tc,
    breakContents: e,
    flatContents: t,
    groupId: n.groupId
  };
}
function tP(e, t) {
  tS(e);
  return {
    type: tp,
    contents: e,
    groupId: t.groupId,
    negate: t.negate
  };
}
function tN(e) {
  tS(e);
  return {
    type: td,
    contents: e
  };
}
var tI = {
  type: tm
};
var tO = {
  type: ty
};
var tB = {
  type: tf,
  hard: !0
};
var tj = {
  type: tf
};
var tM = {
  type: tf,
  soft: !0
};
var tL = [tB, tO];
var tR = [{
  type: tf,
  hard: !0,
  literal: !0
}, tO];
var tJ = {
  type: ta
};
function tq(e, t) {
  tS(e);
  tS(t);
  let n = [];
  for (let r = 0; r < t.length; r++) {
    0 !== r && n.push(e);
    n.push(t[r]);
  }
  return n;
}
function tU(e, t) {
  tS(t);
  return e ? {
    type: th,
    label: e,
    contents: t
  } : t;
}
var tz = e => {
  if (Array.isArray(e)) return e;
  if (e.type !== tu) throw Error(`Expect doc to be 'array' or '${tu}'.`);
  return e.parts;
};
function tK(e, t) {
  if ("string" == typeof e) return t(e);
  let n = new Map();
  return function e(r) {
    if (n.has(r)) return n.get(r);
    let i = function (n) {
      switch (tb(n)) {
        case ti:
          return t(n.map(e));
        case tu:
          return t({
            ...n,
            parts: n.parts.map(e)
          });
        case tc:
          return t({
            ...n,
            breakContents: e(n.breakContents),
            flatContents: e(n.flatContents)
          });
        case tl:
          {
            let {
              expandedStates,
              contents
            } = n;
            i = expandedStates ? (r = expandedStates.map(e))[0] : e(contents);
            return t({
              ...n,
              contents,
              expandedStates
            });
          }
        case ts:
        case to:
        case tp:
        case th:
        case td:
          return t({
            ...n,
            contents: e(n.contents)
          });
        case tr:
        case ta:
        case t_:
        case tm:
        case tf:
        case ty:
          return t(n);
        default:
          throw new tx(n);
      }
    }(r);
    n.set(r, i);
    return i;
  }(e);
}
function tW(e, t, n) {
  let r = n;
  let i = !1;
  tT(e, function (e) {
    if (i) return !1;
    let n = t(e);
    void 0 !== n && (i = !0, r = n);
  });
  return r;
}
function tV(e) {
  if (e.type === tl && e.$$break || e.type === tf && e.hard || e.type === ty) return !0;
}
function t$(e) {
  return tW(e, tV, !1);
}
function tH(e) {
  if (e.length > 0) {
    let t = b(!1, e, -1);
    t.expandedStates || t.$$break || (t.$$break = "propagated");
  }
  return null;
}
function tG(e) {
  return e.type !== tf || e.hard ? e.type === tc ? e.flatContents : e : e.soft ? "" : " ";
}
function tX(e) {
  return tK(e, e => function (e) {
    switch (tb(e)) {
      case tu:
        if (e.parts.every(e => "" === e)) return "";
        break;
      case tl:
        if (!e.contents && !e.id && !e.$$break && !e.expandedStates) return "";
        if (e.contents.type === tl && e.contents.id === e.id && e.contents.$$break === e.$$break && e.contents.expandedStates === e.expandedStates) return e.contents;
        break;
      case ts:
      case to:
      case tp:
      case td:
        if (!e.contents) return "";
        break;
      case tc:
        if (!e.flatContents && !e.breakContents) return "";
        break;
      case ti:
        {
          let t = [];
          for (let n of e) {
            if (!n) continue;
            let [e, ...r] = Array.isArray(n) ? n : [n];
            "string" == typeof e && "string" == typeof b(!1, t, -1) ? t[t.length - 1] += e : t.push(e);
            t.push(...r);
          }
          return 0 === t.length ? "" : 1 === t.length ? t[0] : t;
        }
      case tr:
      case ta:
      case t_:
      case tm:
      case tf:
      case th:
      case ty:
        break;
      default:
        throw new tx(e);
    }
    return e;
  }(e));
}
function tY(e, t = tR) {
  return tK(e, e => "string" == typeof e ? tq(t, e.split(`
`)) : e);
}
function tQ(e) {
  if (e.type === tf) return !0;
}
function tZ(e, t) {
  return e.type === th ? {
    ...e,
    contents: t(e.contents)
  } : t(e);
}
var t0 = function (e) {
  let t = `*${e.value}*`.split(`
`);
  return t.length > 1 && t.every(e => "*" === e.trimStart()[0]);
};
function t1(e, t) {
  let n = e.node;
  if (Z(n)) return t.originalText.slice(R(n), J(n)).trimEnd();
  if ($(n)) {
    let e;
    return t0(n) ? ["/*", tq(tL, (e = n.value.split(`
`)).map((t, n) => 0 === n ? t.trimEnd() : " " + (n < e.length - 1 ? t.trim() : t.trimStart()))), "*/"] : ["/*", tY(n.value), "*/"];
  }
  throw Error("Not a comment: " + JSON.stringify(n));
}
var t2 = {};
function t3(e, t) {
  let n;
  let r;
  (e.comments ?? (e.comments = [])).push(t);
  t.printed = !1;
  t.nodeDescription = (n = e.type || e.kind || "(unknown type)", (r = String(e.name || e.id && ("object" == typeof e.id ? e.id.name : e.id) || e.key && ("object" == typeof e.key ? e.key.name : e.key) || e.value && ("object" == typeof e.value ? "" : String(e.value)) || e.operator || "")).length > 20 && (r = r.slice(0, 19) + "\u2026"), n + (r ? " " + r : ""));
}
function t6(e, t) {
  t.leading = !0;
  t.trailing = !1;
  t3(e, t);
}
function t4(e, t, n) {
  t.leading = !1;
  t.trailing = !1;
  n && (t.marker = n);
  t3(e, t);
}
function t8(e, t) {
  t.leading = !1;
  t.trailing = !0;
  t3(e, t);
}
l(t2, {
  endOfLine: () => nt,
  ownLine: () => ne,
  remaining: () => nn
});
var t5 = function (e, t) {
  let n = null;
  let r = t;
  for (; r !== n;) {
    n = r;
    r = w(e, r);
    r = N(e, r);
    r = I(e, r);
    r = F(e, r);
  }
  return r;
};
var t7 = function (e, t) {
  let n = t5(e, t);
  return !1 === n ? "" : e.charAt(n);
};
var t9 = function (e, t, n) {
  for (let r = t; r < n; ++r) if (e.charAt(r) === `
`) return !0;
  return !1;
};
function ne(e) {
  return [nB, nc, nx, nl, no, ns, n_, nm, nA, nC, nw, nk, nF, nh, nv, nT, nu, nR].some(t => t(e));
}
function nt(e) {
  return [na, nx, nc, nk, no, ns, n_, nm, nv, nS, nE, nw, nI, nT, nM, nL].some(t => t(e));
}
function nn(e) {
  return [nB, no, ns, np, nD, nh, nw, nb, ng, nj, nT, nO].some(t => t(e));
}
function nr(e, t) {
  let n = (e.body || e.properties).find(({
    type: e
  }) => "EmptyStatement" !== e);
  n ? t6(n, t) : t4(e, t);
}
function ni(e, t) {
  "BlockStatement" === e.type ? nr(e, t) : t6(e, t);
}
function na({
  comment: e,
  followingNode: t
}) {
  var n;
  return !!(t && $(n = e) && "*" === n.value[0] && /@(?:type|satisfies)\b/.test(n.value)) && (t6(t, e), !0);
}
function no({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i
}) {
  if (n?.type !== "IfStatement" || !r) return !1;
  if (")" === t7(i, J(e))) {
    t8(t, e);
    return !0;
  }
  if (t === n.consequent && r === n.alternate) {
    if ("BlockStatement" === t.type) t8(t, e);else {
      let r = Z(e) || e.loc.start.line === e.loc.end.line;
      let i = e.loc.start.line === t.loc.start.line;
      r && i ? t8(t, e) : t4(n, e);
    }
    return !0;
  }
  return "BlockStatement" === r.type ? (nr(r, e), !0) : "IfStatement" === r.type ? (ni(r.consequent, e), !0) : n.consequent === r && (t6(r, e), !0);
}
function ns({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i
}) {
  return n?.type === "WhileStatement" && !!r && (")" === t7(i, J(e)) ? (t8(t, e), !0) : "BlockStatement" === r.type ? (nr(r, e), !0) : n.body === r && (t6(r, e), !0));
}
function n_({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  return (n?.type === "TryStatement" || n?.type === "CatchClause") && !!r && ("CatchClause" === n.type && t ? (t8(t, e), !0) : "BlockStatement" === r.type ? (nr(r, e), !0) : "TryStatement" === r.type ? (ni(r.finalizer, e), !0) : "CatchClause" === r.type && (ni(r.body, e), !0));
}
function nl({
  comment: e,
  enclosingNode: t,
  followingNode: n
}) {
  return !!eT(t) && n?.type === "Identifier" && (t6(t, e), !0);
}
function nu({
  comment: e,
  enclosingNode: t,
  followingNode: n,
  options: r
}) {
  return !!r.experimentalTernaries && (t?.type === "ConditionalExpression" || t?.type === "ConditionalTypeAnnotation" || t?.type === "TSConditionalType") && (n?.type === "ConditionalExpression" || n?.type === "ConditionalTypeAnnotation" || n?.type === "TSConditionalType") && (t4(t, e), !0);
}
function nc({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i,
  options: a
}) {
  let o = t && !t9(i, J(t), R(e));
  return (!t || !o) && (n?.type === "ConditionalExpression" || n?.type === "ConditionalTypeAnnotation" || n?.type === "TSConditionalType") && !!r && (a.experimentalTernaries && n.alternate === r && !($(e) && !t9(a.originalText, R(e), J(e))) ? t4(n, e) : t6(r, e), !0);
}
function np({
  comment: e,
  precedingNode: t,
  enclosingNode: n
}) {
  return !!e4(n) && !!n.shorthand && n.key === t && "AssignmentPattern" === n.value.type && (t8(n.value.left, e), !0);
}
var nd = new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
function nm({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  if (nd.has(n?.type)) {
    if (B(n.decorators) && r?.type !== "Decorator") {
      t8(b(!1, n.decorators, -1), e);
      return !0;
    }
    if (n.body && r === n.body) {
      nr(n.body, e);
      return !0;
    }
    if (r) {
      if (n.superClass && r === n.superClass && t && (t === n.id || t === n.typeParameters)) {
        t8(t, e);
        return !0;
      }
      for (let i of ["implements", "extends", "mixins"]) if (n[i] && r === n[i][0]) {
        t && (t === n.id || t === n.typeParameters || t === n.superClass) ? t8(t, e) : t4(n, e, i);
        return !0;
      }
    }
  }
  return !1;
}
var nf = new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
function nh({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  text: r
}) {
  return n && t && "(" === t7(r, J(e)) && ("Property" === n.type || "TSDeclareMethod" === n.type || "TSAbstractMethodDefinition" === n.type) && "Identifier" === t.type && n.key === t && ":" !== t7(r, J(t)) ? (t8(t, e), !0) : !!(t?.type === "Decorator" && nf.has(n?.type)) && (t8(t, e), !0);
}
var ny = new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
function ng({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  text: r
}) {
  return "(" === t7(r, J(e)) && !!(t && ny.has(n?.type)) && (t8(t, e), !0);
}
function nb({
  comment: e,
  enclosingNode: t,
  text: n
}) {
  if (t?.type !== "ArrowFunctionExpression") return !1;
  let r = t5(n, J(e));
  return !1 !== r && "=>" === n.slice(r, r + 2) && (t4(t, e), !0);
}
function nD({
  comment: e,
  enclosingNode: t,
  text: n
}) {
  return ")" === t7(n, J(e)) && (t && (nJ(t) && 0 === eV(t).length || e6(t) && 0 === eH(t).length) ? (t4(t, e), !0) : (t?.type === "MethodDefinition" || t?.type === "TSAbstractMethodDefinition") && 0 === eV(t.value).length && (t4(t.value, e), !0));
}
function nx({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r,
  text: i
}) {
  return t?.type === "FunctionTypeParam" && n?.type === "FunctionTypeAnnotation" && r?.type !== "FunctionTypeParam" ? (t8(t, e), !0) : (t?.type === "Identifier" || t?.type === "AssignmentPattern" || t?.type === "ObjectPattern" || t?.type === "ArrayPattern" || t?.type === "RestElement" || t?.type === "TSParameterProperty") && nJ(n) && ")" === t7(i, J(e)) ? (t8(t, e), !0) : !$(e) && (n?.type === "FunctionDeclaration" || n?.type === "FunctionExpression" || n?.type === "ObjectMethod") && r?.type === "BlockStatement" && n.body === r && t5(i, J(e)) === R(r) && (nr(r, e), !0);
}
function nv({
  comment: e,
  enclosingNode: t
}) {
  return t?.type === "LabeledStatement" && (t6(t, e), !0);
}
function nT({
  comment: e,
  enclosingNode: t
}) {
  return (t?.type === "ContinueStatement" || t?.type === "BreakStatement") && !t.label && (t8(t, e), !0);
}
function nS({
  comment: e,
  precedingNode: t,
  enclosingNode: n
}) {
  return !!ev(n) && !!t && n.callee === t && n.$$arguments.length > 0 && (t6(n.$$arguments[0], e), !0);
}
function nC({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  return e5(n) ? (eY(e) && (r.prettierIgnore = !0, e.unignore = !0), !!t && (t8(t, e), !0)) : (e5(r) && eY(e) && (r.types[0].prettierIgnore = !0, e.unignore = !0), !1);
}
function nE({
  comment: e,
  enclosingNode: t
}) {
  return !!e4(t) && (t6(t, e), !0);
}
function nw({
  comment: e,
  enclosingNode: t,
  followingNode: n,
  ast: r,
  isLastComment: i
}) {
  var a;
  return (null == (a = r?.body) ? void 0 : a.length) === 0 ? (i ? t4(r, e) : t6(r, e), !0) : t?.type !== "Program" || 0 !== t.body.length || B(t.directives) ? n?.type === "Program" && 0 === n.body.length && t?.type === "ModuleExpression" && (t4(n, e), !0) : (i ? t4(t, e) : t6(t, e), !0);
}
function nA({
  comment: e,
  enclosingNode: t
}) {
  return (t?.type === "ForInStatement" || t?.type === "ForOfStatement") && (t6(t, e), !0);
}
function nk({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  text: r
}) {
  if (n?.type === "ImportSpecifier" || n?.type === "ExportSpecifier") {
    t6(n, e);
    return !0;
  }
  let i = t?.type === "ImportSpecifier" && n?.type === "ImportDeclaration";
  let a = t?.type === "ExportSpecifier" && n?.type === "ExportNamedDeclaration";
  return !!((i || a) && P(r, J(e))) && (t8(t, e), !0);
}
function nF({
  comment: e,
  enclosingNode: t
}) {
  return t?.type === "AssignmentPattern" && (t6(t, e), !0);
}
var nP = new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]);
var nN = new Set(["ObjectExpression", "RecordExpression", "ArrayExpression", "TupleExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
function nI({
  comment: e,
  enclosingNode: t,
  followingNode: n
}) {
  return !!(nP.has(t?.type) && n && (nN.has(n.type) || $(e))) && (t6(n, e), !0);
}
function nO({
  comment: e,
  enclosingNode: t,
  followingNode: n,
  text: r
}) {
  return !n && (t?.type === "TSMethodSignature" || t?.type === "TSDeclareFunction" || t?.type === "TSAbstractMethodDefinition") && ";" === t7(r, J(e)) && (t8(t, e), !0);
}
function nB({
  comment: e,
  enclosingNode: t,
  followingNode: n
}) {
  if (eY(e) && t?.type === "TSMappedType" && n?.type === "TSTypeParameter" && n.constraint) {
    t.prettierIgnore = !0;
    e.unignore = !0;
    return !0;
  }
}
function nj({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  return n?.type === "TSMappedType" && (r?.type === "TSTypeParameter" && r.name ? (t6(r.name, e), !0) : t?.type === "TSTypeParameter" && !!t.constraint && (t8(t.constraint, e), !0));
}
function nM({
  comment: e,
  enclosingNode: t,
  followingNode: n
}) {
  return !!t && "SwitchCase" === t.type && !t.test && !!n && n === t.consequent[0] && ("BlockStatement" === n.type && Z(e) ? nr(n, e) : t4(t, e), !0);
}
function nL({
  comment: e,
  precedingNode: t,
  enclosingNode: n,
  followingNode: r
}) {
  return !!(e5(t) && (("TSArrayType" === n.type || "ArrayTypeAnnotation" === n.type) && !r || e7(n))) && (t8(b(!1, t.types, -1), e), !0);
}
function nR({
  comment: e,
  enclosingNode: t,
  precedingNode: n,
  followingNode: r
}) {
  if ((t?.type === "ObjectPattern" || t?.type === "ArrayPattern") && r?.type === "TSTypeAnnotation") {
    n ? t8(n, e) : t4(t, e);
    return !0;
  }
}
var nJ = V(["ArrowFunctionExpression", "FunctionExpression", "FunctionDeclaration", "ObjectMethod", "ClassMethod", "TSDeclareFunction", "TSCallSignatureDeclaration", "TSConstructSignatureDeclaration", "TSMethodSignature", "TSConstructorType", "TSFunctionType", "TSDeclareMethod"]);
var nq = new Set(["EmptyStatement", "TemplateElement", "Import", "TSEmptyBodyFunctionExpression", "ChainExpression"]);
function nU(e) {
  return !nq.has(e.type);
}
function nz(e, t) {
  var n;
  if (("typescript" === t.parser || "flow" === t.parser || "acorn" === t.parser || "espree" === t.parser || "meriyah" === t.parser || "__babel_estree" === t.parser) && "MethodDefinition" === e.type && (null == (n = e.value) ? void 0 : n.type) === "FunctionExpression" && 0 === eV(e.value).length && !e.value.returnType && !B(e.value.typeParameters) && e.value.body) return [...(e.decorators || []), e.key, e.value.body];
}
function nK(e) {
  let {
    node,
    parent
  } = e;
  return (ep(node) || parent && ("JSXSpreadAttribute" === parent.type || "JSXSpreadChild" === parent.type || e5(parent) || ("ClassDeclaration" === parent.type || "ClassExpression" === parent.type) && parent.superClass === node)) && (!eQ(node) || e5(parent));
}
function nW(e, {
  parser: t
}) {
  if ("flow" === t || "babel-flow" === t) return "" === (e = g(!1, e, /[\s(]/g, "")) || "/*" === e || "/*::" === e;
}
var nV = Symbol("MODE_BREAK");
var n$ = Symbol("MODE_FLAT");
var nH = Symbol("cursor");
function nG() {
  return {
    value: "",
    length: 0,
    queue: []
  };
}
function nX(e, t, n) {
  let r = "dedent" === t.type ? e.queue.slice(0, -1) : [...e.queue, t];
  let i = "";
  let a = 0;
  let o = 0;
  let s = 0;
  for (let e of r) switch (e.type) {
    case "indent":
      u();
      n.useTabs ? _(1) : l(n.tabWidth);
      break;
    case "stringAlign":
      u();
      i += e.n;
      a += e.n.length;
      break;
    case "numberAlign":
      o += 1;
      s += e.n;
      break;
    default:
      throw Error(`Unexpected type '${e.type}'`);
  }
  c();
  return {
    ...e,
    value: i,
    length: a,
    queue: r
  };
  function _(e) {
    i += "	".repeat(e);
    a += n.tabWidth * e;
  }
  function l(e) {
    i += " ".repeat(e);
    a += e;
  }
  function u() {
    n.useTabs ? (o > 0 && _(o), o = 0, s = 0) : c();
  }
  function c() {
    s > 0 && l(s);
    o = 0;
    s = 0;
  }
}
function nY(e) {
  let t = 0;
  let n = 0;
  let r = e.length;
  e: for (; r--;) {
    let i = e[r];
    if (i === nH) {
      n++;
      continue;
    }
    for (let n = i.length - 1; n >= 0; n--) {
      let a = i[n];
      if (" " === a || "	" === a) t++;else {
        e[r] = i.slice(0, n + 1);
        break e;
      }
    }
  }
  if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0;) e.push(nH);
  return t;
}
function nQ(e, t, n, r, i, a) {
  if (n === Number.POSITIVE_INFINITY) return !0;
  let o = t.length;
  let s = [e];
  let _ = [];
  for (; n >= 0;) {
    if (0 === s.length) {
      if (0 === o) return !0;
      s.push(t[--o]);
      continue;
    }
    let {
      mode,
      doc
    } = s.pop();
    switch (tb(doc)) {
      case tr:
        _.push(doc);
        n -= C(doc);
        break;
      case ti:
      case tu:
        {
          let t = tz(doc);
          for (let n = t.length - 1; n >= 0; n--) s.push({
            mode,
            doc: t[n]
          });
          break;
        }
      case to:
      case ts:
      case tp:
      case th:
        s.push({
          mode,
          doc: doc.contents
        });
        break;
      case t_:
        n += nY(_);
        break;
      case tl:
        {
          if (a && doc.$$break) return !1;
          let t = doc.$$break ? nV : mode;
          let n = doc.expandedStates && t === nV ? b(!1, doc.expandedStates, -1) : doc.contents;
          s.push({
            mode: t,
            doc: n
          });
          break;
        }
      case tc:
        {
          let t = (doc.groupId ? i[doc.groupId] || n$ : mode) === nV ? doc.breakContents : doc.flatContents;
          t && s.push({
            mode,
            doc: t
          });
          break;
        }
      case tf:
        if (mode === nV || doc.hard) return !0;
        doc.soft || (_.push(" "), n--);
        break;
      case td:
        r = !0;
        break;
      case tm:
        if (r) return !1;
    }
  }
  return !1;
}
function nZ(e, t) {
  var n;
  let r;
  let i;
  let a = {};
  let o = t.printWidth;
  let s = function (e) {
    switch (e) {
      case "cr":
        return "\r";
      case "crlf":
        return `\r
`;
      default:
        return `
`;
    }
  }(t.endOfLine);
  let _ = 0;
  let l = [{
    ind: nG(),
    mode: nV,
    doc: e
  }];
  let u = [];
  let c = !1;
  let p = [];
  let d = 0;
  for (r = new Set(), i = [], tT(e, function (e) {
    if (e.type === ty && tH(i), e.type === tl) {
      if (i.push(e), r.has(e)) return !1;
      r.add(e);
    }
  }, function (e) {
    e.type === tl && i.pop().$$break && tH(i);
  }, !0); l.length > 0;) {
    let {
      ind,
      mode,
      doc
    } = l.pop();
    switch (tb(doc)) {
      case tr:
        {
          let e = s !== `
` ? g(!1, doc, `
`, s) : doc;
          u.push(e);
          l.length > 0 && (_ += C(e));
          break;
        }
      case ti:
        for (let t = doc.length - 1; t >= 0; t--) l.push({
          ind,
          mode,
          doc: doc[t]
        });
        break;
      case ta:
        if (d >= 2) throw Error("There are too many 'cursor' in doc.");
        u.push(nH);
        d++;
        break;
      case to:
        l.push({
          ind: nX(ind, {
            type: "indent"
          }, t),
          mode,
          doc: doc.contents
        });
        break;
      case ts:
        l.push({
          ind: (n = doc.n) === Number.NEGATIVE_INFINITY ? ind.root || nG() : n < 0 ? nX(ind, {
            type: "dedent"
          }, t) : n ? "root" === n.type ? {
            ...ind,
            root: ind
          } : nX(ind, {
            type: "string" == typeof n ? "stringAlign" : "numberAlign",
            n: n
          }, t) : ind,
          mode,
          doc: doc.contents
        });
        break;
      case t_:
        _ -= nY(u);
        break;
      case tl:
        switch (mode) {
          case n$:
            if (!c) {
              l.push({
                ind,
                mode: doc.$$break ? nV : n$,
                doc: doc.contents
              });
              break;
            }
          case nV:
            {
              c = !1;
              let t = {
                ind,
                mode: n$,
                doc: doc.contents
              };
              let n = o - _;
              let r = p.length > 0;
              if (!doc.$$break && nQ(t, l, n, r, a)) l.push(t);else if (doc.expandedStates) {
                let t = b(!1, doc.expandedStates, -1);
                if (doc.$$break) l.push({
                  ind,
                  mode: nV,
                  doc: t
                });else for (let o = 1; o < doc.expandedStates.length + 1; o++) if (o >= doc.expandedStates.length) {
                  l.push({
                    ind,
                    mode: nV,
                    doc: t
                  });
                  break;
                } else {
                  let t = {
                    ind,
                    mode: n$,
                    doc: doc.expandedStates[o]
                  };
                  if (nQ(t, l, n, r, a)) {
                    l.push(t);
                    break;
                  }
                }
              } else l.push({
                ind,
                mode: nV,
                doc: doc.contents
              });
            }
        }
        doc.id && (a[doc.id] = b(!1, l, -1).mode);
        break;
      case tu:
        {
          let t = o - _;
          let {
            parts
          } = doc;
          if (0 === parts.length) break;
          let [s, u] = n;
          let c = {
            ind,
            mode: n$,
            doc: s
          };
          let d = {
            ind,
            mode: nV,
            doc: s
          };
          let m = nQ(c, [], t, p.length > 0, a, !0);
          if (1 === parts.length) {
            m ? l.push(c) : l.push(d);
            break;
          }
          let f = {
            ind,
            mode: n$,
            doc: u
          };
          let h = {
            ind,
            mode: nV,
            doc: u
          };
          if (2 === parts.length) {
            m ? l.push(f, c) : l.push(h, d);
            break;
          }
          parts.splice(0, 2);
          let y = {
            ind,
            mode,
            doc: tk(parts)
          };
          nQ({
            ind,
            mode: n$,
            doc: [s, u, parts[0]]
          }, [], t, p.length > 0, a, !0) ? l.push(y, f, c) : m ? l.push(y, h, c) : l.push(y, h, d);
          break;
        }
      case tc:
      case tp:
        {
          let t = doc.groupId ? a[doc.groupId] : mode;
          if (t === nV) {
            let t = doc.type === tc ? doc.breakContents : doc.negate ? doc.contents : tC(doc.contents);
            t && l.push({
              ind,
              mode,
              doc: t
            });
          }
          if (t === n$) {
            let t = doc.type === tc ? doc.flatContents : doc.negate ? tC(doc.contents) : doc.contents;
            t && l.push({
              ind,
              mode,
              doc: t
            });
          }
          break;
        }
      case td:
        p.push({
          ind,
          mode,
          doc: doc.contents
        });
        break;
      case tm:
        p.length > 0 && l.push({
          ind,
          mode,
          doc: tB
        });
        break;
      case tf:
        switch (mode) {
          case n$:
            if (doc.hard) c = !0;else {
              doc.soft || (u.push(" "), _ += 1);
              break;
            }
          case nV:
            if (p.length > 0) {
              l.push({
                ind,
                mode,
                doc
              }, ...p.reverse());
              p.length = 0;
              break;
            }
            doc.literal ? ind.root ? (u.push(s, ind.root.value), _ = ind.root.length) : (u.push(s), _ = 0) : (_ -= nY(u), u.push(s + ind.value), _ = ind.length);
        }
        break;
      case th:
        l.push({
          ind,
          mode,
          doc: doc.contents
        });
        break;
      case ty:
        break;
      default:
        throw new tx(doc);
    }
    0 === l.length && p.length > 0 && (l.push(...p.reverse()), p.length = 0);
  }
  let m = u.indexOf(nH);
  if (-1 !== m) {
    let e = u.indexOf(nH, m + 1);
    let t = u.slice(0, m).join("");
    let n = u.slice(m + 1, e).join("");
    return {
      formatted: t + n + u.slice(e + 1).join(""),
      cursorNodeStart: t.length,
      cursorNodeText: n
    };
  }
  return {
    formatted: u.join("")
  };
}
var n0 = function (e, t, n = 0) {
  let r = 0;
  for (let i = n; i < e.length; ++i) "	" === e[i] ? r = r + t - r % t : r++;
  return r;
};
var n1 = function (e, t) {
  let n = e.lastIndexOf(`
`);
  return -1 === n ? 0 : n0(e.slice(n + 1).match(/^[\t ]*/)[0], t);
};
function n2(e, t, n) {
  let r;
  let i;
  let {
    node
  } = e;
  if ("TemplateLiteral" === node.type && function ({
    node: e,
    parent: t
  }) {
    let n = /^[fx]?(?:describe|it|test)$/;
    return "TaggedTemplateExpression" === t.type && t.quasi === e && "MemberExpression" === t.tag.type && "Identifier" === t.tag.property.type && "each" === t.tag.property.name && ("Identifier" === t.tag.object.type && n.test(t.tag.object.name) || "MemberExpression" === t.tag.object.type && "Identifier" === t.tag.object.property.type && ("only" === t.tag.object.property.name || "skip" === t.tag.object.property.name) && "Identifier" === t.tag.object.object.type && n.test(t.tag.object.object.name));
  }(e)) {
    let r = function (e, t, n) {
      let {
        node
      } = e;
      let i = node.quasis[0].value.raw.trim().split(/\s*\|\s*/);
      if (i.length > 1 || i.some(e => e.length > 0)) {
        t.__inJestEach = !0;
        let a = e.map(n, "expressions");
        t.__inJestEach = !1;
        let o = [];
        let s = a.map(e => "${" + nZ(e, {
          ...t,
          printWidth: Number.POSITIVE_INFINITY,
          endOfLine: "lf"
        }).formatted + "}");
        let _ = [{
          hasLineBreak: !1,
          cells: []
        }];
        for (let e = 1; e < node.quasis.length; e++) {
          let t = b(!1, _, -1);
          let n = s[e - 1];
          t.cells.push(n);
          n.includes(`
`) && (t.hasLineBreak = !0);
          node.quasis[e].value.raw.includes(`
`) && _.push({
            hasLineBreak: !1,
            cells: []
          });
        }
        let l = Array.from({
          length: Math.max(i.length, ..._.map(e => e.cells.length))
        }).fill(0);
        let u = [{
          cells: i
        }, ..._.filter(e => e.cells.length > 0)];
        for (let {
          cells
        } of u.filter(e => !e.hasLineBreak)) for (let [t, n] of cells.entries()) l[t] = Math.max(l[t], C(n));
        o.push(tI, "`", tC([tL, tq(tL, u.map(e => tq(" | ", e.cells.map((t, n) => e.hasLineBreak ? t : t + " ".repeat(l[n] - C(t))))))]), tL, "`");
        return o;
      }
    }(e, n, t);
    if (r) return r;
  }
  let o = "expressions";
  "TSTemplateLiteralType" === node.type && (o = "types");
  let s = [];
  let _ = e.map(t, o);
  r = "expressions";
  "TSTemplateLiteralType" === node.type && (r = "types");
  let l = 0 !== (i = node[r]).length && i.every(e => {
    if (eS(e) || function e(t, {
      maxDepth: n = Number.POSITIVE_INFINITY
    } = {}) {
      if (e1(t)) return !1;
      if ("ChainExpression" === t.type) return e(t.expression, {
        maxDepth: n
      });
      if (!eT(t)) return !1;
      let r = t;
      let i = 0;
      for (; eT(r) && i++ <= n;) if (!eS(r.property) || e1(r = r.object)) return !1;
      return eS(r);
    }(e)) return !0;
  });
  l && (_ = _.map(e => nZ(e, {
    ...n,
    printWidth: Number.POSITIVE_INFINITY
  }).formatted));
  s.push(tI, "`");
  let u = 0;
  e.each(({
    index: e,
    node: r
  }) => {
    if (s.push(t()), r.tail) return;
    let {
      tabWidth
    } = n;
    let c = r.value.raw;
    let p = c.includes(`
`) ? n1(c, tabWidth) : u;
    u = p;
    let d = _[e];
    if (!l) {
      let t = node[o][e];
      let i = t9(n.originalText, J(r), R(node.quasis[e + 1]));
      if (!i) {
        let e = nZ(d, {
          ...n,
          printWidth: Number.POSITIVE_INFINITY
        }).formatted;
        e.includes(`
`) ? i = !0 : d = e;
      }
      i && (e1(t) || eT(t) || "ConditionalExpression" === t.type || "SequenceExpression" === t.type || e8(t) || ef(t)) && (d = [tC([tM, d]), tM]);
    }
    let m = 0 === p && c.endsWith(`
`) ? tE(Number.NEGATIVE_INFINITY, d) : function (e, t, n) {
      tS(e);
      let r = e;
      if (t > 0) {
        for (let e = 0; e < Math.floor(t / n); ++e) r = tC(r);
        r = tE(t % n, r);
        r = tE(Number.NEGATIVE_INFINITY, r);
      }
      return r;
    }(d, p, tabWidth);
    s.push(tw(["${", m, tI, "}"]));
  }, "quasis");
  s.push("`");
  return s;
}
function n3(e, t) {
  return e.map(e => function (e, t) {
    let {
      node
    } = e;
    let r = t();
    e1(node) && (r = tw([tC([tM, r]), tM]));
    return ["${", r, tI, "}"];
  }(e, t), "expressions");
}
function n6(e, t) {
  return tK(e, e => "string" == typeof e ? t ? g(!1, e, /(\\*)`/g, "$1$1\\`") : n4(e) : e);
}
function n4(e) {
  return g(!1, e, /([\\`]|\${)/g, "\\$1");
}
var n8 = [(e, t) => "ObjectExpression" === e.type && "properties" === t, (e, t) => "CallExpression" === e.type && "Identifier" === e.callee.type && "Component" === e.callee.name && "arguments" === t, (e, t) => "Decorator" === e.type && "expression" === t];
function n5(e, t) {
  return e1(e, eZ.Block | eZ.Leading, ({
    value: e
  }) => e === ` ${t} `);
}
function n7({
  node: e,
  parent: t
}, n) {
  return n5(e, n) || ("AsConstExpression" === t.type || "TSAsExpression" === t.type && "TSTypeReference" === t.typeAnnotation.type && "Identifier" === t.typeAnnotation.typeName.type && "const" === t.typeAnnotation.typeName.name) && n5(t, n);
}
async function n9(e, t, n) {
  let {
    node
  } = n;
  let i = node.quasis.map(e => e.value.raw);
  let a = 0;
  let o = i.reduce((e, t, n) => 0 === n ? t : e + "@prettier-placeholder-" + a++ + "-id" + t, "");
  let s = function (e, t) {
    if (!B(t)) return e;
    let n = 0;
    let r = tK(tX(e), e => "string" == typeof e && e.includes("@prettier-placeholder") ? e.split(/@prettier-placeholder-(\d+)-id/).map((e, r) => r % 2 == 0 ? tY(e) : (n++, t[e])) : e);
    return t.length === n ? r : null;
  }(await e(o, {
    parser: "scss"
  }), n3(n, t));
  if (!s) throw Error("Couldn't insert all the expressions");
  return ["`", tC([tL, s]), tM, "`"];
}
function re(e) {
  return "Identifier" === e.type && "styled" === e.name;
}
function rt(e) {
  return /^[A-Z]/.test(e.object.name) && "extend" === e.property.name;
}
var rn = function (e) {
  let t;
  let n;
  if (function ({
    node: e,
    parent: t,
    grandparent: n
  }) {
    return n && e.quasis && "JSXExpressionContainer" === t.type && "JSXElement" === n.type && "style" === n.openingElement.name.name && n.openingElement.attributes.some(e => "JSXAttribute" === e.type && "jsx" === e.name.name) || t?.type === "TaggedTemplateExpression" && "Identifier" === t.tag.type && "css" === t.tag.name || t?.type === "TaggedTemplateExpression" && "MemberExpression" === t.tag.type && "css" === t.tag.object.name && ("global" === t.tag.property.name || "resolve" === t.tag.property.name);
  }(e) || function ({
    parent: e
  }) {
    if (!e || "TaggedTemplateExpression" !== e.type) return !1;
    let t = "ParenthesizedExpression" === e.tag.type ? e.tag.expression : e.tag;
    switch (t.type) {
      case "MemberExpression":
        return re(t.object) || rt(t);
      case "CallExpression":
        return re(t.callee) || "MemberExpression" === t.callee.type && ("MemberExpression" === t.callee.object.type && (re(t.callee.object.object) || rt(t.callee.object)) || "CallExpression" === t.callee.object.type && re(t.callee.object.callee));
      case "Identifier":
        return "css" === t.name;
      default:
        return !1;
    }
  }(e) || function ({
    parent: e,
    grandparent: t
  }) {
    return t?.type === "JSXAttribute" && "JSXExpressionContainer" === e.type && "JSXIdentifier" === t.name.type && "css" === t.name.name;
  }(e) || (t = e => "TemplateLiteral" === e.type, n = (e, t) => e4(e) && !e.computed && "Identifier" === e.key.type && "styles" === e.key.name && "value" === t, e.match(t, (e, t) => et(e) && "elements" === t, n, ...n8) || e.match(t, n, ...n8))) return n9;
};
async function rr(e, t, n) {
  let {
    node
  } = n;
  let i = node.quasis.length;
  let a = n3(n, t);
  let o = [];
  for (let t = 0; t < i; t++) {
    let n = node.quasis[t];
    let s = 0 === t;
    let _ = t === i - 1;
    let l = n.value.cooked;
    let u = l.split(`
`);
    let c = u.length;
    let p = a[t];
    let d = c > 2 && "" === u[0].trim() && "" === u[1].trim();
    let m = c > 2 && "" === u[c - 1].trim() && "" === u[c - 2].trim();
    let f = u.every(e => /^\s*(?:#[^\n\r]*)?$/.test(e));
    if (!_ && /#[^\n\r]*$/.test(u[c - 1])) return null;
    let h = null;
    (h = f ? function (e) {
      let t = [];
      let n = !1;
      let r = e.map(e => e.trim());
      for (let [e, i] of r.entries()) "" !== i && ("" === r[e - 1] && n ? t.push([tL, i]) : t.push(i), n = !0);
      return 0 === t.length ? null : tq(tL, t);
    }(u) : await e(l, {
      parser: "graphql"
    })) ? (h = n6(h, !1), !s && d && o.push(""), o.push(h), !_ && m && o.push("")) : s || _ || !d || o.push("");
    p && o.push(p);
  }
  return ["`", tC([tL, tq(tL, o)]), tL, "`"];
}
var ri = function (e) {
  if (function ({
    node: e,
    parent: t
  }) {
    return n7({
      node: e,
      parent: t
    }, "GraphQL") || t && ("TaggedTemplateExpression" === t.type && ("MemberExpression" === t.tag.type && "graphql" === t.tag.object.name && "experimental" === t.tag.property.name || "Identifier" === t.tag.type && ("gql" === t.tag.name || "graphql" === t.tag.name)) || "CallExpression" === t.type && "Identifier" === t.callee.type && "graphql" === t.callee.name);
  }(e)) return rr;
};
var ra = 0;
async function ro(e, t, n, r, i) {
  let {
    node
  } = r;
  let o = ra;
  ra = ra + 1 >>> 0;
  let s = e => `PRETTIER_HTML_PLACEHOLDER_${e}_${o}_IN_JS`;
  let _ = node.quasis.map((e, t, n) => t === n.length - 1 ? e.value.cooked : e.value.cooked + s(t)).join("");
  let l = n3(r, n);
  let u = RegExp(s("(\\d+)"), "g");
  let c = 0;
  let p = tK(await t(_, {
    parser: e,
    __onHtmlRoot(e) {
      c = e.children.length;
    }
  }), e => {
    if ("string" != typeof e) return e;
    let t = [];
    let n = e.split(u);
    for (let e = 0; e < n.length; e++) {
      let r = n[e];
      if (e % 2 == 0) {
        r && (r = n4(r), i.__embeddedInHtml && (r = g(!1, r, /<\/(?=script\b)/gi, "<\\/")), t.push(r));
        continue;
      }
      let a = Number(r);
      t.push(l[a]);
    }
    return t;
  });
  let d = /^\s/.test(_) ? " " : "";
  let m = /\s$/.test(_) ? " " : "";
  let f = "ignore" === i.htmlWhitespaceSensitivity ? tL : d && m ? tj : null;
  return f ? tw(["`", tC([f, tw(p)]), f, "`"]) : tU({
    hug: !1
  }, tw(["`", d, c > 1 ? tC(tw(p)) : tw(p), m, "`"]));
}
var rs = ro.bind(void 0, "html");
var r_ = ro.bind(void 0, "angular");
var rl = function (e) {
  return n7(e, "HTML") || e.match(e => "TemplateLiteral" === e.type, (e, t) => "TaggedTemplateExpression" === e.type && "Identifier" === e.tag.type && "html" === e.tag.name && "quasi" === t) ? rs : e.match(e => "TemplateLiteral" === e.type, (e, t) => e4(e) && !e.computed && "Identifier" === e.key.type && "template" === e.key.name && "value" === t, ...n8) ? r_ : void 0;
};
async function ru(e, t, n) {
  let r;
  let {
    node
  } = n;
  let a = g(!1, node.quasis[0].value.raw, /((?:\\\\)*)\\`/g, (e, t) => "\\".repeat(t.length / 2) + "`");
  let o = null === (r = a.match(/^([^\S\n]*)\S/m)) ? "" : r[1];
  let s = "" !== o;
  s && (a = g(!1, a, RegExp(`^${o}`, "gm"), ""));
  let _ = n6(await e(a, {
    parser: "markdown",
    __inJsTemplate: !0
  }), !0);
  return ["`", s ? tC([tM, _]) : [tR, tE(Number.NEGATIVE_INFINITY, _)], tM, "`"];
}
var rc = function (e) {
  if (function ({
    node: e,
    parent: t
  }) {
    return t?.type === "TaggedTemplateExpression" && 1 === e.quasis.length && "Identifier" === t.tag.type && ("md" === t.tag.name || "markdown" === t.tag.name);
  }(e)) return ru;
};
var rp = function (e) {
  let t;
  let {
    node
  } = e;
  if (!("TemplateLiteral" !== node.type || function ({
    quasis: e
  }) {
    return e.some(({
      value: {
        cooked: e
      }
    }) => null === e);
  }(node))) {
    for (let r of [rn, ri, rl, rc]) if (t = r(e)) return 1 === node.quasis.length && "" === node.quasis[0].value.raw.trim() ? "``" : async (...e) => {
      let n = await t(...e);
      return n && tU({
        embed: !0,
        ...n.label
      }, n);
    };
  }
};
var rd = ((e, t, n) => (n = null != e ? r(s(e)) : {}, u(!t && e && e.__esModule ? n : i(n, "default", {
  value: e,
  enumerable: !0
}), e)))(f(), 1);
var rm = function (e) {
  if (!e.startsWith("#!")) return "";
  let t = e.indexOf(`
`);
  return -1 === t ? e : e.slice(0, t);
};
function rf(e) {
  let {
    shebang,
    text,
    pragmas,
    comments
  } = function (e) {
    let t = rm(e);
    t && (e = e.slice(t.length + 1));
    let n = rd.extract(e);
    let {
      pragmas: _pragmas,
      comments: _comments
    } = rd.parseWithComments(n);
    return {
      shebang: t,
      text: e,
      pragmas: _pragmas,
      comments: _comments
    };
  }(e);
  let a = rd.strip(text);
  return (shebang ? `${shebang}
` : "") + rd.print({
    pragmas: {
      format: "",
      ...pragmas
    },
    comments: comments.trimStart()
  }) + (a.startsWith(`
`) ? `
` : `

`) + a;
}
var rh = function (e, t) {
  let {
    originalText,
    [Symbol.$$for("comments")]: r,
    locStart,
    locEnd,
    [Symbol.$$for("printedComments")]: o
  } = t;
  let {
    node
  } = e;
  let _ = locStart(node);
  let l = locEnd(node);
  for (let e of r) locStart(e) >= _ && locEnd(e) <= l && o.add(e);
  return originalText.slice(_, l);
};
function ry(e, t) {
  var n;
  var r;
  var i;
  var a;
  var o;
  var s;
  var _;
  if (e.isRoot) return !1;
  let {
    node,
    key,
    parent
  } = e;
  if (t.__isInHtmlInterpolation && !t.bracketSpacing && en(node) && function e(t) {
    let {
      parent: _parent,
      key: _key
    } = t;
    switch (_parent.type) {
      case "NGPipeExpression":
        if ("arguments" === _key && t.isLast) return t.callParent(e);
        break;
      case "ObjectProperty":
        if ("value" === _key) return t.callParent(() => "properties" === t.key && t.isLast);
        break;
      case "BinaryExpression":
      case "LogicalExpression":
        if ("right" === _key) return t.callParent(e);
        break;
      case "ConditionalExpression":
        if ("alternate" === _key) return t.callParent(e);
        break;
      case "UnaryExpression":
        if (_parent.prefix) return t.callParent(e);
    }
    return !1;
  }(e)) return !0;
  if (rg(node)) return !1;
  if ("Identifier" === node.type) {
    if (null != (n = node.extra) && n.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(node.name) || "left" === key && ("async" === node.name && !parent.await || "let" === node.name) && "ForOfStatement" === parent.type) return !0;
    if ("let" === node.name) {
      let t = null == (r = e.findAncestor(e => "ForOfStatement" === e.type)) ? void 0 : r.left;
      if (t && eL(t, e => e === node)) return !0;
    }
    if ("object" === key && "let" === node.name && "MemberExpression" === parent.type && parent.computed && !parent.optional) {
      let t = e.findAncestor(e => "ExpressionStatement" === e.type || "ForStatement" === e.type || "ForInStatement" === e.type);
      let n = t ? "ExpressionStatement" === t.type ? t.expression : "ForStatement" === t.type ? t.init : t.left : void 0;
      if (n && eL(n, e => e === node)) return !0;
    }
    if ("expression" === key) switch (node.name) {
      case "await":
      case "interface":
      case "module":
      case "using":
      case "yield":
      case "let":
      case "type":
        {
          let t = e.findAncestor(e => !e8(e));
          if (t !== parent && "ExpressionStatement" === t.type) return !0;
        }
    }
    return !1;
  }
  if ("ObjectExpression" === node.type || "FunctionExpression" === node.type || "ClassExpression" === node.type || "DoExpression" === node.type) {
    let t = null == (i = e.findAncestor(e => "ExpressionStatement" === e.type)) ? void 0 : i.expression;
    if (t && eL(t, e => e === node)) return !0;
  }
  if ("ObjectExpression" === node.type) {
    let t = null == (a = e.findAncestor(e => "ArrowFunctionExpression" === e.type)) ? void 0 : a.body;
    if (t && "SequenceExpression" !== t.type && "AssignmentExpression" !== t.type && eL(t, e => e === node)) return !0;
  }
  switch (parent.type) {
    case "ParenthesizedExpression":
      return !1;
    case "ClassDeclaration":
    case "ClassExpression":
      if ("superClass" === key && ("ArrowFunctionExpression" === node.type || "AssignmentExpression" === node.type || "AwaitExpression" === node.type || "BinaryExpression" === node.type || "ConditionalExpression" === node.type || "LogicalExpression" === node.type || "NewExpression" === node.type || "ObjectExpression" === node.type || "SequenceExpression" === node.type || "TaggedTemplateExpression" === node.type || "UnaryExpression" === node.type || "UpdateExpression" === node.type || "YieldExpression" === node.type || "TSNonNullExpression" === node.type || "ClassExpression" === node.type && B(node.decorators))) return !0;
      break;
    case "ExportDefaultDeclaration":
      return function e(t, n) {
        let {
          node: _node,
          parent: _parent2
        } = t;
        return "FunctionExpression" === _node.type || "ClassExpression" === _node.type ? "ExportDefaultDeclaration" === _parent2.type || !ry(t, n) : !(!Y(_node) || "ExportDefaultDeclaration" !== _parent2.type && ry(t, n)) && t.call(() => e(t, n), ...Q(_node));
      }(e, t) || "SequenceExpression" === node.type;
    case "Decorator":
      if ("expression" === key) {
        if (eT(node) && node.computed) return !0;
        let e = !1;
        let n = !1;
        let r = node;
        for (; r;) switch (r.type) {
          case "MemberExpression":
            n = !0;
            r = r.object;
            break;
          case "CallExpression":
            if (n || e) return "typescript" !== t.parser;
            e = !0;
            r = r.callee;
            break;
          case "Identifier":
            return !1;
          case "TaggedTemplateExpression":
            return "typescript" !== t.parser;
          default:
            return !0;
        }
        return !0;
      }
      break;
    case "TypeAnnotation":
      if (e.match(void 0, void 0, (e, t) => "returnType" === t && "ArrowFunctionExpression" === e.type) && X(node, e => "ObjectTypeAnnotation" === e.type && X(e, e => "FunctionTypeAnnotation" === e.type))) return !0;
      break;
    case "BinaryExpression":
      if ("left" === key && ("in" === parent.operator || "instanceof" === parent.operator) && "UnaryExpression" === node.type) return !0;
  }
  switch (node.type) {
    case "UpdateExpression":
      if ("UnaryExpression" === parent.type) return node.prefix && ("++" === node.operator && "+" === parent.operator || "--" === node.operator && "-" === parent.operator);
    case "UnaryExpression":
      switch (parent.type) {
        case "UnaryExpression":
          return node.operator === parent.operator && ("+" === node.operator || "-" === node.operator);
        case "BindExpression":
        case "TaggedTemplateExpression":
        case "TSNonNullExpression":
          return !0;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "BinaryExpression":
          return "left" === key && "**" === parent.operator;
        default:
          return !1;
      }
    case "BinaryExpression":
      if ("UpdateExpression" === parent.type || "in" === node.operator && function (e) {
        let t = 0;
        let {
          node: _node2
        } = e;
        for (; _node2;) {
          let r = e.getParentNode(t++);
          if (r?.type === "ForStatement" && r.init === _node2) return !0;
          n = r;
        }
        return !1;
      }(e)) return !0;
      if ("|>" === node.operator && null != (o = node.extra) && o.parenthesized) {
        let t = e.grandparent;
        if ("BinaryExpression" === t.type && "|>" === t.operator) return !0;
      }
    case "TSTypeAssertion":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
    case "LogicalExpression":
      switch (parent.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
          return !e8(node);
        case "ConditionalExpression":
          return e8(node);
        case "CallExpression":
        case "NewExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "ClassExpression":
        case "ClassDeclaration":
          return "superClass" === key;
        case "TSTypeAssertion":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "JSXSpreadAttribute":
        case "SpreadElement":
        case "BindExpression":
        case "AwaitExpression":
        case "TSNonNullExpression":
        case "UpdateExpression":
          return !0;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        case "AssignmentExpression":
        case "AssignmentPattern":
          return "left" === key && ("TSTypeAssertion" === node.type || e8(node));
        case "LogicalExpression":
          if ("LogicalExpression" === node.type) return parent.operator !== node.operator;
        case "BinaryExpression":
          {
            let {
              operator,
              type
            } = node;
            if (!operator && "TSTypeAssertion" !== type) return !0;
            let n = eK(operator);
            let r = parent.operator;
            let i = eK(r);
            return i > n || "right" === key && i === n || i === n && !eU(r, operator) || (i < n && "%" === operator ? "+" === r || "-" === r : !!(eq[r] || "|" === r || "^" === r || "&" === r));
          }
        default:
          return !1;
      }
    case "SequenceExpression":
      switch (parent.type) {
        case "ReturnStatement":
        case "ForStatement":
          return !1;
        case "ExpressionStatement":
          return "expression" !== key;
        case "ArrowFunctionExpression":
          return "body" !== key;
        default:
          return !0;
      }
    case "YieldExpression":
      if ("AwaitExpression" === parent.type) return !0;
    case "AwaitExpression":
      switch (parent.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "SpreadElement":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "BindExpression":
          return !0;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "ConditionalExpression":
          return "test" === key;
        case "BinaryExpression":
          return !(!node.argument && "|>" === parent.operator);
        default:
          return !1;
      }
    case "TSFunctionType":
      if (e.match(e => "TSFunctionType" === e.type, (e, t) => "typeAnnotation" === t && "TSTypeAnnotation" === e.type, (e, t) => "returnType" === t && "ArrowFunctionExpression" === e.type)) return !0;
    case "TSConditionalType":
    case "TSConstructorType":
      if ("extendsType" === key && "TSConditionalType" === parent.type) {
        if ("TSConditionalType" === node.type) return !0;
        let {
          typeAnnotation
        } = node.returnType || node.typeAnnotation;
        if ("TSTypePredicate" === typeAnnotation.type && typeAnnotation.typeAnnotation && (e = typeAnnotation.typeAnnotation.typeAnnotation), "TSInferType" === typeAnnotation.type && typeAnnotation.typeParameter.constraint) return !0;
      }
      if ("checkType" === key && "TSConditionalType" === parent.type) return !0;
    case "TSUnionType":
    case "TSIntersectionType":
      if (("TSUnionType" === parent.type || "TSIntersectionType" === parent.type) && parent.types.length > 1 && (!node.types || node.types.length > 1)) return !0;
    case "TSInferType":
      if ("TSInferType" === node.type && "TSRestType" === parent.type) break;
    case "TSTypeOperator":
      return "TSArrayType" === parent.type || "TSOptionalType" === parent.type || "TSRestType" === parent.type || "objectType" === key && "TSIndexedAccessType" === parent.type || "TSTypeOperator" === parent.type || "TSTypeAnnotation" === parent.type && e.grandparent.type.startsWith("TSJSDoc");
    case "TSTypeQuery":
      return "objectType" === key && "TSIndexedAccessType" === parent.type || "elementType" === key && "TSArrayType" === parent.type;
    case "TypeofTypeAnnotation":
      return "objectType" === key && ("IndexedAccessType" === parent.type || "OptionalIndexedAccessType" === parent.type) || "elementType" === key && "ArrayTypeAnnotation" === parent.type;
    case "ArrayTypeAnnotation":
      return "NullableTypeAnnotation" === parent.type;
    case "IntersectionTypeAnnotation":
    case "UnionTypeAnnotation":
      return "ArrayTypeAnnotation" === parent.type || "NullableTypeAnnotation" === parent.type || "IntersectionTypeAnnotation" === parent.type || "UnionTypeAnnotation" === parent.type || "objectType" === key && ("IndexedAccessType" === parent.type || "OptionalIndexedAccessType" === parent.type);
    case "InferTypeAnnotation":
    case "NullableTypeAnnotation":
      return "ArrayTypeAnnotation" === parent.type || "objectType" === key && ("IndexedAccessType" === parent.type || "OptionalIndexedAccessType" === parent.type);
    case "FunctionTypeAnnotation":
      {
        if (e.match(void 0, (e, t) => "typeAnnotation" === t && "TypeAnnotation" === e.type, (e, t) => "returnType" === t && "ArrowFunctionExpression" === e.type) || e.match(void 0, (e, t) => "typeAnnotation" === t && "TypePredicate" === e.type, (e, t) => "typeAnnotation" === t && "TypeAnnotation" === e.type, (e, t) => "returnType" === t && "ArrowFunctionExpression" === e.type)) return !0;
        let t = "NullableTypeAnnotation" === parent.type ? e.grandparent : parent;
        return "UnionTypeAnnotation" === t.type || "IntersectionTypeAnnotation" === t.type || "ArrayTypeAnnotation" === t.type || "objectType" === key && ("IndexedAccessType" === t.type || "OptionalIndexedAccessType" === t.type) || "checkType" === key && "ConditionalTypeAnnotation" === parent.type || "extendsType" === key && "ConditionalTypeAnnotation" === parent.type && "InferTypeAnnotation" === node.returnType.type && node.returnType.typeParameter.bound || "NullableTypeAnnotation" === t.type || "FunctionTypeParam" === parent.type && null === parent.name && eV(node).some(e => {
          var t;
          return (null == (t = e.typeAnnotation) ? void 0 : t.type) === "NullableTypeAnnotation";
        });
      }
    case "ConditionalTypeAnnotation":
      if ("extendsType" === key && "ConditionalTypeAnnotation" === parent.type && "ConditionalTypeAnnotation" === node.type || "checkType" === key && "ConditionalTypeAnnotation" === parent.type) return !0;
    case "OptionalIndexedAccessType":
      return "objectType" === key && "IndexedAccessType" === parent.type;
    case "StringLiteral":
    case "NumericLiteral":
    case "Literal":
      if ("string" == typeof node.value && "ExpressionStatement" === parent.type && !parent.directive) {
        let t = e.grandparent;
        return "Program" === t.type || "BlockStatement" === t.type;
      }
      return "object" === key && "MemberExpression" === parent.type && "number" == typeof node.value;
    case "AssignmentExpression":
      {
        let t = e.grandparent;
        return "body" === key && "ArrowFunctionExpression" === parent.type || ("key" !== key || "ClassProperty" !== parent.type && "PropertyDefinition" !== parent.type || !parent.computed) && ("init" !== key && "update" !== key || "ForStatement" !== parent.type) && ("ExpressionStatement" === parent.type ? "ObjectPattern" === node.left.type : !("key" === key && "TSPropertySignature" === parent.type || "AssignmentExpression" === parent.type || "SequenceExpression" === parent.type && "ForStatement" === t.type && (t.init === parent || t.update === parent) || "value" === key && "Property" === parent.type && "ObjectPattern" === t.type && t.properties.includes(parent) || "NGChainedExpression" === parent.type));
      }
    case "ConditionalExpression":
      switch (parent.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "SpreadElement":
        case "BinaryExpression":
        case "LogicalExpression":
        case "NGPipeExpression":
        case "ExportDefaultDeclaration":
        case "AwaitExpression":
        case "JSXSpreadAttribute":
        case "TSTypeAssertion":
        case "TypeCastExpression":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "TSNonNullExpression":
          return !0;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "ConditionalExpression":
          return !t.experimentalTernaries && "test" === key;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        default:
          return !1;
      }
    case "FunctionExpression":
      switch (parent.type) {
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "TaggedTemplateExpression":
          return !0;
        default:
          return !1;
      }
    case "ArrowFunctionExpression":
      switch (parent.type) {
        case "BinaryExpression":
          return "|>" !== parent.operator || (null == (s = node.extra) ? void 0 : s.parenthesized);
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return "callee" === key;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return "object" === key;
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "TSNonNullExpression":
        case "BindExpression":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "AwaitExpression":
        case "TSTypeAssertion":
          return !0;
        case "ConditionalExpression":
          return "test" === key;
        default:
          return !1;
      }
    case "ClassExpression":
      if ("NewExpression" === parent.type) return "callee" === key;
      break;
    case "OptionalMemberExpression":
    case "OptionalCallExpression":
    case "CallExpression":
    case "MemberExpression":
      if (function (e) {
        let {
          node: _node3,
          parent: _parent3,
          grandparent,
          key: _key2
        } = e;
        return !!(("OptionalMemberExpression" === _node3.type || "OptionalCallExpression" === _node3.type) && ("object" === _key2 && "MemberExpression" === _parent3.type || "callee" === _key2 && ("CallExpression" === _parent3.type || "NewExpression" === _parent3.type) || "TSNonNullExpression" === _parent3.type && "MemberExpression" === grandparent.type && grandparent.object === _parent3) || e.match(() => "CallExpression" === _node3.type || "MemberExpression" === _node3.type, (e, t) => "expression" === t && "ChainExpression" === e.type) && (e.match(void 0, void 0, (e, t) => "callee" === t && ("CallExpression" === e.type && !e.optional || "NewExpression" === e.type) || "object" === t && "MemberExpression" === e.type && !e.optional) || e.match(void 0, void 0, (e, t) => "expression" === t && "TSNonNullExpression" === e.type, (e, t) => "object" === t && "MemberExpression" === e.type)) || e.match(() => "CallExpression" === _node3.type || "MemberExpression" === _node3.type, (e, t) => "expression" === t && "TSNonNullExpression" === e.type, (e, t) => "expression" === t && "ChainExpression" === e.type, (e, t) => "object" === t && "MemberExpression" === e.type));
      }(e)) return !0;
    case "TaggedTemplateExpression":
    case "TSNonNullExpression":
      if ("callee" === key && ("BindExpression" === parent.type || "NewExpression" === parent.type)) {
        let e = node;
        for (; e;) switch (e.type) {
          case "CallExpression":
          case "OptionalCallExpression":
            return !0;
          case "MemberExpression":
          case "OptionalMemberExpression":
          case "BindExpression":
            e = e.object;
            break;
          case "TaggedTemplateExpression":
            e = e.tag;
            break;
          case "TSNonNullExpression":
            e = e.expression;
            break;
          default:
            return !1;
        }
      }
      break;
    case "BindExpression":
      return "callee" === key && ("BindExpression" === parent.type || "NewExpression" === parent.type) || "object" === key && eT(parent);
    case "NGPipeExpression":
      return !("NGRoot" === parent.type || "NGMicrosyntaxExpression" === parent.type || "ObjectProperty" === parent.type && !(null != (_ = node.extra) && _.parenthesized) || et(parent) || "arguments" === key && ev(parent) || "right" === key && "NGPipeExpression" === parent.type || "property" === key && "MemberExpression" === parent.type || "AssignmentExpression" === parent.type);
    case "JSXFragment":
    case "JSXElement":
      return "callee" === key || "left" === key && "BinaryExpression" === parent.type && "<" === parent.operator || !et(parent) && "ArrowFunctionExpression" !== parent.type && "AssignmentExpression" !== parent.type && "AssignmentPattern" !== parent.type && "BinaryExpression" !== parent.type && "NewExpression" !== parent.type && "ConditionalExpression" !== parent.type && "ExpressionStatement" !== parent.type && "JsExpressionRoot" !== parent.type && "JSXAttribute" !== parent.type && "JSXElement" !== parent.type && "JSXExpressionContainer" !== parent.type && "JSXFragment" !== parent.type && "LogicalExpression" !== parent.type && !ev(parent) && !e4(parent) && "ReturnStatement" !== parent.type && "ThrowStatement" !== parent.type && "TypeCastExpression" !== parent.type && "VariableDeclarator" !== parent.type && "YieldExpression" !== parent.type;
    case "TSInstantiationExpression":
      return "object" === key && eT(parent);
  }
  return !1;
}
var rg = V(["BlockStatement", "BreakStatement", "ClassBody", "ClassDeclaration", "ClassMethod", "ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ContinueStatement", "DebuggerStatement", "DeclareClass", "DeclareExportAllDeclaration", "DeclareExportDeclaration", "DeclareFunction", "DeclareInterface", "DeclareModule", "DeclareModuleExports", "DeclareVariable", "DeclareEnum", "DoWhileStatement", "EnumDeclaration", "ExportAllDeclaration", "ExportDefaultDeclaration", "ExportNamedDeclaration", "ExpressionStatement", "ForInStatement", "ForOfStatement", "ForStatement", "FunctionDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "MethodDefinition", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TSDeclareFunction", "TSEnumDeclaration", "TSImportEqualsDeclaration", "TSInterfaceDeclaration", "TSModuleDeclaration", "TSNamespaceExportDeclaration", "TypeAlias", "VariableDeclaration", "WhileStatement", "WithStatement"]);
var rb = function (e, t) {
  let n = t - 1;
  n = w(e, n, {
    backwards: !0
  });
  n = F(e, n, {
    backwards: !0
  });
  n = w(e, n, {
    backwards: !0
  });
  let r = F(e, n, {
    backwards: !0
  });
  return n !== r;
};
var rD = () => !0;
function rx(e, t) {
  e.node.printed = !0;
  return t.printer.printComment(e, t);
}
function rv(e, t, n = {}) {
  let {
    node
  } = e;
  if (!B(node?.comments)) return "";
  let {
    indent = !1,
    marker,
    filter = rD
  } = n;
  let s = [];
  if (e.each(({
    node: n
  }) => {
    n.leading || n.trailing || n.marker !== marker || !filter(n) || s.push(rx(e, t));
  }, "comments"), 0 === s.length) return "";
  let _ = tq(tL, s);
  return indent ? tC([tL, _]) : _;
}
function rT(e, t) {
  let n = e.node;
  if (!n) return {};
  let r = t[Symbol.$$for("printedComments")];
  if (0 === (n.comments || []).filter(e => !r.has(e)).length) return {
    leading: "",
    trailing: ""
  };
  let i = [];
  let a = [];
  let o;
  e.each(() => {
    let n = e.node;
    if (null != r && r.has(n)) return;
    let {
      leading,
      trailing
    } = n;
    leading ? i.push(function (e, t) {
      var n;
      let r = e.node;
      let i = [rx(e, t)];
      let {
        printer,
        originalText,
        locStart,
        locEnd
      } = t;
      if (null == (n = printer.isBlockComment) ? void 0 : n.call(printer, r)) {
        let e = P(originalText, locEnd(r)) ? P(originalText, locStart(r), {
          backwards: !0
        }) ? tL : tj : " ";
        i.push(e);
      } else i.push(tL);
      let l = F(originalText, w(originalText, locEnd(r)));
      !1 !== l && P(originalText, l) && i.push(tL);
      return i;
    }(e, t)) : trailing && (o = function (e, t, n) {
      var r;
      let i = e.node;
      let a = rx(e, t);
      let {
        printer,
        originalText,
        locStart
      } = t;
      let l = null == (r = printer.isBlockComment) ? void 0 : r.call(printer, i);
      return null != n && n.hasLineSuffix && !(null != n && n.isBlock) || P(originalText, locStart(i), {
        backwards: !0
      }) ? {
        doc: tN([tL, rb(originalText, locStart(i)) ? tL : "", a]),
        isBlock: l,
        hasLineSuffix: !0
      } : !l || null != n && n.hasLineSuffix ? {
        doc: [tN([" ", a]), tO],
        isBlock: l,
        hasLineSuffix: !0
      } : {
        doc: [" ", a],
        isBlock: l,
        hasLineSuffix: !1
      };
    }(e, t, o), a.push(o.doc));
  }, "comments");
  return {
    leading: i,
    trailing: a
  };
}
function rS(e, t, n) {
  let {
    leading,
    trailing
  } = rT(e, n);
  return leading || trailing ? tZ(t, e => [leading, e, trailing]) : t;
}
var rC;
var rE = class extends Error {
  name = "UnexpectedNodeError";
  constructor(e, t, n = "type") {
    super(`Unexpected ${t} node ${n}: ${JSON.stringify(e[n])}.`);
    this.node = e;
  }
};
var rw = class {
  constructor(e) {
    d(this, rC, void 0);
    m(this, rC, new Set(e));
  }
  getLeadingWhitespaceCount(e) {
    let t = p(this, rC);
    let n = 0;
    for (let r = 0; r < e.length && t.has(e.charAt(r)); r++) n++;
    return n;
  }
  getTrailingWhitespaceCount(e) {
    let t = p(this, rC);
    let n = 0;
    for (let r = e.length - 1; r >= 0 && t.has(e.charAt(r)); r--) n++;
    return n;
  }
  getLeadingWhitespace(e) {
    let t = this.getLeadingWhitespaceCount(e);
    return e.slice(0, t);
  }
  getTrailingWhitespace(e) {
    let t = this.getTrailingWhitespaceCount(e);
    return e.slice(e.length - t);
  }
  hasLeadingWhitespace(e) {
    return p(this, rC).has(e.charAt(0));
  }
  hasTrailingWhitespace(e) {
    return p(this, rC).has(b(!1, e, -1));
  }
  trimStart(e) {
    let t = this.getLeadingWhitespaceCount(e);
    return e.slice(t);
  }
  trimEnd(e) {
    let t = this.getTrailingWhitespaceCount(e);
    return e.slice(0, e.length - t);
  }
  trim(e) {
    return this.trimEnd(this.trimStart(e));
  }
  split(e, t = !1) {
    let n = `[${function (e) {
      if ("string" != typeof e) throw TypeError("Expected a string");
      return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }([...p(this, rC)].join(""))}]+`;
    let r = new RegExp(t ? `(${n})` : n);
    return e.split(r);
  }
  hasWhitespaceCharacter(e) {
    let t = p(this, rC);
    return Array.prototype.some.call(e, e => t.has(e));
  }
  hasNonWhitespaceCharacter(e) {
    let t = p(this, rC);
    return Array.prototype.some.call(e, e => !t.has(e));
  }
  isWhitespaceOnly(e) {
    let t = p(this, rC);
    return Array.prototype.every.call(e, e => t.has(e));
  }
};
rC = new WeakMap();
var rA = new rw(` 
\r	`);
var rk = e => "" === e || e === tj || e === tL || e === tM;
function rF(e, t, n, r) {
  return e ? "" : ("JSXElement" !== n.type || n.closingElement) && (r?.type !== "JSXElement" || r.closingElement) ? tM : 1 === t.length ? tM : tL;
}
function rP(e, t, n, r) {
  return e ? tL : 1 === t.length && ("JSXElement" !== n.type || n.closingElement) && (r?.type !== "JSXElement" || r.closingElement) ? tM : tL;
}
var rN = new Set(["ArrayExpression", "TupleExpression", "JSXAttribute", "JSXElement", "JSXExpressionContainer", "JSXFragment", "ExpressionStatement", "CallExpression", "OptionalCallExpression", "ConditionalExpression", "JsExpressionRoot"]);
function rI(e, t, n) {
  let {
    node
  } = e;
  if (node.type.startsWith("JSX")) switch (node.type) {
    case "JSXAttribute":
      return function (e, t, n) {
        let {
          node: _node4
        } = e;
        let i = [];
        if (i.push(n("name")), _node4.value) {
          let a;
          if (ea(_node4.value)) {
            let n = g(!1, g(!1, ej(_node4.value).slice(1, -1), "&apos;", "'"), "&quot;", '"');
            let i = j(n, t.jsxSingleQuote);
            n = '"' === i ? g(!1, n, '"', "&quot;") : g(!1, n, "'", "&apos;");
            a = e.call(() => rS(e, tY(i + n + i), t), "value");
          } else a = n("value");
          i.push("=", a);
        }
        return i;
      }(e, t, n);
    case "JSXIdentifier":
      return node.name;
    case "JSXNamespacedName":
      return tq(":", [n("namespace"), n("name")]);
    case "JSXMemberExpression":
      return tq(".", [n("object"), n("property")]);
    case "JSXSpreadAttribute":
    case "JSXSpreadChild":
      return function (e, t, n) {
        let {
          node: _node5
        } = e;
        return ["{", e.call(({
          node: r
        }) => {
          let i = ["...", n()];
          return e1(r) && nK(e) ? [tC([tM, rS(e, i, t)]), tM] : i;
        }, "JSXSpreadAttribute" === _node5.type ? "argument" : "expression"), "}"];
      }(e, t, n);
    case "JSXExpressionContainer":
      return function (e, t, n) {
        let {
          node: _node6
        } = e;
        let i = (e, t) => "JSXEmptyExpression" === e.type || !e1(e) && (et(e) || en(e) || "ArrowFunctionExpression" === e.type || "AwaitExpression" === e.type && (i(e.argument, e) || "JSXElement" === e.argument.type) || ev(e) || "ChainExpression" === e.type && ev(e.expression) || "FunctionExpression" === e.type || "TemplateLiteral" === e.type || "TaggedTemplateExpression" === e.type || "DoExpression" === e.type || ep(t) && ("ConditionalExpression" === e.type || ef(e)));
        return i(_node6.expression, e.parent) ? tw(["{", n("expression"), tI, "}"]) : tw(["{", tC([tM, n("expression")]), tM, tI, "}"]);
      }(e, 0, n);
    case "JSXFragment":
    case "JSXElement":
      let i;
      i = rS(e, function (e, t, n) {
        var r;
        var i;
        var a;
        var o;
        let s;
        let {
          node: _node7
        } = e;
        if ("JSXElement" === _node7.type && function (e) {
          if (0 === e.children.length) return !0;
          if (e.children.length > 1) return !1;
          let t = e.children[0];
          return "JSXText" === t.type && !rO(t);
        }(_node7)) return [n("openingElement"), n("closingElement")];
        let l = n("JSXElement" === _node7.type ? "openingElement" : "openingFragment");
        let u = n("JSXElement" === _node7.type ? "closingElement" : "closingFragment");
        if (1 === _node7.children.length && "JSXExpressionContainer" === _node7.children[0].type && ("TemplateLiteral" === _node7.children[0].expression.type || "TaggedTemplateExpression" === _node7.children[0].expression.type)) return [l, ...e.map(n, "children"), u];
        _node7.children = _node7.children.map(e => "JSXExpressionContainer" === e.type && ea(e.expression) && " " === e.expression.value && !e1(e.expression) ? {
          type: "JSXText",
          value: " ",
          raw: " "
        } : e);
        let c = _node7.children.some(ep);
        let p = _node7.children.filter(e => "JSXExpressionContainer" === e.type).length > 1;
        let d = "JSXElement" === _node7.type && _node7.openingElement.attributes.length > 1;
        let m = t$(l) || c || d || p;
        let f = "mdx" === e.parent.rootMarker;
        let h = t.singleQuote ? "{' '}" : '{" "}';
        let y = f ? " " : tF([h, tM], " ");
        o = (null == (i = null == (r = _node7.openingElement) ? void 0 : r.name) ? void 0 : i.name) === "fbt";
        s = [];
        e.each(({
          node: e,
          next: t
        }) => {
          if ("JSXText" === e.type) {
            let n = ej(e);
            if (rO(e)) {
              let r;
              let i = rA.split(n, !0);
              if ("" === i[0] && (s.push(""), i.shift(), /\n/.test(i[0]) ? s.push(rP(o, i[1], e, t)) : s.push(y), i.shift()), "" === b(!1, i, -1) && (i.pop(), r = i.pop()), 0 === i.length) return;
              for (let [e, t] of i.entries()) e % 2 == 1 ? s.push(tj) : s.push(t);
              void 0 !== r ? /\n/.test(r) ? s.push(rP(o, b(!1, s, -1), e, t)) : s.push(y) : s.push(rF(o, b(!1, s, -1), e, t));
            } else /\n/.test(n) ? n.match(/\n/g).length > 1 && s.push("", tL) : s.push("", y);
          } else {
            let r = n();
            if (s.push(r), t && rO(t)) {
              let n = rA.trim(ej(t));
              let [r] = rA.split(n);
              s.push(rF(o, r, e, t));
            } else s.push(tL);
          }
        }, "children");
        let g = s;
        let D = _node7.children.some(e => rO(e));
        for (let e = g.length - 2; e >= 0; e--) {
          let t = "" === g[e] && "" === g[e + 1];
          let n = g[e] === tL && "" === g[e + 1] && g[e + 2] === tL;
          let r = (g[e] === tM || g[e] === tL) && "" === g[e + 1] && g[e + 2] === y;
          let i = g[e] === y && "" === g[e + 1] && (g[e + 2] === tM || g[e + 2] === tL);
          let a = g[e] === y && "" === g[e + 1] && g[e + 2] === y;
          let o = g[e] === tM && "" === g[e + 1] && g[e + 2] === tL || g[e] === tL && "" === g[e + 1] && g[e + 2] === tM;
          n && D || t || r || a || o ? g.splice(e, 2) : i && g.splice(e + 1, 2);
        }
        for (; g.length > 0 && rk(b(!1, g, -1));) g.pop();
        for (; g.length > 1 && rk(g[0]) && rk(g[1]);) {
          g.shift();
          g.shift();
        }
        let x = [];
        for (let [e, t] of g.entries()) {
          if (t === y) {
            if (1 === e && "" === g[e - 1]) {
              if (2 === g.length) {
                x.push(h);
                continue;
              }
              x.push([h, tL]);
              continue;
            }
            if (e === g.length - 1 || "" === g[e - 1] && g[e - 2] === tL) {
              x.push(h);
              continue;
            }
          }
          x.push(t);
          t$(t) && (m = !0);
        }
        let v = D ? tk(x) : tw(x, {
          shouldBreak: !0
        });
        if ((null == (a = t.cursorNode) ? void 0 : a.type) === "JSXText" && _node7.children.includes(t.cursorNode) && (v = [tJ, v, tJ]), f) return v;
        let T = tw([l, tC([tL, v]), tL, u]);
        return m ? T : tA([tw([l, ...g, u]), T]);
      }(e, t, n), t);
      return function (e, t, n) {
        let {
          parent
        } = e;
        if (rN.has(parent.type)) return t;
        let i = e.match(void 0, e => "ArrowFunctionExpression" === e.type, ev, e => "JSXExpressionContainer" === e.type);
        let a = ry(e, n);
        return tw([a ? "" : tF("("), tC([tM, t]), tM, a ? "" : tF(")")], {
          shouldBreak: i
        });
      }(e, i, t);
    case "JSXOpeningElement":
      return function (e, t, n) {
        var r;
        var i;
        let a;
        let {
          node: _node8
        } = e;
        let s = e1(_node8.name) || e1(_node8.typeParameters) || e1(_node8.typeArguments);
        if (_node8.selfClosing && 0 === _node8.attributes.length && !s) return ["<", n("name"), _node8.typeArguments ? n("typeArguments") : n("typeParameters"), " />"];
        if ((null == (r = _node8.attributes) ? void 0 : r.length) === 1 && _node8.attributes[0].value && ea(_node8.attributes[0].value) && !_node8.attributes[0].value.value.includes(`
`) && !s && !e1(_node8.attributes[0])) return tw(["<", n("name"), _node8.typeArguments ? n("typeArguments") : n("typeParameters"), " ", ...e.map(n, "attributes"), _node8.selfClosing ? " />" : ">"]);
        let _ = null == (i = _node8.attributes) ? void 0 : i.some(e => e.value && ea(e.value) && e.value.value.includes(`
`));
        let l = t.singleAttributePerLine && _node8.attributes.length > 1 ? tL : tj;
        return tw(["<", n("name"), _node8.typeArguments ? n("typeArguments") : n("typeParameters"), tC(e.map(() => [l, n()], "attributes")), ...(_node8.selfClosing ? [tj, "/>"] : (a = _node8.attributes.length > 0 && e1(b(!1, _node8.attributes, -1), eZ.Trailing), 0 === _node8.attributes.length && !s || (t.bracketSameLine || t.jsxBracketSameLine) && (!s || _node8.attributes.length > 0) && !a) ? [">"] : [tM, ">"])], {
          shouldBreak: _
        });
      }(e, t, n);
    case "JSXClosingElement":
      return function (e, t, n) {
        let {
          node: _node9
        } = e;
        let i = [];
        i.push("</");
        let a = n("name");
        e1(_node9.name, eZ.Leading | eZ.Line) ? i.push(tC([tL, a]), tL) : e1(_node9.name, eZ.Leading | eZ.Block) ? i.push(" ", a) : i.push(a);
        i.push(">");
        return i;
      }(e, 0, n);
    case "JSXOpeningFragment":
    case "JSXClosingFragment":
      return function (e, t) {
        let {
          node: _node0
        } = e;
        let r = e1(_node0);
        let i = e1(_node0, eZ.Line);
        let a = "JSXOpeningFragment" === _node0.type;
        return [a ? "<" : "</", tC([i ? tL : r && !a ? " " : "", rv(e, t)]), i ? tL : "", ">"];
      }(e, t);
    case "JSXEmptyExpression":
      return function (e, t) {
        let {
          node: _node1
        } = e;
        let r = e1(_node1, eZ.Line);
        return [rv(e, t, {
          indent: r
        }), r ? tL : ""];
      }(e, t);
    case "JSXText":
      throw Error("JSXText should be handled by JSXElement");
    default:
      throw new rE(node, "JSX");
  }
}
function rO(e) {
  return "JSXText" === e.type && (rA.hasNonWhitespaceCharacter(ej(e)) || !/\n/.test(ej(e)));
}
var rB = function (e) {
  return eQ(e.node) || function (e) {
    let {
      node,
      parent
    } = e;
    if (!ep(node) || !ep(parent)) return !1;
    let {
      index,
      siblings
    } = e;
    let a;
    for (let e = index; e > 0; e--) {
      let t = siblings[e - 1];
      if (!("JSXText" === t.type && !rO(t))) {
        a = t;
        break;
      }
    }
    return a?.type === "JSXExpressionContainer" && "JSXEmptyExpression" === a.expression.type && eQ(a.expression);
  }(e);
};
var rj = 0;
function rM(e, t, n) {
  var r;
  let {
    node,
    parent,
    grandparent,
    key
  } = e;
  let _ = "body" !== key && ("IfStatement" === parent.type || "WhileStatement" === parent.type || "SwitchStatement" === parent.type || "DoWhileStatement" === parent.type);
  let l = "|>" === node.operator && (null == (r = e.root.extra) ? void 0 : r.__isUsingHackPipeline);
  let u = function e(t, n, r, i, a) {
    var o;
    let {
      node: _node10
    } = t;
    if (!ef(_node10)) return [tw(n())];
    let _ = [];
    eU(_node10.operator, _node10.left.operator) ? _ = t.call(t => e(t, n, r, !0, a), "left") : _.push(tw(n("left")));
    let l = rL(_node10);
    let u = ("|>" === _node10.operator || "NGPipeExpression" === _node10.type || ("__vue_expression" === r.parser || "__vue_ts_expression" === r.parser) && rR(t.node) && !t.hasAncestor(e => !rR(e) && "JsExpressionRoot" !== e.type)) && !ew(r.originalText, _node10.right);
    let c = "NGPipeExpression" === _node10.type ? "|" : _node10.operator;
    let p = "NGPipeExpression" === _node10.type && _node10.$$arguments.length > 0 ? tw(tC([tM, ": ", tq([tj, ": "], t.map(() => tE(2, tw(n())), "arguments"))])) : "";
    let d;
    if (l) d = [c, " ", n("right"), p];else {
      let i = "|>" === c && (null == (o = t.root.extra) ? void 0 : o.__isUsingHackPipeline) ? t.call(t => e(t, n, r, !0, a), "right") : n("right");
      d = [u ? tj : "", c, u ? " " : tj, i, p];
    }
    let {
      parent: _parent4
    } = t;
    let f = e1(_node10.left, eZ.Trailing | eZ.Line);
    let h = f || !(a && "LogicalExpression" === _node10.type) && _parent4.type !== _node10.type && _node10.left.type !== _node10.type && _node10.right.type !== _node10.type;
    if (_.push(u ? "" : " ", h ? tw(d, {
      shouldBreak: f
    }) : d), i && e1(_node10)) {
      let e = tX(rS(t, _, r));
      return Array.isArray(e) || e.type === tu ? tz(e) : [e];
    }
    return _;
  }(e, n, t, !1, _);
  if (_) return u;
  if (l) return tw(u);
  if (ev(parent) && parent.callee === node || "UnaryExpression" === parent.type || eT(parent) && !parent.computed) return tw([tC([tM, ...u]), tM]);
  let c = "ReturnStatement" === parent.type || "ThrowStatement" === parent.type || "JSXExpressionContainer" === parent.type && "JSXAttribute" === grandparent.type || "|" !== node.operator && "JsExpressionRoot" === parent.type || "NGPipeExpression" !== node.type && ("NGRoot" === parent.type && "__ng_binding" === t.parser || "NGMicrosyntaxExpression" === parent.type && "NGMicrosyntax" === grandparent.type && 1 === grandparent.body.length) || node === parent.body && "ArrowFunctionExpression" === parent.type || node !== parent.body && "ForStatement" === parent.type || "ConditionalExpression" === parent.type && "ReturnStatement" !== grandparent.type && "ThrowStatement" !== grandparent.type && !ev(grandparent) || "TemplateLiteral" === parent.type;
  let p = "AssignmentExpression" === parent.type || "VariableDeclarator" === parent.type || "ClassProperty" === parent.type || "PropertyDefinition" === parent.type || "TSAbstractPropertyDefinition" === parent.type || "ClassPrivateProperty" === parent.type || e4(parent);
  let d = ef(node.left) && eU(node.operator, node.left.operator);
  if (c || rL(node) && !d || !rL(node) && p) return tw(u);
  if (0 === u.length) return "";
  let m = ep(node.right);
  let f = u.findIndex(e => "string" != typeof e && !Array.isArray(e) && e.type === tl);
  let h = u.slice(0, -1 === f ? 1 : f + 1);
  let y = u.slice(h.length, m ? -1 : void 0);
  let g = Symbol("logicalChain-" + ++rj);
  let D = tw([...h, tC(y)], {
    id: g
  });
  return m ? tw([D, tP(b(!1, u, -1), {
    groupId: g
  })]) : D;
}
function rL(e) {
  return "LogicalExpression" === e.type && !!(en(e.right) && e.right.properties.length > 0 || et(e.right) && e.right.elements.length > 0 || ep(e.right));
}
var rR = e => "BinaryExpression" === e.type && "|" === e.operator;
function rJ(e, t, n) {
  let {
    node
  } = e;
  if (node.type.startsWith("NG")) switch (node.type) {
    case "NGRoot":
      return [n("node"), e1(node.node) ? " //" + e2(node.node)[0].value.trimEnd() : ""];
    case "NGPipeExpression":
      return rM(e, t, n);
    case "NGChainedExpression":
      return tw(tq([";", tj], e.map(() => !function ({
        node: e
      }) {
        return X(e, rU);
      }(e) ? ["(", n(), ")"] : n(), "expressions")));
    case "NGEmptyExpression":
      return "";
    case "NGMicrosyntax":
      return e.map(() => [e.isFirst ? "" : rq(e) ? " " : [";", tj], n()], "body");
    case "NGMicrosyntaxKey":
      return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(node.name) ? node.name : JSON.stringify(node.name);
    case "NGMicrosyntaxExpression":
      return [n("expression"), null === node.alias ? "" : [" as ", n("alias")]];
    case "NGMicrosyntaxKeyedExpression":
      {
        let {
          index,
          parent
        } = e;
        let a = rq(e) || (1 === index && ("then" === node.key.name || "else" === node.key.name || "as" === node.key.name) || (2 === index || 3 === index) && ("else" === node.key.name && "NGMicrosyntaxKeyedExpression" === parent.body[index - 1].type && "then" === parent.body[index - 1].key.name || "track" === node.key.name)) && "NGMicrosyntaxExpression" === parent.body[0].type;
        return [n("key"), a ? " " : ": ", n("expression")];
      }
    case "NGMicrosyntaxLet":
      return ["let ", n("key"), null === node.value ? "" : [" = ", n("value")]];
    case "NGMicrosyntaxAs":
      return [n("key"), " as ", n("alias")];
    default:
      throw new rE(node, "Angular");
  }
}
function rq({
  node: e,
  index: t
}) {
  return "NGMicrosyntaxKeyedExpression" === e.type && "of" === e.key.name && 1 === t;
}
var rU = V(["CallExpression", "OptionalCallExpression", "AssignmentExpression"]);
function rz(e, t, n) {
  let {
    node
  } = e;
  return tw([tq(tj, e.map(n, "decorators")), rK(node, t) ? tL : tj]);
}
function rK(e, t) {
  return e.decorators.some(e => P(t.originalText, J(e)));
}
function rW(e) {
  var t;
  if ("ExportDefaultDeclaration" !== e.type && "ExportNamedDeclaration" !== e.type && "DeclareExportDeclaration" !== e.type) return !1;
  let n = null == (t = e.declaration) ? void 0 : t.decorators;
  return B(n) && q(e, n[0]);
}
var rV = class extends Error {
  name = "ArgExpansionBailout";
};
function r$(e, t = !1) {
  var n;
  return en(e) && (e.properties.length > 0 || e1(e)) || et(e) && (e.elements.length > 0 || e1(e)) || "TSTypeAssertion" === e.type && r$(e.expression) || e8(e) && r$(e.expression) || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && (!e.returnType || !e.returnType.typeAnnotation || "TSTypeReference" !== e.returnType.typeAnnotation.type || "BlockStatement" === (n = e.body).type && (n.body.some(e => "EmptyStatement" !== e.type) || e1(n, eZ.Dangling))) && ("BlockStatement" === e.body.type || "ArrowFunctionExpression" === e.body.type && r$(e.body, !0) || en(e.body) || et(e.body) || !t && (ev(e.body) || "ConditionalExpression" === e.body.type) || ep(e.body)) || "DoExpression" === e.type || "ModuleExpression" === e.type;
}
var rH = function (e, t, n) {
  let {
    node
  } = e;
  let i = eH(node);
  if (0 === i.length) return ["(", rv(e, t), ")"];
  if (2 === i.length && "ArrowFunctionExpression" === i[0].type && 0 === eV(i[0]).length && "BlockStatement" === i[0].body.type && "ArrayExpression" === i[1].type && !i.some(e => e1(e))) return ["(", n(["arguments", 0]), ", ", n(["arguments", 1]), ")"];
  let a = !1;
  let o = i.length - 1;
  let s = [];
  eG(e, ({
    node: e
  }, r) => {
    let i = n();
    r === o || (e3(e, t) ? (a = !0, i = [i, ",", tL, tL]) : i = [i, ",", tj]);
    s.push(i);
  });
  let _ = !("ImportExpression" === node.type || "Import" === node.callee.type) && eM(t, "all") ? "," : "";
  function l() {
    return tw(["(", tC([tj, ...s]), _, tj, ")"], {
      shouldBreak: !0
    });
  }
  if (a || "Decorator" !== e.parent.type && function (e) {
    if (e.length <= 1) return !1;
    let t = 0;
    for (let n of e) if (eu(n)) {
      if ((t += 1) > 1) return !0;
    } else if (ev(n)) {
      for (let e of eH(n)) if (eu(e)) return !0;
    }
    return !1;
  }(i)) return l();
  if (function (e) {
    var t;
    if (2 !== e.length) return !1;
    let [n, r] = e;
    return !!("ModuleExpression" === n.type && "ObjectExpression" === (t = r).type && 1 === t.properties.length && e4(t.properties[0]) && "Identifier" === t.properties[0].key.type && "type" === t.properties[0].key.name && ea(t.properties[0].value) && "module" === t.properties[0].value.value) || !e1(n) && ("FunctionExpression" === n.type || "ArrowFunctionExpression" === n.type && "BlockStatement" === n.body.type) && "FunctionExpression" !== r.type && "ArrowFunctionExpression" !== r.type && "ConditionalExpression" !== r.type && function e(t) {
      var n;
      if ("ParenthesizedExpression" === t.type) return e(t.expression);
      if (e8(t) || "TypeCastExpression" === t.type) {
        let {
          typeAnnotation
        } = t;
        "TypeAnnotation" === typeAnnotation.type && (e = typeAnnotation.typeAnnotation);
        "TSArrayType" === typeAnnotation.type && "TSArrayType" === (e = typeAnnotation.elementType).type && (e = typeAnnotation.elementType);
        ("GenericTypeAnnotation" === typeAnnotation.type || "TSTypeReference" === typeAnnotation.type) && (null == (n = typeAnnotation.typeParameters) ? void 0 : n.params.length) === 1 && (e = typeAnnotation.typeParameters.params[0]);
        return eg(typeAnnotation) && eB(t.expression, 1);
      }
      return (!e6(t) || !(eH(t).length > 1)) && (ef(t) ? eB(t.left, 1) && eB(t.right, 1) : eo(t) || eB(t));
    }(r) && !r$(r);
  }(i)) {
    let e;
    let t = s.slice(1);
    if (t.some(t$)) return l();
    try {
      e = n(eX(node, 0), {
        expandFirstArg: !0
      });
    } catch (e) {
      if (e instanceof rV) return l();
      throw e;
    }
    return t$(e) ? [tO, tA([["(", tw(e, {
      shouldBreak: !0
    }), ", ", ...t, ")"], l()])] : tA([["(", e, ", ", ...t, ")"], ["(", tw(e, {
      shouldBreak: !0
    }), ", ", ...t, ")"], l()]);
  }
  if (function (e, t, n) {
    var r;
    var i;
    let a = b(!1, e, -1);
    if (1 === e.length) {
      let e = b(!1, t, -1);
      if (null != (r = e.label) && r.embed && (null == (i = e.label) ? void 0 : i.hug) !== !1) return !0;
    }
    let o = b(!1, e, -2);
    return !e1(a, eZ.Leading) && !e1(a, eZ.Trailing) && r$(a) && (!o || o.type !== a.type) && (2 !== e.length || "ArrowFunctionExpression" !== o.type || !et(a)) && !(e.length > 1 && iN(a, n));
  }(i, s, t)) {
    let e;
    let t = s.slice(0, -1);
    if (t.some(t$)) return l();
    try {
      e = n(eX(node, -1), {
        expandLastArg: !0
      });
    } catch (e) {
      if (e instanceof rV) return l();
      throw e;
    }
    return t$(e) ? [tO, tA([["(", ...t, tw(e, {
      shouldBreak: !0
    }), ")"], l()])] : tA([["(", ...t, e, ")"], ["(", ...t, tw(e, {
      shouldBreak: !0
    }), ")"], l()]);
  }
  let u = ["(", tC([tM, ...s]), tF(_), tM, ")"];
  return eI(e) ? u : tw(u, {
    shouldBreak: s.some(t$) || a
  });
};
var rG = e => (("ChainExpression" === e.type || "TSNonNullExpression" === e.type) && (e = e.expression), ev(e) && eH(e).length > 0);
function rX(e, t, n) {
  let r = n("property");
  let {
    node
  } = e;
  let a = iD(e);
  return node.computed ? !node.property || er(node.property) ? [a, "[", r, "]"] : tw([a, "[", tC([tM, r]), tM, "]"]) : [a, ".", r];
}
var rY = function e(t, n, r) {
  var i;
  let a;
  let o;
  if ("ChainExpression" === t.node.type) return t.call(() => e(t, n, r), "expression");
  let {
    parent
  } = t;
  let _ = !parent || "ExpressionStatement" === parent.type;
  let l = [];
  function u(e) {
    let {
      originalText
    } = n;
    let r = t5(originalText, J(e));
    return ")" === originalText.charAt(r) ? !1 !== r && O(originalText, r + 1) : e3(e, n);
  }
  let {
    node
  } = t;
  l.unshift({
    node,
    printed: [iD(t), iE(t, n, r), rH(t, n, r)]
  });
  node.callee && t.call(e => function e(t) {
    let {
      node: _node11
    } = t;
    if ("ChainExpression" === _node11.type) return t.call(() => e(t), "expression");
    if (ev(_node11) && (eh(_node11.callee) || ev(_node11.callee))) {
      let a = u(_node11);
      l.unshift({
        node: _node11,
        hasTrailingEmptyLine: a,
        printed: [rS(t, [iD(t), iE(t, n, r), rH(t, n, r)], n), a ? tL : ""]
      });
      t.call(t => e(t), "callee");
    } else eh(_node11) ? (l.unshift({
      node: _node11,
      needsParens: ry(t, n),
      printed: rS(t, eT(_node11) ? rX(t, n, r) : iw(t, n, r), n)
    }), t.call(t => e(t), "object")) : "TSNonNullExpression" === _node11.type ? (l.unshift({
      node: _node11,
      printed: rS(t, "!", n)
    }), t.call(t => e(t), "expression")) : l.unshift({
      node: _node11,
      printed: r()
    });
  }(e), "callee");
  let p = [];
  let d = [l[0]];
  let m = 1;
  for (; m < l.length && ("TSNonNullExpression" === l[m].node.type || ev(l[m].node) || eT(l[m].node) && l[m].node.computed && er(l[m].node.property)); ++m) d.push(l[m]);
  if (!ev(l[0].node)) for (; m + 1 < l.length && eh(l[m].node) && eh(l[m + 1].node); ++m) d.push(l[m]);
  p.push(d);
  d = [];
  let f = !1;
  for (; m < l.length; ++m) {
    if (f && eh(l[m].node)) {
      if (l[m].node.computed && er(l[m].node.property)) {
        d.push(l[m]);
        continue;
      }
      p.push(d);
      d = [];
      f = !1;
    }
    (ev(l[m].node) || "ImportExpression" === l[m].node.type) && (f = !0);
    d.push(l[m]);
    e1(l[m].node, eZ.Trailing) && (p.push(d), d = [], f = !1);
  }
  function h(e) {
    return /^[A-Z]|^[$_]+$/.test(e);
  }
  d.length > 0 && p.push(d);
  let y = p.length >= 2 && !e1(p[1][0].node) && function (e) {
    var t;
    let r = null == (t = e[1][0]) ? void 0 : t.node.computed;
    if (1 === e[0].length) {
      let t = e[0][0].node;
      return "ThisExpression" === t.type || "Identifier" === t.type && (h(t.name) || _ && t.name.length <= n.tabWidth || r);
    }
    let i = b(!1, e[0], -1).node;
    return eT(i) && "Identifier" === i.property.type && (h(i.property.name) || r);
  }(p);
  function g(e) {
    let t = e.map(e => e.printed);
    return e.length > 0 && b(!1, e, -1).needsParens ? ["(", ...t, ")"] : t;
  }
  let D = p.map(g);
  let x = y ? 3 : 2;
  let v = p.flat();
  let T = v.slice(1, -1).some(e => e1(e.node, eZ.Leading)) || v.slice(0, -1).some(e => e1(e.node, eZ.Trailing)) || p[x] && e1(p[x][0].node, eZ.Leading);
  if (p.length <= x && !T && !p.some(e => b(!1, e, -1).hasTrailingEmptyLine)) return eI(t) ? D : tw(D);
  let S = b(!1, p[y ? 1 : 0], -1).node;
  let C = !ev(S) && u(S);
  let E = [g(p[0]), y ? p.slice(1, 2).map(g) : "", C ? tL : "", 0 === (i = p.slice(y ? 2 : 1)).length ? "" : tC([tL, tq(tL, i.map(g))])];
  let w = l.map(({
    node: e
  }) => e).filter(ev);
  return tU({
    memberChain: !0
  }, T || w.length > 2 && w.some(e => !e.$$arguments.every(e => eB(e))) || D.slice(0, -1).some(t$) || (a = b(!1, b(!1, p, -1), -1).node, o = b(!1, D, -1), ev(a) && t$(o) && w.slice(0, -1).some(e => e.$$arguments.some(eu))) ? tw(E) : [t$(D) || C ? tO : "", tA([D, E])]);
};
function rQ(e, t, n) {
  var r;
  let {
    node,
    parent
  } = e;
  let o = "NewExpression" === node.type;
  let s = "ImportExpression" === node.type;
  let _ = iD(e);
  let l = eH(node);
  let u = 1 === l.length && eP(l[0], t.originalText);
  if (u || l.length > 0 && !o && !s && (function (e, t) {
    if ("Identifier" !== e.callee.type) return !1;
    if ("require" === e.callee.name) {
      let t = eH(e);
      return 1 === t.length && ea(t[0]) || t.length > 1;
    }
    if ("define" === e.callee.name) {
      let n = eH(e);
      return "ExpressionStatement" === t.type && (1 === n.length || 2 === n.length && "ArrayExpression" === n[0].type || 3 === n.length && ea(n[0]) && "ArrayExpression" === n[1].type);
    }
    return !1;
  }(node, parent) || eD(node, parent))) {
    let i = [];
    if (eG(e, () => {
      i.push(n());
    }), !(u && null != (r = i[0].label) && r.embed)) return [o ? "new " : "", n("callee"), _, iE(e, t, n), "(", tq(", ", i), ")"];
  }
  if (!s && !o && eh(node.callee) && !e.call(e => ry(e, t), "callee", ...("ChainExpression" === node.callee.type ? ["expression"] : []))) return rY(e, t, n);
  let c = [o ? "new " : "", s ? node.phase ? `import.${node.phase}` : "import" : n("callee"), _, iE(e, t, n), rH(e, t, n)];
  return s || ev(node.callee) ? tw(c) : c;
}
function rZ(e, t, n, r, i, a) {
  let o = function (e, t, n, r, i) {
    var a;
    let {
      node
    } = e;
    let s = node[i];
    if (!s) return "only-left";
    let _ = !r0(s);
    if (e.match(r0, r1, e => !_ || "ExpressionStatement" !== e.type && "VariableDeclaration" !== e.type)) return _ ? "ArrowFunctionExpression" === s.type && "ArrowFunctionExpression" === s.body.type ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
    if (!_ && r0(s.right) || ew(t.originalText, s)) return "break-after-operator";
    if ("CallExpression" === s.type && "require" === s.callee.name || "json5" === t.parser || "jsonc" === t.parser || "json" === t.parser) return "never-break-after-operator";
    let l = tW(r, tQ, !1);
    if (function (e) {
      if (r1(e)) {
        let t = e.left || e.id;
        return "ObjectPattern" === t.type && t.properties.length > 2 && t.properties.some(e => {
          var t;
          return e4(e) && (!e.shorthand || (null == (t = e.value) ? void 0 : t.type) === "AssignmentPattern");
        });
      }
      return !1;
    }(node) || function (e) {
      if ("VariableDeclarator" !== e.type) return !1;
      let {
        typeAnnotation
      } = e.id;
      if (!typeAnnotation || !typeAnnotation.typeAnnotation) return !1;
      let n = r4(typeAnnotation.typeAnnotation);
      return B(n) && n.length > 1 && n.some(e => B(r4(e)) || "TSConditionalType" === e.type);
    }(node) || r3(node) && l) return "break-lhs";
    a = r;
    let u = !!e4(node) && "string" == typeof (a = tX(a)) && C(a) < t.tabWidth + 3;
    return e.call(() => function (e, t, n, r) {
      let i = e.node;
      if (ef(i) && !rL(i)) return !0;
      switch (i.type) {
        case "StringLiteralTypeAnnotation":
        case "SequenceExpression":
          return !0;
        case "TSConditionalType":
        case "ConditionalTypeAnnotation":
          if (!t.experimentalTernaries && !function (e) {
            function t(e) {
              switch (e.type) {
                case "FunctionTypeAnnotation":
                case "GenericTypeAnnotation":
                case "TSFunctionType":
                case "TSTypeReference":
                  return !!e.typeParameters;
                default:
                  return !1;
              }
            }
            return t(e.checkType) || t(e.extendsType);
          }(i)) break;
          return !0;
        case "ConditionalExpression":
          {
            if (!t.experimentalTernaries) {
              let {
                test
              } = i;
              return ef(test) && !rL(test);
            }
            let {
              consequent,
              alternate
            } = i;
            return "ConditionalExpression" === consequent.type || "ConditionalExpression" === alternate.type;
          }
        case "ClassExpression":
          return B(i.decorators);
      }
      if (r) return !1;
      let a = i;
      let o = [];
      for (;;) if ("UnaryExpression" === a.type || "AwaitExpression" === a.type || "YieldExpression" === a.type && null !== a.argument) {
        a = a.argument;
        o.push("argument");
      } else if ("TSNonNullExpression" === a.type) {
        a = a.expression;
        o.push("expression");
      } else break;
      return !!(ea(a) || e.call(() => function e(t, n, r, i = !1) {
        var a;
        let {
          node
        } = t;
        let s = () => e(t, n, r, !0);
        if ("ChainExpression" === node.type || "TSNonNullExpression" === node.type) return t.call(s, "expression");
        if (ev(node)) {
          if (null != (a = rQ(t, n, r).label) && a.memberChain) return !1;
          let e = eH(node);
          return !(!(0 === e.length || 1 === e.length && eE(e[0], n)) || function (e, t) {
            var n;
            let r = null == (n = e.typeParameters ?? e.typeArguments) ? void 0 : n.params;
            if (B(r)) {
              if (r.length > 1) return !0;
              if (1 === r.length) {
                let e = r[0];
                if (e5(e) || e7(e) || "TSTypeLiteral" === e.type || "ObjectTypeAnnotation" === e.type) return !0;
              }
              if (t$(t(e.typeParameters ? "typeParameters" : "typeArguments"))) return !0;
            }
            return !1;
          }(node, r)) && t.call(s, "callee");
        }
        return eT(node) ? t.call(s, "object") : i && ("Identifier" === node.type || "ThisExpression" === node.type);
      }(e, t, n), ...o));
    }(e, t, n, u), i) ? "break-after-operator" : !function (e) {
      let t = function (e) {
        var t;
        if (r2(e)) return null == (t = e.typeParameters) ? void 0 : t.params;
      }(e);
      if (B(t)) {
        let n = "TSTypeAliasDeclaration" === e.type ? "constraint" : "bound";
        if (t.length > 1 && t.some(e => e[n] || e.$$default)) return !0;
      }
      return !1;
    }(node) ? !l && (u || "TemplateLiteral" === s.type || "TaggedTemplateExpression" === s.type || "BooleanLiteral" === s.type || er(s) || "ClassExpression" === s.type) ? "never-break-after-operator" : "fluid" : "break-lhs";
  }(e, t, n, r, a);
  let s = a ? n(a, {
    assignmentLayout: o
  }) : "";
  switch (o) {
    case "break-after-operator":
      return tw([tw(r), i, tw(tC([tj, s]))]);
    case "never-break-after-operator":
      return tw([tw(r), i, " ", s]);
    case "fluid":
      {
        let e = Symbol("assignment");
        return tw([tw(r), i, tw(tC(tj), {
          id: e
        }), tI, tP(s, {
          groupId: e
        })]);
      }
    case "break-lhs":
      return tw([r, i, " ", tw(s)]);
    case "chain":
      return [tw(r), i, tj, s];
    case "chain-tail":
      return [tw(r), i, tC([tj, s])];
    case "chain-tail-arrow-chain":
      return [tw(r), i, s];
    case "only-left":
      return r;
  }
}
function r0(e) {
  return "AssignmentExpression" === e.type;
}
function r1(e) {
  return r0(e) || "VariableDeclarator" === e.type;
}
var r2 = V(["TSTypeAliasDeclaration", "TypeAlias"]);
function r3(e) {
  var t;
  return "VariableDeclarator" === e.type && (null == (t = e.init) ? void 0 : t.type) === "ArrowFunctionExpression";
}
var r6 = V(["TSTypeReference", "GenericTypeAnnotation"]);
function r4(e) {
  var t;
  if (r6(e)) return null == (t = e.typeParameters) ? void 0 : t.params;
}
function r8(e, t, n, r, i) {
  var a;
  let o = e.node;
  let s = eV(o);
  let _ = i ? iE(e, n, t) : "";
  if (0 === s.length) return [_, "(", rv(e, n, {
    filter: e => ")" === t7(n.originalText, J(e))
  }), ")"];
  let {
    parent
  } = e;
  let u = eD(parent);
  let c = r5(o);
  let p = [];
  if (function (e, t) {
    let {
      node
    } = e;
    let r = 0;
    let i = e => t(e, r++);
    node.$$this && e.call(i, "this");
    Array.isArray(node.parameters) ? e.each(i, "parameters") : Array.isArray(node.params) && e.each(i, "params");
    node.rest && e.call(i, "rest");
  }(e, (e, r) => {
    let i = r === s.length - 1;
    i && o.rest && p.push("...");
    p.push(t());
    i || (p.push(","), u || c ? p.push(" ") : e3(s[r], n) ? p.push(tL, tL) : p.push(tj));
  }), r && !e.match(e => "ArrowFunctionExpression" === e.type && "BlockStatement" === e.body.type, (e, t) => {
    if ("CallExpression" === e.type && "arguments" === t && 1 === e.$$arguments.length && "CallExpression" === e.callee.type) {
      let t = e.callee.callee;
      return "Identifier" === t.type || "MemberExpression" === t.type && !t.computed && "Identifier" === t.object.type && "Identifier" === t.property.type;
    }
    return !1;
  }, (e, t) => "VariableDeclarator" === e.type && "init" === t || "ExportDefaultDeclaration" === e.type && "declaration" === t || "TSExportAssignment" === e.type && "expression" === t || "AssignmentExpression" === e.type && "right" === t && "MemberExpression" === e.left.type && "Identifier" === e.left.object.type && "module" === e.left.object.name && "Identifier" === e.left.property.type && "exports" === e.left.property.name, e => "VariableDeclaration" !== e.type || "const" === e.kind && 1 === e.declarations.length)) {
    if (t$(_) || t$(p)) throw new rV();
    return tw([tK(_, tG), "(", tK(p, tG), ")"]);
  }
  let d = s.every(e => !B(e.decorators));
  return c && d ? [_, "(", ...p, ")"] : u ? [_, "(", ...p, ")"] : (em(parent) || ("TypeAnnotation" === parent.type || "TSTypeAnnotation" === parent.type) && "FunctionTypeAnnotation" === parent.typeAnnotation.type && !parent.$$static && !q(parent, parent.typeAnnotation) || "TypeAlias" === parent.type || "UnionTypeAnnotation" === parent.type || "IntersectionTypeAnnotation" === parent.type || "FunctionTypeAnnotation" === parent.type && parent.returnType === o) && 1 === s.length && null === s[0].name && o.$$this !== s[0] && s[0].typeAnnotation && null === o.typeParameters && eg(s[0].typeAnnotation) && !o.rest ? "always" === n.arrowParens ? ["(", ...p, ")"] : p : [_, "(", tC([tM, ...p]), tF(!(o.rest || (null == (a = b(!1, eV(o), -1)) ? void 0 : a.type) === "RestElement") && eM(n, "all") ? "," : ""), tM, ")"];
}
function r5(e) {
  if (!e) return !1;
  let t = eV(e);
  if (1 !== t.length) return !1;
  let [n] = t;
  return !e1(n) && ("ObjectPattern" === n.type || "ArrayPattern" === n.type || "Identifier" === n.type && n.typeAnnotation && ("TypeAnnotation" === n.typeAnnotation.type || "TSTypeAnnotation" === n.typeAnnotation.type) && el(n.typeAnnotation.typeAnnotation) || "FunctionTypeParam" === n.type && el(n.typeAnnotation) && n !== e.rest || "AssignmentPattern" === n.type && ("ObjectPattern" === n.left.type || "ArrayPattern" === n.left.type) && ("Identifier" === n.right.type || en(n.right) && 0 === n.right.properties.length || et(n.right) && 0 === n.right.elements.length));
}
function r7(e, t) {
  var n;
  let r;
  e.returnType ? (r = e.returnType).typeAnnotation && (r = r.typeAnnotation) : e.typeAnnotation && (r = e.typeAnnotation);
  let i = r;
  if (!i) return !1;
  let a = null == (n = e.typeParameters) ? void 0 : n.params;
  if (a) {
    if (a.length > 1) return !1;
    if (1 === a.length) {
      let e = a[0];
      if (e.constraint || e.$$default) return !1;
    }
  }
  return 1 === eV(e).length && (el(i) || t$(t));
}
var r9 = V(["VoidTypeAnnotation", "TSVoidKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword"]);
var ie = V(["ObjectTypeAnnotation", "TSTypeLiteral", "GenericTypeAnnotation", "TSTypeReference"]);
function it(e) {
  return !!(eg(e) || el(e)) || !!e5(e) && function (e) {
    let {
      types
    } = e;
    if (types.some(e => e1(e))) return !1;
    let n = types.find(e => ie(e));
    return !!n && types.every(e => e === n || r9(e));
  }(e);
}
function ir(e, t, n) {
  let r = t.semi ? ";" : "";
  let {
    node
  } = e;
  let a = [iT(e)];
  a.push("type ", n("id"), n("typeParameters"));
  return [rZ(e, t, n, a, " =", "TSTypeAliasDeclaration" === node.type ? "typeAnnotation" : "right"), r];
}
function ii(e, t, n) {
  let r = !1;
  return tw(e.map(({
    isFirst: e,
    previous: t,
    node: i,
    index: a
  }) => {
    let o = n();
    if (e) return o;
    let s = el(i);
    let _ = el(t);
    return _ && s ? [" & ", r ? tC(o) : o] : _ || s ? (a > 1 && (r = !0), [" & ", a > 1 ? tC(o) : o]) : tC([" &", tj, o]);
  }, "types"));
}
function ia(e, t, n) {
  let {
    node
  } = e;
  let {
    parent
  } = e;
  let a = "TypeParameterInstantiation" !== parent.type && ("TSConditionalType" !== parent.type || !t.experimentalTernaries) && ("ConditionalTypeAnnotation" !== parent.type || !t.experimentalTernaries) && "TSTypeParameterInstantiation" !== parent.type && "GenericTypeAnnotation" !== parent.type && "TSTypeReference" !== parent.type && "TSTypeAssertion" !== parent.type && "TupleTypeAnnotation" !== parent.type && "TSTupleType" !== parent.type && !("FunctionTypeParam" === parent.type && !parent.name && e.grandparent.$$this !== parent) && !(("TypeAlias" === parent.type || "VariableDeclarator" === parent.type || "TSTypeAliasDeclaration" === parent.type) && ew(t.originalText, node));
  let o = it(node);
  let s = e.map(e => {
    let r = n();
    o || (r = tE(2, r));
    return rS(e, r, t);
  }, "types");
  if (o) return tq(" | ", s);
  let _ = [tF([a && !ew(t.originalText, node) ? tj : "", "| "]), tq([tj, "| "], s)];
  return ry(e, t) ? tw([tC(_), tM]) : ("TupleTypeAnnotation" === parent.type || "TSTupleType" === parent.type) && parent["TupleTypeAnnotation" === parent.type && parent.types ? "types" : "elementTypes"].length > 1 ? tw([tC([tF(["(", tM]), _]), tM, tF(")")]) : tw(a ? tC(_) : _);
}
function io(e, t, n) {
  let {
    node
  } = e;
  let i = [iC(e)];
  ("TSConstructorType" === node.type || "TSConstructSignatureDeclaration" === node.type) && i.push("new ");
  let a = r8(e, n, t, !1, !0);
  let o = [];
  "FunctionTypeAnnotation" === node.type ? o.push(!function (e) {
    var t;
    let {
      node,
      parent
    } = e;
    return "FunctionTypeAnnotation" === node.type && (em(parent) || !(("ObjectTypeProperty" === parent.type || "ObjectTypeInternalSlot" === parent.type) && !parent.variance && !parent.optional && q(parent, node) || "ObjectTypeCallProperty" === parent.type || (null == (t = e.getParentNode(2)) ? void 0 : t.type) === "DeclareFunction"));
  }(e) ? ": " : " => ", n("returnType")) : o.push(id(e, n, node.returnType ? "returnType" : "typeAnnotation"));
  r7(node, o) && (a = tw(a));
  i.push(a, o);
  return tw(i);
}
function is(e, t, n) {
  return [n("objectType"), iD(e), "[", n("indexType"), "]"];
}
function i_(e, t, n) {
  return ["infer ", n("typeParameter")];
}
function il(e, t, n) {
  let {
    node
  } = e;
  return [node.postfix ? "" : n, id(e, t), node.postfix ? n : ""];
}
function iu(e, t, n) {
  let {
    node
  } = e;
  return ["...", ...("TupleTypeSpreadElement" === node.type && node.label ? [n("label"), ": "] : []), n("typeAnnotation")];
}
function ic(e, t, n) {
  let {
    node
  } = e;
  return [node.variance ? n("variance") : "", n("label"), node.optional ? "?" : "", ": ", n("elementType")];
}
var ip = new WeakSet();
function id(e, t, n = "typeAnnotation") {
  let {
    node: {
      [n]: _n
    }
  } = e;
  if (!_n) return "";
  let i = !1;
  if ("TSTypeAnnotation" === _n.type || "TypeAnnotation" === _n.type) {
    let t = e.call(im, n);
    ("=>" === t || ":" === t && e1(_n, eZ.Leading)) && (i = !0);
    ip.add(_n);
  }
  return i ? [" ", t(n)] : t(n);
}
var im = e => e.match(e => "TSTypeAnnotation" === e.type, (e, t) => ("returnType" === t || "typeAnnotation" === t) && ("TSFunctionType" === e.type || "TSConstructorType" === e.type)) ? "=>" : e.match(e => "TSTypeAnnotation" === e.type, (e, t) => "typeAnnotation" === t && ("TSJSDocNullableType" === e.type || "TSJSDocNonNullableType" === e.type || "TSTypePredicate" === e.type)) || e.match(e => "TypeAnnotation" === e.type, (e, t) => "typeAnnotation" === t && "Identifier" === e.type, (e, t) => "id" === t && "DeclareFunction" === e.type) || e.match(e => "TypeAnnotation" === e.type, (e, t) => "bound" === t && "TypeParameter" === e.type && e.usesExtendsBound) ? "" : ":";
function ih(e, t, n) {
  let r = im(e);
  return r ? [r, " ", n("typeAnnotation")] : n("typeAnnotation");
}
function iy(e) {
  return [e("elementType"), "[]"];
}
function ig({
  node: e
}, t) {
  let n = "TSTypeQuery" === e.type ? "exprName" : "argument";
  let r = "TSTypeQuery" === e.type ? "typeParameters" : "typeArguments";
  return ["typeof ", t(n), t(r)];
}
function ib(e, t) {
  let {
    node
  } = e;
  return [node.asserts ? "asserts " : "", t("parameterName"), node.typeAnnotation ? [" is ", id(e, t)] : ""];
}
function iD(e) {
  let {
    node
  } = e;
  return node.optional && ("Identifier" !== node.type || node !== e.parent.key) ? ev(node) || eT(node) && node.computed || "OptionalIndexedAccessType" === node.type ? "?." : "?" : "";
}
function ix(e) {
  return e.node.definite || e.match(void 0, (e, t) => "id" === t && "VariableDeclarator" === e.type && e.definite) ? "!" : "";
}
var iv = new Set(["DeclareClass", "DeclareFunction", "DeclareVariable", "DeclareExportDeclaration", "DeclareExportAllDeclaration", "DeclareOpaqueType", "DeclareTypeAlias", "DeclareEnum", "DeclareInterface"]);
function iT(e) {
  let {
    node
  } = e;
  return node.declare || iv.has(node.type) && "DeclareExportDeclaration" !== e.parent.type ? "declare " : "";
}
var iS = new Set(["TSAbstractMethodDefinition", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function iC({
  node: e
}) {
  return e.$$abstract || iS.has(e.type) ? "abstract " : "";
}
function iE(e, t, n) {
  let r = e.node;
  return r.typeArguments ? n("typeArguments") : r.typeParameters ? n("typeParameters") : "";
}
function iw(e, t, n) {
  return ["::", n("callee")];
}
function iA(e, t, n) {
  return "EmptyStatement" === e.type ? ";" : "BlockStatement" === e.type || n ? [" ", t] : tC([tj, t]);
}
function ik(e, t) {
  return ["...", t("argument"), id(e, t)];
}
function iF(e) {
  return e.accessibility ? e.accessibility + " " : "";
}
function iP(e, t, n) {
  let {
    node
  } = e;
  let i = [];
  let a = "TupleExpression" === node.type ? "#[" : "[";
  let o = "TupleTypeAnnotation" === node.type && node.types ? "types" : "TSTupleType" === node.type || "TupleTypeAnnotation" === node.type ? "elementTypes" : "elements";
  let s = node[o];
  if (0 === s.length) i.push(function (e, t, n, r) {
    let {
      node
    } = e;
    return e1(node, eZ.Dangling) ? tw([n, rv(e, t, {
      indent: !0
    }), tM, "]"]) : [n, "]"];
  }(e, t, a, 0));else {
    let _;
    let l;
    let u = b(!1, s, -1);
    let c = u?.type !== "RestElement";
    let p = null === u;
    let d = Symbol("array");
    let m = !t.__inJestEach && s.length > 1 && s.every((e, t, n) => {
      let r = e?.type;
      if (!et(e) && !en(e)) return !1;
      let i = n[t + 1];
      if (i && r !== i.type) return !1;
      let a = et(e) ? "elements" : "properties";
      return e[a] && e[a].length > 1;
    });
    let f = iN(node, t);
    let h = c ? p ? "," : eM(t) ? f ? tF(",", "", {
      groupId: d
    }) : tF(",") : "" : "";
    i.push(tw([a, tC([tM, f ? (_ = [], e.each(({
      isLast: r,
      next: i
    }) => {
      _.push([n(), r ? h : ","]);
      r || _.push(iI(e, t) ? [tL, tL] : e1(i, eZ.Leading | eZ.Line) ? tL : tj);
    }, "elements"), tk(_)) : [(l = [], e.each(({
      node: r,
      isLast: i
    }) => {
      l.push(r ? tw(n()) : "");
      i || l.push([",", tj, r && iI(e, t) ? tM : ""]);
    }, o), l), h], rv(e, t)]), tM, "]"], {
      shouldBreak: m,
      id: d
    }));
  }
  i.push(iD(e), id(e, n));
  return i;
}
function iN(e, t) {
  return et(e) && e.elements.length > 1 && e.elements.every(e => e && (er(e) || ei(e) && !e1(e.argument)) && !e1(e, eZ.Trailing | eZ.Line, e => !P(t.originalText, R(e), {
    backwards: !0
  })));
}
function iI({
  node: e
}, {
  originalText: t
}) {
  let n = e => N(t, I(t, e));
  let r = e => "," === t[e] ? e : r(n(e + 1));
  return O(t, r(J(e)));
}
var iO = new Proxy(() => {}, {
  get: () => iO
});
var iB = function (e) {
  return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/, "$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
};
var ij = new WeakMap();
function iM(e, t, n) {
  let {
    node
  } = e;
  if (node.computed) return ["[", n("key"), "]"];
  let {
    parent
  } = e;
  let {
    key
  } = node;
  if ("consistent" === t.quoteProps && !ij.has(parent)) {
    let e = (parent.properties || parent.body || parent.members).some(e => !e.computed && e.key && ea(e.key) && !eA(e, t));
    ij.set(parent, e);
  }
  if (("Identifier" === key.type || er(key) && ek(iB(ej(key))) && String(key.value) === iB(ej(key)) && !("typescript" === t.parser || "babel-ts" === t.parser)) && ("json" === t.parser || "jsonc" === t.parser || "consistent" === t.quoteProps && ij.get(parent))) {
    let n = L(JSON.stringify("Identifier" === key.type ? key.name : key.value.toString()), t);
    return e.call(e => rS(e, n, t), "key");
  }
  return eA(node, t) && ("as-needed" === t.quoteProps || "consistent" === t.quoteProps && !ij.get(parent)) ? e.call(e => rS(e, /^\d/.test(key.value) ? iB(key.value) : key.value, t), "key") : n("key");
}
function iL(e, t, n) {
  let {
    node
  } = e;
  return node.shorthand ? n("value") : rZ(e, t, n, iM(e, t, n), ":", "value");
}
var iR = ({
  node: e,
  key: t,
  parent: n
}) => "value" === t && "FunctionExpression" === e.type && ("ObjectMethod" === n.type || "ClassMethod" === n.type || "ClassPrivateMethod" === n.type || "MethodDefinition" === n.type || "TSAbstractMethodDefinition" === n.type || "TSDeclareMethod" === n.type || "Property" === n.type && ed(n));
function iJ(e, t, n, r) {
  if (iR(e)) return iU(e, n, t);
  let {
    node
  } = e;
  let a = !1;
  if (("FunctionDeclaration" === node.type || "FunctionExpression" === node.type) && null != r && r.expandLastArg) {
    let {
      parent
    } = e;
    ev(parent) && (eH(parent).length > 1 || eV(node).every(e => "Identifier" === e.type && !e.typeAnnotation)) && (a = !0);
  }
  let o = [iT(e), node.async ? "async " : "", `function${node.generator ? "*" : ""} `, node.id ? t("id") : ""];
  let s = r8(e, t, n, a);
  let _ = iK(e, t);
  let l = r7(node, _);
  o.push(iE(e, n, t), tw([l ? tw(s) : s, _]), node.body ? " " : "", t("body"));
  n.semi && (node.declare || !node.body) && o.push(";");
  return o;
}
function iq(e, t, n) {
  let {
    node
  } = e;
  let {
    kind
  } = r;
  let a = node.value || node;
  let o = [];
  kind && "init" !== kind && "method" !== kind && "constructor" !== kind ? (iO.ok("get" === kind || "set" === kind), o.push(kind, " ")) : a.async && o.push("async ");
  a.generator && o.push("*");
  o.push(iM(e, t, n), node.optional || node.key.optional ? "?" : "", node === a ? iU(e, t, n) : n("value"));
  return o;
}
function iU(e, t, n) {
  let r;
  let {
    node
  } = e;
  let a = r8(e, n, t);
  let o = iK(e, n);
  let s = (r = eV(node)).length > 1 && r.some(e => "TSParameterProperty" === e.type);
  let _ = r7(node, o);
  let l = [iE(e, t, n), tw([s ? tw(a, {
    shouldBreak: !0
  }) : _ ? tw(a) : a, o])];
  node.body ? l.push(" ", n("body")) : l.push(t.semi ? ";" : "");
  return l;
}
function iz(e, t) {
  if ("always" === t.arrowParens) return !1;
  if ("avoid" === t.arrowParens) {
    let t;
    let {
      node
    } = e;
    return 1 === (t = eV(node)).length && !node.typeParameters && !e1(node, eZ.Dangling) && "Identifier" === t[0].type && !t[0].typeAnnotation && !e1(t[0]) && !t[0].optional && !node.predicate && !node.returnType;
  }
  return !1;
}
function iK(e, t) {
  let {
    node
  } = e;
  let r = [id(e, t, "returnType")];
  node.predicate && r.push(t("predicate"));
  return r;
}
function iW(e, t, n) {
  let {
    node
  } = e;
  let i = t.semi ? ";" : "";
  let a = [];
  if (node.argument) {
    let e = n("argument");
    !function (e, t) {
      if (ew(e.originalText, t) || e1(t, eZ.Leading, t => t9(e.originalText, R(t), J(t))) && !ep(t)) return !0;
      if (Y(t)) {
        var n;
        let r = t;
        let i;
        for (; i = (n = r).expressions ? n.expressions[0] : n.left ?? n.test ?? n.callee ?? n.object ?? n.tag ?? n.argument ?? n.expression;) if (r = i, ew(e.originalText, r)) return !0;
      }
      return !1;
    }(t, node.argument) ? (ef(node.argument) || "SequenceExpression" === node.argument.type || t.experimentalTernaries && "ConditionalExpression" === node.argument.type && ("ConditionalExpression" === node.argument.consequent.type || "ConditionalExpression" === node.argument.alternate.type)) && (e = tw([tF("("), tC([tM, e]), tM, tF(")")])) : e = ["(", tC([tL, e]), tL, ")"];
    a.push(" ", e);
  }
  let o = e1(node, eZ.Dangling);
  let s = i && o && e1(node, eZ.Last | eZ.Line);
  s && a.push(i);
  o && a.push(" ", rv(e, t));
  s || a.push(i);
  return a;
}
var iV = new WeakMap();
function i$(e) {
  iV.has(e) || iV.set(e, "ConditionalExpression" === e.type && !eL(e, e => "ObjectExpression" === e.type));
  return iV.get(e);
}
var iH = e => "SequenceExpression" === e.type;
var iG = (e, t, n) => {
  if (!(e && null == t)) {
    if (t.findLast) return t.findLast(n);
    for (let e = t.length - 1; e >= 0; e--) {
      let r = t[e];
      if (n(r, e, t)) return r;
    }
  }
};
function iX(e, t, n, r) {
  let {
    node
  } = e;
  let a = [];
  let o = iG(!1, node[r], e => "EmptyStatement" !== e.type);
  e.each(({
    node: e
  }) => {
    "EmptyStatement" !== e.type && (a.push(n()), e !== o && (a.push(tL), e3(e, t) && a.push(tL)));
  }, r);
  return a;
}
function iY(e, t, n) {
  let {
    node
  } = e;
  let i = [];
  "StaticBlock" === node.type && i.push("static ");
  i.push("{");
  let a = iQ(e, t, n);
  if (a) i.push(tC([tL, a]), tL);else {
    let {
      parent
    } = e;
    let n = e.grandparent;
    "ArrowFunctionExpression" !== parent.type && "FunctionExpression" !== parent.type && "FunctionDeclaration" !== parent.type && "ObjectMethod" !== parent.type && "ClassMethod" !== parent.type && "ClassPrivateMethod" !== parent.type && "ForStatement" !== parent.type && "WhileStatement" !== parent.type && "DoWhileStatement" !== parent.type && "DoExpression" !== parent.type && ("CatchClause" !== parent.type || n.finalizer) && "TSModuleDeclaration" !== parent.type && "TSDeclareFunction" !== parent.type && "StaticBlock" !== node.type && i.push(tL);
  }
  i.push("}");
  return i;
}
function iQ(e, t, n) {
  var r;
  let {
    node
  } = e;
  let a = B(node.directives);
  let o = node.body.some(e => "EmptyStatement" !== e.type);
  let s = e1(node, eZ.Dangling);
  if (!a && !o && !s) return "";
  let _ = [];
  a && (_.push(iX(e, t, n, "directives")), (o || s) && (_.push(tL), e3(b(!1, node.directives, -1), t) && _.push(tL)));
  o && _.push(iX(e, t, n, "body"));
  s && _.push(rv(e, t));
  "Program" === node.type && (null == (r = e.parent) ? void 0 : r.type) !== "ModuleExpression" && _.push(tL);
  return _;
}
var iZ = function (e) {
  let t = new WeakMap();
  return function (n) {
    t.has(n) || t.set(n, Symbol(e));
    return t.get(n);
  };
};
function i0(e, t) {
  return "+" === e || "-" === e ? e + t : t;
}
var i1 = iZ("typeParameters");
function i2(e, t, n, r) {
  let {
    node
  } = e;
  if (!node[r]) return "";
  if (!Array.isArray(node[r])) return n(r);
  let a = e.getNode(2);
  let o = a && eD(a);
  let s = e.match(e => !(1 === e[r].length && el(e[r][0])), void 0, (e, t) => "typeAnnotation" === t, e => "Identifier" === e.type, r3);
  if (0 === node[r].length || !s && (o || 1 === node[r].length && ("NullableTypeAnnotation" === node[r][0].type || it(node[r][0])))) return ["<", tq(", ", e.map(n, r)), function (e, t) {
    let {
      node: _node12
    } = e;
    if (!e1(_node12, eZ.Dangling)) return "";
    let r = !e1(_node12, eZ.Line);
    let i = rv(e, t, {
      indent: !r
    });
    return r ? i : [i, tL];
  }(e, t), ">"];
  let _ = "TSTypeParameterInstantiation" === node.type ? "" : !function (e, t, n) {
    let {
      node: _node13
    } = e;
    return 1 === eV(_node13).length && _node13.type.startsWith("TS") && !_node13[n][0].constraint && "ArrowFunctionExpression" === e.parent.type && !(t.filepath && /\.ts$/.test(t.filepath));
  }(e, t, r) ? eM(t) ? tF(",") : "" : ",";
  return tw(["<", tC([tM, tq([",", tj], e.map(n, r))]), _, tM, ">"], {
    id: i1(node)
  });
}
function i3(e, t, n) {
  let {
    node,
    parent
  } = e;
  let a = ["TSTypeParameter" === node.type && node.$$const ? "const " : ""];
  let o = "TSTypeParameter" === node.type ? n("name") : node.name;
  if ("TSMappedType" === parent.type) {
    parent.readonly && a.push(i0(parent.readonly, "readonly"), " ");
    a.push("[", o);
    node.constraint && a.push(" in ", n("constraint"));
    parent.nameType && a.push(" as ", e.callParent(() => n("nameType")));
    a.push("]");
    return a;
  }
  if (node.variance && a.push(n("variance")), node.$$in && a.push("in "), node.out && a.push("out "), a.push(o), node.bound && (node.usesExtendsBound && a.push(" extends "), a.push(id(e, n, "bound"))), node.constraint) {
    let e = Symbol("constraint");
    a.push(" extends", tw(tC(tj), {
      id: e
    }), tI, tP(n("constraint"), {
      groupId: e
    }));
  }
  node.$$default && a.push(" = ", n("default"));
  return tw(a);
}
var i6 = V(["ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function i4(e, t, n) {
  let {
    node
  } = e;
  let i = [iT(e), iC(e), "class"];
  let a = e1(node.id, eZ.Trailing) || e1(node.typeParameters, eZ.Trailing) || e1(node.superClass) || B(node.$$extends) || B(node.mixins) || B(node.$$implements);
  let o = [];
  let s = [];
  if (node.id && o.push(" ", n("id")), o.push(n("typeParameters")), node.superClass) {
    let r = [function (e, t, n) {
      let r = n("superClass");
      let {
        parent
      } = e;
      return "AssignmentExpression" === parent.type ? tw(tF(["(", tC([tM, r]), tM, ")"], r)) : r;
    }(e, 0, n), n("superTypeParameters")];
    let i = e.call(e => ["extends ", rS(e, r, t)], "superClass");
    a ? s.push(tj, tw(i)) : s.push(" ", i);
  } else s.push(i9(e, t, n, "extends"));
  if (s.push(i9(e, t, n, "mixins"), i9(e, t, n, "implements")), a) {
    let e;
    e = i7(node) ? [...o, tC(s)] : tC([...o, s]);
    i.push(tw(e, {
      id: i8(node)
    }));
  } else i.push(...o, ...s);
  i.push(" ", n("body"));
  return i;
}
var i8 = iZ("heritageGroup");
function i5(e) {
  return tF(tL, "", {
    groupId: i8(e)
  });
}
function i7(e) {
  var t;
  return e.typeParameters && !e1(e.typeParameters, eZ.Trailing | eZ.Line) && !(["extends", "mixins", "implements"].reduce((e, n) => e + (Array.isArray(t[n]) ? t[n].length : 0), (t = e).superClass ? 1 : 0) > 1);
}
function i9(e, t, n, r) {
  let {
    node
  } = e;
  if (!B(node[r])) return "";
  let a = rv(e, t, {
    marker: r
  });
  return [i7(node) ? tF(" ", tj, {
    groupId: i1(node.typeParameters)
  }) : tj, a, a && tL, r, tw(tC([tj, tq([",", tj], e.map(n, r))]))];
}
function ae(e, t, n) {
  let {
    node
  } = e;
  let i = [];
  B(node.decorators) && i.push(rz(e, t, n));
  i.push(iF(node));
  node.$$static && i.push("static ");
  i.push(iC(e));
  node.override && i.push("override ");
  i.push(iq(e, t, n));
  return i;
}
function at(e, t, n) {
  let {
    node
  } = e;
  let i = [];
  let a = t.semi ? ";" : "";
  B(node.decorators) && i.push(rz(e, t, n));
  i.push(iF(node), iT(e));
  node.$$static && i.push("static ");
  i.push(iC(e));
  node.override && i.push("override ");
  node.readonly && i.push("readonly ");
  node.variance && i.push(n("variance"));
  ("ClassAccessorProperty" === node.type || "AccessorProperty" === node.type || "TSAbstractAccessorProperty" === node.type) && i.push("accessor ");
  i.push(iM(e, t, n), iD(e), ix(e), id(e, n));
  return [rZ(e, t, n, i, " =", "TSAbstractPropertyDefinition" === node.type || "TSAbstractAccessorProperty" === node.type ? void 0 : "value"), a];
}
function an({
  node: e,
  parent: t
}, n) {
  return ("markdown" === n.parentParser || "mdx" === n.parentParser) && "ExpressionStatement" === e.type && ep(e.expression) && "Program" === t.type && 1 === t.body.length;
}
function ar({
  node: e,
  parent: t
}, n) {
  return ("__vue_event_binding" === n.parser || "__vue_ts_event_binding" === n.parser) && "ExpressionStatement" === e.type && "Program" === t.type && 1 === t.body.length;
}
function ai(e) {
  return e.toLowerCase();
}
function aa({
  pattern: e,
  flags: t
}) {
  t = [...t].sort().join("");
  return `/${e}/${t}`;
}
function ao(e, t) {
  let n = e.slice(1, -1);
  if (n.includes('"') || n.includes("'")) return e;
  let r = t.singleQuote ? "'" : '"';
  return r + n + r;
}
var as = function (e, t, n) {
  let r = e.originalText.slice(t, n);
  for (let i of e[Symbol.$$for("comments")]) {
    let e = R(i);
    if (e > n) break;
    let a = J(i);
    if (a < t) continue;
    let o = a - e;
    r = r.slice(0, e - t) + " ".repeat(o) + r.slice(a - t);
  }
  return r;
};
var a_ = e => "ExportDefaultDeclaration" === e.type || "DeclareExportDeclaration" === e.type && e.$$default;
function al(e, t, n) {
  let {
    node
  } = e;
  let i = [rW(e.node) ? [tq(tL, e.map(n, "declaration", "decorators")), tL] : "", iT(e), "export", a_(node) ? " default" : ""];
  let {
    declaration,
    exported
  } = r;
  e1(node, eZ.Dangling) && (i.push(" ", rv(e, t)), eN(node) && i.push(tL));
  declaration ? i.push(" ", n("declaration")) : (i.push(ac(node.exportKind)), "ExportAllDeclaration" === node.type || "DeclareExportAllDeclaration" === node.type ? (i.push(" *"), exported && i.push(" as ", n("exported"))) : i.push(am(e, t, n)), i.push(ad(e, t, n), ah(e, t, n)));
  i.push(t.semi && (!node.declaration || a_(node) && !au(node.declaration)) ? ";" : "");
  return i;
}
var au = V(["ClassDeclaration", "FunctionDeclaration", "TSInterfaceDeclaration", "DeclareClass", "DeclareFunction", "TSDeclareFunction", "EnumDeclaration"]);
function ac(e, t = !0) {
  return e && "value" !== e ? `${t ? " " : ""}${e}${t ? "" : " "}` : "";
}
function ap(e, t) {
  return ac(e.importKind, t);
}
function ad(e, t, n) {
  let {
    node
  } = e;
  if (!node.source) return "";
  let i = [];
  af(node, t) && i.push(" from");
  i.push(" ", n("source"));
  return i;
}
function am(e, t, n) {
  let {
    node
  } = e;
  if (!af(node, t)) return "";
  let i = [" "];
  if (B(node.specifiers)) {
    let a = [];
    let o = [];
    e.each(() => {
      let t = e.node.type;
      if ("ExportNamespaceSpecifier" === t || "ExportDefaultSpecifier" === t || "ImportNamespaceSpecifier" === t || "ImportDefaultSpecifier" === t) a.push(n());else if ("ExportSpecifier" === t || "ImportSpecifier" === t) o.push(n());else throw new rE(node, "specifier");
    }, "specifiers");
    i.push(tq(", ", a));
    o.length > 0 && (a.length > 0 && i.push(", "), o.length > 1 || a.length > 0 || node.specifiers.some(e => e1(e)) ? i.push(tw(["{", tC([t.bracketSpacing ? tj : tM, tq([",", tj], o)]), tF(eM(t) ? "," : ""), t.bracketSpacing ? tj : tM, "}"])) : i.push(["{", t.bracketSpacing ? " " : "", ...o, t.bracketSpacing ? " " : "", "}"]));
  } else i.push("{}");
  return i;
}
function af(e, t) {
  return !!("ImportDeclaration" !== e.type || B(e.specifiers)) || "type" === e.importKind || as(t, R(e), R(e.source)).trimEnd().endsWith("from");
}
function ah(e, t, n) {
  let {
    node
  } = e;
  if (!node.source) return "";
  let i = function (e, t) {
    var n;
    var r;
    if (null != (n = e.extra) && n.deprecatedAssertSyntax) return "assert";
    let i = as(t, J(e.source), null != (r = e.attributes) && r[0] ? R(e.attributes[0]) : J(e)).trimStart();
    return i.startsWith("assert") ? "assert" : i.startsWith("with") || B(e.attributes) ? "with" : void 0;
  }(node, t);
  if (!i) return "";
  let a = [` ${i} {`];
  B(node.attributes) && (t.bracketSpacing && a.push(" "), a.push(tq(", ", e.map(n, "attributes"))), t.bracketSpacing && a.push(" "));
  a.push("}");
  return a;
}
function ay(e, t, n) {
  var r;
  let i = t.semi ? ";" : "";
  let {
    node
  } = e;
  let o = "ObjectTypeAnnotation" === node.type;
  let s = "TSEnumDeclaration" === node.type || "EnumBooleanBody" === node.type || "EnumNumberBody" === node.type || "EnumStringBody" === node.type || "EnumSymbolBody" === node.type;
  let _ = ["TSTypeLiteral" === node.type || s ? "members" : "TSInterfaceBody" === node.type ? "body" : "properties"];
  o && _.push("indexers", "callProperties", "internalSlots");
  let l = _.flatMap(t => e.map(({
    node: e
  }) => ({
    node: e,
    printed: n(),
    loc: R(e)
  }), t));
  _.length > 1 && l.sort((e, t) => e.loc - t.loc);
  let {
    parent,
    key
  } = e;
  let p = o && "body" === key && ("InterfaceDeclaration" === parent.type || "DeclareInterface" === parent.type || "DeclareClass" === parent.type);
  let d = "TSInterfaceBody" === node.type || s || p || "ObjectPattern" === node.type && "FunctionDeclaration" !== parent.type && "FunctionExpression" !== parent.type && "ArrowFunctionExpression" !== parent.type && "ObjectMethod" !== parent.type && "ClassMethod" !== parent.type && "ClassPrivateMethod" !== parent.type && "AssignmentPattern" !== parent.type && "CatchClause" !== parent.type && node.properties.some(e => e.value && ("ObjectPattern" === e.value.type || "ArrayPattern" === e.value.type)) || "ObjectPattern" !== node.type && l.length > 0 && t9(t.originalText, R(node), l[0].loc);
  let m = p ? ";" : "TSInterfaceBody" === node.type || "TSTypeLiteral" === node.type ? tF(i, ";") : ",";
  let f = "RecordExpression" === node.type ? "#{" : node.exact ? "{|" : "{";
  let h = node.exact ? "|}" : "}";
  let y = [];
  let g = l.map(e => {
    let n = [...y, tw(e.printed)];
    y = [m, tj];
    ("TSPropertySignature" === e.node.type || "TSMethodSignature" === e.node.type || "TSConstructSignatureDeclaration" === e.node.type || "TSCallSignatureDeclaration" === e.node.type) && e1(e.node, eZ.PrettierIgnore) && y.shift();
    e3(e.node, t) && y.push(tL);
    return n;
  });
  if (node.inexact || node.hasUnknownMembers) {
    let n;
    if (e1(node, eZ.Dangling)) {
      let r = e1(node, eZ.Line);
      n = [rv(e, t), r || P(t.originalText, J(b(!1, e2(node), -1))) ? tL : tj, "..."];
    } else n = ["..."];
    g.push([...y, ...n]);
  }
  let D = null == (r = b(!1, l, -1)) ? void 0 : r.node;
  let x = !(node.inexact || node.hasUnknownMembers || D && ("RestElement" === D.type || ("TSPropertySignature" === D.type || "TSCallSignatureDeclaration" === D.type || "TSMethodSignature" === D.type || "TSConstructSignatureDeclaration" === D.type) && e1(D, eZ.PrettierIgnore)));
  let v;
  if (0 === g.length) {
    if (!e1(node, eZ.Dangling)) return [f, h, id(e, n)];
    v = tw([f, rv(e, t, {
      indent: !0
    }), tM, h, iD(e), id(e, n)]);
  } else v = [p && B(node.properties) ? i5(parent) : "", f, tC([t.bracketSpacing ? tj : tM, ...g]), tF(x && ("," !== m || eM(t)) ? m : ""), t.bracketSpacing ? tj : tM, h, iD(e), id(e, n)];
  return e.match(e => "ObjectPattern" === e.type && !B(e.decorators), ag) || el(node) && (e.match(void 0, (e, t) => "typeAnnotation" === t, (e, t) => "typeAnnotation" === t, ag) || e.match(void 0, (e, t) => "FunctionTypeParam" === e.type && "typeAnnotation" === t, ag)) || !d && e.match(e => "ObjectPattern" === e.type, e => "AssignmentExpression" === e.type || "VariableDeclarator" === e.type) ? v : tw(v, {
    shouldBreak: d
  });
}
function ag(e, t) {
  return ("params" === t || "parameters" === t || "this" === t || "rest" === t) && r5(e);
}
var ab = new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"], ["AwaitExpression", "argument"]]);
var aD = new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"], ["AwaitExpression", "argument"]]);
var ax = e => [tF("("), tC([tM, e]), tM, tF(")")];
function av(e, t, n, r) {
  if (!t.experimentalTernaries) return function (e, t, n) {
    let r;
    let {
      node
    } = e;
    let a = "ConditionalExpression" === node.type;
    let o = a ? "consequent" : "trueType";
    let s = a ? "alternate" : "falseType";
    let _ = a ? ["test"] : ["checkType", "extendsType"];
    let l = node[o];
    let u = node[s];
    let c = [];
    let p = !1;
    let {
      parent
    } = e;
    let m = parent.type === node.type && _.some(e => parent[e] === node);
    let f = parent.type === node.type && !m;
    let h;
    let y;
    let g = 0;
    do {
      y = h || node;
      h = e.getParentNode(g);
      g++;
    } while (h && h.type === node.type && _.every(e => h[e] !== y));
    let b = h || parent;
    if (a && (ep(node[_[0]]) || ep(l) || ep(u) || function (e) {
      let t = [e];
      for (let e = 0; e < t.length; e++) {
        let n = t[e];
        for (let e of ["test", "consequent", "alternate"]) {
          let r = n[e];
          if (ep(r)) return !0;
          "ConditionalExpression" === r.type && t.push(r);
        }
      }
      return !1;
    }(y))) {
      let e;
      p = !0;
      f = !0;
      let t = e => [tF("("), tC([tM, e]), tM, tF(")")];
      c.push(" ? ", "NullLiteral" === l.type || "Literal" === l.type && null === l.value || "Identifier" === l.type && "undefined" === l.name ? n(o) : t(n(o)), " : ", u.type === node.type || "NullLiteral" === (e = u).type || "Literal" === e.type && null === e.value || "Identifier" === e.type && "undefined" === e.name ? n(s) : t(n(s)));
    } else {
      let e = e => t.useTabs ? tC(n(e)) : tE(2, n(e));
      let r = [tj, "? ", l.type === node.type ? tF("", "(") : "", e(o), l.type === node.type ? tF("", ")") : "", tj, ": ", e(s)];
      c.push(parent.type !== node.type || parent[s] === node || m ? r : t.useTabs ? tE(-1, tC(r)) : tE(Math.max(0, t.tabWidth - 2), r));
    }
    let D = [o, s, ..._].some(e => e1(node[e], e => $(e) && t9(t.originalText, R(e), J(e))));
    let x = !p && (eT(parent) || "NGPipeExpression" === parent.type && parent.left === node) && !parent.computed;
    let v = function (e) {
      let {
        node: _node14
      } = e;
      if ("ConditionalExpression" !== _node14.type) return !1;
      let n;
      let r = _node14;
      for (let t = 0; !n; t++) {
        let i = e.getParentNode(t);
        if ("ChainExpression" === i.type && i.expression === r || ev(i) && i.callee === r || eT(i) && i.object === r || "TSNonNullExpression" === i.type && i.expression === r) {
          r = i;
          continue;
        }
        "NewExpression" === i.type && i.callee === r || e8(i) && i.expression === r ? (n = e.getParentNode(t + 1), r = i) : n = i;
      }
      return r !== _node14 && n[ab.get(n.type)] === r;
    }(e);
    r = [function (e, t, n) {
      let {
        node: _node15
      } = e;
      let i = "ConditionalExpression" === _node15.type;
      let {
        parent: _parent5
      } = e;
      let o = i ? n("test") : [n("checkType"), " ", "extends", " ", n("extendsType")];
      return _parent5.type === _node15.type && _parent5[i ? "alternate" : "falseType"] === _node15 ? tE(2, o) : o;
    }(e, 0, n), f ? c : tC(c), a && x && !v ? tM : ""];
    let T = parent === b ? tw(r, {
      shouldBreak: D
    }) : D ? [r, tO] : r;
    return m || v ? tw([tC([tM, T]), tM]) : T;
  }(e, t, n);
  let {
    node
  } = e;
  let a = "ConditionalExpression" === node.type;
  let o = "TSConditionalType" === node.type || "ConditionalTypeAnnotation" === node.type;
  let s = a ? "consequent" : "trueType";
  let _ = a ? "alternate" : "falseType";
  let l = a ? ["test"] : ["checkType", "extendsType"];
  let u = node[s];
  let c = node[_];
  let p = l.map(e => node[e]);
  let {
    parent
  } = e;
  let m = parent.type === node.type;
  let f = m && l.some(e => parent[e] === node);
  let h = m && parent[_] === node;
  let y = u.type === node.type;
  let g = c.type === node.type;
  let b = g || h;
  let D = t.tabWidth > 2 || t.useTabs;
  let x;
  let v;
  let T = 0;
  do {
    v = x || node;
    x = e.getParentNode(T);
    T++;
  } while (x && x.type === node.type && l.every(e => x[e] !== v));
  let S = x || parent;
  let C = r && r.assignmentLayout && "break-after-operator" !== r.assignmentLayout && ("AssignmentExpression" === parent.type || "VariableDeclarator" === parent.type || "ClassProperty" === parent.type || "PropertyDefinition" === parent.type || "ClassPrivateProperty" === parent.type || "ObjectProperty" === parent.type || "Property" === parent.type);
  let E = ("ReturnStatement" === parent.type || "ThrowStatement" === parent.type) && !(y || g);
  let w = a && "JSXExpressionContainer" === S.type && "JSXAttribute" !== e.grandparent.type;
  let A = function (e) {
    let {
      node: _node16
    } = e;
    if ("ConditionalExpression" !== _node16.type) return !1;
    let n;
    let r = _node16;
    for (let t = 0; !n; t++) {
      let i = e.getParentNode(t);
      if ("ChainExpression" === i.type && i.expression === r || ev(i) && i.callee === r || eT(i) && i.object === r || "TSNonNullExpression" === i.type && i.expression === r) {
        r = i;
        continue;
      }
      "NewExpression" === i.type && i.callee === r || e8(i) && i.expression === r ? (n = e.getParentNode(t + 1), r = i) : n = i;
    }
    return r !== _node16 && n[aD.get(n.type)] === r;
  }(e);
  let k = (eT(parent) || "NGPipeExpression" === parent.type && parent.left === node) && !parent.computed;
  let F = o && ry(e, t);
  let P = D ? t.useTabs ? "	" : " ".repeat(t.tabWidth - 1) : "";
  let N = [...p.map(e => e2(e)), e2(u), e2(c)].flat().some(e => $(e) && t9(t.originalText, R(e), J(e))) || y || g;
  let I = !b && !m && !o && (w ? "NullLiteral" === u.type || "Literal" === u.type && null === u.value : eE(u, t) && eC(node.test, 3));
  let O = b || h || o && !m || m && a && eC(node.test, 1) || I;
  let B = [];
  !y && e1(u, eZ.Dangling) && e.call(e => {
    B.push(rv(e, t), tL);
  }, "consequent");
  let j = [];
  e1(node.test, eZ.Dangling) && e.call(e => {
    j.push(rv(e, t));
  }, "test");
  !g && e1(c, eZ.Dangling) && e.call(e => {
    j.push(rv(e, t));
  }, "alternate");
  e1(node, eZ.Dangling) && j.push(rv(e, t));
  let M = Symbol("test");
  let L = Symbol("consequent");
  let q = Symbol("test-and-consequent");
  let U = a ? [ax(n("test")), "ConditionalExpression" === node.test.type ? tO : ""] : [n("checkType"), " ", "extends", " ", "TSConditionalType" === node.extendsType.type || "ConditionalTypeAnnotation" === node.extendsType.type || "TSMappedType" === node.extendsType.type ? n("extendsType") : tw(ax(n("extendsType")))];
  let z = tw([U, " ?"], {
    id: M
  });
  let K = n(s);
  let W = tC([y || w && (ep(u) || m || b) ? tL : tj, B, K]);
  let V = O ? tw([z, b ? W : tF(W, tw(W, {
    id: L
  }), {
    groupId: M
  })], {
    id: q
  }) : [z, W];
  let H = n(_);
  let G = I ? tF(H, tE(-1, ax(H)), {
    groupId: q
  }) : H;
  let X = [V, j.length > 0 ? [tC([tL, j]), tL] : g ? tL : I ? tF(tj, " ", {
    groupId: q
  }) : tj, ":", g ? " " : D ? O ? tF(P, tF(b || I ? " " : P, " "), {
    groupId: q
  }) : tF(P, " ") : " ", g ? G : tw([tC(G), w && !I ? tM : ""]), k && !A ? tM : "", N ? tO : ""];
  return C && !N ? tw(tC([tM, tw(X)])) : C || E ? tw(tC(X)) : A || o && f ? tw([tC([tM, X]), F ? tM : ""]) : parent === S ? tw(X) : X;
}
function aT(e, t, n, r) {
  let {
    node
  } = e;
  if (es(node)) return function (e, t) {
    let {
      node: _node17
    } = e;
    switch (_node17.type) {
      case "RegExpLiteral":
        return aa(_node17);
      case "BigIntLiteral":
        return ai(_node17.extra.raw);
      case "NumericLiteral":
        return iB(_node17.extra.raw);
      case "StringLiteral":
        return tY(L(_node17.extra.raw, t));
      case "NullLiteral":
        return "null";
      case "BooleanLiteral":
        return String(_node17.value);
      case "DecimalLiteral":
        return iB(_node17.value) + "m";
      case "DirectiveLiteral":
        return ao(_node17.extra.raw, t);
      case "Literal":
        {
          if (_node17.regex) return aa(_node17.regex);
          if (_node17.bigint) return ai(_node17.raw);
          if (_node17.decimal) return iB(_node17.decimal) + "m";
          let {
            value
          } = _node17;
          return "number" == typeof value ? iB(_node17.raw) : "string" == typeof value ? !function (e) {
            if ("expression" !== e.key) return;
            let {
              parent
            } = e;
            return "ExpressionStatement" === parent.type && parent.directive;
          }(e) ? tY(L(_node17.raw, t)) : ao(_node17.raw, t) : String(value);
        }
    }
  }(e, t);
  let a = t.semi ? ";" : "";
  let o = [];
  switch (node.type) {
    case "JsExpressionRoot":
      return n("node");
    case "JsonRoot":
      return [n("node"), tL];
    case "File":
      return function (e, t, n) {
        if (t.__isVueBindings || t.__isVueForBindingLeft) {
          let r = e.map(n, "program", "body", 0, "params");
          if (1 === r.length) return r[0];
          let i = tq([",", tj], r);
          return t.__isVueForBindingLeft ? ["(", tC([tM, tw(i)]), tM, ")"] : i;
        }
        if (t.__isEmbeddedTypescriptGenericParameters) return tq([",", tj], e.map(n, "program", "body", 0, "typeParameters", "params"));
      }(e, t, n) ?? n("program");
    case "Program":
      return iQ(e, t, n);
    case "EmptyStatement":
      return "";
    case "ExpressionStatement":
      let s;
      s = [n("expression")];
      ar(e, t) ? function e(t) {
        switch (t.type) {
          case "MemberExpression":
            switch (t.property.type) {
              case "Identifier":
              case "NumericLiteral":
              case "StringLiteral":
                return e(t.object);
            }
            return !1;
          case "Identifier":
            return !0;
          default:
            return !1;
        }
      }(e.node.expression) && s.push(";") : an(e, t) || t.semi && s.push(";");
      return s;
    case "ChainExpression":
      return n("expression");
    case "ParenthesizedExpression":
      return !e1(node.expression) && (en(node.expression) || et(node.expression)) ? ["(", n("expression"), ")"] : tw(["(", tC([tM, n("expression")]), tM, ")"]);
    case "AssignmentExpression":
      return function (e, t, n) {
        let {
          node: _node18
        } = e;
        return rZ(e, t, n, n("left"), [" ", _node18.operator], "right");
      }(e, t, n);
    case "VariableDeclarator":
      return rZ(e, t, n, n("id"), " =", "init");
    case "BinaryExpression":
    case "LogicalExpression":
      return rM(e, t, n);
    case "AssignmentPattern":
      return [n("left"), " = ", n("right")];
    case "OptionalMemberExpression":
    case "MemberExpression":
      return function (e, t, n) {
        var r;
        let i = n("object");
        let a = rX(e, t, n);
        let {
          node: _node19
        } = e;
        let s = e.findAncestor(e => !(eT(e) || "TSNonNullExpression" === e.type));
        let _ = e.findAncestor(e => !("ChainExpression" === e.type || "TSNonNullExpression" === e.type));
        let l = s && ("NewExpression" === s.type || "BindExpression" === s.type || "AssignmentExpression" === s.type && "Identifier" !== s.left.type) || _node19.computed || "Identifier" === _node19.object.type && "Identifier" === _node19.property.type && !eT(_) || ("AssignmentExpression" === _.type || "VariableDeclarator" === _.type) && (rG(_node19.object) || (null == (r = i.label) ? void 0 : r.memberChain));
        return tU(i.label, [i, l ? a : tw(tC([tM, a]))]);
      }(e, t, n);
    case "MetaProperty":
      return [n("meta"), ".", n("property")];
    case "BindExpression":
      node.object && o.push(n("object"));
      o.push(tw(tC([tM, iw(e, t, n)])));
      return o;
    case "Identifier":
      return [node.name, iD(e), ix(e), id(e, n)];
    case "V8IntrinsicIdentifier":
      return ["%", node.name];
    case "SpreadElement":
    case "SpreadElementPattern":
    case "SpreadPropertyPattern":
    case "RestElement":
      return ik(e, n);
    case "FunctionDeclaration":
    case "FunctionExpression":
      return iJ(e, n, t, r);
    case "ArrowFunctionExpression":
      return function (e, t, n, r = {}) {
        var i;
        var a;
        var o;
        var s;
        let _ = [];
        let l;
        let u = [];
        let c = !1;
        let p = !r.expandLastArg && "ArrowFunctionExpression" === e.node.body.type;
        let d;
        !function i() {
          let {
            node: _node20
          } = e;
          let o = function (e, t, n, r) {
            let {
              node: _node21
            } = e;
            let a = [];
            if (_node21.async && a.push("async "), iz(e, t)) a.push(n(["params", 0]));else {
              let i = r.expandLastArg || r.expandFirstArg;
              let o = iK(e, n);
              if (i) {
                if (t$(o)) throw new rV();
                o = tw(tK(o, tG));
              }
              a.push(tw([r8(e, n, t, i, !0), o]));
            }
            let o = rv(e, t, {
              filter(e) {
                let n = t5(t.originalText, J(e));
                return !1 !== n && "=>" === t.originalText.slice(n, n + 2);
              }
            });
            o && a.push(" ", o);
            return a;
          }(e, t, n, r);
          if (0 === _.length) _.push(o);else {
            let {
              leading,
              trailing
            } = rT(e, t);
            _.push([leading, o]);
            u.unshift(trailing);
          }
          p && (c || (c = _node20.returnType && eV(_node20).length > 0 || _node20.typeParameters || eV(_node20).some(e => "Identifier" !== e.type)));
          p && "ArrowFunctionExpression" === _node20.body.type ? e.call(i, "body") : (l = n("body", r), d = _node20.body);
        }();
        let m = !ew(t.originalText, d) && (iH(d) || (i = d, a = l, et(i) || en(i) || "ArrowFunctionExpression" === i.type || "DoExpression" === i.type || "BlockStatement" === i.type || ep(i) || (null == (o = a.label) ? void 0 : o.hug) !== !1 && ((null == (s = a.label) ? void 0 : s.embed) || eP(i, t.originalText))) || !c && i$(d));
        let f = "callee" === e.key && e6(e.parent);
        let h = Symbol("arrow-chain");
        let y = function (e, t, {
          signatureDocs: n,
          shouldBreak: r
        }) {
          if (1 === n.length) return n[0];
          let {
            parent,
            key
          } = e;
          return "callee" !== key && e6(parent) || ef(parent) ? tw([n[0], " =>", tC([tj, tq([" =>", tj], n.slice(1))])], {
            shouldBreak: r
          }) : "callee" === key && e6(parent) || t.assignmentLayout ? tw(tq([" =>", tj], n), {
            shouldBreak: r
          }) : tw(tC(tq([" =>", tj], n)), {
            shouldBreak: r
          });
        }(e, r, {
          signatureDocs: _,
          shouldBreak: c
        });
        let g;
        let b = !1;
        p && (f || r.assignmentLayout) && (b = !0, g = "chain-tail-arrow-chain" === r.assignmentLayout || f && !m);
        l = function (e, t, n, {
          bodyDoc: r,
          bodyComments: i,
          functionBody: a,
          shouldPutBodyOnSameLine: o
        }) {
          let {
            node: _node22,
            parent
          } = e;
          let l = n.expandLastArg && eM(t, "all") ? tF(",") : "";
          let u = (n.expandLastArg || "JSXExpressionContainer" === parent.type) && !e1(_node22) ? tM : "";
          return o && i$(a) ? [" ", tw([tF("", "("), tC([tM, r]), tF("", ")"), l, u]), i] : (iH(a) && (r = tw(["(", tC([tM, r]), tM, ")"])), o ? [" ", r, i] : [tC([tj, r, i]), l, u]);
        }(e, t, r, {
          bodyDoc: l,
          bodyComments: u,
          functionBody: d,
          shouldPutBodyOnSameLine: m
        });
        return tw([tw(b ? tC([tM, y]) : y, {
          shouldBreak: g,
          id: h
        }), " =>", p ? tP(l, {
          groupId: h
        }) : tw(l), p && f ? tF(tM, "", {
          groupId: h
        }) : ""]);
      }(e, t, n, r);
    case "YieldExpression":
      o.push("yield");
      node.delegate && o.push("*");
      node.argument && o.push(" ", n("argument"));
      return o;
    case "AwaitExpression":
      if (o.push("await"), node.argument) {
        o.push(" ", n("argument"));
        let {
          parent
        } = e;
        if (ev(parent) && parent.callee === node || eT(parent) && parent.object === node) {
          o = [tC([tM, ...o]), tM];
          let t = e.findAncestor(e => "AwaitExpression" === e.type || "BlockStatement" === e.type);
          if (t?.type !== "AwaitExpression" || !eL(t.argument, e => e === node)) return tw(o);
        }
      }
      return o;
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ExportAllDeclaration":
      return al(e, t, n);
    case "ImportDeclaration":
      return function (e, t, n) {
        let {
          node: _node23
        } = e;
        return ["import", _node23.module ? " module" : "", _node23.phase ? ` ${_node23.phase}` : "", ap(_node23), am(e, t, n), ad(e, t, n), ah(e, t, n), t.semi ? ";" : ""];
      }(e, t, n);
    case "ImportSpecifier":
    case "ExportSpecifier":
    case "ImportNamespaceSpecifier":
    case "ExportNamespaceSpecifier":
    case "ImportDefaultSpecifier":
    case "ExportDefaultSpecifier":
      return function (e, t, n) {
        let {
          node: _node24
        } = e;
        let {
          type
        } = r;
        let a = type.startsWith("Import");
        let o = a ? "imported" : "local";
        let s = a ? "local" : "exported";
        let _ = _node24[o];
        let l = _node24[s];
        let u = "";
        let c = "";
        "ExportNamespaceSpecifier" === type || "ImportNamespaceSpecifier" === type ? u = "*" : _ && (u = n(o));
        l && !function (e) {
          let t;
          if ("ImportSpecifier" !== e.type && "ExportSpecifier" !== e.type) return !1;
          let {
            local,
            ["ImportSpecifier" === e.type ? "imported" : "exported"]: r
          } = e;
          return !!(local.type === r.type && q(local, r) && Number.isInteger(t = J(local)) && t === J(r)) && (ea(local) ? local.value === r.value && ej(local) === ej(r) : "Identifier" === local.type && local.name === r.name);
        }(_node24) && (c = n(s));
        return [ac("ImportSpecifier" === type ? _node24.importKind : _node24.exportKind, !1), u, u && c ? " as " : "", c];
      }(e, 0, n);
    case "ImportAttribute":
      return [n("key"), ": ", n("value")];
    case "Import":
      return "import";
    case "BlockStatement":
    case "StaticBlock":
      return iY(e, t, n);
    case "ClassBody":
      return function (e, t, n) {
        let {
          node: _node25
        } = e;
        let i = [];
        e.each(({
          node: e,
          next: r,
          isLast: a
        }) => {
          i.push(n());
          !t.semi && i6(e) && function (e, t) {
            var n;
            let {
              type,
              name
            } = e.key;
            if (!e.computed && "Identifier" === type && ("static" === name || "get" === name || "set" === name) && !e.value && !e.typeAnnotation) return !0;
            if (!t || t.$$static || t.accessibility) return !1;
            if (!t.computed) {
              let e = null == (n = t.key) ? void 0 : n.name;
              if ("in" === e || "instanceof" === e) return !0;
            }
            if (i6(t) && t.variance && !t.$$static && !t.declare) return !0;
            switch (t.type) {
              case "ClassProperty":
              case "PropertyDefinition":
              case "TSAbstractPropertyDefinition":
                return t.computed;
              case "MethodDefinition":
              case "TSAbstractMethodDefinition":
              case "ClassMethod":
              case "ClassPrivateMethod":
                {
                  if ((t.value ? t.value.async : t.async) || "get" === t.kind || "set" === t.kind) return !1;
                  let e = t.value ? t.value.generator : t.generator;
                  return !!(t.computed || e);
                }
              case "TSIndexSignature":
                return !0;
            }
            return !1;
          }(e, r) && i.push(";");
          a || (i.push(tL), e3(e, t) && i.push(tL));
        }, "body");
        e1(_node25, eZ.Dangling) && i.push(rv(e, t));
        return [B(_node25.body) ? i5(e.parent) : "", "{", i.length > 0 ? [tC([tL, i]), tL] : "", "}"];
      }(e, t, n);
    case "ThrowStatement":
      return ["throw", iW(e, t, n)];
    case "ReturnStatement":
      return ["return", iW(e, t, n)];
    case "NewExpression":
    case "ImportExpression":
    case "OptionalCallExpression":
    case "CallExpression":
      return rQ(e, t, n);
    case "ObjectExpression":
    case "ObjectPattern":
    case "RecordExpression":
      return ay(e, t, n);
    case "Property":
      return ed(node) ? iq(e, t, n) : iL(e, t, n);
    case "ObjectProperty":
      return iL(e, t, n);
    case "ObjectMethod":
      return iq(e, t, n);
    case "Decorator":
      return ["@", n("expression")];
    case "ArrayExpression":
    case "ArrayPattern":
    case "TupleExpression":
      return iP(e, t, n);
    case "SequenceExpression":
      {
        let {
          parent
        } = e;
        if ("ExpressionStatement" === parent.type || "ForStatement" === parent.type) {
          let t = [];
          e.each(({
            isFirst: e
          }) => {
            e ? t.push(n()) : t.push(",", tC([tj, n()]));
          }, "expressions");
          return tw(t);
        }
        return tw(tq([",", tj], e.map(n, "expressions")));
      }
    case "ThisExpression":
      return "this";
    case "Super":
      return "super";
    case "Directive":
      return [n("value"), a];
    case "UnaryExpression":
      o.push(node.operator);
      /[a-z]$/.test(node.operator) && o.push(" ");
      e1(node.argument) ? o.push(tw(["(", tC([tM, n("argument")]), tM, ")"])) : o.push(n("argument"));
      return o;
    case "UpdateExpression":
      o.push(n("argument"), node.operator);
      node.prefix && o.reverse();
      return o;
    case "ConditionalExpression":
      return av(e, t, n, r);
    case "VariableDeclaration":
      {
        let t = e.map(n, "declarations");
        let r = e.parent;
        let s = "ForStatement" === r.type || "ForInStatement" === r.type || "ForOfStatement" === r.type;
        let _ = node.declarations.some(e => e.init);
        let l;
        1 !== t.length || e1(node.declarations[0]) ? t.length > 0 && (l = tC(t[0])) : l = t[0];
        o = [iT(e), node.kind, l ? [" ", l] : "", tC(t.slice(1).map(e => [",", _ && !s ? tL : tj, e]))];
        s && r.body !== node || o.push(a);
        return tw(o);
      }
    case "WithStatement":
      return tw(["with (", n("object"), ")", iA(node.body, n("body"))]);
    case "IfStatement":
      {
        let r = iA(node.consequent, n("consequent"));
        let a = tw(["if (", tw([tC([tM, n("test")]), tM]), ")", r]);
        if (o.push(a), node.alternate) {
          let r = e1(node.consequent, eZ.Trailing | eZ.Line) || eN(node);
          let a = "BlockStatement" === node.consequent.type && !r;
          o.push(a ? " " : tL);
          e1(node, eZ.Dangling) && o.push(rv(e, t), r ? tL : " ");
          o.push("else", tw(iA(node.alternate, n("alternate"), "IfStatement" === node.alternate.type)));
        }
        return o;
      }
    case "ForStatement":
      {
        let r = iA(node.body, n("body"));
        let a = rv(e, t);
        let o = a ? [a, tM] : "";
        return node.init || node.test || node.update ? [o, tw(["for (", tw([tC([tM, n("init"), ";", tj, n("test"), ";", tj, n("update")]), tM]), ")", r])] : [o, tw(["for (;;)", r])];
      }
    case "WhileStatement":
      return tw(["while (", tw([tC([tM, n("test")]), tM]), ")", iA(node.body, n("body"))]);
    case "ForInStatement":
      return tw(["for (", n("left"), " in ", n("right"), ")", iA(node.body, n("body"))]);
    case "ForOfStatement":
      return tw(["for", node.await ? " await" : "", " (", n("left"), " of ", n("right"), ")", iA(node.body, n("body"))]);
    case "DoWhileStatement":
      o = [tw(["do", iA(node.body, n("body"))])];
      "BlockStatement" === node.body.type ? o.push(" ") : o.push(tL);
      o.push("while (", tw([tC([tM, n("test")]), tM]), ")", a);
      return o;
    case "DoExpression":
      return [node.async ? "async " : "", "do ", n("body")];
    case "BreakStatement":
    case "ContinueStatement":
      o.push("BreakStatement" === node.type ? "break" : "continue");
      node.label && o.push(" ", n("label"));
      o.push(a);
      return o;
    case "LabeledStatement":
      return "EmptyStatement" === node.body.type ? [n("label"), ":;"] : [n("label"), ": ", n("body")];
    case "TryStatement":
      return ["try ", n("block"), node.handler ? [" ", n("handler")] : "", node.finalizer ? [" finally ", n("finalizer")] : ""];
    case "CatchClause":
      if (node.param) {
        let e = e1(node.param, e => !$(e) || e.leading && P(t.originalText, J(e)) || e.trailing && P(t.originalText, R(e), {
          backwards: !0
        }));
        let r = n("param");
        return ["catch ", e ? ["(", tC([tM, r]), tM, ") "] : ["(", r, ") "], n("body")];
      }
      return ["catch ", n("body")];
    case "SwitchStatement":
      return [tw(["switch (", tC([tM, n("discriminant")]), tM, ")"]), " {", node.cases.length > 0 ? tC([tL, tq(tL, e.map(({
        node: e,
        isLast: r
      }) => [n(), !r && e3(e, t) ? tL : ""], "cases"))]) : "", tL, "}"];
    case "SwitchCase":
      {
        node.test ? o.push("case ", n("test"), ":") : o.push("default:");
        e1(node, eZ.Dangling) && o.push(" ", rv(e, t));
        let r = node.consequent.filter(e => "EmptyStatement" !== e.type);
        if (r.length > 0) {
          let i = iX(e, t, n, "consequent");
          o.push(1 === r.length && "BlockStatement" === r[0].type ? [" ", i] : tC([tL, i]));
        }
        return o;
      }
    case "DebuggerStatement":
      return ["debugger", a];
    case "ClassDeclaration":
    case "ClassExpression":
      return i4(e, t, n);
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "MethodDefinition":
      return ae(e, t, n);
    case "ClassProperty":
    case "PropertyDefinition":
    case "ClassPrivateProperty":
    case "ClassAccessorProperty":
    case "AccessorProperty":
      return at(e, t, n);
    case "TemplateElement":
      return tY(node.value.raw);
    case "TemplateLiteral":
      return n2(e, n, t);
    case "TaggedTemplateExpression":
      let _;
      return tU((_ = n("quasi")).label && {
        tagged: !0,
        ..._.label
      }, [n("tag"), n("typeParameters"), tI, _]);
    case "PrivateIdentifier":
      return ["#", node.name];
    case "PrivateName":
      return ["#", n("id")];
    case "TopicReference":
      return "%";
    case "ArgumentPlaceholder":
      return "?";
    case "ModuleExpression":
      {
        o.push("module {");
        let e = n("body");
        e && o.push(tC([tL, e]), tL);
        o.push("}");
        return o;
      }
    default:
      throw new rE(node, "ESTree");
  }
}
function aS(e, t, n) {
  let {
    parent,
    node,
    key
  } = e;
  let o = [n("expression")];
  switch (node.type) {
    case "AsConstExpression":
      o.push(" as const");
      break;
    case "AsExpression":
    case "TSAsExpression":
      o.push(" as ", n("typeAnnotation"));
      break;
    case "SatisfiesExpression":
    case "TSSatisfiesExpression":
      o.push(" satisfies ", n("typeAnnotation"));
  }
  return "callee" === key && ev(parent) || "object" === key && eT(parent) ? tw([tC([tM, ...o]), tM]) : o;
}
function aC(e, t) {
  let {
    node
  } = e;
  let r = t("id");
  node.computed && (r = ["[", r, "]"]);
  let i = "";
  node.initializer && (i = t("initializer"));
  node.init && (i = t("init"));
  return i ? [r, " = ", i] : r;
}
function aE(e, t, n) {
  let {
    node
  } = e;
  return [iT(e), node.$$const ? "const " : "", "enum ", t("id"), " ", "TSEnumDeclaration" === node.type ? ay(e, n, t) : t("body")];
}
function aw(e, t, n) {
  let {
    node
  } = e;
  let i = [iT(e), "interface"];
  let a = [];
  let o = [];
  "InterfaceTypeAnnotation" !== node.type && a.push(" ", n("id"), n("typeParameters"));
  let s = node.typeParameters && !e1(node.typeParameters, eZ.Trailing | eZ.Line);
  B(node.$$extends) && o.push(s ? tF(" ", tj, {
    groupId: i1(node.typeParameters)
  }) : tj, "extends ", (1 === node.$$extends.length ? function (e) {
    return e;
  } : tC)(tq([",", tj], e.map(n, "extends"))));
  e1(node.id, eZ.Trailing) || B(node.$$extends) ? s ? i.push(tw([...a, tC(o)])) : i.push(tw(tC([...a, ...o]))) : i.push(...a, ...o);
  i.push(" ", n("body"));
  return tw(i);
}
function aA(e, t, n) {
  let {
    node
  } = e;
  if (H(node)) return node.type.slice(0, -14).toLowerCase();
  let i = t.semi ? ";" : "";
  switch (node.type) {
    case "DeclareClass":
      return i4(e, t, n);
    case "DeclareFunction":
      return [iT(e), "function ", n("id"), n("predicate"), i];
    case "DeclareModule":
      return ["declare module ", n("id"), " ", n("body")];
    case "DeclareModuleExports":
      return ["declare module.exports", id(e, n), i];
    case "DeclareVariable":
      return [iT(e), node.kind ?? "var", " ", n("id"), i];
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
      return al(e, t, n);
    case "DeclareOpaqueType":
    case "OpaqueType":
      return function (e, t, n) {
        let r = t.semi ? ";" : "";
        let {
          node: _node26
        } = e;
        let a = [iT(e), "opaque type ", n("id"), n("typeParameters")];
        _node26.supertype && a.push(": ", n("supertype"));
        _node26.impltype && a.push(" = ", n("impltype"));
        a.push(r);
        return a;
      }(e, t, n);
    case "DeclareTypeAlias":
    case "TypeAlias":
      return ir(e, t, n);
    case "IntersectionTypeAnnotation":
      return ii(e, t, n);
    case "UnionTypeAnnotation":
      return ia(e, t, n);
    case "ConditionalTypeAnnotation":
      return av(e, t, n);
    case "InferTypeAnnotation":
      return i_(e, t, n);
    case "FunctionTypeAnnotation":
      return io(e, t, n);
    case "TupleTypeAnnotation":
      return iP(e, t, n);
    case "TupleTypeLabeledElement":
      return ic(e, t, n);
    case "TupleTypeSpreadElement":
      return iu(e, t, n);
    case "GenericTypeAnnotation":
      return [n("id"), i2(e, t, n, "typeParameters")];
    case "IndexedAccessType":
    case "OptionalIndexedAccessType":
      return is(e, t, n);
    case "TypeAnnotation":
      return ih(e, t, n);
    case "TypeParameter":
      return i3(e, t, n);
    case "TypeofTypeAnnotation":
      return ig(e, n);
    case "ExistsTypeAnnotation":
      return "*";
    case "ArrayTypeAnnotation":
      return iy(n);
    case "DeclareEnum":
    case "EnumDeclaration":
      return aE(e, n, t);
    case "EnumBooleanBody":
    case "EnumNumberBody":
    case "EnumStringBody":
    case "EnumSymbolBody":
      return function (e, t, n) {
        let {
          node: _node27
        } = e;
        let i;
        if ("EnumSymbolBody" === _node27.type || _node27.explicitType) switch (_node27.type) {
          case "EnumBooleanBody":
            i = "boolean";
            break;
          case "EnumNumberBody":
            i = "number";
            break;
          case "EnumStringBody":
            i = "string";
            break;
          case "EnumSymbolBody":
            i = "symbol";
        }
        return [i ? `of ${i} ` : "", ay(e, n, t)];
      }(e, n, t);
    case "EnumBooleanMember":
    case "EnumNumberMember":
    case "EnumStringMember":
    case "EnumDefaultedMember":
      return aC(e, n);
    case "FunctionTypeParam":
      {
        let t = node.name ? n("name") : e.parent.$$this === node ? "this" : "";
        return [t, iD(e), t ? ": " : "", n("typeAnnotation")];
      }
    case "DeclareInterface":
    case "InterfaceDeclaration":
    case "InterfaceTypeAnnotation":
      return aw(e, t, n);
    case "ClassImplements":
    case "InterfaceExtends":
      return [n("id"), n("typeParameters")];
    case "NullableTypeAnnotation":
      return ["?", n("typeAnnotation")];
    case "Variance":
      {
        let {
          kind
        } = node;
        iO.ok("plus" === kind || "minus" === kind);
        return "plus" === kind ? "+" : "-";
      }
    case "KeyofTypeAnnotation":
      return ["keyof ", n("argument")];
    case "ObjectTypeCallProperty":
      return [node.$$static ? "static " : "", n("value")];
    case "ObjectTypeMappedTypeProperty":
      return function (e, t, n) {
        let {
          node: _node28
        } = e;
        return tw([_node28.variance ? n("variance") : "", "[", tC([n("keyTparam"), " in ", n("sourceType")]), "]", function (e) {
          switch (e) {
            case null:
              return "";
            case "PlusOptional":
              return "+?";
            case "MinusOptional":
              return "-?";
            case "Optional":
              return "?";
          }
        }(_node28.optional), ": ", n("propType")]);
      }(e, 0, n);
    case "ObjectTypeIndexer":
      return [node.$$static ? "static " : "", node.variance ? n("variance") : "", "[", n("id"), node.id ? ": " : "", n("key"), "]: ", n("value")];
    case "ObjectTypeProperty":
      {
        let i = "";
        node.proto ? i = "proto " : node.$$static && (i = "static ");
        return [i, "init" !== node.kind ? node.kind + " " : "", node.variance ? n("variance") : "", iM(e, t, n), iD(e), ed(node) ? "" : ": ", n("value")];
      }
    case "ObjectTypeAnnotation":
      return ay(e, t, n);
    case "ObjectTypeInternalSlot":
      return [node.$$static ? "static " : "", "[[", n("id"), "]]", iD(e), node.method ? "" : ": ", n("value")];
    case "ObjectTypeSpreadProperty":
      return ik(e, n);
    case "QualifiedTypeofIdentifier":
    case "QualifiedTypeIdentifier":
      return [n("qualification"), ".", n("id")];
    case "NullLiteralTypeAnnotation":
      return "null";
    case "BooleanLiteralTypeAnnotation":
      return String(node.value);
    case "StringLiteralTypeAnnotation":
      return tY(L(ej(node), t));
    case "NumberLiteralTypeAnnotation":
      return iB(node.raw ?? node.extra.raw);
    case "BigIntLiteralTypeAnnotation":
      return ai(node.raw ?? node.extra.raw);
    case "TypeCastExpression":
      return ["(", n("expression"), id(e, n), ")"];
    case "TypePredicate":
      return ib(e, n);
    case "TypeParameterDeclaration":
    case "TypeParameterInstantiation":
      return i2(e, t, n, "params");
    case "InferredPredicate":
    case "DeclaredPredicate":
      return ["predicate" !== e.key || "DeclareFunction" === e.parent.type || e.parent.returnType ? " " : ": ", "%checks", ...("DeclaredPredicate" === node.type ? ["(", n("value"), ")"] : [])];
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
      return aS(e, t, n);
  }
}
function ak(e, t, n) {
  var r;
  let {
    node
  } = e;
  if (!node.type.startsWith("TS")) return;
  if (G(node)) return node.type.slice(2, -7).toLowerCase();
  let a = t.semi ? ";" : "";
  let o = [];
  switch (node.type) {
    case "TSThisType":
      return "this";
    case "TSTypeAssertion":
      {
        let e = !(et(node.expression) || en(node.expression));
        let t = tw(["<", tC([tM, n("typeAnnotation")]), tM, ">"]);
        let r = [tF("("), tC([tM, n("expression")]), tM, tF(")")];
        return e ? tA([[t, n("expression")], [t, tw(r, {
          shouldBreak: !0
        })], [t, n("expression")]]) : tw([t, n("expression")]);
      }
    case "TSDeclareFunction":
      return iJ(e, n, t);
    case "TSExportAssignment":
      return ["export = ", n("expression"), a];
    case "TSModuleBlock":
      return iY(e, t, n);
    case "TSInterfaceBody":
    case "TSTypeLiteral":
      return ay(e, t, n);
    case "TSTypeAliasDeclaration":
      return ir(e, t, n);
    case "TSQualifiedName":
      return [n("left"), ".", n("right")];
    case "TSAbstractMethodDefinition":
    case "TSDeclareMethod":
      return ae(e, t, n);
    case "TSAbstractAccessorProperty":
    case "TSAbstractPropertyDefinition":
      return at(e, t, n);
    case "TSInterfaceHeritage":
    case "TSClassImplements":
    case "TSExpressionWithTypeArguments":
    case "TSInstantiationExpression":
      return [n("expression"), n("typeParameters")];
    case "TSTemplateLiteralType":
      return n2(e, n, t);
    case "TSNamedTupleMember":
      return ic(e, t, n);
    case "TSRestType":
      return iu(e, t, n);
    case "TSOptionalType":
      return [n("typeAnnotation"), "?"];
    case "TSInterfaceDeclaration":
      return aw(e, t, n);
    case "TSTypeParameterDeclaration":
    case "TSTypeParameterInstantiation":
      return i2(e, t, n, "params");
    case "TSTypeParameter":
      return i3(e, t, n);
    case "TSAsExpression":
    case "TSSatisfiesExpression":
      return aS(e, t, n);
    case "TSArrayType":
      return iy(n);
    case "TSPropertySignature":
      return [node.readonly ? "readonly " : "", iM(e, t, n), iD(e), id(e, n)];
    case "TSParameterProperty":
      return [iF(node), node.$$static ? "static " : "", node.override ? "override " : "", node.readonly ? "readonly " : "", n("parameter")];
    case "TSTypeQuery":
      return ig(e, n);
    case "TSIndexSignature":
      {
        let r = node.parameters.length > 1 ? tF(eM(t) ? "," : "") : "";
        let o = tw([tC([tM, tq([", ", tM], e.map(n, "parameters"))]), r, tM]);
        let s = "ClassBody" === e.parent.type && "body" === e.key;
        return [s && node.$$static ? "static " : "", node.readonly ? "readonly " : "", "[", node.parameters ? o : "", "]", id(e, n), s ? a : ""];
      }
    case "TSTypePredicate":
      return ib(e, n);
    case "TSNonNullExpression":
      return [n("expression"), "!"];
    case "TSImportType":
      return [node.isTypeOf ? "typeof " : "", "import(", n("argument"), ")", node.qualifier ? [".", n("qualifier")] : "", i2(e, t, n, node.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSLiteralType":
      return n("literal");
    case "TSIndexedAccessType":
      return is(e, t, n);
    case "TSTypeOperator":
      return [node.operator, " ", n("typeAnnotation")];
    case "TSMappedType":
      return function (e, t, n) {
        let {
          node: _node29
        } = e;
        let i = t9(t.originalText, R(_node29), R(_node29.typeParameter));
        return tw(["{", tC([t.bracketSpacing ? tj : tM, tw([n("typeParameter"), _node29.optional ? i0(_node29.optional, "?") : "", _node29.typeAnnotation ? ": " : "", n("typeAnnotation")]), t.semi ? tF(";") : ""]), rv(e, t), t.bracketSpacing ? tj : tM, "}"], {
          shouldBreak: i
        });
      }(e, t, n);
    case "TSMethodSignature":
      {
        let r = node.kind && "method" !== node.kind ? `${node.kind} ` : "";
        o.push(iF(node), r, node.computed ? "[" : "", n("key"), node.computed ? "]" : "", iD(e));
        let a = r8(e, n, t, !1, !0);
        let s = node.returnType ? "returnType" : "typeAnnotation";
        let _ = node[s];
        let l = _ ? id(e, n, s) : "";
        let u = r7(node, l);
        o.push(u ? tw(a) : a);
        _ && o.push(tw(l));
        return tw(o);
      }
    case "TSNamespaceExportDeclaration":
      return ["export as namespace ", n("id"), t.semi ? ";" : ""];
    case "TSEnumDeclaration":
      return aE(e, n, t);
    case "TSEnumMember":
      return aC(e, n);
    case "TSImportEqualsDeclaration":
      return [node.isExport ? "export " : "", "import ", ap(node, !1), n("id"), " = ", n("moduleReference"), t.semi ? ";" : ""];
    case "TSExternalModuleReference":
      return ["require(", n("expression"), ")"];
    case "TSModuleDeclaration":
      {
        let {
          parent
        } = e;
        let _ = "TSModuleDeclaration" === parent.type;
        let l = (null == (r = node.body) ? void 0 : r.type) === "TSModuleDeclaration";
        if (_) o.push(".");else if (o.push(iT(e)), !("global" === node.kind || node.global)) {
          let e = node.kind ?? (ea(node.id) || as(t, R(node), R(node.id)).trim().endsWith("module") ? "module" : "namespace");
          o.push(e, " ");
        }
        o.push(n("id"));
        l ? o.push(n("body")) : node.body ? o.push(" ", tw(n("body"))) : o.push(a);
        return o;
      }
    case "TSConditionalType":
      return av(e, t, n);
    case "TSInferType":
      return i_(e, t, n);
    case "TSIntersectionType":
      return ii(e, t, n);
    case "TSUnionType":
      return ia(e, t, n);
    case "TSFunctionType":
    case "TSCallSignatureDeclaration":
    case "TSConstructorType":
    case "TSConstructSignatureDeclaration":
      return io(e, t, n);
    case "TSTupleType":
      return iP(e, t, n);
    case "TSTypeReference":
      return [n("typeName"), i2(e, t, n, "typeParameters")];
    case "TSTypeAnnotation":
      return ih(e, t, n);
    case "TSEmptyBodyFunctionExpression":
      return iU(e, t, n);
    case "TSJSDocAllType":
      return "*";
    case "TSJSDocUnknownType":
      return "?";
    case "TSJSDocNullableType":
      return il(e, n, "?");
    case "TSJSDocNonNullableType":
      return il(e, n, "!");
    default:
      throw new rE(node, "TypeScript");
  }
}
var aF = V(["ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "ClassPrivateProperty", "MethodDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod"]);
var aP = function (e, t, n, r) {
  var i;
  e.isRoot && (t.__onHtmlBindingRoot || i.call(t, e.node, t));
  let a = function (e, t, n, r) {
    if (rB(e)) return rh(e, t);
    for (let i of [rJ, rI, aA, ak, aT]) {
      let a = i(e, t, n, r);
      if (void 0 !== a) return a;
    }
  }(e, t, n, r);
  if (!a) return "";
  let {
    node
  } = e;
  if (aF(node)) return a;
  let s = B(node.decorators);
  let _ = function (e, t, n) {
    let {
      node: _node30,
      parent
    } = e;
    let {
      decorators
    } = r;
    if (!B(decorators) || rW(parent) || rB(e)) return "";
    let o = "ClassExpression" === _node30.type || "ClassDeclaration" === _node30.type || rK(_node30, t);
    return ["declaration" === e.key && ee(parent) ? tL : o ? tO : "", tq(tj, e.map(n, "decorators")), tj];
  }(e, t, n);
  let l = "ClassExpression" === node.type;
  if (s && !l) return tZ(a, e => tw([_, e]));
  let u = ry(e, t);
  let c = function (e, t) {
    if (t.semi || an(e, t) || ar(e, t)) return !1;
    let {
      node: _node31,
      key,
      parent
    } = e;
    return !!("ExpressionStatement" === _node31.type && ("body" === key && ("Program" === parent.type || "BlockStatement" === parent.type || "StaticBlock" === parent.type || "TSModuleBlock" === parent.type) || "consequent" === key && "SwitchCase" === parent.type) && e.call(() => function e(t, n) {
      let {
        node: _node32
      } = t;
      switch (_node32.type) {
        case "ParenthesizedExpression":
        case "TypeCastExpression":
        case "ArrayExpression":
        case "ArrayPattern":
        case "TemplateLiteral":
        case "TemplateElement":
        case "RegExpLiteral":
          return !0;
        case "ArrowFunctionExpression":
          if (!iz(t, n)) return !0;
          break;
        case "UnaryExpression":
          {
            let {
              prefix,
              operator
            } = _node32;
            if (prefix && ("+" === operator || "-" === operator)) return !0;
            break;
          }
        case "BindExpression":
          if (!_node32.object) return !0;
          break;
        case "Literal":
          if (_node32.regex) return !0;
          break;
        default:
          if (ep(_node32)) return !0;
      }
      return !!ry(t, n) || !!Y(_node32) && t.call(() => e(t, n), ...Q(_node32));
    }(e, t), "expression"));
  }(e, t);
  return _ || u || c ? tZ(a, e => [c ? ";" : "", u ? "(" : "", u && l && s ? [tC([tj, _, e]), tj] : [_, e], u ? ")" : ""]) : a;
};
var aN = {
  avoidAstMutation: !0
};
var aI = {};
l(aI, {
  getVisitorKeys: () => aO,
  massageAstNode: () => aL,
  print: () => aB
});
var aO = K({
  JsonRoot: ["node"],
  ArrayExpression: ["elements"],
  ObjectExpression: ["properties"],
  ObjectProperty: ["key", "value"],
  UnaryExpression: ["argument"],
  NullLiteral: [],
  BooleanLiteral: [],
  StringLiteral: [],
  NumericLiteral: [],
  Identifier: [],
  TemplateLiteral: ["quasis"],
  TemplateElement: []
});
function aB(e, t, n) {
  let {
    node
  } = e;
  switch (node.type) {
    case "JsonRoot":
      return [n("node"), tL];
    case "ArrayExpression":
      if (0 === node.elements.length) return "[]";
      return ["[", tC([tL, tq([",", tL], e.map(() => null === e.node ? "null" : n(), "elements"))]), tL, "]"];
    case "ObjectExpression":
      return 0 === node.properties.length ? "{}" : ["{", tC([tL, tq([",", tL], e.map(n, "properties"))]), tL, "}"];
    case "ObjectProperty":
      return [n("key"), ": ", n("value")];
    case "UnaryExpression":
      return ["+" === node.operator ? "" : node.operator, n("argument")];
    case "NullLiteral":
      return "null";
    case "BooleanLiteral":
      return node.value ? "true" : "false";
    case "StringLiteral":
      return JSON.stringify(node.value);
    case "NumericLiteral":
      return aj(e) ? JSON.stringify(String(node.value)) : JSON.stringify(node.value);
    case "Identifier":
      return aj(e) ? JSON.stringify(node.name) : node.name;
    case "TemplateLiteral":
      return n(["quasis", 0]);
    case "TemplateElement":
      return JSON.stringify(node.value.cooked);
    default:
      throw new rE(node, "JSON");
  }
}
function aj(e) {
  return "key" === e.key && "ObjectProperty" === e.parent.type;
}
var aM = new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
function aL(e, t) {
  let {
    type
  } = e;
  if ("ObjectProperty" === type) {
    let {
      key
    } = e;
    "Identifier" === key.type ? t.key = {
      type: "StringLiteral",
      value: key.name
    } : "NumericLiteral" === key.type && (t.key = {
      type: "StringLiteral",
      value: String(key.value)
    });
    return;
  }
  if ("UnaryExpression" === type && "+" === e.operator) return t.argument;
  if ("ArrayExpression" === type) {
    for (let [n, r] of e.elements.entries()) null === r && t.elements.splice(n, 0, {
      type: "NullLiteral"
    });
    return;
  }
  if ("TemplateLiteral" === type) return {
    type: "StringLiteral",
    value: e.quasis[0].value.cooked
  };
}
aL.ignoredProperties = aM;
var aR = {
  bracketSpacing: {
    category: "Common",
    type: "boolean",
    default: !0,
    description: "Print spaces between brackets.",
    oppositeDescription: "Do not print spaces between brackets."
  },
  singleQuote: {
    category: "Common",
    type: "boolean",
    default: !1,
    description: "Use single quotes instead of double quotes."
  },
  bracketSameLine: {
    category: "Common",
    type: "boolean",
    default: !1,
    description: "Put > of opening tags on the last line instead of on a new line."
  },
  singleAttributePerLine: {
    category: "Common",
    type: "boolean",
    default: !1,
    description: "Enforce single attribute per line in HTML, Vue and JSX."
  }
};
var aJ = "JavaScript";
var $$aq2 = {
  arrowParens: {
    category: aJ,
    type: "choice",
    default: "always",
    description: "Include parentheses around a sole arrow function parameter.",
    choices: [{
      value: "always",
      description: "Always include parens. Example: `(x) => x`"
    }, {
      value: "avoid",
      description: "Omit parens when possible. Example: `x => x`"
    }]
  },
  bracketSameLine: aR.bracketSameLine,
  bracketSpacing: aR.bracketSpacing,
  jsxBracketSameLine: {
    category: aJ,
    type: "boolean",
    description: "Put > on the last line instead of at a new line.",
    deprecated: "2.4.0"
  },
  semi: {
    category: aJ,
    type: "boolean",
    default: !0,
    description: "Print semicolons.",
    oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
  },
  experimentalTernaries: {
    category: aJ,
    type: "boolean",
    default: !1,
    description: "Use curious ternaries, with the question mark after the condition.",
    oppositeDescription: "Default behavior of ternaries; keep question marks on the same line as the consequent."
  },
  singleQuote: aR.singleQuote,
  jsxSingleQuote: {
    category: aJ,
    type: "boolean",
    default: !1,
    description: "Use single quotes in JSX."
  },
  quoteProps: {
    category: aJ,
    type: "choice",
    default: "as-needed",
    description: "Change when properties in objects are quoted.",
    choices: [{
      value: "as-needed",
      description: "Only add quotes around object properties where required."
    }, {
      value: "consistent",
      description: "If at least one property in an object requires quotes, quote all properties."
    }, {
      value: "preserve",
      description: "Respect the input use of quotes in object properties."
    }]
  },
  trailingComma: {
    category: aJ,
    type: "choice",
    default: "all",
    description: "Print trailing commas wherever possible when multi-line.",
    choices: [{
      value: "all",
      description: "Trailing commas wherever possible (including function arguments)."
    }, {
      value: "es5",
      description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
    }, {
      value: "none",
      description: "No trailing commas."
    }]
  },
  singleAttributePerLine: aR.singleAttributePerLine
};
var $$aU3 = {
  estree: y,
  "estree-json": aI
};
var $$az1 = [{
  linguistLanguageId: 183,
  name: "JavaScript",
  type: "programming",
  tmScope: "source.js",
  aceMode: "javascript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "text/javascript",
  color: "#f1e05a",
  aliases: ["js", "node"],
  extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib", ".wxs"],
  filenames: ["Jakefile"],
  interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell", "zx"],
  parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"],
  vscodeLanguageIds: ["javascript", "mongo"]
}, {
  linguistLanguageId: 183,
  name: "Flow",
  type: "programming",
  tmScope: "source.js",
  aceMode: "javascript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "text/javascript",
  color: "#f1e05a",
  aliases: [],
  extensions: [".js.flow"],
  filenames: [],
  interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"],
  parsers: ["flow", "babel-flow"],
  vscodeLanguageIds: ["javascript"]
}, {
  linguistLanguageId: 183,
  name: "JSX",
  type: "programming",
  tmScope: "source.js.jsx",
  aceMode: "javascript",
  codemirrorMode: "jsx",
  codemirrorMimeType: "text/jsx",
  color: void 0,
  aliases: void 0,
  extensions: [".jsx"],
  filenames: void 0,
  interpreters: void 0,
  parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"],
  vscodeLanguageIds: ["javascriptreact"],
  group: "JavaScript"
}, {
  linguistLanguageId: 378,
  name: "TypeScript",
  type: "programming",
  color: "#3178c6",
  aliases: ["ts"],
  interpreters: ["deno", "ts-node"],
  extensions: [".ts", ".cts", ".mts"],
  tmScope: "source.ts",
  aceMode: "typescript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "application/typescript",
  parsers: ["typescript", "babel-ts"],
  vscodeLanguageIds: ["typescript"]
}, {
  linguistLanguageId: 0x5a816a4,
  name: "TSX",
  type: "programming",
  color: "#3178c6",
  group: "TypeScript",
  extensions: [".tsx"],
  tmScope: "source.tsx",
  aceMode: "javascript",
  codemirrorMode: "jsx",
  codemirrorMimeType: "text/jsx",
  parsers: ["typescript", "babel-ts"],
  vscodeLanguageIds: ["typescriptreact"]
}, {
  linguistLanguageId: 174,
  name: "JSON.stringify",
  type: "data",
  color: "#292929",
  tmScope: "source.json",
  aceMode: "json",
  codemirrorMode: "javascript",
  codemirrorMimeType: "application/json",
  aliases: ["geojson", "jsonl", "topojson"],
  extensions: [".importmap"],
  filenames: ["package.json", "package-lock.json", "composer.json"],
  parsers: ["json-stringify"],
  vscodeLanguageIds: ["json"]
}, {
  linguistLanguageId: 174,
  name: "JSON",
  type: "data",
  color: "#292929",
  tmScope: "source.json",
  aceMode: "json",
  codemirrorMode: "javascript",
  codemirrorMimeType: "application/json",
  aliases: ["geojson", "jsonl", "topojson"],
  extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
  filenames: [".all-contributorsrc", ".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "flake.lock", "mcmod.info", ".babelrc", ".jscsrc", ".jshintrc", ".jslintrc", ".swcrc"],
  parsers: ["json"],
  vscodeLanguageIds: ["json"]
}, {
  linguistLanguageId: 423,
  name: "JSON with Comments",
  type: "data",
  color: "#292929",
  group: "JSON",
  tmScope: "source.js",
  aceMode: "javascript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "text/javascript",
  aliases: ["jsonc"],
  extensions: [".jsonc", ".code-snippets", ".code-workspace", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
  filenames: [],
  parsers: ["jsonc"],
  vscodeLanguageIds: ["jsonc"]
}, {
  linguistLanguageId: 175,
  name: "JSON5",
  type: "data",
  color: "#267CB9",
  extensions: [".json5"],
  tmScope: "source.js",
  aceMode: "javascript",
  codemirrorMode: "javascript",
  codemirrorMimeType: "application/json",
  parsers: ["json5"],
  vscodeLanguageIds: ["json5"]
}];
var $$aK0 = h;
export const _$$default = $$aK0;
export const languages = $$az1;
export const options = $$aq2;
export const printers = $$aU3;