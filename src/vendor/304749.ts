import i from "../vendor/786527";
let s = {
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  cdataPropName: !1,
  format: !1,
  indentBy: "  ",
  suppressEmptyNode: !1,
  suppressUnpairedNode: !0,
  suppressBooleanAttributes: !0,
  tagValueProcessor: function (e, r) {
    return r;
  },
  attributeValueProcessor: function (e, r) {
    return r;
  },
  preserveOrder: !1,
  commentPropName: !1,
  unpairedTags: [],
  entities: [{
    regex: RegExp("&", "g"),
    val: "&amp;"
  }, {
    regex: RegExp(">", "g"),
    val: "&gt;"
  }, {
    regex: RegExp("<", "g"),
    val: "&lt;"
  }, {
    regex: RegExp("'", "g"),
    val: "&apos;"
  }, {
    regex: RegExp('"', "g"),
    val: "&quot;"
  }],
  processEntities: !0,
  stopNodes: [],
  oneListGroup: !1
};
function o(e) {
  this.options = Object.assign({}, s, e);
  this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function () {
    return !1;
  } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = d);
  this.processTextOrObjNode = a;
  this.options.format ? (this.indentate = h, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function () {
    return "";
  }, this.tagEndChar = ">", this.newLine = "");
}
function a(e, r, n) {
  let i = this.j2x(e, n + 1);
  return void 0 !== e[this.options.textNodeName] && 1 === Object.keys(e).length ? this.buildTextValNode(e[this.options.textNodeName], r, i.attrStr, n) : this.buildObjectNode(i.val, r, i.attrStr, n);
}
function h(e) {
  return this.options.indentBy.repeat(e);
}
function d(e) {
  return !!e.startsWith(this.options.attributeNamePrefix) && e !== this.options.textNodeName && e.substr(this.attrPrefixLen);
}
o.prototype.build = function (e) {
  return this.options.preserveOrder ? i(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
    [this.options.arrayNodeName]: e
  }), this.j2x(e, 0).val);
};
o.prototype.j2x = function (e, r) {
  let n = "";
  let i = "";
  for (let s in e) if (Object.prototype.hasOwnProperty.call(e, s)) {
    if (void 0 === e[s]) this.isAttribute(s) && (i += "");else if (null === e[s]) this.isAttribute(s) ? i += "" : "?" === s[0] ? i += this.indentate(r) + "<" + s + "?" + this.tagEndChar : i += this.indentate(r) + "<" + s + "/" + this.tagEndChar;else if (e[s] instanceof Date) i += this.buildTextValNode(e[s], s, "", r);else if ("object" != typeof e[s]) {
      let o = this.isAttribute(s);
      if (o) n += this.buildAttrPairStr(o, "" + e[s]);else if (s === this.options.textNodeName) {
        let r = this.options.tagValueProcessor(s, "" + e[s]);
        i += this.replaceEntitiesValue(r);
      } else i += this.buildTextValNode(e[s], s, "", r);
    } else if (Array.isArray(e[s])) {
      let n = e[s].length;
      let o = "";
      let a = "";
      for (let h = 0; h < n; h++) {
        let n = e[s][h];
        if (void 0 === n) ;else if (null === n) "?" === s[0] ? i += this.indentate(r) + "<" + s + "?" + this.tagEndChar : i += this.indentate(r) + "<" + s + "/" + this.tagEndChar;else if ("object" == typeof n) {
          if (this.options.oneListGroup) {
            let e = this.j2x(n, r + 1);
            o += e.val;
            this.options.attributesGroupName && n.hasOwnProperty(this.options.attributesGroupName) && (a += e.attrStr);
          } else o += this.processTextOrObjNode(n, s, r);
        } else if (this.options.oneListGroup) {
          let e = this.options.tagValueProcessor(s, n);
          o += e = this.replaceEntitiesValue(e);
        } else o += this.buildTextValNode(n, s, "", r);
      }
      this.options.oneListGroup && (o = this.buildObjectNode(o, s, a, r));
      i += o;
    } else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
      let r = Object.keys(e[s]);
      let i = r.length;
      for (let o = 0; o < i; o++) n += this.buildAttrPairStr(r[o], "" + e[s][r[o]]);
    } else i += this.processTextOrObjNode(e[s], s, r);
  }
  return {
    attrStr: n,
    val: i
  };
};
o.prototype.buildAttrPairStr = function (e, r) {
  return (r = this.options.attributeValueProcessor(e, "" + r), r = this.replaceEntitiesValue(r), this.options.suppressBooleanAttributes && "true" === r) ? " " + e : " " + e + '="' + r + '"';
};
o.prototype.buildObjectNode = function (e, r, n, i) {
  if ("" === e) return "?" === r[0] ? this.indentate(i) + "<" + r + n + "?" + this.tagEndChar : this.indentate(i) + "<" + r + n + this.closeTag(r) + this.tagEndChar;
  {
    let s = "</" + r + this.tagEndChar;
    let o = "";
    return ("?" === r[0] && (o = "?", s = ""), (n || "" === n) && -1 === e.indexOf("<")) ? this.indentate(i) + "<" + r + n + o + ">" + e + s : !1 !== this.options.commentPropName && r === this.options.commentPropName && 0 === o.length ? this.indentate(i) + `<!--${e}-->` + this.newLine : this.indentate(i) + "<" + r + n + o + this.tagEndChar + e + this.indentate(i) + s;
  }
};
o.prototype.closeTag = function (e) {
  let r = "";
  -1 !== this.options.unpairedTags.indexOf(e) ? this.options.suppressUnpairedNode || (r = "/") : r = this.options.suppressEmptyNode ? "/" : `></${e}`;
  return r;
};
o.prototype.buildTextValNode = function (e, r, n, i) {
  if (!1 !== this.options.cdataPropName && r === this.options.cdataPropName) return this.indentate(i) + `<![CDATA[${e}]]>` + this.newLine;
  if (!1 !== this.options.commentPropName && r === this.options.commentPropName) return this.indentate(i) + `<!--${e}-->` + this.newLine;
  if ("?" === r[0]) return this.indentate(i) + "<" + r + n + "?" + this.tagEndChar;
  {
    let s = this.options.tagValueProcessor(r, e);
    return "" === (s = this.replaceEntitiesValue(s)) ? this.indentate(i) + "<" + r + n + this.closeTag(r) + this.tagEndChar : this.indentate(i) + "<" + r + n + ">" + s + "</" + r + this.tagEndChar;
  }
};
o.prototype.replaceEntitiesValue = function (e) {
  if (e && e.length > 0 && this.options.processEntities) for (let r = 0; r < this.options.entities.length; r++) {
    let n = this.options.entities[r];
    e = e.replace(n.regex, n.val);
  }
  return e;
};
module.exports = o;