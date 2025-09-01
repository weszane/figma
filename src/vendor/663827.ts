import { getAllMatches, isExist } from "../vendor/673785";
import s from "../vendor/143845";
import o from "../vendor/695009";
import a from "../vendor/487608";
class h {
  constructor(e) {
    this.options = e;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      apos: {
        regex: /&(apos|#39|#x27);/g,
        val: "'"
      },
      gt: {
        regex: /&(gt|#62|#x3E);/g,
        val: ">"
      },
      lt: {
        regex: /&(lt|#60|#x3C);/g,
        val: "<"
      },
      quot: {
        regex: /&(quot|#34|#x22);/g,
        val: '"'
      }
    };
    this.ampEntity = {
      regex: /&(amp|#38|#x26);/g,
      val: "&"
    };
    this.htmlEntities = {
      space: {
        regex: /&(nbsp|#160);/g,
        val: " "
      },
      cent: {
        regex: /&(cent|#162);/g,
        val: "\xa2"
      },
      pound: {
        regex: /&(pound|#163);/g,
        val: "\xa3"
      },
      yen: {
        regex: /&(yen|#165);/g,
        val: "\xa5"
      },
      euro: {
        regex: /&(euro|#8364);/g,
        val: "\u20AC"
      },
      copyright: {
        regex: /&(copy|#169);/g,
        val: "\xa9"
      },
      reg: {
        regex: /&(reg|#174);/g,
        val: "\xae"
      },
      inr: {
        regex: /&(inr|#8377);/g,
        val: "\u20B9"
      },
      num_dec: {
        regex: /&#([0-9]{1,7});/g,
        val: (e, r) => String.fromCharCode(Number.parseInt(r, 10))
      },
      num_hex: {
        regex: /&#x([0-9a-fA-F]{1,6});/g,
        val: (e, r) => String.fromCharCode(Number.parseInt(r, 16))
      }
    };
    this.addExternalEntities = d;
    this.parseXml = y;
    this.parseTextData = p;
    this.resolveNameSpace = g;
    this.buildAttributesMap = v;
    this.isItStopNode = w;
    this.replaceEntitiesValue = O;
    this.readStopNodeData = E;
    this.saveTextToParentTag = x;
    this.addChild = b;
  }
}
function d(e) {
  let r = Object.keys(e);
  for (let n = 0; n < r.length; n++) {
    let i = r[n];
    this.lastEntities[i] = {
      regex: RegExp("&" + i + ";", "g"),
      val: e[i]
    };
  }
}
function p(e, r, n, i, s, o, a) {
  if (void 0 !== e && (this.options.trimValues && !i && (e = e.trim()), e.length > 0)) {
    a || (e = this.replaceEntitiesValue(e));
    let i = this.options.tagValueProcessor(r, e, n, s, o);
    return null == i ? e : typeof i != typeof e || i !== e ? i : this.options.trimValues ? A(e, this.options.parseTagValue, this.options.numberParseOptions) : e.trim() === e ? A(e, this.options.parseTagValue, this.options.numberParseOptions) : e;
  }
}
function g(e) {
  if (this.options.removeNSPrefix) {
    let r = e.split(":");
    let n = "/" === e.charAt(0) ? "/" : "";
    if ("xmlns" === r[0]) return "";
    2 === r.length && (e = n + r[1]);
  }
  return e;
}
let m = RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
function v(e, r, n) {
  if (!this.options.ignoreAttributes && "string" == typeof e) {
    let n = getAllMatches(e, m);
    let s = n.length;
    let o = {};
    for (let e = 0; e < s; e++) {
      let i = this.resolveNameSpace(n[e][1]);
      let s = n[e][4];
      let a = this.options.attributeNamePrefix + i;
      if (i.length) {
        if (this.options.transformAttributeName && (a = this.options.transformAttributeName(a)), "__proto__" === a && (a = "#__proto__"), void 0 !== s) {
          this.options.trimValues && (s = s.trim());
          s = this.replaceEntitiesValue(s);
          let e = this.options.attributeValueProcessor(i, s, r);
          null == e ? o[a] = s : typeof e != typeof s || e !== s ? o[a] = e : o[a] = A(s, this.options.parseAttributeValue, this.options.numberParseOptions);
        } else this.options.allowBooleanAttributes && (o[a] = !0);
      }
    }
    if (Object.keys(o).length) {
      if (this.options.attributesGroupName) {
        let e = {};
        e[this.options.attributesGroupName] = o;
        return e;
      }
      return o;
    }
  }
}
let y = function (e) {
  e = e.replace(/\r\n?/g, "\n");
  let r = new s("!xml");
  let n = r;
  let i = "";
  let a = "";
  for (let h = 0; h < e.length; h++) if ("<" === e[h]) {
    if ("/" === e[h + 1]) {
      let r = _(e, ">", h, "Closing Tag is not closed.");
      let s = e.substring(h + 2, r).trim();
      if (this.options.removeNSPrefix) {
        let e = s.indexOf(":");
        -1 !== e && (s = s.substr(e + 1));
      }
      this.options.transformTagName && (s = this.options.transformTagName(s));
      n && (i = this.saveTextToParentTag(i, n, a));
      let o = a.substring(a.lastIndexOf(".") + 1);
      if (s && -1 !== this.options.unpairedTags.indexOf(s)) throw Error(`Unpaired tag can not be used as closing tag: </${s}>`);
      let d = 0;
      o && -1 !== this.options.unpairedTags.indexOf(o) ? (d = a.lastIndexOf(".", a.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : d = a.lastIndexOf(".");
      a = a.substring(0, d);
      n = this.tagsNodeStack.pop();
      i = "";
      h = r;
    } else if ("?" === e[h + 1]) {
      let r = S(e, h, !1, "?>");
      if (!r) throw Error("Pi Tag is not closed.");
      if (i = this.saveTextToParentTag(i, n, a), this.options.ignoreDeclaration && "?xml" === r.tagName || this.options.ignorePiTags) ;else {
        let e = new s(r.tagName);
        e.add(this.options.textNodeName, "");
        r.tagName !== r.tagExp && r.attrExpPresent && (e[":@"] = this.buildAttributesMap(r.tagExp, a, r.tagName));
        this.addChild(n, e, a);
      }
      h = r.closeIndex + 1;
    } else if ("!--" === e.substr(h + 1, 3)) {
      let r = _(e, "--\x3e", h + 4, "Comment is not closed.");
      if (this.options.commentPropName) {
        let s = e.substring(h + 4, r - 2);
        i = this.saveTextToParentTag(i, n, a);
        n.add(this.options.commentPropName, [{
          [this.options.textNodeName]: s
        }]);
      }
      h = r;
    } else if ("!D" === e.substr(h + 1, 2)) {
      let r = o(e, h);
      this.docTypeEntities = r.entities;
      h = r.i;
    } else if ("![" === e.substr(h + 1, 2)) {
      let r = _(e, "]]>", h, "CDATA is not closed.") - 2;
      let s = e.substring(h + 9, r);
      i = this.saveTextToParentTag(i, n, a);
      let o = this.parseTextData(s, n.tagname, a, !0, !1, !0, !0);
      void 0 == o && (o = "");
      this.options.cdataPropName ? n.add(this.options.cdataPropName, [{
        [this.options.textNodeName]: s
      }]) : n.add(this.options.textNodeName, o);
      h = r + 2;
    } else {
      let o = S(e, h, this.options.removeNSPrefix);
      let d = o.tagName;
      let p = o.rawTagName;
      let g = o.tagExp;
      let m = o.attrExpPresent;
      let v = o.closeIndex;
      this.options.transformTagName && (d = this.options.transformTagName(d));
      n && i && "!xml" !== n.tagname && (i = this.saveTextToParentTag(i, n, a, !1));
      let y = n;
      if (y && -1 !== this.options.unpairedTags.indexOf(y.tagname) && (n = this.tagsNodeStack.pop(), a = a.substring(0, a.lastIndexOf("."))), d !== r.tagname && (a += a ? "." + d : d), this.isItStopNode(this.options.stopNodes, a, d)) {
        let r = "";
        if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
          "/" === d[d.length - 1] ? (d = d.substr(0, d.length - 1), a = a.substr(0, a.length - 1), g = d) : g = g.substr(0, g.length - 1);
          h = o.closeIndex;
        } else if (-1 !== this.options.unpairedTags.indexOf(d)) h = o.closeIndex;else {
          let n = this.readStopNodeData(e, p, v + 1);
          if (!n) throw Error(`Unexpected end of ${p}`);
          h = n.i;
          r = n.tagContent;
        }
        let i = new s(d);
        d !== g && m && (i[":@"] = this.buildAttributesMap(g, a, d));
        r && (r = this.parseTextData(r, d, a, !0, m, !0, !0));
        a = a.substr(0, a.lastIndexOf("."));
        i.add(this.options.textNodeName, r);
        this.addChild(n, i, a);
      } else {
        if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
          "/" === d[d.length - 1] ? (d = d.substr(0, d.length - 1), a = a.substr(0, a.length - 1), g = d) : g = g.substr(0, g.length - 1);
          this.options.transformTagName && (d = this.options.transformTagName(d));
          let e = new s(d);
          d !== g && m && (e[":@"] = this.buildAttributesMap(g, a, d));
          this.addChild(n, e, a);
          a = a.substr(0, a.lastIndexOf("."));
        } else {
          let e = new s(d);
          this.tagsNodeStack.push(n);
          d !== g && m && (e[":@"] = this.buildAttributesMap(g, a, d));
          this.addChild(n, e, a);
          n = e;
        }
        i = "";
        h = v;
      }
    }
  } else i += e[h];
  return r.child;
};
function b(e, r, n) {
  let i = this.options.updateTag(r.tagname, n, r[":@"]);
  !1 === i || ("string" == typeof i && (r.tagname = i), e.addChild(r));
}
let O = function (e) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      let n = this.docTypeEntities[r];
      e = e.replace(n.regx, n.val);
    }
    for (let r in this.lastEntities) {
      let n = this.lastEntities[r];
      e = e.replace(n.regex, n.val);
    }
    if (this.options.htmlEntities) for (let r in this.htmlEntities) {
      let n = this.htmlEntities[r];
      e = e.replace(n.regex, n.val);
    }
    e = e.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return e;
};
function x(e, r, n, i) {
  e && (void 0 === i && (i = 0 === Object.keys(r.child).length), void 0 !== (e = this.parseTextData(e, r.tagname, n, !1, !!r[":@"] && 0 !== Object.keys(r[":@"]).length, i)) && "" !== e && r.add(this.options.textNodeName, e), e = "");
  return e;
}
function w(e, r, n) {
  let i = "*." + n;
  for (let n in e) {
    let s = e[n];
    if (i === s || r === s) return !0;
  }
  return !1;
}
function k(e, r, n = ">") {
  let i;
  let s = "";
  for (let o = r; o < e.length; o++) {
    let r = e[o];
    if (i) r === i && (i = "");else if ('"' === r || "'" === r) i = r;else if (r === n[0]) {
      if (!n[1] || e[o + 1] === n[1]) return {
        data: s,
        index: o
      };
    } else "	" === r && (r = " ");
    s += r;
  }
}
function _(e, r, n, i) {
  let s = e.indexOf(r, n);
  if (-1 !== s) return s + r.length - 1;
  throw Error(i);
}
function S(e, r, n, i = ">") {
  let s = k(e, r + 1, i);
  if (!s) return;
  let o = s.data;
  let a = s.index;
  let h = o.search(/\s/);
  let d = o;
  let p = !0;
  -1 !== h && (d = o.substring(0, h), o = o.substring(h + 1).trimStart());
  let g = d;
  if (n) {
    let e = d.indexOf(":");
    -1 !== e && (p = (d = d.substr(e + 1)) !== s.data.substr(e + 1));
  }
  return {
    tagName: d,
    tagExp: o,
    closeIndex: a,
    attrExpPresent: p,
    rawTagName: g
  };
}
function E(e, r, n) {
  let i = n;
  let s = 1;
  for (; n < e.length; n++) if ("<" === e[n]) {
    if ("/" === e[n + 1]) {
      let o = _(e, ">", n, `${r} is not closed`);
      if (e.substring(n + 2, o).trim() === r && 0 == --s) return {
        tagContent: e.substring(i, n),
        i: o
      };
      n = o;
    } else if ("?" === e[n + 1]) n = _(e, "?>", n + 1, "StopNode is not closed.");else if ("!--" === e.substr(n + 1, 3)) n = _(e, "--\x3e", n + 3, "StopNode is not closed.");else if ("![" === e.substr(n + 1, 2)) n = _(e, "]]>", n, "StopNode is not closed.") - 2;else {
      let i = S(e, n, ">");
      i && ((i && i.tagName) === r && "/" !== i.tagExp[i.tagExp.length - 1] && s++, n = i.closeIndex);
    }
  }
}
function A(e, r, n) {
  if (r && "string" == typeof e) {
    let r = e.trim();
    return "true" === r || "false" !== r && a(e, n);
  }
  return isExist(e) ? e : "";
}
module.exports = h;