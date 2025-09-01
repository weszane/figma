let r = "\n";
function n(e, n) {
  let s = "";
  n.format && n.indentBy.length > 0 && (s = r);
  return i(e, n, "", s);
}
function i(e, r, n, d) {
  let p = "";
  let g = !1;
  for (let m = 0; m < e.length; m++) {
    let v = e[m];
    let y = s(v);
    if (void 0 === y) continue;
    let b = "";
    if (b = 0 === n.length ? y : `${n}.${y}`, y === r.textNodeName) {
      let e = v[y];
      a(b, r) || (e = h(e = r.tagValueProcessor(y, e), r));
      g && (p += d);
      p += e;
      g = !1;
      continue;
    }
    if (y === r.cdataPropName) {
      g && (p += d);
      p += `<![CDATA[${v[y][0][r.textNodeName]}]]>`;
      g = !1;
      continue;
    }
    if (y === r.commentPropName) {
      p += d + `<!--${v[y][0][r.textNodeName]}-->`;
      g = !0;
      continue;
    }
    if ("?" === y[0]) {
      let e = o(v[":@"], r);
      let n = "?xml" === y ? "" : d;
      let i = v[y][0][r.textNodeName];
      i = 0 !== i.length ? " " + i : "";
      p += n + `<${y}${i}${e}?>`;
      g = !0;
      continue;
    }
    let O = d;
    "" !== O && (O += r.indentBy);
    let x = o(v[":@"], r);
    let w = d + `<${y}${x}`;
    let k = i(v[y], r, b, O);
    -1 !== r.unpairedTags.indexOf(y) ? r.suppressUnpairedNode ? p += w + ">" : p += w + "/>" : (!k || 0 === k.length) && r.suppressEmptyNode ? p += w + "/>" : k && k.endsWith(">") ? p += w + `>${k}${d}</${y}>` : (p += w + ">", k && "" !== d && (k.includes("/>") || k.includes("</")) ? p += d + r.indentBy + k + d : p += k, p += `</${y}>`);
    g = !0;
  }
  return p;
}
function s(e) {
  let r = Object.keys(e);
  for (let n = 0; n < r.length; n++) {
    let i = r[n];
    if (e.hasOwnProperty(i) && ":@" !== i) return i;
  }
}
function o(e, r) {
  let n = "";
  if (e && !r.ignoreAttributes) for (let i in e) {
    if (!e.hasOwnProperty(i)) continue;
    let s = r.attributeValueProcessor(i, e[i]);
    !0 === (s = h(s, r)) && r.suppressBooleanAttributes ? n += ` ${i.substr(r.attributeNamePrefix.length)}` : n += ` ${i.substr(r.attributeNamePrefix.length)}="${s}"`;
  }
  return n;
}
function a(e, r) {
  let n = (e = e.substr(0, e.length - r.textNodeName.length - 1)).substr(e.lastIndexOf(".") + 1);
  for (let i in r.stopNodes) if (r.stopNodes[i] === e || r.stopNodes[i] === "*." + n) return !0;
  return !1;
}
function h(e, r) {
  if (e && e.length > 0 && r.processEntities) for (let n = 0; n < r.entities.length; n++) {
    let i = r.entities[n];
    e = e.replace(i.regex, i.val);
  }
  return e;
}
module.exports = n;