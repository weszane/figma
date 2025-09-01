import { getAllMatches, isName } from "../vendor/673785";
let s = {
  allowBooleanAttributes: !1,
  unpairedTags: []
};
function o(e) {
  return " " === e || "	" === e || "\n" === e || "\r" === e;
}
function a(e, r) {
  let n = r;
  for (; r < e.length; r++) if ("?" == e[r] || " " == e[r]) {
    let i = e.substr(n, r - n);
    if (r > 5 && "xml" === i) return O("InvalidXml", "XML declaration allowed only at the start of the document.", k(e, r));
    if ("?" != e[r] || ">" != e[r + 1]) continue;
    r++;
    break;
  }
  return r;
}
function h(e, r) {
  if (e.length > r + 5 && "-" === e[r + 1] && "-" === e[r + 2]) {
    for (r += 3; r < e.length; r++) if ("-" === e[r] && "-" === e[r + 1] && ">" === e[r + 2]) {
      r += 2;
      break;
    }
  } else if (e.length > r + 8 && "D" === e[r + 1] && "O" === e[r + 2] && "C" === e[r + 3] && "T" === e[r + 4] && "Y" === e[r + 5] && "P" === e[r + 6] && "E" === e[r + 7]) {
    let n = 1;
    for (r += 8; r < e.length; r++) if ("<" === e[r]) n++;else if (">" === e[r] && 0 == --n) break;
  } else if (e.length > r + 9 && "[" === e[r + 1] && "C" === e[r + 2] && "D" === e[r + 3] && "A" === e[r + 4] && "T" === e[r + 5] && "A" === e[r + 6] && "[" === e[r + 7]) {
    for (r += 8; r < e.length; r++) if ("]" === e[r] && "]" === e[r + 1] && ">" === e[r + 2]) {
      r += 2;
      break;
    }
  }
  return r;
}
exports.validate = function (e, r) {
  r = Object.assign({}, s, r);
  let n = [];
  let i = !1;
  let d = !1;
  "\uFEFF" === e[0] && (e = e.substr(1));
  for (let s = 0; s < e.length; s++) if ("<" === e[s] && "?" === e[s + 1]) {
    if (s += 2, (s = a(e, s)).err) return s;
  } else if ("<" === e[s]) {
    let p = s;
    if ("!" === e[++s]) {
      s = h(e, s);
      continue;
    }
    {
      let m = !1;
      "/" === e[s] && (m = !0, s++);
      let y = "";
      for (; s < e.length && ">" !== e[s] && " " !== e[s] && "	" !== e[s] && "\n" !== e[s] && "\r" !== e[s]; s++) y += e[s];
      if ("/" === (y = y.trim())[y.length - 1] && (y = y.substring(0, y.length - 1), s--), !w(y)) {
        let r;
        return O("InvalidTag", r = 0 === y.trim().length ? "Invalid space after '<'." : "Tag '" + y + "' is an invalid name.", k(e, s));
      }
      let x = g(e, s);
      if (!1 === x) return O("InvalidAttr", "Attributes for '" + y + "' have open quote.", k(e, s));
      let _ = x.value;
      if (s = x.index, "/" === _[_.length - 1]) {
        let n = s - _.length;
        let o = v(_ = _.substring(0, _.length - 1), r);
        if (!0 !== o) return O(o.err.code, o.err.msg, k(e, n + o.err.line));
        i = !0;
      } else if (m) {
        if (!x.tagClosed) return O("InvalidTag", "Closing tag '" + y + "' doesn't have proper closing.", k(e, s));
        if (_.trim().length > 0) return O("InvalidTag", "Closing tag '" + y + "' can't have attributes or invalid starting.", k(e, p));
        {
          if (0 === n.length) return O("InvalidTag", "Closing tag '" + y + "' has not been opened.", k(e, p));
          let r = n.pop();
          if (y !== r.tagName) {
            let n = k(e, r.tagStartPos);
            return O("InvalidTag", "Expected closing tag '" + r.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + y + "'.", k(e, p));
          }
          0 == n.length && (d = !0);
        }
      } else {
        let o = v(_, r);
        if (!0 !== o) return O(o.err.code, o.err.msg, k(e, s - _.length + o.err.line));
        if (!0 === d) return O("InvalidXml", "Multiple possible root nodes found.", k(e, s));
        -1 !== r.unpairedTags.indexOf(y) || n.push({
          tagName: y,
          tagStartPos: p
        });
        i = !0;
      }
      for (s++; s < e.length; s++) if ("<" === e[s]) {
        if ("!" === e[s + 1]) {
          s = h(e, ++s);
          continue;
        }
        if ("?" === e[s + 1]) {
          if ((s = a(e, ++s)).err) return s;
        } else break;
      } else if ("&" === e[s]) {
        let r = b(e, s);
        if (-1 == r) return O("InvalidChar", "char '&' is not expected.", k(e, s));
        s = r;
      } else if (!0 === d && !o(e[s])) return O("InvalidXml", "Extra text at the end", k(e, s));
      "<" === e[s] && s--;
    }
  } else {
    if (o(e[s])) continue;
    return O("InvalidChar", "char '" + e[s] + "' is not expected.", k(e, s));
  }
  return i ? 1 == n.length ? O("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", k(e, n[0].tagStartPos)) : !(n.length > 0) || O("InvalidXml", "Invalid '" + JSON.stringify(n.map(e => e.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
    line: 1,
    col: 1
  }) : O("InvalidXml", "Start tag expected.", 1);
};
let d = '"';
let p = "'";
function g(e, r) {
  let n = "";
  let i = "";
  let s = !1;
  for (; r < e.length; r++) {
    if (e[r] === d || e[r] === p) "" === i ? i = e[r] : i !== e[r] || (i = "");else if (">" === e[r] && "" === i) {
      s = !0;
      break;
    }
    n += e[r];
  }
  return "" === i && {
    value: n,
    index: r,
    tagClosed: s
  };
}
let m = RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
function v(e, r) {
  let n = getAllMatches(e, m);
  let s = {};
  for (let e = 0; e < n.length; e++) {
    if (0 === n[e][1].length) return O("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", _(n[e]));
    if (void 0 !== n[e][3] && void 0 === n[e][4]) return O("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", _(n[e]));
    if (void 0 === n[e][3] && !r.allowBooleanAttributes) return O("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", _(n[e]));
    let i = n[e][2];
    if (!x(i)) return O("InvalidAttr", "Attribute '" + i + "' is an invalid name.", _(n[e]));
    if (s.hasOwnProperty(i)) return O("InvalidAttr", "Attribute '" + i + "' is repeated.", _(n[e]));
    s[i] = 1;
  }
  return !0;
}
function y(e, r) {
  let n = /\d/;
  for ("x" === e[r] && (r++, n = /[\da-fA-F]/); r < e.length; r++) {
    if (";" === e[r]) return r;
    if (!e[r].match(n)) break;
  }
  return -1;
}
function b(e, r) {
  if (";" === e[++r]) return -1;
  if ("#" === e[r]) return y(e, ++r);
  let n = 0;
  for (; r < e.length; r++, n++) if (!e[r].match(/\w/) || !(n < 20)) {
    if (";" === e[r]) break;
    return -1;
  }
  return r;
}
function O(e, r, n) {
  return {
    err: {
      code: e,
      msg: r,
      line: n.line || n,
      col: n.col
    }
  };
}
function x(e) {
  return isName(e);
}
function w(e) {
  return isName(e);
}
function k(e, r) {
  let n = e.substring(0, r).split(/\r?\n/);
  return {
    line: n.length,
    col: n[n.length - 1].length + 1
  };
}
function _(e) {
  return e.startIndex + e[1].length;
}