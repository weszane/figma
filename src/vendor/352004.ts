var e = /[$_\p{ID_Start}]/u;
var r = /[$_\u200C\u200D\p{ID_Continue}]/u;
function n(e, r) {
  return (r ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
}
function i(s, o = !1) {
  let a = [];
  let h = 0;
  for (; h < s.length;) {
    let i = s[h];
    let d = function (e) {
      if (!o) throw TypeError(e);
      a.push({
        type: "INVALID_CHAR",
        index: h,
        value: s[h++]
      });
    };
    if ("*" === i) {
      a.push({
        type: "ASTERISK",
        index: h,
        value: s[h++]
      });
      continue;
    }
    if ("+" === i || "?" === i) {
      a.push({
        type: "MODIFIER",
        index: h,
        value: s[h++]
      });
      continue;
    }
    if ("\\" === i) {
      a.push({
        type: "ESCAPED_CHAR",
        index: h++,
        value: s[h++]
      });
      continue;
    }
    if ("{" === i) {
      a.push({
        type: "OPEN",
        index: h,
        value: s[h++]
      });
      continue;
    }
    if ("}" === i) {
      a.push({
        type: "CLOSE",
        index: h,
        value: s[h++]
      });
      continue;
    }
    if (":" === i) {
      let n = "";
      let i = h + 1;
      for (; i < s.length;) {
        let o = s.substr(i, 1);
        if (i === h + 1 && e.test(o) || i !== h + 1 && r.test(o)) {
          n += s[i++];
          continue;
        }
        break;
      }
      if (!n) {
        d(`Missing parameter name at ${h}`);
        continue;
      }
      a.push({
        type: "NAME",
        index: h,
        value: n
      });
      h = i;
      continue;
    }
    if ("(" === i) {
      let e = 1;
      let r = "";
      let i = h + 1;
      let o = !1;
      if ("?" === s[i]) {
        d(`Pattern cannot start with "?" at ${i}`);
        continue;
      }
      for (; i < s.length;) {
        if (!n(s[i], !1)) {
          d(`Invalid character '${s[i]}' at ${i}.`);
          o = !0;
          break;
        }
        if ("\\" === s[i]) {
          r += s[i++] + s[i++];
          continue;
        }
        if (")" === s[i]) {
          if (0 == --e) {
            i++;
            break;
          }
        } else if ("(" === s[i] && (e++, "?" !== s[i + 1])) {
          d(`Capturing groups are not allowed at ${i}`);
          o = !0;
          break;
        }
        r += s[i++];
      }
      if (o) continue;
      if (e) {
        d(`Unbalanced pattern at ${h}`);
        continue;
      }
      if (!r) {
        d(`Missing pattern at ${h}`);
        continue;
      }
      a.push({
        type: "PATTERN",
        index: h,
        value: r
      });
      h = i;
      continue;
    }
    a.push({
      type: "CHAR",
      index: h,
      value: s[h++]
    });
  }
  a.push({
    type: "END",
    index: h,
    value: ""
  });
  return a;
}
function s(e, r = {}) {
  let n = i(e);
  let {
    prefixes = "./"
  } = r;
  let h = `[^${o(void 0 === r.delimiter ? "/#?" : r.delimiter)}]+?`;
  let d = [];
  let p = 0;
  let g = 0;
  let m = "";
  let v = new Set();
  let y = e => {
    if (g < n.length && n[g].type === e) return n[g++].value;
  };
  let b = () => y("MODIFIER") || y("ASTERISK");
  let O = e => {
    let r = y(e);
    if (void 0 !== r) return r;
    let {
      type,
      index
    } = n[g];
    throw TypeError(`Unexpected ${type} at ${index}, expected ${e}`);
  };
  let x = () => {
    let e;
    let r = "";
    for (; e = y("CHAR") || y("ESCAPED_CHAR");) r += e;
    return r;
  };
  let w = e => e;
  let k = r.encodePart || w;
  for (; g < n.length;) {
    let e = y("CHAR");
    let r = y("NAME");
    let n = y("PATTERN");
    if (!r && !n && y("ASTERISK") && (n = ".*"), r || n) {
      let i = e || "";
      -1 === prefixes.indexOf(i) && (m += i, i = "");
      m && (d.push(k(m)), m = "");
      let s = r || p++;
      if (v.has(s)) throw TypeError(`Duplicate name '${s}'.`);
      v.add(s);
      d.push({
        name: s,
        prefix: k(i),
        suffix: "",
        pattern: n || h,
        modifier: b() || ""
      });
      continue;
    }
    let i = e || y("ESCAPED_CHAR");
    if (i) {
      m += i;
      continue;
    }
    if (y("OPEN")) {
      let e = x();
      let r = y("NAME") || "";
      let n = y("PATTERN") || "";
      !r && !n && y("ASTERISK") && (n = ".*");
      let i = x();
      O("CLOSE");
      let s = b() || "";
      if (!r && !n && !s) {
        m += e;
        continue;
      }
      if (!r && !n && !e) continue;
      m && (d.push(k(m)), m = "");
      d.push({
        name: r || (n ? p++ : ""),
        pattern: r && !n ? h : n,
        prefix: k(e),
        suffix: k(i),
        modifier: s
      });
      continue;
    }
    m && (d.push(k(m)), m = "");
    O("END");
  }
  return d;
}
function o(e) {
  return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function a(e) {
  return e && e.ignoreCase ? "ui" : "u";
}
function h(e, r) {
  if (!r) return e;
  let n = /\((?:\?<(.*?)>)?(?!\?)/g;
  let i = 0;
  let s = n.exec(e.source);
  for (; s;) {
    r.push({
      name: s[1] || i++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    s = n.exec(e.source);
  }
  return e;
}
function d(e, r, n) {
  let i = e.map(e => m(e, r, n).source);
  return RegExp(`(?:${i.join("|")})`, a(n));
}
function p(e, r, n) {
  return g(s(e, n), r, n);
}
function g(e, r, n = {}) {
  let {
    strict = !1,
    start = !0,
    end = !0,
    encode = e => e
  } = n;
  let p = `[${o(void 0 === n.endsWith ? "" : n.endsWith)}]|$`;
  let m = `[${o(void 0 === n.delimiter ? "/#?" : n.delimiter)}]`;
  let v = start ? "^" : "";
  for (let n of e) if ("string" == typeof n) v += o(encode(n));else {
    let e = o(encode(n.prefix));
    let i = o(encode(n.suffix));
    if (n.pattern) {
      if (r && r.push(n), e || i) {
        if ("+" === n.modifier || "*" === n.modifier) {
          let r = "*" === n.modifier ? "?" : "";
          v += `(?:${e}((?:${n.pattern})(?:${i}${e}(?:${n.pattern}))*)${i})${r}`;
        } else v += `(?:${e}(${n.pattern})${i})${n.modifier}`;
      } else "+" === n.modifier || "*" === n.modifier ? v += `((?:${n.pattern})${n.modifier})` : v += `(${n.pattern})${n.modifier}`;
    } else v += `(?:${e}${i})${n.modifier}`;
  }
  if (end) {
    strict || (v += `${m}?`);
    v += n.endsWith ? `(?=${p})` : "$";
  } else {
    let r = e[e.length - 1];
    let n = "string" == typeof r ? m.indexOf(r[r.length - 1]) > -1 : void 0 === r;
    strict || (v += `(?:${m}(?=${p}))?`);
    n || (v += `(?=${m}|${p})`);
  }
  return new RegExp(v, a(n));
}
function m(e, r, n) {
  return e instanceof RegExp ? h(e, r) : Array.isArray(e) ? d(e, r, n) : p(e, r, n);
}
var v = {
  delimiter: "",
  prefixes: "",
  sensitive: !0,
  strict: !0
};
var y = {
  delimiter: ".",
  prefixes: "",
  sensitive: !0,
  strict: !0
};
var b = {
  delimiter: "/",
  prefixes: "/",
  sensitive: !0,
  strict: !0
};
function O(e, r) {
  return !!e.length && ("/" === e[0] || !!r && !(e.length < 2) && ("\\" == e[0] || "{" == e[0]) && "/" == e[1]);
}
function x(e, r) {
  return e.startsWith(r) ? e.substring(r.length, e.length) : e;
}
function w(e, r) {
  return e.endsWith(r) ? e.substr(0, e.length - r.length) : e;
}
function k(e) {
  return !!e && !(e.length < 2) && ("[" === e[0] || ("\\" === e[0] || "{" === e[0]) && "[" === e[1]);
}
var _ = ["ftp", "file", "http", "https", "ws", "wss"];
function S(e) {
  if (!e) return !0;
  for (let r of _) if (e.test(r)) return !0;
  return !1;
}
function E(e, r) {
  if (e = x(e, "#"), r || "" === e) return e;
  let n = new URL("https://example.com");
  n.hash = e;
  return n.hash ? n.hash.substring(1, n.hash.length) : "";
}
function A(e, r) {
  if (e = x(e, "?"), r || "" === e) return e;
  let n = new URL("https://example.com");
  n.search = e;
  return n.search ? n.search.substring(1, n.search.length) : "";
}
function C(e, r) {
  return r || "" === e ? e : k(e) ? z(e) : j(e);
}
function T(e, r) {
  if (r || "" === e) return e;
  let n = new URL("https://example.com");
  n.password = e;
  return n.password;
}
function I(e, r) {
  if (r || "" === e) return e;
  let n = new URL("https://example.com");
  n.username = e;
  return n.username;
}
function P(e, r, n) {
  if (n || "" === e) return e;
  if (r && !_.includes(r)) return new URL(`${r}:${e}`).pathname;
  let i = "/" == e[0];
  e = new URL(i ? e : "/-" + e, "https://example.com").pathname;
  i || (e = e.substring(2, e.length));
  return e;
}
function R(e, r, n) {
  return (D(r) === e && (e = ""), n || "" === e) ? e : Z(e);
}
function M(e, r) {
  return (e = w(e, ":"), r || "" === e) ? e : N(e);
}
function D(e) {
  switch (e) {
    case "ws":
    case "http":
      return "80";
    case "wws":
    case "https":
      return "443";
    case "ftp":
      return "21";
    default:
      return "";
  }
}
function N(e) {
  if ("" === e) return e;
  if (/^[-+.A-Za-z0-9]*$/.test(e)) return e.toLowerCase();
  throw TypeError(`Invalid protocol '${e}'.`);
}
function $(e) {
  if ("" === e) return e;
  let r = new URL("https://example.com");
  r.username = e;
  return r.username;
}
function L(e) {
  if ("" === e) return e;
  let r = new URL("https://example.com");
  r.password = e;
  return r.password;
}
function j(e) {
  if ("" === e) return e;
  if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e)) throw TypeError(`Invalid hostname '${e}'`);
  let r = new URL("https://example.com");
  r.hostname = e;
  return r.hostname;
}
function z(e) {
  if ("" === e) return e;
  if (/[^0-9a-fA-F[\]:]/g.test(e)) throw TypeError(`Invalid IPv6 hostname '${e}'`);
  return e.toLowerCase();
}
function Z(e) {
  if ("" === e || /^[0-9]*$/.test(e) && 65535 >= parseInt(e)) return e;
  throw TypeError(`Invalid port '${e}'.`);
}
function F(e) {
  if ("" === e) return e;
  let r = new URL("https://example.com");
  return (r.pathname = "/" !== e[0] ? "/-" + e : e, "/" !== e[0]) ? r.pathname.substring(2, r.pathname.length) : r.pathname;
}
function U(e) {
  return "" === e ? e : new URL(`data:${e}`).pathname;
}
function Q(e) {
  if ("" === e) return e;
  let r = new URL("https://example.com");
  r.search = e;
  return r.search.substring(1, r.search.length);
}
function V(e) {
  if ("" === e) return e;
  let r = new URL("https://example.com");
  r.hash = e;
  return r.hash.substring(1, r.hash.length);
}
var B = class {
  constructor(e) {
    this.tokenList = [];
    this.internalResult = {};
    this.tokenIndex = 0;
    this.tokenIncrement = 1;
    this.componentStart = 0;
    this.state = 0;
    this.groupDepth = 0;
    this.hostnameIPv6BracketDepth = 0;
    this.shouldTreatAsStandardURL = !1;
    this.input = e;
  }
  get result() {
    return this.internalResult;
  }
  parse() {
    for (this.tokenList = i(this.input, !0); this.tokenIndex < this.tokenList.length; this.tokenIndex += this.tokenIncrement) {
      if (this.tokenIncrement = 1, "END" === this.tokenList[this.tokenIndex].type) {
        if (0 === this.state) {
          this.rewind();
          this.isHashPrefix() ? this.changeState(9, 1) : (this.isSearchPrefix() ? this.changeState(8, 1) : (this.changeState(7, 0), this.internalResult.search = ""), this.internalResult.hash = "");
          continue;
        }
        if (2 === this.state) {
          this.rewindAndSetState(5);
          continue;
        }
        this.changeState(10, 0);
        break;
      }
      if (this.groupDepth > 0) {
        if (!this.isGroupClose()) continue;
        this.groupDepth -= 1;
      }
      if (this.isGroupOpen()) {
        this.groupDepth += 1;
        continue;
      }
      switch (this.state) {
        case 0:
          this.isProtocolSuffix() && (this.internalResult.username = "", this.internalResult.password = "", this.internalResult.hostname = "", this.internalResult.port = "", this.internalResult.pathname = "", this.internalResult.search = "", this.internalResult.hash = "", this.rewindAndSetState(1));
          break;
        case 1:
          if (this.isProtocolSuffix()) {
            this.computeShouldTreatAsStandardURL();
            let e = 7;
            let r = 1;
            this.shouldTreatAsStandardURL && (this.internalResult.pathname = "/");
            this.nextIsAuthoritySlashes() ? (e = 2, r = 3) : this.shouldTreatAsStandardURL && (e = 2);
            this.changeState(e, r);
          }
          break;
        case 2:
          this.isIdentityTerminator() ? this.rewindAndSetState(3) : (this.isPathnameStart() || this.isSearchPrefix() || this.isHashPrefix()) && this.rewindAndSetState(5);
          break;
        case 3:
          this.isPasswordPrefix() ? this.changeState(4, 1) : this.isIdentityTerminator() && this.changeState(5, 1);
          break;
        case 4:
          this.isIdentityTerminator() && this.changeState(5, 1);
          break;
        case 5:
          this.isIPv6Open() ? this.hostnameIPv6BracketDepth += 1 : this.isIPv6Close() && (this.hostnameIPv6BracketDepth -= 1);
          this.isPortPrefix() && !this.hostnameIPv6BracketDepth ? this.changeState(6, 1) : this.isPathnameStart() ? this.changeState(7, 0) : this.isSearchPrefix() ? this.changeState(8, 1) : this.isHashPrefix() && this.changeState(9, 1);
          break;
        case 6:
          this.isPathnameStart() ? this.changeState(7, 0) : this.isSearchPrefix() ? this.changeState(8, 1) : this.isHashPrefix() && this.changeState(9, 1);
          break;
        case 7:
          this.isSearchPrefix() ? this.changeState(8, 1) : this.isHashPrefix() && this.changeState(9, 1);
          break;
        case 8:
          this.isHashPrefix() && this.changeState(9, 1);
      }
    }
  }
  changeState(e, r) {
    switch (this.state) {
      case 0:
      case 2:
        break;
      case 1:
        this.internalResult.protocol = this.makeComponentString();
        break;
      case 3:
        this.internalResult.username = this.makeComponentString();
        break;
      case 4:
        this.internalResult.password = this.makeComponentString();
        break;
      case 5:
        this.internalResult.hostname = this.makeComponentString();
        break;
      case 6:
        this.internalResult.port = this.makeComponentString();
        break;
      case 7:
        this.internalResult.pathname = this.makeComponentString();
        break;
      case 8:
        this.internalResult.search = this.makeComponentString();
        break;
      case 9:
        this.internalResult.hash = this.makeComponentString();
    }
    this.changeStateWithoutSettingComponent(e, r);
  }
  changeStateWithoutSettingComponent(e, r) {
    this.state = e;
    this.componentStart = this.tokenIndex + r;
    this.tokenIndex += r;
    this.tokenIncrement = 0;
  }
  rewind() {
    this.tokenIndex = this.componentStart;
    this.tokenIncrement = 0;
  }
  rewindAndSetState(e) {
    this.rewind();
    this.state = e;
  }
  safeToken(e) {
    return (e < 0 && (e = this.tokenList.length - e), e < this.tokenList.length) ? this.tokenList[e] : this.tokenList[this.tokenList.length - 1];
  }
  isNonSpecialPatternChar(e, r) {
    let n = this.safeToken(e);
    return n.value === r && ("CHAR" === n.type || "ESCAPED_CHAR" === n.type || "INVALID_CHAR" === n.type);
  }
  isProtocolSuffix() {
    return this.isNonSpecialPatternChar(this.tokenIndex, ":");
  }
  nextIsAuthoritySlashes() {
    return this.isNonSpecialPatternChar(this.tokenIndex + 1, "/") && this.isNonSpecialPatternChar(this.tokenIndex + 2, "/");
  }
  isIdentityTerminator() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "@");
  }
  isPasswordPrefix() {
    return this.isNonSpecialPatternChar(this.tokenIndex, ":");
  }
  isPortPrefix() {
    return this.isNonSpecialPatternChar(this.tokenIndex, ":");
  }
  isPathnameStart() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "/");
  }
  isSearchPrefix() {
    if (this.isNonSpecialPatternChar(this.tokenIndex, "?")) return !0;
    if ("?" !== this.tokenList[this.tokenIndex].value) return !1;
    let e = this.safeToken(this.tokenIndex - 1);
    return "NAME" !== e.type && "PATTERN" !== e.type && "CLOSE" !== e.type && "ASTERISK" !== e.type;
  }
  isHashPrefix() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "#");
  }
  isGroupOpen() {
    return "OPEN" == this.tokenList[this.tokenIndex].type;
  }
  isGroupClose() {
    return "CLOSE" == this.tokenList[this.tokenIndex].type;
  }
  isIPv6Open() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "[");
  }
  isIPv6Close() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "]");
  }
  makeComponentString() {
    let e = this.tokenList[this.tokenIndex];
    let r = this.safeToken(this.componentStart).index;
    return this.input.substring(r, e.index);
  }
  computeShouldTreatAsStandardURL() {
    let e = {};
    Object.assign(e, v);
    e.encodePart = N;
    let r = m(this.makeComponentString(), void 0, e);
    this.shouldTreatAsStandardURL = S(r);
  }
};
var q = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"];
var W = "*";
function Y(e, r) {
  if ("string" != typeof e) throw TypeError("parameter 1 is not of type 'string'.");
  let n = new URL(e, r);
  return {
    protocol: n.protocol.substring(0, n.protocol.length - 1),
    username: n.username,
    password: n.password,
    hostname: n.hostname,
    port: n.port,
    pathname: n.pathname,
    search: "" != n.search ? n.search.substring(1, n.search.length) : void 0,
    hash: "" != n.hash ? n.hash.substring(1, n.hash.length) : void 0
  };
}
function G(e, r) {
  return r ? H(e) : e;
}
function X(e, r, n) {
  let i;
  if ("string" == typeof r.baseURL) try {
    i = new URL(r.baseURL);
    e.protocol = G(i.protocol.substring(0, i.protocol.length - 1), n);
    e.username = G(i.username, n);
    e.password = G(i.password, n);
    e.hostname = G(i.hostname, n);
    e.port = G(i.port, n);
    e.pathname = G(i.pathname, n);
    e.search = G(i.search.substring(1, i.search.length), n);
    e.hash = G(i.hash.substring(1, i.hash.length), n);
  } catch {
    throw TypeError(`invalid baseURL '${r.baseURL}'.`);
  }
  if ("string" == typeof r.protocol && (e.protocol = M(r.protocol, n)), "string" == typeof r.username && (e.username = I(r.username, n)), "string" == typeof r.password && (e.password = T(r.password, n)), "string" == typeof r.hostname && (e.hostname = C(r.hostname, n)), "string" == typeof r.port && (e.port = R(r.port, e.protocol, n)), "string" == typeof r.pathname) {
    if (e.pathname = r.pathname, i && !O(e.pathname, n)) {
      let r = i.pathname.lastIndexOf("/");
      r >= 0 && (e.pathname = G(i.pathname.substring(0, r + 1), n) + e.pathname);
    }
    e.pathname = P(e.pathname, e.protocol, n);
  }
  "string" == typeof r.search && (e.search = A(r.search, n));
  "string" == typeof r.hash && (e.hash = E(r.hash, n));
  return e;
}
function H(e) {
  return e.replace(/([+*?:{}()\\])/g, "\\$1");
}
function K(e) {
  return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function J(e, r) {
  let n = ".*";
  let i = `[^${K(void 0 === r.delimiter ? "/#?" : r.delimiter)}]+?`;
  let s = /[$_\u200C\u200D\p{ID_Continue}]/u;
  let o = "";
  for (let a = 0; a < e.length; ++a) {
    let h = e[a];
    let d = a > 0 ? e[a - 1] : null;
    let p = a < e.length - 1 ? e[a + 1] : null;
    if ("string" == typeof h) {
      o += H(h);
      continue;
    }
    if ("" === h.pattern) {
      if ("" === h.modifier) {
        o += H(h.prefix);
        continue;
      }
      o += `{${H(h.prefix)}}${h.modifier}`;
      continue;
    }
    let g = "number" != typeof h.name;
    let m = void 0 !== r.prefixes ? r.prefixes : "./";
    let v = "" !== h.suffix || "" !== h.prefix && (1 !== h.prefix.length || !m.includes(h.prefix));
    if (!v && g && h.pattern === i && "" === h.modifier && p && !p.prefix && !p.suffix) {
      if ("string" == typeof p) {
        let e = p.length > 0 ? p[0] : "";
        v = s.test(e);
      } else v = "number" == typeof p.name;
    }
    if (!v && "" === h.prefix && d && "string" == typeof d && d.length > 0) {
      let e = d[d.length - 1];
      v = m.includes(e);
    }
    v && (o += "{");
    o += H(h.prefix);
    g && (o += `:${h.name}`);
    h.pattern === n ? !g && (!d || "string" == typeof d || d.modifier || v || "" !== h.prefix) ? o += "*" : o += `(${n})` : h.pattern === i ? g || (o += `(${i})`) : o += `(${h.pattern})`;
    h.pattern === i && g && "" !== h.suffix && s.test(h.suffix[0]) && (o += "\\");
    o += H(h.suffix);
    v && (o += "}");
    o += h.modifier;
  }
  return o;
}
var ee = class {
  constructor(e = {}, r, n) {
    this.regexp = {};
    this.keys = {};
    this.component_pattern = {};
    try {
      let i;
      let o;
      if ("string" == typeof r ? o = r : n = r, "string" == typeof e) {
        let r = new B(e);
        if (r.parse(), e = r.result, void 0 === o && "string" != typeof e.protocol) throw TypeError("A base URL must be provided for a relative constructor string.");
        e.baseURL = o;
      } else {
        if (!e || "object" != typeof e) throw TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
        if (o) throw TypeError("parameter 1 is not of type 'string'.");
      }
      void 0 === n && (n = {
        ignoreCase: !1
      });
      let a = {
        ignoreCase: !0 === n.ignoreCase
      };
      let h = {
        pathname: W,
        protocol: W,
        username: W,
        password: W,
        hostname: W,
        port: W,
        search: W,
        hash: W
      };
      for (i of (this.pattern = X(h, e, !0), D(this.pattern.protocol) === this.pattern.port && (this.pattern.port = ""), q)) {
        if (!(i in this.pattern)) continue;
        let e = {};
        let r = this.pattern[i];
        switch (this.keys[i] = [], i) {
          case "protocol":
            Object.assign(e, v);
            e.encodePart = N;
            break;
          case "username":
            Object.assign(e, v);
            e.encodePart = $;
            break;
          case "password":
            Object.assign(e, v);
            e.encodePart = L;
            break;
          case "hostname":
            Object.assign(e, y);
            k(r) ? e.encodePart = z : e.encodePart = j;
            break;
          case "port":
            Object.assign(e, v);
            e.encodePart = Z;
            break;
          case "pathname":
            S(this.regexp.protocol) ? (Object.assign(e, b, a), e.encodePart = F) : (Object.assign(e, v, a), e.encodePart = U);
            break;
          case "search":
            Object.assign(e, v, a);
            e.encodePart = Q;
            break;
          case "hash":
            Object.assign(e, v, a);
            e.encodePart = V;
        }
        try {
          let n = s(r, e);
          this.regexp[i] = g(n, this.keys[i], e);
          this.component_pattern[i] = J(n, e);
        } catch {
          throw TypeError(`invalid ${i} pattern '${this.pattern[i]}'.`);
        }
      }
    } catch (e) {
      throw TypeError(`Failed to construct 'URLPattern': ${e.message}`);
    }
  }
  test(e = {}, r) {
    let n;
    let i = {
      pathname: "",
      protocol: "",
      username: "",
      password: "",
      hostname: "",
      port: "",
      search: "",
      hash: ""
    };
    if ("string" != typeof e && r) throw TypeError("parameter 1 is not of type 'string'.");
    if (void 0 === e) return !1;
    try {
      i = "object" == typeof e ? X(i, e, !1) : X(i, Y(e, r), !1);
    } catch (e) {
      return !1;
    }
    for (n of q) if (!this.regexp[n].exec(i[n])) return !1;
    return !0;
  }
  exec(e = {}, r) {
    let n;
    let i = {
      pathname: "",
      protocol: "",
      username: "",
      password: "",
      hostname: "",
      port: "",
      search: "",
      hash: ""
    };
    if ("string" != typeof e && r) throw TypeError("parameter 1 is not of type 'string'.");
    if (void 0 === e) return;
    try {
      i = "object" == typeof e ? X(i, e, !1) : X(i, Y(e, r), !1);
    } catch (e) {
      return null;
    }
    let s = {};
    for (n of (r ? s.inputs = [e, r] : s.inputs = [e], q)) {
      let e = this.regexp[n].exec(i[n]);
      if (!e) return null;
      let r = {};
      for (let [i, s] of this.keys[n].entries()) if ("string" == typeof s.name || "number" == typeof s.name) {
        let n = e[i + 1];
        r[s.name] = n;
      }
      s[n] = {
        input: i[n] || "",
        groups: r
      };
    }
    return s;
  }
  get protocol() {
    return this.component_pattern.protocol;
  }
  get username() {
    return this.component_pattern.username;
  }
  get password() {
    return this.component_pattern.password;
  }
  get hostname() {
    return this.component_pattern.hostname;
  }
  get port() {
    return this.component_pattern.port;
  }
  get pathname() {
    return this.component_pattern.pathname;
  }
  get search() {
    return this.component_pattern.search;
  }
  get hash() {
    return this.component_pattern.hash;
  }
};
globalThis.URLPattern || (globalThis.URLPattern = ee);