let n;
let a;
let i;
let o;
let s;
var l;
var c;
var u;
var d = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== require.g ? require.g : "undefined" != typeof self ? self : {};
var $$h0 = {};
var p = {};
var m = {};
!function (e) {
  e.parser = function (e, t) {
    return new r(e, t);
  };
  e.SAXParser = r;
  e.MAX_BUFFER_LENGTH = 65536;
  var t = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
  function r(n, a) {
    if (!(this instanceof r)) return new r(n, a);
    (function (e) {
      for (r = 0, n = t.length, void 0; r < n; r++) {
        var r;
        var n;
        e[t[r]] = "";
      }
    })(this);
    this.q = this.c = "";
    this.bufferCheckPosition = e.MAX_BUFFER_LENGTH;
    this.opt = a || {};
    this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags;
    this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase";
    this.tags = [];
    this.closed = this.closedRoot = this.sawRoot = !1;
    this.tag = this.error = null;
    this.strict = !!n;
    this.noscript = !!(n || this.opt.noscript);
    this.state = p.BEGIN;
    this.strictEntities = this.opt.strictEntities;
    this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES);
    this.attribList = [];
    this.opt.xmlns && (this.ns = Object.create(i));
    this.trackPosition = !1 !== this.opt.position;
    this.trackPosition && (this.position = this.line = this.column = 0);
    f(this, "onready");
  }
  e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
  Object.create || (Object.create = function (e) {
    function t() {}
    t.prototype = e;
    return new t();
  });
  Object.keys || (Object.keys = function (e) {
    var t = [];
    for (var r in e) e.hasOwnProperty(r) && t.push(r);
    return t;
  });
  r.prototype = {
    end: function () {
      v(this);
    },
    write: function (r) {
      if (this.error) throw this.error;
      if (this.closed) return k(this, "Cannot write after close. Assign an onready handler.");
      if (null === r) return v(this);
      "object" == typeof r && (r = r.toString());
      for (n = 0, a = "", void 0; a = E(r, n++), this.c = a, a;) {
        var n;
        var a;
        switch (this.trackPosition && (this.position++, "\n" === a ? (this.line++, this.column = 0) : this.column++), this.state) {
          case p.BEGIN:
            if (this.state = p.BEGIN_WHITESPACE, "\uFEFF" === a) continue;
            T(this, a);
            continue;
          case p.BEGIN_WHITESPACE:
            T(this, a);
            continue;
          case p.TEXT:
            if (this.sawRoot && !this.closedRoot) {
              for (var i = n - 1; a && "<" !== a && "&" !== a;) (a = E(r, n++)) && this.trackPosition && (this.position++, "\n" === a ? (this.line++, this.column = 0) : this.column++);
              this.textNode += r.substring(i, n - 1);
            }
            "<" !== a || this.sawRoot && this.closedRoot && !this.strict ? (u(a) || this.sawRoot && !this.closedRoot || w(this, "Text data outside of root node."), "&" === a ? this.state = p.TEXT_ENTITY : this.textNode += a) : (this.state = p.OPEN_WAKA, this.startTagPosition = this.position);
            continue;
          case p.SCRIPT:
            "<" === a ? this.state = p.SCRIPT_ENDING : this.script += a;
            continue;
          case p.SCRIPT_ENDING:
            "/" === a ? this.state = p.CLOSE_TAG : (this.script += "<" + a, this.state = p.SCRIPT);
            continue;
          case p.OPEN_WAKA:
            "!" === a ? (this.state = p.SGML_DECL, this.sgmlDecl = "") : u(a) || (h(o, a) ? (this.state = p.OPEN_TAG, this.tagName = a) : "/" === a ? (this.state = p.CLOSE_TAG, this.tagName = "") : "?" === a ? (this.state = p.PROC_INST, this.procInstName = this.procInstBody = "") : (w(this, "Unencoded <"), this.startTagPosition + 1 < this.position && (a = Array(this.position - this.startTagPosition).join(" ") + a), this.textNode += "<" + a, this.state = p.TEXT));
            continue;
          case p.SGML_DECL:
            "[CDATA[" === (this.sgmlDecl + a).toUpperCase() ? (g(this, "onopencdata"), this.state = p.CDATA, this.sgmlDecl = "", this.cdata = "") : this.sgmlDecl + a === "--" ? (this.state = p.COMMENT, this.comment = "", this.sgmlDecl = "") : "DOCTYPE" === (this.sgmlDecl + a).toUpperCase() ? (this.state = p.DOCTYPE, (this.doctype || this.sawRoot) && w(this, "Inappropriately located doctype declaration"), this.doctype = "", this.sgmlDecl = "") : ">" === a ? (g(this, "onsgmldeclaration", this.sgmlDecl), this.sgmlDecl = "", this.state = p.TEXT) : (d(a) && (this.state = p.SGML_DECL_QUOTED), this.sgmlDecl += a);
            continue;
          case p.SGML_DECL_QUOTED:
            a === this.q && (this.state = p.SGML_DECL, this.q = "");
            this.sgmlDecl += a;
            continue;
          case p.DOCTYPE:
            ">" === a ? (this.state = p.TEXT, g(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += a, "[" === a ? this.state = p.DOCTYPE_DTD : d(a) && (this.state = p.DOCTYPE_QUOTED, this.q = a));
            continue;
          case p.DOCTYPE_QUOTED:
            this.doctype += a;
            a === this.q && (this.q = "", this.state = p.DOCTYPE);
            continue;
          case p.DOCTYPE_DTD:
            this.doctype += a;
            "]" === a ? this.state = p.DOCTYPE : d(a) && (this.state = p.DOCTYPE_DTD_QUOTED, this.q = a);
            continue;
          case p.DOCTYPE_DTD_QUOTED:
            this.doctype += a;
            a === this.q && (this.state = p.DOCTYPE_DTD, this.q = "");
            continue;
          case p.COMMENT:
            "-" === a ? this.state = p.COMMENT_ENDING : this.comment += a;
            continue;
          case p.COMMENT_ENDING:
            "-" === a ? (this.state = p.COMMENT_ENDED, this.comment = y(this.opt, this.comment), this.comment && g(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + a, this.state = p.COMMENT);
            continue;
          case p.COMMENT_ENDED:
            ">" !== a ? (w(this, "Malformed comment"), this.comment += "--" + a, this.state = p.COMMENT) : this.state = p.TEXT;
            continue;
          case p.CDATA:
            "]" === a ? this.state = p.CDATA_ENDING : this.cdata += a;
            continue;
          case p.CDATA_ENDING:
            "]" === a ? this.state = p.CDATA_ENDING_2 : (this.cdata += "]" + a, this.state = p.CDATA);
            continue;
          case p.CDATA_ENDING_2:
            ">" === a ? (this.cdata && g(this, "oncdata", this.cdata), g(this, "onclosecdata"), this.cdata = "", this.state = p.TEXT) : "]" === a ? this.cdata += "]" : (this.cdata += "]]" + a, this.state = p.CDATA);
            continue;
          case p.PROC_INST:
            "?" === a ? this.state = p.PROC_INST_ENDING : u(a) ? this.state = p.PROC_INST_BODY : this.procInstName += a;
            continue;
          case p.PROC_INST_BODY:
            !this.procInstBody && u(a) || ("?" === a ? this.state = p.PROC_INST_ENDING : this.procInstBody += a);
            continue;
          case p.PROC_INST_ENDING:
            ">" === a ? (g(this, "onprocessinginstruction", {
              name: this.procInstName,
              body: this.procInstBody
            }), this.procInstName = this.procInstBody = "", this.state = p.TEXT) : (this.procInstBody += "?" + a, this.state = p.PROC_INST_BODY);
            continue;
          case p.OPEN_TAG:
            h(s, a) ? this.tagName += a : (function (e) {
              e.strict || (e.tagName = e.tagName[e.looseCase]());
              var t = e.tags[e.tags.length - 1] || e;
              var r = e.tag = {
                name: e.tagName,
                attributes: {}
              };
              e.opt.xmlns && (r.ns = t.ns);
              e.attribList.length = 0;
              g(e, "onopentagstart", r);
            }(this), ">" === a ? C(this) : "/" === a ? this.state = p.OPEN_TAG_SLASH : (u(a) || w(this, "Invalid character in tag name"), this.state = p.ATTRIB));
            continue;
          case p.OPEN_TAG_SLASH:
            ">" === a ? (C(this, !0), A(this)) : (w(this, "Forward-slash in opening tag not followed by >"), this.state = p.ATTRIB);
            continue;
          case p.ATTRIB:
            u(a) || (">" === a ? C(this) : "/" === a ? this.state = p.OPEN_TAG_SLASH : h(o, a) ? (this.attribName = a, this.attribValue = "", this.state = p.ATTRIB_NAME) : w(this, "Invalid attribute name"));
            continue;
          case p.ATTRIB_NAME:
            "=" === a ? this.state = p.ATTRIB_VALUE : ">" === a ? (w(this, "Attribute without value"), this.attribValue = this.attribName, S(this), C(this)) : u(a) ? this.state = p.ATTRIB_NAME_SAW_WHITE : h(s, a) ? this.attribName += a : w(this, "Invalid attribute name");
            continue;
          case p.ATTRIB_NAME_SAW_WHITE:
            "=" === a ? this.state = p.ATTRIB_VALUE : u(a) || (w(this, "Attribute without value"), this.tag.attributes[this.attribName] = "", this.attribValue = "", g(this, "onattribute", {
              name: this.attribName,
              value: ""
            }), this.attribName = "", ">" === a ? C(this) : h(o, a) ? (this.attribName = a, this.state = p.ATTRIB_NAME) : (w(this, "Invalid attribute name"), this.state = p.ATTRIB));
            continue;
          case p.ATTRIB_VALUE:
            u(a) || (d(a) ? (this.q = a, this.state = p.ATTRIB_VALUE_QUOTED) : (w(this, "Unquoted attribute value"), this.state = p.ATTRIB_VALUE_UNQUOTED, this.attribValue = a));
            continue;
          case p.ATTRIB_VALUE_QUOTED:
            if (a !== this.q) {
              "&" === a ? this.state = p.ATTRIB_VALUE_ENTITY_Q : this.attribValue += a;
              continue;
            }
            S(this);
            this.q = "";
            this.state = p.ATTRIB_VALUE_CLOSED;
            continue;
          case p.ATTRIB_VALUE_CLOSED:
            u(a) ? this.state = p.ATTRIB : ">" === a ? C(this) : "/" === a ? this.state = p.OPEN_TAG_SLASH : h(o, a) ? (w(this, "No whitespace between attributes"), this.attribName = a, this.attribValue = "", this.state = p.ATTRIB_NAME) : w(this, "Invalid attribute name");
            continue;
          case p.ATTRIB_VALUE_UNQUOTED:
            if (!(">" === (m = a) || u(m))) {
              "&" === a ? this.state = p.ATTRIB_VALUE_ENTITY_U : this.attribValue += a;
              continue;
            }
            S(this);
            ">" === a ? C(this) : this.state = p.ATTRIB;
            continue;
          case p.CLOSE_TAG:
            this.tagName ? ">" === a ? A(this) : h(s, a) ? this.tagName += a : this.script ? (this.script += "</" + this.tagName, this.tagName = "", this.state = p.SCRIPT) : (u(a) || w(this, "Invalid tagname in closing tag"), this.state = p.CLOSE_TAG_SAW_WHITE) : u(a) || (h(o, a) ? this.tagName = a : this.script ? (this.script += "</" + a, this.state = p.SCRIPT) : w(this, "Invalid tagname in closing tag."));
            continue;
          case p.CLOSE_TAG_SAW_WHITE:
            if (u(a)) continue;
            ">" === a ? A(this) : w(this, "Invalid characters in closing tag");
            continue;
          case p.TEXT_ENTITY:
          case p.ATTRIB_VALUE_ENTITY_Q:
          case p.ATTRIB_VALUE_ENTITY_U:
            switch (this.state) {
              case p.TEXT_ENTITY:
                f = p.TEXT;
                x = "textNode";
                break;
              case p.ATTRIB_VALUE_ENTITY_Q:
                f = p.ATTRIB_VALUE_QUOTED;
                x = "attribValue";
                break;
              case p.ATTRIB_VALUE_ENTITY_U:
                f = p.ATTRIB_VALUE_UNQUOTED;
                x = "attribValue";
            }
            if (";" === a) {
              var m;
              var f;
              var x;
              var P = function (e) {
                var t;
                var r = e.entity;
                var n = r.toLowerCase();
                var a = "";
                return e.ENTITIES[r] ? e.ENTITIES[r] : e.ENTITIES[n] ? e.ENTITIES[n] : ("#" === (r = n).charAt(0) && (a = "x" === r.charAt(1) ? (t = parseInt(r = r.slice(2), 16)).toString(16) : (t = parseInt(r = r.slice(1), 10)).toString(10)), r = r.replace(/^0+/, ""), isNaN(t) || a.toLowerCase() !== r) ? (w(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(t);
              }(this);
              this.state !== p.TEXT_ENTITY || e.ENTITIES[this.entity] || P === "&" + this.entity + ";" ? this[x] += P : r = r.slice(0, n) + P + r.slice(n);
              this.entity = "";
              this.state = f;
            } else h(this.entity.length ? c : l, a) ? this.entity += a : (w(this, "Invalid character in entity name"), this[x] += "&" + this.entity + a, this.entity = "", this.state = f);
            continue;
          default:
            throw Error(this, "Unknown state: " + this.state);
        }
      }
      this.position >= this.bufferCheckPosition && function (r) {
        for (n = Math.max(e.MAX_BUFFER_LENGTH, 10), a = 0, i = 0, o = t.length, void 0; i < o; i++) {
          var n;
          var a;
          var i;
          var o;
          var s = r[t[i]].length;
          if (s > n) switch (t[i]) {
            case "textNode":
              b(r);
              break;
            case "cdata":
              g(r, "oncdata", r.cdata);
              r.cdata = "";
              break;
            case "script":
              g(r, "onscript", r.script);
              r.script = "";
              break;
            default:
              k(r, "Max buffer length exceeded: " + t[i]);
          }
          a = Math.max(a, s);
        }
        var l = e.MAX_BUFFER_LENGTH - a;
        r.bufferCheckPosition = l + r.position;
      }(this);
      return this;
    },
    resume: function () {
      this.error = null;
      return this;
    },
    close: function () {
      return this.write(null);
    },
    flush: function () {
      b(this);
      "" !== this.cdata && (g(this, "oncdata", this.cdata), this.cdata = "");
      "" !== this.script && (g(this, "onscript", this.script), this.script = "");
    }
  };
  var n = "http://www.w3.org/XML/1998/namespace";
  var a = "http://www.w3.org/2000/xmlns/";
  var i = {
    xml: n,
    xmlns: a
  };
  var o = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  var s = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
  var l = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  var c = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
  function u(e) {
    return " " === e || "\n" === e || "\r" === e || "	" === e;
  }
  function d(e) {
    return '"' === e || "'" === e;
  }
  function h(e, t) {
    return e.test(t);
  }
  var p = 0;
  for (var m in e.STATE = {
    BEGIN: p++,
    BEGIN_WHITESPACE: p++,
    TEXT: p++,
    TEXT_ENTITY: p++,
    OPEN_WAKA: p++,
    SGML_DECL: p++,
    SGML_DECL_QUOTED: p++,
    DOCTYPE: p++,
    DOCTYPE_QUOTED: p++,
    DOCTYPE_DTD: p++,
    DOCTYPE_DTD_QUOTED: p++,
    COMMENT_STARTING: p++,
    COMMENT: p++,
    COMMENT_ENDING: p++,
    COMMENT_ENDED: p++,
    CDATA: p++,
    CDATA_ENDING: p++,
    CDATA_ENDING_2: p++,
    PROC_INST: p++,
    PROC_INST_BODY: p++,
    PROC_INST_ENDING: p++,
    OPEN_TAG: p++,
    OPEN_TAG_SLASH: p++,
    ATTRIB: p++,
    ATTRIB_NAME: p++,
    ATTRIB_NAME_SAW_WHITE: p++,
    ATTRIB_VALUE: p++,
    ATTRIB_VALUE_QUOTED: p++,
    ATTRIB_VALUE_CLOSED: p++,
    ATTRIB_VALUE_UNQUOTED: p++,
    ATTRIB_VALUE_ENTITY_Q: p++,
    ATTRIB_VALUE_ENTITY_U: p++,
    CLOSE_TAG: p++,
    CLOSE_TAG_SAW_WHITE: p++,
    SCRIPT: p++,
    SCRIPT_ENDING: p++
  }, e.XML_ENTITIES = {
    amp: "&",
    gt: ">",
    lt: "<",
    quot: '"',
    apos: "'"
  }, e.ENTITIES = {
    amp: "&",
    gt: ">",
    lt: "<",
    quot: '"',
    apos: "'",
    AElig: 198,
    Aacute: 193,
    Acirc: 194,
    Agrave: 192,
    Aring: 197,
    Atilde: 195,
    Auml: 196,
    Ccedil: 199,
    ETH: 208,
    Eacute: 201,
    Ecirc: 202,
    Egrave: 200,
    Euml: 203,
    Iacute: 205,
    Icirc: 206,
    Igrave: 204,
    Iuml: 207,
    Ntilde: 209,
    Oacute: 211,
    Ocirc: 212,
    Ograve: 210,
    Oslash: 216,
    Otilde: 213,
    Ouml: 214,
    THORN: 222,
    Uacute: 218,
    Ucirc: 219,
    Ugrave: 217,
    Uuml: 220,
    Yacute: 221,
    aacute: 225,
    acirc: 226,
    aelig: 230,
    agrave: 224,
    aring: 229,
    atilde: 227,
    auml: 228,
    ccedil: 231,
    eacute: 233,
    ecirc: 234,
    egrave: 232,
    eth: 240,
    euml: 235,
    iacute: 237,
    icirc: 238,
    igrave: 236,
    iuml: 239,
    ntilde: 241,
    oacute: 243,
    ocirc: 244,
    ograve: 242,
    oslash: 248,
    otilde: 245,
    ouml: 246,
    szlig: 223,
    thorn: 254,
    uacute: 250,
    ucirc: 251,
    ugrave: 249,
    uuml: 252,
    yacute: 253,
    yuml: 255,
    copy: 169,
    reg: 174,
    nbsp: 160,
    iexcl: 161,
    cent: 162,
    pound: 163,
    curren: 164,
    yen: 165,
    brvbar: 166,
    sect: 167,
    uml: 168,
    ordf: 170,
    laquo: 171,
    not: 172,
    shy: 173,
    macr: 175,
    deg: 176,
    plusmn: 177,
    sup1: 185,
    sup2: 178,
    sup3: 179,
    acute: 180,
    micro: 181,
    para: 182,
    middot: 183,
    cedil: 184,
    ordm: 186,
    raquo: 187,
    frac14: 188,
    frac12: 189,
    frac34: 190,
    iquest: 191,
    times: 215,
    divide: 247,
    OElig: 338,
    oelig: 339,
    Scaron: 352,
    scaron: 353,
    Yuml: 376,
    fnof: 402,
    circ: 710,
    tilde: 732,
    Alpha: 913,
    Beta: 914,
    Gamma: 915,
    Delta: 916,
    Epsilon: 917,
    Zeta: 918,
    Eta: 919,
    Theta: 920,
    Iota: 921,
    Kappa: 922,
    Lambda: 923,
    Mu: 924,
    Nu: 925,
    Xi: 926,
    Omicron: 927,
    Pi: 928,
    Rho: 929,
    Sigma: 931,
    Tau: 932,
    Upsilon: 933,
    Phi: 934,
    Chi: 935,
    Psi: 936,
    Omega: 937,
    alpha: 945,
    beta: 946,
    gamma: 947,
    delta: 948,
    epsilon: 949,
    zeta: 950,
    eta: 951,
    theta: 952,
    iota: 953,
    kappa: 954,
    lambda: 955,
    mu: 956,
    nu: 957,
    xi: 958,
    omicron: 959,
    pi: 960,
    rho: 961,
    sigmaf: 962,
    sigma: 963,
    tau: 964,
    upsilon: 965,
    phi: 966,
    chi: 967,
    psi: 968,
    omega: 969,
    thetasym: 977,
    upsih: 978,
    piv: 982,
    ensp: 8194,
    emsp: 8195,
    thinsp: 8201,
    zwnj: 8204,
    zwj: 8205,
    lrm: 8206,
    rlm: 8207,
    ndash: 8211,
    mdash: 8212,
    lsquo: 8216,
    rsquo: 8217,
    sbquo: 8218,
    ldquo: 8220,
    rdquo: 8221,
    bdquo: 8222,
    dagger: 8224,
    Dagger: 8225,
    bull: 8226,
    hellip: 8230,
    permil: 8240,
    prime: 8242,
    Prime: 8243,
    lsaquo: 8249,
    rsaquo: 8250,
    oline: 8254,
    frasl: 8260,
    euro: 8364,
    image: 8465,
    weierp: 8472,
    real: 8476,
    trade: 8482,
    alefsym: 8501,
    larr: 8592,
    uarr: 8593,
    rarr: 8594,
    darr: 8595,
    harr: 8596,
    crarr: 8629,
    lArr: 8656,
    uArr: 8657,
    rArr: 8658,
    dArr: 8659,
    hArr: 8660,
    forall: 8704,
    part: 8706,
    exist: 8707,
    empty: 8709,
    nabla: 8711,
    isin: 8712,
    notin: 8713,
    ni: 8715,
    prod: 8719,
    sum: 8721,
    minus: 8722,
    lowast: 8727,
    radic: 8730,
    prop: 8733,
    infin: 8734,
    ang: 8736,
    and: 8743,
    or: 8744,
    cap: 8745,
    cup: 8746,
    int: 8747,
    there4: 8756,
    sim: 8764,
    cong: 8773,
    asymp: 8776,
    ne: 8800,
    equiv: 8801,
    le: 8804,
    ge: 8805,
    sub: 8834,
    sup: 8835,
    nsub: 8836,
    sube: 8838,
    supe: 8839,
    oplus: 8853,
    otimes: 8855,
    perp: 8869,
    sdot: 8901,
    lceil: 8968,
    rceil: 8969,
    lfloor: 8970,
    rfloor: 8971,
    lang: 9001,
    rang: 9002,
    loz: 9674,
    spades: 9824,
    clubs: 9827,
    hearts: 9829,
    diams: 9830
  }, Object.keys(e.ENTITIES).forEach(function (t) {
    var r = e.ENTITIES[t];
    var n = "number" == typeof r ? String.fromCharCode(r) : r;
    e.ENTITIES[t] = n;
  }), e.STATE) e.STATE[e.STATE[m]] = m;
  function f(e, t, r) {
    e[t] && e[t](r);
  }
  function g(e, t, r) {
    e.textNode && b(e);
    f(e, t, r);
  }
  function b(e) {
    e.textNode = y(e.opt, e.textNode);
    e.textNode && f(e, "ontext", e.textNode);
    e.textNode = "";
  }
  function y(e, t) {
    e.trim && (t = t.trim());
    e.normalize && (t = t.replace(/\s+/g, " "));
    return t;
  }
  function k(e, t) {
    b(e);
    let r = Error(t + "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c);
    r.reason = t;
    r.line = e.line;
    r.column = e.column;
    e.error = r;
    f(e, "onerror", r);
    return e;
  }
  function v(e) {
    e.sawRoot && !e.closedRoot && w(e, "Unclosed root tag");
    e.state !== p.BEGIN && e.state !== p.BEGIN_WHITESPACE && e.state !== p.TEXT && k(e, "Unexpected end");
    b(e);
    e.c = "";
    e.closed = !0;
    f(e, "onend");
    r.call(e, e.strict, e.opt);
    return e;
  }
  function w(e, t) {
    if ("object" != typeof e || !(e instanceof r)) throw Error("bad call to strictFail");
    e.strict && k(e, t);
  }
  function x(e, t) {
    var r = 0 > e.indexOf(":") ? ["", e] : e.split(":");
    var n = r[0];
    var a = r[1];
    t && "xmlns" === e && (n = "xmlns", a = "");
    return {
      prefix: n,
      local: a
    };
  }
  function S(e) {
    if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) {
      e.attribName = e.attribValue = "";
      return;
    }
    if (e.opt.xmlns) {
      var t = x(e.attribName, !0);
      var r = t.prefix;
      var i = t.local;
      if ("xmlns" === r) {
        if ("xml" === i && e.attribValue !== n) w(e, "xml: prefix must be bound to " + n + "\nActual: " + e.attribValue);else if ("xmlns" === i && e.attribValue !== a) w(e, "xmlns: prefix must be bound to " + a + "\nActual: " + e.attribValue);else {
          var o = e.tag;
          var s = e.tags[e.tags.length - 1] || e;
          o.ns === s.ns && (o.ns = Object.create(s.ns));
          o.ns[i] = e.attribValue;
        }
      }
      e.attribList.push([e.attribName, e.attribValue]);
    } else {
      e.tag.attributes[e.attribName] = e.attribValue;
      g(e, "onattribute", {
        name: e.attribName,
        value: e.attribValue
      });
    }
    e.attribName = e.attribValue = "";
  }
  function C(e, t) {
    if (e.opt.xmlns) {
      var r = e.tag;
      var n = x(e.tagName);
      r.prefix = n.prefix;
      r.local = n.local;
      r.uri = r.ns[n.prefix] || "";
      r.prefix && !r.uri && (w(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), r.uri = n.prefix);
      var a = e.tags[e.tags.length - 1] || e;
      r.ns && a.ns !== r.ns && Object.keys(r.ns).forEach(function (t) {
        g(e, "onopennamespace", {
          prefix: t,
          uri: r.ns[t]
        });
      });
      for (i = 0, o = e.attribList.length, void 0; i < o; i++) {
        var i;
        var o;
        var s = e.attribList[i];
        var l = s[0];
        var c = s[1];
        var u = x(l, !0);
        var d = u.prefix;
        var h = u.local;
        var m = "" === d ? "" : r.ns[d] || "";
        var f = {
          name: l,
          value: c,
          prefix: d,
          local: h,
          uri: m
        };
        d && "xmlns" !== d && !m && (w(e, "Unbound namespace prefix: " + JSON.stringify(d)), f.uri = d);
        e.tag.attributes[l] = f;
        g(e, "onattribute", f);
      }
      e.attribList.length = 0;
    }
    e.tag.isSelfClosing = !!t;
    e.sawRoot = !0;
    e.tags.push(e.tag);
    g(e, "onopentag", e.tag);
    t || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = p.TEXT : e.state = p.SCRIPT, e.tag = null, e.tagName = "");
    e.attribName = e.attribValue = "";
    e.attribList.length = 0;
  }
  function A(e) {
    if (!e.tagName) {
      w(e, "Weird empty close tag.");
      e.textNode += "</>";
      e.state = p.TEXT;
      return;
    }
    if (e.script) {
      if ("script" !== e.tagName) {
        e.script += "</" + e.tagName + ">";
        e.tagName = "";
        e.state = p.SCRIPT;
        return;
      }
      g(e, "onscript", e.script);
      e.script = "";
    }
    var t = e.tags.length;
    var r = e.tagName;
    e.strict || (r = r[e.looseCase]());
    for (var n = r; t--;) if (e.tags[t].name !== n) w(e, "Unexpected close tag");else break;
    if (t < 0) {
      w(e, "Unmatched closing tag: " + e.tagName);
      e.textNode += "</" + e.tagName + ">";
      e.state = p.TEXT;
      return;
    }
    e.tagName = r;
    for (var a = e.tags.length; a-- > t;) {
      var i = e.tag = e.tags.pop();
      e.tagName = e.tag.name;
      g(e, "onclosetag", e.tagName);
      var o = {};
      for (var s in i.ns) o[s] = i.ns[s];
      var l = e.tags[e.tags.length - 1] || e;
      e.opt.xmlns && i.ns !== l.ns && Object.keys(i.ns).forEach(function (t) {
        var r = i.ns[t];
        g(e, "onclosenamespace", {
          prefix: t,
          uri: r
        });
      });
    }
    0 === t && (e.closedRoot = !0);
    e.tagName = e.attribValue = e.attribName = "";
    e.attribList.length = 0;
    e.state = p.TEXT;
  }
  function T(e, t) {
    "<" === t ? (e.state = p.OPEN_WAKA, e.startTagPosition = e.position) : u(t) || (w(e, "Non-whitespace before first tag."), e.textNode = t, e.state = p.TEXT);
  }
  function E(e, t) {
    var r = "";
    t < e.length && (r = e.charAt(t));
    return r;
  }
  p = e.STATE;
}(m);
var f = {};
!function (e) {
  e.elemsGroups = {
    animation: new Set(["animate", "animateColor", "animateMotion", "animateTransform", "set"]),
    descriptive: new Set(["desc", "metadata", "title"]),
    shape: new Set(["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"]),
    structural: new Set(["defs", "g", "svg", "symbol", "use"]),
    paintServer: new Set(["hatch", "linearGradient", "meshGradient", "pattern", "radialGradient", "solidColor"]),
    nonRendering: new Set(["clipPath", "filter", "linearGradient", "marker", "mask", "pattern", "radialGradient", "solidColor", "symbol"]),
    container: new Set(["a", "defs", "foreignObject", "g", "marker", "mask", "missing-glyph", "pattern", "svg", "switch", "symbol"]),
    textContent: new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "glyph", "glyphRef", "text", "textPath", "tref", "tspan"]),
    textContentChild: new Set(["altGlyph", "textPath", "tref", "tspan"]),
    lightSource: new Set(["feDiffuseLighting", "feDistantLight", "fePointLight", "feSpecularLighting", "feSpotLight"]),
    filterPrimitive: new Set(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence"])
  };
  e.textElems = new Set([...e.elemsGroups.textContent, "pre", "title"]);
  e.pathElems = new Set(["glyph", "missing-glyph", "path"]);
  e.attrsGroups = {
    animationAddition: new Set(["additive", "accumulate"]),
    animationAttributeTarget: new Set(["attributeType", "attributeName"]),
    animationEvent: new Set(["onbegin", "onend", "onrepeat", "onload"]),
    animationTiming: new Set(["begin", "dur", "end", "fill", "max", "min", "repeatCount", "repeatDur", "restart"]),
    animationValue: new Set(["by", "calcMode", "from", "keySplines", "keyTimes", "to", "values"]),
    conditionalProcessing: new Set(["requiredExtensions", "requiredFeatures", "systemLanguage"]),
    core: new Set(["id", "tabindex", "xml:base", "xml:lang", "xml:space"]),
    graphicalEvent: new Set(["onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup"]),
    presentation: new Set(["alignment-baseline", "baseline-shift", "clip-path", "clip-rule", "clip", "color-interpolation-filters", "color-interpolation", "color-profile", "color-rendering", "color", "cursor", "direction", "display", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "fill", "filter", "flood-color", "flood-opacity", "font-family", "font-size-adjust", "font-size", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "paint-order", "pointer-events", "shape-rendering", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "stroke", "text-anchor", "text-decoration", "text-overflow", "text-rendering", "transform-origin", "transform", "unicode-bidi", "vector-effect", "visibility", "word-spacing", "writing-mode"]),
    xlink: new Set(["xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type"]),
    documentEvent: new Set(["onabort", "onerror", "onresize", "onscroll", "onunload", "onzoom"]),
    documentElementEvent: new Set(["oncopy", "oncut", "onpaste"]),
    globalEvent: new Set(["oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting"]),
    filterPrimitive: new Set(["x", "y", "width", "height", "result"]),
    transferFunction: new Set(["amplitude", "exponent", "intercept", "offset", "slope", "tableValues", "type"])
  };
  e.attrsGroupsDefaults = {
    core: {
      "xml:space": "default"
    },
    presentation: {
      clip: "auto",
      "clip-path": "none",
      "clip-rule": "nonzero",
      mask: "none",
      opacity: "1",
      "stop-color": "#000",
      "stop-opacity": "1",
      "fill-opacity": "1",
      "fill-rule": "nonzero",
      fill: "#000",
      stroke: "none",
      "stroke-width": "1",
      "stroke-linecap": "butt",
      "stroke-linejoin": "miter",
      "stroke-miterlimit": "4",
      "stroke-dasharray": "none",
      "stroke-dashoffset": "0",
      "stroke-opacity": "1",
      "paint-order": "normal",
      "vector-effect": "none",
      display: "inline",
      visibility: "visible",
      "marker-start": "none",
      "marker-mid": "none",
      "marker-end": "none",
      "color-interpolation": "sRGB",
      "color-interpolation-filters": "linearRGB",
      "color-rendering": "auto",
      "shape-rendering": "auto",
      "text-rendering": "auto",
      "image-rendering": "auto",
      "font-style": "normal",
      "font-variant": "normal",
      "font-weight": "normal",
      "font-stretch": "normal",
      "font-size": "medium",
      "font-size-adjust": "none",
      kerning: "auto",
      "letter-spacing": "normal",
      "word-spacing": "normal",
      "text-decoration": "none",
      "text-anchor": "start",
      "text-overflow": "clip",
      "writing-mode": "lr-tb",
      "glyph-orientation-vertical": "auto",
      "glyph-orientation-horizontal": "0deg",
      direction: "ltr",
      "unicode-bidi": "normal",
      "dominant-baseline": "auto",
      "alignment-baseline": "baseline",
      "baseline-shift": "baseline"
    },
    transferFunction: {
      slope: "1",
      intercept: "0",
      amplitude: "1",
      exponent: "1",
      offset: "0"
    }
  };
  e.elems = {
    a: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"]),
      attrs: new Set(["class", "externalResourcesRequired", "style", "target", "transform"]),
      defaults: {
        target: "_self"
      },
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view", "tspan"])
    },
    altGlyph: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"]),
      attrs: new Set(["class", "dx", "dy", "externalResourcesRequired", "format", "glyphRef", "rotate", "style", "x", "y"])
    },
    altGlyphDef: {
      attrsGroups: new Set(["core"]),
      content: new Set(["glyphRef"])
    },
    altGlyphItem: {
      attrsGroups: new Set(["core"]),
      content: new Set(["glyphRef", "altGlyphItem"])
    },
    animate: {
      attrsGroups: new Set(["animationAddition", "animationAttributeTarget", "animationEvent", "animationTiming", "animationValue", "conditionalProcessing", "core", "presentation", "xlink"]),
      attrs: new Set(["externalResourcesRequired"]),
      contentGroups: new Set(["descriptive"])
    },
    animateColor: {
      attrsGroups: new Set(["animationAddition", "animationAttributeTarget", "animationEvent", "animationTiming", "animationValue", "conditionalProcessing", "core", "presentation", "xlink"]),
      attrs: new Set(["externalResourcesRequired"]),
      contentGroups: new Set(["descriptive"])
    },
    animateMotion: {
      attrsGroups: new Set(["animationAddition", "animationEvent", "animationTiming", "animationValue", "conditionalProcessing", "core", "xlink"]),
      attrs: new Set(["externalResourcesRequired", "keyPoints", "origin", "path", "rotate"]),
      defaults: {
        rotate: "0"
      },
      contentGroups: new Set(["descriptive"]),
      content: new Set(["mpath"])
    },
    animateTransform: {
      attrsGroups: new Set(["animationAddition", "animationAttributeTarget", "animationEvent", "animationTiming", "animationValue", "conditionalProcessing", "core", "xlink"]),
      attrs: new Set(["externalResourcesRequired", "type"]),
      contentGroups: new Set(["descriptive"])
    },
    circle: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "cx", "cy", "externalResourcesRequired", "r", "style", "transform"]),
      defaults: {
        cx: "0",
        cy: "0"
      },
      contentGroups: new Set(["animation", "descriptive"])
    },
    clipPath: {
      attrsGroups: new Set(["conditionalProcessing", "core", "presentation"]),
      attrs: new Set(["class", "clipPathUnits", "externalResourcesRequired", "style", "transform"]),
      defaults: {
        clipPathUnits: "userSpaceOnUse"
      },
      contentGroups: new Set(["animation", "descriptive", "shape"]),
      content: new Set(["text", "use"])
    },
    "color-profile": {
      attrsGroups: new Set(["core", "xlink"]),
      attrs: new Set(["local", "name", "rendering-intent"]),
      defaults: {
        name: "sRGB",
        "rendering-intent": "auto"
      },
      contentGroups: new Set(["descriptive"])
    },
    cursor: {
      attrsGroups: new Set(["core", "conditionalProcessing", "xlink"]),
      attrs: new Set(["externalResourcesRequired", "x", "y"]),
      defaults: {
        x: "0",
        y: "0"
      },
      contentGroups: new Set(["descriptive"])
    },
    defs: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "style", "transform"]),
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    desc: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["class", "style"])
    },
    ellipse: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "cx", "cy", "externalResourcesRequired", "rx", "ry", "style", "transform"]),
      defaults: {
        cx: "0",
        cy: "0"
      },
      contentGroups: new Set(["animation", "descriptive"])
    },
    feBlend: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style", "in", "in2", "mode"]),
      defaults: {
        mode: "normal"
      },
      content: new Set(["animate", "set"])
    },
    feColorMatrix: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style", "in", "type", "values"]),
      defaults: {
        type: "matrix"
      },
      content: new Set(["animate", "set"])
    },
    feComponentTransfer: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style", "in"]),
      content: new Set(["feFuncA", "feFuncB", "feFuncG", "feFuncR"])
    },
    feComposite: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "in", "in2", "k1", "k2", "k3", "k4", "operator", "style"]),
      defaults: {
        operator: "over",
        k1: "0",
        k2: "0",
        k3: "0",
        k4: "0"
      },
      content: new Set(["animate", "set"])
    },
    feConvolveMatrix: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "in", "kernelMatrix", "order", "style", "bias", "divisor", "edgeMode", "targetX", "targetY", "kernelUnitLength", "preserveAlpha"]),
      defaults: {
        order: "3",
        bias: "0",
        edgeMode: "duplicate",
        preserveAlpha: "false"
      },
      content: new Set(["animate", "set"])
    },
    feDiffuseLighting: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "diffuseConstant", "in", "kernelUnitLength", "style", "surfaceScale"]),
      defaults: {
        surfaceScale: "1",
        diffuseConstant: "1"
      },
      contentGroups: new Set(["descriptive"]),
      content: new Set(["feDistantLight", "fePointLight", "feSpotLight"])
    },
    feDisplacementMap: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "in", "in2", "scale", "style", "xChannelSelector", "yChannelSelector"]),
      defaults: {
        scale: "0",
        xChannelSelector: "A",
        yChannelSelector: "A"
      },
      content: new Set(["animate", "set"])
    },
    feDistantLight: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["azimuth", "elevation"]),
      defaults: {
        azimuth: "0",
        elevation: "0"
      },
      content: new Set(["animate", "set"])
    },
    feFlood: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style"]),
      content: new Set(["animate", "animateColor", "set"])
    },
    feFuncA: {
      attrsGroups: new Set(["core", "transferFunction"]),
      content: new Set(["set", "animate"])
    },
    feFuncB: {
      attrsGroups: new Set(["core", "transferFunction"]),
      content: new Set(["set", "animate"])
    },
    feFuncG: {
      attrsGroups: new Set(["core", "transferFunction"]),
      content: new Set(["set", "animate"])
    },
    feFuncR: {
      attrsGroups: new Set(["core", "transferFunction"]),
      content: new Set(["set", "animate"])
    },
    feGaussianBlur: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style", "in", "stdDeviation"]),
      defaults: {
        stdDeviation: "0"
      },
      content: new Set(["set", "animate"])
    },
    feImage: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive", "xlink"]),
      attrs: new Set(["class", "externalResourcesRequired", "href", "preserveAspectRatio", "style", "xlink:href"]),
      defaults: {
        preserveAspectRatio: "xMidYMid meet"
      },
      content: new Set(["animate", "animateTransform", "set"])
    },
    feMerge: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style"]),
      content: new Set(["feMergeNode"])
    },
    feMergeNode: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["in"]),
      content: new Set(["animate", "set"])
    },
    feMorphology: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style", "in", "operator", "radius"]),
      defaults: {
        operator: "erode",
        radius: "0"
      },
      content: new Set(["animate", "set"])
    },
    feOffset: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style", "in", "dx", "dy"]),
      defaults: {
        dx: "0",
        dy: "0"
      },
      content: new Set(["animate", "set"])
    },
    fePointLight: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["x", "y", "z"]),
      defaults: {
        x: "0",
        y: "0",
        z: "0"
      },
      content: new Set(["animate", "set"])
    },
    feSpecularLighting: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "in", "kernelUnitLength", "specularConstant", "specularExponent", "style", "surfaceScale"]),
      defaults: {
        surfaceScale: "1",
        specularConstant: "1",
        specularExponent: "1"
      },
      contentGroups: new Set(["descriptive", "lightSource"])
    },
    feSpotLight: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["limitingConeAngle", "pointsAtX", "pointsAtY", "pointsAtZ", "specularExponent", "x", "y", "z"]),
      defaults: {
        x: "0",
        y: "0",
        z: "0",
        pointsAtX: "0",
        pointsAtY: "0",
        pointsAtZ: "0",
        specularExponent: "1"
      },
      content: new Set(["animate", "set"])
    },
    feTile: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["class", "style", "in"]),
      content: new Set(["animate", "set"])
    },
    feTurbulence: {
      attrsGroups: new Set(["core", "presentation", "filterPrimitive"]),
      attrs: new Set(["baseFrequency", "class", "numOctaves", "seed", "stitchTiles", "style", "type"]),
      defaults: {
        baseFrequency: "0",
        numOctaves: "1",
        seed: "0",
        stitchTiles: "noStitch",
        type: "turbulence"
      },
      content: new Set(["animate", "set"])
    },
    filter: {
      attrsGroups: new Set(["core", "presentation", "xlink"]),
      attrs: new Set(["class", "externalResourcesRequired", "filterRes", "filterUnits", "height", "href", "primitiveUnits", "style", "width", "x", "xlink:href", "y"]),
      defaults: {
        primitiveUnits: "userSpaceOnUse",
        x: "-10%",
        y: "-10%",
        width: "120%",
        height: "120%"
      },
      contentGroups: new Set(["descriptive", "filterPrimitive"]),
      content: new Set(["animate", "set"])
    },
    font: {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y"]),
      defaults: {
        "horiz-origin-x": "0",
        "horiz-origin-y": "0"
      },
      contentGroups: new Set(["descriptive"]),
      content: new Set(["font-face", "glyph", "hkern", "missing-glyph", "vkern"])
    },
    "font-face": {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["font-family", "font-style", "font-variant", "font-weight", "font-stretch", "font-size", "unicode-range", "units-per-em", "panose-1", "stemv", "stemh", "slope", "cap-height", "x-height", "accent-height", "ascent", "descent", "widths", "bbox", "ideographic", "alphabetic", "mathematical", "hanging", "v-ideographic", "v-alphabetic", "v-mathematical", "v-hanging", "underline-position", "underline-thickness", "strikethrough-position", "strikethrough-thickness", "overline-position", "overline-thickness"]),
      defaults: {
        "font-style": "all",
        "font-variant": "normal",
        "font-weight": "all",
        "font-stretch": "normal",
        "unicode-range": "U+0-10FFFF",
        "units-per-em": "1000",
        "panose-1": "0 0 0 0 0 0 0 0 0 0",
        slope: "0"
      },
      contentGroups: new Set(["descriptive"]),
      content: new Set(["font-face-src"])
    },
    "font-face-format": {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["string"])
    },
    "font-face-name": {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["name"])
    },
    "font-face-src": {
      attrsGroups: new Set(["core"]),
      content: new Set(["font-face-name", "font-face-uri"])
    },
    "font-face-uri": {
      attrsGroups: new Set(["core", "xlink"]),
      attrs: new Set(["href", "xlink:href"]),
      content: new Set(["font-face-format"])
    },
    foreignObject: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "height", "style", "transform", "width", "x", "y"]),
      defaults: {
        x: "0",
        y: "0"
      }
    },
    g: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "style", "transform"]),
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    glyph: {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["arabic-form", "class", "d", "glyph-name", "horiz-adv-x", "lang", "orientation", "style", "unicode", "vert-adv-y", "vert-origin-x", "vert-origin-y"]),
      defaults: {
        "arabic-form": "initial"
      },
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    glyphRef: {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["class", "d", "horiz-adv-x", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y"]),
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    hatch: {
      attrsGroups: new Set(["core", "presentation", "xlink"]),
      attrs: new Set(["class", "hatchContentUnits", "hatchUnits", "pitch", "rotate", "style", "transform", "x", "y"]),
      defaults: {
        hatchUnits: "objectBoundingBox",
        hatchContentUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        pitch: "0",
        rotate: "0"
      },
      contentGroups: new Set(["animation", "descriptive"]),
      content: new Set(["hatchPath"])
    },
    hatchPath: {
      attrsGroups: new Set(["core", "presentation", "xlink"]),
      attrs: new Set(["class", "style", "d", "offset"]),
      defaults: {
        offset: "0"
      },
      contentGroups: new Set(["animation", "descriptive"])
    },
    hkern: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["u1", "g1", "u2", "g2", "k"])
    },
    image: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"]),
      attrs: new Set(["class", "externalResourcesRequired", "height", "href", "preserveAspectRatio", "style", "transform", "width", "x", "xlink:href", "y"]),
      defaults: {
        x: "0",
        y: "0",
        preserveAspectRatio: "xMidYMid meet"
      },
      contentGroups: new Set(["animation", "descriptive"])
    },
    line: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "style", "transform", "x1", "x2", "y1", "y2"]),
      defaults: {
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "0"
      },
      contentGroups: new Set(["animation", "descriptive"])
    },
    linearGradient: {
      attrsGroups: new Set(["core", "presentation", "xlink"]),
      attrs: new Set(["class", "externalResourcesRequired", "gradientTransform", "gradientUnits", "href", "spreadMethod", "style", "x1", "x2", "xlink:href", "y1", "y2"]),
      defaults: {
        x1: "0",
        y1: "0",
        x2: "100%",
        y2: "0",
        spreadMethod: "pad"
      },
      contentGroups: new Set(["descriptive"]),
      content: new Set(["animate", "animateTransform", "set", "stop"])
    },
    marker: {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "style", "viewBox"]),
      defaults: {
        markerUnits: "strokeWidth",
        refX: "0",
        refY: "0",
        markerWidth: "3",
        markerHeight: "3"
      },
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    mask: {
      attrsGroups: new Set(["conditionalProcessing", "core", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "height", "mask-type", "maskContentUnits", "maskUnits", "style", "width", "x", "y"]),
      defaults: {
        maskUnits: "objectBoundingBox",
        maskContentUnits: "userSpaceOnUse",
        x: "-10%",
        y: "-10%",
        width: "120%",
        height: "120%"
      },
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    metadata: {
      attrsGroups: new Set(["core"])
    },
    "missing-glyph": {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["class", "d", "horiz-adv-x", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y"]),
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    mpath: {
      attrsGroups: new Set(["core", "xlink"]),
      attrs: new Set(["externalResourcesRequired", "href", "xlink:href"]),
      contentGroups: new Set(["descriptive"])
    },
    path: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "d", "externalResourcesRequired", "pathLength", "style", "transform"]),
      contentGroups: new Set(["animation", "descriptive"])
    },
    pattern: {
      attrsGroups: new Set(["conditionalProcessing", "core", "presentation", "xlink"]),
      attrs: new Set(["class", "externalResourcesRequired", "height", "href", "patternContentUnits", "patternTransform", "patternUnits", "preserveAspectRatio", "style", "viewBox", "width", "x", "xlink:href", "y"]),
      defaults: {
        patternUnits: "objectBoundingBox",
        patternContentUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "0",
        height: "0",
        preserveAspectRatio: "xMidYMid meet"
      },
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    polygon: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "points", "style", "transform"]),
      contentGroups: new Set(["animation", "descriptive"])
    },
    polyline: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "points", "style", "transform"]),
      contentGroups: new Set(["animation", "descriptive"])
    },
    radialGradient: {
      attrsGroups: new Set(["core", "presentation", "xlink"]),
      attrs: new Set(["class", "cx", "cy", "externalResourcesRequired", "fr", "fx", "fy", "gradientTransform", "gradientUnits", "href", "r", "spreadMethod", "style", "xlink:href"]),
      defaults: {
        gradientUnits: "objectBoundingBox",
        cx: "50%",
        cy: "50%",
        r: "50%"
      },
      contentGroups: new Set(["descriptive"]),
      content: new Set(["animate", "animateTransform", "set", "stop"])
    },
    meshGradient: {
      attrsGroups: new Set(["core", "presentation", "xlink"]),
      attrs: new Set(["class", "style", "x", "y", "gradientUnits", "transform"]),
      contentGroups: new Set(["descriptive", "paintServer", "animation"]),
      content: new Set(["meshRow"])
    },
    meshRow: {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["class", "style"]),
      contentGroups: new Set(["descriptive"]),
      content: new Set(["meshPatch"])
    },
    meshPatch: {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["class", "style"]),
      contentGroups: new Set(["descriptive"]),
      content: new Set(["stop"])
    },
    rect: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "height", "rx", "ry", "style", "transform", "width", "x", "y"]),
      defaults: {
        x: "0",
        y: "0"
      },
      contentGroups: new Set(["animation", "descriptive"])
    },
    script: {
      attrsGroups: new Set(["core", "xlink"]),
      attrs: new Set(["externalResourcesRequired", "type", "href", "xlink:href"])
    },
    set: {
      attrsGroups: new Set(["animation", "animationAttributeTarget", "animationTiming", "conditionalProcessing", "core", "xlink"]),
      attrs: new Set(["externalResourcesRequired", "to"]),
      contentGroups: new Set(["descriptive"])
    },
    solidColor: {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["class", "style"]),
      contentGroups: new Set(["paintServer"])
    },
    stop: {
      attrsGroups: new Set(["core", "presentation"]),
      attrs: new Set(["class", "style", "offset", "path"]),
      content: new Set(["animate", "animateColor", "set"])
    },
    style: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["type", "media", "title"]),
      defaults: {
        type: "text/css"
      }
    },
    svg: {
      attrsGroups: new Set(["conditionalProcessing", "core", "documentEvent", "graphicalEvent", "presentation"]),
      attrs: new Set(["baseProfile", "class", "contentScriptType", "contentStyleType", "height", "preserveAspectRatio", "style", "version", "viewBox", "width", "x", "y", "zoomAndPan"]),
      defaults: {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        preserveAspectRatio: "xMidYMid meet",
        zoomAndPan: "magnify",
        version: "1.1",
        baseProfile: "none",
        contentScriptType: "application/ecmascript",
        contentStyleType: "text/css"
      },
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    switch: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "style", "transform"]),
      contentGroups: new Set(["animation", "descriptive", "shape"]),
      content: new Set(["a", "foreignObject", "g", "image", "svg", "switch", "text", "use"])
    },
    symbol: {
      attrsGroups: new Set(["core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "externalResourcesRequired", "preserveAspectRatio", "refX", "refY", "style", "viewBox"]),
      defaults: {
        refX: "0",
        refY: "0"
      },
      contentGroups: new Set(["animation", "descriptive", "paintServer", "shape", "structural"]),
      content: new Set(["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font-face", "font", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"])
    },
    text: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "dx", "dy", "externalResourcesRequired", "lengthAdjust", "rotate", "style", "textLength", "transform", "x", "y"]),
      defaults: {
        x: "0",
        y: "0",
        lengthAdjust: "spacing"
      },
      contentGroups: new Set(["animation", "descriptive", "textContentChild"]),
      content: new Set(["a"])
    },
    textPath: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"]),
      attrs: new Set(["class", "d", "externalResourcesRequired", "href", "method", "spacing", "startOffset", "style", "xlink:href"]),
      defaults: {
        startOffset: "0",
        method: "align",
        spacing: "exact"
      },
      contentGroups: new Set(["descriptive"]),
      content: new Set(["a", "altGlyph", "animate", "animateColor", "set", "tref", "tspan"])
    },
    title: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["class", "style"])
    },
    tref: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"]),
      attrs: new Set(["class", "externalResourcesRequired", "href", "style", "xlink:href"]),
      contentGroups: new Set(["descriptive"]),
      content: new Set(["animate", "animateColor", "set"])
    },
    tspan: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation"]),
      attrs: new Set(["class", "dx", "dy", "externalResourcesRequired", "lengthAdjust", "rotate", "style", "textLength", "x", "y"]),
      contentGroups: new Set(["descriptive"]),
      content: new Set(["a", "altGlyph", "animate", "animateColor", "set", "tref", "tspan"])
    },
    use: {
      attrsGroups: new Set(["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"]),
      attrs: new Set(["class", "externalResourcesRequired", "height", "href", "style", "transform", "width", "x", "xlink:href", "y"]),
      defaults: {
        x: "0",
        y: "0"
      },
      contentGroups: new Set(["animation", "descriptive"])
    },
    view: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["externalResourcesRequired", "preserveAspectRatio", "viewBox", "viewTarget", "zoomAndPan"]),
      contentGroups: new Set(["descriptive"])
    },
    vkern: {
      attrsGroups: new Set(["core"]),
      attrs: new Set(["u1", "g1", "u2", "g2", "k"])
    }
  };
  e.editorNamespaces = new Set(["http://creativecommons.org/ns#", "http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd", "http://ns.adobe.com/AdobeIllustrator/10.0/", "http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/", "http://ns.adobe.com/Extensibility/1.0/", "http://ns.adobe.com/Flows/1.0/", "http://ns.adobe.com/GenericCustomNamespace/1.0/", "http://ns.adobe.com/Graphs/1.0/", "http://ns.adobe.com/ImageReplacement/1.0/", "http://ns.adobe.com/SaveForWeb/1.0/", "http://ns.adobe.com/Variables/1.0/", "http://ns.adobe.com/XPath/1.0/", "http://purl.org/dc/elements/1.1/", "http://schemas.microsoft.com/visio/2003/SVGExtensions/", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd", "http://taptrix.com/vectorillustrator/svg_extensions", "http://www.bohemiancoding.com/sketch/ns", "http://www.figma.com/figma/ns", "http://www.inkscape.org/namespaces/inkscape", "http://www.serif.com/", "http://www.vector.evaxdesign.sk", "http://www.w3.org/1999/02/22-rdf-syntax-ns#"]);
  e.referencesProps = new Set(["clip-path", "color-profile", "fill", "filter", "marker-end", "marker-mid", "marker-start", "mask", "stroke", "style"]);
  e.inheritableAttrs = new Set(["clip-rule", "color-interpolation-filters", "color-interpolation", "color-profile", "color-rendering", "color", "cursor", "direction", "dominant-baseline", "fill-opacity", "fill-rule", "fill", "font-family", "font-size-adjust", "font-size", "font-stretch", "font-style", "font-variant", "font-weight", "font", "glyph-orientation-horizontal", "glyph-orientation-vertical", "image-rendering", "letter-spacing", "marker-end", "marker-mid", "marker-start", "marker", "paint-order", "pointer-events", "shape-rendering", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "stroke", "text-anchor", "text-rendering", "transform", "visibility", "word-spacing", "writing-mode"]);
  e.presentationNonInheritableGroupAttrs = new Set(["clip-path", "display", "filter", "mask", "opacity", "text-decoration", "transform", "unicode-bidi"]);
  e.colorsNames = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#0ff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000",
    blanchedalmond: "#ffebcd",
    blue: "#00f",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#f0f",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslategrey: "#789",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#0f0",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#f0f",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#639",
    red: "#f00",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    yellow: "#ff0",
    yellowgreen: "#9acd32"
  };
  e.colorsShortNames = {
    "#f0ffff": "azure",
    "#f5f5dc": "beige",
    "#ffe4c4": "bisque",
    "#a52a2a": "brown",
    "#ff7f50": "coral",
    "#ffd700": "gold",
    "#808080": "gray",
    "#008000": "green",
    "#4b0082": "indigo",
    "#fffff0": "ivory",
    "#f0e68c": "khaki",
    "#faf0e6": "linen",
    "#800000": "maroon",
    "#000080": "navy",
    "#808000": "olive",
    "#ffa500": "orange",
    "#da70d6": "orchid",
    "#cd853f": "peru",
    "#ffc0cb": "pink",
    "#dda0dd": "plum",
    "#800080": "purple",
    "#f00": "red",
    "#ff0000": "red",
    "#fa8072": "salmon",
    "#a0522d": "sienna",
    "#c0c0c0": "silver",
    "#fffafa": "snow",
    "#d2b48c": "tan",
    "#008080": "teal",
    "#ff6347": "tomato",
    "#ee82ee": "violet",
    "#f5deb3": "wheat"
  };
  e.colorsProps = new Set(["color", "fill", "flood-color", "lighting-color", "stop-color", "stroke"]);
  e.pseudoClasses = {
    displayState: new Set(["fullscreen", "modal", "picture-in-picture"]),
    input: new Set(["autofill", "blank", "checked", "default", "disabled", "enabled", "in-range", "indetermined", "invalid", "optional", "out-of-range", "placeholder-shown", "read-only", "read-write", "required", "user-invalid", "valid"]),
    linguistic: new Set(["dir", "lang"]),
    location: new Set(["any-link", "link", "local-link", "scope", "target-within", "target", "visited"]),
    resourceState: new Set(["playing", "paused"]),
    timeDimensional: new Set(["current", "past", "future"]),
    treeStructural: new Set(["empty", "first-child", "first-of-type", "last-child", "last-of-type", "nth-child", "nth-last-child", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "root"]),
    userAction: new Set(["active", "focus-visible", "focus-within", "focus", "hover"]),
    functional: new Set(["is", "not", "where", "has"])
  };
}(f);
let {
  textElems
} = f;
class b extends Error {
  constructor(e, t, r, n, a) {
    super(e);
    this.name = "SvgoParserError";
    this.message = `${a || "<input>"}:${t}:${r}: ${e}`;
    this.reason = e;
    this.line = t;
    this.column = r;
    this.source = n;
    Error.captureStackTrace && Error.captureStackTrace(this, b);
  }
  toString() {
    let e = this.source.split(/\r?\n/);
    let t = Math.max(this.line - 3, 0);
    let r = Math.min(this.line + 2, e.length);
    let n = String(r).length;
    let a = Math.max(this.column - 54, 0);
    let i = Math.max(this.column + 20, 80);
    let o = e.slice(t, r).map((e, r) => {
      let o = e.slice(a, i);
      let s = "";
      let l = "";
      0 !== a && (s = a > e.length - 1 ? " " : "\u2026");
      i < e.length - 1 && (l = "\u2026");
      let c = t + 1 + r;
      let u = ` ${c.toString().padStart(n)} | `;
      if (c === this.line) {
        let t = u.replace(/[^|]/g, " ");
        let r = (s + e.slice(a, this.column - 1)).replace(/[^\t]/g, " ");
        return `>${u}${s}${o}${l}
 ${t + r}^`;
      }
      return ` ${u}${s}${o}${l}`;
    }).join("\n");
    return `${this.name}: ${this.message}

${o}
`;
  }
}
let y = /<!ENTITY\s+(\S+)\s+(?:'([^']+)'|"([^"]+)")\s*>/g;
let k = {
  strict: !0,
  trim: !1,
  normalize: !1,
  lowercase: !0,
  xmlns: !0,
  position: !0
};
p.parseSvg = (e, t) => {
  let r = m.parser(k.strict, k);
  let n = {
    type: "root",
    children: []
  };
  let a = n;
  let i = [n];
  let o = e => {
    Object.defineProperty(e, "parentNode", {
      writable: !0,
      value: a
    });
    a.children.push(e);
  };
  r.ondoctype = t => {
    o({
      type: "doctype",
      name: "svg",
      data: {
        doctype: t
      }
    });
    let n = t.indexOf("[");
    if (n >= 0) {
      y.lastIndex = n;
      let t = y.exec(e);
      for (; null != t;) {
        r.ENTITIES[t[1]] = t[2] || t[3];
        t = y.exec(e);
      }
    }
  };
  r.onprocessinginstruction = e => {
    o({
      type: "instruction",
      name: e.name,
      value: e.body
    });
  };
  r.oncomment = e => {
    o({
      type: "comment",
      value: e.trim()
    });
  };
  r.oncdata = e => {
    o({
      type: "cdata",
      value: e
    });
  };
  r.onopentag = e => {
    let t = {
      type: "element",
      name: e.name,
      attributes: {},
      children: []
    };
    for (let [r, n] of Object.entries(e.attributes)) t.attributes[r] = n.value;
    o(t);
    a = t;
    i.push(t);
  };
  r.ontext = e => {
    "element" === a.type && (textElems.has(a.name) ? o({
      type: "text",
      value: e
    }) : /\S/.test(e) && o({
      type: "text",
      value: e.trim()
    }));
  };
  r.onclosetag = () => {
    i.pop();
    a = i[i.length - 1];
  };
  r.onerror = r => {
    let n = new b(r.reason, r.line + 1, r.column, e, t);
    if (-1 === r.message.indexOf("Unexpected end")) throw n;
  };
  r.write(e).close();
  return n;
};
var v = {};
let {
  textElems: _textElems
} = f;
let x = {
  doctypeStart: "<!DOCTYPE",
  doctypeEnd: ">",
  procInstStart: "<?",
  procInstEnd: "?>",
  tagOpenStart: "<",
  tagOpenEnd: ">",
  tagCloseStart: "</",
  tagCloseEnd: ">",
  tagShortStart: "<",
  tagShortEnd: "/>",
  attrStart: '="',
  attrEnd: '"',
  commentStart: "\x3c!--",
  commentEnd: "--\x3e",
  cdataStart: "<![CDATA[",
  cdataEnd: "]]>",
  textStart: "",
  textEnd: "",
  indent: 4,
  regEntities: /[&'"<>]/g,
  regValEntities: /[&"<>]/g,
  encodeEntity: e => S[e],
  pretty: !1,
  useShortTags: !0,
  eol: "lf",
  finalNewline: !1
};
let S = {
  "&": "&amp;",
  "'": "&apos;",
  '"': "&quot;",
  ">": "&gt;",
  "<": "&lt;"
};
v.stringifySvg = (e, t = {}) => {
  let r = {
    ...x,
    ...t
  };
  let n = r.indent;
  let a = "    ";
  "number" == typeof n && !1 === Number.isNaN(n) ? a = n < 0 ? "	" : " ".repeat(n) : "string" == typeof n && (a = n);
  let i = {
    indent: a,
    textContext: null,
    indentLevel: 0
  };
  let o = "crlf" === r.eol ? "\r\n" : "\n";
  r.pretty && (r.doctypeEnd += o, r.procInstEnd += o, r.commentEnd += o, r.cdataEnd += o, r.tagShortEnd += o, r.tagOpenEnd += o, r.tagCloseEnd += o, r.textEnd += o);
  let s = C(e, r, i);
  r.finalNewline && s.length > 0 && !s.endsWith("\n") && (s += o);
  return s;
};
let C = (e, t, r) => {
  let n = "";
  for (let a of (r.indentLevel += 1, e.children)) {
    "element" === a.type && (n += D(a, t, r));
    "text" === a.type && (n += O(a, t, r));
    "doctype" === a.type && (n += T(a, t));
    "instruction" === a.type && (n += E(a, t));
    "comment" === a.type && (n += P(a, t));
    "cdata" === a.type && (n += L(a, t, r));
  }
  r.indentLevel -= 1;
  return n;
};
let A = (e, t) => {
  let r = "";
  e.pretty && null == t.textContext && (r = t.indent.repeat(t.indentLevel - 1));
  return r;
};
let T = (e, t) => t.doctypeStart + e.data.doctype + t.doctypeEnd;
let E = (e, t) => t.procInstStart + e.name + " " + e.value + t.procInstEnd;
let P = (e, t) => t.commentStart + e.value + t.commentEnd;
let L = (e, t, r) => A(t, r) + t.cdataStart + e.value + t.cdataEnd;
let D = (e, t, r) => {
  if (0 === e.children.length) return t.useShortTags ? A(t, r) + t.tagShortStart + e.name + N(e, t) + t.tagShortEnd : A(t, r) + t.tagShortStart + e.name + N(e, t) + t.tagOpenEnd + t.tagCloseStart + e.name + t.tagCloseEnd;
  {
    let n = t.tagOpenStart;
    let a = t.tagOpenEnd;
    let i = t.tagCloseStart;
    let o = t.tagCloseEnd;
    let s = A(t, r);
    let l = A(t, r);
    r.textContext ? (n = x.tagOpenStart, a = x.tagOpenEnd, i = x.tagCloseStart, o = x.tagCloseEnd, s = "") : _textElems.has(e.name) && (a = x.tagOpenEnd, i = x.tagCloseStart, l = "", r.textContext = e);
    let c = C(e, t, r);
    r.textContext === e && (r.textContext = null);
    return s + n + e.name + N(e, t) + a + c + l + i + e.name + o;
  }
};
let N = (e, t) => {
  let r = "";
  for (let [n, a] of Object.entries(e.attributes)) if (void 0 !== a) {
    let e = a.toString().replace(t.regValEntities, t.encodeEntity);
    r += " " + n + t.attrStart + e + t.attrEnd;
  } else r += " " + n;
  return r;
};
let O = (e, t, r) => A(t, r) + t.textStart + e.value.replace(t.regEntities, t.encodeEntity) + (r.textContext ? "" : t.textEnd);
var M = {};
var z = {};
var I = {};
var R = {};
var q = {};
var B = {};
var j = {};
var F = {};
!function (e) {
  var t;
  var r;
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
  (r = t = e.ElementType || (e.ElementType = {})).Root = "root";
  r.Text = "text";
  r.Directive = "directive";
  r.Comment = "comment";
  r.Script = "script";
  r.Style = "style";
  r.Tag = "tag";
  r.CDATA = "cdata";
  r.Doctype = "doctype";
  e.isTag = function (e) {
    return e.type === t.Tag || e.type === t.Script || e.type === t.Style;
  };
  e.Root = t.Root;
  e.Text = t.Text;
  e.Directive = t.Directive;
  e.Comment = t.Comment;
  e.Script = t.Script;
  e.Style = t.Style;
  e.Tag = t.Tag;
  e.CDATA = t.CDATA;
  e.Doctype = t.Doctype;
}(F);
var _ = {};
var U = d && d.__extends || function () {
  var e = function (t, r) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    })(t, r);
  };
  return function (t, r) {
    if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function n() {
      this.constructor = t;
    }
    e(t, r);
    t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
var G = d && d.__assign || function () {
  return (G = Object.assign || function (e) {
    for (r = 1, n = $$arguments.length, void 0; r < n; r++) {
      var t;
      var r;
      var n;
      for (var a in t = $$arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }).apply(this, arguments);
};
Object.defineProperty(_, "__esModule", {
  value: !0
});
_.cloneNode = _.hasChildren = _.isDocument = _.isDirective = _.isComment = _.isText = _.isCDATA = _.isTag = _.Element = _.Document = _.CDATA = _.NodeWithChildren = _.ProcessingInstruction = _.Comment = _.Text = _.DataNode = _.Node = void 0;
var H = function () {
  function e() {
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  Object.defineProperty(e.prototype, "parentNode", {
    get: function () {
      return this.parent;
    },
    set: function (e) {
      this.parent = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "previousSibling", {
    get: function () {
      return this.prev;
    },
    set: function (e) {
      this.prev = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "nextSibling", {
    get: function () {
      return this.next;
    },
    set: function (e) {
      this.next = e;
    },
    enumerable: !1,
    configurable: !0
  });
  e.prototype.cloneNode = function (e) {
    void 0 === e && (e = !1);
    return ei(this, e);
  };
  return e;
}();
_.Node = H;
var W = function (e) {
  function t(t) {
    var r = e.call(this) || this;
    r.data = t;
    return r;
  }
  U(t, e);
  Object.defineProperty(t.prototype, "nodeValue", {
    get: function () {
      return this.data;
    },
    set: function (e) {
      this.data = e;
    },
    enumerable: !1,
    configurable: !0
  });
  return t;
}(H);
_.DataNode = W;
var V = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    t.type = F.ElementType.Text;
    return t;
  }
  U(t, e);
  Object.defineProperty(t.prototype, "nodeType", {
    get: function () {
      return 3;
    },
    enumerable: !1,
    configurable: !0
  });
  return t;
}(W);
_.Text = V;
var $ = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    t.type = F.ElementType.Comment;
    return t;
  }
  U(t, e);
  Object.defineProperty(t.prototype, "nodeType", {
    get: function () {
      return 8;
    },
    enumerable: !1,
    configurable: !0
  });
  return t;
}(W);
_.Comment = $;
var X = function (e) {
  function t(t, r) {
    var n = e.call(this, r) || this;
    n.name = t;
    n.type = F.ElementType.Directive;
    return n;
  }
  U(t, e);
  Object.defineProperty(t.prototype, "nodeType", {
    get: function () {
      return 1;
    },
    enumerable: !1,
    configurable: !0
  });
  return t;
}(W);
_.ProcessingInstruction = X;
var Y = function (e) {
  function t(t) {
    var r = e.call(this) || this;
    r.children = t;
    return r;
  }
  U(t, e);
  Object.defineProperty(t.prototype, "firstChild", {
    get: function () {
      var e;
      return null !== (e = this.children[0]) && void 0 !== e ? e : null;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "lastChild", {
    get: function () {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "childNodes", {
    get: function () {
      return this.children;
    },
    set: function (e) {
      this.children = e;
    },
    enumerable: !1,
    configurable: !0
  });
  return t;
}(H);
_.NodeWithChildren = Y;
var K = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    t.type = F.ElementType.CDATA;
    return t;
  }
  U(t, e);
  Object.defineProperty(t.prototype, "nodeType", {
    get: function () {
      return 4;
    },
    enumerable: !1,
    configurable: !0
  });
  return t;
}(Y);
_.CDATA = K;
var Q = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    t.type = F.ElementType.Root;
    return t;
  }
  U(t, e);
  Object.defineProperty(t.prototype, "nodeType", {
    get: function () {
      return 9;
    },
    enumerable: !1,
    configurable: !0
  });
  return t;
}(Y);
_.Document = Q;
var Z = function (e) {
  function t(t, r, n, a) {
    void 0 === n && (n = []);
    void 0 === a && (a = "script" === t ? F.ElementType.Script : "style" === t ? F.ElementType.Style : F.ElementType.Tag);
    var i = e.call(this, n) || this;
    i.name = t;
    i.attribs = r;
    i.type = a;
    return i;
  }
  U(t, e);
  Object.defineProperty(t.prototype, "nodeType", {
    get: function () {
      return 1;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "tagName", {
    get: function () {
      return this.name;
    },
    set: function (e) {
      this.name = e;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "attributes", {
    get: function () {
      var e = this;
      return Object.keys(this.attribs).map(function (t) {
        var r;
        var n;
        return {
          name: t,
          value: e.attribs[t],
          namespace: e["x-attribsNamespace"]?.[t],
          prefix: e["x-attribsPrefix"]?.[t]
        };
      });
    },
    enumerable: !1,
    configurable: !0
  });
  return t;
}(Y);
function J(e) {
  return F.isTag(e);
}
function ee(e) {
  return e.type === F.ElementType.CDATA;
}
function et(e) {
  return e.type === F.ElementType.Text;
}
function er(e) {
  return e.type === F.ElementType.Comment;
}
function en(e) {
  return e.type === F.ElementType.Directive;
}
function ea(e) {
  return e.type === F.ElementType.Root;
}
function ei(e, t) {
  if (void 0 === t && (t = !1), et(e)) r = new V(e.data);else if (er(e)) r = new $(e.data);else if (J(e)) {
    var r;
    var n = t ? eo(e.children) : [];
    var a = new Z(e.name, G({}, e.attribs), n);
    n.forEach(function (e) {
      return e.parent = a;
    });
    null != e.namespace && (a.namespace = e.namespace);
    e["x-attribsNamespace"] && (a["x-attribsNamespace"] = G({}, e["x-attribsNamespace"]));
    e["x-attribsPrefix"] && (a["x-attribsPrefix"] = G({}, e["x-attribsPrefix"]));
    r = a;
  } else if (ee(e)) {
    var n = t ? eo(e.children) : [];
    var i = new K(n);
    n.forEach(function (e) {
      return e.parent = i;
    });
    r = i;
  } else if (ea(e)) {
    var n = t ? eo(e.children) : [];
    var o = new Q(n);
    n.forEach(function (e) {
      return e.parent = o;
    });
    e["x-mode"] && (o["x-mode"] = e["x-mode"]);
    r = o;
  } else if (en(e)) {
    var s = new X(e.name, e.data);
    null != e["x-name"] && (s["x-name"] = e["x-name"], s["x-publicId"] = e["x-publicId"], s["x-systemId"] = e["x-systemId"]);
    r = s;
  } else throw Error("Not implemented yet: ".concat(e.type));
  r.startIndex = e.startIndex;
  r.endIndex = e.endIndex;
  null != e.sourceCodeLocation && (r.sourceCodeLocation = e.sourceCodeLocation);
  return r;
}
function eo(e) {
  for (t = e.map(function (e) {
    return ei(e, !0);
  }), r = 1, void 0; r < t.length; r++) {
    var t;
    var r;
    t[r].prev = t[r - 1];
    t[r - 1].next = t[r];
  }
  return t;
}
_.Element = Z;
_.isTag = J;
_.isCDATA = ee;
_.isText = et;
_.isComment = er;
_.isDirective = en;
_.isDocument = ea;
_.hasChildren = function (e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
};
_.cloneNode = ei;
(function (e) {
  var t = d && d.__createBinding || (Object.create ? function (e, t, r, n) {
    void 0 === n && (n = r);
    var a = Object.getOwnPropertyDescriptor(t, r);
    (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = {
      enumerable: !0,
      get: function () {
        return t[r];
      }
    });
    Object.defineProperty(e, n, a);
  } : function (e, t, r, n) {
    void 0 === n && (n = r);
    e[n] = t[r];
  });
  var r = d && d.__exportStar || function (e, r) {
    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(r, n) || t(r, e, n);
  };
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.DomHandler = void 0;
  r(_, e);
  var n = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  };
  var a = function () {
    function e(e, t, r) {
      this.dom = [];
      this.root = new _.Document(this.dom);
      this.done = !1;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      "function" == typeof t && (r = t, t = n);
      "object" == typeof e && (t = e, e = void 0);
      this.callback = null != e ? e : null;
      this.options = null != t ? t : n;
      this.elementCB = null != r ? r : null;
    }
    e.prototype.onparserinit = function (e) {
      this.parser = e;
    };
    e.prototype.onreset = function () {
      this.dom = [];
      this.root = new _.Document(this.dom);
      this.done = !1;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    };
    e.prototype.onend = function () {
      this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
    };
    e.prototype.onerror = function (e) {
      this.handleCallback(e);
    };
    e.prototype.onclosetag = function () {
      this.lastNode = null;
      var e = this.tagStack.pop();
      this.options.withEndIndices && (e.endIndex = this.parser.endIndex);
      this.elementCB && this.elementCB(e);
    };
    e.prototype.onopentag = function (e, t) {
      var r = this.options.xmlMode ? F.ElementType.Tag : void 0;
      var n = new _.Element(e, t, void 0, r);
      this.addNode(n);
      this.tagStack.push(n);
    };
    e.prototype.ontext = function (e) {
      var t = this.lastNode;
      if (t && t.type === F.ElementType.Text) {
        t.data += e;
        this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
      } else {
        var r = new _.Text(e);
        this.addNode(r);
        this.lastNode = r;
      }
    };
    e.prototype.oncomment = function (e) {
      if (this.lastNode && this.lastNode.type === F.ElementType.Comment) {
        this.lastNode.data += e;
        return;
      }
      var t = new _.Comment(e);
      this.addNode(t);
      this.lastNode = t;
    };
    e.prototype.oncommentend = function () {
      this.lastNode = null;
    };
    e.prototype.oncdatastart = function () {
      var e = new _.Text("");
      var t = new _.CDATA([e]);
      this.addNode(t);
      e.parent = t;
      this.lastNode = e;
    };
    e.prototype.oncdataend = function () {
      this.lastNode = null;
    };
    e.prototype.onprocessinginstruction = function (e, t) {
      var r = new _.ProcessingInstruction(e, t);
      this.addNode(r);
    };
    e.prototype.handleCallback = function (e) {
      if ("function" == typeof this.callback) this.callback(e, this.dom);else if (e) throw e;
    };
    e.prototype.addNode = function (e) {
      var t = this.tagStack[this.tagStack.length - 1];
      var r = t.children[t.children.length - 1];
      this.options.withStartIndices && (e.startIndex = this.parser.startIndex);
      this.options.withEndIndices && (e.endIndex = this.parser.endIndex);
      t.children.push(e);
      r && (e.prev = r, r.next = e);
      e.parent = t;
      this.lastNode = null;
    };
    return e;
  }();
  e.DomHandler = a;
  e.$$default = a;
})(j);
var es = {};
var el = {};
var ec = {};
var eu = {};
Object.defineProperty(eu, "__esModule", {
  value: !0
});
eu.$$default = new Uint16Array('\u1D41<\xd5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803B\xc6\u40C6P\u803B&\u4026cute\u803B\xc1\u40C1reve;\u4102\u0100iyx}rc\u803B\xc2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xc0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9d\xa1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xc5\u40C5\u0100cs\xbe\xc3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xc3\u40C3ml\u803B\xc4\u40C4\u0400aceforsu\xe5\xfb\xfe\u0117\u011C\u0122\u0127\u012A\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xf2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xa9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xc7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xf2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037B\xbb\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xe5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xd0\u40D0cute\u803B\xc9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xca\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xc8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xcb\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xf2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xf2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xf0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xcd\u40CD\u0100iy\u0713\u0718rc\u803B\xce\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xcc\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xf3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xcf\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xe1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xe1\u03BFight\xe1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xf2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xf2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xeb\u0AD9eryThi\xee\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xf2\u0673essLes\xf3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xd1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xd3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xd4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xd2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xd8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xd5\u40D5es;\u6A37ml\u803B\xd6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xe5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xae\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xbb\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xbb\u041EeftArrow\xbb\u089AightArrow\xbb\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xe1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xde\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xda\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xdb\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xd9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xe1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xdc\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xdd\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xe8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xe1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xe2\u40E2te\u80BB\xb4\u0306;\u4430lig\u803B\xe6\u40E6\u0100;r\xb2\u15BA;\uC000\u{1D51E}rave\u803B\xe0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xe8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xf1\u1683ing\u803B\xe5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xf1\u0288ilde\u803B\xe3\u40E3ml\u803B\xe4\u40E4\u0100ci\u16C2\u16C8onin\xf4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xbb\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xe9\u170Cno\xf5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xf0\u0760rc;\u65EFp\xbb\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xe5\u1444\xe5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xbb\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xa6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xbb\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xee\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xe7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xb8\u01ADptyv;\u69B2t\u8100\xa2;e\u1A2D\u1A2E\u40A2r\xe4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xbb\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xbb\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xbb\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xc7\xc6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xee\u1160e\u0100mx\u1AF1\u1AF6ent\xbb\u1AE9e\xf3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xf4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xe4\u0254\u8100\xa9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xe3\u1B73u\xe3\u1B75ee;\u62CEedge;\u62CFen\u803B\xa4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xbb\u1B80ight\xbb\u1BBDe\xe4\u1BDD\u0100ci\u1C01\u1C07onin\xf4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xf2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xbb\u090A\u016B\u1C61\u1C67arow;\u690Fa\xe3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xb0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xbb\u08DC\xbb\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xf7;o\u1CE7\u1CF0ntimes;\u62C7n\xf8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xe5\xfan\u0180adh\u112E\u1D5D\u1D67ownarrow\xf3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xf4\u1CB4igh\xf4\u1CB6\u0162\u1D7F\u1D85karo\xf7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xf2\u0429a\xf2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xf4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xe9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xea\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xe8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xbb\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xbb\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xbb\u1E2E\u0269\u1EF9\0\0\u1EFB\xed\u0548ant\u0100gl\u1F02\u1F06tr\xbb\u1E5Dess\xbb\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xf4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xf0\u40F0\u0100mr\u1F53\u1F57l\u803B\xeb\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xf4\u056E\u0100eo\u1F6C\u1F74ctatio\xee\u0559nential\xe5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xf1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xbd\u40BD;\u6153\u803B\xbc\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xbe\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xf4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xbb\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xf8\u209Er;\u6978q\u0100lq\u063F\u2196les\xf3\u2088i\xed\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xc5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xf2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xf0\u1484f\xbb\u2024il\xf4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xbb\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xe8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xed\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xee\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xa1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xec\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xe5\u078Ear\xf4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xf4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xbf\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xef\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xf2\u09C6\xf2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xee\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xe5\u088E;\u6A85uo\u803B\xab\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xeb\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xec\u08B0\xe2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xe9\u24F6arpoon\u0100du\u25AF\u25B4own\xbb\u045Ap\xbb\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xf3\u0F98quigarro\xf7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xf4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xf8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248C\xf4\u099Bi\xed\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xf2\u25C1orne\xf2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xbb\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xbb\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xeb\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xe1\u09F2apsto;\u67FCight\xe1\u09FDparrow\u0100lr\u2725\u2729ef\xf4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xe1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xf2\u08A8orne\xf2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xe5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xc5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xaf\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xbb\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xee\u048Cef\xf4\u090F\xf0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xbb\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xb5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xf4\u16A7ir;\u6AF0ot\u80BB\xb7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xf2\u2212\xf0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xbb\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xbb\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xf8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xa0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xf6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xed\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xf4\u0BE2i\xed\u0BEA\u0100;r\u0BB6\u2A81\xbb\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xf2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xf2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xf7\u2AC1ightarro\xf7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xf4\u0C55\u0100;s\u0C55\u2AF4\xbb\u0C36i\xed\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xe4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xac;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xec\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xe5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xf1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xf2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xbb\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xe5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xe1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xe5\u0CF8\xe5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xf1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xec\u0BD7lde\u803B\xf1\u40F1\xe7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xf1\u0C26ight\u0100;e\u0CCB\u2C65\xf1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xf3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xf4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xf2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xf2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xe5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xf2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xbb\u2DFF\u803B\xaa\u40AA\u803B\xba\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xf2\u2E01ash\u803B\xf8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xf5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xf6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xb6;l\u2E6D\u2E6E\u40B6le\xec\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xf4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xbb\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xf6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xb1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xa3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xe5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xf8\u2F43urlye\xf1\u0ED9\xf1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xed\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xf0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xef\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xf3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xf1\u1F19\xf4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xf2\u10B3\xf2\u03DDail;\u691Car\xf2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xe3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xe5\u0FD1uo\u803B\xbb\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xeb\u225D\xf0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xf3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xf2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0FF2\xe2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xe5\u10BBar\xf4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xbb\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xe9\u30C8arpoon\u0100du\u31BB\u31BFow\xee\u317Ep\xbb\u1092eft\u0100ah\u31CA\u31D0rrow\xf3\u0FEAarpoon\xf3\u0551ightarrows;\u61C9quigarro\xf7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xf1\u1F32\u0180ahm\u320D\u3210\u3213r\xf2\u0FEAa\xf2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xbb\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xeb\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xf2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xe5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xef\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xe5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xed\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0A36\u0A34t\u803B\xa7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xe4\u1464ara\xec\u2E6F\u803B\xad\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xf2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xe9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xf1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xf1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xbb\u117Car\xf2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xee\xf1i\xec\u3415ar\xe6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xee\u1EE0h\xe9\u2EAFs\xbb\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xf8\u32FAurlye\xf1\u11FE\xf1\u11F3\u0180aes\u3582\u3588\u331Bppro\xf8\u331Aq\xf1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xb9\u40B9\u803B\xb2\u40B2\u803B\xb3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xeb\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xdf\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xeb\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xf8\u12C1im\xbb\u12ACs\xf0\u129E\u0100as\u36BA\u36AE\xf0\u12C1rn\u803B\xfe\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xd7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xe1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xe1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xbb\u1DBBeft\u0100;e\u2800\u373E\xf1\u092E;\u625Cight\u0100;e\u32AA\u374B\xf1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xf4\u1777head\u0100lr\u3797\u37A0eftarro\xf7\u084Fightarrow\xbb\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xf2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xfa\u40FA\xf2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xfb\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xf2\u13ADlac;\u4171a\xf2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xf9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xbb\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xe1\u13B3arpoon\u0100lr\u3888\u388Cef\xf4\u382Digh\xf4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xbb\u13FAon\xbb\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xbb\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xbb\u1813\u0100am\u38EF\u38F2r\xf2\u38A8l\u803B\xfc\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xf2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xe8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xe1\u2415othin\xe7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xf4\u2FB5\u0100;h\u13B7\u3962\xef\u318D\u0100iu\u3969\u396Dgm\xe1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xe1\u369Ciangle\u0100lr\u39AA\u39AFeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xf2\u1469r;\uC000\u{1D533}tr\xe9\u39AEsu\u0100bp\u39EF\u39F1\xbb\u0D1C\xbb\u0D59pf;\uC000\u{1D567}ro\xf0\u0EFBtr\xe9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xbb\u397En\u0100Ee\u3992\u3A1E\xbb\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xe8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xe9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xf2\u03C3r\xf2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xf2\u03B8r\xf2\u09EBa\xf0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xe5\u17B2\u0100Aa\u3AC7\u3ACAr\xf2\u03CEr\xf2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xe9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xfd\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xa5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xff\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xe6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function (e) {
  return e.charCodeAt(0);
}));
var ed = {};
Object.defineProperty(ed, "__esModule", {
  value: !0
});
ed.$$default = new Uint16Array("\u0200aglq	\x15\x18\x1b\u026D\x0f\0\0\x12p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function (e) {
  return e.charCodeAt(0);
}));
var eh = {};
!function (e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.replaceCodePoint = e.fromCodePoint = void 0;
  var t;
  var r = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
  function n(e) {
    var t;
    return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : null !== (t = r.get(e)) && void 0 !== t ? t : e;
  }
  e.fromCodePoint = null !== (t = String.fromCodePoint) && void 0 !== t ? t : function (e) {
    var t = "";
    e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e);
    return t += String.fromCharCode(e);
  };
  e.replaceCodePoint = n;
  e.$$default = function (t) {
    return e.fromCodePoint(n(t));
  };
}(eh);
(function (e) {
  var t;
  var r;
  var n;
  var a;
  var i = d && d.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.decodeXML = e.decodeHTMLStrict = e.decodeHTML = e.determineBranch = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
  var o = i(eu);
  e.htmlDecodeTree = o.$$default;
  var s = i(ed);
  e.xmlDecodeTree = s.$$default;
  var l = i(eh);
  function c(e) {
    return function (t, r) {
      for (i = "", o = 0, s = 0, void 0; (s = t.indexOf("&", s)) >= 0;) {
        var i;
        var o;
        var s;
        if (i += t.slice(o, s), o = s, s += 1, t.charCodeAt(s) === n.NUM) {
          var c = s + 1;
          var d = 10;
          var h = t.charCodeAt(c);
          (h | n.To_LOWER_BIT) === n.LOWER_X && (d = 16, s += 1, c += 1);
          do h = t.charCodeAt(++s); while (h >= n.ZERO && h <= n.NINE || 16 === d && (h | n.To_LOWER_BIT) >= n.LOWER_A && (h | n.To_LOWER_BIT) <= n.LOWER_F);
          if (c !== s) {
            var p = parseInt(t.substring(c, s), d);
            if (t.charCodeAt(s) === n.SEMI) s += 1;else if (r) continue;
            i += l.$$default(p);
            o = s;
          }
          continue;
        }
        for (m = 0, f = 1, g = 0, b = e[0], void 0; s < t.length && !((g = u(e, b, g + 1, t.charCodeAt(s))) < 0); s++, f++) {
          var m;
          var f;
          var g;
          var b;
          var y = (b = e[g]) & a.VALUE_LENGTH;
          if (y) {
            r && t.charCodeAt(s) !== n.SEMI || (m = g, f = 0);
            var k = (y >> 14) - 1;
            if (0 === k) break;
            g += k;
          }
        }
        if (0 !== m) {
          var k = (e[m] & a.VALUE_LENGTH) >> 14;
          i += 1 === k ? String.fromCharCode(e[m] & ~a.VALUE_LENGTH) : 2 === k ? String.fromCharCode(e[m + 1]) : String.fromCharCode(e[m + 1], e[m + 2]);
          o = s - f + 1;
        }
      }
      return i + t.slice(o);
    };
  }
  function u(e, t, r, n) {
    var i = (t & a.BRANCH_LENGTH) >> 7;
    var o = t & a.JUMP_TABLE;
    if (0 === i) return 0 !== o && n === o ? r : -1;
    if (o) {
      var s = n - o;
      return s < 0 || s >= i ? -1 : e[r + s] - 1;
    }
    for (l = r, c = l + i - 1, void 0; l <= c;) {
      var l;
      var c;
      var u = l + c >>> 1;
      var d = e[u];
      if (d < n) l = u + 1;else {
        if (!(d > n)) return e[u + i];
        c = u - 1;
      }
    }
    return -1;
  }
  e.decodeCodePoint = l.$$default;
  Object.defineProperty(e, "replaceCodePoint", {
    enumerable: !0,
    get: function () {
      return eh.replaceCodePoint;
    }
  });
  Object.defineProperty(e, "fromCodePoint", {
    enumerable: !0,
    get: function () {
      return eh.fromCodePoint;
    }
  });
  (t = n || (n = {}))[t.NUM = 35] = "NUM";
  t[t.SEMI = 59] = "SEMI";
  t[t.ZERO = 48] = "ZERO";
  t[t.NINE = 57] = "NINE";
  t[t.LOWER_A = 97] = "LOWER_A";
  t[t.LOWER_F = 102] = "LOWER_F";
  t[t.LOWER_X = 120] = "LOWER_X";
  t[t.To_LOWER_BIT = 32] = "To_LOWER_BIT";
  (r = a = e.BinTrieFlags || (e.BinTrieFlags = {}))[r.VALUE_LENGTH = 49152] = "VALUE_LENGTH";
  r[r.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH";
  r[r.JUMP_TABLE = 127] = "JUMP_TABLE";
  e.determineBranch = u;
  var h = c(o.$$default);
  var p = c(s.$$default);
  e.decodeHTML = function (e) {
    return h(e, !1);
  };
  e.decodeHTMLStrict = function (e) {
    return h(e, !0);
  };
  e.decodeXML = function (e) {
    return p(e, !0);
  };
})(ec);
var ep = {};
var em = {};
function ef(e) {
  for (var t = 1; t < e.length; t++) e[t][0] += e[t - 1][0] + 1;
  return e;
}
Object.defineProperty(em, "__esModule", {
  value: !0
});
em.$$default = new Map(ef([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, {
  v: "&lt;",
  n: 8402,
  o: "&nvlt;"
}], [0, {
  v: "&equals;",
  n: 8421,
  o: "&bne;"
}], [0, {
  v: "&gt;",
  n: 8402,
  o: "&nvgt;"
}], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, {
  n: 106,
  o: "&fjlig;"
}], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, {
  v: "&MediumSpace;",
  n: 8202,
  o: "&ThickSpace;"
}], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, {
  v: "&rarrw;",
  n: 824,
  o: "&nrarrw;"
}], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, {
  v: "&part;",
  n: 824,
  o: "&npart;"
}], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, {
  v: "&ang;",
  n: 8402,
  o: "&nang;"
}], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, {
  v: "&cap;",
  n: 65024,
  o: "&caps;"
}], [0, {
  v: "&cup;",
  n: 65024,
  o: "&cups;"
}], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, {
  v: "&sim;",
  n: 8402,
  o: "&nvsim;"
}], [0, {
  v: "&backsim;",
  n: 817,
  o: "&race;"
}], [0, {
  v: "&ac;",
  n: 819,
  o: "&acE;"
}], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, {
  v: "&eqsim;",
  n: 824,
  o: "&nesim;"
}], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, {
  v: "&apid;",
  n: 824,
  o: "&napid;"
}], [0, "&backcong;"], [0, {
  v: "&asympeq;",
  n: 8402,
  o: "&nvap;"
}], [0, {
  v: "&bump;",
  n: 824,
  o: "&nbump;"
}], [0, {
  v: "&bumpe;",
  n: 824,
  o: "&nbumpe;"
}], [0, {
  v: "&doteq;",
  n: 824,
  o: "&nedot;"
}], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, {
  v: "&Congruent;",
  n: 8421,
  o: "&bnequiv;"
}], [0, "&nequiv;"], [1, {
  v: "&le;",
  n: 8402,
  o: "&nvle;"
}], [0, {
  v: "&ge;",
  n: 8402,
  o: "&nvge;"
}], [0, {
  v: "&lE;",
  n: 824,
  o: "&nlE;"
}], [0, {
  v: "&gE;",
  n: 824,
  o: "&ngE;"
}], [0, {
  v: "&lnE;",
  n: 65024,
  o: "&lvertneqq;"
}], [0, {
  v: "&gnE;",
  n: 65024,
  o: "&gvertneqq;"
}], [0, {
  v: "&ll;",
  n: new Map(ef([[824, "&nLtv;"], [7577, "&nLt;"]]))
}], [0, {
  v: "&gg;",
  n: new Map(ef([[824, "&nGtv;"], [7577, "&nGt;"]]))
}], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, {
  v: "&scsim;",
  n: 824,
  o: "&NotSucceedsTilde;"
}], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, {
  v: "&sub;",
  n: 8402,
  o: "&NotSubset;"
}], [0, {
  v: "&sup;",
  n: 8402,
  o: "&NotSuperset;"
}], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, {
  v: "&subne;",
  n: 65024,
  o: "&varsubsetneq;"
}], [0, {
  v: "&supne;",
  n: 65024,
  o: "&varsupsetneq;"
}], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, {
  v: "&sqsub;",
  n: 824,
  o: "&NotSquareSubset;"
}], [0, {
  v: "&sqsup;",
  n: 824,
  o: "&NotSquareSuperset;"
}], [0, "&sqsube;"], [0, "&sqsupe;"], [0, {
  v: "&sqcap;",
  n: 65024,
  o: "&sqcaps;"
}], [0, {
  v: "&sqcup;",
  n: 65024,
  o: "&sqcups;"
}], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, {
  v: "&LeftTriangleEqual;",
  n: 8402,
  o: "&nvltrie;"
}], [0, {
  v: "&RightTriangleEqual;",
  n: 8402,
  o: "&nvrtrie;"
}], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, {
  v: "&Ll;",
  n: 824,
  o: "&nLl;"
}], [0, {
  v: "&Gg;",
  n: 824,
  o: "&nGg;"
}], [0, {
  v: "&leg;",
  n: 65024,
  o: "&lesg;"
}], [0, {
  v: "&gel;",
  n: 65024,
  o: "&gesl;"
}], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, {
  v: "&isindot;",
  n: 824,
  o: "&notindot;"
}], [0, "&notinvc;"], [0, "&notinvb;"], [1, {
  v: "&isinE;",
  n: 824,
  o: "&notinE;"
}], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, {
  v: "&rarrc;",
  n: 824,
  o: "&nrarrc;"
}], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, {
  v: "&LeftTriangleBar;",
  n: 824,
  o: "&NotLeftTriangleBar;"
}], [0, {
  v: "&RightTriangleBar;",
  n: 824,
  o: "&NotRightTriangleBar;"
}], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, {
  v: "&congdot;",
  n: 824,
  o: "&ncongdot;"
}], [0, "&easter;"], [0, "&apacir;"], [0, {
  v: "&apE;",
  n: 824,
  o: "&napE;"
}], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, {
  v: "&leqslant;",
  n: 824,
  o: "&nleqslant;"
}], [0, {
  v: "&geqslant;",
  n: 824,
  o: "&ngeqslant;"
}], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, {
  v: "&LessLess;",
  n: 824,
  o: "&NotNestedLessLess;"
}], [0, {
  v: "&GreaterGreater;",
  n: 824,
  o: "&NotNestedGreaterGreater;"
}], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, {
  v: "&smte;",
  n: 65024,
  o: "&smtes;"
}], [0, {
  v: "&late;",
  n: 65024,
  o: "&lates;"
}], [0, "&bumpE;"], [0, {
  v: "&PrecedesEqual;",
  n: 824,
  o: "&NotPrecedesEqual;"
}], [0, {
  v: "&sce;",
  n: 824,
  o: "&NotSucceedsEqual;"
}], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, {
  v: "&subE;",
  n: 824,
  o: "&nsubE;"
}], [0, {
  v: "&supE;",
  n: 824,
  o: "&nsupE;"
}], [0, "&subsim;"], [0, "&supsim;"], [2, {
  v: "&subnE;",
  n: 65024,
  o: "&varsubsetneqq;"
}], [0, {
  v: "&supnE;",
  n: 65024,
  o: "&varsupsetneqq;"
}], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, {
  v: "&parsl;",
  n: 8421,
  o: "&nparsl;"
}], [44343, {
  n: new Map(ef([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]]))
}], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var eg = {};
!function (e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0;
  e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var t = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
  function r(r) {
    for (a = "", i = 0, void 0; null !== (n = e.xmlReplacer.exec(r));) {
      var n;
      var a;
      var i;
      var o = n.index;
      var s = r.charCodeAt(o);
      var l = t.get(s);
      void 0 !== l ? (a += r.substring(i, o) + l, i = o + 1) : (a += "".concat(r.substring(i, o), "&#x").concat(e.getCodePoint(r, o).toString(16), ";"), i = e.xmlReplacer.lastIndex += Number((64512 & s) == 55296));
    }
    return a + r.substr(i);
  }
  function n(e, t) {
    return function (r) {
      for (a = 0, i = "", void 0; n = e.exec(r);) {
        var n;
        var a;
        var i;
        a !== n.index && (i += r.substring(a, n.index));
        i += t.get(n[0].charCodeAt(0));
        a = n.index + 1;
      }
      return i + r.substring(a);
    };
  }
  e.getCodePoint = null != String.prototype.codePointAt ? function (e, t) {
    return e.codePointAt(t);
  } : function (e, t) {
    return (64512 & e.charCodeAt(t)) == 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t);
  };
  e.encodeXML = r;
  e.escape = r;
  e.escapeUTF8 = n(/[&<>'"]/g, t);
  e.escapeAttribute = n(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]]));
  e.escapeText = n(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
}(eg);
var eb = d && d.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(ep, "__esModule", {
  value: !0
});
ep.encodeNonAsciiHTML = ep.encodeHTML = void 0;
var ey = eb(em);
var ek = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function ev(e, t) {
  for (n = "", a = 0, void 0; null !== (r = e.exec(t));) {
    var r;
    var n;
    var a;
    var i = r.index;
    n += t.substring(a, i);
    var o = t.charCodeAt(i);
    var s = ey.$$default.get(o);
    if ("object" == typeof s) {
      if (i + 1 < t.length) {
        var l = t.charCodeAt(i + 1);
        var c = "number" == typeof s.n ? s.n === l ? s.o : void 0 : s.n.get(l);
        if (void 0 !== c) {
          n += c;
          a = e.lastIndex += 1;
          continue;
        }
      }
      s = s.v;
    }
    if (void 0 !== s) {
      n += s;
      a = i + 1;
    } else {
      var u = eg.getCodePoint(t, i);
      n += "&#x".concat(u.toString(16), ";");
      a = e.lastIndex += Number(u !== o);
    }
  }
  return n + t.substr(a);
}
ep.encodeHTML = function (e) {
  return ev(ek, e);
};
ep.encodeNonAsciiHTML = function (e) {
  return ev(eg.xmlReplacer, e);
};
(function (e) {
  var t;
  var r;
  var n;
  var a;
  var i;
  var o;
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.encodeHTML5 = e.encodeHTML4 = e.encodeNonAsciiHTML = e.encodeHTML = e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.encode = e.decodeStrict = e.decode = e.EncodingMode = e.DecodingMode = e.EntityLevel = void 0;
  (a = t = e.EntityLevel || (e.EntityLevel = {}))[a.XML = 0] = "XML";
  a[a.HTML = 1] = "HTML";
  (i = r = e.DecodingMode || (e.DecodingMode = {}))[i.Legacy = 0] = "Legacy";
  i[i.Strict = 1] = "Strict";
  (o = n = e.EncodingMode || (e.EncodingMode = {}))[o.UTF8 = 0] = "UTF8";
  o[o.ASCII = 1] = "ASCII";
  o[o.Extensive = 2] = "Extensive";
  o[o.Attribute = 3] = "Attribute";
  o[o.Text = 4] = "Text";
  e.decode = function (e, n) {
    void 0 === n && (n = t.XML);
    var a = "number" == typeof n ? {
      level: n
    } : n;
    return a.level === t.HTML ? a.mode === r.Strict ? ec.decodeHTMLStrict(e) : ec.decodeHTML(e) : ec.decodeXML(e);
  };
  e.decodeStrict = function (e, n) {
    void 0 === n && (n = t.XML);
    var a = "number" == typeof n ? {
      level: n
    } : n;
    return a.level === t.HTML ? a.mode === r.Legacy ? ec.decodeHTML(e) : ec.decodeHTMLStrict(e) : ec.decodeXML(e);
  };
  e.encode = function (e, r) {
    void 0 === r && (r = t.XML);
    var a = "number" == typeof r ? {
      level: r
    } : r;
    return a.mode === n.UTF8 ? eg.escapeUTF8(e) : a.mode === n.Attribute ? eg.escapeAttribute(e) : a.mode === n.Text ? eg.escapeText(e) : a.level === t.HTML ? a.mode === n.ASCII ? ep.encodeNonAsciiHTML(e) : ep.encodeHTML(e) : eg.encodeXML(e);
  };
  Object.defineProperty(e, "encodeXML", {
    enumerable: !0,
    get: function () {
      return eg.encodeXML;
    }
  });
  Object.defineProperty(e, "escape", {
    enumerable: !0,
    get: function () {
      return eg.escape;
    }
  });
  Object.defineProperty(e, "escapeUTF8", {
    enumerable: !0,
    get: function () {
      return eg.escapeUTF8;
    }
  });
  Object.defineProperty(e, "escapeAttribute", {
    enumerable: !0,
    get: function () {
      return eg.escapeAttribute;
    }
  });
  Object.defineProperty(e, "escapeText", {
    enumerable: !0,
    get: function () {
      return eg.escapeText;
    }
  });
  Object.defineProperty(e, "encodeHTML", {
    enumerable: !0,
    get: function () {
      return ep.encodeHTML;
    }
  });
  Object.defineProperty(e, "encodeNonAsciiHTML", {
    enumerable: !0,
    get: function () {
      return ep.encodeNonAsciiHTML;
    }
  });
  Object.defineProperty(e, "encodeHTML4", {
    enumerable: !0,
    get: function () {
      return ep.encodeHTML;
    }
  });
  Object.defineProperty(e, "encodeHTML5", {
    enumerable: !0,
    get: function () {
      return ep.encodeHTML;
    }
  });
  Object.defineProperty(e, "decodeXML", {
    enumerable: !0,
    get: function () {
      return ec.decodeXML;
    }
  });
  Object.defineProperty(e, "decodeHTML", {
    enumerable: !0,
    get: function () {
      return ec.decodeHTML;
    }
  });
  Object.defineProperty(e, "decodeHTMLStrict", {
    enumerable: !0,
    get: function () {
      return ec.decodeHTMLStrict;
    }
  });
  Object.defineProperty(e, "decodeHTML4", {
    enumerable: !0,
    get: function () {
      return ec.decodeHTML;
    }
  });
  Object.defineProperty(e, "decodeHTML5", {
    enumerable: !0,
    get: function () {
      return ec.decodeHTML;
    }
  });
  Object.defineProperty(e, "decodeHTML4Strict", {
    enumerable: !0,
    get: function () {
      return ec.decodeHTMLStrict;
    }
  });
  Object.defineProperty(e, "decodeHTML5Strict", {
    enumerable: !0,
    get: function () {
      return ec.decodeHTMLStrict;
    }
  });
  Object.defineProperty(e, "decodeXMLStrict", {
    enumerable: !0,
    get: function () {
      return ec.decodeXML;
    }
  });
})(el);
var ew = {};
Object.defineProperty(ew, "__esModule", {
  value: !0
});
ew.attributeNames = ew.elementNames = void 0;
ew.elementNames = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) {
  return [e.toLowerCase(), e];
}));
ew.attributeNames = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) {
  return [e.toLowerCase(), e];
}));
var ex = d && d.__assign || function () {
  return (ex = Object.assign || function (e) {
    for (r = 1, n = $$arguments.length, void 0; r < n; r++) {
      var t;
      var r;
      var n;
      for (var a in t = $$arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }).apply(this, arguments);
};
var eS = d && d.__createBinding || (Object.create ? function (e, t, r, n) {
  void 0 === n && (n = r);
  var a = Object.getOwnPropertyDescriptor(t, r);
  (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = {
    enumerable: !0,
    get: function () {
      return t[r];
    }
  });
  Object.defineProperty(e, n, a);
} : function (e, t, r, n) {
  void 0 === n && (n = r);
  e[n] = t[r];
});
var eC = d && d.__setModuleDefault || (Object.create ? function (e, t) {
  Object.defineProperty(e, "default", {
    enumerable: !0,
    value: t
  });
} : function (e, t) {
  e.$$default = t;
});
var eA = d && d.__importStar || function (e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && eS(t, e, r);
  eC(t, e);
  return t;
};
Object.defineProperty(es, "__esModule", {
  value: !0
});
es.render = void 0;
var eT = eA(F);
var eE = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function eP(e) {
  return e.replace(/"/g, "&quot;");
}
var eL = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function eD(e, t) {
  void 0 === t && (t = {});
  for (r = ("length" in e) ? e : [e], n = "", a = 0, void 0; a < r.length; a++) {
    var r;
    var n;
    var a;
    n += function (e, t) {
      switch (e.type) {
        case eT.Root:
          return eD(e.children, t);
        case eT.Doctype:
        case eT.Directive:
          return "<".concat(e.data, ">");
        case eT.Comment:
          return "\x3c!--".concat(e.data, "--\x3e");
        case eT.CDATA:
          return "<![CDATA[".concat(e.children[0].data, "]]>");
        case eT.Script:
        case eT.Style:
        case eT.Tag:
          return function (e, t) {
            "foreign" === t.xmlMode && (e.name = null !== (r = ew.elementNames.get(e.name)) && void 0 !== r ? r : e.name, e.parent && eN.has(e.parent.name) && (t = ex(ex({}, t), {
              xmlMode: !1
            })));
            !t.xmlMode && eO.has(e.name) && (t = ex(ex({}, t), {
              xmlMode: "foreign"
            }));
            var r;
            var n = "<".concat(e.name);
            var a = function (e, t) {
              if (e) {
                var r;
                var n = (null !== (r = t.encodeEntities) && void 0 !== r ? r : t.decodeEntities) === !1 ? eP : t.xmlMode || "utf8" !== t.encodeEntities ? el.encodeXML : el.escapeAttribute;
                return Object.keys(e).map(function (r) {
                  var a;
                  var i;
                  var o = null !== (a = e[r]) && void 0 !== a ? a : "";
                  return ("foreign" === t.xmlMode && (r = null !== (i = ew.attributeNames.get(r)) && void 0 !== i ? i : r), t.emptyAttrs || t.xmlMode || "" !== o) ? "".concat(r, '="').concat(n(o), '"') : r;
                }).join(" ");
              }
            }(e.attribs, t);
            a && (n += " ".concat(a));
            0 === e.children.length && (t.xmlMode ? !1 !== t.selfClosingTags : t.selfClosingTags && eL.has(e.name)) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", e.children.length > 0 && (n += eD(e.children, t)), (t.xmlMode || !eL.has(e.name)) && (n += "</".concat(e.name, ">")));
            return n;
          }(e, t);
        case eT.Text:
          return function (e, t) {
            var r;
            var n = e.data || "";
            (null !== (r = t.encodeEntities) && void 0 !== r ? r : t.decodeEntities) === !1 || !t.xmlMode && e.parent && eE.has(e.parent.name) || (n = t.xmlMode || "utf8" !== t.encodeEntities ? el.encodeXML(n) : el.escapeText(n));
            return n;
          }(e, t);
      }
    }(r[a], t);
  }
  return n;
}
es.render = eD;
es.$$default = eD;
var eN = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]);
var eO = new Set(["svg", "math"]);
var eM = d && d.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.innerText = B.textContent = B.getText = B.getInnerHTML = B.getOuterHTML = void 0;
var ez = eM(es);
function eI(e, t) {
  return ez.$$default(e, t);
}
B.getOuterHTML = eI;
B.getInnerHTML = function (e, t) {
  return j.hasChildren(e) ? e.children.map(function (e) {
    return eI(e, t);
  }).join("") : "";
};
B.getText = function e(t) {
  return Array.isArray(t) ? t.map(e).join("") : j.isTag(t) ? "br" === t.name ? "\n" : e(t.children) : j.isCDATA(t) ? e(t.children) : j.isText(t) ? t.data : "";
};
B.textContent = function e(t) {
  return Array.isArray(t) ? t.map(e).join("") : j.hasChildren(t) && !j.isComment(t) ? e(t.children) : j.isText(t) ? t.data : "";
};
B.innerText = function e(t) {
  return Array.isArray(t) ? t.map(e).join("") : j.hasChildren(t) && (t.type === F.ElementType.Tag || j.isCDATA(t)) ? e(t.children) : j.isText(t) ? t.data : "";
};
var eR = {};
function eq(e) {
  return j.hasChildren(e) ? e.children : [];
}
function eB(e) {
  return e.parent || null;
}
Object.defineProperty(eR, "__esModule", {
  value: !0
});
eR.prevElementSibling = eR.nextElementSibling = eR.getName = eR.hasAttrib = eR.getAttributeValue = eR.getSiblings = eR.getParent = eR.getChildren = void 0;
eR.getChildren = eq;
eR.getParent = eB;
eR.getSiblings = function (e) {
  var t = eB(e);
  if (null != t) return eq(t);
  for (r = [e], n = e.prev, a = e.next, void 0; null != n;) {
    var r;
    var n;
    var a;
    r.unshift(n);
    n = n.prev;
  }
  for (; null != a;) {
    r.push(a);
    a = a.next;
  }
  return r;
};
eR.getAttributeValue = function (e, t) {
  var r;
  return e.attribs?.[t];
};
eR.hasAttrib = function (e, t) {
  return null != e.attribs && Object.prototype.hasOwnProperty.call(e.attribs, t) && null != e.attribs[t];
};
eR.getName = function (e) {
  return e.name;
};
eR.nextElementSibling = function (e) {
  for (var t = e.next; null !== t && !j.isTag(t);) t = t.next;
  return t;
};
eR.prevElementSibling = function (e) {
  for (var t = e.prev; null !== t && !j.isTag(t);) t = t.prev;
  return t;
};
var ej = {};
function eF(e) {
  if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children;
    t.splice(t.lastIndexOf(e), 1);
  }
}
Object.defineProperty(ej, "__esModule", {
  value: !0
});
ej.prepend = ej.prependChild = ej.append = ej.appendChild = ej.replaceElement = ej.removeElement = void 0;
ej.removeElement = eF;
ej.replaceElement = function (e, t) {
  var r = t.prev = e.prev;
  r && (r.next = t);
  var n = t.next = e.next;
  n && (n.prev = t);
  var a = t.parent = e.parent;
  if (a) {
    var i = a.children;
    i[i.lastIndexOf(e)] = t;
    e.parent = null;
  }
};
ej.appendChild = function (e, t) {
  if (eF(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var r = e.children[e.children.length - 2];
    r.next = t;
    t.prev = r;
  } else t.prev = null;
};
ej.append = function (e, t) {
  eF(t);
  var r = e.parent;
  var n = e.next;
  if (t.next = n, t.prev = e, e.next = t, t.parent = r, n) {
    if (n.prev = t, r) {
      var a = r.children;
      a.splice(a.lastIndexOf(n), 0, t);
    }
  } else r && r.children.push(t);
};
ej.prependChild = function (e, t) {
  if (eF(t), t.parent = e, t.prev = null, 1 !== e.children.unshift(t)) {
    var r = e.children[1];
    r.prev = t;
    t.next = r;
  } else t.next = null;
};
ej.prepend = function (e, t) {
  eF(t);
  var r = e.parent;
  if (r) {
    var n = r.children;
    n.splice(n.indexOf(e), 0, t);
  }
  e.prev && (e.prev.next = t);
  t.parent = r;
  t.prev = e.prev;
  t.next = e;
  e.prev = t;
};
var e_ = {};
function eU(e, t, r, n) {
  for (a = [], i = 0, void 0; i < t.length; i++) {
    var a;
    var i;
    var o = t[i];
    if (e(o) && (a.push(o), --n <= 0)) break;
    if (r && j.hasChildren(o) && o.children.length > 0) {
      var s = eU(e, o.children, r, n);
      if (a.push.apply(a, s), (n -= s.length) <= 0) break;
    }
  }
  return a;
}
Object.defineProperty(e_, "__esModule", {
  value: !0
});
e_.findAll = e_.existsOne = e_.findOne = e_.findOneChild = e_.find = e_.filter = void 0;
e_.filter = function (e, t, r, n) {
  void 0 === r && (r = !0);
  void 0 === n && (n = 1 / 0);
  Array.isArray(t) || (t = [t]);
  return eU(e, t, r, n);
};
e_.find = eU;
e_.findOneChild = function (e, t) {
  return t.find(e);
};
e_.findOne = function e(t, r, n) {
  void 0 === n && (n = !0);
  for (a = null, i = 0, void 0; i < r.length && !a; i++) {
    var a;
    var i;
    var o = r[i];
    j.isTag(o) && (t(o) ? a = o : n && o.children.length > 0 && (a = e(t, o.children, !0)));
  }
  return a;
};
e_.existsOne = function e(t, r) {
  return r.some(function (r) {
    return j.isTag(r) && (t(r) || r.children.length > 0 && e(t, r.children));
  });
};
e_.findAll = function (e, t) {
  for (a = [], i = t.filter(j.isTag), void 0; n = i.shift();) {
    var r;
    var n;
    var a;
    var i;
    var o = n.children?.filter(j.isTag);
    o && o.length > 0 && i.unshift.apply(i, o);
    e(n) && a.push(n);
  }
  return a;
};
var eG = {};
Object.defineProperty(eG, "__esModule", {
  value: !0
});
eG.getElementsByTagType = eG.getElementsByTagName = eG.getElementById = eG.getElements = eG.testElement = void 0;
var eH = {
  tag_name: function (e) {
    return "function" == typeof e ? function (t) {
      return j.isTag(t) && e(t.name);
    } : "*" === e ? j.isTag : function (t) {
      return j.isTag(t) && t.name === e;
    };
  },
  tag_type: function (e) {
    return "function" == typeof e ? function (t) {
      return e(t.type);
    } : function (t) {
      return t.type === e;
    };
  },
  tag_contains: function (e) {
    return "function" == typeof e ? function (t) {
      return j.isText(t) && e(t.data);
    } : function (t) {
      return j.isText(t) && t.data === e;
    };
  }
};
function eW(e, t) {
  return "function" == typeof t ? function (r) {
    return j.isTag(r) && t(r.attribs[e]);
  } : function (r) {
    return j.isTag(r) && r.attribs[e] === t;
  };
}
function eV(e, t) {
  return function (r) {
    return e(r) || t(r);
  };
}
function e$(e) {
  var t = Object.keys(e).map(function (t) {
    var r = e[t];
    return Object.prototype.hasOwnProperty.call(eH, t) ? eH[t](r) : eW(t, r);
  });
  return 0 === t.length ? null : t.reduce(eV);
}
eG.testElement = function (e, t) {
  var r = e$(e);
  return !r || r(t);
};
eG.getElements = function (e, t, r, n) {
  void 0 === n && (n = 1 / 0);
  var a = e$(e);
  return a ? e_.filter(a, t, r, n) : [];
};
eG.getElementById = function (e, t, r) {
  void 0 === r && (r = !0);
  Array.isArray(t) || (t = [t]);
  return e_.findOne(eW("id", e), t, r);
};
eG.getElementsByTagName = function (e, t, r, n) {
  void 0 === r && (r = !0);
  void 0 === n && (n = 1 / 0);
  return e_.filter(eH.tag_name(e), t, r, n);
};
eG.getElementsByTagType = function (e, t, r, n) {
  void 0 === r && (r = !0);
  void 0 === n && (n = 1 / 0);
  return e_.filter(eH.tag_type(e), t, r, n);
};
var eX = {};
!function (e) {
  var t;
  var r;
  function n(e, r) {
    var n = [];
    var a = [];
    if (e === r) return 0;
    for (var i = j.hasChildren(e) ? e : e.parent; i;) {
      n.unshift(i);
      i = i.parent;
    }
    for (i = j.hasChildren(r) ? r : r.parent; i;) {
      a.unshift(i);
      i = i.parent;
    }
    for (o = Math.min(n.length, a.length), s = 0, void 0; s < o && n[s] === a[s];) {
      var o;
      var s;
      s++;
    }
    if (0 === s) return t.DISCONNECTED;
    var l = n[s - 1];
    var c = l.children;
    var u = n[s];
    var d = a[s];
    return c.indexOf(u) > c.indexOf(d) ? l === r ? t.FOLLOWING | t.CONTAINED_BY : t.FOLLOWING : l === e ? t.PRECEDING | t.CONTAINS : t.PRECEDING;
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.uniqueSort = e.compareDocumentPosition = e.DocumentPosition = e.removeSubsets = void 0;
  e.removeSubsets = function (e) {
    for (var t = e.length; --t >= 0;) {
      var r = e[t];
      if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
      }
      for (var n = r.parent; n; n = n.parent) if (e.includes(n)) {
        e.splice(t, 1);
        break;
      }
    }
    return e;
  };
  (r = t = e.DocumentPosition || (e.DocumentPosition = {}))[r.DISCONNECTED = 1] = "DISCONNECTED";
  r[r.PRECEDING = 2] = "PRECEDING";
  r[r.FOLLOWING = 4] = "FOLLOWING";
  r[r.CONTAINS = 8] = "CONTAINS";
  r[r.CONTAINED_BY = 16] = "CONTAINED_BY";
  e.compareDocumentPosition = n;
  e.uniqueSort = function (e) {
    (e = e.filter(function (e, t, r) {
      return !r.includes(e, t + 1);
    })).sort(function (e, r) {
      var a = n(e, r);
      return a & t.PRECEDING ? -1 : a & t.FOLLOWING ? 1 : 0;
    });
    return e;
  };
}(eX);
var eY = {};
Object.defineProperty(eY, "__esModule", {
  value: !0
});
eY.getFeed = void 0;
eY.getFeed = function (e) {
  var t;
  var r;
  var n;
  var a;
  var i;
  var o;
  var s;
  var l;
  var c;
  var u;
  var d = eJ(e2, e);
  return d ? "feed" === d.name ? (r = d.children, n = {
    type: "atom",
    items: eG.getElementsByTagName("entry", r).map(function (e) {
      var t;
      var r = e.children;
      var n = {
        media: eZ(r)
      };
      e1(n, "id", "id", r);
      e1(n, "title", "title", r);
      var a = eJ("link", r)?.attribs.href;
      a && (n.link = a);
      var i = e0("summary", r) || e0("content", r);
      i && (n.description = i);
      var o = e0("updated", r);
      o && (n.pubDate = new Date(o));
      return n;
    })
  }, e1(n, "id", "id", r), e1(n, "title", "title", r), (a = eJ("link", r)?.attribs.href) && (n.link = a), e1(n, "description", "subtitle", r), (i = e0("updated", r)) && (n.updated = new Date(i)), e1(n, "author", "email", r, !0), n) : (l = null !== (s = eJ("channel", d.children)?.children) && void 0 !== s ? s : [], c = {
    type: d.name.substr(0, 3),
    id: "",
    items: eG.getElementsByTagName("item", d.children).map(function (e) {
      var t = e.children;
      var r = {
        media: eZ(t)
      };
      e1(r, "id", "guid", t);
      e1(r, "title", "title", t);
      e1(r, "link", "link", t);
      e1(r, "description", "description", t);
      var n = e0("pubDate", t);
      n && (r.pubDate = new Date(n));
      return r;
    })
  }, e1(c, "title", "title", l), e1(c, "link", "link", l), e1(c, "description", "description", l), (u = e0("lastBuildDate", l)) && (c.updated = new Date(u)), e1(c, "author", "managingEditor", l, !0), c) : null;
};
var eK = ["url", "type", "lang"];
var eQ = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function eZ(e) {
  return eG.getElementsByTagName("media:content", e).map(function (e) {
    for (t = e.attribs, r = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, n = 0, void 0; n < eK.length; n++) {
      var t;
      var r;
      var n;
      var a = eK[n];
      t[a] && (r[a] = t[a]);
    }
    for (var i = 0; i < eQ.length; i++) {
      var a = eQ[i];
      t[a] && (r[a] = parseInt(t[a], 10));
    }
    t.expression && (r.expression = t.expression);
    return r;
  });
}
function eJ(e, t) {
  return eG.getElementsByTagName(e, t, !0, 1)[0];
}
function e0(e, t, r) {
  void 0 === r && (r = !1);
  return B.textContent(eG.getElementsByTagName(e, t, r, 1)).trim();
}
function e1(e, t, r, n, a) {
  void 0 === a && (a = !1);
  var i = e0(r, n, a);
  i && (e[t] = i);
}
function e2(e) {
  return "rss" === e || "feed" === e || "rdf:RDF" === e;
}
!function (e) {
  var t = d && d.__createBinding || (Object.create ? function (e, t, r, n) {
    void 0 === n && (n = r);
    var a = Object.getOwnPropertyDescriptor(t, r);
    (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = {
      enumerable: !0,
      get: function () {
        return t[r];
      }
    });
    Object.defineProperty(e, n, a);
  } : function (e, t, r, n) {
    void 0 === n && (n = r);
    e[n] = t[r];
  });
  var r = d && d.__exportStar || function (e, r) {
    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(r, n) || t(r, e, n);
  };
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.hasChildren = e.isDocument = e.isComment = e.isText = e.isCDATA = e.isTag = void 0;
  r(B, e);
  r(eR, e);
  r(ej, e);
  r(e_, e);
  r(eG, e);
  r(eX, e);
  r(eY, e);
  Object.defineProperty(e, "isTag", {
    enumerable: !0,
    get: function () {
      return j.isTag;
    }
  });
  Object.defineProperty(e, "isCDATA", {
    enumerable: !0,
    get: function () {
      return j.isCDATA;
    }
  });
  Object.defineProperty(e, "isText", {
    enumerable: !0,
    get: function () {
      return j.isText;
    }
  });
  Object.defineProperty(e, "isComment", {
    enumerable: !0,
    get: function () {
      return j.isComment;
    }
  });
  Object.defineProperty(e, "isDocument", {
    enumerable: !0,
    get: function () {
      return j.isDocument;
    }
  });
  Object.defineProperty(e, "hasChildren", {
    enumerable: !0,
    get: function () {
      return j.hasChildren;
    }
  });
}(q);
var e3 = {
  trueFunc: function () {
    return !0;
  },
  falseFunc: function () {
    return !1;
  }
};
var e4 = {};
!function (e) {
  e.Attribute = "attribute";
  e.Pseudo = "pseudo";
  e.PseudoElement = "pseudo-element";
  e.Tag = "tag";
  e.Universal = "universal";
  e.Adjacent = "adjacent";
  e.Child = "child";
  e.Descendant = "descendant";
  e.Parent = "parent";
  e.Sibling = "sibling";
  e.ColumnCombinator = "column-combinator";
}(l || (l = {}));
(function (e) {
  e.Any = "any";
  e.Element = "element";
  e.End = "end";
  e.Equals = "equals";
  e.Exists = "exists";
  e.Hyphen = "hyphen";
  e.Not = "not";
  e.Start = "start";
})(c || (c = {}));
let e5 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
let e8 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
let e6 = new Map([[126, c.Element], [94, c.Start], [36, c.End], [42, c.Any], [33, c.Not], [124, c.Hyphen]]);
let e9 = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function e7(e) {
  switch (e.type) {
    case l.Adjacent:
    case l.Child:
    case l.Descendant:
    case l.Parent:
    case l.Sibling:
    case l.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
let te = new Set(["contains", "icontains"]);
function tt(e, t, r) {
  let n = parseInt(t, 16) - 65536;
  return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
}
function tr(e) {
  return e.replace(e8, tt);
}
function tn(e) {
  return 39 === e || 34 === e;
}
function ta(e) {
  return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e;
}
let ti = ["\\", '"'];
let to = [...ti, "(", ")"];
let ts = new Set(ti.map(e => e.charCodeAt(0)));
let tl = new Set(to.map(e => e.charCodeAt(0)));
let tc = new Set([...to, "~", "^", "$", "*", "+", "!", "|", ":", "[", "]", " ", "."].map(e => e.charCodeAt(0)));
function tu(e) {
  return e.map(e => e.map(td).join("")).join(", ");
}
function td(e, t, r) {
  switch (e.type) {
    case l.Child:
      return 0 === t ? "> " : " > ";
    case l.Parent:
      return 0 === t ? "< " : " < ";
    case l.Sibling:
      return 0 === t ? "~ " : " ~ ";
    case l.Adjacent:
      return 0 === t ? "+ " : " + ";
    case l.Descendant:
      return " ";
    case l.ColumnCombinator:
      return 0 === t ? "|| " : " || ";
    case l.Universal:
      return "*" === e.namespace && t + 1 < r.length && "name" in r[t + 1] ? "" : `${tp(e.namespace)}*`;
    case l.Tag:
      return th(e);
    case l.PseudoElement:
      return `::${tm(e.name, tc)}${null === e.data ? "" : `(${tm(e.data, tl)})`}`;
    case l.Pseudo:
      return `:${tm(e.name, tc)}${null === e.data ? "" : `(${"string" == typeof e.data ? tm(e.data, tl) : tu(e.data)})`}`;
    case l.Attribute:
      {
        if ("id" === e.name && e.action === c.Equals && "quirks" === e.ignoreCase && !e.namespace) return `#${tm(e.value, tc)}`;
        if ("class" === e.name && e.action === c.Element && "quirks" === e.ignoreCase && !e.namespace) return `.${tm(e.value, tc)}`;
        let t = th(e);
        if (e.action === c.Exists) return `[${t}]`;
        return `[${t}${function (e) {
          switch (e) {
            case c.Equals:
              return "";
            case c.Element:
              return "~";
            case c.Start:
              return "^";
            case c.End:
              return "$";
            case c.Any:
              return "*";
            case c.Not:
              return "!";
            case c.Hyphen:
              return "|";
            case c.Exists:
              throw Error("Shouldn't be here");
          }
        }(e.action)}="${tm(e.value, ts)}"${null === e.ignoreCase ? "" : e.ignoreCase ? " i" : " s"}]`;
      }
  }
}
function th(e) {
  return `${tp(e.namespace)}${tm(e.name, tc)}`;
}
function tp(e) {
  return null !== e ? `${"*" === e ? "*" : tm(e, tc)}|` : "";
}
function tm(e, t) {
  let r = 0;
  let n = "";
  for (let a = 0; a < e.length; a++) t.has(e.charCodeAt(a)) && (n += `${e.slice(r, a)}\\${e.charAt(a)}`, r = a + 1);
  return n.length > 0 ? n + e.slice(r) : e;
}
var tf = function (e) {
  var t = e.$$default;
  if ("function" == typeof t) {
    var r = function () {
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  Object.keys(e).forEach(function (t) {
    var n = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(r, t, n.get ? n : {
      enumerable: !0,
      get: function () {
        return e[t];
      }
    });
  });
  return r;
}(Object.freeze({
  __proto__: null,
  isTraversal: e7,
  parse: function (e) {
    let t = [];
    let r = function e(t, r, n) {
      let a = [];
      function i(e) {
        let t = r.slice(n + e).match(e5);
        if (!t) throw Error(`Expected name, found ${r.slice(n)}`);
        let [a] = t;
        n += e + a.length;
        return tr(a);
      }
      function o(e) {
        for (n += e; n < r.length && ta(r.charCodeAt(n));) n++;
      }
      function s() {
        let e = n += 1;
        let t = 1;
        for (; t > 0 && n < r.length; n++) 40 !== r.charCodeAt(n) || u(n) ? 41 === r.charCodeAt(n) && !u(n) && t-- : t++;
        if (t) throw Error("Parenthesis not matched");
        return tr(r.slice(e, n - 1));
      }
      function u(e) {
        let t = 0;
        for (; 92 === r.charCodeAt(--e);) t++;
        return (1 & t) == 1;
      }
      function d() {
        if (a.length > 0 && e7(a[a.length - 1])) throw Error("Did not expect successive traversals.");
      }
      function h(e) {
        if (a.length > 0 && a[a.length - 1].type === l.Descendant) {
          a[a.length - 1].type = e;
          return;
        }
        d();
        a.push({
          type: e
        });
      }
      function p(e, t) {
        a.push({
          type: l.Attribute,
          name: e,
          action: t,
          value: i(1),
          namespace: null,
          ignoreCase: "quirks"
        });
      }
      function m() {
        if (a.length && a[a.length - 1].type === l.Descendant && a.pop(), 0 === a.length) throw Error("Empty sub-selector");
        t.push(a);
      }
      if (o(0), r.length === n) return n;
      e: for (; n < r.length;) {
        let t = r.charCodeAt(n);
        switch (t) {
          case 32:
          case 9:
          case 10:
          case 12:
          case 13:
            (0 === a.length || a[0].type !== l.Descendant) && (d(), a.push({
              type: l.Descendant
            }));
            o(1);
            break;
          case 62:
            h(l.Child);
            o(1);
            break;
          case 60:
            h(l.Parent);
            o(1);
            break;
          case 126:
            h(l.Sibling);
            o(1);
            break;
          case 43:
            h(l.Adjacent);
            o(1);
            break;
          case 46:
            p("class", c.Element);
            break;
          case 35:
            p("id", c.Equals);
            break;
          case 91:
            {
              let e;
              o(1);
              let t = null;
              124 === r.charCodeAt(n) ? e = i(1) : r.startsWith("*|", n) ? (t = "*", e = i(2)) : (e = i(0), 124 === r.charCodeAt(n) && 61 !== r.charCodeAt(n + 1) && (t = e, e = i(1)));
              o(0);
              let s = c.Exists;
              let d = e6.get(r.charCodeAt(n));
              if (d) {
                if (s = d, 61 !== r.charCodeAt(n + 1)) throw Error("Expected `=`");
                o(2);
              } else 61 === r.charCodeAt(n) && (s = c.Equals, o(1));
              let h = "";
              let p = null;
              if ("exists" !== s) {
                if (tn(r.charCodeAt(n))) {
                  let e = r.charCodeAt(n);
                  let t = n + 1;
                  for (; t < r.length && (r.charCodeAt(t) !== e || u(t));) t += 1;
                  if (r.charCodeAt(t) !== e) throw Error("Attribute value didn't end");
                  h = tr(r.slice(n + 1, t));
                  n = t + 1;
                } else {
                  let e = n;
                  for (; n < r.length && (!ta(r.charCodeAt(n)) && 93 !== r.charCodeAt(n) || u(n));) n += 1;
                  h = tr(r.slice(e, n));
                }
                o(0);
                let e = 32 | r.charCodeAt(n);
                115 === e ? (p = !1, o(1)) : 105 === e && (p = !0, o(1));
              }
              if (93 !== r.charCodeAt(n)) throw Error("Attribute selector didn't terminate");
              n += 1;
              let m = {
                type: l.Attribute,
                name: e,
                action: s,
                value: h,
                namespace: t,
                ignoreCase: p
              };
              a.push(m);
              break;
            }
          case 58:
            {
              if (58 === r.charCodeAt(n + 1)) {
                a.push({
                  type: l.PseudoElement,
                  name: i(2).toLowerCase(),
                  data: 40 === r.charCodeAt(n) ? s() : null
                });
                continue;
              }
              let t = i(1).toLowerCase();
              let o = null;
              if (40 === r.charCodeAt(n)) {
                if (e9.has(t)) {
                  if (tn(r.charCodeAt(n + 1))) throw Error(`Pseudo-selector ${t} cannot be quoted`);
                  if (n = e(o = [], r, n + 1), 41 !== r.charCodeAt(n)) throw Error(`Missing closing parenthesis in :${t} (${r})`);
                  n += 1;
                } else {
                  if (o = s(), te.has(t)) {
                    let e = o.charCodeAt(0);
                    e === o.charCodeAt(o.length - 1) && tn(e) && (o = o.slice(1, -1));
                  }
                  o = tr(o);
                }
              }
              a.push({
                type: l.Pseudo,
                name: t,
                data: o
              });
              break;
            }
          case 44:
            m();
            a = [];
            o(1);
            break;
          default:
            {
              let e;
              if (r.startsWith("/*", n)) {
                let e = r.indexOf("*/", n + 2);
                if (e < 0) throw Error("Comment was not terminated");
                n = e + 2;
                0 === a.length && o(0);
                break;
              }
              let s = null;
              if (42 === t) {
                n += 1;
                e = "*";
              } else if (124 === t) {
                if (e = "", 124 === r.charCodeAt(n + 1)) {
                  h(l.ColumnCombinator);
                  o(2);
                  break;
                }
              } else if (e5.test(r.slice(n))) e = i(0);else break e;
              124 === r.charCodeAt(n) && 124 !== r.charCodeAt(n + 1) && (s = e, 42 === r.charCodeAt(n + 1) ? (e = "*", n += 2) : e = i(1));
              a.push("*" === e ? {
                type: l.Universal,
                namespace: s
              } : {
                type: l.Tag,
                name: e,
                namespace: s
              });
            }
        }
      }
      m();
      return n;
    }(t, `${e}`, 0);
    if (r < e.length) throw Error(`Unmatched selector: ${e.slice(r)}`);
    return t;
  },
  stringify: tu,
  get SelectorType() {
    return l;
  },
  IgnoreCaseMode: {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: !0,
    CaseSensitive: !1
  },
  get AttributeAction() {
    return c;
  }
}));
var tg = {};
Object.defineProperty(tg, "__esModule", {
  value: !0
});
tg.isTraversal = void 0;
var tb = new Map([[tf.SelectorType.Universal, 50], [tf.SelectorType.Tag, 30], [tf.SelectorType.Attribute, 1], [tf.SelectorType.Pseudo, 0]]);
tg.isTraversal = function (e) {
  return !tb.has(e.type);
};
var ty = new Map([[tf.AttributeAction.Exists, 10], [tf.AttributeAction.Equals, 8], [tf.AttributeAction.Not, 7], [tf.AttributeAction.Start, 6], [tf.AttributeAction.End, 6], [tf.AttributeAction.Any, 5]]);
function tk(e) {
  var t;
  var r;
  var n = null !== (t = tb.get(e.type)) && void 0 !== t ? t : -1;
  e.type === tf.SelectorType.Attribute ? (n = null !== (r = ty.get(e.action)) && void 0 !== r ? r : 4, e.action === tf.AttributeAction.Equals && "id" === e.name && (n = 9), e.ignoreCase && (n >>= 1)) : e.type === tf.SelectorType.Pseudo && (e.data ? "has" === e.name || "contains" === e.name ? n = 0 : Array.isArray(e.data) ? (n = Math.min.apply(Math, e.data.map(function (e) {
    return Math.min.apply(Math, e.map(tk));
  }))) < 0 && (n = 0) : n = 2 : n = 3);
  return n;
}
tg.$$default = function (e) {
  for (t = e.map(tk), r = 1, void 0; r < e.length; r++) {
    var t;
    var r;
    var n = t[r];
    if (!(n < 0)) for (var a = r - 1; a >= 0 && n < t[a]; a--) {
      var i = e[a + 1];
      e[a + 1] = e[a];
      e[a] = i;
      t[a + 1] = t[a];
      t[a] = n;
    }
  }
};
var tv = {};
var tw = {};
var tx = d && d.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(tw, "__esModule", {
  value: !0
});
tw.attributeRules = void 0;
var tS = tx(e3);
var tC = /[-[\]{}()*+?.,\\^$|#\s]/g;
function tA(e) {
  return e.replace(tC, "\\$&");
}
var tT = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function tE(e, t) {
  return "boolean" == typeof e.ignoreCase ? e.ignoreCase : "quirks" === e.ignoreCase ? !!t.quirksMode : !t.xmlMode && tT.has(e.name);
}
tw.attributeRules = {
  equals: function (e, t, r) {
    var n = r.adapter;
    var a = t.name;
    var i = t.value;
    return tE(t, r) ? (i = i.toLowerCase(), function (t) {
      var r = n.getAttributeValue(t, a);
      return null != r && r.length === i.length && r.toLowerCase() === i && e(t);
    }) : function (t) {
      return n.getAttributeValue(t, a) === i && e(t);
    };
  },
  hyphen: function (e, t, r) {
    var n = r.adapter;
    var a = t.name;
    var i = t.value;
    var o = i.length;
    return tE(t, r) ? (i = i.toLowerCase(), function (t) {
      var r = n.getAttributeValue(t, a);
      return null != r && (r.length === o || "-" === r.charAt(o)) && r.substr(0, o).toLowerCase() === i && e(t);
    }) : function (t) {
      var r = n.getAttributeValue(t, a);
      return null != r && (r.length === o || "-" === r.charAt(o)) && r.substr(0, o) === i && e(t);
    };
  },
  element: function (e, t, r) {
    var n = r.adapter;
    var a = t.name;
    var i = t.value;
    if (/\s/.test(i)) return tS.$$default.falseFunc;
    var o = new RegExp("(?:^|\\s)".concat(tA(i), "(?:$|\\s)"), tE(t, r) ? "i" : "");
    return function (t) {
      var r = n.getAttributeValue(t, a);
      return null != r && r.length >= i.length && o.test(r) && e(t);
    };
  },
  exists: function (e, t, r) {
    var n = t.name;
    var a = r.adapter;
    return function (t) {
      return a.hasAttrib(t, n) && e(t);
    };
  },
  start: function (e, t, r) {
    var n = r.adapter;
    var a = t.name;
    var i = t.value;
    var o = i.length;
    return 0 === o ? tS.$$default.falseFunc : tE(t, r) ? (i = i.toLowerCase(), function (t) {
      var r = n.getAttributeValue(t, a);
      return null != r && r.length >= o && r.substr(0, o).toLowerCase() === i && e(t);
    }) : function (t) {
      var r;
      return !!n.getAttributeValue(t, a)?.startsWith(i) && e(t);
    };
  },
  end: function (e, t, r) {
    var n = r.adapter;
    var a = t.name;
    var i = t.value;
    var o = -i.length;
    return 0 === o ? tS.$$default.falseFunc : tE(t, r) ? (i = i.toLowerCase(), function (t) {
      var r;
      return n.getAttributeValue(t, a)?.substr(o).toLowerCase() === i && e(t);
    }) : function (t) {
      var r;
      return !!n.getAttributeValue(t, a)?.endsWith(i) && e(t);
    };
  },
  any: function (e, t, r) {
    var n = r.adapter;
    var a = t.name;
    var i = t.value;
    if ("" === i) return tS.$$default.falseFunc;
    if (tE(t, r)) {
      var o = RegExp(tA(i), "i");
      return function (t) {
        var r = n.getAttributeValue(t, a);
        return null != r && r.length >= i.length && o.test(r) && e(t);
      };
    }
    return function (t) {
      var r;
      return !!n.getAttributeValue(t, a)?.includes(i) && e(t);
    };
  },
  not: function (e, t, r) {
    var n = r.adapter;
    var a = t.name;
    var i = t.value;
    return "" === i ? function (t) {
      return !!n.getAttributeValue(t, a) && e(t);
    } : tE(t, r) ? (i = i.toLowerCase(), function (t) {
      var r = n.getAttributeValue(t, a);
      return (null == r || r.length !== i.length || r.toLowerCase() !== i) && e(t);
    }) : function (t) {
      return n.getAttributeValue(t, a) !== i && e(t);
    };
  }
};
var tP = {};
var tL = {};
var tD = {};
var tN = {};
Object.defineProperty(tN, "__esModule", {
  value: !0
});
tN.parse = void 0;
var tO = new Set([9, 10, 12, 13, 32]);
tN.parse = function (e) {
  if ("even" === (e = e.trim().toLowerCase())) return [2, 0];
  if ("odd" === e) return [2, 1];
  var t = 0;
  var r = 0;
  var n = i();
  var a = o();
  if (t < e.length && "n" === e.charAt(t) && (t++, r = n * (null != a ? a : 1), s(), t < e.length ? (n = i(), s(), a = o()) : n = a = 0), null === a || t < e.length) throw Error("n-th rule couldn't be parsed ('".concat(e, "')"));
  return [r, n * a];
  function i() {
    return "-" === e.charAt(t) ? (t++, -1) : ("+" === e.charAt(t) && t++, 1);
  }
  function o() {
    for (r = t, n = 0, void 0; t < e.length && e.charCodeAt(t) >= 48 && 57 >= e.charCodeAt(t);) {
      var r;
      var n;
      n = 10 * n + (e.charCodeAt(t) - 48);
      t++;
    }
    return t === r ? null : n;
  }
  function s() {
    for (; t < e.length && tO.has(e.charCodeAt(t));) t++;
  }
};
var tM = {};
var tz = d && d.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(tM, "__esModule", {
  value: !0
});
tM.generate = tM.compile = void 0;
var tI = tz(e3);
tM.compile = function (e) {
  var t = e[0];
  var r = e[1] - 1;
  if (r < 0 && t <= 0) return tI.$$default.falseFunc;
  if (-1 === t) return function (e) {
    return e <= r;
  };
  if (0 === t) return function (e) {
    return e === r;
  };
  if (1 === t) return r < 0 ? tI.$$default.trueFunc : function (e) {
    return e >= r;
  };
  var n = Math.abs(t);
  var a = (r % n + n) % n;
  return t > 1 ? function (e) {
    return e >= r && e % n === a;
  } : function (e) {
    return e <= r && e % n === a;
  };
};
tM.generate = function (e) {
  var t = e[0];
  var r = e[1] - 1;
  var n = 0;
  if (t < 0) {
    var a = -t;
    var i = (r % a + a) % a;
    return function () {
      var e = i + a * n++;
      return e > r ? null : e;
    };
  }
  return 0 === t ? r < 0 ? function () {
    return null;
  } : function () {
    return 0 == n++ ? r : null;
  } : (r < 0 && (r += t * Math.ceil(-r / t)), function () {
    return t * n++ + r;
  });
};
(function (e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.sequence = e.generate = e.compile = e.parse = void 0;
  Object.defineProperty(e, "parse", {
    enumerable: !0,
    get: function () {
      return tN.parse;
    }
  });
  Object.defineProperty(e, "compile", {
    enumerable: !0,
    get: function () {
      return tM.compile;
    }
  });
  Object.defineProperty(e, "generate", {
    enumerable: !0,
    get: function () {
      return tM.generate;
    }
  });
  e.$$default = function (e) {
    return tM.compile(tN.parse(e));
  };
  e.sequence = function (e) {
    return tM.generate(tN.parse(e));
  };
})(tD);
(function (e) {
  var t = d && d.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.filters = void 0;
  var r = t(tD);
  var n = t(e3);
  function a(e, t) {
    return function (r) {
      var n = t.getParent(r);
      return null != n && t.isTag(n) && e(r);
    };
  }
  function i(e) {
    return function (t, r, a) {
      var i = a.adapter[e];
      return "function" != typeof i ? n.$$default.falseFunc : function (e) {
        return i(e) && t(e);
      };
    };
  }
  e.filters = {
    contains: function (e, t, r) {
      var n = r.adapter;
      return function (r) {
        return e(r) && n.getText(r).includes(t);
      };
    },
    icontains: function (e, t, r) {
      var n = r.adapter;
      var a = t.toLowerCase();
      return function (t) {
        return e(t) && n.getText(t).toLowerCase().includes(a);
      };
    },
    "nth-child": function (e, t, i) {
      var o = i.adapter;
      var s = i.equals;
      var l = r.$$default(t);
      return l === n.$$default.falseFunc ? n.$$default.falseFunc : l === n.$$default.trueFunc ? a(e, o) : function (t) {
        for (r = o.getSiblings(t), n = 0, a = 0, void 0; a < r.length && !s(t, r[a]); a++) {
          var r;
          var n;
          var a;
          o.isTag(r[a]) && n++;
        }
        return l(n) && e(t);
      };
    },
    "nth-last-child": function (e, t, i) {
      var o = i.adapter;
      var s = i.equals;
      var l = r.$$default(t);
      return l === n.$$default.falseFunc ? n.$$default.falseFunc : l === n.$$default.trueFunc ? a(e, o) : function (t) {
        for (r = o.getSiblings(t), n = 0, a = r.length - 1, void 0; a >= 0 && !s(t, r[a]); a--) {
          var r;
          var n;
          var a;
          o.isTag(r[a]) && n++;
        }
        return l(n) && e(t);
      };
    },
    "nth-of-type": function (e, t, i) {
      var o = i.adapter;
      var s = i.equals;
      var l = r.$$default(t);
      return l === n.$$default.falseFunc ? n.$$default.falseFunc : l === n.$$default.trueFunc ? a(e, o) : function (t) {
        for (r = o.getSiblings(t), n = 0, a = 0, void 0; a < r.length; a++) {
          var r;
          var n;
          var a;
          var i = r[a];
          if (s(t, i)) break;
          o.isTag(i) && o.getName(i) === o.getName(t) && n++;
        }
        return l(n) && e(t);
      };
    },
    "nth-last-of-type": function (e, t, i) {
      var o = i.adapter;
      var s = i.equals;
      var l = r.$$default(t);
      return l === n.$$default.falseFunc ? n.$$default.falseFunc : l === n.$$default.trueFunc ? a(e, o) : function (t) {
        for (r = o.getSiblings(t), n = 0, a = r.length - 1, void 0; a >= 0; a--) {
          var r;
          var n;
          var a;
          var i = r[a];
          if (s(t, i)) break;
          o.isTag(i) && o.getName(i) === o.getName(t) && n++;
        }
        return l(n) && e(t);
      };
    },
    root: function (e, t, r) {
      var n = r.adapter;
      return function (t) {
        var r = n.getParent(t);
        return (null == r || !n.isTag(r)) && e(t);
      };
    },
    scope: function (t, r, n, a) {
      var i = n.equals;
      return a && 0 !== a.length ? 1 === a.length ? function (e) {
        return i(a[0], e) && t(e);
      } : function (e) {
        return a.includes(e) && t(e);
      } : e.filters.root(t, r, n);
    },
    hover: i("isHovered"),
    visited: i("isVisited"),
    active: i("isActive")
  };
})(tL);
var tR = {};
Object.defineProperty(tR, "__esModule", {
  value: !0
});
tR.verifyPseudoArgs = tR.pseudos = void 0;
tR.pseudos = {
  empty: function (e, t) {
    var r = t.adapter;
    return !r.getChildren(e).some(function (e) {
      return r.isTag(e) || "" !== r.getText(e);
    });
  },
  "first-child": function (e, t) {
    var r = t.adapter;
    var n = t.equals;
    if (r.prevElementSibling) return null == r.prevElementSibling(e);
    var a = r.getSiblings(e).find(function (e) {
      return r.isTag(e);
    });
    return null != a && n(e, a);
  },
  "last-child": function (e, t) {
    for (r = t.adapter, n = t.equals, a = r.getSiblings(e), i = a.length - 1, void 0; i >= 0; i--) {
      var r;
      var n;
      var a;
      var i;
      if (n(e, a[i])) return !0;
      if (r.isTag(a[i])) break;
    }
    return !1;
  },
  "first-of-type": function (e, t) {
    for (r = t.adapter, n = t.equals, a = r.getSiblings(e), i = r.getName(e), o = 0, void 0; o < a.length; o++) {
      var r;
      var n;
      var a;
      var i;
      var o;
      var s = a[o];
      if (n(e, s)) return !0;
      if (r.isTag(s) && r.getName(s) === i) break;
    }
    return !1;
  },
  "last-of-type": function (e, t) {
    for (r = t.adapter, n = t.equals, a = r.getSiblings(e), i = r.getName(e), o = a.length - 1, void 0; o >= 0; o--) {
      var r;
      var n;
      var a;
      var i;
      var o;
      var s = a[o];
      if (n(e, s)) return !0;
      if (r.isTag(s) && r.getName(s) === i) break;
    }
    return !1;
  },
  "only-of-type": function (e, t) {
    var r = t.adapter;
    var n = t.equals;
    var a = r.getName(e);
    return r.getSiblings(e).every(function (t) {
      return n(e, t) || !r.isTag(t) || r.getName(t) !== a;
    });
  },
  "only-child": function (e, t) {
    var r = t.adapter;
    var n = t.equals;
    return r.getSiblings(e).every(function (t) {
      return n(e, t) || !r.isTag(t);
    });
  }
};
tR.verifyPseudoArgs = function (e, t, r, n) {
  if (null === r) {
    if (e.length > n) throw Error("Pseudo-class :".concat(t, " requires an argument"));
  } else if (e.length === n) throw Error("Pseudo-class :".concat(t, " doesn't have any arguments"));
};
var tq = {};
Object.defineProperty(tq, "__esModule", {
  value: !0
});
tq.aliases = void 0;
tq.aliases = {
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
};
var tB = {};
function tj(e, t) {
  var r = t.getParent(e);
  return r && t.isTag(r) ? r : null;
}
!function (e) {
  var t = d && d.__spreadArray || function (e, t, r) {
    if (r || 2 == $$arguments.length) for (a = 0, i = t.length, void 0; a < i; a++) {
      var n;
      var a;
      var i;
      !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
    }
    return e.concat(n || Array.prototype.slice.call(t));
  };
  var r = d && d.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.subselects = e.getNextSiblings = e.ensureIsTag = e.PLACEHOLDER_ELEMENT = void 0;
  var n = r(e3);
  function a(e, t) {
    return e === n.$$default.falseFunc ? n.$$default.falseFunc : function (r) {
      return t.isTag(r) && e(r);
    };
  }
  function i(e, t) {
    var r = t.getSiblings(e);
    if (r.length <= 1) return [];
    var n = r.indexOf(e);
    return n < 0 || n === r.length - 1 ? [] : r.slice(n + 1).filter(t.isTag);
  }
  function o(e) {
    return {
      xmlMode: !!e.xmlMode,
      lowerCaseAttributeNames: !!e.lowerCaseAttributeNames,
      lowerCaseTags: !!e.lowerCaseTags,
      quirksMode: !!e.quirksMode,
      cacheResults: !!e.cacheResults,
      pseudos: e.pseudos,
      adapter: e.adapter,
      equals: e.equals
    };
  }
  e.PLACEHOLDER_ELEMENT = {};
  e.ensureIsTag = a;
  e.getNextSiblings = i;
  var s = function (e, t, r, a, i) {
    var s = i(t, o(r), a);
    return s === n.$$default.trueFunc ? e : s === n.$$default.falseFunc ? n.$$default.falseFunc : function (t) {
      return s(t) && e(t);
    };
  };
  e.subselects = {
    is: s,
    matches: s,
    where: s,
    not: function (e, t, r, a, i) {
      var s = i(t, o(r), a);
      return s === n.$$default.falseFunc ? e : s === n.$$default.trueFunc ? n.$$default.falseFunc : function (t) {
        return !s(t) && e(t);
      };
    },
    has: function (r, s, l, c, u) {
      var d = l.adapter;
      var h = o(l);
      h.relativeSelector = !0;
      var p = s.some(function (e) {
        return e.some(tg.isTraversal);
      }) ? [e.PLACEHOLDER_ELEMENT] : void 0;
      var m = u(s, h, p);
      if (m === n.$$default.falseFunc) return n.$$default.falseFunc;
      var f = a(m, d);
      if (p && m !== n.$$default.trueFunc) {
        var g = m.shouldTestNextSiblings;
        var b = void 0 !== g && g;
        return function (e) {
          if (!r(e)) return !1;
          p[0] = e;
          var n = d.getChildren(e);
          var a = b ? t(t([], n, !0), i(e, d), !0) : n;
          return d.existsOne(f, a);
        };
      }
      return function (e) {
        return r(e) && d.existsOne(f, d.getChildren(e));
      };
    }
  };
}(tB);
(function (e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.compilePseudoSelector = e.aliases = e.pseudos = e.filters = void 0;
  Object.defineProperty(e, "filters", {
    enumerable: !0,
    get: function () {
      return tL.filters;
    }
  });
  Object.defineProperty(e, "pseudos", {
    enumerable: !0,
    get: function () {
      return tR.pseudos;
    }
  });
  Object.defineProperty(e, "aliases", {
    enumerable: !0,
    get: function () {
      return tq.aliases;
    }
  });
  e.compilePseudoSelector = function (e, t, r, n, a) {
    var i;
    var o = t.name;
    var s = t.data;
    if (Array.isArray(s)) {
      if (!(o in tB.subselects)) throw Error("Unknown pseudo-class :".concat(o, "(").concat(s, ")"));
      return tB.subselects[o](e, s, r, n, a);
    }
    var l = r.pseudos?.[o];
    var c = "string" == typeof l ? l : tq.aliases[o];
    if ("string" == typeof c) {
      if (null != s) throw Error("Pseudo ".concat(o, " doesn't have any arguments"));
      var u = tf.parse(c);
      return tB.subselects.is(e, u, r, n, a);
    }
    if ("function" == typeof l) {
      tR.verifyPseudoArgs(l, o, s, 1);
      return function (t) {
        return l(t, s) && e(t);
      };
    }
    if (o in tL.filters) return tL.filters[o](e, s, r, n);
    if (o in tR.pseudos) {
      var d = tR.pseudos[o];
      tR.verifyPseudoArgs(d, o, s, 2);
      return function (t) {
        return d(t, r, s) && e(t);
      };
    }
    throw Error("Unknown pseudo-class :".concat(o));
  };
})(tP);
Object.defineProperty(tv, "__esModule", {
  value: !0
});
tv.compileGeneralSelector = void 0;
tv.compileGeneralSelector = function (e, t, r, n, a) {
  var i = r.adapter;
  var o = r.equals;
  switch (t.type) {
    case tf.SelectorType.PseudoElement:
      throw Error("Pseudo-elements are not supported by css-select");
    case tf.SelectorType.ColumnCombinator:
      throw Error("Column combinators are not yet supported by css-select");
    case tf.SelectorType.Attribute:
      if (null != t.namespace) throw Error("Namespaced attributes are not yet supported by css-select");
      (!r.xmlMode || r.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase());
      return tw.attributeRules[t.action](e, t, r);
    case tf.SelectorType.Pseudo:
      return tP.compilePseudoSelector(e, t, r, n, a);
    case tf.SelectorType.Tag:
      if (null != t.namespace) throw Error("Namespaced tag names are not yet supported by css-select");
      var s = t.name;
      (!r.xmlMode || r.lowerCaseTags) && (s = s.toLowerCase());
      return function (t) {
        return i.getName(t) === s && e(t);
      };
    case tf.SelectorType.Descendant:
      if (!1 === r.cacheResults || "undefined" == typeof WeakSet) return function (t) {
        for (var r = t; r = tj(r, i);) if (e(r)) return !0;
        return !1;
      };
      var l = new WeakSet();
      return function (t) {
        for (var r = t; r = tj(r, i);) if (!l.has(r)) {
          if (i.isTag(r) && e(r)) return !0;
          l.add(r);
        }
        return !1;
      };
    case "_flexibleDescendant":
      return function (t) {
        var r = t;
        do if (e(r)) return !0; while (r = tj(r, i));
        return !1;
      };
    case tf.SelectorType.Parent:
      return function (t) {
        return i.getChildren(t).some(function (t) {
          return i.isTag(t) && e(t);
        });
      };
    case tf.SelectorType.Child:
      return function (t) {
        var r = i.getParent(t);
        return null != r && i.isTag(r) && e(r);
      };
    case tf.SelectorType.Sibling:
      return function (t) {
        for (r = i.getSiblings(t), n = 0, void 0; n < r.length; n++) {
          var r;
          var n;
          var a = r[n];
          if (o(t, a)) break;
          if (i.isTag(a) && e(a)) return !0;
        }
        return !1;
      };
    case tf.SelectorType.Adjacent:
      if (i.prevElementSibling) return function (t) {
        var r = i.prevElementSibling(t);
        return null != r && e(r);
      };
      return function (t) {
        for (n = i.getSiblings(t), a = 0, void 0; a < n.length; a++) {
          var r;
          var n;
          var a;
          var s = n[a];
          if (o(t, s)) break;
          i.isTag(s) && (r = s);
        }
        return !!r && e(r);
      };
    case tf.SelectorType.Universal:
      if (null != t.namespace && "*" !== t.namespace) throw Error("Namespaced universal selectors are not yet supported by css-select");
      return e;
  }
};
var tF = d && d.__createBinding || (Object.create ? function (e, t, r, n) {
  void 0 === n && (n = r);
  var a = Object.getOwnPropertyDescriptor(t, r);
  (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = {
    enumerable: !0,
    get: function () {
      return t[r];
    }
  });
  Object.defineProperty(e, n, a);
} : function (e, t, r, n) {
  void 0 === n && (n = r);
  e[n] = t[r];
});
var t_ = d && d.__setModuleDefault || (Object.create ? function (e, t) {
  Object.defineProperty(e, "default", {
    enumerable: !0,
    value: t
  });
} : function (e, t) {
  e.$$default = t;
});
var tU = d && d.__importStar || function (e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && tF(t, e, r);
  t_(t, e);
  return t;
};
var tG = d && d.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(e4, "__esModule", {
  value: !0
});
e4.compileToken = e4.compileUnsafe = e4.compile = void 0;
var tH = tG(e3);
var tW = tU(tg);
function tV(e, t, r) {
  return tQ("string" == typeof e ? tf.parse(e) : e, t, r);
}
function t$(e) {
  return e.type === tf.SelectorType.Pseudo && ("scope" === e.name || Array.isArray(e.data) && e.data.some(function (e) {
    return e.some(t$);
  }));
}
e4.compile = function (e, t, r) {
  var n = tV(e, t, r);
  return tB.ensureIsTag(n, t.adapter);
};
e4.compileUnsafe = tV;
var tX = {
  type: tf.SelectorType.Descendant
};
var tY = {
  type: "_flexibleDescendant"
};
var tK = {
  type: tf.SelectorType.Pseudo,
  name: "scope",
  data: null
};
function tQ(e, t, r) {
  e.forEach(tW.$$default);
  var n;
  var a = Array.isArray(r = null !== (n = t.context) && void 0 !== n ? n : r);
  var i = r && (Array.isArray(r) ? r : [r]);
  if (!1 !== t.relativeSelector) !function (e, t, r) {
    for (n = t.adapter, a = !!r?.every(function (e) {
      var t = n.isTag(e) && n.getParent(e);
      return e === tB.PLACEHOLDER_ELEMENT || t && n.isTag(t);
    }), i = 0, void 0; i < e.length; i++) {
      var n;
      var a;
      var i;
      var o = e[i];
      if (o.length > 0 && tW.isTraversal(o[0]) && o[0].type !== tf.SelectorType.Descendant) ;else {
        if (!a || o.some(t$)) continue;
        o.unshift(tX);
      }
      o.unshift(tK);
    }
  }(e, t, i);else if (e.some(function (e) {
    return e.length > 0 && tW.isTraversal(e[0]);
  })) throw Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  var o = !1;
  var s = e.map(function (e) {
    if (e.length >= 2) {
      var r;
      var n = e[0];
      var s = e[1];
      n.type !== tf.SelectorType.Pseudo || "scope" !== n.name || (a && s.type === tf.SelectorType.Descendant ? e[1] = tY : (s.type === tf.SelectorType.Adjacent || s.type === tf.SelectorType.Sibling) && (o = !0));
    }
    return e.reduce(function (e, r) {
      return e === tH.$$default.falseFunc ? tH.$$default.falseFunc : tv.compileGeneralSelector(e, r, t, i, tQ);
    }, null !== (r = t.rootFunc) && void 0 !== r ? r : tH.$$default.trueFunc);
  }).reduce(tZ, tH.$$default.falseFunc);
  s.shouldTestNextSiblings = o;
  return s;
}
function tZ(e, t) {
  return t === tH.$$default.falseFunc || e === tH.$$default.trueFunc ? e : e === tH.$$default.falseFunc || t === tH.$$default.trueFunc ? t : function (r) {
    return e(r) || t(r);
  };
}
e4.compileToken = tQ;
(function (e) {
  var t = d && d.__createBinding || (Object.create ? function (e, t, r, n) {
    void 0 === n && (n = r);
    var a = Object.getOwnPropertyDescriptor(t, r);
    (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = {
      enumerable: !0,
      get: function () {
        return t[r];
      }
    });
    Object.defineProperty(e, n, a);
  } : function (e, t, r, n) {
    void 0 === n && (n = r);
    e[n] = t[r];
  });
  var r = d && d.__setModuleDefault || (Object.create ? function (e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function (e, t) {
    e.$$default = t;
  });
  var n = d && d.__importStar || function (e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var a in e) "default" !== a && Object.prototype.hasOwnProperty.call(e, a) && t(n, e, a);
    r(n, e);
    return n;
  };
  var a = d && d.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.aliases = e.pseudos = e.filters = e.is = e.selectOne = e.selectAll = e.prepareContext = e._compileToken = e._compileUnsafe = e.compile = void 0;
  var i = n(q);
  var o = a(e3);
  var s = function (e, t) {
    return e === t;
  };
  var l = {
    adapter: i,
    equals: s
  };
  function c(e) {
    var t;
    var r;
    var n;
    var a;
    var o = null != e ? e : l;
    null !== (t = o.adapter) && void 0 !== t || (o.adapter = i);
    null !== (r = o.equals) && void 0 !== r || (o.equals = null !== (a = o.adapter?.equals) && void 0 !== a ? a : s);
    return o;
  }
  function u(e) {
    return function (t, r, n) {
      return e(t, c(r), n);
    };
  }
  function h(e) {
    return function (t, r, n) {
      var a = c(n);
      "function" != typeof t && (t = e4.compileUnsafe(t, a, r));
      var i = p(r, a.adapter, t.shouldTestNextSiblings);
      return e(t, i, a);
    };
  }
  function p(e, t, r) {
    void 0 === r && (r = !1);
    r && (e = function (e, t) {
      for (r = Array.isArray(e) ? e.slice(0) : [e], n = r.length, a = 0, void 0; a < n; a++) {
        var r;
        var n;
        var a;
        var i = tB.getNextSiblings(r[a], t);
        r.push.apply(r, i);
      }
      return r;
    }(e, t));
    return Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
  }
  e.compile = u(e4.compile);
  e._compileUnsafe = u(e4.compileUnsafe);
  e._compileToken = u(e4.compileToken);
  e.prepareContext = p;
  e.selectAll = h(function (e, t, r) {
    return e !== o.$$default.falseFunc && t && 0 !== t.length ? r.adapter.findAll(e, t) : [];
  });
  e.selectOne = h(function (e, t, r) {
    return e !== o.$$default.falseFunc && t && 0 !== t.length ? r.adapter.findOne(e, t) : null;
  });
  e.is = function (e, t, r) {
    var n = c(r);
    return ("function" == typeof t ? t : e4.compile(t, n))(e);
  };
  e.$$default = e.selectAll;
  Object.defineProperty(e, "filters", {
    enumerable: !0,
    get: function () {
      return tP.filters;
    }
  });
  Object.defineProperty(e, "pseudos", {
    enumerable: !0,
    get: function () {
      return tP.pseudos;
    }
  });
  Object.defineProperty(e, "aliases", {
    enumerable: !0,
    get: function () {
      return tP.aliases;
    }
  });
})(R);
let tJ = e => "element" === e.type;
let t0 = (e, t) => t.some(t => !!tJ(t) && (e(t) || t0(e, t1(t))));
let t1 = e => e.children || [];
let t2 = e => e.parentNode || null;
let t3 = (e, t) => {
  let r = [];
  for (let n of t) tJ(n) && (e(n) && r.push(n), r.push(...t3(e, t1(n))));
  return r;
};
let t4 = (e, t) => {
  for (let r of t) if (tJ(r)) {
    if (e(r)) return r;
    let t = t4(e, t1(r));
    if (t) return t;
  }
  return null;
};
let {
  selectAll,
  selectOne,
  is: _is
} = R;
let t9 = {
  xmlMode: !0,
  adapter: {
    isTag: tJ,
    existsOne: t0,
    getAttributeValue: (e, t) => e.attributes[t],
    getChildren: t1,
    getName: e => e.name,
    getParent: t2,
    getSiblings: e => {
      var t = t2(e);
      return t ? t1(t) : [];
    },
    getText: e => "text" === e.children[0].type && "cdata" === e.children[0].type ? e.children[0].value : "",
    hasAttrib: (e, t) => void 0 !== e.attributes[t],
    removeSubsets: e => {
      let t;
      let r;
      let n;
      let a = e.length;
      for (; --a > -1;) {
        for (t = r = e[a], e[a] = null, n = !0; r;) {
          if (e.includes(r)) {
            n = !1;
            e.splice(a, 1);
            break;
          }
          r = t2(r);
        }
        n && (e[a] = t);
      }
      return e;
    },
    findAll: t3,
    findOne: t4
  }
};
I.querySelectorAll = (e, t) => selectAll(t, e, t9);
I.querySelector = (e, t) => selectOne(t, e, t9);
I.matches = (e, t) => _is(e, t, t9);
let t7 = Symbol();
I.visitSkip = t7;
let re = (e, t, r) => {
  let n = t[e.type];
  if (!n || !n.enter || n.enter(e, r) !== t7) {
    if ("root" === e.type || "element" === e.type && r.children.includes(e)) for (let r of e.children) re(r, t, e);
    n && n.exit && n.exit(e, r);
  }
};
I.visit = re;
I.detachNodeFromParent = (e, t) => {
  t.children = t.children.filter(t => t !== e);
};
let {
  visit: _visit
} = I;
let rr = (e, t, r, n, a) => {
  for (let i of r) {
    let r = n?.[i.name];
    if (!1 === r) continue;
    let o = {
      ...i.params,
      ...a,
      ...r
    };
    let s = i.fn(e, o, t);
    null != s && _visit(e, s);
  }
};
z.invokePlugins = rr;
z.createPreset = ({
  name: e,
  plugins: t
}) => ({
  name: e,
  fn: (r, n, a) => {
    let {
      floatPrecision,
      overrides
    } = n;
    let s = {};
    if (null != floatPrecision && (s.floatPrecision = floatPrecision), overrides) {
      let r = t.map(({
        name: e
      }) => e);
      for (let t of Object.keys(overrides)) r.includes(t) || console.warn(`You are trying to configure ${t} which is not part of ${e}.
Try to put it before or after, for example

plugins: [
  {
    name: '${e}',
  },
  '${t}'
]
`);
    }
    rr(r, a, t, overrides, s);
  }
});
var rn = {};
let {
  detachNodeFromParent
} = I;
rn.name = "removeDoctype";
rn.description = "removes doctype declaration";
rn.fn = () => ({
  doctype: {
    enter: (e, t) => {
      detachNodeFromParent(e, t);
    }
  }
});
var ri = {};
let {
  detachNodeFromParent: _detachNodeFromParent
} = I;
ri.name = "removeXMLProcInst";
ri.description = "removes XML processing instructions";
ri.fn = () => ({
  instruction: {
    enter: (e, t) => {
      "xml" === e.name && _detachNodeFromParent(e, t);
    }
  }
});
var rs = {};
let {
  detachNodeFromParent: _detachNodeFromParent2
} = I;
rs.name = "removeComments";
rs.description = "removes comments";
let rc = [/^!/];
rs.fn = (e, t) => {
  let {
    preservePatterns = rc
  } = t;
  return {
    comment: {
      enter: (e, t) => {
        if (preservePatterns) {
          if (!Array.isArray(preservePatterns)) throw Error(`Expected array in removeComments preservePatterns parameter but received ${preservePatterns}`);
          if (preservePatterns.some(t => new RegExp(t).test(e.value))) return;
        }
        _detachNodeFromParent2(e, t);
      }
    }
  };
};
var ru = {};
let {
  detachNodeFromParent: _detachNodeFromParent3
} = I;
ru.name = "removeMetadata";
ru.description = "removes <metadata>";
ru.fn = () => ({
  element: {
    enter: (e, t) => {
      "metadata" === e.name && _detachNodeFromParent3(e, t);
    }
  }
});
var rh = {};
let {
  detachNodeFromParent: _detachNodeFromParent1
} = I;
let {
  editorNamespaces
} = f;
rh.name = "removeEditorsNSData";
rh.description = "removes editors namespaces, elements and attributes";
rh.fn = (e, t) => {
  let r = [...editorNamespaces];
  Array.isArray(t.additionalNamespaces) && (r = [...editorNamespaces, ...t.additionalNamespaces]);
  let n = [];
  return {
    element: {
      enter: (e, t) => {
        if ("svg" === e.name) for (let [t, a] of Object.entries(e.attributes)) t.startsWith("xmlns:") && r.includes(a) && (n.push(t.slice(6)), delete e.attributes[t]);
        for (let t of Object.keys(e.attributes)) if (t.includes(":")) {
          let [r] = t.split(":");
          n.includes(r) && delete e.attributes[t];
        }
        if (e.name.includes(":")) {
          let [r] = e.name.split(":");
          n.includes(r) && _detachNodeFromParent1(e, t);
        }
      }
    }
  };
};
var rf = {};
rf.name = "cleanupAttrs";
rf.description = "cleanups attributes from newlines, trailing and repeating spaces";
let rg = /(\S)\r?\n(\S)/g;
let rb = /\r?\n/g;
let ry = /\s{2,}/g;
rf.fn = (e, t) => {
  let {
    newlines = !0,
    trim = !0,
    spaces = !0
  } = t;
  return {
    element: {
      enter: e => {
        for (let t of Object.keys(e.attributes)) {
          newlines && (e.attributes[t] = e.attributes[t].replace(rg, (e, t, r) => t + " " + r), e.attributes[t] = e.attributes[t].replace(rb, ""));
          trim && (e.attributes[t] = e.attributes[t].trim());
          spaces && (e.attributes[t] = e.attributes[t].replace(ry, " "));
        }
      }
    }
  };
};
var rk = {};
let {
  visitSkip,
  detachNodeFromParent: _detachNodeFromParent4
} = I;
rk.name = "mergeStyles";
rk.description = "merge multiple style elements into one";
rk.fn = () => {
  let e = null;
  let t = "";
  let r = "text";
  return {
    element: {
      enter: (n, a) => {
        if ("foreignObject" === n.name) return visitSkip;
        if ("style" !== n.name || null != n.attributes.type && "" !== n.attributes.type && "text/css" !== n.attributes.type) return;
        let i = "";
        for (let e of n.children) {
          "text" === e.type && (i += e.value);
          "cdata" === e.type && (r = "cdata", i += e.value);
        }
        if (0 === i.trim().length) {
          _detachNodeFromParent4(n, a);
          return;
        }
        if (null == n.attributes.media ? t += i : (t += `@media ${n.attributes.media}{${i}}`, delete n.attributes.media), null == e) e = n;else {
          _detachNodeFromParent4(n, a);
          let i = {
            type: r,
            value: t
          };
          Object.defineProperty(i, "parentNode", {
            writable: !0,
            value: e
          });
          e.children = [i];
        }
      }
    }
  };
};
var rx = {};
var rS = {};
var rC = {};
var rA = {};
rA.AtKeyword = 3;
rA.BadString = 6;
rA.BadUrl = 8;
rA.CDC = 15;
rA.CDO = 14;
rA.Colon = 16;
rA.Comma = 18;
rA.Comment = 25;
rA.Delim = 9;
rA.Dimension = 12;
rA.EOF = 0;
rA.Function = 2;
rA.Hash = 4;
rA.Ident = 1;
rA.LeftCurlyBracket = 23;
rA.LeftParenthesis = 21;
rA.LeftSquareBracket = 19;
rA.Number = 10;
rA.Percentage = 11;
rA.RightCurlyBracket = 24;
rA.RightParenthesis = 22;
rA.RightSquareBracket = 20;
rA.Semicolon = 17;
rA.String = 5;
rA.Url = 7;
rA.WhiteSpace = 13;
var rT = {};
function rE(e) {
  return e >= 48 && e <= 57;
}
function rP(e) {
  return e >= 65 && e <= 90;
}
function rL(e) {
  return e >= 97 && e <= 122;
}
function rD(e) {
  return rP(e) || rL(e);
}
function rN(e) {
  return e >= 128;
}
function rO(e) {
  return rD(e) || rN(e) || 95 === e;
}
function rM(e) {
  return e >= 0 && e <= 8 || 11 === e || e >= 14 && e <= 31 || 127 === e;
}
function rz(e) {
  return 10 === e || 13 === e || 12 === e;
}
function rI(e) {
  return rz(e) || 32 === e || 9 === e;
}
function rR(e, t) {
  return !(92 !== e || rz(t) || 0 === t);
}
let rq = Array(128);
for (let e = 0; e < rq.length; e++) rq[e] = rI(e) && 130 || rE(e) && 131 || rO(e) && 132 || rM(e) && 133 || e || 128;
rT.DigitCategory = 131;
rT.EofCategory = 128;
rT.NameStartCategory = 132;
rT.NonPrintableCategory = 133;
rT.WhiteSpaceCategory = 130;
rT.charCodeCategory = function (e) {
  return e < 128 ? rq[e] : 132;
};
rT.isBOM = function (e) {
  return 65279 === e || 65534 === e ? 1 : 0;
};
rT.isDigit = rE;
rT.isHexDigit = function (e) {
  return rE(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
};
rT.isIdentifierStart = function (e, t, r) {
  return 45 === e ? rO(t) || 45 === t || rR(t, r) : !!rO(e) || 92 === e && rR(e, t);
};
rT.isLetter = rD;
rT.isLowercaseLetter = rL;
rT.isName = function (e) {
  return rO(e) || rE(e) || 45 === e;
};
rT.isNameStart = rO;
rT.isNewline = rz;
rT.isNonAscii = rN;
rT.isNonPrintable = rM;
rT.isNumberStart = function (e, t, r) {
  return 43 === e || 45 === e ? rE(t) ? 2 : 46 === t && rE(r) ? 3 : 0 : 46 === e ? rE(t) ? 2 : 0 : rE(e) ? 1 : 0;
};
rT.isUppercaseLetter = rP;
rT.isValidEscape = rR;
rT.isWhiteSpace = rI;
var rB = {};
function rj(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function rF(e, t, r) {
  return 13 === r && 10 === rj(e, t + 1) ? 2 : 1;
}
function r_(e, t, r) {
  let n = e.charCodeAt(t);
  rT.isUppercaseLetter(n) && (n |= 32);
  return n === r;
}
function rU(e, t) {
  for (; t < e.length && rT.isDigit(e.charCodeAt(t)); t++);
  return t;
}
function rG(e, t) {
  if (t += 2, rT.isHexDigit(rj(e, t - 1))) {
    for (let r = Math.min(e.length, t + 5); t < r && rT.isHexDigit(rj(e, t)); t++);
    let r = rj(e, t);
    rT.isWhiteSpace(r) && (t += rF(e, t, r));
  }
  return t;
}
rB.cmpChar = r_;
rB.cmpStr = function (e, t, r, n) {
  if (r - t !== n.length || t < 0 || r > e.length) return !1;
  for (let a = t; a < r; a++) {
    let r = n.charCodeAt(a - t);
    let i = e.charCodeAt(a);
    if (rT.isUppercaseLetter(i) && (i |= 32), i !== r) return !1;
  }
  return !0;
};
rB.consumeBadUrlRemnants = function (e, t) {
  for (; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (41 === r) {
      t++;
      break;
    }
    rT.isValidEscape(r, rj(e, t + 1)) && (t = rG(e, t));
  }
  return t;
};
rB.consumeEscaped = rG;
rB.consumeName = function (e, t) {
  for (; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (!rT.isName(r)) {
      if (rT.isValidEscape(r, rj(e, t + 1))) {
        t = rG(e, t) - 1;
        continue;
      }
      break;
    }
  }
  return t;
};
rB.consumeNumber = function (e, t) {
  let r = e.charCodeAt(t);
  if ((43 === r || 45 === r) && (r = e.charCodeAt(t += 1)), rT.isDigit(r) && (t = rU(e, t + 1), r = e.charCodeAt(t)), 46 === r && rT.isDigit(e.charCodeAt(t + 1)) && (t += 2, t = rU(e, t)), r_(e, t, 101)) {
    let n = 0;
    (45 === (r = e.charCodeAt(t + 1)) || 43 === r) && (n = 1, r = e.charCodeAt(t + 2));
    rT.isDigit(r) && (t = rU(e, t + 1 + n + 1));
  }
  return t;
};
rB.decodeEscaped = function (e) {
  if (1 === e.length && !rT.isHexDigit(e.charCodeAt(0))) return e[0];
  let t = parseInt(e, 16);
  (0 === t || t >= 55296 && t <= 57343 || t > 1114111) && (t = 65533);
  return String.fromCodePoint(t);
};
rB.findDecimalNumberEnd = rU;
rB.findWhiteSpaceEnd = function (e, t) {
  for (; t < e.length && rT.isWhiteSpace(e.charCodeAt(t)); t++);
  return t;
};
rB.findWhiteSpaceStart = function (e, t) {
  for (; t >= 0 && rT.isWhiteSpace(e.charCodeAt(t)); t--);
  return t + 1;
};
rB.getNewlineLength = rF;
var rH = ["EOF-token", "ident-token", "function-token", "at-keyword-token", "hash-token", "string-token", "bad-string-token", "url-token", "bad-url-token", "delim-token", "number-token", "percentage-token", "dimension-token", "whitespace-token", "CDO-token", "CDC-token", "colon-token", "semicolon-token", "comma-token", "[-token", "]-token", "(-token", ")-token", "{-token", "}-token"];
var rW = {};
var rV = {};
function r$(e) {
  let t = e.source;
  let r = t.length;
  let n = t.length > 0 ? rT.isBOM(t.charCodeAt(0)) : 0;
  let a = rV.adoptBuffer(e.lines, r);
  let i = rV.adoptBuffer(e.columns, r);
  let o = e.startLine;
  let s = e.startColumn;
  for (let e = n; e < r; e++) {
    let n = t.charCodeAt(e);
    a[e] = o;
    i[e] = s++;
    (10 === n || 13 === n || 12 === n) && (13 === n && e + 1 < r && 10 === t.charCodeAt(e + 1) && (a[++e] = o, i[e] = s), o++, s = 1);
  }
  a[r] = o;
  i[r] = s;
  e.lines = a;
  e.columns = i;
  e.computed = !0;
}
rV.adoptBuffer = function (e = null, t) {
  return null === e || e.length < t ? new Uint32Array(Math.max(t + 1024, 16384)) : e;
};
rW.OffsetToLocation = class {
  constructor() {
    this.lines = null;
    this.columns = null;
    this.computed = !1;
  }
  setSource(e, t = 0, r = 1, n = 1) {
    this.source = e;
    this.startOffset = t;
    this.startLine = r;
    this.startColumn = n;
    this.computed = !1;
  }
  getLocation(e, t) {
    this.computed || r$(this);
    return {
      source: t,
      offset: this.startOffset + e,
      line: this.lines[e],
      column: this.columns[e]
    };
  }
  getLocationRange(e, t, r) {
    this.computed || r$(this);
    return {
      source: r,
      start: {
        offset: this.startOffset + e,
        line: this.lines[e],
        column: this.columns[e]
      },
      end: {
        offset: this.startOffset + t,
        line: this.lines[t],
        column: this.columns[t]
      }
    };
  }
};
var rX = {};
let rY = new Map([[rA.Function, rA.RightParenthesis], [rA.LeftParenthesis, rA.RightParenthesis], [rA.LeftSquareBracket, rA.RightSquareBracket], [rA.LeftCurlyBracket, rA.RightCurlyBracket]]);
rX.TokenStream = class {
  constructor(e, t) {
    this.setSource(e, t);
  }
  reset() {
    this.eof = !1;
    this.tokenIndex = -1;
    this.tokenType = 0;
    this.tokenStart = this.firstCharOffset;
    this.tokenEnd = this.firstCharOffset;
  }
  setSource(e = "", t = () => {}) {
    let r = (e = String(e || "")).length;
    let n = rV.adoptBuffer(this.offsetAndType, e.length + 1);
    let a = rV.adoptBuffer(this.balance, e.length + 1);
    let i = 0;
    let o = 0;
    let s = 0;
    let l = -1;
    for (this.offsetAndType = null, this.balance = null, t(e, (e, t, c) => {
      switch (e) {
        default:
          a[i] = r;
          break;
        case o:
          {
            let e = 0xffffff & s;
            for (o = (s = a[e]) >> 24, a[i] = e, a[e++] = i; e < i; e++) a[e] === r && (a[e] = i);
            break;
          }
        case rA.LeftParenthesis:
        case rA.Function:
        case rA.LeftSquareBracket:
        case rA.LeftCurlyBracket:
          a[i] = s;
          s = (o = rY.get(e)) << 24 | i;
      }
      n[i++] = e << 24 | c;
      -1 === l && (l = t);
    }), n[i] = rA.EOF << 24 | r, a[i] = r, a[r] = r; 0 !== s;) {
      let e = 0xffffff & s;
      s = a[e];
      a[e] = r;
    }
    this.source = e;
    this.firstCharOffset = -1 === l ? 0 : l;
    this.tokenCount = i;
    this.offsetAndType = n;
    this.balance = a;
    this.reset();
    this.next();
  }
  lookupType(e) {
    return (e += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e] >> 24 : rA.EOF;
  }
  lookupOffset(e) {
    return (e += this.tokenIndex) < this.tokenCount ? 0xffffff & this.offsetAndType[e - 1] : this.source.length;
  }
  lookupValue(e, t) {
    return (e += this.tokenIndex) < this.tokenCount && rB.cmpStr(this.source, 0xffffff & this.offsetAndType[e - 1], 0xffffff & this.offsetAndType[e], t);
  }
  getTokenStart(e) {
    return e === this.tokenIndex ? this.tokenStart : e > 0 ? e < this.tokenCount ? 0xffffff & this.offsetAndType[e - 1] : 0xffffff & this.offsetAndType[this.tokenCount] : this.firstCharOffset;
  }
  substrToCursor(e) {
    return this.source.substring(e, this.tokenStart);
  }
  isBalanceEdge(e) {
    return this.balance[this.tokenIndex] < e;
  }
  isDelim(e, t) {
    return t ? this.lookupType(t) === rA.Delim && this.source.charCodeAt(this.lookupOffset(t)) === e : this.tokenType === rA.Delim && this.source.charCodeAt(this.tokenStart) === e;
  }
  skip(e) {
    let t = this.tokenIndex + e;
    t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = 0xffffff & this.offsetAndType[t - 1], t = this.offsetAndType[t], this.tokenType = t >> 24, this.tokenEnd = 0xffffff & t) : (this.tokenIndex = this.tokenCount, this.next());
  }
  next() {
    let e = this.tokenIndex + 1;
    e < this.tokenCount ? (this.tokenIndex = e, this.tokenStart = this.tokenEnd, e = this.offsetAndType[e], this.tokenType = e >> 24, this.tokenEnd = 0xffffff & e) : (this.eof = !0, this.tokenIndex = this.tokenCount, this.tokenType = rA.EOF, this.tokenStart = this.tokenEnd = this.source.length);
  }
  skipSC() {
    for (; this.tokenType === rA.WhiteSpace || this.tokenType === rA.Comment;) this.next();
  }
  skipUntilBalanced(e, t) {
    let r;
    let n;
    let a = e;
    e: for (; a < this.tokenCount && !((r = this.balance[a]) < e); a++) switch (n = a > 0 ? 0xffffff & this.offsetAndType[a - 1] : this.firstCharOffset, t(this.source.charCodeAt(n))) {
      case 1:
        break e;
      case 2:
        a++;
        break e;
      default:
        this.balance[r] === a && (a = r);
    }
    this.skip(a - this.tokenIndex);
  }
  forEachToken(e) {
    var _this = this;
    for (function () {
      let t = 0;
      let r = _this.firstCharOffset;
    }(); t < this.tokenCount; t++) {
      let n = r;
      let a = this.offsetAndType[t];
      let i = 0xffffff & a;
      let o = a >> 24;
      r = i;
      e(o, n, i, t);
    }
  }
  dump() {
    let e = Array(this.tokenCount);
    this.forEachToken((t, r, n, a) => {
      e[a] = {
        idx: a,
        type: rH[t],
        chunk: this.source.substring(r, n),
        balance: this.balance[a]
      };
    });
    return e;
  }
};
rC.AtKeyword = rA.AtKeyword;
rC.BadString = rA.BadString;
rC.BadUrl = rA.BadUrl;
rC.CDC = rA.CDC;
rC.CDO = rA.CDO;
rC.Colon = rA.Colon;
rC.Comma = rA.Comma;
rC.Comment = rA.Comment;
rC.Delim = rA.Delim;
rC.Dimension = rA.Dimension;
rC.EOF = rA.EOF;
rC.Function = rA.Function;
rC.Hash = rA.Hash;
rC.Ident = rA.Ident;
rC.LeftCurlyBracket = rA.LeftCurlyBracket;
rC.LeftParenthesis = rA.LeftParenthesis;
rC.LeftSquareBracket = rA.LeftSquareBracket;
rC.Number = rA.Number;
rC.Percentage = rA.Percentage;
rC.RightCurlyBracket = rA.RightCurlyBracket;
rC.RightParenthesis = rA.RightParenthesis;
rC.RightSquareBracket = rA.RightSquareBracket;
rC.Semicolon = rA.Semicolon;
rC.String = rA.String;
rC.Url = rA.Url;
rC.WhiteSpace = rA.WhiteSpace;
rC.tokenTypes = rA;
rC.DigitCategory = rT.DigitCategory;
rC.EofCategory = rT.EofCategory;
rC.NameStartCategory = rT.NameStartCategory;
rC.NonPrintableCategory = rT.NonPrintableCategory;
rC.WhiteSpaceCategory = rT.WhiteSpaceCategory;
rC.charCodeCategory = rT.charCodeCategory;
rC.isBOM = rT.isBOM;
rC.isDigit = rT.isDigit;
rC.isHexDigit = rT.isHexDigit;
rC.isIdentifierStart = rT.isIdentifierStart;
rC.isLetter = rT.isLetter;
rC.isLowercaseLetter = rT.isLowercaseLetter;
rC.isName = rT.isName;
rC.isNameStart = rT.isNameStart;
rC.isNewline = rT.isNewline;
rC.isNonAscii = rT.isNonAscii;
rC.isNonPrintable = rT.isNonPrintable;
rC.isNumberStart = rT.isNumberStart;
rC.isUppercaseLetter = rT.isUppercaseLetter;
rC.isValidEscape = rT.isValidEscape;
rC.isWhiteSpace = rT.isWhiteSpace;
rC.cmpChar = rB.cmpChar;
rC.cmpStr = rB.cmpStr;
rC.consumeBadUrlRemnants = rB.consumeBadUrlRemnants;
rC.consumeEscaped = rB.consumeEscaped;
rC.consumeName = rB.consumeName;
rC.consumeNumber = rB.consumeNumber;
rC.decodeEscaped = rB.decodeEscaped;
rC.findDecimalNumberEnd = rB.findDecimalNumberEnd;
rC.findWhiteSpaceEnd = rB.findWhiteSpaceEnd;
rC.findWhiteSpaceStart = rB.findWhiteSpaceStart;
rC.getNewlineLength = rB.getNewlineLength;
rC.tokenNames = rH;
rC.OffsetToLocation = rW.OffsetToLocation;
rC.TokenStream = rX.TokenStream;
rC.tokenize = function (e, t) {
  let r;
  function n(t) {
    return t < o ? e.charCodeAt(t) : 0;
  }
  function a() {
    if (l = rB.consumeNumber(e, l), rT.isIdentifierStart(n(l), n(l + 1), n(l + 2))) {
      r = rA.Dimension;
      l = rB.consumeName(e, l);
      return;
    }
    if (37 === n(l)) {
      r = rA.Percentage;
      l++;
      return;
    }
    r = rA.Number;
  }
  function i() {
    let t = l;
    if (l = rB.consumeName(e, l), rB.cmpStr(e, t, l, "url") && 40 === n(l)) {
      if (34 === n(l = rB.findWhiteSpaceEnd(e, l + 1)) || 39 === n(l)) {
        r = rA.Function;
        l = t + 4;
        return;
      }
      (function () {
        for (r = rA.Url, l = rB.findWhiteSpaceEnd(e, l); l < e.length; l++) {
          let t = e.charCodeAt(l);
          switch (rT.charCodeCategory(t)) {
            case 41:
              l++;
              return;
            case rT.WhiteSpaceCategory:
              if (41 === n(l = rB.findWhiteSpaceEnd(e, l)) || l >= e.length) {
                l < e.length && l++;
                return;
              }
              l = rB.consumeBadUrlRemnants(e, l);
              r = rA.BadUrl;
              return;
            case 34:
            case 39:
            case 40:
            case rT.NonPrintableCategory:
              l = rB.consumeBadUrlRemnants(e, l);
              r = rA.BadUrl;
              return;
            case 92:
              if (rT.isValidEscape(t, n(l + 1))) {
                l = rB.consumeEscaped(e, l) - 1;
                break;
              }
              l = rB.consumeBadUrlRemnants(e, l);
              r = rA.BadUrl;
              return;
          }
        }
      })();
      return;
    }
    if (40 === n(l)) {
      r = rA.Function;
      l++;
      return;
    }
    r = rA.Ident;
  }
  let o = (e = String(e || "")).length;
  let s = rT.isBOM(n(0));
  let l = s;
  for (; l < o;) {
    let o = e.charCodeAt(l);
    switch (rT.charCodeCategory(o)) {
      case rT.WhiteSpaceCategory:
        r = rA.WhiteSpace;
        l = rB.findWhiteSpaceEnd(e, l + 1);
        break;
      case 34:
      case 39:
        (function (t) {
          for (t || (t = n(l++)), r = rA.String; l < e.length; l++) {
            let a = e.charCodeAt(l);
            switch (rT.charCodeCategory(a)) {
              case t:
                l++;
                return;
              case rT.WhiteSpaceCategory:
                if (rT.isNewline(a)) {
                  l += rB.getNewlineLength(e, l, a);
                  r = rA.BadString;
                  return;
                }
                break;
              case 92:
                if (l === e.length - 1) break;
                let i = n(l + 1);
                rT.isNewline(i) ? l += rB.getNewlineLength(e, l + 1, i) : rT.isValidEscape(a, i) && (l = rB.consumeEscaped(e, l) - 1);
            }
          }
        })();
        break;
      case 35:
        rT.isName(n(l + 1)) || rT.isValidEscape(n(l + 1), n(l + 2)) ? (r = rA.Hash, l = rB.consumeName(e, l + 1)) : (r = rA.Delim, l++);
        break;
      case 40:
        r = rA.LeftParenthesis;
        l++;
        break;
      case 41:
        r = rA.RightParenthesis;
        l++;
        break;
      case 43:
      case 46:
        rT.isNumberStart(o, n(l + 1), n(l + 2)) ? a() : (r = rA.Delim, l++);
        break;
      case 44:
        r = rA.Comma;
        l++;
        break;
      case 45:
        rT.isNumberStart(o, n(l + 1), n(l + 2)) ? a() : 45 === n(l + 1) && 62 === n(l + 2) ? (r = rA.CDC, l += 3) : rT.isIdentifierStart(o, n(l + 1), n(l + 2)) ? i() : (r = rA.Delim, l++);
        break;
      case 47:
        42 === n(l + 1) ? (r = rA.Comment, l = -1 === (l = e.indexOf("*/", l + 2)) ? e.length : l + 2) : (r = rA.Delim, l++);
        break;
      case 58:
        r = rA.Colon;
        l++;
        break;
      case 59:
        r = rA.Semicolon;
        l++;
        break;
      case 60:
        33 === n(l + 1) && 45 === n(l + 2) && 45 === n(l + 3) ? (r = rA.CDO, l += 4) : (r = rA.Delim, l++);
        break;
      case 64:
        rT.isIdentifierStart(n(l + 1), n(l + 2), n(l + 3)) ? (r = rA.AtKeyword, l = rB.consumeName(e, l + 1)) : (r = rA.Delim, l++);
        break;
      case 91:
        r = rA.LeftSquareBracket;
        l++;
        break;
      case 92:
        rT.isValidEscape(o, n(l + 1)) ? i() : (r = rA.Delim, l++);
        break;
      case 93:
        r = rA.RightSquareBracket;
        l++;
        break;
      case 123:
        r = rA.LeftCurlyBracket;
        l++;
        break;
      case 125:
        r = rA.RightCurlyBracket;
        l++;
        break;
      case rT.DigitCategory:
        a();
        break;
      case rT.NameStartCategory:
        i();
        break;
      default:
        r = rA.Delim;
        l++;
    }
    t(r, s, s = l);
  }
};
var rK = {};
var rQ = {};
let rZ = null;
class rJ {
  static createItem(e) {
    return {
      prev: null,
      next: null,
      data: e
    };
  }
  constructor() {
    this.head = null;
    this.tail = null;
    this.cursor = null;
  }
  createItem(e) {
    return rJ.createItem(e);
  }
  allocateCursor(e, t) {
    let r;
    null !== rZ ? (r = rZ, rZ = rZ.cursor, r.prev = e, r.next = t, r.cursor = this.cursor) : r = {
      prev: e,
      next: t,
      cursor: this.cursor
    };
    this.cursor = r;
    return r;
  }
  releaseCursor() {
    let {
      cursor
    } = this;
    this.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = rZ;
    rZ = cursor;
  }
  updateCursors(e, t, r, n) {
    let {
      cursor
    } = this;
    for (; null !== cursor;) {
      cursor.prev === e && (cursor.prev = t);
      cursor.next === r && (cursor.next = n);
      a = cursor.cursor;
    }
  }
  *[Symbol.iterator]() {
    for (let e = this.head; null !== e; e = e.next) yield e.data;
  }
  get size() {
    let e = 0;
    for (let t = this.head; null !== t; t = t.next) e++;
    return e;
  }
  get isEmpty() {
    return null === this.head;
  }
  get first() {
    return this.head && this.head.data;
  }
  get last() {
    return this.tail && this.tail.data;
  }
  fromArray(e) {
    let t = null;
    for (let r of (this.head = null, e)) {
      let e = rJ.createItem(r);
      null !== t ? t.next = e : this.head = e;
      e.prev = t;
      t = e;
    }
    this.tail = t;
    return this;
  }
  toArray() {
    return [...this];
  }
  toJSON() {
    return [...this];
  }
  forEach(e, t = this) {
    let r = this.allocateCursor(null, this.head);
    for (; null !== r.next;) {
      let n = r.next;
      r.next = n.next;
      e.call(t, n.data, n, this);
    }
    this.releaseCursor();
  }
  forEachRight(e, t = this) {
    let r = this.allocateCursor(this.tail, null);
    for (; null !== r.prev;) {
      let n = r.prev;
      r.prev = n.prev;
      e.call(t, n.data, n, this);
    }
    this.releaseCursor();
  }
  reduce(e, t, r = this) {
    let n;
    let a = this.allocateCursor(null, this.head);
    let i = t;
    for (; null !== a.next;) {
      n = a.next;
      a.next = n.next;
      i = e.call(r, i, n.data, n, this);
    }
    this.releaseCursor();
    return i;
  }
  reduceRight(e, t, r = this) {
    let n;
    let a = this.allocateCursor(this.tail, null);
    let i = t;
    for (; null !== a.prev;) {
      n = a.prev;
      a.prev = n.prev;
      i = e.call(r, i, n.data, n, this);
    }
    this.releaseCursor();
    return i;
  }
  some(e, t = this) {
    for (let r = this.head; null !== r; r = r.next) if (e.call(t, r.data, r, this)) return !0;
    return !1;
  }
  map(e, t = this) {
    let r = new rJ();
    for (let n = this.head; null !== n; n = n.next) r.appendData(e.call(t, n.data, n, this));
    return r;
  }
  filter(e, t = this) {
    let r = new rJ();
    for (let n = this.head; null !== n; n = n.next) e.call(t, n.data, n, this) && r.appendData(n.data);
    return r;
  }
  nextUntil(e, t, r = this) {
    if (null === e) return;
    let n = this.allocateCursor(null, e);
    for (; null !== n.next;) {
      let e = n.next;
      if (n.next = e.next, t.call(r, e.data, e, this)) break;
    }
    this.releaseCursor();
  }
  prevUntil(e, t, r = this) {
    if (null === e) return;
    let n = this.allocateCursor(e, null);
    for (; null !== n.prev;) {
      let e = n.prev;
      if (n.prev = e.prev, t.call(r, e.data, e, this)) break;
    }
    this.releaseCursor();
  }
  clear() {
    this.head = null;
    this.tail = null;
  }
  copy() {
    let e = new rJ();
    for (let t of this) e.appendData(t);
    return e;
  }
  prepend(e) {
    this.updateCursors(null, e, this.head, e);
    null !== this.head ? (this.head.prev = e, e.next = this.head) : this.tail = e;
    this.head = e;
    return this;
  }
  prependData(e) {
    return this.prepend(rJ.createItem(e));
  }
  append(e) {
    return this.insert(e);
  }
  appendData(e) {
    return this.insert(rJ.createItem(e));
  }
  insert(e, t = null) {
    if (null !== t) {
      if (this.updateCursors(t.prev, e, t, e), null === t.prev) {
        if (this.head !== t) throw Error("before doesn't belong to list");
        this.head = e;
        t.prev = e;
        e.next = t;
        this.updateCursors(null, e);
      } else {
        t.prev.next = e;
        e.prev = t.prev;
        t.prev = e;
        e.next = t;
      }
    } else {
      this.updateCursors(this.tail, e, null, e);
      null !== this.tail ? (this.tail.next = e, e.prev = this.tail) : this.head = e;
      this.tail = e;
    }
    return this;
  }
  insertData(e, t) {
    return this.insert(rJ.createItem(e), t);
  }
  remove(e) {
    if (this.updateCursors(e, e.prev, e, e.next), null !== e.prev) e.prev.next = e.next;else {
      if (this.head !== e) throw Error("item doesn't belong to list");
      this.head = e.next;
    }
    if (null !== e.next) e.next.prev = e.prev;else {
      if (this.tail !== e) throw Error("item doesn't belong to list");
      this.tail = e.prev;
    }
    e.prev = null;
    e.next = null;
    return e;
  }
  push(e) {
    this.insert(rJ.createItem(e));
  }
  pop() {
    return null !== this.tail ? this.remove(this.tail) : null;
  }
  unshift(e) {
    this.prepend(rJ.createItem(e));
  }
  shift() {
    return null !== this.head ? this.remove(this.head) : null;
  }
  prependList(e) {
    return this.insertList(e, this.head);
  }
  appendList(e) {
    return this.insertList(e);
  }
  insertList(e, t) {
    null === e.head || (null != t ? (this.updateCursors(t.prev, e.tail, t, e.head), null !== t.prev ? (t.prev.next = e.head, e.head.prev = t.prev) : this.head = e.head, t.prev = e.tail, e.tail.next = t) : (this.updateCursors(this.tail, e.tail, null, e.head), null !== this.tail ? (this.tail.next = e.head, e.head.prev = this.tail) : this.head = e.head, this.tail = e.tail), e.head = null, e.tail = null);
    return this;
  }
  replace(e, t) {
    "head" in t ? this.insertList(t, e) : this.insert(t, e);
    this.remove(e);
  }
}
rQ.List = rJ;
var r0 = {};
var r1 = {};
r1.createCustomError = function (e, t) {
  let r = Object.create(SyntaxError.prototype);
  let n = Error();
  return Object.assign(r, {
    name: e,
    message: t,
    get stack() {
      return (n.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}
`);
    }
  });
};
let r2 = "    ";
function r3({
  source: e,
  line: t,
  column: r
}, n) {
  function a(e, t) {
    return i.slice(e, t).map((t, r) => String(e + r + 1).padStart(l) + " |" + t).join("\n");
  }
  let i = e.split(/\r\n?|\n|\f/);
  let o = Math.max(1, t - n) - 1;
  let s = Math.min(t + n, i.length + 1);
  let l = Math.max(4, String(s).length) + 1;
  let c = 0;
  (r += (r2.length - 1) * (i[t - 1].substr(0, r - 1).match(/\t/g) || []).length) > 100 && (c = r - 60 + 3, r = 58);
  for (let e = o; e <= s; e++) e >= 0 && e < i.length && (i[e] = i[e].replace(/\t/g, r2), i[e] = (c > 0 && i[e].length > c ? "\u2026" : "") + i[e].substr(c, 98) + (i[e].length > c + 100 - 1 ? "\u2026" : ""));
  return [a(o, t), Array(r + l + 2).join("-") + "^", a(t, s)].filter(Boolean).join("\n");
}
r0.SyntaxError = function (e, t, r, n, a) {
  return Object.assign(r1.createCustomError("SyntaxError", e), {
    source: t,
    offset: r,
    line: n,
    column: a,
    sourceFragment: e => r3({
      source: t,
      line: n,
      column: a
    }, isNaN(e) ? 0 : e),
    get formattedMessage() {
      return `Parse error: ${e}
` + r3({
        source: t,
        line: n,
        column: a
      }, 2);
    }
  });
};
var r4 = {};
r4.readSequence = function (e) {
  let t = this.createList();
  let r = !1;
  let n = {
    recognizer: e
  };
  for (; !this.eof;) {
    switch (this.tokenType) {
      case rA.Comment:
        this.next();
        continue;
      case rA.WhiteSpace:
        r = !0;
        this.next();
        continue;
    }
    let a = e.getNode.call(this, n);
    if (void 0 === a) break;
    r && (e.onWhiteSpace && e.onWhiteSpace.call(this, a, t, n), r = !1);
    t.push(a);
  }
  r && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, n);
  return t;
};
let r5 = () => {};
function r8(e) {
  let t = Object.create(null);
  for (let r in e) {
    let n = e[r];
    let a = n.parse || n;
    a && (t[r] = a);
  }
  return t;
}
rK.createParser = function (e) {
  let t = "";
  let r = "<unknown>";
  let n = !1;
  let a = r5;
  let i = !1;
  let o = new rW.OffsetToLocation();
  let s = Object.assign(new rX.TokenStream(), function (e) {
    let t = {
      context: Object.create(null),
      scope: Object.assign(Object.create(null), e.scope),
      atrule: r8(e.atrule),
      pseudo: r8(e.pseudo),
      node: r8(e.node)
    };
    for (let r in e.parseContext) switch (typeof e.parseContext[r]) {
      case "function":
        t.context[r] = e.parseContext[r];
        break;
      case "string":
        t.context[r] = function (e) {
          return function () {
            return this[e]();
          };
        }(e.parseContext[r]);
    }
    return {
      config: t,
      ...t,
      ...t.node
    };
  }(e || {}), {
    parseAtrulePrelude: !0,
    parseRulePrelude: !0,
    parseValue: !0,
    parseCustomProperty: !1,
    readSequence: r4.readSequence,
    consumeUntilBalanceEnd: () => 0,
    consumeUntilLeftCurlyBracket: e => 123 === e ? 1 : 0,
    consumeUntilLeftCurlyBracketOrSemicolon: e => 123 === e || 59 === e ? 1 : 0,
    consumeUntilExclamationMarkOrSemicolon: e => 33 === e || 59 === e ? 1 : 0,
    consumeUntilSemicolonIncluded: e => 59 === e ? 2 : 0,
    createList: () => new rQ.List(),
    createSingleNodeList: e => new rQ.List().appendData(e),
    getFirstListNode: e => e && e.first,
    getLastListNode: e => e && e.last,
    parseWithFallback(e, t) {
      let r = this.tokenIndex;
      try {
        return e.call(this);
      } catch (n) {
        if (i) throw n;
        let e = t.call(this, r);
        i = !0;
        a(n, e);
        i = !1;
        return e;
      }
    },
    lookupNonWSType(e) {
      let t;
      do if ((t = this.lookupType(e++)) !== rA.WhiteSpace) return t; while (0 !== t);
      return 0;
    },
    charCodeAt: e => e >= 0 && e < t.length ? t.charCodeAt(e) : 0,
    substring: (e, r) => t.substring(e, r),
    substrToCursor(e) {
      return this.source.substring(e, this.tokenStart);
    },
    cmpChar: (e, r) => rB.cmpChar(t, e, r),
    cmpStr: (e, r, n) => rB.cmpStr(t, e, r, n),
    consume(e) {
      let t = this.tokenStart;
      this.eat(e);
      return this.substrToCursor(t);
    },
    consumeFunctionName() {
      let e = t.substring(this.tokenStart, this.tokenEnd - 1);
      this.eat(rA.Function);
      return e;
    },
    consumeNumber(e) {
      let r = t.substring(this.tokenStart, rB.consumeNumber(t, this.tokenStart));
      this.eat(e);
      return r;
    },
    eat(e) {
      if (this.tokenType !== e) {
        let t = rH[e].slice(0, -6).replace(/-/g, " ").replace(/^./, e => e.toUpperCase());
        let r = `${/[[\](){}]/.test(t) ? `"${t}"` : t} is expected`;
        let n = this.tokenStart;
        switch (e) {
          case rA.Ident:
            this.tokenType === rA.Function || this.tokenType === rA.Url ? (n = this.tokenEnd - 1, r = "Identifier is expected but function found") : r = "Identifier is expected";
            break;
          case rA.Hash:
            this.isDelim(35) && (this.next(), n++, r = "Name is expected");
            break;
          case rA.Percentage:
            this.tokenType === rA.Number && (n = this.tokenEnd, r = "Percent sign is expected");
        }
        this.error(r, n);
      }
      this.next();
    },
    eatIdent(e) {
      (this.tokenType !== rA.Ident || !1 === this.lookupValue(0, e)) && this.error(`Identifier "${e}" is expected`);
      this.next();
    },
    eatDelim(e) {
      this.isDelim(e) || this.error(`Delim "${String.fromCharCode(e)}" is expected`);
      this.next();
    },
    getLocation: (e, t) => n ? o.getLocationRange(e, t, r) : null,
    getLocationFromList(e) {
      if (n) {
        let t = this.getFirstListNode(e);
        let n = this.getLastListNode(e);
        return o.getLocationRange(null !== t ? t.loc.start.offset - o.startOffset : this.tokenStart, null !== n ? n.loc.end.offset - o.startOffset : this.tokenStart, r);
      }
      return null;
    },
    error(e, r) {
      let n = void 0 !== r && r < t.length ? o.getLocation(r) : this.eof ? o.getLocation(rB.findWhiteSpaceStart(t, t.length - 1)) : o.getLocation(this.tokenStart);
      throw new r0.SyntaxError(e || "Unexpected input", t, n.offset, n.line, n.column);
    }
  });
  return Object.assign(function (e, l) {
    t = e;
    l = l || {};
    s.setSource(t, rC.tokenize);
    o.setSource(t, l.offset, l.line, l.column);
    r = l.filename || "<unknown>";
    n = !!l.positions;
    a = "function" == typeof l.onParseError ? l.onParseError : r5;
    i = !1;
    s.parseAtrulePrelude = !("parseAtrulePrelude" in l) || !!l.parseAtrulePrelude;
    s.parseRulePrelude = !("parseRulePrelude" in l) || !!l.parseRulePrelude;
    s.parseValue = !("parseValue" in l) || !!l.parseValue;
    s.parseCustomProperty = "parseCustomProperty" in l && !!l.parseCustomProperty;
    let {
      context = "default",
      onComment
    } = l;
    if (context in s.context == !1) throw Error("Unknown context `" + context + "`");
    "function" == typeof onComment && s.forEachToken((e, r, n) => {
      if (e === rA.Comment) {
        let e = s.getLocation(r, n);
        onComment(rB.cmpStr(t, n - 2, n, "*/") ? t.slice(r + 2, n - 2) : t.slice(r + 2, n), e);
      }
    });
    let d = s.context[context].call(s, l);
    s.eof || s.error();
    return d;
  }, {
    SyntaxError: r0.SyntaxError,
    config: s.config
  });
};
var r6 = {};
var r9 = {};
var r7 = {};
var ne = {};
var nt = {};
var nr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
nt.encode = function (e) {
  if (0 <= e && e < nr.length) return nr[e];
  throw TypeError("Must be between 0 and 63: " + e);
};
nt.decode = function (e) {
  return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1;
};
ne.encode = function (e) {
  var t;
  var r = "";
  var n = e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
  do {
    t = 31 & n;
    (n >>>= 5) > 0 && (t |= 32);
    r += nt.encode(t);
  } while (n > 0);
  return r;
};
ne.decode = function (e, t, r) {
  var n;
  var a;
  var i;
  var o;
  var s = e.length;
  var l = 0;
  var c = 0;
  do {
    if (t >= s) throw Error("Expected more digits in base 64 VLQ value.");
    if (-1 === (o = nt.decode(e.charCodeAt(t++)))) throw Error("Invalid base64 digit: " + e.charAt(t - 1));
    i = !!(32 & o);
    o &= 31;
    l += o << c;
    c += 5;
  } while (i);
  r.value = (a = (n = l) >> 1, (1 & n) == 1 ? -a : a);
  r.rest = t;
};
var nn = {};
!function (e) {
  e.getArg = function (e, t, r) {
    if (t in e) return e[t];
    if (3 == $$arguments.length) return r;
    throw Error('"' + t + '" is a required argument.');
  };
  var t;
  var r;
  var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
  var a = /^data:.+\,.+$/;
  function i(e) {
    var t = e.match(n);
    return t ? {
      scheme: t[1],
      auth: t[2],
      host: t[3],
      port: t[4],
      path: t[5]
    } : null;
  }
  function o(e) {
    var t = "";
    e.scheme && (t += e.scheme + ":");
    t += "//";
    e.auth && (t += e.auth + "@");
    e.host && (t += e.host);
    e.port && (t += ":" + e.port);
    e.path && (t += e.path);
    return t;
  }
  e.urlParse = i;
  e.urlGenerate = o;
  t = function (t) {
    var r = t;
    var n = i(t);
    if (n) {
      if (!n.path) return t;
      r = n.path;
    }
    for (a = e.isAbsolute(r), s = [], l = 0, c = 0, void 0;;) {
      var a;
      var s;
      var l;
      var c;
      if (l = c, -1 === (c = r.indexOf("/", l))) {
        s.push(r.slice(l));
        break;
      }
      for (s.push(r.slice(l, c)); c < r.length && "/" === r[c];) c++;
    }
    for (d = 0, c = s.length - 1, void 0; c >= 0; c--) {
      var u;
      var d;
      var c;
      "." === (u = s[c]) ? s.splice(c, 1) : ".." === u ? d++ : d > 0 && ("" === u ? (s.splice(c + 1, d), d = 0) : (s.splice(c, 2), d--));
    }
    return ("" === (r = s.join("/")) && (r = a ? "/" : "."), n) ? (n.path = r, o(n)) : r;
  };
  r = [];
  var s = function (e) {
    for (var n = 0; n < r.length; n++) if (r[n].input === e) {
      var a = r[0];
      r[0] = r[n];
      r[n] = a;
      return r[0].result;
    }
    var i = t(e);
    r.unshift({
      input: e,
      result: i
    });
    r.length > 32 && r.pop();
    return i;
  };
  function l(e, t) {
    "" === e && (e = ".");
    "" === t && (t = ".");
    var r = i(t);
    var n = i(e);
    if (n && (e = n.path || "/"), r && !r.scheme) {
      n && (r.scheme = n.scheme);
      return o(r);
    }
    if (r || t.match(a)) return t;
    if (n && !n.host && !n.path) {
      n.host = t;
      return o(n);
    }
    var l = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
    return n ? (n.path = l, o(n)) : l;
  }
  e.normalize = s;
  e.join = l;
  e.isAbsolute = function (e) {
    return "/" === e.charAt(0) || n.test(e);
  };
  e.relative = function (e, t) {
    "" === e && (e = ".");
    e = e.replace(/\/$/, "");
    for (var r = 0; 0 !== t.indexOf(e + "/");) {
      var n = e.lastIndexOf("/");
      if (n < 0 || (e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/)) return t;
      ++r;
    }
    return Array(r + 1).join("../") + t.substr(e.length + 1);
  };
  var c = !("__proto__" in Object.create(null));
  function u(e) {
    return e;
  }
  function d(e) {
    if (!e) return !1;
    var t = e.length;
    if (t < 9 || 95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
    for (var r = t - 10; r >= 0; r--) if (36 !== e.charCodeAt(r)) return !1;
    return !0;
  }
  function h(e, t) {
    return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1;
  }
  e.toSetString = c ? u : function (e) {
    return d(e) ? "$" + e : e;
  };
  e.fromSetString = c ? u : function (e) {
    return d(e) ? e.slice(1) : e;
  };
  e.compareByOriginalPositions = function (e, t, r) {
    var n = h(e.source, t.source);
    return 0 !== n || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) || r || 0 != (n = e.generatedColumn - t.generatedColumn) || 0 != (n = e.generatedLine - t.generatedLine) ? n : h(e.name, t.name);
  };
  e.compareByOriginalPositionsNoSource = function (e, t, r) {
    var n;
    return 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) || r || 0 != (n = e.generatedColumn - t.generatedColumn) || 0 != (n = e.generatedLine - t.generatedLine) ? n : h(e.name, t.name);
  };
  e.compareByGeneratedPositionsDeflated = function (e, t, r) {
    var n = e.generatedLine - t.generatedLine;
    return 0 !== n || 0 != (n = e.generatedColumn - t.generatedColumn) || r || 0 !== (n = h(e.source, t.source)) || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) ? n : h(e.name, t.name);
  };
  e.compareByGeneratedPositionsDeflatedNoLine = function (e, t, r) {
    var n = e.generatedColumn - t.generatedColumn;
    return 0 !== n || r || 0 !== (n = h(e.source, t.source)) || 0 != (n = e.originalLine - t.originalLine) || 0 != (n = e.originalColumn - t.originalColumn) ? n : h(e.name, t.name);
  };
  e.compareByGeneratedPositionsInflated = function (e, t) {
    var r = e.generatedLine - t.generatedLine;
    return 0 !== r || 0 != (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = h(e.source, t.source)) || 0 != (r = e.originalLine - t.originalLine) || 0 != (r = e.originalColumn - t.originalColumn) ? r : h(e.name, t.name);
  };
  e.parseSourceMapInput = function (e) {
    return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""));
  };
  e.computeSourceURL = function (e, t, r) {
    if (t = t || "", e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"), t = e + t), r) {
      var n = i(r);
      if (!n) throw Error("sourceMapURL could not be parsed");
      if (n.path) {
        var a = n.path.lastIndexOf("/");
        a >= 0 && (n.path = n.path.substring(0, a + 1));
      }
      t = l(o(n), t);
    }
    return s(t);
  };
}(nn);
var na = {};
var ni = Object.prototype.hasOwnProperty;
var no = "undefined" != typeof Map;
function ns() {
  this._array = [];
  this._set = no ? new Map() : Object.create(null);
}
ns.fromArray = function (e, t) {
  for (r = new ns(), n = 0, a = e.length, void 0; n < a; n++) {
    var r;
    var n;
    var a;
    r.add(e[n], t);
  }
  return r;
};
ns.prototype.size = function () {
  return no ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
ns.prototype.add = function (e, t) {
  var r = no ? e : nn.toSetString(e);
  var n = no ? this.has(e) : ni.call(this._set, r);
  var a = this._array.length;
  (!n || t) && this._array.push(e);
  n || (no ? this._set.set(e, a) : this._set[r] = a);
};
ns.prototype.has = function (e) {
  if (no) return this._set.has(e);
  var t = nn.toSetString(e);
  return ni.call(this._set, t);
};
ns.prototype.indexOf = function (e) {
  if (no) {
    var t = this._set.get(e);
    if (t >= 0) return t;
  } else {
    var r = nn.toSetString(e);
    if (ni.call(this._set, r)) return this._set[r];
  }
  throw Error('"' + e + '" is not in the set.');
};
ns.prototype.at = function (e) {
  if (e >= 0 && e < this._array.length) return this._array[e];
  throw Error("No element indexed by " + e);
};
ns.prototype.toArray = function () {
  return this._array.slice();
};
na.ArraySet = ns;
var nl = {};
function nc() {
  this._array = [];
  this._sorted = !0;
  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  };
}
nc.prototype.unsortedForEach = function (e, t) {
  this._array.forEach(e, t);
};
nc.prototype.add = function (e) {
  var t;
  var r;
  var n;
  var a;
  var i;
  (r = (t = this._last).generatedLine, n = e.generatedLine, a = t.generatedColumn, i = e.generatedColumn, n > r || n == r && i >= a || 0 >= nn.compareByGeneratedPositionsInflated(t, e)) ? this._last = e : this._sorted = !1;
  this._array.push(e);
};
nc.prototype.toArray = function () {
  this._sorted || (this._array.sort(nn.compareByGeneratedPositionsInflated), this._sorted = !0);
  return this._array;
};
nl.MappingList = nc;
var nu = na.ArraySet;
var nd = nl.MappingList;
function nh(e) {
  e || (e = {});
  this._file = nn.getArg(e, "file", null);
  this._sourceRoot = nn.getArg(e, "sourceRoot", null);
  this._skipValidation = nn.getArg(e, "skipValidation", !1);
  this._sources = new nu();
  this._names = new nu();
  this._mappings = new nd();
  this._sourcesContents = null;
}
nh.prototype._version = 3;
nh.fromSourceMap = function (e) {
  var t = e.sourceRoot;
  var r = new nh({
    file: e.file,
    sourceRoot: t
  });
  e.eachMapping(function (e) {
    var n = {
      generated: {
        line: e.generatedLine,
        column: e.generatedColumn
      }
    };
    null != e.source && (n.source = e.source, null != t && (n.source = nn.relative(t, n.source)), n.original = {
      line: e.originalLine,
      column: e.originalColumn
    }, null != e.name && (n.name = e.name));
    r.addMapping(n);
  });
  e.sources.forEach(function (n) {
    var a = n;
    null !== t && (a = nn.relative(t, n));
    r._sources.has(a) || r._sources.add(a);
    var i = e.sourceContentFor(n);
    null != i && r.setSourceContent(n, i);
  });
  return r;
};
nh.prototype.addMapping = function (e) {
  var t = nn.getArg(e, "generated");
  var r = nn.getArg(e, "original", null);
  var n = nn.getArg(e, "source", null);
  var a = nn.getArg(e, "name", null);
  this._skipValidation || this._validateMapping(t, r, n, a);
  null == n || (n = String(n), this._sources.has(n) || this._sources.add(n));
  null == a || (a = String(a), this._names.has(a) || this._names.add(a));
  this._mappings.add({
    generatedLine: t.line,
    generatedColumn: t.column,
    originalLine: null != r && r.line,
    originalColumn: null != r && r.column,
    source: n,
    name: a
  });
};
nh.prototype.setSourceContent = function (e, t) {
  var r = e;
  null != this._sourceRoot && (r = nn.relative(this._sourceRoot, r));
  null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[nn.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[nn.toSetString(r)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
};
nh.prototype.applySourceMap = function (e, t, r) {
  var n = t;
  if (null == t) {
    if (null == e.file) throw Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
    n = e.file;
  }
  var a = this._sourceRoot;
  null != a && (n = nn.relative(a, n));
  var i = new nu();
  var o = new nu();
  this._mappings.unsortedForEach(function (t) {
    if (t.source === n && null != t.originalLine) {
      var s = e.originalPositionFor({
        line: t.originalLine,
        column: t.originalColumn
      });
      null != s.source && (t.source = s.source, null != r && (t.source = nn.join(r, t.source)), null != a && (t.source = nn.relative(a, t.source)), t.originalLine = s.line, t.originalColumn = s.column, null != s.name && (t.name = s.name));
    }
    var l = t.source;
    null == l || i.has(l) || i.add(l);
    var c = t.name;
    null == c || o.has(c) || o.add(c);
  }, this);
  this._sources = i;
  this._names = o;
  e.sources.forEach(function (t) {
    var n = e.sourceContentFor(t);
    null != n && (null != r && (t = nn.join(r, t)), null != a && (t = nn.relative(a, t)), this.setSourceContent(t, n));
  }, this);
};
nh.prototype._validateMapping = function (e, t, r, n) {
  if (t && "number" != typeof t.line && "number" != typeof t.column) throw Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
  if ((!e || !("line" in e) || !("column" in e) || !(e.line > 0) || !(e.column >= 0) || t || r || n) && (!e || !("line" in e) || !("column" in e) || !t || !("line" in t) || !("column" in t) || !(e.line > 0) || !(e.column >= 0) || !(t.line > 0) || !(t.column >= 0) || !r)) throw Error("Invalid mapping: " + JSON.stringify({
    generated: e,
    source: r,
    original: t,
    name: n
  }));
};
nh.prototype._serializeMappings = function () {
  for (a = 0, i = 1, o = 0, s = 0, l = 0, c = 0, u = "", d = this._mappings.toArray(), h = 0, p = d.length, void 0; h < p; h++) {
    var e;
    var t;
    var r;
    var n;
    var a;
    var i;
    var o;
    var s;
    var l;
    var c;
    var u;
    var d;
    var h;
    var p;
    if (t = d[h], e = "", t.generatedLine !== i) for (a = 0; t.generatedLine !== i;) {
      e += ";";
      i++;
    } else if (h > 0) {
      if (!nn.compareByGeneratedPositionsInflated(t, d[h - 1])) continue;
      e += ",";
    }
    e += ne.encode(t.generatedColumn - a);
    a = t.generatedColumn;
    null != t.source && (n = this._sources.indexOf(t.source), e += ne.encode(n - c), c = n, e += ne.encode(t.originalLine - 1 - s), s = t.originalLine - 1, e += ne.encode(t.originalColumn - o), o = t.originalColumn, null != t.name && (r = this._names.indexOf(t.name), e += ne.encode(r - l), l = r));
    u += e;
  }
  return u;
};
nh.prototype._generateSourcesContent = function (e, t) {
  return e.map(function (e) {
    if (!this._sourcesContents) return null;
    null != t && (e = nn.relative(t, e));
    var r = nn.toSetString(e);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, r) ? this._sourcesContents[r] : null;
  }, this);
};
nh.prototype.toJSON = function () {
  var e = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  null != this._file && (e.file = this._file);
  null != this._sourceRoot && (e.sourceRoot = this._sourceRoot);
  this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot));
  return e;
};
nh.prototype.toString = function () {
  return JSON.stringify(this.toJSON());
};
r7.SourceMapGenerator = nh;
let np = new Set(["Atrule", "Selector", "Declaration"]);
r9.generateSourceMap = function (e) {
  let t = new r7.SourceMapGenerator();
  let r = {
    line: 1,
    column: 0
  };
  let n = {
    line: 0,
    column: 0
  };
  let a = {
    line: 1,
    column: 0
  };
  let i = {
    generated: a
  };
  let o = 1;
  let s = 0;
  let l = !1;
  let c = e.node;
  e.node = function (e) {
    if (e.loc && e.loc.start && np.has(e.type)) {
      let c = e.loc.start.line;
      let u = e.loc.start.column - 1;
      (n.line !== c || n.column !== u) && (n.line = c, n.column = u, r.line = o, r.column = s, l && (l = !1, (r.line !== a.line || r.column !== a.column) && t.addMapping(i)), l = !0, t.addMapping({
        source: e.loc.source,
        original: n,
        generated: r
      }));
    }
    c.call(this, e);
    l && np.has(e.type) && (a.line = o, a.column = s);
  };
  let u = e.emit;
  e.emit = function (e, t, r) {
    for (let t = 0; t < e.length; t++) 10 === e.charCodeAt(t) ? (o++, s = 0) : s++;
    u(e, t, r);
  };
  let d = e.result;
  e.result = function () {
    l && t.addMapping(i);
    return {
      css: d(),
      map: t
    };
  };
  return e;
};
var nm = {};
let nf = (e, t) => {
  if (e === rA.Delim && (e = t), "string" == typeof e) {
    let t = e.charCodeAt(0);
    return t > 127 ? 32768 : t << 8;
  }
  return e;
};
let ng = [[rA.Ident, rA.Ident], [rA.Ident, rA.Function], [rA.Ident, rA.Url], [rA.Ident, rA.BadUrl], [rA.Ident, "-"], [rA.Ident, rA.Number], [rA.Ident, rA.Percentage], [rA.Ident, rA.Dimension], [rA.Ident, rA.CDC], [rA.Ident, rA.LeftParenthesis], [rA.AtKeyword, rA.Ident], [rA.AtKeyword, rA.Function], [rA.AtKeyword, rA.Url], [rA.AtKeyword, rA.BadUrl], [rA.AtKeyword, "-"], [rA.AtKeyword, rA.Number], [rA.AtKeyword, rA.Percentage], [rA.AtKeyword, rA.Dimension], [rA.AtKeyword, rA.CDC], [rA.Hash, rA.Ident], [rA.Hash, rA.Function], [rA.Hash, rA.Url], [rA.Hash, rA.BadUrl], [rA.Hash, "-"], [rA.Hash, rA.Number], [rA.Hash, rA.Percentage], [rA.Hash, rA.Dimension], [rA.Hash, rA.CDC], [rA.Dimension, rA.Ident], [rA.Dimension, rA.Function], [rA.Dimension, rA.Url], [rA.Dimension, rA.BadUrl], [rA.Dimension, "-"], [rA.Dimension, rA.Number], [rA.Dimension, rA.Percentage], [rA.Dimension, rA.Dimension], [rA.Dimension, rA.CDC], ["#", rA.Ident], ["#", rA.Function], ["#", rA.Url], ["#", rA.BadUrl], ["#", "-"], ["#", rA.Number], ["#", rA.Percentage], ["#", rA.Dimension], ["#", rA.CDC], ["-", rA.Ident], ["-", rA.Function], ["-", rA.Url], ["-", rA.BadUrl], ["-", "-"], ["-", rA.Number], ["-", rA.Percentage], ["-", rA.Dimension], ["-", rA.CDC], [rA.Number, rA.Ident], [rA.Number, rA.Function], [rA.Number, rA.Url], [rA.Number, rA.BadUrl], [rA.Number, rA.Number], [rA.Number, rA.Percentage], [rA.Number, rA.Dimension], [rA.Number, "%"], [rA.Number, rA.CDC], ["@", rA.Ident], ["@", rA.Function], ["@", rA.Url], ["@", rA.BadUrl], ["@", "-"], ["@", rA.CDC], [".", rA.Number], [".", rA.Percentage], [".", rA.Dimension], ["+", rA.Number], ["+", rA.Percentage], ["+", rA.Dimension], ["/", "*"]];
let nb = ng.concat([[rA.Ident, rA.Hash], [rA.Dimension, rA.Hash], [rA.Hash, rA.Hash], [rA.AtKeyword, rA.LeftParenthesis], [rA.AtKeyword, rA.String], [rA.AtKeyword, rA.Colon], [rA.Percentage, rA.Percentage], [rA.Percentage, rA.Dimension], [rA.Percentage, rA.Function], [rA.Percentage, "-"], [rA.RightParenthesis, rA.Ident], [rA.RightParenthesis, rA.Function], [rA.RightParenthesis, rA.Percentage], [rA.RightParenthesis, rA.Dimension], [rA.RightParenthesis, rA.Hash], [rA.RightParenthesis, "-"]]);
function ny(e) {
  let t = new Set(e.map(([e, t]) => nf(e) << 16 | nf(t)));
  return function (e, r, n) {
    let a = nf(r, n);
    let i = n.charCodeAt(0);
    (45 === i && r !== rA.Ident && r !== rA.Function && r !== rA.CDC || 43 === i ? t.has(e << 16 | i << 8) : t.has(e << 16 | a)) && this.emit(" ", rA.WhiteSpace, !0);
    return a;
  };
}
let nk = ny(ng);
let nv = ny(nb);
function nw(e, t) {
  if ("function" == typeof t) {
    let r = null;
    e.children.forEach(e => {
      null !== r && t.call(this, r);
      this.node(e);
      r = e;
    });
    return;
  }
  e.children.forEach(this.node, this);
}
function nx(e) {
  rC.tokenize(e, (t, r, n) => {
    this.token(t, e.slice(r, n));
  });
}
nm.safe = nv;
nm.spec = nk;
r6.createGenerator = function (e) {
  let t = new Map();
  for (let r in e.node) {
    let n = e.node[r];
    "function" == typeof (n.generate || n) && t.set(r, n.generate || n);
  }
  return function (e, r) {
    let n = "";
    let a = 0;
    let i = {
      node(e) {
        if (t.has(e.type)) t.get(e.type).call(o, e);else throw Error("Unknown node type: " + e.type);
      },
      tokenBefore: nm.safe,
      token(e, t) {
        a = this.tokenBefore(a, e, t);
        this.emit(t, e, !1);
        e === rA.Delim && 92 === t.charCodeAt(0) && this.emit("\n", rA.WhiteSpace, !0);
      },
      emit(e) {
        n += e;
      },
      result: () => n
    };
    r && ("function" == typeof r.decorator && (i = r.decorator(i)), r.sourceMap && (i = r9.generateSourceMap(i)), r.mode in nm && (i.tokenBefore = nm[r.mode]));
    let o = {
      node: e => i.node(e),
      children: nw,
      token: (e, t) => i.token(e, t),
      tokenize: nx
    };
    i.node(e);
    return i.result();
  };
};
var nS = {};
nS.createConvertor = function (e) {
  return {
    fromPlainObject: t => (e(t, {
      enter(e) {
        e.children && e.children instanceof rQ.List == !1 && (e.children = new rQ.List().fromArray(e.children));
      }
    }), t),
    toPlainObject: t => (e(t, {
      leave(e) {
        e.children && e.children instanceof rQ.List && (e.children = e.children.toArray());
      }
    }), t)
  };
};
var nC = {};
let {
  hasOwnProperty: _hasOwnProperty4
} = Object.prototype;
let nT = function () {};
function nE(e) {
  return "function" == typeof e ? e : nT;
}
function nP(e, t) {
  return function (r, n, a) {
    r.type === t && e.call(this, r, n, a);
  };
}
function nL(e, t) {
  let r = e.fields.slice();
  let n = e.context;
  let a = "string" == typeof n;
  t && r.reverse();
  return function (e, i, o, s) {
    let l;
    for (let c of (a && (l = i[n], i[n] = e), r)) {
      let r = e[c.name];
      if (!c.nullable || r) {
        if ("list" === c.type) {
          if (t ? r.reduceRight(s, !1) : r.reduce(s, !1)) return !0;
        } else if (o(r)) return !0;
      }
    }
    a && (i[n] = l);
  };
}
function nD({
  StyleSheet: e,
  Atrule: t,
  Rule: r,
  Block: n,
  DeclarationList: a
}) {
  return {
    Atrule: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n
    },
    Rule: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n
    },
    Declaration: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n,
      DeclarationList: a
    }
  };
}
nC.createWalker = function (e) {
  let t = function (e) {
    let t = {};
    for (let r in e.node) if (_hasOwnProperty4.call(e.node, r)) {
      let n = e.node[r];
      if (!n.structure) throw Error("Missed `structure` field in `" + r + "` node type definition");
      t[r] = function (e, t) {
        let r = t.structure;
        let n = [];
        for (let e in r) {
          if (!1 === _hasOwnProperty4.call(r, e)) continue;
          let t = r[e];
          let a = {
            name: e,
            type: !1,
            nullable: !1
          };
          for (let e of (Array.isArray(t) || (t = [t]), t)) null === e ? a.nullable = !0 : "string" == typeof e ? a.type = "node" : Array.isArray(e) && (a.type = "list");
          a.type && n.push(a);
        }
        return n.length ? {
          context: t.walkContext,
          fields: n
        } : null;
      }(0, n);
    }
    return t;
  }(e);
  let r = {};
  let n = {};
  let a = Symbol("break-walk");
  let i = Symbol("skip-node");
  for (let e in t) _hasOwnProperty4.call(t, e) && null !== t[e] && (r[e] = nL(t[e], !1), n[e] = nL(t[e], !0));
  let o = nD(r);
  let s = nD(n);
  let l = function (e, l) {
    function c(e, t, r) {
      let n = u.call(m, e, t, r);
      return n === a || n !== i && (!!(h.hasOwnProperty(e.type) && h[e.type](e, m, c, p)) || d.call(m, e, t, r) === a);
    }
    let u = nT;
    let d = nT;
    let h = r;
    let p = (e, t, r, n) => e || c(t, r, n);
    let m = {
      break: a,
      skip: i,
      root: e,
      stylesheet: null,
      atrule: null,
      atrulePrelude: null,
      rule: null,
      selector: null,
      block: null,
      declaration: null,
      function: null
    };
    if ("function" == typeof l) u = l;else if (l && (u = nE(l.enter), d = nE(l.leave), l.reverse && (h = n), l.visit)) {
      if (o.hasOwnProperty(l.visit)) h = l.reverse ? s[l.visit] : o[l.visit];else if (!t.hasOwnProperty(l.visit)) throw Error("Bad value `" + l.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
      u = nP(u, l.visit);
      d = nP(d, l.visit);
    }
    if (u === nT && d === nT) throw Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    c(e);
  };
  l.$$break = a;
  l.skip = i;
  l.find = function (e, t) {
    let r = null;
    l(e, function (e, n, i) {
      if (t.call(this, e, n, i)) {
        r = e;
        return a;
      }
    });
    return r;
  };
  l.findLast = function (e, t) {
    let r = null;
    l(e, {
      reverse: !0,
      enter(e, n, i) {
        if (t.call(this, e, n, i)) {
          r = e;
          return a;
        }
      }
    });
    return r;
  };
  l.findAll = function (e, t) {
    let r = [];
    l(e, function (e, n, a) {
      t.call(this, e, n, a) && r.push(e);
    });
    return r;
  };
  return l;
};
var nN = {};
var nO = {};
var nM = {};
function nz(e) {
  return e;
}
nM.generate = function (e, t) {
  let r = nz;
  let n = !1;
  let a = !1;
  "function" == typeof t ? r = t : t && (n = !!t.forceBraces, a = !!t.compact, "function" == typeof t.decorate && (r = t.decorate));
  return function e(t, r, n, a) {
    let i;
    switch (t.type) {
      case "Group":
        i = function (t, r, n, a) {
          let i = " " === t.combinator || a ? t.combinator : " " + t.combinator + " ";
          let o = t.terms.map(t => e(t, r, n, a)).join(i);
          return t.explicit || n ? (a || "," === o[0] ? "[" : "[ ") + o + (a ? "]" : " ]") : o;
        }(t, r, n, a) + (t.disallowEmpty ? "!" : "");
        break;
      case "Multiplier":
        return e(t.term, r, n, a) + r(function (e) {
          let {
            min,
            max,
            comma
          } = e;
          return 0 === min && 0 === max ? comma ? "#?" : "*" : 0 === min && 1 === max ? "?" : 1 === min && 0 === max ? comma ? "#" : "+" : 1 === min && 1 === max ? "" : (comma ? "#" : "") + (min === max ? "{" + min + "}" : "{" + min + "," + (0 !== max ? max : "") + "}");
        }(t), t);
      case "Type":
        i = "<" + t.name + (t.opts ? r(function (e) {
          if ("Range" === e.type) return " [" + e.min + "," + e.max + "]";
          throw Error("Unknown node type `" + e.type + "`");
        }(t.opts), t.opts) : "") + ">";
        break;
      case "Property":
        i = "<'" + t.name + "'>";
        break;
      case "Keyword":
        i = t.name;
        break;
      case "AtKeyword":
        i = "@" + t.name;
        break;
      case "Function":
        i = t.name + "(";
        break;
      case "String":
      case "Token":
        i = t.value;
        break;
      case "Comma":
        i = ",";
        break;
      default:
        throw Error("Unknown node type `" + t.type + "`");
    }
    return r(i, t);
  }(e, r, n, a);
};
let nI = {
  offset: 0,
  line: 1,
  column: 1
};
function nR(e, t) {
  let r = e && e.loc && e.loc[t];
  return r ? "line" in r ? nq(r) : r : null;
}
function nq({
  offset: e,
  line: t,
  column: r
}, n) {
  let a = {
    offset: e,
    line: t,
    column: r
  };
  if (n) {
    let e = n.split(/\n|\r\n?|\f/);
    a.offset += n.length;
    a.line += e.length - 1;
    a.column = 1 === e.length ? a.column + n.length : e.pop().length + 1;
  }
  return a;
}
nO.SyntaxMatchError = function (e, t, r, n) {
  let a = r1.createCustomError("SyntaxMatchError", e);
  let {
    css,
    mismatchOffset,
    mismatchLength,
    start,
    end
  } = function (e, t) {
    let r;
    let n;
    let a = e.tokens;
    let i = e.longestMatch;
    let o = i < a.length && a[i].node || null;
    let s = o !== t ? o : null;
    let l = 0;
    let c = 0;
    let u = 0;
    let d = "";
    for (let e = 0; e < a.length; e++) {
      let t = a[e].value;
      e === i && (c = t.length, l = d.length);
      null !== s && a[e].node === s && (e <= i ? u++ : u = 0);
      d += t;
    }
    i === a.length || u > 1 ? (r = nR(s || t, "end") || nq(nI, d), n = nq(r)) : (r = nR(s, "start") || nq(nR(t, "start") || nI, d.slice(0, l)), n = nR(s, "end") || nq(r, d.substr(l, c)));
    return {
      css: d,
      mismatchOffset: l,
      mismatchLength: c,
      start: r,
      end: n
    };
  }(n, r);
  a.rawMessage = e;
  a.syntax = t ? nM.generate(t) : "<generic>";
  a.css = css;
  a.mismatchOffset = mismatchOffset;
  a.mismatchLength = mismatchLength;
  a.message = e + "\n  syntax: " + a.syntax + "\n   value: " + (css || "<empty string>") + "\n  --------" + Array(a.mismatchOffset + 1).join("-") + "^";
  Object.assign(a, start);
  a.loc = {
    source: r && r.loc && r.loc.source || "<unknown>",
    start,
    end
  };
  return a;
};
nO.SyntaxReferenceError = function (e, t) {
  let r = r1.createCustomError("SyntaxReferenceError", e + (t ? " `" + t + "`" : ""));
  r.reference = t;
  return r;
};
var nB = {};
let nj = new Map();
let nF = new Map();
function n_(e, t) {
  t = t || 0;
  return e.length - t >= 2 && 45 === e.charCodeAt(t) && 45 === e.charCodeAt(t + 1);
}
function nU(e, t) {
  if (t = t || 0, e.length - t >= 3 && 45 === e.charCodeAt(t) && 45 !== e.charCodeAt(t + 1)) {
    let r = e.indexOf("-", t + 2);
    if (-1 !== r) return e.substring(t, r + 1);
  }
  return "";
}
nB.isCustomProperty = n_;
nB.keyword = function (e) {
  if (nj.has(e)) return nj.get(e);
  let t = e.toLowerCase();
  let r = nj.get(t);
  if (void 0 === r) {
    let e = n_(t, 0);
    let n = e ? "" : nU(t, 0);
    r = Object.freeze({
      basename: t.substr(n.length),
      name: t,
      prefix: n,
      vendor: n,
      custom: e
    });
  }
  nj.set(e, r);
  return r;
};
nB.property = function (e) {
  if (nF.has(e)) return nF.get(e);
  let t = e;
  let r = e[0];
  "/" === r ? r = "/" === e[1] ? "//" : "/" : "_" !== r && "*" !== r && "$" !== r && "#" !== r && "+" !== r && "&" !== r && (r = "");
  let n = n_(t, r.length);
  if (!n && (t = t.toLowerCase(), nF.has(t))) {
    let r = nF.get(t);
    nF.set(e, r);
    return r;
  }
  let a = n ? "" : nU(t, r.length);
  let i = t.substr(0, r.length + a.length);
  let o = Object.freeze({
    basename: t.substr(i.length),
    name: t.substr(r.length),
    hack: r,
    vendor: a,
    prefix: i,
    custom: n
  });
  nF.set(e, o);
  return o;
};
nB.vendorPrefix = nU;
var nG = {};
nG.cssWideKeywords = ["initial", "inherit", "unset", "revert", "revert-layer"];
var nH = {};
function nW(e, t) {
  return null !== e && e.type === rA.Delim && e.value.charCodeAt(0) === t;
}
function nV(e, t, r) {
  for (; null !== e && (e.type === rA.WhiteSpace || e.type === rA.Comment);) e = r(++t);
  return t;
}
function n$(e, t, r, n) {
  if (!e) return 0;
  let a = e.value.charCodeAt(t);
  if (43 === a || 45 === a) {
    if (r) return 0;
    t++;
  }
  for (; t < e.value.length; t++) if (!rT.isDigit(e.value.charCodeAt(t))) return 0;
  return n + 1;
}
function nX(e, t, r) {
  let n = !1;
  let a = nV(e, t, r);
  if (null === (e = r(a))) return t;
  if (e.type !== rA.Number) {
    if (!(nW(e, 43) || nW(e, 45))) return t;
    if (n = !0, a = nV(r(++a), a, r), r(a) || e.type !== rA.Number) return 0;
  }
  if (!n) {
    let t = e.value.charCodeAt(0);
    if (43 !== t && 45 !== t) return 0;
  }
  return n$(e, n ? 0 : 1, n, a);
}
function nY(e, t) {
  return null !== e && e.type === rA.Delim && e.value.charCodeAt(0) === t;
}
function nK(e, t, r) {
  let n = 0;
  for (let a = t; a < e.value.length; a++) {
    let i = e.value.charCodeAt(a);
    if (45 === i && r && 0 !== n) {
      nK(e, t + n + 1, !1);
      return 6;
    }
    if (!rT.isHexDigit(i) || ++n > 6) return 0;
  }
  return n;
}
function nQ(e, t, r) {
  if (!e) return 0;
  for (; nY(r(t), 63);) {
    if (++e > 6) return 0;
    t++;
  }
  return t;
}
let nZ = ["calc(", "-moz-calc(", "-webkit-calc("];
let nJ = new Map([[rA.Function, rA.RightParenthesis], [rA.LeftParenthesis, rA.RightParenthesis], [rA.LeftSquareBracket, rA.RightSquareBracket], [rA.LeftCurlyBracket, rA.RightCurlyBracket]]);
function n0(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function n1(e, t) {
  return rB.cmpStr(e, 0, e.length, t);
}
function n2(e, t) {
  for (let r = 0; r < t.length; r++) if (n1(e, t[r])) return !0;
  return !1;
}
function n3(e, t) {
  return t === e.length - 2 && 92 === n0(e, t) && rT.isDigit(n0(e, t + 1));
}
function n4(e, t, r) {
  if (e && "Range" === e.type) {
    let n = Number(void 0 !== r && r !== t.length ? t.substr(0, r) : t);
    if (isNaN(n) || null !== e.min && n < e.min && "string" != typeof e.min || null !== e.max && n > e.max && "string" != typeof e.max) return !0;
  }
  return !1;
}
function n5(e) {
  return function (t, r, n) {
    return null === t ? 0 : t.type === rA.Function && n2(t.value, nZ) ? function (e, t) {
      let r = 0;
      let n = [];
      let a = 0;
      t: do {
        switch (e.type) {
          case rA.RightCurlyBracket:
          case rA.RightParenthesis:
          case rA.RightSquareBracket:
            if (e.type !== r) break t;
            if (r = n.pop(), 0 === n.length) {
              a++;
              break t;
            }
            break;
          case rA.Function:
          case rA.LeftParenthesis:
          case rA.LeftSquareBracket:
          case rA.LeftCurlyBracket:
            n.push(r);
            r = nJ.get(e.type);
        }
        a++;
      } while (e = t(a));
      return a;
    }(t, r) : e(t, r, n);
  };
}
function n8(e) {
  return function (t) {
    return null === t || t.type !== e ? 0 : 1;
  };
}
function n6(e) {
  e && (e = new Set(e));
  return function (t, r, n) {
    if (null === t || t.type !== rA.Dimension) return 0;
    let a = rB.consumeNumber(t.value, 0);
    if (null !== e) {
      let r = t.value.indexOf("\\", a);
      let n = -1 !== r && n3(t.value, r) ? t.value.substring(a, r) : t.value.substr(a);
      if (!1 === e.has(n.toLowerCase())) return 0;
    }
    return n4(n, t.value, a) ? 0 : 1;
  };
}
function n9(e) {
  "function" != typeof e && (e = function () {
    return 0;
  });
  return function (t, r, n) {
    return null !== t && t.type === rA.Number && 0 === Number(t.value) ? 1 : e(t, r, n);
  };
}
let n7 = {
  "ident-token": n8(rA.Ident),
  "function-token": n8(rA.Function),
  "at-keyword-token": n8(rA.AtKeyword),
  "hash-token": n8(rA.Hash),
  "string-token": n8(rA.String),
  "bad-string-token": n8(rA.BadString),
  "url-token": n8(rA.Url),
  "bad-url-token": n8(rA.BadUrl),
  "delim-token": n8(rA.Delim),
  "number-token": n8(rA.Number),
  "percentage-token": n8(rA.Percentage),
  "dimension-token": n8(rA.Dimension),
  "whitespace-token": n8(rA.WhiteSpace),
  "CDO-token": n8(rA.CDO),
  "CDC-token": n8(rA.CDC),
  "colon-token": n8(rA.Colon),
  "semicolon-token": n8(rA.Semicolon),
  "comma-token": n8(rA.Comma),
  "[-token": n8(rA.LeftSquareBracket),
  "]-token": n8(rA.RightSquareBracket),
  "(-token": n8(rA.LeftParenthesis),
  ")-token": n8(rA.RightParenthesis),
  "{-token": n8(rA.LeftCurlyBracket),
  "}-token": n8(rA.RightCurlyBracket)
};
let ae = {
  string: n8(rA.String),
  ident: n8(rA.Ident),
  percentage: n5(function (e, t, r) {
    return null === e || e.type !== rA.Percentage || n4(r, e.value, e.value.length - 1) ? 0 : 1;
  }),
  zero: n9(),
  number: n5(function (e, t, r) {
    if (null === e) return 0;
    let n = rB.consumeNumber(e.value, 0);
    return n !== e.value.length && !n3(e.value, n) || n4(r, e.value, n) ? 0 : 1;
  }),
  integer: n5(function (e, t, r) {
    if (null === e || e.type !== rA.Number) return 0;
    let n = 43 === n0(e.value, 0) || 45 === n0(e.value, 0) ? 1 : 0;
    for (; n < e.value.length; n++) if (!rT.isDigit(n0(e.value, n))) return 0;
    return n4(r, e.value, n) ? 0 : 1;
  }),
  "custom-ident": function (e) {
    if (null === e || e.type !== rA.Ident) return 0;
    let t = e.value.toLowerCase();
    return n2(t, nG.cssWideKeywords) || n1(t, "default") ? 0 : 1;
  },
  "custom-property-name": function (e) {
    return null === e || e.type !== rA.Ident || 45 !== n0(e.value, 0) || 45 !== n0(e.value, 1) ? 0 : 1;
  },
  "hex-color": function (e) {
    if (null === e || e.type !== rA.Hash) return 0;
    let t = e.value.length;
    if (4 !== t && 5 !== t && 7 !== t && 9 !== t) return 0;
    for (let r = 1; r < t; r++) if (!rT.isHexDigit(n0(e.value, r))) return 0;
    return 1;
  },
  "id-selector": function (e) {
    return null !== e && e.type === rA.Hash && rT.isIdentifierStart(n0(e.value, 1), n0(e.value, 2), n0(e.value, 3)) ? 1 : 0;
  },
  "an-plus-b": function (e, t) {
    let r = 0;
    if (!e) return 0;
    if (e.type === rA.Number) return n$(e, 0, !1, r);
    if (e.type === rA.Ident && 45 === e.value.charCodeAt(0)) {
      if (!rB.cmpChar(e.value, 1, 110)) return 0;
      switch (e.value.length) {
        case 2:
          return nX(t(++r), r, t);
        case 3:
          if (45 !== e.value.charCodeAt(2)) break;
          r = nV(t(++r), r, t);
          return n$(e = t(r), 0, !0, r);
        default:
          if (45 !== e.value.charCodeAt(2)) break;
          return n$(e, 3, !0, r);
      }
    } else if (e.type === rA.Ident || nW(e, 43) && t(r + 1).type === rA.Ident) {
      if (e.type !== rA.Ident && (e = t(++r)), null === e || !rB.cmpChar(e.value, 0, 110)) return 0;
      switch (e.value.length) {
        case 1:
          return nX(t(++r), r, t);
        case 2:
          if (45 !== e.value.charCodeAt(1)) break;
          r = nV(t(++r), r, t);
          return n$(e = t(r), 0, !0, r);
        default:
          if (45 !== e.value.charCodeAt(1)) break;
          return n$(e, 2, !0, r);
      }
    } else if (e.type === rA.Dimension) {
      let n = e.value.charCodeAt(0);
      let a = 43 === n || 45 === n ? 1 : 0;
      let i = a;
      for (; i < e.value.length && rT.isDigit(e.value.charCodeAt(i)); i++);
      return i !== a && rB.cmpChar(e.value, i, 110) ? i + 1 === e.value.length ? nX(t(++r), r, t) : 45 !== e.value.charCodeAt(i + 1) ? 0 : i + 2 === e.value.length ? (r = nV(t(++r), r, t), n$(e = t(r), 0, !0, r)) : n$(e, i + 2, !0, r) : 0;
    }
    return 0;
  },
  urange: function (e, t) {
    let r = 0;
    if (t?.(++r) || e.type !== rA.Ident || !rB.cmpChar(e.value, 0, 117) || t(++r)) return 0;
    if (nY(e, 43)) return null === (e = t(++r)) ? 0 : e.type === rA.Ident ? nQ(nK(e, 0, !0), ++r, t) : nY(e, 63) ? nQ(1, ++r, t) : 0;
    if (e.type === rA.Number) {
      let n = nK(e, 1, !0);
      return 0 === n ? 0 : null === (e = t(++r)) ? r : e.type === rA.Dimension || e.type === rA.Number ? 45 === e.value.charCodeAt(0) && nK(e, 1, !1) ? r + 1 : 0 : nQ(n, r, t);
    }
    return e.type === rA.Dimension ? nQ(nK(e, 1, !0), ++r, t) : 0;
  },
  "declaration-value": function (e, t) {
    if (!e) return 0;
    let r = 0;
    let n = [];
    let a = 0;
    t: do {
      switch (e.type) {
        case rA.BadString:
        case rA.BadUrl:
          break t;
        case rA.RightCurlyBracket:
        case rA.RightParenthesis:
        case rA.RightSquareBracket:
          if (e.type !== r) break t;
          r = n.pop();
          break;
        case rA.Semicolon:
          if (0 === r) break t;
          break;
        case rA.Delim:
          if (0 === r && "!" === e.value) break t;
          break;
        case rA.Function:
        case rA.LeftParenthesis:
        case rA.LeftSquareBracket:
        case rA.LeftCurlyBracket:
          n.push(r);
          r = nJ.get(e.type);
      }
      a++;
    } while (e = t(a));
    return a;
  },
  "any-value": function (e, t) {
    if (!e) return 0;
    let r = 0;
    let n = [];
    let a = 0;
    t: do {
      switch (e.type) {
        case rA.BadString:
        case rA.BadUrl:
          break t;
        case rA.RightCurlyBracket:
        case rA.RightParenthesis:
        case rA.RightSquareBracket:
          if (e.type !== r) break t;
          r = n.pop();
          break;
        case rA.Function:
        case rA.LeftParenthesis:
        case rA.LeftSquareBracket:
        case rA.LeftCurlyBracket:
          n.push(r);
          r = nJ.get(e.type);
      }
      a++;
    } while (e = t(a));
    return a;
  }
};
function at(e) {
  let {
    angle,
    decibel,
    frequency,
    flex,
    length,
    resolution,
    semitones,
    time
  } = e || {};
  return {
    dimension: n5(n6(null)),
    angle: n5(n6(angle)),
    decibel: n5(n6(decibel)),
    frequency: n5(n6(frequency)),
    flex: n5(n6(flex)),
    length: n5(n9(n6(length))),
    resolution: n5(n6(resolution)),
    semitones: n5(n6(semitones)),
    time: n5(n6(time))
  };
}
nH.createDemensionTypes = at;
nH.createGenericTypes = function (e) {
  return {
    ...n7,
    ...ae,
    ...at(e)
  };
};
nH.productionTypes = ae;
nH.tokenTypes = n7;
var ar = {};
ar.angle = ["deg", "grad", "rad", "turn"];
ar.decibel = ["db"];
ar.flex = ["fr"];
ar.frequency = ["hz", "khz"];
ar.length = ["cm", "mm", "q", "in", "pt", "pc", "px", "em", "rem", "ex", "rex", "cap", "rcap", "ch", "rch", "ic", "ric", "lh", "rlh", "vw", "svw", "lvw", "dvw", "vh", "svh", "lvh", "dvh", "vi", "svi", "lvi", "dvi", "vb", "svb", "lvb", "dvb", "vmin", "svmin", "lvmin", "dvmin", "vmax", "svmax", "lvmax", "dvmax", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"];
ar.resolution = ["dpi", "dpcm", "dppx", "x"];
ar.semitones = ["st"];
ar.time = ["s", "ms"];
let an = {
  decorator(e) {
    let t = [];
    let r = null;
    return {
      ...e,
      node(t) {
        let n = r;
        r = t;
        e.node.call(this, t);
        r = n;
      },
      emit(e, n, a) {
        t.push({
          type: n,
          value: e,
          node: a ? null : r
        });
      },
      result: () => t
    };
  }
};
var aa = {};
var ai = {};
var ao = {};
var as = {};
as.SyntaxError = function (e, t, r) {
  return Object.assign(r1.createCustomError("SyntaxError", e), {
    input: t,
    offset: r,
    rawMessage: e,
    message: e + "\n  " + t + "\n--" + Array((r || t.length) + 1).join("-") + "^"
  });
};
ao.Tokenizer = class {
  constructor(e) {
    this.str = e;
    this.pos = 0;
  }
  charCodeAt(e) {
    return e < this.str.length ? this.str.charCodeAt(e) : 0;
  }
  charCode() {
    return this.charCodeAt(this.pos);
  }
  nextCharCode() {
    return this.charCodeAt(this.pos + 1);
  }
  nextNonWsCode(e) {
    return this.charCodeAt(this.findWsEnd(e));
  }
  findWsEnd(e) {
    for (; e < this.str.length; e++) {
      let t = this.str.charCodeAt(e);
      if (13 !== t && 10 !== t && 12 !== t && 32 !== t && 9 !== t) break;
    }
    return e;
  }
  substringToPos(e) {
    return this.str.substring(this.pos, this.pos = e);
  }
  eat(e) {
    this.charCode() !== e && this.error("Expect `" + String.fromCharCode(e) + "`");
    this.pos++;
  }
  peek() {
    return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
  }
  error(e) {
    throw new as.SyntaxError(e, this.str, this.pos);
  }
};
let al = new Uint8Array(128).map((e, t) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0);
let ac = {
  " ": 1,
  "&&": 2,
  "||": 3,
  "|": 4
};
function au(e) {
  return e.substringToPos(e.findWsEnd(e.pos));
}
function ad(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    let r = e.str.charCodeAt(t);
    if (r >= 128 || 0 === al[r]) break;
  }
  e.pos === t && e.error("Expect a keyword");
  return e.substringToPos(t);
}
function ah(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    let r = e.str.charCodeAt(t);
    if (r < 48 || r > 57) break;
  }
  e.pos === t && e.error("Expect a number");
  return e.substringToPos(t);
}
function ap(e) {
  let t = null;
  let r = null;
  e.eat(123);
  t = ah(e);
  44 === e.charCode() ? (e.pos++, 125 !== e.charCode() && (r = ah(e))) : r = t;
  e.eat(125);
  return {
    min: Number(t),
    max: r ? Number(r) : 0
  };
}
function am(e, t) {
  let r = function (e) {
    let t = null;
    let r = !1;
    switch (e.charCode()) {
      case 42:
        e.pos++;
        t = {
          min: 0,
          max: 0
        };
        break;
      case 43:
        e.pos++;
        t = {
          min: 1,
          max: 0
        };
        break;
      case 63:
        e.pos++;
        t = {
          min: 0,
          max: 1
        };
        break;
      case 35:
        e.pos++;
        r = !0;
        123 === e.charCode() ? t = ap(e) : 63 === e.charCode() ? (e.pos++, t = {
          min: 0,
          max: 0
        }) : t = {
          min: 1,
          max: 0
        };
        break;
      case 123:
        t = ap(e);
        break;
      default:
        return null;
    }
    return {
      type: "Multiplier",
      comma: r,
      min: t.min,
      max: t.max,
      term: null
    };
  }(e);
  return null !== r ? (r.term = t, 35 === e.charCode() && 43 === e.charCodeAt(e.pos - 1)) ? am(e, r) : r : t;
}
function af(e) {
  let t = e.peek();
  return "" === t ? null : {
    type: "Token",
    value: t
  };
}
ai.parse = function (e) {
  let t = new ao.Tokenizer(e);
  let r = function e(t) {
    let r;
    let n = [];
    let a = {};
    let i = null;
    let o = t.pos;
    for (; r = function (t) {
      let r = t.charCode();
      if (r < 128 && 1 === al[r]) return function (e) {
        let t = ad(e);
        return 40 === e.charCode() ? (e.pos++, {
          type: "Function",
          name: t
        }) : am(e, {
          type: "Keyword",
          name: t
        });
      }(t);
      switch (r) {
        case 93:
        case 42:
        case 43:
        case 63:
        case 35:
        case 33:
          break;
        case 91:
          let n;
          return am(t, (t.eat(91), n = e(t), t.eat(93), n.explicit = !0, 33 === t.charCode() && (t.pos++, n.disallowEmpty = !0), n));
        case 60:
          let a;
          return 39 === t.nextCharCode() ? (t.eat(60), t.eat(39), a = ad(t), t.eat(39), t.eat(62), am(t, {
            type: "Property",
            name: a
          })) : function (e) {
            let t;
            let r = null;
            if (e.eat(60), t = ad(e), 40 === e.charCode() && 41 === e.nextCharCode() && (e.pos += 2, t += "()"), 91 === e.charCodeAt(e.findWsEnd(e.pos))) {
              let t;
              let n;
              let a;
              au(e);
              t = null;
              n = null;
              a = 1;
              e.eat(91);
              45 === e.charCode() && (e.peek(), a = -1);
              -1 == a && 8734 === e.charCode() ? e.peek() : (t = a * Number(ah(e)), 0 !== al[e.charCode()] && (t += ad(e)));
              au(e);
              e.eat(44);
              au(e);
              8734 === e.charCode() ? e.peek() : (a = 1, 45 === e.charCode() && (e.peek(), a = -1), n = a * Number(ah(e)), 0 !== al[e.charCode()] && (n += ad(e)));
              e.eat(93);
              r = {
                type: "Range",
                min: t,
                max: n
              };
            }
            e.eat(62);
            return am(e, {
              type: "Type",
              name: t,
              opts: r
            });
          }(t);
        case 124:
          return {
            type: "Combinator",
            value: t.substringToPos(t.pos + (124 === t.nextCharCode() ? 2 : 1))
          };
        case 38:
          t.pos++;
          t.eat(38);
          return {
            type: "Combinator",
            value: "&&"
          };
        case 44:
          t.pos++;
          return {
            type: "Comma"
          };
        case 39:
          return am(t, {
            type: "String",
            value: function (e) {
              let t = e.str.indexOf("'", e.pos + 1);
              -1 === t && (e.pos = e.str.length, e.error("Expect an apostrophe"));
              return e.substringToPos(t + 1);
            }(t)
          });
        case 32:
        case 9:
        case 10:
        case 13:
        case 12:
          return {
            type: "Spaces",
            value: au(t)
          };
        case 64:
          if ((r = t.nextCharCode()) < 128 && 1 === al[r]) {
            t.pos++;
            return {
              type: "AtKeyword",
              name: ad(t)
            };
          }
          return af(t);
        case 123:
          if ((r = t.nextCharCode()) < 48 || r > 57) return af(t);
          break;
        default:
          return af(t);
      }
    }(t);) "Spaces" !== r.type && ("Combinator" === r.type ? ((null === i || "Combinator" === i.type) && (t.pos = o, t.error("Unexpected combinator")), a[r.value] = !0) : null !== i && "Combinator" !== i.type && (a[" "] = !0, n.push({
      type: "Combinator",
      value: " "
    })), n.push(r), i = r, o = t.pos);
    null !== i && "Combinator" === i.type && (t.pos -= o, t.error("Unexpected combinator"));
    return {
      type: "Group",
      terms: n,
      combinator: function (e, t) {
        let r;
        function n(e, t) {
          return {
            type: "Group",
            terms: e,
            combinator: t,
            disallowEmpty: !1,
            explicit: !1
          };
        }
        for (t = Object.keys(t).sort((e, t) => ac[e] - ac[t]); t.length > 0;) {
          r = t.shift();
          let a = 0;
          let i = 0;
          for (; a < e.length; a++) {
            let t = e[a];
            "Combinator" === t.type && (t.value === r ? (-1 === i && (i = a - 1), e.splice(a, 1), a--) : (-1 !== i && a - i > 1 && (e.splice(i, a - i, n(e.slice(i, a), r)), a = i + 1), i = -1));
          }
          -1 !== i && t.length && e.splice(i, a - i, n(e.slice(i, a), r));
        }
        return r;
      }(n, a) || " ",
      disallowEmpty: !1,
      explicit: !1
    };
  }(t);
  return (t.pos !== e.length && t.error("Unexpected input"), 1 === r.terms.length && "Group" === r.terms[0].type) ? r.terms[0] : r;
};
let ag = {
  type: "Match"
};
let ab = {
  type: "Mismatch"
};
let ay = {
  type: "DisallowEmpty"
};
function ak(e, t, r) {
  return t === ag && r === ab || e === ag && t === ag && r === ag ? e : ("If" === e.type && e.$$else === ab && t === ag && (t = e.then, e = e.match), {
    type: "If",
    match: e,
    then: t,
    else: r
  });
}
function av(e) {
  return e.length > 2 && 40 === e.charCodeAt(e.length - 2) && 41 === e.charCodeAt(e.length - 1);
}
function aw(e) {
  return "Keyword" === e.type || "AtKeyword" === e.type || "Function" === e.type || "Type" === e.type && av(e.name);
}
aa.DISALLOW_EMPTY = ay;
aa.MATCH = ag;
aa.MISMATCH = ab;
aa.buildMatchGraph = function (e, t) {
  "string" == typeof e && (e = ai.parse(e));
  return {
    type: "MatchGraph",
    match: function e(t) {
      if ("function" == typeof t) return {
        type: "Generic",
        fn: t
      };
      switch (t.type) {
        case "Group":
          {
            let r = function e(t, r, n) {
              switch (t) {
                case " ":
                  {
                    let e = ag;
                    for (let t = r.length - 1; t >= 0; t--) e = ak(r[t], e, ab);
                    return e;
                  }
                case "|":
                  {
                    let e = ab;
                    let t = null;
                    for (let n = r.length - 1; n >= 0; n--) {
                      let a = r[n];
                      if (aw(a) && (null === t && n > 0 && aw(r[n - 1]) && (e = ak({
                        type: "Enum",
                        map: t = Object.create(null)
                      }, ag, e)), null !== t)) {
                        let e = (av(a.name) ? a.name.slice(0, -1) : a.name).toLowerCase();
                        if (e in t == !1) {
                          t[e] = a;
                          continue;
                        }
                      }
                      t = null;
                      e = ak(a, ag, e);
                    }
                    return e;
                  }
                case "&&":
                  {
                    if (r.length > 5) return {
                      type: "MatchOnce",
                      terms: r,
                      all: !0
                    };
                    let n = ab;
                    for (let a = r.length - 1; a >= 0; a--) {
                      let i;
                      let o = r[a];
                      i = r.length > 1 ? e(t, r.filter(function (e) {
                        return e !== o;
                      }), !1) : ag;
                      n = ak(o, i, n);
                    }
                    return n;
                  }
                case "||":
                  {
                    if (r.length > 5) return {
                      type: "MatchOnce",
                      terms: r,
                      all: !1
                    };
                    let a = n ? ag : ab;
                    for (let n = r.length - 1; n >= 0; n--) {
                      let i;
                      let o = r[n];
                      i = r.length > 1 ? e(t, r.filter(function (e) {
                        return e !== o;
                      }), !0) : ag;
                      a = ak(o, i, a);
                    }
                    return a;
                  }
              }
            }(t.combinator, t.terms.map(e), !1);
            t.disallowEmpty && (r = ak(r, ay, ab));
            return r;
          }
        case "Multiplier":
          return function (t) {
            let r = ag;
            let n = e(t.term);
            if (0 === t.max) {
              n = ak(n, ay, ab);
              (r = ak(n, null, ab)).then = ak(ag, ag, r);
              t.comma && (r.then.$$else = ak({
                type: "Comma",
                syntax: t
              }, r, ab));
            } else for (let e = t.min || 1; e <= t.max; e++) {
              t.comma && r !== ag && (r = ak({
                type: "Comma",
                syntax: t
              }, r, ab));
              r = ak(n, ak(ag, ag, r), ab);
            }
            if (0 === t.min) r = ak(ag, ag, r);else for (let e = 0; e < t.min - 1; e++) {
              t.comma && r !== ag && (r = ak({
                type: "Comma",
                syntax: t
              }, r, ab));
              r = ak(n, r, ab);
            }
            return r;
          }(t);
        case "Type":
        case "Property":
          return {
            type: t.type,
            name: t.name,
            syntax: t
          };
        case "Keyword":
          return {
            type: t.type,
            name: t.name.toLowerCase(),
            syntax: t
          };
        case "AtKeyword":
          return {
            type: t.type,
            name: "@" + t.name.toLowerCase(),
            syntax: t
          };
        case "Function":
          return {
            type: t.type,
            name: t.name.toLowerCase() + "(",
            syntax: t
          };
        case "String":
          if (3 === t.value.length) return {
            type: "Token",
            value: t.value.charAt(1),
            syntax: t
          };
          return {
            type: t.type,
            value: t.value.substr(1, t.value.length - 2).replace(/\\'/g, "'"),
            syntax: t
          };
        case "Token":
          return {
            type: t.type,
            value: t.value,
            syntax: t
          };
        case "Comma":
          return {
            type: t.type,
            syntax: t
          };
        default:
          throw Error("Unknown node type:", t.type);
      }
    }(e),
    syntax: t || null,
    source: e
  };
};
var ax = {};
let {
  hasOwnProperty: _hasOwnProperty5
} = Object.prototype;
let aC = "Match";
function aA(e) {
  let t = null;
  let r = null;
  let n = e;
  for (; null !== n;) {
    r = n.prev;
    n.prev = t;
    t = n;
    n = r;
  }
  return t;
}
function aT(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let n = t.charCodeAt(r);
    let a = e.charCodeAt(r);
    if (a >= 65 && a <= 90 && (a |= 32), a !== n) return !1;
  }
  return !0;
}
function aE(e) {
  return null === e || e.type === rA.Comma || e.type === rA.Function || e.type === rA.LeftParenthesis || e.type === rA.LeftSquareBracket || e.type === rA.LeftCurlyBracket || e.type === rA.Delim && "?" !== e.value;
}
function aP(e) {
  return null === e || e.type === rA.RightParenthesis || e.type === rA.RightSquareBracket || e.type === rA.RightCurlyBracket || e.type === rA.Delim && "/" === e.value;
}
function aL(e, t, r) {
  function n() {
    do f = ++g < e.length ? e[g] : null; while (null !== f && (f.type === rA.WhiteSpace || f.type === rA.Comment));
  }
  function a(t) {
    let r = g + t;
    return r < e.length ? e[r] : null;
  }
  function i(e, t) {
    return {
      nextState: e,
      matchStack: y,
      syntaxStack: c,
      thenStack: u,
      tokenIndex: g,
      prev: t
    };
  }
  function o(e) {
    u = {
      nextState: e,
      matchStack: y,
      syntaxStack: c,
      prev: u
    };
  }
  function s() {
    y = {
      type: 1,
      syntax: t.syntax,
      token: f,
      prev: y
    };
    n();
    h = null;
    g > b && (b = g);
  }
  function l() {
    y = 2 === y.type ? y.prev : {
      type: 3,
      syntax: c.syntax,
      token: y.token,
      prev: y
    };
    c = c.prev;
  }
  let c = null;
  let u = null;
  let d = null;
  let h = null;
  let p = 0;
  let m = null;
  let f = null;
  let g = -1;
  let b = 0;
  let y = {
    type: 0,
    syntax: null,
    token: null,
    prev: null
  };
  for (n(); null === m && ++p < 15e3;) switch (t.type) {
    case "Match":
      if (null === u) {
        if (null !== f && (g !== e.length - 1 || "\\0" !== f.value && "\\9" !== f.value)) {
          t = aa.MISMATCH;
          break;
        }
        m = aC;
        break;
      }
      if ((t = u.nextState) === aa.DISALLOW_EMPTY) {
        if (u.matchStack === y) {
          t = aa.MISMATCH;
          break;
        }
        t = aa.MATCH;
      }
      for (; u.syntaxStack !== c;) l();
      u = u.prev;
      break;
    case "Mismatch":
      if (null !== h && !1 !== h) (null === d || g > d.tokenIndex) && (d = h, h = !1);else if (null === d) {
        m = "Mismatch";
        break;
      }
      t = d.nextState;
      u = d.thenStack;
      c = d.syntaxStack;
      y = d.matchStack;
      f = (g = d.tokenIndex) < e.length ? e[g] : null;
      d = d.prev;
      break;
    case "MatchGraph":
      t = t.match;
      break;
    case "If":
      t.$$else !== aa.MISMATCH && (d = i(t.$$else, d));
      t.then !== aa.MATCH && o(t.then);
      t = t.match;
      break;
    case "MatchOnce":
      t = {
        type: "MatchOnceBuffer",
        syntax: t,
        index: 0,
        mask: 0
      };
      break;
    case "MatchOnceBuffer":
      {
        let e = t.syntax.terms;
        if (t.index === e.length) {
          if (0 === t.mask || t.syntax.all) {
            t = aa.MISMATCH;
            break;
          }
          t = aa.MATCH;
          break;
        }
        if (t.mask === (1 << e.length) - 1) {
          t = aa.MATCH;
          break;
        }
        for (; t.index < e.length; t.index++) {
          let r = 1 << t.index;
          if ((t.mask & r) == 0) {
            d = i(t, d);
            o({
              type: "AddMatchOnce",
              syntax: t.syntax,
              mask: t.mask | r
            });
            t = e[t.index++];
            break;
          }
        }
        break;
      }
    case "AddMatchOnce":
      t = {
        type: "MatchOnceBuffer",
        syntax: t.syntax,
        index: 0,
        mask: t.mask
      };
      break;
    case "Enum":
      if (null !== f) {
        let e = f.value.toLowerCase();
        if (-1 !== e.indexOf("\\") && (e = e.replace(/\\[09].*$/, "")), _hasOwnProperty5.call(t.map, e)) {
          t = t.map[e];
          break;
        }
      }
      t = aa.MISMATCH;
      break;
    case "Generic":
      {
        let e = null !== c ? c.opts : null;
        let r = g + Math.floor(t.fn(f, a, e));
        if (!isNaN(r) && r > g) {
          for (; g < r;) s();
          t = aa.MATCH;
        } else t = aa.MISMATCH;
        break;
      }
    case "Type":
    case "Property":
      {
        let e = "Type" === t.type ? "types" : "properties";
        let n = _hasOwnProperty5.call(r, e) ? r[e][t.name] : null;
        if (!n || !n.match) throw Error("Bad syntax reference: " + ("Type" === t.type ? "<" + t.name + ">" : "<'" + t.name + "'>"));
        if (!1 !== h && null !== f && "Type" === t.type && ("custom-ident" === t.name && f.type === rA.Ident || "length" === t.name && "0" === f.value)) {
          null === h && (h = i(t, d));
          t = aa.MISMATCH;
          break;
        }
        c = {
          syntax: t.syntax,
          opts: t.syntax.opts || null !== c && c.opts || null,
          prev: c
        };
        y = {
          type: 2,
          syntax: t.syntax,
          token: y.token,
          prev: y
        };
        t = n.match;
        break;
      }
    case "Keyword":
      {
        let e = t.name;
        if (null !== f) {
          let r = f.value;
          if (-1 !== r.indexOf("\\") && (r = r.replace(/\\[09].*$/, "")), aT(r, e)) {
            s();
            t = aa.MATCH;
            break;
          }
        }
        t = aa.MISMATCH;
        break;
      }
    case "AtKeyword":
    case "Function":
      if (null !== f && aT(f.value, t.name)) {
        s();
        t = aa.MATCH;
        break;
      }
      t = aa.MISMATCH;
      break;
    case "Token":
      if (null !== f && f.value === t.value) {
        s();
        t = aa.MATCH;
        break;
      }
      t = aa.MISMATCH;
      break;
    case "Comma":
      null !== f && f.type === rA.Comma ? aE(y.token) ? t = aa.MISMATCH : (s(), t = aP(f) ? aa.MISMATCH : aa.MATCH) : t = aE(y.token) || aP(f) ? aa.MATCH : aa.MISMATCH;
      break;
    case "String":
      let n = "";
      let p = g;
      for (; p < e.length && n.length < t.value.length; p++) n += e[p].value;
      if (aT(n, t.value)) {
        for (; g < p;) s();
        t = aa.MATCH;
      } else t = aa.MISMATCH;
      break;
    default:
      throw Error("Unknown node type: " + t.type);
  }
  switch (m) {
    case null:
      console.warn("[csstree-match] BREAK after 15000 iterations");
      m = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)";
      y = null;
      break;
    case aC:
      for (; null !== c;) l();
      break;
    default:
      y = null;
  }
  return {
    tokens: e,
    reason: m,
    iterations: p,
    match: y,
    longestMatch: b
  };
}
ax.matchAsList = function (e, t, r) {
  let n = aL(e, t, r || {});
  if (null !== n.match) {
    let e = aA(n.match).prev;
    for (n.match = []; null !== e;) {
      switch (e.type) {
        case 2:
        case 3:
          n.match.push({
            type: e.type,
            syntax: e.syntax
          });
          break;
        default:
          n.match.push({
            token: e.token.value,
            node: e.token.node
          });
      }
      e = e.prev;
    }
  }
  return n;
};
ax.matchAsTree = function (e, t, r) {
  let n = aL(e, t, r || {});
  if (null === n.match) return n;
  let a = n.match;
  let i = n.match = {
    syntax: t.syntax || null,
    match: []
  };
  let o = [i];
  for (a = aA(a).prev; null !== a;) {
    switch (a.type) {
      case 2:
        i.match.push(i = {
          syntax: a.syntax,
          match: []
        });
        o.push(i);
        break;
      case 3:
        o.pop();
        i = o[o.length - 1];
        break;
      default:
        i.match.push({
          syntax: a.syntax || null,
          token: a.token.value,
          node: a.token.node
        });
    }
    a = a.prev;
  }
  return n;
};
var aD = {};
function aN(e) {
  function t(e) {
    return null !== e && ("Type" === e.type || "Property" === e.type || "Keyword" === e.type);
  }
  let r = null;
  null !== this.matched && function n(a) {
    if (Array.isArray(a.match)) {
      for (let e = 0; e < a.match.length; e++) if (n(a.match[e])) {
        t(a.syntax) && r.unshift(a.syntax);
        return !0;
      }
    } else if (a.node === e) {
      r = t(a.syntax) ? [a.syntax] : [];
      return !0;
    }
    return !1;
  }(this.matched);
  return r;
}
function aO(e, t, r) {
  let n = aN.call(e, t);
  return null !== n && n.some(r);
}
aD.getTrace = aN;
aD.isKeyword = function (e) {
  return aO(this, e, e => "Keyword" === e.type);
};
aD.isProperty = function (e, t) {
  return aO(this, e, e => "Property" === e.type && e.name === t);
};
aD.isType = function (e, t) {
  return aO(this, e, e => "Type" === e.type && e.name === t);
};
var aM = {};
aM.matchFragments = function (e, t, r, n, a) {
  let i = [];
  null !== r.matched && function r(o) {
    if (null !== o.syntax && o.syntax.type === n && o.syntax.name === a) {
      let r = function e(t) {
        return "node" in t ? t.node : e(t.match[0]);
      }(o);
      let n = function e(t) {
        return "node" in t ? t.node : e(t.match[t.match.length - 1]);
      }(o);
      e.syntax.walk(t, function (e, t, a) {
        if (e === r) {
          let e = new rQ.List();
          do {
            if (e.appendData(t.data), t.data === n) break;
            t = t.next;
          } while (null !== t);
          i.push({
            parent: a,
            nodes: e
          });
        }
      });
    }
    Array.isArray(o.match) && o.match.forEach(r);
  }(r.matched);
  return i;
};
var az = {};
let {
  hasOwnProperty
} = Object.prototype;
function aR(e) {
  return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0;
}
function aq(e) {
  return !!e && aR(e.offset) && aR(e.line) && aR(e.column);
}
az.getStructureFromConfig = function (e) {
  let t = {};
  if (e.node) {
    for (let r in e.node) if (hasOwnProperty.call(e.node, r)) {
      let n = e.node[r];
      if (n.structure) t[r] = function (e, t) {
        let r = t.structure;
        let n = {
          type: String,
          loc: !0
        };
        let a = {
          type: '"' + e + '"'
        };
        for (let t in r) {
          if (!1 === hasOwnProperty.call(r, t)) continue;
          let i = [];
          let o = n[t] = Array.isArray(r[t]) ? r[t].slice() : [r[t]];
          for (let r = 0; r < o.length; r++) {
            let n = o[r];
            if (n === String || n === Boolean) i.push(n.name);else if (null === n) i.push("null");else if ("string" == typeof n) i.push("<" + n + ">");else if (Array.isArray(n)) i.push("List");else throw Error("Wrong value `" + n + "` in `" + e + "." + t + "` structure definition");
          }
          a[t] = i.join(" | ");
        }
        return {
          docs: a,
          check: function (t, r) {
            if (!t || t.constructor !== Object) return r(t, "Type of node should be an Object");
            for (let a in t) {
              let i = !0;
              if (!1 !== hasOwnProperty.call(t, a)) {
                if ("type" === a) t.type !== e && r(t, "Wrong node type `" + t.type + "`, expected `" + e + "`");else if ("loc" === a) {
                  if (null === t.loc) continue;
                  if (t.loc && t.loc.constructor === Object) {
                    if ("string" != typeof t.loc.source) a += ".source";else if (aq(t.loc.start)) {
                      if (aq(t.loc.end)) continue;
                      a += ".end";
                    } else a += ".start";
                  }
                  i = !1;
                } else if (n.hasOwnProperty(a)) {
                  i = !1;
                  for (let e = 0; !i && e < n[a].length; e++) {
                    let r = n[a][e];
                    switch (r) {
                      case String:
                        i = "string" == typeof t[a];
                        break;
                      case Boolean:
                        i = "boolean" == typeof t[a];
                        break;
                      case null:
                        i = null === t[a];
                        break;
                      default:
                        "string" == typeof r ? i = t[a] && t[a].type === r : Array.isArray(r) && (i = t[a] instanceof rQ.List);
                    }
                  }
                } else r(t, "Unknown field `" + a + "` for " + e + " node type");
                i || r(t, "Bad value for `" + e + "." + a + "`");
              }
            }
            for (let a in n) hasOwnProperty.call(n, a) && !1 === hasOwnProperty.call(t, a) && r(t, "Field `" + e + "." + a + "` is missed");
          }
        };
      }(r, n);else throw Error("Missed `structure` field in `" + r + "` node type definition");
    }
  }
  return t;
};
var aB = {};
let aj = function () {};
function aF(e) {
  return "function" == typeof e ? e : aj;
}
aB.walk = function (e, t, r) {
  let n = aj;
  let a = aj;
  if ("function" == typeof t ? n = t : t && (n = aF(t.enter), a = aF(t.leave)), n === aj && a === aj) throw Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  !function e(t) {
    switch (n.call(r, t), t.type) {
      case "Group":
        t.terms.forEach(e);
        break;
      case "Multiplier":
        e(t.term);
        break;
      case "Type":
      case "Property":
      case "Keyword":
      case "AtKeyword":
      case "Function":
      case "String":
      case "Token":
      case "Comma":
        break;
      default:
        throw Error("Unknown type: " + t.type);
    }
    a.call(r, t);
  }(e);
};
let a_ = aa.buildMatchGraph(nG.cssWideKeywords.join(" | "));
function aU(e, t, r) {
  let n = {};
  for (let a in e) e[a].syntax && (n[a] = r ? e[a].syntax : nM.generate(e[a].syntax, {
    compact: t
  }));
  return n;
}
function aG(e, t, r) {
  return {
    matched: e,
    iterations: r,
    error: t,
    ...aD
  };
}
function aH(e, t, r, n) {
  var a;
  let i;
  a = e.syntax;
  let o = "string" == typeof r ? function (e) {
    let t = [];
    rC.tokenize(e, (r, n, a) => t.push({
      type: r,
      value: e.slice(n, a),
      node: null
    }));
    return t;
  }(r) : a.generate(r, an);
  return !function (e) {
    for (let t = 0; t < e.length; t++) if ("var(" === e[t].value.toLowerCase()) return !0;
    return !1;
  }(o) ? (n && (i = ax.matchAsTree(o, e.cssWideKeywordsSyntax, e)), n && i.match || (i = ax.matchAsTree(o, t.match, e)).match) ? aG(i.match, null, i.iterations) : aG(null, new nO.SyntaxMatchError(i.reason, t.syntax, r, i), i.iterations) : aG(null, Error("Matching for a tree with var() is not supported"));
}
function aW(e, t) {
  return "string" == typeof t && /^\s*\|/.test(t) ? "string" == typeof e ? e + t : t.replace(/^\s*\|\s*/, "") : t || null;
}
function aV(e, t) {
  let r = Object.create(null);
  for (let [n, a] of Object.entries(e)) if (a) for (let e of (r[n] = {}, Object.keys(a))) t.includes(e) && (r[n][e] = a[e]);
  return r;
}
nN.Lexer = class {
  constructor(e, t, r) {
    if (this.cssWideKeywordsSyntax = a_, this.syntax = t, this.generic = !1, this.units = {
      ...ar
    }, this.atrules = Object.create(null), this.properties = Object.create(null), this.types = Object.create(null), this.structure = r || az.getStructureFromConfig(e), e) {
      if (e.units) for (let t of Object.keys(ar)) Array.isArray(e.units[t]) && (this.units[t] = e.units[t]);
      if (e.types) for (let t in e.types) this.addType_(t, e.types[t]);
      if (e.generic) for (let [e, t] of (this.generic = !0, Object.entries(nH.createGenericTypes(this.units)))) this.addType_(e, t);
      if (e.atrules) for (let t in e.atrules) this.addAtrule_(t, e.atrules[t]);
      if (e.properties) for (let t in e.properties) this.addProperty_(t, e.properties[t]);
    }
  }
  checkStructure(e) {
    function t(e, t) {
      n.push({
        node: e,
        message: t
      });
    }
    let r = this.structure;
    let n = [];
    this.syntax.walk(e, function (e) {
      r.hasOwnProperty(e.type) ? r[e.type].check(e, t) : t(e, "Unknown node type `" + e.type + "`");
    });
    return !!n.length && n;
  }
  createDescriptor(e, t, r, n = null) {
    let a = {
      type: t,
      name: r
    };
    let i = {
      type: t,
      name: r,
      parent: n,
      serializable: "string" == typeof e || e && "string" == typeof e.type,
      syntax: null,
      match: null
    };
    "function" == typeof e ? i.match = aa.buildMatchGraph(e, a) : ("string" == typeof e ? Object.defineProperty(i, "syntax", {
      get: () => (Object.defineProperty(i, "syntax", {
        value: ai.parse(e)
      }), i.syntax)
    }) : i.syntax = e, Object.defineProperty(i, "match", {
      get: () => (Object.defineProperty(i, "match", {
        value: aa.buildMatchGraph(i.syntax, a)
      }), i.match)
    }));
    return i;
  }
  addAtrule_(e, t) {
    t && (this.atrules[e] = {
      type: "Atrule",
      name: e,
      prelude: t.prelude ? this.createDescriptor(t.prelude, "AtrulePrelude", e) : null,
      descriptors: t.descriptors ? Object.keys(t.descriptors).reduce((r, n) => (r[n] = this.createDescriptor(t.descriptors[n], "AtruleDescriptor", n, e), r), Object.create(null)) : null
    });
  }
  addProperty_(e, t) {
    t && (this.properties[e] = this.createDescriptor(t, "Property", e));
  }
  addType_(e, t) {
    t && (this.types[e] = this.createDescriptor(t, "Type", e));
  }
  checkAtruleName(e) {
    if (!this.getAtrule(e)) return new nO.SyntaxReferenceError("Unknown at-rule", "@" + e);
  }
  checkAtrulePrelude(e, t) {
    let r = this.checkAtruleName(e);
    if (r) return r;
    let n = this.getAtrule(e);
    return !n.prelude && t ? SyntaxError("At-rule `@" + e + "` should not contain a prelude") : !n.prelude || t || aH(this, n.prelude, "", !1).matched ? void 0 : SyntaxError("At-rule `@" + e + "` should contain a prelude");
  }
  checkAtruleDescriptorName(e, t) {
    let r = this.checkAtruleName(e);
    if (r) return r;
    let n = this.getAtrule(e);
    let a = nB.keyword(t);
    return n.descriptors ? n.descriptors[a.name] || n.descriptors[a.basename] ? void 0 : new nO.SyntaxReferenceError("Unknown at-rule descriptor", t) : SyntaxError("At-rule `@" + e + "` has no known descriptors");
  }
  checkPropertyName(e) {
    if (!this.getProperty(e)) return new nO.SyntaxReferenceError("Unknown property", e);
  }
  matchAtrulePrelude(e, t) {
    let r = this.checkAtrulePrelude(e, t);
    if (r) return aG(null, r);
    let n = this.getAtrule(e);
    return n.prelude ? aH(this, n.prelude, t || "", !1) : aG(null, null);
  }
  matchAtruleDescriptor(e, t, r) {
    let n = this.checkAtruleDescriptorName(e, t);
    if (n) return aG(null, n);
    let a = this.getAtrule(e);
    let i = nB.keyword(t);
    return aH(this, a.descriptors[i.name] || a.descriptors[i.basename], r, !1);
  }
  matchDeclaration(e) {
    return "Declaration" !== e.type ? aG(null, Error("Not a Declaration node")) : this.matchProperty(e.property, e.value);
  }
  matchProperty(e, t) {
    if (nB.property(e).custom) return aG(null, Error("Lexer matching doesn't applicable for custom properties"));
    let r = this.checkPropertyName(e);
    return r ? aG(null, r) : aH(this, this.getProperty(e), t, !0);
  }
  matchType(e, t) {
    let r = this.getType(e);
    return r ? aH(this, r, t, !1) : aG(null, new nO.SyntaxReferenceError("Unknown type", e));
  }
  match(e, t) {
    return "string" == typeof e || e && e.type ? ("string" != typeof e && e.match || (e = this.createDescriptor(e, "Type", "anonymous")), aH(this, e, t, !1)) : aG(null, new nO.SyntaxReferenceError("Bad syntax"));
  }
  findValueFragments(e, t, r, n) {
    return aM.matchFragments(this, t, this.matchProperty(e, t), r, n);
  }
  findDeclarationValueFragments(e, t, r) {
    return aM.matchFragments(this, e.value, this.matchDeclaration(e), t, r);
  }
  findAllFragments(e, t, r) {
    let n = [];
    this.syntax.walk(e, {
      visit: "Declaration",
      enter: e => {
        n.push.apply(n, this.findDeclarationValueFragments(e, t, r));
      }
    });
    return n;
  }
  getAtrule(e, t = !0) {
    let r = nB.keyword(e);
    return (r.vendor && t ? this.atrules[r.name] || this.atrules[r.basename] : this.atrules[r.name]) || null;
  }
  getAtrulePrelude(e, t = !0) {
    let r = this.getAtrule(e, t);
    return r && r.prelude || null;
  }
  getAtruleDescriptor(e, t) {
    return this.atrules.hasOwnProperty(e) && this.atrules.declarators && this.atrules[e].declarators[t] || null;
  }
  getProperty(e, t = !0) {
    let r = nB.property(e);
    return (r.vendor && t ? this.properties[r.name] || this.properties[r.basename] : this.properties[r.name]) || null;
  }
  getType(e) {
    return hasOwnProperty.call(this.types, e) ? this.types[e] : null;
  }
  validate() {
    function e(n, a, i, o) {
      if (i.has(a)) return i.get(a);
      i.set(a, !1);
      null !== o.syntax && aB.walk(o.syntax, function (o) {
        if ("Type" !== o.type && "Property" !== o.type) return;
        let s = "Type" === o.type ? n.types : n.properties;
        let l = "Type" === o.type ? t : r;
        (!hasOwnProperty.call(s, o.name) || e(n, o.name, l, s[o.name])) && i.set(a, !0);
      }, this);
    }
    let t = new Map();
    let r = new Map();
    for (let r in this.types) e(this, r, t, this.types[r]);
    for (let t in this.properties) e(this, t, r, this.properties[t]);
    return (t = [...t.keys()].filter(e => t.get(e)), r = [...r.keys()].filter(e => r.get(e)), t.length || r.length) ? {
      types: t,
      properties: r
    } : null;
  }
  dump(e, t) {
    return {
      generic: this.generic,
      units: this.units,
      types: aU(this.types, !t, e),
      properties: aU(this.properties, !t, e),
      atrules: function (e, t, r) {
        let n = {};
        for (let [a, i] of Object.entries(e)) n[a] = {
          prelude: i.prelude && (r ? i.prelude.syntax : nM.generate(i.prelude.syntax, {
            compact: t
          })),
          descriptors: i.descriptors && aU(i.descriptors, t, r)
        };
        return n;
      }(this.atrules, !t, e)
    };
  }
  toString() {
    return JSON.stringify(this.dump());
  }
};
let a$ = function (e, t) {
  let r = {
    ...e
  };
  for (let [n, a] of Object.entries(t)) switch (n) {
    case "generic":
      r[n] = !!a;
      break;
    case "units":
      for (let [t, i] of (r[n] = {
        ...e[n]
      }, Object.entries(a))) r[n][t] = Array.isArray(i) ? i : [];
      break;
    case "atrules":
      for (let [t, i] of (r[n] = {
        ...e[n]
      }, Object.entries(a))) {
        let e = r[n][t] || {};
        let a = r[n][t] = {
          prelude: e.prelude || null,
          descriptors: {
            ...e.descriptors
          }
        };
        if (i) {
          for (let [e, t] of (a.prelude = i.prelude ? aW(a.prelude, i.prelude) : a.prelude || null, Object.entries(i.descriptors || {}))) a.descriptors[e] = t ? aW(a.descriptors[e], t) : null;
          Object.keys(a.descriptors).length || (a.descriptors = null);
        }
      }
      break;
    case "types":
    case "properties":
      for (let [t, i] of (r[n] = {
        ...e[n]
      }, Object.entries(a))) r[n][t] = aW(r[n][t], i);
      break;
    case "scope":
      for (let [t, i] of (r[n] = {
        ...e[n]
      }, Object.entries(a))) r[n][t] = {
        ...r[n][t],
        ...i
      };
      break;
    case "parseContext":
      r[n] = {
        ...e[n],
        ...a
      };
      break;
    case "atrule":
    case "pseudo":
      r[n] = {
        ...e[n],
        ...aV(a, ["parse"])
      };
      break;
    case "node":
      r[n] = {
        ...e[n],
        ...aV(a, ["name", "structure", "parse", "generate", "walkContext"])
      };
  }
  return r;
};
var aX = e => function e(t) {
  let r = rK.createParser(t);
  let n = nC.createWalker(t);
  let a = r6.createGenerator(t);
  let {
    fromPlainObject: _fromPlainObject3,
    toPlainObject: _toPlainObject3
  } = nS.createConvertor(n);
  let s = {
    lexer: null,
    createLexer: e => new nN.Lexer(e, s, s.lexer.structure),
    tokenize: rC.tokenize,
    parse: r,
    generate: a,
    walk: n,
    find: n.find,
    findLast: n.findLast,
    findAll: n.findAll,
    fromPlainObject: _fromPlainObject3,
    toPlainObject: _toPlainObject3,
    fork(r) {
      let n = a$({}, t);
      return e("function" == typeof r ? r(n, Object.assign) : a$(n, r));
    }
  };
  s.lexer = new nN.Lexer({
    generic: !0,
    units: t.units,
    types: t.types,
    atrules: t.atrules,
    properties: t.properties,
    node: t.node
  }, s);
  return s;
}(a$({}, e));
var aY = {};
var aK = {};
function aQ(e, t) {
  let r = this.tokenStart + e;
  let n = this.charCodeAt(r);
  for ((43 === n || 45 === n) && (t && this.error("Number sign is not allowed"), r++); r < this.tokenEnd; r++) rT.isDigit(this.charCodeAt(r)) || this.error("Integer is expected", r);
}
function aZ(e) {
  return aQ.call(this, 0, e);
}
function aJ(e, t) {
  if (!this.cmpChar(this.tokenStart + e, t)) {
    let r = "";
    switch (t) {
      case 110:
        r = "N is expected";
        break;
      case 45:
        r = "HyphenMinus is expected";
    }
    this.error(r, this.tokenStart + e);
  }
}
function a0() {
  let e = 0;
  let t = 0;
  let r = this.tokenType;
  for (; r === rA.WhiteSpace || r === rA.Comment;) r = this.lookupType(++e);
  if (r !== rA.Number) {
    if (!(this.isDelim(43, e) || this.isDelim(45, e))) return null;
    t = this.isDelim(43, e) ? 43 : 45;
    do r = this.lookupType(++e); while (r === rA.WhiteSpace || r === rA.Comment);
    r !== rA.Number && (this.skip(e), aZ.call(this, !0));
  }
  e > 0 && this.skip(e);
  0 === t && 43 !== (r = this.charCodeAt(this.tokenStart)) && 45 !== r && this.error("Number sign is expected");
  aZ.call(this, 0 !== t);
  return 45 === t ? "-" + this.consume(rA.Number) : this.consume(rA.Number);
}
aK.generate = function (e) {
  if (e.a) {
    let t = "+1" === e.a && "n" || "1" === e.a && "n" || "-1" === e.a && "-n" || e.a + "n";
    if (e.b) {
      let r = "-" === e.b[0] || "+" === e.b[0] ? e.b : "+" + e.b;
      this.tokenize(t + r);
    } else this.tokenize(t);
  } else this.tokenize(e.b);
};
aK.name = "AnPlusB";
aK.parse = function () {
  let e = this.tokenStart;
  let t = null;
  let r = null;
  if (this.tokenType === rA.Number) {
    aZ.call(this, !1);
    r = this.consume(rA.Number);
  } else if (this.tokenType === rA.Ident && this.cmpChar(this.tokenStart, 45)) switch (t = "-1", aJ.call(this, 1, 110), this.tokenEnd - this.tokenStart) {
    case 2:
      this.next();
      r = a0.call(this);
      break;
    case 3:
      aJ.call(this, 2, 45);
      this.next();
      this.skipSC();
      aZ.call(this, !0);
      r = "-" + this.consume(rA.Number);
      break;
    default:
      aJ.call(this, 2, 45);
      aQ.call(this, 3, !0);
      this.next();
      r = this.substrToCursor(e + 2);
  } else if (this.tokenType === rA.Ident || this.isDelim(43) && this.lookupType(1) === rA.Ident) {
    let n = 0;
    switch (t = "1", this.isDelim(43) && (n = 1, this.next()), aJ.call(this, 0, 110), this.tokenEnd - this.tokenStart) {
      case 1:
        this.next();
        r = a0.call(this);
        break;
      case 2:
        aJ.call(this, 1, 45);
        this.next();
        this.skipSC();
        aZ.call(this, !0);
        r = "-" + this.consume(rA.Number);
        break;
      default:
        aJ.call(this, 1, 45);
        aQ.call(this, 2, !0);
        this.next();
        r = this.substrToCursor(e + n + 1);
    }
  } else if (this.tokenType === rA.Dimension) {
    let n = this.charCodeAt(this.tokenStart);
    let a = 43 === n || 45 === n;
    let i = this.tokenStart + a;
    for (; i < this.tokenEnd && rT.isDigit(this.charCodeAt(i)); i++);
    i === this.tokenStart + a && this.error("Integer is expected", this.tokenStart + a);
    aJ.call(this, i - this.tokenStart, 110);
    t = this.substring(e, i);
    i + 1 === this.tokenEnd ? (this.next(), r = a0.call(this)) : (aJ.call(this, i - this.tokenStart + 1, 45), i + 2 === this.tokenEnd ? (this.next(), this.skipSC(), aZ.call(this, !0), r = "-" + this.consume(rA.Number)) : (aQ.call(this, i - this.tokenStart + 2, !0), this.next(), r = this.substrToCursor(i + 1)));
  } else this.error();
  null !== t && 43 === t.charCodeAt(0) && (t = t.substr(1));
  null !== r && 43 === r.charCodeAt(0) && (r = r.substr(1));
  return {
    type: "AnPlusB",
    loc: this.getLocation(e, this.tokenStart),
    a: t,
    b: r
  };
};
aK.structure = {
  a: [String, null],
  b: [String, null]
};
var a1 = {};
function a2(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
}
function a3() {
  for (function () {
    let e = 1;
    let t;
  }(); t = this.lookupType(e); e++) {
    if (t === rA.RightCurlyBracket) return !0;
    if (t === rA.LeftCurlyBracket || t === rA.AtKeyword) break;
  }
  return !1;
}
a1.generate = function (e) {
  this.token(rA.AtKeyword, "@" + e.name);
  null !== e.prelude && this.node(e.prelude);
  e.block ? this.node(e.block) : this.token(rA.Semicolon, ";");
};
a1.name = "Atrule";
a1.parse = function (e = !1) {
  let t;
  let r;
  let n = this.tokenStart;
  let a = null;
  let i = null;
  switch (this.eat(rA.AtKeyword), r = (t = this.substrToCursor(n + 1)).toLowerCase(), this.skipSC(), !1 === this.eof && this.tokenType !== rA.LeftCurlyBracket && this.tokenType !== rA.Semicolon && (a = this.parseAtrulePrelude ? this.parseWithFallback(this.AtrulePrelude.bind(this, t, e), a2) : a2.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
    case rA.Semicolon:
      this.next();
      break;
    case rA.LeftCurlyBracket:
      hasOwnProperty.call(this.atrule, r) && "function" == typeof this.atrule[r].block ? i = this.atrule[r].block.call(this, e) : i = this.Block(a3.call(this));
  }
  return {
    type: "Atrule",
    loc: this.getLocation(n, this.tokenStart),
    name: t,
    prelude: a,
    block: i
  };
};
a1.structure = {
  name: String,
  prelude: ["AtrulePrelude", "Raw", null],
  block: ["Block", null]
};
a1.walkContext = "atrule";
var a4 = {};
a4.generate = function (e) {
  this.children(e);
};
a4.name = "AtrulePrelude";
a4.parse = function (e) {
  let t = null;
  null !== e && (e = e.toLowerCase());
  this.skipSC();
  hasOwnProperty.call(this.atrule, e) && "function" == typeof this.atrule[e].prelude ? t = this.atrule[e].prelude.call(this) : t = this.readSequence(this.scope.AtrulePrelude);
  this.skipSC();
  !0 !== this.eof && this.tokenType !== rA.LeftCurlyBracket && this.tokenType !== rA.Semicolon && this.error("Semicolon or block is expected");
  return {
    type: "AtrulePrelude",
    loc: this.getLocationFromList(t),
    children: t
  };
};
a4.structure = {
  children: [[]]
};
a4.walkContext = "atrulePrelude";
var a5 = {};
function a8() {
  this.eof && this.error("Unexpected end of input");
  let e = this.tokenStart;
  let t = !1;
  this.isDelim(42) ? (t = !0, this.next()) : this.isDelim(124) || this.eat(rA.Ident);
  this.isDelim(124) ? 61 !== this.charCodeAt(this.tokenStart + 1) ? (this.next(), this.eat(rA.Ident)) : t && this.error("Identifier is expected", this.tokenEnd) : t && this.error("Vertical line is expected");
  return {
    type: "Identifier",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function a6() {
  let e = this.tokenStart;
  let t = this.charCodeAt(e);
  61 !== t && 126 !== t && 94 !== t && 36 !== t && 42 !== t && 124 !== t && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
  this.next();
  61 !== t && (this.isDelim(61) || this.error("Equal sign is expected"), this.next());
  return this.substrToCursor(e);
}
a5.generate = function (e) {
  this.token(rA.Delim, "[");
  this.node(e.name);
  null !== e.matcher && (this.tokenize(e.matcher), this.node(e.value));
  null !== e.flags && this.token(rA.Ident, e.flags);
  this.token(rA.Delim, "]");
};
a5.name = "AttributeSelector";
a5.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = null;
  let n = null;
  let a = null;
  this.eat(rA.LeftSquareBracket);
  this.skipSC();
  e = a8.call(this);
  this.skipSC();
  this.tokenType !== rA.RightSquareBracket && (this.tokenType !== rA.Ident && (r = a6.call(this), this.skipSC(), n = this.tokenType === rA.String ? this.String() : this.Identifier(), this.skipSC()), this.tokenType === rA.Ident && (a = this.consume(rA.Ident), this.skipSC()));
  this.eat(rA.RightSquareBracket);
  return {
    type: "AttributeSelector",
    loc: this.getLocation(t, this.tokenStart),
    name: e,
    matcher: r,
    value: n,
    flags: a
  };
};
a5.structure = {
  name: "Identifier",
  matcher: [String, null],
  value: ["String", "Identifier", null],
  flags: [String, null]
};
var a9 = {};
function a7(e) {
  return this.Raw(e, null, !0);
}
function ie() {
  return this.parseWithFallback(this.Rule, a7);
}
function it(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
function ir() {
  if (this.tokenType === rA.Semicolon) return it.call(this, this.tokenIndex);
  let e = this.parseWithFallback(this.Declaration, it);
  this.tokenType === rA.Semicolon && this.next();
  return e;
}
a9.generate = function (e) {
  this.token(rA.LeftCurlyBracket, "{");
  this.children(e, e => {
    "Declaration" === e.type && this.token(rA.Semicolon, ";");
  });
  this.token(rA.RightCurlyBracket, "}");
};
a9.name = "Block";
a9.parse = function (e) {
  let t = e ? ir : ie;
  let r = this.tokenStart;
  let n = this.createList();
  this.eat(rA.LeftCurlyBracket);
  t: for (; !this.eof;) switch (this.tokenType) {
    case rA.RightCurlyBracket:
      break t;
    case rA.WhiteSpace:
    case rA.Comment:
      this.next();
      break;
    case rA.AtKeyword:
      n.push(this.parseWithFallback(this.Atrule.bind(this, e), a7));
      break;
    default:
      e && this.isDelim(38) ? n.push(ie.call(this)) : n.push(t.call(this));
  }
  this.eof || this.eat(rA.RightCurlyBracket);
  return {
    type: "Block",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
};
a9.structure = {
  children: [["Atrule", "Rule", "Declaration"]]
};
a9.walkContext = "block";
var ia = {};
ia.generate = function (e) {
  this.token(rA.Delim, "[");
  this.children(e);
  this.token(rA.Delim, "]");
};
ia.name = "Brackets";
ia.parse = function (e, t) {
  let r = this.tokenStart;
  let n = null;
  this.eat(rA.LeftSquareBracket);
  n = e.call(this, t);
  this.eof || this.eat(rA.RightSquareBracket);
  return {
    type: "Brackets",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
};
ia.structure = {
  children: [[]]
};
var ii = {};
ii.generate = function () {
  this.token(rA.CDC, "--\x3e");
};
ii.name = "CDC";
ii.parse = function () {
  let e = this.tokenStart;
  this.eat(rA.CDC);
  return {
    type: "CDC",
    loc: this.getLocation(e, this.tokenStart)
  };
};
ii.structure = [];
var io = {};
io.generate = function () {
  this.token(rA.CDO, "\x3c!--");
};
io.name = "CDO";
io.parse = function () {
  let e = this.tokenStart;
  this.eat(rA.CDO);
  return {
    type: "CDO",
    loc: this.getLocation(e, this.tokenStart)
  };
};
io.structure = [];
var is = {};
is.generate = function (e) {
  this.token(rA.Delim, ".");
  this.token(rA.Ident, e.name);
};
is.name = "ClassSelector";
is.parse = function () {
  this.eatDelim(46);
  return {
    type: "ClassSelector",
    loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
    name: this.consume(rA.Ident)
  };
};
is.structure = {
  name: String
};
var il = {};
il.generate = function (e) {
  this.tokenize(e.name);
};
il.name = "Combinator";
il.parse = function () {
  let e;
  let t = this.tokenStart;
  switch (this.tokenType) {
    case rA.WhiteSpace:
      e = " ";
      break;
    case rA.Delim:
      switch (this.charCodeAt(this.tokenStart)) {
        case 62:
        case 43:
        case 126:
          this.next();
          break;
        case 47:
          this.next();
          this.eatIdent("deep");
          this.eatDelim(47);
          break;
        default:
          this.error("Combinator is expected");
      }
      e = this.substrToCursor(t);
  }
  return {
    type: "Combinator",
    loc: this.getLocation(t, this.tokenStart),
    name: e
  };
};
il.structure = {
  name: String
};
var ic = {};
ic.generate = function (e) {
  this.token(rA.Comment, "/*" + e.value + "*/");
};
ic.name = "Comment";
ic.parse = function () {
  let e = this.tokenStart;
  let t = this.tokenEnd;
  this.eat(rA.Comment);
  t - e + 2 >= 2 && 42 === this.charCodeAt(t - 2) && 47 === this.charCodeAt(t - 1) && (t -= 2);
  return {
    type: "Comment",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substring(e + 2, t)
  };
};
ic.structure = {
  value: String
};
var iu = {};
function id(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
}
function ih(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
}
function ip() {
  let e = this.tokenIndex;
  let t = this.Value();
  "Raw" !== t.type && !1 === this.eof && this.tokenType !== rA.Semicolon && !1 === this.isDelim(33) && !1 === this.isBalanceEdge(e) && this.error();
  return t;
}
function im() {
  let e = this.tokenStart;
  if (this.tokenType === rA.Delim) switch (this.charCodeAt(this.tokenStart)) {
    case 42:
    case 36:
    case 43:
    case 35:
    case 38:
      this.next();
      break;
    case 47:
      this.next();
      this.isDelim(47) && this.next();
  }
  this.tokenType === rA.Hash ? this.eat(rA.Hash) : this.eat(rA.Ident);
  return this.substrToCursor(e);
}
function ig() {
  this.eat(rA.Delim);
  this.skipSC();
  let e = this.consume(rA.Ident);
  return "important" === e || e;
}
iu.generate = function (e) {
  this.token(rA.Ident, e.property);
  this.token(rA.Colon, ":");
  this.node(e.value);
  e.important && (this.token(rA.Delim, "!"), this.token(rA.Ident, !0 === e.important ? "important" : e.important));
};
iu.name = "Declaration";
iu.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = this.tokenIndex;
  let n = im.call(this);
  let a = nB.isCustomProperty(n);
  let i = a ? this.parseCustomProperty : this.parseValue;
  let o = a ? ih : id;
  let s = !1;
  this.skipSC();
  this.eat(rA.Colon);
  let l = this.tokenIndex;
  if (a || this.skipSC(), e = i ? this.parseWithFallback(ip, o) : o.call(this, this.tokenIndex), a && "Value" === e.type && e.children.isEmpty) {
    for (let t = l - this.tokenIndex; t <= 0; t++) if (this.lookupType(t) === rA.WhiteSpace) {
      e.children.appendData({
        type: "WhiteSpace",
        loc: null,
        value: " "
      });
      break;
    }
  }
  this.isDelim(33) && (s = ig.call(this), this.skipSC());
  !1 === this.eof && this.tokenType !== rA.Semicolon && !1 === this.isBalanceEdge(r) && this.error();
  return {
    type: "Declaration",
    loc: this.getLocation(t, this.tokenStart),
    important: s,
    property: n,
    value: e
  };
};
iu.structure = {
  important: [Boolean, String],
  property: String,
  value: ["Value", "Raw"]
};
iu.walkContext = "declaration";
var ib = {};
function iy(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
ib.generate = function (e) {
  this.children(e, e => {
    "Declaration" === e.type && this.token(rA.Semicolon, ";");
  });
};
ib.name = "DeclarationList";
ib.parse = function () {
  let e = this.createList();
  for (; !this.eof;) switch (this.tokenType) {
    case rA.WhiteSpace:
    case rA.Comment:
    case rA.Semicolon:
      this.next();
      break;
    case rA.AtKeyword:
      e.push(this.parseWithFallback(this.Atrule.bind(this, !0), iy));
      break;
    default:
      this.isDelim(38) ? e.push(this.parseWithFallback(this.Rule, iy)) : e.push(this.parseWithFallback(this.Declaration, iy));
  }
  return {
    type: "DeclarationList",
    loc: this.getLocationFromList(e),
    children: e
  };
};
ib.structure = {
  children: [["Declaration", "Atrule", "Rule"]]
};
var ik = {};
ik.generate = function (e) {
  this.token(rA.Dimension, e.value + e.unit);
};
ik.name = "Dimension";
ik.parse = function () {
  let e = this.tokenStart;
  let t = this.consumeNumber(rA.Dimension);
  return {
    type: "Dimension",
    loc: this.getLocation(e, this.tokenStart),
    value: t,
    unit: this.substring(e + t.length, this.tokenStart)
  };
};
ik.structure = {
  value: String,
  unit: String
};
var iv = {};
iv.generate = function (e) {
  this.token(rA.Function, e.name + "(");
  this.children(e);
  this.token(rA.RightParenthesis, ")");
};
iv.name = "Function";
iv.parse = function (e, t) {
  let r;
  let n = this.tokenStart;
  let a = this.consumeFunctionName();
  let i = a.toLowerCase();
  r = t.hasOwnProperty(i) ? t[i].call(this, t) : e.call(this, t);
  this.eof || this.eat(rA.RightParenthesis);
  return {
    type: "Function",
    loc: this.getLocation(n, this.tokenStart),
    name: a,
    children: r
  };
};
iv.structure = {
  name: String,
  children: [[]]
};
iv.walkContext = "function";
var iw = {};
iw.generate = function (e) {
  this.token(rA.Hash, "#" + e.value);
};
iw.name = "Hash";
iw.parse = function () {
  let e = this.tokenStart;
  this.eat(rA.Hash);
  return {
    type: "Hash",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e + 1)
  };
};
iw.structure = {
  value: String
};
iw.xxx = "XXX";
var ix = {};
ix.generate = function (e) {
  this.token(rA.Ident, e.name);
};
ix.name = "Identifier";
ix.parse = function () {
  return {
    type: "Identifier",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    name: this.consume(rA.Ident)
  };
};
ix.structure = {
  name: String
};
var iS = {};
iS.generate = function (e) {
  this.token(rA.Delim, "#" + e.name);
};
iS.name = "IdSelector";
iS.parse = function () {
  let e = this.tokenStart;
  this.eat(rA.Hash);
  return {
    type: "IdSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e + 1)
  };
};
iS.structure = {
  name: String
};
var iC = {};
iC.generate = function (e) {
  this.token(rA.LeftParenthesis, "(");
  this.token(rA.Ident, e.name);
  null !== e.value && (this.token(rA.Colon, ":"), this.node(e.value));
  this.token(rA.RightParenthesis, ")");
};
iC.name = "MediaFeature";
iC.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = null;
  if (this.eat(rA.LeftParenthesis), this.skipSC(), e = this.consume(rA.Ident), this.skipSC(), this.tokenType !== rA.RightParenthesis) {
    switch (this.eat(rA.Colon), this.skipSC(), this.tokenType) {
      case rA.Number:
        r = this.lookupNonWSType(1) === rA.Delim ? this.Ratio() : this.Number();
        break;
      case rA.Dimension:
        r = this.Dimension();
        break;
      case rA.Ident:
        r = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
    this.skipSC();
  }
  this.eat(rA.RightParenthesis);
  return {
    type: "MediaFeature",
    loc: this.getLocation(t, this.tokenStart),
    name: e,
    value: r
  };
};
iC.structure = {
  name: String,
  value: ["Identifier", "Number", "Dimension", "Ratio", null]
};
var iA = {};
iA.generate = function (e) {
  this.children(e);
};
iA.name = "MediaQuery";
iA.parse = function () {
  let e = this.createList();
  let t = null;
  this.skipSC();
  t: for (; !this.eof;) {
    switch (this.tokenType) {
      case rA.Comment:
      case rA.WhiteSpace:
        this.next();
        continue;
      case rA.Ident:
        t = this.Identifier();
        break;
      case rA.LeftParenthesis:
        t = this.MediaFeature();
        break;
      default:
        break t;
    }
    e.push(t);
  }
  null === t && this.error("Identifier or parenthesis is expected");
  return {
    type: "MediaQuery",
    loc: this.getLocationFromList(e),
    children: e
  };
};
iA.structure = {
  children: [["Identifier", "MediaFeature", "WhiteSpace"]]
};
var iT = {};
iT.generate = function (e) {
  this.children(e, () => this.token(rA.Comma, ","));
};
iT.name = "MediaQueryList";
iT.parse = function () {
  let e = this.createList();
  for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === rA.Comma);) this.next();
  return {
    type: "MediaQueryList",
    loc: this.getLocationFromList(e),
    children: e
  };
};
iT.structure = {
  children: [["MediaQuery"]]
};
var iE = {};
iE.generate = function () {
  this.token(rA.Delim, "&");
};
iE.name = "NestingSelector";
iE.parse = function () {
  let e = this.tokenStart;
  this.eatDelim(38);
  return {
    type: "NestingSelector",
    loc: this.getLocation(e, this.tokenStart)
  };
};
iE.structure = {};
var iP = {};
iP.generate = function (e) {
  this.node(e.nth);
  null !== e.selector && (this.token(rA.Ident, "of"), this.node(e.selector));
};
iP.name = "Nth";
iP.parse = function () {
  let e;
  this.skipSC();
  let t = this.tokenStart;
  let r = t;
  let n = null;
  e = this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? this.Identifier() : this.AnPlusB();
  r = this.tokenStart;
  this.skipSC();
  this.lookupValue(0, "of") && (this.next(), n = this.SelectorList(), r = this.tokenStart);
  return {
    type: "Nth",
    loc: this.getLocation(t, r),
    nth: e,
    selector: n
  };
};
iP.structure = {
  nth: ["AnPlusB", "Identifier"],
  selector: ["SelectorList", null]
};
var iL = {};
iL.generate = function (e) {
  this.token(rA.Number, e.value);
};
iL.name = "Number";
iL.parse = function () {
  return {
    type: "Number",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consume(rA.Number)
  };
};
iL.structure = {
  value: String
};
var iD = {};
iD.generate = function (e) {
  this.tokenize(e.value);
};
iD.name = "Operator";
iD.parse = function () {
  let e = this.tokenStart;
  this.next();
  return {
    type: "Operator",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
};
iD.structure = {
  value: String
};
var iN = {};
iN.generate = function (e) {
  this.token(rA.LeftParenthesis, "(");
  this.children(e);
  this.token(rA.RightParenthesis, ")");
};
iN.name = "Parentheses";
iN.parse = function (e, t) {
  let r = this.tokenStart;
  let n = null;
  this.eat(rA.LeftParenthesis);
  n = e.call(this, t);
  this.eof || this.eat(rA.RightParenthesis);
  return {
    type: "Parentheses",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
};
iN.structure = {
  children: [[]]
};
var iO = {};
iO.generate = function (e) {
  this.token(rA.Percentage, e.value + "%");
};
iO.name = "Percentage";
iO.parse = function () {
  return {
    type: "Percentage",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consumeNumber(rA.Percentage)
  };
};
iO.structure = {
  value: String
};
var iM = {};
iM.generate = function (e) {
  this.token(rA.Colon, ":");
  null === e.children ? this.token(rA.Ident, e.name) : (this.token(rA.Function, e.name + "("), this.children(e), this.token(rA.RightParenthesis, ")"));
};
iM.name = "PseudoClassSelector";
iM.parse = function () {
  let e;
  let t;
  let r = this.tokenStart;
  let n = null;
  this.eat(rA.Colon);
  this.tokenType === rA.Function ? (t = (e = this.consumeFunctionName()).toLowerCase(), hasOwnProperty.call(this.pseudo, t) ? (this.skipSC(), n = this.pseudo[t].call(this), this.skipSC()) : (n = this.createList()).push(this.Raw(this.tokenIndex, null, !1)), this.eat(rA.RightParenthesis)) : e = this.consume(rA.Ident);
  return {
    type: "PseudoClassSelector",
    loc: this.getLocation(r, this.tokenStart),
    name: e,
    children: n
  };
};
iM.structure = {
  name: String,
  children: [["Raw"], null]
};
iM.walkContext = "function";
var iz = {};
iz.generate = function (e) {
  this.token(rA.Colon, ":");
  this.token(rA.Colon, ":");
  null === e.children ? this.token(rA.Ident, e.name) : (this.token(rA.Function, e.name + "("), this.children(e), this.token(rA.RightParenthesis, ")"));
};
iz.name = "PseudoElementSelector";
iz.parse = function () {
  let e;
  let t;
  let r = this.tokenStart;
  let n = null;
  this.eat(rA.Colon);
  this.eat(rA.Colon);
  this.tokenType === rA.Function ? (t = (e = this.consumeFunctionName()).toLowerCase(), hasOwnProperty.call(this.pseudo, t) ? (this.skipSC(), n = this.pseudo[t].call(this), this.skipSC()) : (n = this.createList()).push(this.Raw(this.tokenIndex, null, !1)), this.eat(rA.RightParenthesis)) : e = this.consume(rA.Ident);
  return {
    type: "PseudoElementSelector",
    loc: this.getLocation(r, this.tokenStart),
    name: e,
    children: n
  };
};
iz.structure = {
  name: String,
  children: [["Raw"], null]
};
iz.walkContext = "function";
var iI = {};
function iR() {
  this.skipSC();
  let e = this.consume(rA.Number);
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    rT.isDigit(r) || 46 === r || this.error("Unsigned number is expected", this.tokenStart - e.length + t);
  }
  0 === Number(e) && this.error("Zero number is not allowed", this.tokenStart - e.length);
  return e;
}
iI.generate = function (e) {
  this.token(rA.Number, e.left);
  this.token(rA.Delim, "/");
  this.token(rA.Number, e.right);
};
iI.name = "Ratio";
iI.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = iR.call(this);
  this.skipSC();
  this.eatDelim(47);
  e = iR.call(this);
  return {
    type: "Ratio",
    loc: this.getLocation(t, this.tokenStart),
    left: r,
    right: e
  };
};
iI.structure = {
  left: String,
  right: String
};
var iq = {};
function iB() {
  return this.tokenIndex > 0 && this.lookupType(-1) === rA.WhiteSpace ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
}
iq.generate = function (e) {
  this.tokenize(e.value);
};
iq.name = "Raw";
iq.parse = function (e, t, r) {
  let n;
  let a = this.getTokenStart(e);
  this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd);
  n = r && this.tokenStart > a ? iB.call(this) : this.tokenStart;
  return {
    type: "Raw",
    loc: this.getLocation(a, n),
    value: this.substring(a, n)
  };
};
iq.structure = {
  value: String
};
var ij = {};
function iF(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
}
function i_() {
  let e = this.SelectorList();
  "Raw" !== e.type && !1 === this.eof && this.tokenType !== rA.LeftCurlyBracket && this.error();
  return e;
}
ij.generate = function (e) {
  this.node(e.prelude);
  this.node(e.block);
};
ij.name = "Rule";
ij.parse = function () {
  let e;
  let t;
  let r = this.tokenIndex;
  let n = this.tokenStart;
  e = this.parseRulePrelude ? this.parseWithFallback(i_, iF) : iF.call(this, r);
  t = this.Block(!0);
  return {
    type: "Rule",
    loc: this.getLocation(n, this.tokenStart),
    prelude: e,
    block: t
  };
};
ij.structure = {
  prelude: ["SelectorList", "Raw"],
  block: ["Block"]
};
ij.walkContext = "rule";
var iU = {};
iU.generate = function (e) {
  this.children(e);
};
iU.name = "Selector";
iU.parse = function () {
  let e = this.readSequence(this.scope.Selector);
  null === this.getFirstListNode(e) && this.error("Selector is expected");
  return {
    type: "Selector",
    loc: this.getLocationFromList(e),
    children: e
  };
};
iU.structure = {
  children: [["TypeSelector", "IdSelector", "ClassSelector", "AttributeSelector", "PseudoClassSelector", "PseudoElementSelector", "Combinator", "WhiteSpace"]]
};
var iG = {};
iG.generate = function (e) {
  this.children(e, () => this.token(rA.Comma, ","));
};
iG.name = "SelectorList";
iG.parse = function () {
  let e = this.createList();
  for (; !this.eof;) {
    if (e.push(this.Selector()), this.tokenType === rA.Comma) {
      this.next();
      continue;
    }
    break;
  }
  return {
    type: "SelectorList",
    loc: this.getLocationFromList(e),
    children: e
  };
};
iG.structure = {
  children: [["Selector", "Raw"]]
};
iG.walkContext = "selector";
var iH = {};
var iW = {};
iW.decode = function (e) {
  let t = e.length;
  let r = e.charCodeAt(0);
  let n = 34 === r || 39 === r ? 1 : 0;
  let a = 1 === n && t > 1 && e.charCodeAt(t - 1) === r ? t - 2 : t - 1;
  let i = "";
  for (let r = n; r <= a; r++) {
    let n = e.charCodeAt(r);
    if (92 === n) {
      if (r === a) {
        r !== t - 1 && (i = e.substr(r + 1));
        break;
      }
      if (n = e.charCodeAt(++r), rT.isValidEscape(92, n)) {
        let t = r - 1;
        let n = rB.consumeEscaped(e, t);
        r = n - 1;
        i += rB.decodeEscaped(e.substring(t + 1, n));
      } else 13 === n && 10 === e.charCodeAt(r + 1) && r++;
    } else i += e[r];
  }
  return i;
};
iW.encode = function (e, t) {
  let r = t ? "'" : '"';
  let n = t ? 39 : 34;
  let a = "";
  let i = !1;
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (0 === r) {
      a += "\uFFFD";
      continue;
    }
    if (r <= 31 || 127 === r) {
      a += "\\" + r.toString(16);
      i = !0;
      continue;
    }
    r === n || 92 === r ? a += "\\" + e.charAt(t) : (i && (rT.isHexDigit(r) || rT.isWhiteSpace(r)) && (a += " "), a += e.charAt(t));
    i = !1;
  }
  return r + a + r;
};
iH.generate = function (e) {
  this.token(rA.String, iW.encode(e.value));
};
iH.name = "String";
iH.parse = function () {
  return {
    type: "String",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: iW.decode(this.consume(rA.String))
  };
};
iH.structure = {
  value: String
};
var iV = {};
function i$(e) {
  return this.Raw(e, null, !1);
}
iV.generate = function (e) {
  this.children(e);
};
iV.name = "StyleSheet";
iV.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = this.createList();
  for (; !this.eof;) {
    switch (this.tokenType) {
      case rA.WhiteSpace:
        this.next();
        continue;
      case rA.Comment:
        if (33 !== this.charCodeAt(this.tokenStart + 2)) {
          this.next();
          continue;
        }
        e = this.Comment();
        break;
      case rA.CDO:
        e = this.CDO();
        break;
      case rA.CDC:
        e = this.CDC();
        break;
      case rA.AtKeyword:
        e = this.parseWithFallback(this.Atrule, i$);
        break;
      default:
        e = this.parseWithFallback(this.Rule, i$);
    }
    r.push(e);
  }
  return {
    type: "StyleSheet",
    loc: this.getLocation(t, this.tokenStart),
    children: r
  };
};
iV.structure = {
  children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]]
};
iV.walkContext = "stylesheet";
var iX = {};
function iY() {
  this.tokenType !== rA.Ident && !1 === this.isDelim(42) && this.error("Identifier or asterisk is expected");
  this.next();
}
iX.generate = function (e) {
  this.tokenize(e.name);
};
iX.name = "TypeSelector";
iX.parse = function () {
  let e = this.tokenStart;
  this.isDelim(124) ? (this.next(), iY.call(this)) : (iY.call(this), this.isDelim(124) && (this.next(), iY.call(this)));
  return {
    type: "TypeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
};
iX.structure = {
  name: String
};
var iK = {};
function iQ(e, t) {
  let r = 0;
  for (let n = this.tokenStart + e; n < this.tokenEnd; n++) {
    let a = this.charCodeAt(n);
    if (45 === a && t && 0 !== r) {
      iQ.call(this, e + r + 1, !1);
      return -1;
    }
    rT.isHexDigit(a) || this.error(t && 0 !== r ? "Hyphen minus" + (r < 6 ? " or hex digit" : "") + " is expected" : r < 6 ? "Hex digit is expected" : "Unexpected input", n);
    ++r > 6 && this.error("Too many hex digits", n);
  }
  this.next();
  return r;
}
function iZ(e) {
  let t = 0;
  for (; this.isDelim(63);) {
    ++t > e && this.error("Too many question marks");
    this.next();
  }
}
function iJ(e) {
  this.charCodeAt(this.tokenStart) !== e && this.error((43 === e ? "Plus sign" : "Hyphen minus") + " is expected");
}
function i0() {
  let e = 0;
  switch (this.tokenType) {
    case rA.Number:
      if (e = iQ.call(this, 1, !0), this.isDelim(63)) {
        iZ.call(this, 6 - e);
        break;
      }
      (this.tokenType === rA.Dimension || this.tokenType === rA.Number) && (iJ.call(this, 45), iQ.call(this, 1, !1));
      break;
    case rA.Dimension:
      (e = iQ.call(this, 1, !0)) > 0 && iZ.call(this, 6 - e);
      break;
    default:
      if (this.eatDelim(43), this.tokenType === rA.Ident) {
        (e = iQ.call(this, 0, !0)) > 0 && iZ.call(this, 6 - e);
        break;
      }
      if (this.isDelim(63)) {
        this.next();
        iZ.call(this, 5);
        break;
      }
      this.error("Hex digit or question mark is expected");
  }
}
iK.generate = function (e) {
  this.tokenize(e.value);
};
iK.name = "UnicodeRange";
iK.parse = function () {
  let e = this.tokenStart;
  this.eatIdent("u");
  i0.call(this);
  return {
    type: "UnicodeRange",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
};
iK.structure = {
  value: String
};
var i1 = {};
var i2 = {};
i2.decode = function (e) {
  let t = e.length;
  let r = 4;
  let n = 41 === e.charCodeAt(t - 1) ? t - 2 : t - 1;
  let a = "";
  for (; r < n && rT.isWhiteSpace(e.charCodeAt(r));) r++;
  for (; r < n && rT.isWhiteSpace(e.charCodeAt(n));) n--;
  for (let i = r; i <= n; i++) {
    let r = e.charCodeAt(i);
    if (92 === r) {
      if (i === n) {
        i !== t - 1 && (a = e.substr(i + 1));
        break;
      }
      if (r = e.charCodeAt(++i), rT.isValidEscape(92, r)) {
        let t = i - 1;
        let r = rB.consumeEscaped(e, t);
        i = r - 1;
        a += rB.decodeEscaped(e.substring(t + 1, r));
      } else 13 === r && 10 === e.charCodeAt(i + 1) && i++;
    } else a += e[i];
  }
  return a;
};
i2.encode = function (e) {
  let t = "";
  let r = !1;
  for (let n = 0; n < e.length; n++) {
    let a = e.charCodeAt(n);
    if (0 === a) {
      t += "\uFFFD";
      continue;
    }
    if (a <= 31 || 127 === a) {
      t += "\\" + a.toString(16);
      r = !0;
      continue;
    }
    32 === a || 92 === a || 34 === a || 39 === a || 40 === a || 41 === a ? t += "\\" + e.charAt(n) : (r && rT.isHexDigit(a) && (t += " "), t += e.charAt(n));
    r = !1;
  }
  return "url(" + t + ")";
};
i1.generate = function (e) {
  this.token(rA.Url, i2.encode(e.value));
};
i1.name = "Url";
i1.parse = function () {
  let e;
  let t = this.tokenStart;
  switch (this.tokenType) {
    case rA.Url:
      e = i2.decode(this.consume(rA.Url));
      break;
    case rA.Function:
      this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`");
      this.eat(rA.Function);
      this.skipSC();
      e = iW.decode(this.consume(rA.String));
      this.skipSC();
      this.eof || this.eat(rA.RightParenthesis);
      break;
    default:
      this.error("Url or Function is expected");
  }
  return {
    type: "Url",
    loc: this.getLocation(t, this.tokenStart),
    value: e
  };
};
i1.structure = {
  value: String
};
var i3 = {};
i3.generate = function (e) {
  this.children(e);
};
i3.name = "Value";
i3.parse = function () {
  let e = this.tokenStart;
  let t = this.readSequence(this.scope.Value);
  return {
    type: "Value",
    loc: this.getLocation(e, this.tokenStart),
    children: t
  };
};
i3.structure = {
  children: [[]]
};
var i4 = {};
let i5 = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
});
i4.generate = function (e) {
  this.token(rA.WhiteSpace, e.value);
};
i4.name = "WhiteSpace";
i4.parse = function () {
  this.eat(rA.WhiteSpace);
  return i5;
};
i4.structure = {
  value: String
};
aY.AnPlusB = aK;
aY.Atrule = a1;
aY.AtrulePrelude = a4;
aY.AttributeSelector = a5;
aY.Block = a9;
aY.Brackets = ia;
aY.CDC = ii;
aY.CDO = io;
aY.ClassSelector = is;
aY.Combinator = il;
aY.Comment = ic;
aY.Declaration = iu;
aY.DeclarationList = ib;
aY.Dimension = ik;
aY.Function = iv;
aY.Hash = iw;
aY.Identifier = ix;
aY.IdSelector = iS;
aY.MediaFeature = iC;
aY.MediaQuery = iA;
aY.MediaQueryList = iT;
aY.NestingSelector = iE;
aY.Nth = iP;
aY.Number = iL;
aY.Operator = iD;
aY.Parentheses = iN;
aY.Percentage = iO;
aY.PseudoClassSelector = iM;
aY.PseudoElementSelector = iz;
aY.Ratio = iI;
aY.Raw = iq;
aY.Rule = ij;
aY.Selector = iU;
aY.SelectorList = iG;
aY.String = iH;
aY.StyleSheet = iV;
aY.TypeSelector = iX;
aY.UnicodeRange = iK;
aY.Url = i1;
aY.Value = i3;
aY.WhiteSpace = i4;
var i8 = {};
var i6 = function (e) {
  switch (this.tokenType) {
    case rA.Hash:
      return this.Hash();
    case rA.Comma:
      return this.Operator();
    case rA.LeftParenthesis:
      return this.Parentheses(this.readSequence, e.recognizer);
    case rA.LeftSquareBracket:
      return this.Brackets(this.readSequence, e.recognizer);
    case rA.String:
      return this.String();
    case rA.Dimension:
      return this.Dimension();
    case rA.Percentage:
      return this.Percentage();
    case rA.Number:
      return this.Number();
    case rA.Function:
      return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case rA.Url:
      return this.Url();
    case rA.Ident:
      if (this.cmpChar(this.tokenStart, 117) && this.cmpChar(this.tokenStart + 1, 43)) return this.UnicodeRange();
      return this.Identifier();
    case rA.Delim:
      {
        let e = this.charCodeAt(this.tokenStart);
        if (47 === e || 42 === e || 43 === e || 45 === e) return this.Operator();
        35 === e && this.error("Hex or identifier is expected", this.tokenStart + 1);
      }
  }
};
function i9(e) {
  return null !== e && "Operator" === e.type && ("-" === e.value[e.value.length - 1] || "+" === e.value[e.value.length - 1]);
}
function i7() {
  return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
}
function oe() {
  return (this.skipSC(), this.tokenType === rA.Ident && this.lookupNonWSType(1) === rA.Colon) ? this.createSingleNodeList(this.Declaration()) : ot.call(this);
}
function ot() {
  let e;
  let t = this.createList();
  this.skipSC();
  t: for (; !this.eof;) {
    switch (this.tokenType) {
      case rA.Comment:
      case rA.WhiteSpace:
        this.next();
        continue;
      case rA.Function:
        e = this.Function(i7, this.scope.AtrulePrelude);
        break;
      case rA.Ident:
        e = this.Identifier();
        break;
      case rA.LeftParenthesis:
        e = this.Parentheses(oe, this.scope.AtrulePrelude);
        break;
      default:
        break t;
    }
    t.push(e);
  }
  return t;
}
i8.AtrulePrelude = {
  getNode: i6
};
i8.Selector = {
  onWhiteSpace: function (e, t) {
    null !== t.last && "Combinator" !== t.last.type && null !== e && "Combinator" !== e.type && t.push({
      type: "Combinator",
      loc: null,
      name: " "
    });
  },
  getNode: function () {
    switch (this.tokenType) {
      case rA.LeftSquareBracket:
        return this.AttributeSelector();
      case rA.Hash:
        return this.IdSelector();
      case rA.Colon:
        if (this.lookupType(1) === rA.Colon) return this.PseudoElementSelector();
        return this.PseudoClassSelector();
      case rA.Ident:
        return this.TypeSelector();
      case rA.Number:
      case rA.Percentage:
        return this.Percentage();
      case rA.Dimension:
        46 === this.charCodeAt(this.tokenStart) && this.error("Identifier is expected", this.tokenStart + 1);
        break;
      case rA.Delim:
        switch (this.charCodeAt(this.tokenStart)) {
          case 43:
          case 62:
          case 126:
          case 47:
            return this.Combinator();
          case 46:
            return this.ClassSelector();
          case 42:
          case 124:
            return this.TypeSelector();
          case 35:
            return this.IdSelector();
          case 38:
            return this.NestingSelector();
        }
    }
  }
};
i8.Value = {
  getNode: i6,
  onWhiteSpace(e, t) {
    i9(e) && (e.value = " " + e.value);
    i9(t.last) && (t.last.value += " ");
  },
  expression: function () {
    return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
  },
  var: function () {
    let e = this.createList();
    if (this.skipSC(), e.push(this.Identifier()), this.skipSC(), this.tokenType === rA.Comma) {
      e.push(this.Operator());
      let t = this.tokenIndex;
      let r = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
      if ("Value" === r.type && r.children.isEmpty) {
        for (let e = t - this.tokenIndex; e <= 0; e++) if (this.lookupType(e) === rA.WhiteSpace) {
          r.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
      }
      e.push(r);
    }
    return e;
  }
};
let or = {
  parse() {
    return this.createSingleNodeList(this.SelectorList());
  }
};
let on = {
  parse() {
    return this.createSingleNodeList(this.Selector());
  }
};
let oa = {
  parse() {
    return this.createSingleNodeList(this.Identifier());
  }
};
let oi = {
  parse() {
    return this.createSingleNodeList(this.Nth());
  }
};
var oo = {};
oo.AnPlusB = aK.parse;
oo.Atrule = a1.parse;
oo.AtrulePrelude = a4.parse;
oo.AttributeSelector = a5.parse;
oo.Block = a9.parse;
oo.Brackets = ia.parse;
oo.CDC = ii.parse;
oo.CDO = io.parse;
oo.ClassSelector = is.parse;
oo.Combinator = il.parse;
oo.Comment = ic.parse;
oo.Declaration = iu.parse;
oo.DeclarationList = ib.parse;
oo.Dimension = ik.parse;
oo.Function = iv.parse;
oo.Hash = iw.parse;
oo.Identifier = ix.parse;
oo.IdSelector = iS.parse;
oo.MediaFeature = iC.parse;
oo.MediaQuery = iA.parse;
oo.MediaQueryList = iT.parse;
oo.NestingSelector = iE.parse;
oo.Nth = iP.parse;
oo.Number = iL.parse;
oo.Operator = iD.parse;
oo.Parentheses = iN.parse;
oo.Percentage = iO.parse;
oo.PseudoClassSelector = iM.parse;
oo.PseudoElementSelector = iz.parse;
oo.Ratio = iI.parse;
oo.Raw = iq.parse;
oo.Rule = ij.parse;
oo.Selector = iU.parse;
oo.SelectorList = iG.parse;
oo.String = iH.parse;
oo.StyleSheet = iV.parse;
oo.TypeSelector = iX.parse;
oo.UnicodeRange = iK.parse;
oo.Url = i1.parse;
oo.Value = i3.parse;
oo.WhiteSpace = i4.parse;
let os = aX({
  generic: !0,
  generic: !0,
  units: {
    angle: ["deg", "grad", "rad", "turn"],
    decibel: ["db"],
    flex: ["fr"],
    frequency: ["hz", "khz"],
    length: ["cm", "mm", "q", "in", "pt", "pc", "px", "em", "rem", "ex", "rex", "cap", "rcap", "ch", "rch", "ic", "ric", "lh", "rlh", "vw", "svw", "lvw", "dvw", "vh", "svh", "lvh", "dvh", "vi", "svi", "lvi", "dvi", "vb", "svb", "lvb", "dvb", "vmin", "svmin", "lvmin", "dvmin", "vmax", "svmax", "lvmax", "dvmax", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"],
    resolution: ["dpi", "dpcm", "dppx", "x"],
    semitones: ["st"],
    time: ["s", "ms"]
  },
  types: {
    "abs()": "abs( <calc-sum> )",
    "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
    "acos()": "acos( <calc-sum> )",
    "alpha-value": "<number>|<percentage>",
    "angle-percentage": "<angle>|<percentage>",
    "angular-color-hint": "<angle-percentage>",
    "angular-color-stop": "<color>&&<color-stop-angle>?",
    "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
    "animateable-feature": "scroll-position|contents|<custom-ident>",
    "asin()": "asin( <calc-sum> )",
    "atan()": "atan( <calc-sum> )",
    "atan2()": "atan2( <calc-sum> , <calc-sum> )",
    attachment: "scroll|fixed|local",
    "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
    "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
    "attr-modifier": "i|s",
    "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
    "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
    axis: "block|inline|vertical|horizontal",
    "baseline-position": "[first|last]? baseline",
    "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
    "bg-image": "none|<image>",
    "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
    "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
    "blur()": "blur( <length> )",
    "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
    box: "border-box|padding-box|content-box",
    "brightness()": "brightness( <number-percentage> )",
    "calc()": "calc( <calc-sum> )",
    "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
    "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
    "calc-value": "<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )",
    "calc-constant": "e|pi|infinity|-infinity|NaN",
    "cf-final-image": "<image>|<color>",
    "cf-mixing-image": "<percentage>?&&<image>",
    "circle()": "circle( [<shape-radius>]? [at <position>]? )",
    "clamp()": "clamp( <calc-sum>#{3} )",
    "class-selector": "'.' <ident-token>",
    "clip-source": "<url>",
    color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
    "color-stop": "<color-stop-length>|<color-stop-angle>",
    "color-stop-angle": "<angle-percentage>{1,2}",
    "color-stop-length": "<length-percentage>{1,2}",
    "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
    combinator: "'>'|'+'|'~'|['||']",
    "common-lig-values": "[common-ligatures|no-common-ligatures]",
    "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
    "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
    "compositing-operator": "add|subtract|intersect|exclude",
    "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
    "compound-selector-list": "<compound-selector>#",
    "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
    "complex-selector-list": "<complex-selector>#",
    "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "contextual-alt-values": "[contextual|no-contextual]",
    "content-distribution": "space-between|space-around|space-evenly|stretch",
    "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
    "content-position": "center|start|end|flex-start|flex-end",
    "content-replacement": "<image>",
    "contrast()": "contrast( [<number-percentage>] )",
    "cos()": "cos( <calc-sum> )",
    counter: "<counter()>|<counters()>",
    "counter()": "counter( <counter-name> , <counter-style>? )",
    "counter-name": "<custom-ident>",
    "counter-style": "<counter-style-name>|symbols( )",
    "counter-style-name": "<custom-ident>",
    "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
    "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
    "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
    "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
    "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
    "display-box": "contents|none",
    "display-inside": "flow|flow-root|table|flex|grid|ruby",
    "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
    "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
    "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
    "display-outside": "block|inline|run-in",
    "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
    "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
    "east-asian-width-values": "[full-width|proportional-width]",
    "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
    "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
    "ending-shape": "circle|ellipse",
    "env()": "env( <custom-ident> , <declaration-value>? )",
    "exp()": "exp( <calc-sum> )",
    "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
    "family-name": "<string>|<custom-ident>+",
    "feature-tag-value": "<string> [<integer>|on|off]?",
    "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
    "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
    "feature-value-block-list": "<feature-value-block>+",
    "feature-value-declaration": "<custom-ident> : <integer>+ ;",
    "feature-value-declaration-list": "<feature-value-declaration>",
    "feature-value-name": "<custom-ident>",
    "fill-rule": "nonzero|evenodd",
    "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
    "filter-function-list": "[<filter-function>|<url>]+",
    "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "fixed-breadth": "<length-percentage>",
    "fixed-repeat": "repeat( [<integer [1,\u221E]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
    "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
    "font-variant-css21": "[normal|small-caps]",
    "font-weight-absolute": "normal|bold|<number [1,1000]>",
    "frequency-percentage": "<frequency>|<percentage>",
    "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
    "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
    "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
    "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
    gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
    "grayscale()": "grayscale( <number-percentage> )",
    "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
    "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
    "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    hue: "<number>|<angle>",
    "hue-rotate()": "hue-rotate( <angle> )",
    "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
    "hypot()": "hypot( <calc-sum># )",
    image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
    "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
    "image-set()": "image-set( <image-set-option># )",
    "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
    "image-src": "<url>|<string>",
    "image-tags": "ltr|rtl",
    "inflexible-breadth": "<length-percentage>|min-content|max-content|auto",
    "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
    "invert()": "invert( <number-percentage> )",
    "keyframes-name": "<custom-ident>|<string>",
    "keyframe-block": "<keyframe-selector># { <declaration-list> }",
    "keyframe-block-list": "<keyframe-block>+",
    "keyframe-selector": "from|to|<percentage>",
    "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
    "layer()": "layer( <layer-name> )",
    "layer-name": "<ident> ['.' <ident>]*",
    "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
    "leader()": "leader( <leader-type> )",
    "leader-type": "dotted|solid|space|<string>",
    "length-percentage": "<length>|<percentage>",
    "line-names": "'[' <custom-ident>* ']'",
    "line-name-list": "[<line-names>|<name-repeat>]+",
    "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
    "line-width": "<length>|thin|medium|thick",
    "linear-color-hint": "<length-percentage>",
    "linear-color-stop": "<color> <color-stop-length>?",
    "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "log()": "log( <calc-sum> , <calc-sum>? )",
    "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
    "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
    "mask-reference": "none|<image>|<mask-source>",
    "mask-source": "<url>",
    "masking-mode": "alpha|luminance|match-source",
    "matrix()": "matrix( <number>#{6} )",
    "matrix3d()": "matrix3d( <number>#{16} )",
    "max()": "max( <calc-sum># )",
    "media-and": "<media-in-parens> [and <media-in-parens>]+",
    "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
    "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
    "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
    "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
    "media-not": "not <media-in-parens>",
    "media-or": "<media-in-parens> [or <media-in-parens>]+",
    "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
    "media-query-list": "<media-query>#",
    "media-type": "<ident>",
    "mf-boolean": "<mf-name>",
    "mf-name": "<ident>",
    "mf-plain": "<mf-name> : <mf-value>",
    "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
    "mf-value": "<number>|<dimension>|<ident>|<ratio>",
    "min()": "min( <calc-sum># )",
    "minmax()": "minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )",
    "mod()": "mod( <calc-sum> , <calc-sum> )",
    "name-repeat": "repeat( [<integer [1,\u221E]>|auto-fill] , <line-names>+ )",
    "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
    "namespace-prefix": "<ident>",
    "ns-prefix": "[<ident-token>|'*']? '|'",
    "number-percentage": "<number>|<percentage>",
    "numeric-figure-values": "[lining-nums|oldstyle-nums]",
    "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
    "numeric-spacing-values": "[proportional-nums|tabular-nums]",
    nth: "<an-plus-b>|even|odd",
    "opacity()": "opacity( [<number-percentage>] )",
    "overflow-position": "unsafe|safe",
    "outline-radius": "<length>|<percentage>",
    "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
    "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
    "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
    "page-selector-list": "[<page-selector>#]?",
    "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
    "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
    "path()": "path( [<fill-rule> ,]? <string> )",
    "paint()": "paint( <ident> , <declaration-value>? )",
    "perspective()": "perspective( [<length [0,\u221E]>|none] )",
    "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
    position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
    "pow()": "pow( <calc-sum> , <calc-sum> )",
    "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
    "pseudo-element-selector": "':' <pseudo-class-selector>",
    "pseudo-page": ": [left|right|first|blank]",
    quote: "open-quote|close-quote|no-open-quote|no-close-quote",
    "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    ratio: "<number [0,\u221E]> [/ <number [0,\u221E]>]?",
    "relative-selector": "<combinator>? <complex-selector>",
    "relative-selector-list": "<relative-selector>#",
    "relative-size": "larger|smaller",
    "rem()": "rem( <calc-sum> , <calc-sum> )",
    "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
    "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "reversed-counter-name": "reversed( <counter-name> )",
    "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
    "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
    "rotate()": "rotate( [<angle>|<zero>] )",
    "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
    "rotateX()": "rotateX( [<angle>|<zero>] )",
    "rotateY()": "rotateY( [<angle>|<zero>] )",
    "rotateZ()": "rotateZ( [<angle>|<zero>] )",
    "round()": "round( <rounding-strategy>? , <calc-sum> , <calc-sum> )",
    "rounding-strategy": "nearest|up|down|to-zero",
    "saturate()": "saturate( <number-percentage> )",
    "scale()": "scale( [<number>|<percentage>]#{1,2} )",
    "scale3d()": "scale3d( [<number>|<percentage>]#{3} )",
    "scaleX()": "scaleX( [<number>|<percentage>] )",
    "scaleY()": "scaleY( [<number>|<percentage>] )",
    "scaleZ()": "scaleZ( [<number>|<percentage>] )",
    scroller: "root|nearest",
    "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
    "shape-radius": "<length-percentage>|closest-side|farthest-side",
    "sign()": "sign( <calc-sum> )",
    "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
    "skewX()": "skewX( [<angle>|<zero>] )",
    "skewY()": "skewY( [<angle>|<zero>] )",
    "sepia()": "sepia( <number-percentage> )",
    shadow: "inset?&&<length>{2,4}&&<color>?",
    "shadow-t": "[<length>{2,3}&&<color>?]",
    shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
    "shape-box": "<box>|margin-box",
    "side-or-corner": "[left|right]||[top|bottom]",
    "sin()": "sin( <calc-sum> )",
    "single-animation": "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
    "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
    "single-animation-fill-mode": "none|forwards|backwards|both",
    "single-animation-iteration-count": "infinite|<number>",
    "single-animation-play-state": "running|paused",
    "single-animation-timeline": "auto|none|<timeline-name>|scroll( <axis>? <scroller>? )",
    "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
    "single-transition-property": "all|<custom-ident>",
    size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
    "sqrt()": "sqrt( <calc-sum> )",
    "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
    "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
    "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
    "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
    "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
    "supports-feature": "<supports-decl>|<supports-selector-fn>",
    "supports-decl": "( <declaration> )",
    "supports-selector-fn": "selector( <complex-selector> )",
    symbol: "<string>|<image>|<custom-ident>",
    "tan()": "tan( <calc-sum> )",
    target: "<target-counter()>|<target-counters()>|<target-text()>",
    "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
    "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
    "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
    "time-percentage": "<time>|<percentage>",
    "timeline-name": "<custom-ident>|<string>",
    "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
    "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
    "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
    "track-repeat": "repeat( [<integer [1,\u221E]>] , [<line-names>? <track-size>]+ <line-names>? )",
    "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )",
    "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
    "transform-list": "<transform-function>+",
    "translate()": "translate( <length-percentage> , <length-percentage>? )",
    "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
    "translateX()": "translateX( <length-percentage> )",
    "translateY()": "translateY( <length-percentage> )",
    "translateZ()": "translateZ( <length> )",
    "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
    "type-selector": "<wq-name>|<ns-prefix>? '*'",
    "var()": "var( <custom-property-name> , <declaration-value>? )",
    "viewport-length": "auto|<length-percentage>",
    "visual-box": "content-box|padding-box|border-box",
    "wq-name": "<ns-prefix>? <ident-token>",
    "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
    "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
    "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
    "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
    "-legacy-radial-gradient-shape": "circle|ellipse",
    "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
    "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
    "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
    "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
    "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
    "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
    "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
    "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
    "-webkit-gradient-radius": "<length>|<percentage>",
    "-webkit-gradient-type": "linear|radial",
    "-webkit-mask-box-repeat": "repeat|stretch|round",
    "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
    "-ms-filter-function-list": "<-ms-filter-function>+",
    "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
    "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
    "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
    "-ms-filter": "<string>",
    age: "child|young|old",
    "attr-name": "<wq-name>",
    "attr-fallback": "<any-value>",
    "bg-clip": "<box>|border|text",
    bottom: "<length>|auto",
    "generic-voice": "[<age>? <gender> <integer>?]",
    gender: "male|female|neutral",
    left: "<length>|auto",
    "mask-image": "<mask-reference>#",
    paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
    right: "<length>|auto",
    "scroll-timeline-axis": "block|inline|vertical|horizontal",
    "scroll-timeline-name": "none|<custom-ident>",
    "single-animation-composition": "replace|add|accumulate",
    "svg-length": "<percentage>|<length>|<number>",
    "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
    top: "<length>|auto",
    x: "<number>",
    y: "<number>",
    declaration: "<ident-token> : <declaration-value>? ['!' important]?",
    "declaration-list": "[<declaration>? ';']* <declaration>?",
    url: "url( <string> <url-modifier>* )|<url-token>",
    "url-modifier": "<ident>|<function-token> <any-value> )",
    "number-zero-one": "<number [0,1]>",
    "number-one-or-greater": "<number [1,\u221E]>",
    "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
  },
  properties: {
    "--*": "<declaration-value>",
    "-ms-accelerator": "false|true",
    "-ms-block-progression": "tb|rl|bt|lr",
    "-ms-content-zoom-chaining": "none|chained",
    "-ms-content-zooming": "none|zoom",
    "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
    "-ms-content-zoom-limit-max": "<percentage>",
    "-ms-content-zoom-limit-min": "<percentage>",
    "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
    "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
    "-ms-content-zoom-snap-type": "none|proximity|mandatory",
    "-ms-filter": "<string>",
    "-ms-flow-from": "[none|<custom-ident>]#",
    "-ms-flow-into": "[none|<custom-ident>]#",
    "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
    "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
    "-ms-high-contrast-adjust": "auto|none",
    "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
    "-ms-hyphenate-limit-lines": "no-limit|<integer>",
    "-ms-hyphenate-limit-zone": "<percentage>|<length>",
    "-ms-ime-align": "auto|after",
    "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
    "-ms-scrollbar-3dlight-color": "<color>",
    "-ms-scrollbar-arrow-color": "<color>",
    "-ms-scrollbar-base-color": "<color>",
    "-ms-scrollbar-darkshadow-color": "<color>",
    "-ms-scrollbar-face-color": "<color>",
    "-ms-scrollbar-highlight-color": "<color>",
    "-ms-scrollbar-shadow-color": "<color>",
    "-ms-scrollbar-track-color": "<color>",
    "-ms-scroll-chaining": "chained|none",
    "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
    "-ms-scroll-limit-x-max": "auto|<length>",
    "-ms-scroll-limit-x-min": "<length>",
    "-ms-scroll-limit-y-max": "auto|<length>",
    "-ms-scroll-limit-y-min": "<length>",
    "-ms-scroll-rails": "none|railed",
    "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-type": "none|proximity|mandatory",
    "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
    "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
    "-ms-scroll-translation": "none|vertical-to-horizontal",
    "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
    "-ms-touch-select": "grippers|none",
    "-ms-user-select": "none|element|text",
    "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
    "-ms-wrap-margin": "<length>",
    "-ms-wrap-through": "wrap|none",
    "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
    "-moz-binding": "<url>|none",
    "-moz-border-bottom-colors": "<color>+|none",
    "-moz-border-left-colors": "<color>+|none",
    "-moz-border-right-colors": "<color>+|none",
    "-moz-border-top-colors": "<color>+|none",
    "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
    "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
    "-moz-force-broken-image-icon": "0|1",
    "-moz-image-region": "<shape>|auto",
    "-moz-orient": "inline|block|horizontal|vertical",
    "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
    "-moz-outline-radius-bottomleft": "<outline-radius>",
    "-moz-outline-radius-bottomright": "<outline-radius>",
    "-moz-outline-radius-topleft": "<outline-radius>",
    "-moz-outline-radius-topright": "<outline-radius>",
    "-moz-stack-sizing": "ignore|stretch-to-fit",
    "-moz-text-blink": "none|blink",
    "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
    "-moz-user-input": "auto|none|enabled|disabled",
    "-moz-user-modify": "read-only|read-write|write-only",
    "-moz-window-dragging": "drag|no-drag",
    "-moz-window-shadow": "default|menu|tooltip|sheet|none",
    "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
    "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
    "-webkit-border-before-color": "<color>",
    "-webkit-border-before-style": "<'border-style'>",
    "-webkit-border-before-width": "<'border-width'>",
    "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
    "-webkit-line-clamp": "none|<integer>",
    "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
    "-webkit-mask-attachment": "<attachment>#",
    "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
    "-webkit-mask-composite": "<composite-style>#",
    "-webkit-mask-image": "<mask-reference>#",
    "-webkit-mask-origin": "[<box>|border|padding|content]#",
    "-webkit-mask-position": "<position>#",
    "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
    "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
    "-webkit-mask-repeat": "<repeat-style>#",
    "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
    "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
    "-webkit-mask-size": "<bg-size>#",
    "-webkit-overflow-scrolling": "auto|touch",
    "-webkit-tap-highlight-color": "<color>",
    "-webkit-text-fill-color": "<color>",
    "-webkit-text-stroke": "<length>||<color>",
    "-webkit-text-stroke-color": "<color>",
    "-webkit-text-stroke-width": "<length>",
    "-webkit-touch-callout": "default|none",
    "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
    "accent-color": "auto|<color>",
    "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
    "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
    "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
    "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
    all: "initial|inherit|unset|revert|revert-layer",
    animation: "<single-animation>#",
    "animation-composition": "<single-animation-composition>#",
    "animation-delay": "<time>#",
    "animation-direction": "<single-animation-direction>#",
    "animation-duration": "<time>#",
    "animation-fill-mode": "<single-animation-fill-mode>#",
    "animation-iteration-count": "<single-animation-iteration-count>#",
    "animation-name": "[none|<keyframes-name>]#",
    "animation-play-state": "<single-animation-play-state>#",
    "animation-timing-function": "<easing-function>#",
    "animation-timeline": "<single-animation-timeline>#",
    appearance: "none|auto|textfield|menulist-button|<compat-auto>",
    "aspect-ratio": "auto|<ratio>",
    azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
    "backdrop-filter": "none|<filter-function-list>",
    "backface-visibility": "visible|hidden",
    background: "[<bg-layer> ,]* <final-bg-layer>",
    "background-attachment": "<attachment>#",
    "background-blend-mode": "<blend-mode>#",
    "background-clip": "<bg-clip>#",
    "background-color": "<color>",
    "background-image": "<bg-image>#",
    "background-origin": "<box>#",
    "background-position": "<bg-position>#",
    "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
    "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
    "background-repeat": "<repeat-style>#",
    "background-size": "<bg-size>#",
    "block-overflow": "clip|ellipsis|<string>",
    "block-size": "<'width'>",
    border: "<line-width>||<line-style>||<color>",
    "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-color": "<'border-top-color'>{1,2}",
    "border-block-style": "<'border-top-style'>",
    "border-block-width": "<'border-top-width'>",
    "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-end-color": "<'border-top-color'>",
    "border-block-end-style": "<'border-top-style'>",
    "border-block-end-width": "<'border-top-width'>",
    "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-start-color": "<'border-top-color'>",
    "border-block-start-style": "<'border-top-style'>",
    "border-block-start-width": "<'border-top-width'>",
    "border-bottom": "<line-width>||<line-style>||<color>",
    "border-bottom-color": "<'border-top-color'>",
    "border-bottom-left-radius": "<length-percentage>{1,2}",
    "border-bottom-right-radius": "<length-percentage>{1,2}",
    "border-bottom-style": "<line-style>",
    "border-bottom-width": "<line-width>",
    "border-collapse": "collapse|separate",
    "border-color": "<color>{1,4}",
    "border-end-end-radius": "<length-percentage>{1,2}",
    "border-end-start-radius": "<length-percentage>{1,2}",
    "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
    "border-image-outset": "[<length>|<number>]{1,4}",
    "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
    "border-image-slice": "<number-percentage>{1,4}&&fill?",
    "border-image-source": "none|<image>",
    "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
    "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-color": "<'border-top-color'>{1,2}",
    "border-inline-style": "<'border-top-style'>",
    "border-inline-width": "<'border-top-width'>",
    "border-inline-end-color": "<'border-top-color'>",
    "border-inline-end-style": "<'border-top-style'>",
    "border-inline-end-width": "<'border-top-width'>",
    "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-start-color": "<'border-top-color'>",
    "border-inline-start-style": "<'border-top-style'>",
    "border-inline-start-width": "<'border-top-width'>",
    "border-left": "<line-width>||<line-style>||<color>",
    "border-left-color": "<color>",
    "border-left-style": "<line-style>",
    "border-left-width": "<line-width>",
    "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
    "border-right": "<line-width>||<line-style>||<color>",
    "border-right-color": "<color>",
    "border-right-style": "<line-style>",
    "border-right-width": "<line-width>",
    "border-spacing": "<length> <length>?",
    "border-start-end-radius": "<length-percentage>{1,2}",
    "border-start-start-radius": "<length-percentage>{1,2}",
    "border-style": "<line-style>{1,4}",
    "border-top": "<line-width>||<line-style>||<color>",
    "border-top-color": "<color>",
    "border-top-left-radius": "<length-percentage>{1,2}",
    "border-top-right-radius": "<length-percentage>{1,2}",
    "border-top-style": "<line-style>",
    "border-top-width": "<line-width>",
    "border-width": "<line-width>{1,4}",
    bottom: "<length>|<percentage>|auto",
    "box-align": "start|center|end|baseline|stretch",
    "box-decoration-break": "slice|clone",
    "box-direction": "normal|reverse|inherit",
    "box-flex": "<number>",
    "box-flex-group": "<integer>",
    "box-lines": "single|multiple",
    "box-ordinal-group": "<integer>",
    "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
    "box-pack": "start|center|end|justify",
    "box-shadow": "none|<shadow>#",
    "box-sizing": "content-box|border-box",
    "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
    "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
    caret: "<'caret-color'>||<'caret-shape'>",
    "caret-color": "auto|<color>",
    "caret-shape": "auto|bar|block|underscore",
    clear: "none|left|right|both|inline-start|inline-end",
    clip: "<shape>|auto",
    "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
    color: "<color>",
    "print-color-adjust": "economy|exact",
    "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
    "column-count": "<integer>|auto",
    "column-fill": "auto|balance|balance-all",
    "column-gap": "normal|<length-percentage>",
    "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
    "column-rule-color": "<color>",
    "column-rule-style": "<'border-style'>",
    "column-rule-width": "<'border-width'>",
    "column-span": "none|all",
    "column-width": "<length>|auto",
    columns: "<'column-width'>||<'column-count'>",
    contain: "none|strict|content|[[size||inline-size]||layout||style||paint]",
    "contain-intrinsic-size": "[none|<length>|auto <length>]{1,2}",
    "contain-intrinsic-block-size": "none|<length>|auto <length>",
    "contain-intrinsic-height": "none|<length>|auto <length>",
    "contain-intrinsic-inline-size": "none|<length>|auto <length>",
    "contain-intrinsic-width": "none|<length>|auto <length>",
    content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
    "content-visibility": "visible|auto|hidden",
    "counter-increment": "[<counter-name> <integer>?]+|none",
    "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
    "counter-set": "[<counter-name> <integer>?]+|none",
    cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
    direction: "ltr|rtl",
    display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
    "empty-cells": "show|hide",
    filter: "none|<filter-function-list>|<-ms-filter-function-list>",
    flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
    "flex-basis": "content|<'width'>",
    "flex-direction": "row|row-reverse|column|column-reverse",
    "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
    "flex-grow": "<number>",
    "flex-shrink": "<number>",
    "flex-wrap": "nowrap|wrap|wrap-reverse",
    float: "left|right|none|inline-start|inline-end",
    font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
    "font-family": "[<family-name>|<generic-family>]#",
    "font-feature-settings": "normal|<feature-tag-value>#",
    "font-kerning": "auto|normal|none",
    "font-language-override": "normal|<string>",
    "font-optical-sizing": "auto|none",
    "font-variation-settings": "normal|[<string> <number>]#",
    "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
    "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
    "font-smooth": "auto|never|always|<absolute-size>|<length>",
    "font-stretch": "<font-stretch-absolute>",
    "font-style": "normal|italic|oblique <angle>?",
    "font-synthesis": "none|[weight||style||small-caps]",
    "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
    "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
    "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
    "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
    "font-variant-position": "normal|sub|super",
    "font-weight": "<font-weight-absolute>|bolder|lighter",
    "forced-color-adjust": "auto|none",
    gap: "<'row-gap'> <'column-gap'>?",
    grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
    "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
    "grid-auto-columns": "<track-size>+",
    "grid-auto-flow": "[row|column]||dense",
    "grid-auto-rows": "<track-size>+",
    "grid-column": "<grid-line> [/ <grid-line>]?",
    "grid-column-end": "<grid-line>",
    "grid-column-gap": "<length-percentage>",
    "grid-column-start": "<grid-line>",
    "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
    "grid-row": "<grid-line> [/ <grid-line>]?",
    "grid-row-end": "<grid-line>",
    "grid-row-gap": "<length-percentage>",
    "grid-row-start": "<grid-line>",
    "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
    "grid-template-areas": "none|<string>+",
    "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
    height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "hyphenate-character": "auto|<string>",
    hyphens: "none|manual|auto",
    "image-orientation": "from-image|<angle>|[<angle>? flip]",
    "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
    "image-resolution": "[from-image||<resolution>]&&snap?",
    "ime-mode": "auto|normal|active|inactive|disabled",
    "initial-letter": "normal|[<number> <integer>?]",
    "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
    "inline-size": "<'width'>",
    "input-security": "auto|none",
    inset: "<'top'>{1,4}",
    "inset-block": "<'top'>{1,2}",
    "inset-block-end": "<'top'>",
    "inset-block-start": "<'top'>",
    "inset-inline": "<'top'>{1,2}",
    "inset-inline-end": "<'top'>",
    "inset-inline-start": "<'top'>",
    isolation: "auto|isolate",
    "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
    "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
    "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
    "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
    left: "<length>|<percentage>|auto",
    "letter-spacing": "normal|<length-percentage>",
    "line-break": "auto|loose|normal|strict|anywhere",
    "line-clamp": "none|<integer>",
    "line-height": "normal|<number>|<length>|<percentage>",
    "line-height-step": "<length>",
    "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
    "list-style-image": "<image>|none",
    "list-style-position": "inside|outside",
    "list-style-type": "<counter-style>|<string>|none",
    margin: "[<length>|<percentage>|auto]{1,4}",
    "margin-block": "<'margin-left'>{1,2}",
    "margin-block-end": "<'margin-left'>",
    "margin-block-start": "<'margin-left'>",
    "margin-bottom": "<length>|<percentage>|auto",
    "margin-inline": "<'margin-left'>{1,2}",
    "margin-inline-end": "<'margin-left'>",
    "margin-inline-start": "<'margin-left'>",
    "margin-left": "<length>|<percentage>|auto",
    "margin-right": "<length>|<percentage>|auto",
    "margin-top": "<length>|<percentage>|auto",
    "margin-trim": "none|in-flow|all",
    mask: "<mask-layer>#",
    "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
    "mask-border-mode": "luminance|alpha",
    "mask-border-outset": "[<length>|<number>]{1,4}",
    "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
    "mask-border-slice": "<number-percentage>{1,4} fill?",
    "mask-border-source": "none|<image>",
    "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
    "mask-clip": "[<geometry-box>|no-clip]#",
    "mask-composite": "<compositing-operator>#",
    "mask-image": "<mask-reference>#",
    "mask-mode": "<masking-mode>#",
    "mask-origin": "<geometry-box>#",
    "mask-position": "<position>#",
    "mask-repeat": "<repeat-style>#",
    "mask-size": "<bg-size>#",
    "mask-type": "luminance|alpha",
    "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
    "math-depth": "auto-add|add( <integer> )|<integer>",
    "math-shift": "normal|compact",
    "math-style": "normal|compact",
    "max-block-size": "<'max-width'>",
    "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "max-inline-size": "<'max-width'>",
    "max-lines": "none|<integer>",
    "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "min-block-size": "<'min-width'>",
    "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "min-inline-size": "<'min-width'>",
    "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "mix-blend-mode": "<blend-mode>|plus-lighter",
    "object-fit": "fill|contain|cover|none|scale-down",
    "object-position": "<position>",
    offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
    "offset-anchor": "auto|<position>",
    "offset-distance": "<length-percentage>",
    "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
    "offset-position": "auto|<position>",
    "offset-rotate": "[auto|reverse]||<angle>",
    opacity: "<alpha-value>",
    order: "<integer>",
    orphans: "<integer>",
    outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
    "outline-color": "<color>|invert",
    "outline-offset": "<length>",
    "outline-style": "auto|<'border-style'>",
    "outline-width": "<line-width>",
    overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
    "overflow-anchor": "auto|none",
    "overflow-block": "visible|hidden|clip|scroll|auto",
    "overflow-clip-box": "padding-box|content-box",
    "overflow-clip-margin": "<visual-box>||<length [0,\u221E]>",
    "overflow-inline": "visible|hidden|clip|scroll|auto",
    "overflow-wrap": "normal|break-word|anywhere",
    "overflow-x": "visible|hidden|clip|scroll|auto",
    "overflow-y": "visible|hidden|clip|scroll|auto",
    "overscroll-behavior": "[contain|none|auto]{1,2}",
    "overscroll-behavior-block": "contain|none|auto",
    "overscroll-behavior-inline": "contain|none|auto",
    "overscroll-behavior-x": "contain|none|auto",
    "overscroll-behavior-y": "contain|none|auto",
    padding: "[<length>|<percentage>]{1,4}",
    "padding-block": "<'padding-left'>{1,2}",
    "padding-block-end": "<'padding-left'>",
    "padding-block-start": "<'padding-left'>",
    "padding-bottom": "<length>|<percentage>",
    "padding-inline": "<'padding-left'>{1,2}",
    "padding-inline-end": "<'padding-left'>",
    "padding-inline-start": "<'padding-left'>",
    "padding-left": "<length>|<percentage>",
    "padding-right": "<length>|<percentage>",
    "padding-top": "<length>|<percentage>",
    "page-break-after": "auto|always|avoid|left|right|recto|verso",
    "page-break-before": "auto|always|avoid|left|right|recto|verso",
    "page-break-inside": "auto|avoid",
    "paint-order": "normal|[fill||stroke||markers]",
    perspective: "none|<length>",
    "perspective-origin": "<position>",
    "place-content": "<'align-content'> <'justify-content'>?",
    "place-items": "<'align-items'> <'justify-items'>?",
    "place-self": "<'align-self'> <'justify-self'>?",
    "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
    position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
    quotes: "none|auto|[<string> <string>]+",
    resize: "none|both|horizontal|vertical|block|inline",
    right: "<length>|<percentage>|auto",
    rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
    "row-gap": "normal|<length-percentage>",
    "ruby-align": "start|center|space-between|space-around",
    "ruby-merge": "separate|collapse|auto",
    "ruby-position": "[alternate||[over|under]]|inter-character",
    scale: "none|<number>{1,3}",
    "scrollbar-color": "auto|<color>{2}",
    "scrollbar-gutter": "auto|stable&&both-edges?",
    "scrollbar-width": "auto|thin|none",
    "scroll-behavior": "auto|smooth",
    "scroll-margin": "<length>{1,4}",
    "scroll-margin-block": "<length>{1,2}",
    "scroll-margin-block-start": "<length>",
    "scroll-margin-block-end": "<length>",
    "scroll-margin-bottom": "<length>",
    "scroll-margin-inline": "<length>{1,2}",
    "scroll-margin-inline-start": "<length>",
    "scroll-margin-inline-end": "<length>",
    "scroll-margin-left": "<length>",
    "scroll-margin-right": "<length>",
    "scroll-margin-top": "<length>",
    "scroll-padding": "[auto|<length-percentage>]{1,4}",
    "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-block-start": "auto|<length-percentage>",
    "scroll-padding-block-end": "auto|<length-percentage>",
    "scroll-padding-bottom": "auto|<length-percentage>",
    "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-inline-start": "auto|<length-percentage>",
    "scroll-padding-inline-end": "auto|<length-percentage>",
    "scroll-padding-left": "auto|<length-percentage>",
    "scroll-padding-right": "auto|<length-percentage>",
    "scroll-padding-top": "auto|<length-percentage>",
    "scroll-snap-align": "[none|start|end|center]{1,2}",
    "scroll-snap-coordinate": "none|<position>#",
    "scroll-snap-destination": "<position>",
    "scroll-snap-points-x": "none|repeat( <length-percentage> )",
    "scroll-snap-points-y": "none|repeat( <length-percentage> )",
    "scroll-snap-stop": "normal|always",
    "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
    "scroll-snap-type-x": "none|mandatory|proximity",
    "scroll-snap-type-y": "none|mandatory|proximity",
    "scroll-timeline": "<scroll-timeline-name>||<scroll-timeline-axis>",
    "scroll-timeline-axis": "block|inline|vertical|horizontal",
    "scroll-timeline-name": "none|<custom-ident>",
    "shape-image-threshold": "<alpha-value>",
    "shape-margin": "<length-percentage>",
    "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
    "tab-size": "<integer>|<length>",
    "table-layout": "auto|fixed",
    "text-align": "start|end|left|right|center|justify|match-parent",
    "text-align-last": "auto|start|end|left|right|center|justify",
    "text-combine-upright": "none|all|[digits <integer>?]",
    "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
    "text-decoration-color": "<color>",
    "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
    "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
    "text-decoration-skip-ink": "auto|all|none",
    "text-decoration-style": "solid|double|dotted|dashed|wavy",
    "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
    "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
    "text-emphasis-color": "<color>",
    "text-emphasis-position": "[over|under]&&[right|left]",
    "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
    "text-indent": "<length-percentage>&&hanging?&&each-line?",
    "text-justify": "auto|inter-character|inter-word|none",
    "text-orientation": "mixed|upright|sideways",
    "text-overflow": "[clip|ellipsis|<string>]{1,2}",
    "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
    "text-shadow": "none|<shadow-t>#",
    "text-size-adjust": "none|auto|<percentage>",
    "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
    "text-underline-offset": "auto|<length>|<percentage>",
    "text-underline-position": "auto|from-font|[under||[left|right]]",
    top: "<length>|<percentage>|auto",
    "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
    transform: "none|<transform-list>",
    "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
    "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
    "transform-style": "flat|preserve-3d",
    transition: "<single-transition>#",
    "transition-delay": "<time>#",
    "transition-duration": "<time>#",
    "transition-property": "none|<single-transition-property>#",
    "transition-timing-function": "<easing-function>#",
    translate: "none|<length-percentage> [<length-percentage> <length>?]?",
    "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
    "user-select": "auto|text|none|contain|all",
    "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
    visibility: "visible|hidden|collapse",
    "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
    widows: "<integer>",
    width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
    "will-change": "auto|<animateable-feature>#",
    "word-break": "normal|break-all|keep-all|break-word",
    "word-spacing": "normal|<length>",
    "word-wrap": "normal|break-word",
    "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
    "z-index": "auto|<integer>",
    zoom: "normal|reset|<number>|<percentage>",
    "-moz-background-clip": "padding|border",
    "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
    "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
    "-moz-border-radius-topleft": "<'border-top-left-radius'>",
    "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
    "-moz-control-character-visibility": "visible|hidden",
    "-moz-osx-font-smoothing": "auto|grayscale",
    "-moz-user-select": "none|text|all|-moz-none",
    "-ms-flex-align": "start|end|center|baseline|stretch",
    "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
    "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
    "-ms-flex-negative": "<'flex-shrink'>",
    "-ms-flex-pack": "start|end|center|justify|distribute",
    "-ms-flex-order": "<integer>",
    "-ms-flex-positive": "<'flex-grow'>",
    "-ms-flex-preferred-size": "<'flex-basis'>",
    "-ms-interpolation-mode": "nearest-neighbor|bicubic",
    "-ms-grid-column-align": "start|end|center|stretch",
    "-ms-grid-row-align": "start|end|center|stretch",
    "-ms-hyphenate-limit-last": "none|always|column|page|spread",
    "-webkit-background-clip": "[<box>|border|padding|content|text]#",
    "-webkit-column-break-after": "always|auto|avoid",
    "-webkit-column-break-before": "always|auto|avoid",
    "-webkit-column-break-inside": "always|auto|avoid",
    "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
    "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
    "-webkit-print-color-adjust": "economy|exact",
    "-webkit-text-security": "none|circle|disc|square",
    "-webkit-user-drag": "none|element|auto",
    "-webkit-user-select": "auto|none|text|all",
    "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
    "baseline-shift": "baseline|sub|super|<svg-length>",
    behavior: "<url>+",
    "clip-rule": "nonzero|evenodd",
    cue: "<'cue-before'> <'cue-after'>?",
    "cue-after": "<url> <decibel>?|none",
    "cue-before": "<url> <decibel>?|none",
    "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
    fill: "<paint>",
    "fill-opacity": "<number-zero-one>",
    "fill-rule": "nonzero|evenodd",
    "glyph-orientation-horizontal": "<angle>",
    "glyph-orientation-vertical": "<angle>",
    kerning: "auto|<svg-length>",
    marker: "none|<url>",
    "marker-end": "none|<url>",
    "marker-mid": "none|<url>",
    "marker-start": "none|<url>",
    pause: "<'pause-before'> <'pause-after'>?",
    "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    rest: "<'rest-before'> <'rest-after'>?",
    "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
    src: "[<url> [format( <string># )]?|local( <family-name> )]#",
    speak: "auto|none|normal",
    "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
    stroke: "<paint>",
    "stroke-dasharray": "none|[<svg-length>+]#",
    "stroke-dashoffset": "<svg-length>",
    "stroke-linecap": "butt|round|square",
    "stroke-linejoin": "miter|round|bevel",
    "stroke-miterlimit": "<number-one-or-greater>",
    "stroke-opacity": "<number-zero-one>",
    "stroke-width": "<svg-length>",
    "text-anchor": "start|middle|end",
    "unicode-range": "<urange>#",
    "voice-balance": "<number>|left|center|right|leftwards|rightwards",
    "voice-duration": "auto|<time>",
    "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
    "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
    "voice-stress": "normal|strong|moderate|none|reduced",
    "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
  },
  atrules: {
    charset: {
      prelude: "<string>",
      descriptors: null
    },
    "counter-style": {
      prelude: "<counter-style-name>",
      descriptors: {
        "additive-symbols": "[<integer>&&<symbol>]#",
        fallback: "<counter-style-name>",
        negative: "<symbol> <symbol>?",
        pad: "<integer>&&<symbol>",
        prefix: "<symbol>",
        range: "[[<integer>|infinite]{2}]#|auto",
        "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
        suffix: "<symbol>",
        symbols: "<symbol>+",
        system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
      }
    },
    document: {
      prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
      descriptors: null
    },
    "font-face": {
      prelude: null,
      descriptors: {
        "ascent-override": "normal|<percentage>",
        "descent-override": "normal|<percentage>",
        "font-display": "[auto|block|swap|fallback|optional]",
        "font-family": "<family-name>",
        "font-feature-settings": "normal|<feature-tag-value>#",
        "font-variation-settings": "normal|[<string> <number>]#",
        "font-stretch": "<font-stretch-absolute>{1,2}",
        "font-style": "normal|italic|oblique <angle>{0,2}",
        "font-weight": "<font-weight-absolute>{1,2}",
        "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
        "line-gap-override": "normal|<percentage>",
        "size-adjust": "<percentage>",
        src: "[<url> [format( <string># )]?|local( <family-name> )]#",
        "unicode-range": "<urange>#"
      }
    },
    "font-feature-values": {
      prelude: "<family-name>#",
      descriptors: null
    },
    import: {
      prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
      descriptors: null
    },
    keyframes: {
      prelude: "<keyframes-name>",
      descriptors: null
    },
    layer: {
      prelude: "[<layer-name>#|<layer-name>?]",
      descriptors: null
    },
    media: {
      prelude: "<media-query-list>",
      descriptors: null
    },
    namespace: {
      prelude: "<namespace-prefix>? [<string>|<url>]",
      descriptors: null
    },
    page: {
      prelude: "<page-selector-list>",
      descriptors: {
        bleed: "auto|<length>",
        marks: "none|[crop||cross]",
        size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
      }
    },
    property: {
      prelude: "<custom-property-name>",
      descriptors: {
        syntax: "<string>",
        inherits: "true|false",
        "initial-value": "<string>"
      }
    },
    "scroll-timeline": {
      prelude: "<timeline-name>",
      descriptors: null
    },
    supports: {
      prelude: "<supports-condition>",
      descriptors: null
    },
    viewport: {
      prelude: null,
      descriptors: {
        height: "<viewport-length>{1,2}",
        "max-height": "<viewport-length>",
        "max-width": "<viewport-length>",
        "max-zoom": "auto|<number>|<percentage>",
        "min-height": "<viewport-length>",
        "min-width": "<viewport-length>",
        "min-zoom": "auto|<number>|<percentage>",
        orientation: "auto|portrait|landscape",
        "user-zoom": "zoom|fixed",
        "viewport-fit": "auto|contain|cover",
        width: "<viewport-length>{1,2}",
        zoom: "auto|<number>|<percentage>"
      }
    },
    nest: {
      prelude: "<complex-selector-list>",
      descriptors: null
    }
  },
  node: aY,
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atrulePrelude(e) {
      return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block() {
      return this.Block(!0);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: "Value"
  },
  scope: i8,
  atrule: {
    "font-face": {
      parse: {
        prelude: null,
        block() {
          return this.Block(!0);
        }
      }
    },
    import: {
      parse: {
        prelude() {
          let e = this.createList();
          switch (this.skipSC(), this.tokenType) {
            case rA.String:
              e.push(this.String());
              break;
            case rA.Url:
            case rA.Function:
              e.push(this.Url());
              break;
            default:
              this.error("String or url() is expected");
          }
          (this.lookupNonWSType(0) === rA.Ident || this.lookupNonWSType(0) === rA.LeftParenthesis) && e.push(this.MediaQueryList());
          return e;
        },
        block: null
      }
    },
    media: {
      parse: {
        prelude() {
          return this.createSingleNodeList(this.MediaQueryList());
        },
        block(e = !1) {
          return this.Block(e);
        }
      }
    },
    nest: {
      parse: {
        prelude() {
          return this.createSingleNodeList(this.SelectorList());
        },
        block() {
          return this.Block(!0);
        }
      }
    },
    page: {
      parse: {
        prelude() {
          return this.createSingleNodeList(this.SelectorList());
        },
        block() {
          return this.Block(!0);
        }
      }
    },
    supports: {
      parse: {
        prelude() {
          let e = ot.call(this);
          null === this.getFirstListNode(e) && this.error("Condition is expected");
          return e;
        },
        block(e = !1) {
          return this.Block(e);
        }
      }
    }
  },
  pseudo: {
    dir: oa,
    has: or,
    lang: oa,
    matches: or,
    is: or,
    "-moz-any": or,
    "-webkit-any": or,
    where: or,
    not: or,
    "nth-child": oi,
    "nth-last-child": oi,
    "nth-last-of-type": oi,
    "nth-of-type": oi,
    slotted: on,
    host: on,
    "host-context": on
  },
  node: oo,
  node: aY
});
var ol = {};
ol.SyntaxError = as.SyntaxError;
ol.generate = nM.generate;
ol.parse = ai.parse;
ol.walk = aB.walk;
var oc = {};
oc.clone = function e(t) {
  let r = {};
  for (let n in t) {
    let a = t[n];
    a && (Array.isArray(a) || a instanceof rQ.List ? a = a.map(e) : a.constructor === Object && (a = e(a)));
    r[n] = a;
  }
  return r;
};
var ou = {};
ou.decode = function (e) {
  let t = e.length - 1;
  let r = "";
  for (let n = 0; n < e.length; n++) {
    let a = e.charCodeAt(n);
    if (92 === a) {
      if (n === t) break;
      if (a = e.charCodeAt(++n), rT.isValidEscape(92, a)) {
        let t = n - 1;
        let a = rB.consumeEscaped(e, t);
        n = a - 1;
        r += rB.decodeEscaped(e.substring(t + 1, a));
      } else 13 === a && 10 === e.charCodeAt(n + 1) && n++;
    } else r += e[n];
  }
  return r;
};
ou.encode = function (e) {
  let t = "";
  if (1 === e.length && 45 === e.charCodeAt(0)) return "\\-";
  for (let r = 0; r < e.length; r++) {
    let n = e.charCodeAt(r);
    if (0 === n) {
      t += "\uFFFD";
      continue;
    }
    if (n <= 31 || 127 === n || n >= 48 && n <= 57 && (0 === r || 1 === r && 45 === e.charCodeAt(0))) {
      t += "\\" + n.toString(16) + " ";
      continue;
    }
    rT.isName(n) ? t += e.charAt(r) : t += "\\" + e.charAt(r);
  }
  return t;
};
let {
  tokenize,
  parse,
  generate,
  lexer,
  createLexer,
  walk,
  find,
  findLast,
  findAll,
  toPlainObject,
  fromPlainObject,
  fork
} = os;
rS.version = void 0;
rS.createSyntax = aX;
rS.List = rQ.List;
rS.Lexer = nN.Lexer;
rS.definitionSyntax = ol;
rS.clone = oc.clone;
rS.isCustomProperty = nB.isCustomProperty;
rS.keyword = nB.keyword;
rS.property = nB.property;
rS.vendorPrefix = nB.vendorPrefix;
rS.ident = ou;
rS.string = iW;
rS.url = i2;
rS.tokenTypes = rA;
rS.tokenNames = rH;
rS.TokenStream = rX.TokenStream;
rS.createLexer = createLexer;
rS.find = find;
rS.findAll = findAll;
rS.findLast = findLast;
rS.fork = fork;
rS.fromPlainObject = fromPlainObject;
rS.generate = generate;
rS.lexer = lexer;
rS.parse = parse;
rS.toPlainObject = toPlainObject;
rS.tokenize = tokenize;
rS.walk = walk;
var oS = {};
var oC = {};
var oA = {};
var oT = {};
var oE = {};
oE.AtKeyword = 3;
oE.BadString = 6;
oE.BadUrl = 8;
oE.CDC = 15;
oE.CDO = 14;
oE.Colon = 16;
oE.Comma = 18;
oE.Comment = 25;
oE.Delim = 9;
oE.Dimension = 12;
oE.EOF = 0;
oE.Function = 2;
oE.Hash = 4;
oE.Ident = 1;
oE.LeftCurlyBracket = 23;
oE.LeftParenthesis = 21;
oE.LeftSquareBracket = 19;
oE.Number = 10;
oE.Percentage = 11;
oE.RightCurlyBracket = 24;
oE.RightParenthesis = 22;
oE.RightSquareBracket = 20;
oE.Semicolon = 17;
oE.String = 5;
oE.Url = 7;
oE.WhiteSpace = 13;
var oP = {};
function oL(e) {
  return e >= 48 && e <= 57;
}
function oD(e) {
  return e >= 65 && e <= 90;
}
function oN(e) {
  return e >= 97 && e <= 122;
}
function oO(e) {
  return oD(e) || oN(e);
}
function oM(e) {
  return e >= 128;
}
function oz(e) {
  return oO(e) || oM(e) || 95 === e;
}
function oI(e) {
  return e >= 0 && e <= 8 || 11 === e || e >= 14 && e <= 31 || 127 === e;
}
function oR(e) {
  return 10 === e || 13 === e || 12 === e;
}
function oq(e) {
  return oR(e) || 32 === e || 9 === e;
}
function oB(e, t) {
  return !(92 !== e || oR(t) || 0 === t);
}
let oj = Array(128);
for (let e = 0; e < oj.length; e++) oj[e] = oq(e) && 130 || oL(e) && 131 || oz(e) && 132 || oI(e) && 133 || e || 128;
oP.DigitCategory = 131;
oP.EofCategory = 128;
oP.NameStartCategory = 132;
oP.NonPrintableCategory = 133;
oP.WhiteSpaceCategory = 130;
oP.charCodeCategory = function (e) {
  return e < 128 ? oj[e] : 132;
};
oP.isBOM = function (e) {
  return 65279 === e || 65534 === e ? 1 : 0;
};
oP.isDigit = oL;
oP.isHexDigit = function (e) {
  return oL(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
};
oP.isIdentifierStart = function (e, t, r) {
  return 45 === e ? oz(t) || 45 === t || oB(t, r) : !!oz(e) || 92 === e && oB(e, t);
};
oP.isLetter = oO;
oP.isLowercaseLetter = oN;
oP.isName = function (e) {
  return oz(e) || oL(e) || 45 === e;
};
oP.isNameStart = oz;
oP.isNewline = oR;
oP.isNonAscii = oM;
oP.isNonPrintable = oI;
oP.isNumberStart = function (e, t, r) {
  return 43 === e || 45 === e ? oL(t) ? 2 : 46 === t && oL(r) ? 3 : 0 : 46 === e ? oL(t) ? 2 : 0 : oL(e) ? 1 : 0;
};
oP.isUppercaseLetter = oD;
oP.isValidEscape = oB;
oP.isWhiteSpace = oq;
var oF = {};
function o_(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function oU(e, t, r) {
  return 13 === r && 10 === o_(e, t + 1) ? 2 : 1;
}
function oG(e, t, r) {
  let n = e.charCodeAt(t);
  oP.isUppercaseLetter(n) && (n |= 32);
  return n === r;
}
function oH(e, t) {
  for (; t < e.length && oP.isDigit(e.charCodeAt(t)); t++);
  return t;
}
function oW(e, t) {
  if (t += 2, oP.isHexDigit(o_(e, t - 1))) {
    for (let r = Math.min(e.length, t + 5); t < r && oP.isHexDigit(o_(e, t)); t++);
    let r = o_(e, t);
    oP.isWhiteSpace(r) && (t += oU(e, t, r));
  }
  return t;
}
oF.cmpChar = oG;
oF.cmpStr = function (e, t, r, n) {
  if (r - t !== n.length || t < 0 || r > e.length) return !1;
  for (let a = t; a < r; a++) {
    let r = n.charCodeAt(a - t);
    let i = e.charCodeAt(a);
    if (oP.isUppercaseLetter(i) && (i |= 32), i !== r) return !1;
  }
  return !0;
};
oF.consumeBadUrlRemnants = function (e, t) {
  for (; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (41 === r) {
      t++;
      break;
    }
    oP.isValidEscape(r, o_(e, t + 1)) && (t = oW(e, t));
  }
  return t;
};
oF.consumeEscaped = oW;
oF.consumeName = function (e, t) {
  for (; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (!oP.isName(r)) {
      if (oP.isValidEscape(r, o_(e, t + 1))) {
        t = oW(e, t) - 1;
        continue;
      }
      break;
    }
  }
  return t;
};
oF.consumeNumber = function (e, t) {
  let r = e.charCodeAt(t);
  if ((43 === r || 45 === r) && (r = e.charCodeAt(t += 1)), oP.isDigit(r) && (t = oH(e, t + 1), r = e.charCodeAt(t)), 46 === r && oP.isDigit(e.charCodeAt(t + 1)) && (t += 2, t = oH(e, t)), oG(e, t, 101)) {
    let n = 0;
    (45 === (r = e.charCodeAt(t + 1)) || 43 === r) && (n = 1, r = e.charCodeAt(t + 2));
    oP.isDigit(r) && (t = oH(e, t + 1 + n + 1));
  }
  return t;
};
oF.decodeEscaped = function (e) {
  if (1 === e.length && !oP.isHexDigit(e.charCodeAt(0))) return e[0];
  let t = parseInt(e, 16);
  (0 === t || t >= 55296 && t <= 57343 || t > 1114111) && (t = 65533);
  return String.fromCodePoint(t);
};
oF.findDecimalNumberEnd = oH;
oF.findWhiteSpaceEnd = function (e, t) {
  for (; t < e.length && oP.isWhiteSpace(e.charCodeAt(t)); t++);
  return t;
};
oF.findWhiteSpaceStart = function (e, t) {
  for (; t >= 0 && oP.isWhiteSpace(e.charCodeAt(t)); t--);
  return t + 1;
};
oF.getNewlineLength = oU;
var oV = ["EOF-token", "ident-token", "function-token", "at-keyword-token", "hash-token", "string-token", "bad-string-token", "url-token", "bad-url-token", "delim-token", "number-token", "percentage-token", "dimension-token", "whitespace-token", "CDO-token", "CDC-token", "colon-token", "semicolon-token", "comma-token", "[-token", "]-token", "(-token", ")-token", "{-token", "}-token"];
var o$ = {};
var oX = {};
function oY(e) {
  let t = e.source;
  let r = t.length;
  let n = t.length > 0 ? oP.isBOM(t.charCodeAt(0)) : 0;
  let a = oX.adoptBuffer(e.lines, r);
  let i = oX.adoptBuffer(e.columns, r);
  let o = e.startLine;
  let s = e.startColumn;
  for (let e = n; e < r; e++) {
    let n = t.charCodeAt(e);
    a[e] = o;
    i[e] = s++;
    (10 === n || 13 === n || 12 === n) && (13 === n && e + 1 < r && 10 === t.charCodeAt(e + 1) && (a[++e] = o, i[e] = s), o++, s = 1);
  }
  a[r] = o;
  i[r] = s;
  e.lines = a;
  e.columns = i;
  e.computed = !0;
}
oX.adoptBuffer = function (e = null, t) {
  return null === e || e.length < t ? new Uint32Array(Math.max(t + 1024, 16384)) : e;
};
o$.OffsetToLocation = class {
  constructor() {
    this.lines = null;
    this.columns = null;
    this.computed = !1;
  }
  setSource(e, t = 0, r = 1, n = 1) {
    this.source = e;
    this.startOffset = t;
    this.startLine = r;
    this.startColumn = n;
    this.computed = !1;
  }
  getLocation(e, t) {
    this.computed || oY(this);
    return {
      source: t,
      offset: this.startOffset + e,
      line: this.lines[e],
      column: this.columns[e]
    };
  }
  getLocationRange(e, t, r) {
    this.computed || oY(this);
    return {
      source: r,
      start: {
        offset: this.startOffset + e,
        line: this.lines[e],
        column: this.columns[e]
      },
      end: {
        offset: this.startOffset + t,
        line: this.lines[t],
        column: this.columns[t]
      }
    };
  }
};
var oK = {};
let oQ = new Map([[oE.Function, oE.RightParenthesis], [oE.LeftParenthesis, oE.RightParenthesis], [oE.LeftSquareBracket, oE.RightSquareBracket], [oE.LeftCurlyBracket, oE.RightCurlyBracket]]);
oK.TokenStream = class {
  constructor(e, t) {
    this.setSource(e, t);
  }
  reset() {
    this.eof = !1;
    this.tokenIndex = -1;
    this.tokenType = 0;
    this.tokenStart = this.firstCharOffset;
    this.tokenEnd = this.firstCharOffset;
  }
  setSource(e = "", t = () => {}) {
    let r = (e = String(e || "")).length;
    let n = oX.adoptBuffer(this.offsetAndType, e.length + 1);
    let a = oX.adoptBuffer(this.balance, e.length + 1);
    let i = 0;
    let o = 0;
    let s = 0;
    let l = -1;
    for (this.offsetAndType = null, this.balance = null, t(e, (e, t, c) => {
      switch (e) {
        default:
          a[i] = r;
          break;
        case o:
          {
            let e = 0xffffff & s;
            for (o = (s = a[e]) >> 24, a[i] = e, a[e++] = i; e < i; e++) a[e] === r && (a[e] = i);
            break;
          }
        case oE.LeftParenthesis:
        case oE.Function:
        case oE.LeftSquareBracket:
        case oE.LeftCurlyBracket:
          a[i] = s;
          s = (o = oQ.get(e)) << 24 | i;
      }
      n[i++] = e << 24 | c;
      -1 === l && (l = t);
    }), n[i] = oE.EOF << 24 | r, a[i] = r, a[r] = r; 0 !== s;) {
      let e = 0xffffff & s;
      s = a[e];
      a[e] = r;
    }
    this.source = e;
    this.firstCharOffset = -1 === l ? 0 : l;
    this.tokenCount = i;
    this.offsetAndType = n;
    this.balance = a;
    this.reset();
    this.next();
  }
  lookupType(e) {
    return (e += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e] >> 24 : oE.EOF;
  }
  lookupOffset(e) {
    return (e += this.tokenIndex) < this.tokenCount ? 0xffffff & this.offsetAndType[e - 1] : this.source.length;
  }
  lookupValue(e, t) {
    return (e += this.tokenIndex) < this.tokenCount && oF.cmpStr(this.source, 0xffffff & this.offsetAndType[e - 1], 0xffffff & this.offsetAndType[e], t);
  }
  getTokenStart(e) {
    return e === this.tokenIndex ? this.tokenStart : e > 0 ? e < this.tokenCount ? 0xffffff & this.offsetAndType[e - 1] : 0xffffff & this.offsetAndType[this.tokenCount] : this.firstCharOffset;
  }
  substrToCursor(e) {
    return this.source.substring(e, this.tokenStart);
  }
  isBalanceEdge(e) {
    return this.balance[this.tokenIndex] < e;
  }
  isDelim(e, t) {
    return t ? this.lookupType(t) === oE.Delim && this.source.charCodeAt(this.lookupOffset(t)) === e : this.tokenType === oE.Delim && this.source.charCodeAt(this.tokenStart) === e;
  }
  skip(e) {
    let t = this.tokenIndex + e;
    t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = 0xffffff & this.offsetAndType[t - 1], t = this.offsetAndType[t], this.tokenType = t >> 24, this.tokenEnd = 0xffffff & t) : (this.tokenIndex = this.tokenCount, this.next());
  }
  next() {
    let e = this.tokenIndex + 1;
    e < this.tokenCount ? (this.tokenIndex = e, this.tokenStart = this.tokenEnd, e = this.offsetAndType[e], this.tokenType = e >> 24, this.tokenEnd = 0xffffff & e) : (this.eof = !0, this.tokenIndex = this.tokenCount, this.tokenType = oE.EOF, this.tokenStart = this.tokenEnd = this.source.length);
  }
  skipSC() {
    for (; this.tokenType === oE.WhiteSpace || this.tokenType === oE.Comment;) this.next();
  }
  skipUntilBalanced(e, t) {
    let r;
    let n;
    let a = e;
    e: for (; a < this.tokenCount && !((r = this.balance[a]) < e); a++) switch (n = a > 0 ? 0xffffff & this.offsetAndType[a - 1] : this.firstCharOffset, t(this.source.charCodeAt(n))) {
      case 1:
        break e;
      case 2:
        a++;
        break e;
      default:
        this.balance[r] === a && (a = r);
    }
    this.skip(a - this.tokenIndex);
  }
  forEachToken(e) {
    var _this2 = this;
    for (function () {
      let t = 0;
      let r = _this2.firstCharOffset;
    }(); t < this.tokenCount; t++) {
      let n = r;
      let a = this.offsetAndType[t];
      let i = 0xffffff & a;
      let o = a >> 24;
      r = i;
      e(o, n, i, t);
    }
  }
  dump() {
    let e = Array(this.tokenCount);
    this.forEachToken((t, r, n, a) => {
      e[a] = {
        idx: a,
        type: oV[t],
        chunk: this.source.substring(r, n),
        balance: this.balance[a]
      };
    });
    return e;
  }
};
oT.AtKeyword = oE.AtKeyword;
oT.BadString = oE.BadString;
oT.BadUrl = oE.BadUrl;
oT.CDC = oE.CDC;
oT.CDO = oE.CDO;
oT.Colon = oE.Colon;
oT.Comma = oE.Comma;
oT.Comment = oE.Comment;
oT.Delim = oE.Delim;
oT.Dimension = oE.Dimension;
oT.EOF = oE.EOF;
oT.Function = oE.Function;
oT.Hash = oE.Hash;
oT.Ident = oE.Ident;
oT.LeftCurlyBracket = oE.LeftCurlyBracket;
oT.LeftParenthesis = oE.LeftParenthesis;
oT.LeftSquareBracket = oE.LeftSquareBracket;
oT.Number = oE.Number;
oT.Percentage = oE.Percentage;
oT.RightCurlyBracket = oE.RightCurlyBracket;
oT.RightParenthesis = oE.RightParenthesis;
oT.RightSquareBracket = oE.RightSquareBracket;
oT.Semicolon = oE.Semicolon;
oT.String = oE.String;
oT.Url = oE.Url;
oT.WhiteSpace = oE.WhiteSpace;
oT.tokenTypes = oE;
oT.DigitCategory = oP.DigitCategory;
oT.EofCategory = oP.EofCategory;
oT.NameStartCategory = oP.NameStartCategory;
oT.NonPrintableCategory = oP.NonPrintableCategory;
oT.WhiteSpaceCategory = oP.WhiteSpaceCategory;
oT.charCodeCategory = oP.charCodeCategory;
oT.isBOM = oP.isBOM;
oT.isDigit = oP.isDigit;
oT.isHexDigit = oP.isHexDigit;
oT.isIdentifierStart = oP.isIdentifierStart;
oT.isLetter = oP.isLetter;
oT.isLowercaseLetter = oP.isLowercaseLetter;
oT.isName = oP.isName;
oT.isNameStart = oP.isNameStart;
oT.isNewline = oP.isNewline;
oT.isNonAscii = oP.isNonAscii;
oT.isNonPrintable = oP.isNonPrintable;
oT.isNumberStart = oP.isNumberStart;
oT.isUppercaseLetter = oP.isUppercaseLetter;
oT.isValidEscape = oP.isValidEscape;
oT.isWhiteSpace = oP.isWhiteSpace;
oT.cmpChar = oF.cmpChar;
oT.cmpStr = oF.cmpStr;
oT.consumeBadUrlRemnants = oF.consumeBadUrlRemnants;
oT.consumeEscaped = oF.consumeEscaped;
oT.consumeName = oF.consumeName;
oT.consumeNumber = oF.consumeNumber;
oT.decodeEscaped = oF.decodeEscaped;
oT.findDecimalNumberEnd = oF.findDecimalNumberEnd;
oT.findWhiteSpaceEnd = oF.findWhiteSpaceEnd;
oT.findWhiteSpaceStart = oF.findWhiteSpaceStart;
oT.getNewlineLength = oF.getNewlineLength;
oT.tokenNames = oV;
oT.OffsetToLocation = o$.OffsetToLocation;
oT.TokenStream = oK.TokenStream;
oT.tokenize = function (e, t) {
  let r;
  function n(t) {
    return t < o ? e.charCodeAt(t) : 0;
  }
  function a() {
    if (l = oF.consumeNumber(e, l), oP.isIdentifierStart(n(l), n(l + 1), n(l + 2))) {
      r = oE.Dimension;
      l = oF.consumeName(e, l);
      return;
    }
    if (37 === n(l)) {
      r = oE.Percentage;
      l++;
      return;
    }
    r = oE.Number;
  }
  function i() {
    let t = l;
    if (l = oF.consumeName(e, l), oF.cmpStr(e, t, l, "url") && 40 === n(l)) {
      if (34 === n(l = oF.findWhiteSpaceEnd(e, l + 1)) || 39 === n(l)) {
        r = oE.Function;
        l = t + 4;
        return;
      }
      (function () {
        for (r = oE.Url, l = oF.findWhiteSpaceEnd(e, l); l < e.length; l++) {
          let t = e.charCodeAt(l);
          switch (oP.charCodeCategory(t)) {
            case 41:
              l++;
              return;
            case oP.WhiteSpaceCategory:
              if (41 === n(l = oF.findWhiteSpaceEnd(e, l)) || l >= e.length) {
                l < e.length && l++;
                return;
              }
              l = oF.consumeBadUrlRemnants(e, l);
              r = oE.BadUrl;
              return;
            case 34:
            case 39:
            case 40:
            case oP.NonPrintableCategory:
              l = oF.consumeBadUrlRemnants(e, l);
              r = oE.BadUrl;
              return;
            case 92:
              if (oP.isValidEscape(t, n(l + 1))) {
                l = oF.consumeEscaped(e, l) - 1;
                break;
              }
              l = oF.consumeBadUrlRemnants(e, l);
              r = oE.BadUrl;
              return;
          }
        }
      })();
      return;
    }
    if (40 === n(l)) {
      r = oE.Function;
      l++;
      return;
    }
    r = oE.Ident;
  }
  let o = (e = String(e || "")).length;
  let s = oP.isBOM(n(0));
  let l = s;
  for (; l < o;) {
    let o = e.charCodeAt(l);
    switch (oP.charCodeCategory(o)) {
      case oP.WhiteSpaceCategory:
        r = oE.WhiteSpace;
        l = oF.findWhiteSpaceEnd(e, l + 1);
        break;
      case 34:
      case 39:
        (function (t) {
          for (t || (t = n(l++)), r = oE.String; l < e.length; l++) {
            let a = e.charCodeAt(l);
            switch (oP.charCodeCategory(a)) {
              case t:
                l++;
                return;
              case oP.WhiteSpaceCategory:
                if (oP.isNewline(a)) {
                  l += oF.getNewlineLength(e, l, a);
                  r = oE.BadString;
                  return;
                }
                break;
              case 92:
                if (l === e.length - 1) break;
                let i = n(l + 1);
                oP.isNewline(i) ? l += oF.getNewlineLength(e, l + 1, i) : oP.isValidEscape(a, i) && (l = oF.consumeEscaped(e, l) - 1);
            }
          }
        })();
        break;
      case 35:
        oP.isName(n(l + 1)) || oP.isValidEscape(n(l + 1), n(l + 2)) ? (r = oE.Hash, l = oF.consumeName(e, l + 1)) : (r = oE.Delim, l++);
        break;
      case 40:
        r = oE.LeftParenthesis;
        l++;
        break;
      case 41:
        r = oE.RightParenthesis;
        l++;
        break;
      case 43:
      case 46:
        oP.isNumberStart(o, n(l + 1), n(l + 2)) ? a() : (r = oE.Delim, l++);
        break;
      case 44:
        r = oE.Comma;
        l++;
        break;
      case 45:
        oP.isNumberStart(o, n(l + 1), n(l + 2)) ? a() : 45 === n(l + 1) && 62 === n(l + 2) ? (r = oE.CDC, l += 3) : oP.isIdentifierStart(o, n(l + 1), n(l + 2)) ? i() : (r = oE.Delim, l++);
        break;
      case 47:
        42 === n(l + 1) ? (r = oE.Comment, l = -1 === (l = e.indexOf("*/", l + 2)) ? e.length : l + 2) : (r = oE.Delim, l++);
        break;
      case 58:
        r = oE.Colon;
        l++;
        break;
      case 59:
        r = oE.Semicolon;
        l++;
        break;
      case 60:
        33 === n(l + 1) && 45 === n(l + 2) && 45 === n(l + 3) ? (r = oE.CDO, l += 4) : (r = oE.Delim, l++);
        break;
      case 64:
        oP.isIdentifierStart(n(l + 1), n(l + 2), n(l + 3)) ? (r = oE.AtKeyword, l = oF.consumeName(e, l + 1)) : (r = oE.Delim, l++);
        break;
      case 91:
        r = oE.LeftSquareBracket;
        l++;
        break;
      case 92:
        oP.isValidEscape(o, n(l + 1)) ? i() : (r = oE.Delim, l++);
        break;
      case 93:
        r = oE.RightSquareBracket;
        l++;
        break;
      case 123:
        r = oE.LeftCurlyBracket;
        l++;
        break;
      case 125:
        r = oE.RightCurlyBracket;
        l++;
        break;
      case oP.DigitCategory:
        a();
        break;
      case oP.NameStartCategory:
        i();
        break;
      default:
        r = oE.Delim;
        l++;
    }
    t(r, s, s = l);
  }
};
var oZ = {};
var oJ = {};
let o0 = null;
class o1 {
  static createItem(e) {
    return {
      prev: null,
      next: null,
      data: e
    };
  }
  constructor() {
    this.head = null;
    this.tail = null;
    this.cursor = null;
  }
  createItem(e) {
    return o1.createItem(e);
  }
  allocateCursor(e, t) {
    let r;
    null !== o0 ? (r = o0, o0 = o0.cursor, r.prev = e, r.next = t, r.cursor = this.cursor) : r = {
      prev: e,
      next: t,
      cursor: this.cursor
    };
    this.cursor = r;
    return r;
  }
  releaseCursor() {
    let {
      cursor
    } = this;
    this.cursor = cursor.cursor;
    cursor.prev = null;
    cursor.next = null;
    cursor.cursor = o0;
    o0 = cursor;
  }
  updateCursors(e, t, r, n) {
    let {
      cursor
    } = this;
    for (; null !== cursor;) {
      cursor.prev === e && (cursor.prev = t);
      cursor.next === r && (cursor.next = n);
      a = cursor.cursor;
    }
  }
  *[Symbol.iterator]() {
    for (let e = this.head; null !== e; e = e.next) yield e.data;
  }
  get size() {
    let e = 0;
    for (let t = this.head; null !== t; t = t.next) e++;
    return e;
  }
  get isEmpty() {
    return null === this.head;
  }
  get first() {
    return this.head && this.head.data;
  }
  get last() {
    return this.tail && this.tail.data;
  }
  fromArray(e) {
    let t = null;
    for (let r of (this.head = null, e)) {
      let e = o1.createItem(r);
      null !== t ? t.next = e : this.head = e;
      e.prev = t;
      t = e;
    }
    this.tail = t;
    return this;
  }
  toArray() {
    return [...this];
  }
  toJSON() {
    return [...this];
  }
  forEach(e, t = this) {
    let r = this.allocateCursor(null, this.head);
    for (; null !== r.next;) {
      let n = r.next;
      r.next = n.next;
      e.call(t, n.data, n, this);
    }
    this.releaseCursor();
  }
  forEachRight(e, t = this) {
    let r = this.allocateCursor(this.tail, null);
    for (; null !== r.prev;) {
      let n = r.prev;
      r.prev = n.prev;
      e.call(t, n.data, n, this);
    }
    this.releaseCursor();
  }
  reduce(e, t, r = this) {
    let n;
    let a = this.allocateCursor(null, this.head);
    let i = t;
    for (; null !== a.next;) {
      n = a.next;
      a.next = n.next;
      i = e.call(r, i, n.data, n, this);
    }
    this.releaseCursor();
    return i;
  }
  reduceRight(e, t, r = this) {
    let n;
    let a = this.allocateCursor(this.tail, null);
    let i = t;
    for (; null !== a.prev;) {
      n = a.prev;
      a.prev = n.prev;
      i = e.call(r, i, n.data, n, this);
    }
    this.releaseCursor();
    return i;
  }
  some(e, t = this) {
    for (let r = this.head; null !== r; r = r.next) if (e.call(t, r.data, r, this)) return !0;
    return !1;
  }
  map(e, t = this) {
    let r = new o1();
    for (let n = this.head; null !== n; n = n.next) r.appendData(e.call(t, n.data, n, this));
    return r;
  }
  filter(e, t = this) {
    let r = new o1();
    for (let n = this.head; null !== n; n = n.next) e.call(t, n.data, n, this) && r.appendData(n.data);
    return r;
  }
  nextUntil(e, t, r = this) {
    if (null === e) return;
    let n = this.allocateCursor(null, e);
    for (; null !== n.next;) {
      let e = n.next;
      if (n.next = e.next, t.call(r, e.data, e, this)) break;
    }
    this.releaseCursor();
  }
  prevUntil(e, t, r = this) {
    if (null === e) return;
    let n = this.allocateCursor(e, null);
    for (; null !== n.prev;) {
      let e = n.prev;
      if (n.prev = e.prev, t.call(r, e.data, e, this)) break;
    }
    this.releaseCursor();
  }
  clear() {
    this.head = null;
    this.tail = null;
  }
  copy() {
    let e = new o1();
    for (let t of this) e.appendData(t);
    return e;
  }
  prepend(e) {
    this.updateCursors(null, e, this.head, e);
    null !== this.head ? (this.head.prev = e, e.next = this.head) : this.tail = e;
    this.head = e;
    return this;
  }
  prependData(e) {
    return this.prepend(o1.createItem(e));
  }
  append(e) {
    return this.insert(e);
  }
  appendData(e) {
    return this.insert(o1.createItem(e));
  }
  insert(e, t = null) {
    if (null !== t) {
      if (this.updateCursors(t.prev, e, t, e), null === t.prev) {
        if (this.head !== t) throw Error("before doesn't belong to list");
        this.head = e;
        t.prev = e;
        e.next = t;
        this.updateCursors(null, e);
      } else {
        t.prev.next = e;
        e.prev = t.prev;
        t.prev = e;
        e.next = t;
      }
    } else {
      this.updateCursors(this.tail, e, null, e);
      null !== this.tail ? (this.tail.next = e, e.prev = this.tail) : this.head = e;
      this.tail = e;
    }
    return this;
  }
  insertData(e, t) {
    return this.insert(o1.createItem(e), t);
  }
  remove(e) {
    if (this.updateCursors(e, e.prev, e, e.next), null !== e.prev) e.prev.next = e.next;else {
      if (this.head !== e) throw Error("item doesn't belong to list");
      this.head = e.next;
    }
    if (null !== e.next) e.next.prev = e.prev;else {
      if (this.tail !== e) throw Error("item doesn't belong to list");
      this.tail = e.prev;
    }
    e.prev = null;
    e.next = null;
    return e;
  }
  push(e) {
    this.insert(o1.createItem(e));
  }
  pop() {
    return null !== this.tail ? this.remove(this.tail) : null;
  }
  unshift(e) {
    this.prepend(o1.createItem(e));
  }
  shift() {
    return null !== this.head ? this.remove(this.head) : null;
  }
  prependList(e) {
    return this.insertList(e, this.head);
  }
  appendList(e) {
    return this.insertList(e);
  }
  insertList(e, t) {
    null === e.head || (null != t ? (this.updateCursors(t.prev, e.tail, t, e.head), null !== t.prev ? (t.prev.next = e.head, e.head.prev = t.prev) : this.head = e.head, t.prev = e.tail, e.tail.next = t) : (this.updateCursors(this.tail, e.tail, null, e.head), null !== this.tail ? (this.tail.next = e.head, e.head.prev = this.tail) : this.head = e.head, this.tail = e.tail), e.head = null, e.tail = null);
    return this;
  }
  replace(e, t) {
    "head" in t ? this.insertList(t, e) : this.insert(t, e);
    this.remove(e);
  }
}
oJ.List = o1;
var o2 = {};
var o3 = {};
o3.createCustomError = function (e, t) {
  let r = Object.create(SyntaxError.prototype);
  let n = Error();
  return Object.assign(r, {
    name: e,
    message: t,
    get stack() {
      return (n.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}
`);
    }
  });
};
let o4 = "    ";
function o5({
  source: e,
  line: t,
  column: r
}, n) {
  function a(e, t) {
    return i.slice(e, t).map((t, r) => String(e + r + 1).padStart(l) + " |" + t).join("\n");
  }
  let i = e.split(/\r\n?|\n|\f/);
  let o = Math.max(1, t - n) - 1;
  let s = Math.min(t + n, i.length + 1);
  let l = Math.max(4, String(s).length) + 1;
  let c = 0;
  (r += (o4.length - 1) * (i[t - 1].substr(0, r - 1).match(/\t/g) || []).length) > 100 && (c = r - 60 + 3, r = 58);
  for (let e = o; e <= s; e++) e >= 0 && e < i.length && (i[e] = i[e].replace(/\t/g, o4), i[e] = (c > 0 && i[e].length > c ? "\u2026" : "") + i[e].substr(c, 98) + (i[e].length > c + 100 - 1 ? "\u2026" : ""));
  return [a(o, t), Array(r + l + 2).join("-") + "^", a(t, s)].filter(Boolean).join("\n");
}
o2.SyntaxError = function (e, t, r, n, a) {
  return Object.assign(o3.createCustomError("SyntaxError", e), {
    source: t,
    offset: r,
    line: n,
    column: a,
    sourceFragment: e => o5({
      source: t,
      line: n,
      column: a
    }, isNaN(e) ? 0 : e),
    get formattedMessage() {
      return `Parse error: ${e}
` + o5({
        source: t,
        line: n,
        column: a
      }, 2);
    }
  });
};
var o8 = {};
o8.readSequence = function (e) {
  let t = this.createList();
  let r = !1;
  let n = {
    recognizer: e
  };
  for (; !this.eof;) {
    switch (this.tokenType) {
      case oE.Comment:
        this.next();
        continue;
      case oE.WhiteSpace:
        r = !0;
        this.next();
        continue;
    }
    let a = e.getNode.call(this, n);
    if (void 0 === a) break;
    r && (e.onWhiteSpace && e.onWhiteSpace.call(this, a, t, n), r = !1);
    t.push(a);
  }
  r && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, n);
  return t;
};
let o6 = () => {};
function o9(e) {
  let t = Object.create(null);
  for (let r in e) {
    let n = e[r];
    let a = n.parse || n;
    a && (t[r] = a);
  }
  return t;
}
oZ.createParser = function (e) {
  let t = "";
  let r = "<unknown>";
  let n = !1;
  let a = o6;
  let i = !1;
  let o = new o$.OffsetToLocation();
  let s = Object.assign(new oK.TokenStream(), function (e) {
    let t = {
      context: Object.create(null),
      scope: Object.assign(Object.create(null), e.scope),
      atrule: o9(e.atrule),
      pseudo: o9(e.pseudo),
      node: o9(e.node)
    };
    for (let r in e.parseContext) switch (typeof e.parseContext[r]) {
      case "function":
        t.context[r] = e.parseContext[r];
        break;
      case "string":
        t.context[r] = function (e) {
          return function () {
            return this[e]();
          };
        }(e.parseContext[r]);
    }
    return {
      config: t,
      ...t,
      ...t.node
    };
  }(e || {}), {
    parseAtrulePrelude: !0,
    parseRulePrelude: !0,
    parseValue: !0,
    parseCustomProperty: !1,
    readSequence: o8.readSequence,
    consumeUntilBalanceEnd: () => 0,
    consumeUntilLeftCurlyBracket: e => 123 === e ? 1 : 0,
    consumeUntilLeftCurlyBracketOrSemicolon: e => 123 === e || 59 === e ? 1 : 0,
    consumeUntilExclamationMarkOrSemicolon: e => 33 === e || 59 === e ? 1 : 0,
    consumeUntilSemicolonIncluded: e => 59 === e ? 2 : 0,
    createList: () => new oJ.List(),
    createSingleNodeList: e => new oJ.List().appendData(e),
    getFirstListNode: e => e && e.first,
    getLastListNode: e => e && e.last,
    parseWithFallback(e, t) {
      let r = this.tokenIndex;
      try {
        return e.call(this);
      } catch (n) {
        if (i) throw n;
        let e = t.call(this, r);
        i = !0;
        a(n, e);
        i = !1;
        return e;
      }
    },
    lookupNonWSType(e) {
      let t;
      do if ((t = this.lookupType(e++)) !== oE.WhiteSpace) return t; while (0 !== t);
      return 0;
    },
    charCodeAt: e => e >= 0 && e < t.length ? t.charCodeAt(e) : 0,
    substring: (e, r) => t.substring(e, r),
    substrToCursor(e) {
      return this.source.substring(e, this.tokenStart);
    },
    cmpChar: (e, r) => oF.cmpChar(t, e, r),
    cmpStr: (e, r, n) => oF.cmpStr(t, e, r, n),
    consume(e) {
      let t = this.tokenStart;
      this.eat(e);
      return this.substrToCursor(t);
    },
    consumeFunctionName() {
      let e = t.substring(this.tokenStart, this.tokenEnd - 1);
      this.eat(oE.Function);
      return e;
    },
    consumeNumber(e) {
      let r = t.substring(this.tokenStart, oF.consumeNumber(t, this.tokenStart));
      this.eat(e);
      return r;
    },
    eat(e) {
      if (this.tokenType !== e) {
        let t = oV[e].slice(0, -6).replace(/-/g, " ").replace(/^./, e => e.toUpperCase());
        let r = `${/[[\](){}]/.test(t) ? `"${t}"` : t} is expected`;
        let n = this.tokenStart;
        switch (e) {
          case oE.Ident:
            this.tokenType === oE.Function || this.tokenType === oE.Url ? (n = this.tokenEnd - 1, r = "Identifier is expected but function found") : r = "Identifier is expected";
            break;
          case oE.Hash:
            this.isDelim(35) && (this.next(), n++, r = "Name is expected");
            break;
          case oE.Percentage:
            this.tokenType === oE.Number && (n = this.tokenEnd, r = "Percent sign is expected");
        }
        this.error(r, n);
      }
      this.next();
    },
    eatIdent(e) {
      (this.tokenType !== oE.Ident || !1 === this.lookupValue(0, e)) && this.error(`Identifier "${e}" is expected`);
      this.next();
    },
    eatDelim(e) {
      this.isDelim(e) || this.error(`Delim "${String.fromCharCode(e)}" is expected`);
      this.next();
    },
    getLocation: (e, t) => n ? o.getLocationRange(e, t, r) : null,
    getLocationFromList(e) {
      if (n) {
        let t = this.getFirstListNode(e);
        let n = this.getLastListNode(e);
        return o.getLocationRange(null !== t ? t.loc.start.offset - o.startOffset : this.tokenStart, null !== n ? n.loc.end.offset - o.startOffset : this.tokenStart, r);
      }
      return null;
    },
    error(e, r) {
      let n = void 0 !== r && r < t.length ? o.getLocation(r) : this.eof ? o.getLocation(oF.findWhiteSpaceStart(t, t.length - 1)) : o.getLocation(this.tokenStart);
      throw new o2.SyntaxError(e || "Unexpected input", t, n.offset, n.line, n.column);
    }
  });
  return Object.assign(function (e, l) {
    t = e;
    l = l || {};
    s.setSource(t, oT.tokenize);
    o.setSource(t, l.offset, l.line, l.column);
    r = l.filename || "<unknown>";
    n = !!l.positions;
    a = "function" == typeof l.onParseError ? l.onParseError : o6;
    i = !1;
    s.parseAtrulePrelude = !("parseAtrulePrelude" in l) || !!l.parseAtrulePrelude;
    s.parseRulePrelude = !("parseRulePrelude" in l) || !!l.parseRulePrelude;
    s.parseValue = !("parseValue" in l) || !!l.parseValue;
    s.parseCustomProperty = "parseCustomProperty" in l && !!l.parseCustomProperty;
    let {
      context = "default",
      onComment
    } = l;
    if (context in s.context == !1) throw Error("Unknown context `" + context + "`");
    "function" == typeof onComment && s.forEachToken((e, r, n) => {
      if (e === oE.Comment) {
        let e = s.getLocation(r, n);
        onComment(oF.cmpStr(t, n - 2, n, "*/") ? t.slice(r + 2, n - 2) : t.slice(r + 2, n), e);
      }
    });
    let d = s.context[context].call(s, l);
    s.eof || s.error();
    return d;
  }, {
    SyntaxError: o2.SyntaxError,
    config: s.config
  });
};
var o7 = {};
var se = {};
let st = new Set(["Atrule", "Selector", "Declaration"]);
se.generateSourceMap = function (e) {
  let t = new r7.SourceMapGenerator();
  let r = {
    line: 1,
    column: 0
  };
  let n = {
    line: 0,
    column: 0
  };
  let a = {
    line: 1,
    column: 0
  };
  let i = {
    generated: a
  };
  let o = 1;
  let s = 0;
  let l = !1;
  let c = e.node;
  e.node = function (e) {
    if (e.loc && e.loc.start && st.has(e.type)) {
      let c = e.loc.start.line;
      let u = e.loc.start.column - 1;
      (n.line !== c || n.column !== u) && (n.line = c, n.column = u, r.line = o, r.column = s, l && (l = !1, (r.line !== a.line || r.column !== a.column) && t.addMapping(i)), l = !0, t.addMapping({
        source: e.loc.source,
        original: n,
        generated: r
      }));
    }
    c.call(this, e);
    l && st.has(e.type) && (a.line = o, a.column = s);
  };
  let u = e.emit;
  e.emit = function (e, t, r) {
    for (let t = 0; t < e.length; t++) 10 === e.charCodeAt(t) ? (o++, s = 0) : s++;
    u(e, t, r);
  };
  let d = e.result;
  e.result = function () {
    l && t.addMapping(i);
    return {
      css: d(),
      map: t
    };
  };
  return e;
};
var sr = {};
let sn = (e, t) => {
  if (e === oE.Delim && (e = t), "string" == typeof e) {
    let t = e.charCodeAt(0);
    return t > 127 ? 32768 : t << 8;
  }
  return e;
};
let sa = [[oE.Ident, oE.Ident], [oE.Ident, oE.Function], [oE.Ident, oE.Url], [oE.Ident, oE.BadUrl], [oE.Ident, "-"], [oE.Ident, oE.Number], [oE.Ident, oE.Percentage], [oE.Ident, oE.Dimension], [oE.Ident, oE.CDC], [oE.Ident, oE.LeftParenthesis], [oE.AtKeyword, oE.Ident], [oE.AtKeyword, oE.Function], [oE.AtKeyword, oE.Url], [oE.AtKeyword, oE.BadUrl], [oE.AtKeyword, "-"], [oE.AtKeyword, oE.Number], [oE.AtKeyword, oE.Percentage], [oE.AtKeyword, oE.Dimension], [oE.AtKeyword, oE.CDC], [oE.Hash, oE.Ident], [oE.Hash, oE.Function], [oE.Hash, oE.Url], [oE.Hash, oE.BadUrl], [oE.Hash, "-"], [oE.Hash, oE.Number], [oE.Hash, oE.Percentage], [oE.Hash, oE.Dimension], [oE.Hash, oE.CDC], [oE.Dimension, oE.Ident], [oE.Dimension, oE.Function], [oE.Dimension, oE.Url], [oE.Dimension, oE.BadUrl], [oE.Dimension, "-"], [oE.Dimension, oE.Number], [oE.Dimension, oE.Percentage], [oE.Dimension, oE.Dimension], [oE.Dimension, oE.CDC], ["#", oE.Ident], ["#", oE.Function], ["#", oE.Url], ["#", oE.BadUrl], ["#", "-"], ["#", oE.Number], ["#", oE.Percentage], ["#", oE.Dimension], ["#", oE.CDC], ["-", oE.Ident], ["-", oE.Function], ["-", oE.Url], ["-", oE.BadUrl], ["-", "-"], ["-", oE.Number], ["-", oE.Percentage], ["-", oE.Dimension], ["-", oE.CDC], [oE.Number, oE.Ident], [oE.Number, oE.Function], [oE.Number, oE.Url], [oE.Number, oE.BadUrl], [oE.Number, oE.Number], [oE.Number, oE.Percentage], [oE.Number, oE.Dimension], [oE.Number, "%"], [oE.Number, oE.CDC], ["@", oE.Ident], ["@", oE.Function], ["@", oE.Url], ["@", oE.BadUrl], ["@", "-"], ["@", oE.CDC], [".", oE.Number], [".", oE.Percentage], [".", oE.Dimension], ["+", oE.Number], ["+", oE.Percentage], ["+", oE.Dimension], ["/", "*"]];
let si = sa.concat([[oE.Ident, oE.Hash], [oE.Dimension, oE.Hash], [oE.Hash, oE.Hash], [oE.AtKeyword, oE.LeftParenthesis], [oE.AtKeyword, oE.String], [oE.AtKeyword, oE.Colon], [oE.Percentage, oE.Percentage], [oE.Percentage, oE.Dimension], [oE.Percentage, oE.Function], [oE.Percentage, "-"], [oE.RightParenthesis, oE.Ident], [oE.RightParenthesis, oE.Function], [oE.RightParenthesis, oE.Percentage], [oE.RightParenthesis, oE.Dimension], [oE.RightParenthesis, oE.Hash], [oE.RightParenthesis, "-"]]);
function so(e) {
  let t = new Set(e.map(([e, t]) => sn(e) << 16 | sn(t)));
  return function (e, r, n) {
    let a = sn(r, n);
    let i = n.charCodeAt(0);
    (45 === i && r !== oE.Ident && r !== oE.Function && r !== oE.CDC || 43 === i ? t.has(e << 16 | i << 8) : t.has(e << 16 | a)) && this.emit(" ", oE.WhiteSpace, !0);
    return a;
  };
}
let ss = so(sa);
let sl = so(si);
function sc(e, t) {
  if ("function" == typeof t) {
    let r = null;
    e.children.forEach(e => {
      null !== r && t.call(this, r);
      this.node(e);
      r = e;
    });
    return;
  }
  e.children.forEach(this.node, this);
}
function su(e) {
  oT.tokenize(e, (t, r, n) => {
    this.token(t, e.slice(r, n));
  });
}
sr.safe = sl;
sr.spec = ss;
o7.createGenerator = function (e) {
  let t = new Map();
  for (let r in e.node) {
    let n = e.node[r];
    "function" == typeof (n.generate || n) && t.set(r, n.generate || n);
  }
  return function (e, r) {
    let n = "";
    let a = 0;
    let i = {
      node(e) {
        if (t.has(e.type)) t.get(e.type).call(o, e);else throw Error("Unknown node type: " + e.type);
      },
      tokenBefore: sr.safe,
      token(e, t) {
        a = this.tokenBefore(a, e, t);
        this.emit(t, e, !1);
        e === oE.Delim && 92 === t.charCodeAt(0) && this.emit("\n", oE.WhiteSpace, !0);
      },
      emit(e) {
        n += e;
      },
      result: () => n
    };
    r && ("function" == typeof r.decorator && (i = r.decorator(i)), r.sourceMap && (i = se.generateSourceMap(i)), r.mode in sr && (i.tokenBefore = sr[r.mode]));
    let o = {
      node: e => i.node(e),
      children: sc,
      token: (e, t) => i.token(e, t),
      tokenize: su
    };
    i.node(e);
    return i.result();
  };
};
var sd = {};
sd.createConvertor = function (e) {
  return {
    fromPlainObject: t => (e(t, {
      enter(e) {
        e.children && e.children instanceof oJ.List == !1 && (e.children = new oJ.List().fromArray(e.children));
      }
    }), t),
    toPlainObject: t => (e(t, {
      leave(e) {
        e.children && e.children instanceof oJ.List && (e.children = e.children.toArray());
      }
    }), t)
  };
};
var sh = {};
let {
  hasOwnProperty: _hasOwnProperty6
} = Object.prototype;
let sm = function () {};
function sf(e) {
  return "function" == typeof e ? e : sm;
}
function sg(e, t) {
  return function (r, n, a) {
    r.type === t && e.call(this, r, n, a);
  };
}
function sb(e, t) {
  let r = e.fields.slice();
  let n = e.context;
  let a = "string" == typeof n;
  t && r.reverse();
  return function (e, i, o, s) {
    let l;
    for (let c of (a && (l = i[n], i[n] = e), r)) {
      let r = e[c.name];
      if (!c.nullable || r) {
        if ("list" === c.type) {
          if (t ? r.reduceRight(s, !1) : r.reduce(s, !1)) return !0;
        } else if (o(r)) return !0;
      }
    }
    a && (i[n] = l);
  };
}
function sy({
  StyleSheet: e,
  Atrule: t,
  Rule: r,
  Block: n,
  DeclarationList: a
}) {
  return {
    Atrule: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n
    },
    Rule: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n
    },
    Declaration: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n,
      DeclarationList: a
    }
  };
}
sh.createWalker = function (e) {
  let t = function (e) {
    let t = {};
    for (let r in e.node) if (_hasOwnProperty6.call(e.node, r)) {
      let n = e.node[r];
      if (!n.structure) throw Error("Missed `structure` field in `" + r + "` node type definition");
      t[r] = function (e, t) {
        let r = t.structure;
        let n = [];
        for (let e in r) {
          if (!1 === _hasOwnProperty6.call(r, e)) continue;
          let t = r[e];
          let a = {
            name: e,
            type: !1,
            nullable: !1
          };
          for (let e of (Array.isArray(t) || (t = [t]), t)) null === e ? a.nullable = !0 : "string" == typeof e ? a.type = "node" : Array.isArray(e) && (a.type = "list");
          a.type && n.push(a);
        }
        return n.length ? {
          context: t.walkContext,
          fields: n
        } : null;
      }(0, n);
    }
    return t;
  }(e);
  let r = {};
  let n = {};
  let a = Symbol("break-walk");
  let i = Symbol("skip-node");
  for (let e in t) _hasOwnProperty6.call(t, e) && null !== t[e] && (r[e] = sb(t[e], !1), n[e] = sb(t[e], !0));
  let o = sy(r);
  let s = sy(n);
  let l = function (e, l) {
    function c(e, t, r) {
      let n = u.call(m, e, t, r);
      return n === a || n !== i && (!!(h.hasOwnProperty(e.type) && h[e.type](e, m, c, p)) || d.call(m, e, t, r) === a);
    }
    let u = sm;
    let d = sm;
    let h = r;
    let p = (e, t, r, n) => e || c(t, r, n);
    let m = {
      break: a,
      skip: i,
      root: e,
      stylesheet: null,
      atrule: null,
      atrulePrelude: null,
      rule: null,
      selector: null,
      block: null,
      declaration: null,
      function: null
    };
    if ("function" == typeof l) u = l;else if (l && (u = sf(l.enter), d = sf(l.leave), l.reverse && (h = n), l.visit)) {
      if (o.hasOwnProperty(l.visit)) h = l.reverse ? s[l.visit] : o[l.visit];else if (!t.hasOwnProperty(l.visit)) throw Error("Bad value `" + l.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
      u = sg(u, l.visit);
      d = sg(d, l.visit);
    }
    if (u === sm && d === sm) throw Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    c(e);
  };
  l.$$break = a;
  l.skip = i;
  l.find = function (e, t) {
    let r = null;
    l(e, function (e, n, i) {
      if (t.call(this, e, n, i)) {
        r = e;
        return a;
      }
    });
    return r;
  };
  l.findLast = function (e, t) {
    let r = null;
    l(e, {
      reverse: !0,
      enter(e, n, i) {
        if (t.call(this, e, n, i)) {
          r = e;
          return a;
        }
      }
    });
    return r;
  };
  l.findAll = function (e, t) {
    let r = [];
    l(e, function (e, n, a) {
      t.call(this, e, n, a) && r.push(e);
    });
    return r;
  };
  return l;
};
var sk = {};
var sv = {};
var sw = {};
function sx(e) {
  return e;
}
sw.generate = function (e, t) {
  let r = sx;
  let n = !1;
  let a = !1;
  "function" == typeof t ? r = t : t && (n = !!t.forceBraces, a = !!t.compact, "function" == typeof t.decorate && (r = t.decorate));
  return function e(t, r, n, a) {
    let i;
    switch (t.type) {
      case "Group":
        i = function (t, r, n, a) {
          let i = " " === t.combinator || a ? t.combinator : " " + t.combinator + " ";
          let o = t.terms.map(t => e(t, r, n, a)).join(i);
          return t.explicit || n ? (a || "," === o[0] ? "[" : "[ ") + o + (a ? "]" : " ]") : o;
        }(t, r, n, a) + (t.disallowEmpty ? "!" : "");
        break;
      case "Multiplier":
        return e(t.term, r, n, a) + r(function (e) {
          let {
            min,
            max,
            comma
          } = e;
          return 0 === min && 0 === max ? comma ? "#?" : "*" : 0 === min && 1 === max ? "?" : 1 === min && 0 === max ? comma ? "#" : "+" : 1 === min && 1 === max ? "" : (comma ? "#" : "") + (min === max ? "{" + min + "}" : "{" + min + "," + (0 !== max ? max : "") + "}");
        }(t), t);
      case "Type":
        i = "<" + t.name + (t.opts ? r(function (e) {
          if ("Range" === e.type) return " [" + e.min + "," + e.max + "]";
          throw Error("Unknown node type `" + e.type + "`");
        }(t.opts), t.opts) : "") + ">";
        break;
      case "Property":
        i = "<'" + t.name + "'>";
        break;
      case "Keyword":
        i = t.name;
        break;
      case "AtKeyword":
        i = "@" + t.name;
        break;
      case "Function":
        i = t.name + "(";
        break;
      case "String":
      case "Token":
        i = t.value;
        break;
      case "Comma":
        i = ",";
        break;
      default:
        throw Error("Unknown node type `" + t.type + "`");
    }
    return r(i, t);
  }(e, r, n, a);
};
let sS = {
  offset: 0,
  line: 1,
  column: 1
};
function sC(e, t) {
  let r = e && e.loc && e.loc[t];
  return r ? "line" in r ? sA(r) : r : null;
}
function sA({
  offset: e,
  line: t,
  column: r
}, n) {
  let a = {
    offset: e,
    line: t,
    column: r
  };
  if (n) {
    let e = n.split(/\n|\r\n?|\f/);
    a.offset += n.length;
    a.line += e.length - 1;
    a.column = 1 === e.length ? a.column + n.length : e.pop().length + 1;
  }
  return a;
}
sv.SyntaxMatchError = function (e, t, r, n) {
  let a = o3.createCustomError("SyntaxMatchError", e);
  let {
    css,
    mismatchOffset,
    mismatchLength,
    start,
    end
  } = function (e, t) {
    let r;
    let n;
    let a = e.tokens;
    let i = e.longestMatch;
    let o = i < a.length && a[i].node || null;
    let s = o !== t ? o : null;
    let l = 0;
    let c = 0;
    let u = 0;
    let d = "";
    for (let e = 0; e < a.length; e++) {
      let t = a[e].value;
      e === i && (c = t.length, l = d.length);
      null !== s && a[e].node === s && (e <= i ? u++ : u = 0);
      d += t;
    }
    i === a.length || u > 1 ? (r = sC(s || t, "end") || sA(sS, d), n = sA(r)) : (r = sC(s, "start") || sA(sC(t, "start") || sS, d.slice(0, l)), n = sC(s, "end") || sA(r, d.substr(l, c)));
    return {
      css: d,
      mismatchOffset: l,
      mismatchLength: c,
      start: r,
      end: n
    };
  }(n, r);
  a.rawMessage = e;
  a.syntax = t ? sw.generate(t) : "<generic>";
  a.css = css;
  a.mismatchOffset = mismatchOffset;
  a.mismatchLength = mismatchLength;
  a.message = e + "\n  syntax: " + a.syntax + "\n   value: " + (css || "<empty string>") + "\n  --------" + Array(a.mismatchOffset + 1).join("-") + "^";
  Object.assign(a, start);
  a.loc = {
    source: r && r.loc && r.loc.source || "<unknown>",
    start,
    end
  };
  return a;
};
sv.SyntaxReferenceError = function (e, t) {
  let r = o3.createCustomError("SyntaxReferenceError", e + (t ? " `" + t + "`" : ""));
  r.reference = t;
  return r;
};
var sT = {};
let sE = new Map();
let sP = new Map();
function sL(e, t) {
  t = t || 0;
  return e.length - t >= 2 && 45 === e.charCodeAt(t) && 45 === e.charCodeAt(t + 1);
}
function sD(e, t) {
  if (t = t || 0, e.length - t >= 3 && 45 === e.charCodeAt(t) && 45 !== e.charCodeAt(t + 1)) {
    let r = e.indexOf("-", t + 2);
    if (-1 !== r) return e.substring(t, r + 1);
  }
  return "";
}
sT.isCustomProperty = sL;
sT.keyword = function (e) {
  if (sE.has(e)) return sE.get(e);
  let t = e.toLowerCase();
  let r = sE.get(t);
  if (void 0 === r) {
    let e = sL(t, 0);
    let n = e ? "" : sD(t, 0);
    r = Object.freeze({
      basename: t.substr(n.length),
      name: t,
      prefix: n,
      vendor: n,
      custom: e
    });
  }
  sE.set(e, r);
  return r;
};
sT.property = function (e) {
  if (sP.has(e)) return sP.get(e);
  let t = e;
  let r = e[0];
  "/" === r ? r = "/" === e[1] ? "//" : "/" : "_" !== r && "*" !== r && "$" !== r && "#" !== r && "+" !== r && "&" !== r && (r = "");
  let n = sL(t, r.length);
  if (!n && (t = t.toLowerCase(), sP.has(t))) {
    let r = sP.get(t);
    sP.set(e, r);
    return r;
  }
  let a = n ? "" : sD(t, r.length);
  let i = t.substr(0, r.length + a.length);
  let o = Object.freeze({
    basename: t.substr(i.length),
    name: t.substr(r.length),
    hack: r,
    vendor: a,
    prefix: i,
    custom: n
  });
  sP.set(e, o);
  return o;
};
sT.vendorPrefix = sD;
var sN = {};
function sO(e, t) {
  return null !== e && e.type === oE.Delim && e.value.charCodeAt(0) === t;
}
function sM(e, t, r) {
  for (; null !== e && (e.type === oE.WhiteSpace || e.type === oE.Comment);) e = r(++t);
  return t;
}
function sz(e, t, r, n) {
  if (!e) return 0;
  let a = e.value.charCodeAt(t);
  if (43 === a || 45 === a) {
    if (r) return 0;
    t++;
  }
  for (; t < e.value.length; t++) if (!oP.isDigit(e.value.charCodeAt(t))) return 0;
  return n + 1;
}
function sI(e, t, r) {
  let n = !1;
  let a = sM(e, t, r);
  if (null === (e = r(a))) return t;
  if (e.type !== oE.Number) {
    if (!(sO(e, 43) || sO(e, 45))) return t;
    if (n = !0, a = sM(r(++a), a, r), r(a) || e.type !== oE.Number) return 0;
  }
  if (!n) {
    let t = e.value.charCodeAt(0);
    if (43 !== t && 45 !== t) return 0;
  }
  return sz(e, n ? 0 : 1, n, a);
}
function sR(e, t) {
  return null !== e && e.type === oE.Delim && e.value.charCodeAt(0) === t;
}
function sq(e, t, r) {
  let n = 0;
  for (let a = t; a < e.value.length; a++) {
    let i = e.value.charCodeAt(a);
    if (45 === i && r && 0 !== n) {
      sq(e, t + n + 1, !1);
      return 6;
    }
    if (!oP.isHexDigit(i) || ++n > 6) return 0;
  }
  return n;
}
function sB(e, t, r) {
  if (!e) return 0;
  for (; sR(r(t), 63);) {
    if (++e > 6) return 0;
    t++;
  }
  return t;
}
sN.cssWideKeywords = ["initial", "inherit", "unset", "revert", "revert-layer"];
let sj = ["calc(", "-moz-calc(", "-webkit-calc("];
let sF = new Map([[oE.Function, oE.RightParenthesis], [oE.LeftParenthesis, oE.RightParenthesis], [oE.LeftSquareBracket, oE.RightSquareBracket], [oE.LeftCurlyBracket, oE.RightCurlyBracket]]);
function s_(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function sU(e, t) {
  return oF.cmpStr(e, 0, e.length, t);
}
function sG(e, t) {
  for (let r = 0; r < t.length; r++) if (sU(e, t[r])) return !0;
  return !1;
}
function sH(e, t) {
  return t === e.length - 2 && 92 === s_(e, t) && oP.isDigit(s_(e, t + 1));
}
function sW(e, t, r) {
  if (e && "Range" === e.type) {
    let n = Number(void 0 !== r && r !== t.length ? t.substr(0, r) : t);
    if (isNaN(n) || null !== e.min && n < e.min && "string" != typeof e.min || null !== e.max && n > e.max && "string" != typeof e.max) return !0;
  }
  return !1;
}
function sV(e) {
  return function (t, r, n) {
    return null === t ? 0 : t.type === oE.Function && sG(t.value, sj) ? function (e, t) {
      let r = 0;
      let n = [];
      let a = 0;
      t: do {
        switch (e.type) {
          case oE.RightCurlyBracket:
          case oE.RightParenthesis:
          case oE.RightSquareBracket:
            if (e.type !== r) break t;
            if (r = n.pop(), 0 === n.length) {
              a++;
              break t;
            }
            break;
          case oE.Function:
          case oE.LeftParenthesis:
          case oE.LeftSquareBracket:
          case oE.LeftCurlyBracket:
            n.push(r);
            r = sF.get(e.type);
        }
        a++;
      } while (e = t(a));
      return a;
    }(t, r) : e(t, r, n);
  };
}
function s$(e) {
  return function (t) {
    return null === t || t.type !== e ? 0 : 1;
  };
}
function sX(e) {
  e && (e = new Set(e));
  return function (t, r, n) {
    if (null === t || t.type !== oE.Dimension) return 0;
    let a = oF.consumeNumber(t.value, 0);
    if (null !== e) {
      let r = t.value.indexOf("\\", a);
      let n = -1 !== r && sH(t.value, r) ? t.value.substring(a, r) : t.value.substr(a);
      if (!1 === e.has(n.toLowerCase())) return 0;
    }
    return sW(n, t.value, a) ? 0 : 1;
  };
}
function sY(e) {
  "function" != typeof e && (e = function () {
    return 0;
  });
  return function (t, r, n) {
    return null !== t && t.type === oE.Number && 0 === Number(t.value) ? 1 : e(t, r, n);
  };
}
let sK = {
  "ident-token": s$(oE.Ident),
  "function-token": s$(oE.Function),
  "at-keyword-token": s$(oE.AtKeyword),
  "hash-token": s$(oE.Hash),
  "string-token": s$(oE.String),
  "bad-string-token": s$(oE.BadString),
  "url-token": s$(oE.Url),
  "bad-url-token": s$(oE.BadUrl),
  "delim-token": s$(oE.Delim),
  "number-token": s$(oE.Number),
  "percentage-token": s$(oE.Percentage),
  "dimension-token": s$(oE.Dimension),
  "whitespace-token": s$(oE.WhiteSpace),
  "CDO-token": s$(oE.CDO),
  "CDC-token": s$(oE.CDC),
  "colon-token": s$(oE.Colon),
  "semicolon-token": s$(oE.Semicolon),
  "comma-token": s$(oE.Comma),
  "[-token": s$(oE.LeftSquareBracket),
  "]-token": s$(oE.RightSquareBracket),
  "(-token": s$(oE.LeftParenthesis),
  ")-token": s$(oE.RightParenthesis),
  "{-token": s$(oE.LeftCurlyBracket),
  "}-token": s$(oE.RightCurlyBracket),
  string: s$(oE.String),
  ident: s$(oE.Ident),
  "custom-ident": function (e) {
    if (null === e || e.type !== oE.Ident) return 0;
    let t = e.value.toLowerCase();
    return sG(t, sN.cssWideKeywords) || sU(t, "default") ? 0 : 1;
  },
  "custom-property-name": function (e) {
    return null === e || e.type !== oE.Ident || 45 !== s_(e.value, 0) || 45 !== s_(e.value, 1) ? 0 : 1;
  },
  "hex-color": function (e) {
    if (null === e || e.type !== oE.Hash) return 0;
    let t = e.value.length;
    if (4 !== t && 5 !== t && 7 !== t && 9 !== t) return 0;
    for (let r = 1; r < t; r++) if (!oP.isHexDigit(s_(e.value, r))) return 0;
    return 1;
  },
  "id-selector": function (e) {
    return null !== e && e.type === oE.Hash && oP.isIdentifierStart(s_(e.value, 1), s_(e.value, 2), s_(e.value, 3)) ? 1 : 0;
  },
  "an-plus-b": function (e, t) {
    let r = 0;
    if (!e) return 0;
    if (e.type === oE.Number) return sz(e, 0, !1, r);
    if (e.type === oE.Ident && 45 === e.value.charCodeAt(0)) {
      if (!oF.cmpChar(e.value, 1, 110)) return 0;
      switch (e.value.length) {
        case 2:
          return sI(t(++r), r, t);
        case 3:
          if (45 !== e.value.charCodeAt(2)) break;
          r = sM(t(++r), r, t);
          return sz(e = t(r), 0, !0, r);
        default:
          if (45 !== e.value.charCodeAt(2)) break;
          return sz(e, 3, !0, r);
      }
    } else if (e.type === oE.Ident || sO(e, 43) && t(r + 1).type === oE.Ident) {
      if (e.type !== oE.Ident && (e = t(++r)), null === e || !oF.cmpChar(e.value, 0, 110)) return 0;
      switch (e.value.length) {
        case 1:
          return sI(t(++r), r, t);
        case 2:
          if (45 !== e.value.charCodeAt(1)) break;
          r = sM(t(++r), r, t);
          return sz(e = t(r), 0, !0, r);
        default:
          if (45 !== e.value.charCodeAt(1)) break;
          return sz(e, 2, !0, r);
      }
    } else if (e.type === oE.Dimension) {
      let n = e.value.charCodeAt(0);
      let a = 43 === n || 45 === n ? 1 : 0;
      let i = a;
      for (; i < e.value.length && oP.isDigit(e.value.charCodeAt(i)); i++);
      return i !== a && oF.cmpChar(e.value, i, 110) ? i + 1 === e.value.length ? sI(t(++r), r, t) : 45 !== e.value.charCodeAt(i + 1) ? 0 : i + 2 === e.value.length ? (r = sM(t(++r), r, t), sz(e = t(r), 0, !0, r)) : sz(e, i + 2, !0, r) : 0;
    }
    return 0;
  },
  urange: function (e, t) {
    let r = 0;
    if (t?.(++r) || e.type !== oE.Ident || !oF.cmpChar(e.value, 0, 117) || t(++r)) return 0;
    if (sR(e, 43)) return null === (e = t(++r)) ? 0 : e.type === oE.Ident ? sB(sq(e, 0, !0), ++r, t) : sR(e, 63) ? sB(1, ++r, t) : 0;
    if (e.type === oE.Number) {
      let n = sq(e, 1, !0);
      return 0 === n ? 0 : null === (e = t(++r)) ? r : e.type === oE.Dimension || e.type === oE.Number ? 45 === e.value.charCodeAt(0) && sq(e, 1, !1) ? r + 1 : 0 : sB(n, r, t);
    }
    return e.type === oE.Dimension ? sB(sq(e, 1, !0), ++r, t) : 0;
  },
  "declaration-value": function (e, t) {
    if (!e) return 0;
    let r = 0;
    let n = [];
    let a = 0;
    t: do {
      switch (e.type) {
        case oE.BadString:
        case oE.BadUrl:
          break t;
        case oE.RightCurlyBracket:
        case oE.RightParenthesis:
        case oE.RightSquareBracket:
          if (e.type !== r) break t;
          r = n.pop();
          break;
        case oE.Semicolon:
          if (0 === r) break t;
          break;
        case oE.Delim:
          if (0 === r && "!" === e.value) break t;
          break;
        case oE.Function:
        case oE.LeftParenthesis:
        case oE.LeftSquareBracket:
        case oE.LeftCurlyBracket:
          n.push(r);
          r = sF.get(e.type);
      }
      a++;
    } while (e = t(a));
    return a;
  },
  "any-value": function (e, t) {
    if (!e) return 0;
    let r = 0;
    let n = [];
    let a = 0;
    t: do {
      switch (e.type) {
        case oE.BadString:
        case oE.BadUrl:
          break t;
        case oE.RightCurlyBracket:
        case oE.RightParenthesis:
        case oE.RightSquareBracket:
          if (e.type !== r) break t;
          r = n.pop();
          break;
        case oE.Function:
        case oE.LeftParenthesis:
        case oE.LeftSquareBracket:
        case oE.LeftCurlyBracket:
          n.push(r);
          r = sF.get(e.type);
      }
      a++;
    } while (e = t(a));
    return a;
  },
  dimension: sV(sX(null)),
  angle: sV(sX(["deg", "grad", "rad", "turn"])),
  decibel: sV(sX(["db"])),
  frequency: sV(sX(["hz", "khz"])),
  flex: sV(sX(["fr"])),
  length: sV(sY(sX(["cm", "mm", "q", "in", "pt", "pc", "px", "em", "rem", "ex", "rex", "cap", "rcap", "ch", "rch", "ic", "ric", "lh", "rlh", "vw", "svw", "lvw", "dvw", "vh", "svh", "lvh", "dvh", "vi", "svi", "lvi", "dvi", "vb", "svb", "lvb", "dvb", "vmin", "svmin", "lvmin", "dvmin", "vmax", "svmax", "lvmax", "dvmax", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"]))),
  resolution: sV(sX(["dpi", "dpcm", "dppx", "x"])),
  semitones: sV(sX(["st"])),
  time: sV(sX(["s", "ms"])),
  percentage: sV(function (e, t, r) {
    return null === e || e.type !== oE.Percentage || sW(r, e.value, e.value.length - 1) ? 0 : 1;
  }),
  zero: sY(),
  number: sV(function (e, t, r) {
    if (null === e) return 0;
    let n = oF.consumeNumber(e.value, 0);
    return n !== e.value.length && !sH(e.value, n) || sW(r, e.value, n) ? 0 : 1;
  }),
  integer: sV(function (e, t, r) {
    if (null === e || e.type !== oE.Number) return 0;
    let n = 43 === s_(e.value, 0) || 45 === s_(e.value, 0) ? 1 : 0;
    for (; n < e.value.length; n++) if (!oP.isDigit(s_(e.value, n))) return 0;
    return sW(r, e.value, n) ? 0 : 1;
  })
};
let sQ = {
  decorator(e) {
    let t = [];
    let r = null;
    return {
      ...e,
      node(t) {
        let n = r;
        r = t;
        e.node.call(this, t);
        r = n;
      },
      emit(e, n, a) {
        t.push({
          type: n,
          value: e,
          node: a ? null : r
        });
      },
      result: () => t
    };
  }
};
var sZ = {};
var sJ = {};
var s0 = {};
var s1 = {};
s1.SyntaxError = function (e, t, r) {
  return Object.assign(o3.createCustomError("SyntaxError", e), {
    input: t,
    offset: r,
    rawMessage: e,
    message: e + "\n  " + t + "\n--" + Array((r || t.length) + 1).join("-") + "^"
  });
};
s0.Tokenizer = class {
  constructor(e) {
    this.str = e;
    this.pos = 0;
  }
  charCodeAt(e) {
    return e < this.str.length ? this.str.charCodeAt(e) : 0;
  }
  charCode() {
    return this.charCodeAt(this.pos);
  }
  nextCharCode() {
    return this.charCodeAt(this.pos + 1);
  }
  nextNonWsCode(e) {
    return this.charCodeAt(this.findWsEnd(e));
  }
  findWsEnd(e) {
    for (; e < this.str.length; e++) {
      let t = this.str.charCodeAt(e);
      if (13 !== t && 10 !== t && 12 !== t && 32 !== t && 9 !== t) break;
    }
    return e;
  }
  substringToPos(e) {
    return this.str.substring(this.pos, this.pos = e);
  }
  eat(e) {
    this.charCode() !== e && this.error("Expect `" + String.fromCharCode(e) + "`");
    this.pos++;
  }
  peek() {
    return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
  }
  error(e) {
    throw new s1.SyntaxError(e, this.str, this.pos);
  }
};
let s2 = new Uint8Array(128).map((e, t) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0);
let s3 = {
  " ": 1,
  "&&": 2,
  "||": 3,
  "|": 4
};
function s4(e) {
  return e.substringToPos(e.findWsEnd(e.pos));
}
function s5(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    let r = e.str.charCodeAt(t);
    if (r >= 128 || 0 === s2[r]) break;
  }
  e.pos === t && e.error("Expect a keyword");
  return e.substringToPos(t);
}
function s8(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    let r = e.str.charCodeAt(t);
    if (r < 48 || r > 57) break;
  }
  e.pos === t && e.error("Expect a number");
  return e.substringToPos(t);
}
function s6(e) {
  let t = null;
  let r = null;
  e.eat(123);
  t = s8(e);
  44 === e.charCode() ? (e.pos++, 125 !== e.charCode() && (r = s8(e))) : r = t;
  e.eat(125);
  return {
    min: Number(t),
    max: r ? Number(r) : 0
  };
}
function s9(e, t) {
  let r = function (e) {
    let t = null;
    let r = !1;
    switch (e.charCode()) {
      case 42:
        e.pos++;
        t = {
          min: 0,
          max: 0
        };
        break;
      case 43:
        e.pos++;
        t = {
          min: 1,
          max: 0
        };
        break;
      case 63:
        e.pos++;
        t = {
          min: 0,
          max: 1
        };
        break;
      case 35:
        e.pos++;
        r = !0;
        123 === e.charCode() ? t = s6(e) : 63 === e.charCode() ? (e.pos++, t = {
          min: 0,
          max: 0
        }) : t = {
          min: 1,
          max: 0
        };
        break;
      case 123:
        t = s6(e);
        break;
      default:
        return null;
    }
    return {
      type: "Multiplier",
      comma: r,
      min: t.min,
      max: t.max,
      term: null
    };
  }(e);
  return null !== r ? (r.term = t, 35 === e.charCode() && 43 === e.charCodeAt(e.pos - 1)) ? s9(e, r) : r : t;
}
function s7(e) {
  let t = e.peek();
  return "" === t ? null : {
    type: "Token",
    value: t
  };
}
sJ.parse = function (e) {
  let t = new s0.Tokenizer(e);
  let r = function e(t) {
    let r;
    let n = [];
    let a = {};
    let i = null;
    let o = t.pos;
    for (; r = function (t) {
      let r = t.charCode();
      if (r < 128 && 1 === s2[r]) return function (e) {
        let t = s5(e);
        return 40 === e.charCode() ? (e.pos++, {
          type: "Function",
          name: t
        }) : s9(e, {
          type: "Keyword",
          name: t
        });
      }(t);
      switch (r) {
        case 93:
        case 42:
        case 43:
        case 63:
        case 35:
        case 33:
          break;
        case 91:
          let n;
          return s9(t, (t.eat(91), n = e(t), t.eat(93), n.explicit = !0, 33 === t.charCode() && (t.pos++, n.disallowEmpty = !0), n));
        case 60:
          let a;
          return 39 === t.nextCharCode() ? (t.eat(60), t.eat(39), a = s5(t), t.eat(39), t.eat(62), s9(t, {
            type: "Property",
            name: a
          })) : function (e) {
            let t;
            let r = null;
            if (e.eat(60), t = s5(e), 40 === e.charCode() && 41 === e.nextCharCode() && (e.pos += 2, t += "()"), 91 === e.charCodeAt(e.findWsEnd(e.pos))) {
              let t;
              let n;
              let a;
              s4(e);
              t = null;
              n = null;
              a = 1;
              e.eat(91);
              45 === e.charCode() && (e.peek(), a = -1);
              -1 == a && 8734 === e.charCode() ? e.peek() : (t = a * Number(s8(e)), 0 !== s2[e.charCode()] && (t += s5(e)));
              s4(e);
              e.eat(44);
              s4(e);
              8734 === e.charCode() ? e.peek() : (a = 1, 45 === e.charCode() && (e.peek(), a = -1), n = a * Number(s8(e)), 0 !== s2[e.charCode()] && (n += s5(e)));
              e.eat(93);
              r = {
                type: "Range",
                min: t,
                max: n
              };
            }
            e.eat(62);
            return s9(e, {
              type: "Type",
              name: t,
              opts: r
            });
          }(t);
        case 124:
          return {
            type: "Combinator",
            value: t.substringToPos(t.pos + (124 === t.nextCharCode() ? 2 : 1))
          };
        case 38:
          t.pos++;
          t.eat(38);
          return {
            type: "Combinator",
            value: "&&"
          };
        case 44:
          t.pos++;
          return {
            type: "Comma"
          };
        case 39:
          return s9(t, {
            type: "String",
            value: function (e) {
              let t = e.str.indexOf("'", e.pos + 1);
              -1 === t && (e.pos = e.str.length, e.error("Expect an apostrophe"));
              return e.substringToPos(t + 1);
            }(t)
          });
        case 32:
        case 9:
        case 10:
        case 13:
        case 12:
          return {
            type: "Spaces",
            value: s4(t)
          };
        case 64:
          if ((r = t.nextCharCode()) < 128 && 1 === s2[r]) {
            t.pos++;
            return {
              type: "AtKeyword",
              name: s5(t)
            };
          }
          return s7(t);
        case 123:
          if ((r = t.nextCharCode()) < 48 || r > 57) return s7(t);
          break;
        default:
          return s7(t);
      }
    }(t);) "Spaces" !== r.type && ("Combinator" === r.type ? ((null === i || "Combinator" === i.type) && (t.pos = o, t.error("Unexpected combinator")), a[r.value] = !0) : null !== i && "Combinator" !== i.type && (a[" "] = !0, n.push({
      type: "Combinator",
      value: " "
    })), n.push(r), i = r, o = t.pos);
    null !== i && "Combinator" === i.type && (t.pos -= o, t.error("Unexpected combinator"));
    return {
      type: "Group",
      terms: n,
      combinator: function (e, t) {
        let r;
        function n(e, t) {
          return {
            type: "Group",
            terms: e,
            combinator: t,
            disallowEmpty: !1,
            explicit: !1
          };
        }
        for (t = Object.keys(t).sort((e, t) => s3[e] - s3[t]); t.length > 0;) {
          r = t.shift();
          let a = 0;
          let i = 0;
          for (; a < e.length; a++) {
            let t = e[a];
            "Combinator" === t.type && (t.value === r ? (-1 === i && (i = a - 1), e.splice(a, 1), a--) : (-1 !== i && a - i > 1 && (e.splice(i, a - i, n(e.slice(i, a), r)), a = i + 1), i = -1));
          }
          -1 !== i && t.length && e.splice(i, a - i, n(e.slice(i, a), r));
        }
        return r;
      }(n, a) || " ",
      disallowEmpty: !1,
      explicit: !1
    };
  }(t);
  return (t.pos !== e.length && t.error("Unexpected input"), 1 === r.terms.length && "Group" === r.terms[0].type) ? r.terms[0] : r;
};
let le = {
  type: "Match"
};
let lt = {
  type: "Mismatch"
};
let lr = {
  type: "DisallowEmpty"
};
function ln(e, t, r) {
  return t === le && r === lt || e === le && t === le && r === le ? e : ("If" === e.type && e.$$else === lt && t === le && (t = e.then, e = e.match), {
    type: "If",
    match: e,
    then: t,
    else: r
  });
}
function la(e) {
  return e.length > 2 && 40 === e.charCodeAt(e.length - 2) && 41 === e.charCodeAt(e.length - 1);
}
function li(e) {
  return "Keyword" === e.type || "AtKeyword" === e.type || "Function" === e.type || "Type" === e.type && la(e.name);
}
sZ.DISALLOW_EMPTY = lr;
sZ.MATCH = le;
sZ.MISMATCH = lt;
sZ.buildMatchGraph = function (e, t) {
  "string" == typeof e && (e = sJ.parse(e));
  return {
    type: "MatchGraph",
    match: function e(t) {
      if ("function" == typeof t) return {
        type: "Generic",
        fn: t
      };
      switch (t.type) {
        case "Group":
          {
            let r = function e(t, r, n) {
              switch (t) {
                case " ":
                  {
                    let e = le;
                    for (let t = r.length - 1; t >= 0; t--) e = ln(r[t], e, lt);
                    return e;
                  }
                case "|":
                  {
                    let e = lt;
                    let t = null;
                    for (let n = r.length - 1; n >= 0; n--) {
                      let a = r[n];
                      if (li(a) && (null === t && n > 0 && li(r[n - 1]) && (e = ln({
                        type: "Enum",
                        map: t = Object.create(null)
                      }, le, e)), null !== t)) {
                        let e = (la(a.name) ? a.name.slice(0, -1) : a.name).toLowerCase();
                        if (e in t == !1) {
                          t[e] = a;
                          continue;
                        }
                      }
                      t = null;
                      e = ln(a, le, e);
                    }
                    return e;
                  }
                case "&&":
                  {
                    if (r.length > 5) return {
                      type: "MatchOnce",
                      terms: r,
                      all: !0
                    };
                    let n = lt;
                    for (let a = r.length - 1; a >= 0; a--) {
                      let i;
                      let o = r[a];
                      i = r.length > 1 ? e(t, r.filter(function (e) {
                        return e !== o;
                      }), !1) : le;
                      n = ln(o, i, n);
                    }
                    return n;
                  }
                case "||":
                  {
                    if (r.length > 5) return {
                      type: "MatchOnce",
                      terms: r,
                      all: !1
                    };
                    let a = n ? le : lt;
                    for (let n = r.length - 1; n >= 0; n--) {
                      let i;
                      let o = r[n];
                      i = r.length > 1 ? e(t, r.filter(function (e) {
                        return e !== o;
                      }), !0) : le;
                      a = ln(o, i, a);
                    }
                    return a;
                  }
              }
            }(t.combinator, t.terms.map(e), !1);
            t.disallowEmpty && (r = ln(r, lr, lt));
            return r;
          }
        case "Multiplier":
          return function (t) {
            let r = le;
            let n = e(t.term);
            if (0 === t.max) {
              n = ln(n, lr, lt);
              (r = ln(n, null, lt)).then = ln(le, le, r);
              t.comma && (r.then.$$else = ln({
                type: "Comma",
                syntax: t
              }, r, lt));
            } else for (let e = t.min || 1; e <= t.max; e++) {
              t.comma && r !== le && (r = ln({
                type: "Comma",
                syntax: t
              }, r, lt));
              r = ln(n, ln(le, le, r), lt);
            }
            if (0 === t.min) r = ln(le, le, r);else for (let e = 0; e < t.min - 1; e++) {
              t.comma && r !== le && (r = ln({
                type: "Comma",
                syntax: t
              }, r, lt));
              r = ln(n, r, lt);
            }
            return r;
          }(t);
        case "Type":
        case "Property":
          return {
            type: t.type,
            name: t.name,
            syntax: t
          };
        case "Keyword":
          return {
            type: t.type,
            name: t.name.toLowerCase(),
            syntax: t
          };
        case "AtKeyword":
          return {
            type: t.type,
            name: "@" + t.name.toLowerCase(),
            syntax: t
          };
        case "Function":
          return {
            type: t.type,
            name: t.name.toLowerCase() + "(",
            syntax: t
          };
        case "String":
          if (3 === t.value.length) return {
            type: "Token",
            value: t.value.charAt(1),
            syntax: t
          };
          return {
            type: t.type,
            value: t.value.substr(1, t.value.length - 2).replace(/\\'/g, "'"),
            syntax: t
          };
        case "Token":
          return {
            type: t.type,
            value: t.value,
            syntax: t
          };
        case "Comma":
          return {
            type: t.type,
            syntax: t
          };
        default:
          throw Error("Unknown node type:", t.type);
      }
    }(e),
    syntax: t || null,
    source: e
  };
};
var lo = {};
let {
  hasOwnProperty: _hasOwnProperty7
} = Object.prototype;
let ll = "Match";
function lc(e) {
  let t = null;
  let r = null;
  let n = e;
  for (; null !== n;) {
    r = n.prev;
    n.prev = t;
    t = n;
    n = r;
  }
  return t;
}
function lu(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let n = t.charCodeAt(r);
    let a = e.charCodeAt(r);
    if (a >= 65 && a <= 90 && (a |= 32), a !== n) return !1;
  }
  return !0;
}
function ld(e) {
  return null === e || e.type === oE.Comma || e.type === oE.Function || e.type === oE.LeftParenthesis || e.type === oE.LeftSquareBracket || e.type === oE.LeftCurlyBracket || e.type === oE.Delim && "?" !== e.value;
}
function lh(e) {
  return null === e || e.type === oE.RightParenthesis || e.type === oE.RightSquareBracket || e.type === oE.RightCurlyBracket || e.type === oE.Delim && "/" === e.value;
}
function lp(e, t, r) {
  function n() {
    do f = ++g < e.length ? e[g] : null; while (null !== f && (f.type === oE.WhiteSpace || f.type === oE.Comment));
  }
  function a(t) {
    let r = g + t;
    return r < e.length ? e[r] : null;
  }
  function i(e, t) {
    return {
      nextState: e,
      matchStack: y,
      syntaxStack: c,
      thenStack: u,
      tokenIndex: g,
      prev: t
    };
  }
  function o(e) {
    u = {
      nextState: e,
      matchStack: y,
      syntaxStack: c,
      prev: u
    };
  }
  function s() {
    y = {
      type: 1,
      syntax: t.syntax,
      token: f,
      prev: y
    };
    n();
    h = null;
    g > b && (b = g);
  }
  function l() {
    y = 2 === y.type ? y.prev : {
      type: 3,
      syntax: c.syntax,
      token: y.token,
      prev: y
    };
    c = c.prev;
  }
  let c = null;
  let u = null;
  let d = null;
  let h = null;
  let p = 0;
  let m = null;
  let f = null;
  let g = -1;
  let b = 0;
  let y = {
    type: 0,
    syntax: null,
    token: null,
    prev: null
  };
  for (n(); null === m && ++p < 15e3;) switch (t.type) {
    case "Match":
      if (null === u) {
        if (null !== f && (g !== e.length - 1 || "\\0" !== f.value && "\\9" !== f.value)) {
          t = sZ.MISMATCH;
          break;
        }
        m = ll;
        break;
      }
      if ((t = u.nextState) === sZ.DISALLOW_EMPTY) {
        if (u.matchStack === y) {
          t = sZ.MISMATCH;
          break;
        }
        t = sZ.MATCH;
      }
      for (; u.syntaxStack !== c;) l();
      u = u.prev;
      break;
    case "Mismatch":
      if (null !== h && !1 !== h) (null === d || g > d.tokenIndex) && (d = h, h = !1);else if (null === d) {
        m = "Mismatch";
        break;
      }
      t = d.nextState;
      u = d.thenStack;
      c = d.syntaxStack;
      y = d.matchStack;
      f = (g = d.tokenIndex) < e.length ? e[g] : null;
      d = d.prev;
      break;
    case "MatchGraph":
      t = t.match;
      break;
    case "If":
      t.$$else !== sZ.MISMATCH && (d = i(t.$$else, d));
      t.then !== sZ.MATCH && o(t.then);
      t = t.match;
      break;
    case "MatchOnce":
      t = {
        type: "MatchOnceBuffer",
        syntax: t,
        index: 0,
        mask: 0
      };
      break;
    case "MatchOnceBuffer":
      {
        let e = t.syntax.terms;
        if (t.index === e.length) {
          if (0 === t.mask || t.syntax.all) {
            t = sZ.MISMATCH;
            break;
          }
          t = sZ.MATCH;
          break;
        }
        if (t.mask === (1 << e.length) - 1) {
          t = sZ.MATCH;
          break;
        }
        for (; t.index < e.length; t.index++) {
          let r = 1 << t.index;
          if ((t.mask & r) == 0) {
            d = i(t, d);
            o({
              type: "AddMatchOnce",
              syntax: t.syntax,
              mask: t.mask | r
            });
            t = e[t.index++];
            break;
          }
        }
        break;
      }
    case "AddMatchOnce":
      t = {
        type: "MatchOnceBuffer",
        syntax: t.syntax,
        index: 0,
        mask: t.mask
      };
      break;
    case "Enum":
      if (null !== f) {
        let e = f.value.toLowerCase();
        if (-1 !== e.indexOf("\\") && (e = e.replace(/\\[09].*$/, "")), _hasOwnProperty7.call(t.map, e)) {
          t = t.map[e];
          break;
        }
      }
      t = sZ.MISMATCH;
      break;
    case "Generic":
      {
        let e = null !== c ? c.opts : null;
        let r = g + Math.floor(t.fn(f, a, e));
        if (!isNaN(r) && r > g) {
          for (; g < r;) s();
          t = sZ.MATCH;
        } else t = sZ.MISMATCH;
        break;
      }
    case "Type":
    case "Property":
      {
        let e = "Type" === t.type ? "types" : "properties";
        let n = _hasOwnProperty7.call(r, e) ? r[e][t.name] : null;
        if (!n || !n.match) throw Error("Bad syntax reference: " + ("Type" === t.type ? "<" + t.name + ">" : "<'" + t.name + "'>"));
        if (!1 !== h && null !== f && "Type" === t.type && ("custom-ident" === t.name && f.type === oE.Ident || "length" === t.name && "0" === f.value)) {
          null === h && (h = i(t, d));
          t = sZ.MISMATCH;
          break;
        }
        c = {
          syntax: t.syntax,
          opts: t.syntax.opts || null !== c && c.opts || null,
          prev: c
        };
        y = {
          type: 2,
          syntax: t.syntax,
          token: y.token,
          prev: y
        };
        t = n.match;
        break;
      }
    case "Keyword":
      {
        let e = t.name;
        if (null !== f) {
          let r = f.value;
          if (-1 !== r.indexOf("\\") && (r = r.replace(/\\[09].*$/, "")), lu(r, e)) {
            s();
            t = sZ.MATCH;
            break;
          }
        }
        t = sZ.MISMATCH;
        break;
      }
    case "AtKeyword":
    case "Function":
      if (null !== f && lu(f.value, t.name)) {
        s();
        t = sZ.MATCH;
        break;
      }
      t = sZ.MISMATCH;
      break;
    case "Token":
      if (null !== f && f.value === t.value) {
        s();
        t = sZ.MATCH;
        break;
      }
      t = sZ.MISMATCH;
      break;
    case "Comma":
      null !== f && f.type === oE.Comma ? ld(y.token) ? t = sZ.MISMATCH : (s(), t = lh(f) ? sZ.MISMATCH : sZ.MATCH) : t = ld(y.token) || lh(f) ? sZ.MATCH : sZ.MISMATCH;
      break;
    case "String":
      let n = "";
      let p = g;
      for (; p < e.length && n.length < t.value.length; p++) n += e[p].value;
      if (lu(n, t.value)) {
        for (; g < p;) s();
        t = sZ.MATCH;
      } else t = sZ.MISMATCH;
      break;
    default:
      throw Error("Unknown node type: " + t.type);
  }
  switch (m) {
    case null:
      console.warn("[csstree-match] BREAK after 15000 iterations");
      m = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)";
      y = null;
      break;
    case ll:
      for (; null !== c;) l();
      break;
    default:
      y = null;
  }
  return {
    tokens: e,
    reason: m,
    iterations: p,
    match: y,
    longestMatch: b
  };
}
lo.matchAsList = function (e, t, r) {
  let n = lp(e, t, r || {});
  if (null !== n.match) {
    let e = lc(n.match).prev;
    for (n.match = []; null !== e;) {
      switch (e.type) {
        case 2:
        case 3:
          n.match.push({
            type: e.type,
            syntax: e.syntax
          });
          break;
        default:
          n.match.push({
            token: e.token.value,
            node: e.token.node
          });
      }
      e = e.prev;
    }
  }
  return n;
};
lo.matchAsTree = function (e, t, r) {
  let n = lp(e, t, r || {});
  if (null === n.match) return n;
  let a = n.match;
  let i = n.match = {
    syntax: t.syntax || null,
    match: []
  };
  let o = [i];
  for (a = lc(a).prev; null !== a;) {
    switch (a.type) {
      case 2:
        i.match.push(i = {
          syntax: a.syntax,
          match: []
        });
        o.push(i);
        break;
      case 3:
        o.pop();
        i = o[o.length - 1];
        break;
      default:
        i.match.push({
          syntax: a.syntax || null,
          token: a.token.value,
          node: a.token.node
        });
    }
    a = a.prev;
  }
  return n;
};
var lm = {};
function lf(e) {
  function t(e) {
    return null !== e && ("Type" === e.type || "Property" === e.type || "Keyword" === e.type);
  }
  let r = null;
  null !== this.matched && function n(a) {
    if (Array.isArray(a.match)) {
      for (let e = 0; e < a.match.length; e++) if (n(a.match[e])) {
        t(a.syntax) && r.unshift(a.syntax);
        return !0;
      }
    } else if (a.node === e) {
      r = t(a.syntax) ? [a.syntax] : [];
      return !0;
    }
    return !1;
  }(this.matched);
  return r;
}
function lg(e, t, r) {
  let n = lf.call(e, t);
  return null !== n && n.some(r);
}
lm.getTrace = lf;
lm.isKeyword = function (e) {
  return lg(this, e, e => "Keyword" === e.type);
};
lm.isProperty = function (e, t) {
  return lg(this, e, e => "Property" === e.type && e.name === t);
};
lm.isType = function (e, t) {
  return lg(this, e, e => "Type" === e.type && e.name === t);
};
var lb = {};
lb.matchFragments = function (e, t, r, n, a) {
  let i = [];
  null !== r.matched && function r(o) {
    if (null !== o.syntax && o.syntax.type === n && o.syntax.name === a) {
      let r = function e(t) {
        return "node" in t ? t.node : e(t.match[0]);
      }(o);
      let n = function e(t) {
        return "node" in t ? t.node : e(t.match[t.match.length - 1]);
      }(o);
      e.syntax.walk(t, function (e, t, a) {
        if (e === r) {
          let e = new oJ.List();
          do {
            if (e.appendData(t.data), t.data === n) break;
            t = t.next;
          } while (null !== t);
          i.push({
            parent: a,
            nodes: e
          });
        }
      });
    }
    Array.isArray(o.match) && o.match.forEach(r);
  }(r.matched);
  return i;
};
var ly = {};
let {
  hasOwnProperty: _hasOwnProperty
} = Object.prototype;
function lv(e) {
  return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0;
}
function lw(e) {
  return !!e && lv(e.offset) && lv(e.line) && lv(e.column);
}
ly.getStructureFromConfig = function (e) {
  let t = {};
  if (e.node) {
    for (let r in e.node) if (_hasOwnProperty.call(e.node, r)) {
      let n = e.node[r];
      if (n.structure) t[r] = function (e, t) {
        let r = t.structure;
        let n = {
          type: String,
          loc: !0
        };
        let a = {
          type: '"' + e + '"'
        };
        for (let t in r) {
          if (!1 === _hasOwnProperty.call(r, t)) continue;
          let i = [];
          let o = n[t] = Array.isArray(r[t]) ? r[t].slice() : [r[t]];
          for (let r = 0; r < o.length; r++) {
            let n = o[r];
            if (n === String || n === Boolean) i.push(n.name);else if (null === n) i.push("null");else if ("string" == typeof n) i.push("<" + n + ">");else if (Array.isArray(n)) i.push("List");else throw Error("Wrong value `" + n + "` in `" + e + "." + t + "` structure definition");
          }
          a[t] = i.join(" | ");
        }
        return {
          docs: a,
          check: function (t, r) {
            if (!t || t.constructor !== Object) return r(t, "Type of node should be an Object");
            for (let a in t) {
              let i = !0;
              if (!1 !== _hasOwnProperty.call(t, a)) {
                if ("type" === a) t.type !== e && r(t, "Wrong node type `" + t.type + "`, expected `" + e + "`");else if ("loc" === a) {
                  if (null === t.loc) continue;
                  if (t.loc && t.loc.constructor === Object) {
                    if ("string" != typeof t.loc.source) a += ".source";else if (lw(t.loc.start)) {
                      if (lw(t.loc.end)) continue;
                      a += ".end";
                    } else a += ".start";
                  }
                  i = !1;
                } else if (n.hasOwnProperty(a)) {
                  i = !1;
                  for (let e = 0; !i && e < n[a].length; e++) {
                    let r = n[a][e];
                    switch (r) {
                      case String:
                        i = "string" == typeof t[a];
                        break;
                      case Boolean:
                        i = "boolean" == typeof t[a];
                        break;
                      case null:
                        i = null === t[a];
                        break;
                      default:
                        "string" == typeof r ? i = t[a] && t[a].type === r : Array.isArray(r) && (i = t[a] instanceof oJ.List);
                    }
                  }
                } else r(t, "Unknown field `" + a + "` for " + e + " node type");
                i || r(t, "Bad value for `" + e + "." + a + "`");
              }
            }
            for (let a in n) _hasOwnProperty.call(n, a) && !1 === _hasOwnProperty.call(t, a) && r(t, "Field `" + e + "." + a + "` is missed");
          }
        };
      }(r, n);else throw Error("Missed `structure` field in `" + r + "` node type definition");
    }
  }
  return t;
};
var lx = {};
let lS = function () {};
function lC(e) {
  return "function" == typeof e ? e : lS;
}
lx.walk = function (e, t, r) {
  let n = lS;
  let a = lS;
  if ("function" == typeof t ? n = t : t && (n = lC(t.enter), a = lC(t.leave)), n === lS && a === lS) throw Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  !function e(t) {
    switch (n.call(r, t), t.type) {
      case "Group":
        t.terms.forEach(e);
        break;
      case "Multiplier":
        e(t.term);
        break;
      case "Type":
      case "Property":
      case "Keyword":
      case "AtKeyword":
      case "Function":
      case "String":
      case "Token":
      case "Comma":
        break;
      default:
        throw Error("Unknown type: " + t.type);
    }
    a.call(r, t);
  }(e);
};
let lA = sZ.buildMatchGraph(sN.cssWideKeywords.join(" | "));
function lT(e, t, r) {
  let n = {};
  for (let a in e) e[a].syntax && (n[a] = r ? e[a].syntax : sw.generate(e[a].syntax, {
    compact: t
  }));
  return n;
}
function lE(e, t, r) {
  return {
    matched: e,
    iterations: r,
    error: t,
    ...lm
  };
}
function lP(e, t, r, n) {
  var a;
  let i;
  a = e.syntax;
  let o = "string" == typeof r ? function (e) {
    let t = [];
    oT.tokenize(e, (r, n, a) => t.push({
      type: r,
      value: e.slice(n, a),
      node: null
    }));
    return t;
  }(r) : a.generate(r, sQ);
  return !function (e) {
    for (let t = 0; t < e.length; t++) if ("var(" === e[t].value.toLowerCase()) return !0;
    return !1;
  }(o) ? (n && (i = lo.matchAsTree(o, e.cssWideKeywordsSyntax, e)), n && i.match || (i = lo.matchAsTree(o, t.match, e)).match) ? lE(i.match, null, i.iterations) : lE(null, new sv.SyntaxMatchError(i.reason, t.syntax, r, i), i.iterations) : lE(null, Error("Matching for a tree with var() is not supported"));
}
sk.Lexer = class {
  constructor(e, t, r) {
    if (this.cssWideKeywordsSyntax = lA, this.syntax = t, this.generic = !1, this.atrules = Object.create(null), this.properties = Object.create(null), this.types = Object.create(null), this.structure = r || ly.getStructureFromConfig(e), e) {
      if (e.types) for (let t in e.types) this.addType_(t, e.types[t]);
      if (e.generic) for (let e in this.generic = !0, sK) this.addType_(e, sK[e]);
      if (e.atrules) for (let t in e.atrules) this.addAtrule_(t, e.atrules[t]);
      if (e.properties) for (let t in e.properties) this.addProperty_(t, e.properties[t]);
    }
  }
  checkStructure(e) {
    function t(e, t) {
      n.push({
        node: e,
        message: t
      });
    }
    let r = this.structure;
    let n = [];
    this.syntax.walk(e, function (e) {
      r.hasOwnProperty(e.type) ? r[e.type].check(e, t) : t(e, "Unknown node type `" + e.type + "`");
    });
    return !!n.length && n;
  }
  createDescriptor(e, t, r, n = null) {
    let a = {
      type: t,
      name: r
    };
    let i = {
      type: t,
      name: r,
      parent: n,
      serializable: "string" == typeof e || e && "string" == typeof e.type,
      syntax: null,
      match: null
    };
    "function" == typeof e ? i.match = sZ.buildMatchGraph(e, a) : ("string" == typeof e ? Object.defineProperty(i, "syntax", {
      get: () => (Object.defineProperty(i, "syntax", {
        value: sJ.parse(e)
      }), i.syntax)
    }) : i.syntax = e, Object.defineProperty(i, "match", {
      get: () => (Object.defineProperty(i, "match", {
        value: sZ.buildMatchGraph(i.syntax, a)
      }), i.match)
    }));
    return i;
  }
  addAtrule_(e, t) {
    t && (this.atrules[e] = {
      type: "Atrule",
      name: e,
      prelude: t.prelude ? this.createDescriptor(t.prelude, "AtrulePrelude", e) : null,
      descriptors: t.descriptors ? Object.keys(t.descriptors).reduce((r, n) => (r[n] = this.createDescriptor(t.descriptors[n], "AtruleDescriptor", n, e), r), Object.create(null)) : null
    });
  }
  addProperty_(e, t) {
    t && (this.properties[e] = this.createDescriptor(t, "Property", e));
  }
  addType_(e, t) {
    t && (this.types[e] = this.createDescriptor(t, "Type", e));
  }
  checkAtruleName(e) {
    if (!this.getAtrule(e)) return new sv.SyntaxReferenceError("Unknown at-rule", "@" + e);
  }
  checkAtrulePrelude(e, t) {
    let r = this.checkAtruleName(e);
    if (r) return r;
    let n = this.getAtrule(e);
    return !n.prelude && t ? SyntaxError("At-rule `@" + e + "` should not contain a prelude") : !n.prelude || t || lP(this, n.prelude, "", !1).matched ? void 0 : SyntaxError("At-rule `@" + e + "` should contain a prelude");
  }
  checkAtruleDescriptorName(e, t) {
    let r = this.checkAtruleName(e);
    if (r) return r;
    let n = this.getAtrule(e);
    let a = sT.keyword(t);
    return n.descriptors ? n.descriptors[a.name] || n.descriptors[a.basename] ? void 0 : new sv.SyntaxReferenceError("Unknown at-rule descriptor", t) : SyntaxError("At-rule `@" + e + "` has no known descriptors");
  }
  checkPropertyName(e) {
    if (!this.getProperty(e)) return new sv.SyntaxReferenceError("Unknown property", e);
  }
  matchAtrulePrelude(e, t) {
    let r = this.checkAtrulePrelude(e, t);
    if (r) return lE(null, r);
    let n = this.getAtrule(e);
    return n.prelude ? lP(this, n.prelude, t || "", !1) : lE(null, null);
  }
  matchAtruleDescriptor(e, t, r) {
    let n = this.checkAtruleDescriptorName(e, t);
    if (n) return lE(null, n);
    let a = this.getAtrule(e);
    let i = sT.keyword(t);
    return lP(this, a.descriptors[i.name] || a.descriptors[i.basename], r, !1);
  }
  matchDeclaration(e) {
    return "Declaration" !== e.type ? lE(null, Error("Not a Declaration node")) : this.matchProperty(e.property, e.value);
  }
  matchProperty(e, t) {
    if (sT.property(e).custom) return lE(null, Error("Lexer matching doesn't applicable for custom properties"));
    let r = this.checkPropertyName(e);
    return r ? lE(null, r) : lP(this, this.getProperty(e), t, !0);
  }
  matchType(e, t) {
    let r = this.getType(e);
    return r ? lP(this, r, t, !1) : lE(null, new sv.SyntaxReferenceError("Unknown type", e));
  }
  match(e, t) {
    return "string" == typeof e || e && e.type ? ("string" != typeof e && e.match || (e = this.createDescriptor(e, "Type", "anonymous")), lP(this, e, t, !1)) : lE(null, new sv.SyntaxReferenceError("Bad syntax"));
  }
  findValueFragments(e, t, r, n) {
    return lb.matchFragments(this, t, this.matchProperty(e, t), r, n);
  }
  findDeclarationValueFragments(e, t, r) {
    return lb.matchFragments(this, e.value, this.matchDeclaration(e), t, r);
  }
  findAllFragments(e, t, r) {
    let n = [];
    this.syntax.walk(e, {
      visit: "Declaration",
      enter: e => {
        n.push.apply(n, this.findDeclarationValueFragments(e, t, r));
      }
    });
    return n;
  }
  getAtrule(e, t = !0) {
    let r = sT.keyword(e);
    return (r.vendor && t ? this.atrules[r.name] || this.atrules[r.basename] : this.atrules[r.name]) || null;
  }
  getAtrulePrelude(e, t = !0) {
    let r = this.getAtrule(e, t);
    return r && r.prelude || null;
  }
  getAtruleDescriptor(e, t) {
    return this.atrules.hasOwnProperty(e) && this.atrules.declarators && this.atrules[e].declarators[t] || null;
  }
  getProperty(e, t = !0) {
    let r = sT.property(e);
    return (r.vendor && t ? this.properties[r.name] || this.properties[r.basename] : this.properties[r.name]) || null;
  }
  getType(e) {
    return hasOwnProperty.call(this.types, e) ? this.types[e] : null;
  }
  validate() {
    function e(n, a, i, o) {
      if (i.has(a)) return i.get(a);
      i.set(a, !1);
      null !== o.syntax && lx.walk(o.syntax, function (o) {
        if ("Type" !== o.type && "Property" !== o.type) return;
        let s = "Type" === o.type ? n.types : n.properties;
        let l = "Type" === o.type ? t : r;
        (!hasOwnProperty.call(s, o.name) || e(n, o.name, l, s[o.name])) && i.set(a, !0);
      }, this);
    }
    let t = new Map();
    let r = new Map();
    for (let r in this.types) e(this, r, t, this.types[r]);
    for (let t in this.properties) e(this, t, r, this.properties[t]);
    return (t = [...t.keys()].filter(e => t.get(e)), r = [...r.keys()].filter(e => r.get(e)), t.length || r.length) ? {
      types: t,
      properties: r
    } : null;
  }
  dump(e, t) {
    return {
      generic: this.generic,
      types: lT(this.types, !t, e),
      properties: lT(this.properties, !t, e),
      atrules: function (e, t, r) {
        let n = {};
        for (let [a, i] of Object.entries(e)) n[a] = {
          prelude: i.prelude && (r ? i.prelude.syntax : sw.generate(i.prelude.syntax, {
            compact: t
          })),
          descriptors: i.descriptors && lT(i.descriptors, t, r)
        };
        return n;
      }(this.atrules, !t, e)
    };
  }
  toString() {
    return JSON.stringify(this.dump());
  }
};
let {
  hasOwnProperty: _hasOwnProperty8
} = Object.prototype;
let lD = {
  generic: !0,
  types: lz,
  atrules: {
    prelude: lI,
    descriptors: lI
  },
  properties: lz,
  parseContext: function (e, t) {
    return Object.assign(e, t);
  },
  scope: function e(t, r) {
    for (let n in r) _hasOwnProperty8.call(r, n) && (lN(t[n]) ? e(t[n], r[n]) : t[n] = lO(r[n]));
    return t;
  },
  atrule: ["parse"],
  pseudo: ["parse"],
  node: ["name", "structure", "parse", "generate", "walkContext"]
};
function lN(e) {
  return e && e.constructor === Object;
}
function lO(e) {
  return lN(e) ? {
    ...e
  } : e;
}
function lM(e, t) {
  return "string" == typeof t && /^\s*\|/.test(t) ? "string" == typeof e ? e + t : t.replace(/^\s*\|\s*/, "") : t || null;
}
function lz(e, t) {
  if ("string" == typeof t) return lM(e, t);
  let r = {
    ...e
  };
  for (let n in t) _hasOwnProperty8.call(t, n) && (r[n] = lM(_hasOwnProperty8.call(e, n) ? e[n] : void 0, t[n]));
  return r;
}
function lI(e, t) {
  let r = lz(e, t);
  return !lN(r) || Object.keys(r).length ? r : null;
}
let lR = (e, t) => function e(t, r, n) {
  for (let a in n) if (!1 !== _hasOwnProperty8.call(n, a)) {
    if (!0 === n[a]) _hasOwnProperty8.call(r, a) && (t[a] = lO(r[a]));else if (n[a]) {
      if ("function" == typeof n[a]) {
        let e = n[a];
        t[a] = e({}, t[a]);
        t[a] = e(t[a] || {}, r[a]);
      } else if (lN(n[a])) {
        let i = {};
        for (let r in t[a]) i[r] = e({}, t[a][r], n[a]);
        for (let t in r[a]) i[t] = e(i[t] || {}, r[a][t], n[a]);
        t[a] = i;
      } else if (Array.isArray(n[a])) {
        let i = {};
        let o = n[a].reduce(function (e, t) {
          e[t] = !0;
          return e;
        }, {});
        for (let [r, n] of Object.entries(t[a] || {})) {
          i[r] = {};
          n && e(i[r], n, o);
        }
        for (let t in r[a]) _hasOwnProperty8.call(r[a], t) && (i[t] || (i[t] = {}), r[a] && r[a][t] && e(i[t], r[a][t], o));
        t[a] = i;
      }
    }
  }
  return t;
}(e, t, lD);
var lq = e => function e(t) {
  let r = oZ.createParser(t);
  let n = sh.createWalker(t);
  let a = o7.createGenerator(t);
  let {
    fromPlainObject: _fromPlainObject4,
    toPlainObject: _toPlainObject4
  } = sd.createConvertor(n);
  let s = {
    lexer: null,
    createLexer: e => new sk.Lexer(e, s, s.lexer.structure),
    tokenize: oT.tokenize,
    parse: r,
    generate: a,
    walk: n,
    find: n.find,
    findLast: n.findLast,
    findAll: n.findAll,
    fromPlainObject: _fromPlainObject4,
    toPlainObject: _toPlainObject4,
    fork(r) {
      let n = lR({}, t);
      return e("function" == typeof r ? r(n, Object.assign) : lR(n, r));
    }
  };
  s.lexer = new sk.Lexer({
    generic: !0,
    types: t.types,
    atrules: t.atrules,
    properties: t.properties,
    node: t.node
  }, s);
  return s;
}(lR({}, e));
var lB = {};
var lj = {};
function lF(e, t) {
  let r = this.tokenStart + e;
  let n = this.charCodeAt(r);
  for ((43 === n || 45 === n) && (t && this.error("Number sign is not allowed"), r++); r < this.tokenEnd; r++) oP.isDigit(this.charCodeAt(r)) || this.error("Integer is expected", r);
}
function l_(e) {
  return lF.call(this, 0, e);
}
function lU(e, t) {
  if (!this.cmpChar(this.tokenStart + e, t)) {
    let r = "";
    switch (t) {
      case 110:
        r = "N is expected";
        break;
      case 45:
        r = "HyphenMinus is expected";
    }
    this.error(r, this.tokenStart + e);
  }
}
function lG() {
  let e = 0;
  let t = 0;
  let r = this.tokenType;
  for (; r === oE.WhiteSpace || r === oE.Comment;) r = this.lookupType(++e);
  if (r !== oE.Number) {
    if (!(this.isDelim(43, e) || this.isDelim(45, e))) return null;
    t = this.isDelim(43, e) ? 43 : 45;
    do r = this.lookupType(++e); while (r === oE.WhiteSpace || r === oE.Comment);
    r !== oE.Number && (this.skip(e), l_.call(this, !0));
  }
  e > 0 && this.skip(e);
  0 === t && 43 !== (r = this.charCodeAt(this.tokenStart)) && 45 !== r && this.error("Number sign is expected");
  l_.call(this, 0 !== t);
  return 45 === t ? "-" + this.consume(oE.Number) : this.consume(oE.Number);
}
lj.generate = function (e) {
  if (e.a) {
    let t = "+1" === e.a && "n" || "1" === e.a && "n" || "-1" === e.a && "-n" || e.a + "n";
    if (e.b) {
      let r = "-" === e.b[0] || "+" === e.b[0] ? e.b : "+" + e.b;
      this.tokenize(t + r);
    } else this.tokenize(t);
  } else this.tokenize(e.b);
};
lj.name = "AnPlusB";
lj.parse = function () {
  let e = this.tokenStart;
  let t = null;
  let r = null;
  if (this.tokenType === oE.Number) {
    l_.call(this, !1);
    r = this.consume(oE.Number);
  } else if (this.tokenType === oE.Ident && this.cmpChar(this.tokenStart, 45)) switch (t = "-1", lU.call(this, 1, 110), this.tokenEnd - this.tokenStart) {
    case 2:
      this.next();
      r = lG.call(this);
      break;
    case 3:
      lU.call(this, 2, 45);
      this.next();
      this.skipSC();
      l_.call(this, !0);
      r = "-" + this.consume(oE.Number);
      break;
    default:
      lU.call(this, 2, 45);
      lF.call(this, 3, !0);
      this.next();
      r = this.substrToCursor(e + 2);
  } else if (this.tokenType === oE.Ident || this.isDelim(43) && this.lookupType(1) === oE.Ident) {
    let n = 0;
    switch (t = "1", this.isDelim(43) && (n = 1, this.next()), lU.call(this, 0, 110), this.tokenEnd - this.tokenStart) {
      case 1:
        this.next();
        r = lG.call(this);
        break;
      case 2:
        lU.call(this, 1, 45);
        this.next();
        this.skipSC();
        l_.call(this, !0);
        r = "-" + this.consume(oE.Number);
        break;
      default:
        lU.call(this, 1, 45);
        lF.call(this, 2, !0);
        this.next();
        r = this.substrToCursor(e + n + 1);
    }
  } else if (this.tokenType === oE.Dimension) {
    let n = this.charCodeAt(this.tokenStart);
    let a = 43 === n || 45 === n;
    let i = this.tokenStart + a;
    for (; i < this.tokenEnd && oP.isDigit(this.charCodeAt(i)); i++);
    i === this.tokenStart + a && this.error("Integer is expected", this.tokenStart + a);
    lU.call(this, i - this.tokenStart, 110);
    t = this.substring(e, i);
    i + 1 === this.tokenEnd ? (this.next(), r = lG.call(this)) : (lU.call(this, i - this.tokenStart + 1, 45), i + 2 === this.tokenEnd ? (this.next(), this.skipSC(), l_.call(this, !0), r = "-" + this.consume(oE.Number)) : (lF.call(this, i - this.tokenStart + 2, !0), this.next(), r = this.substrToCursor(i + 1)));
  } else this.error();
  null !== t && 43 === t.charCodeAt(0) && (t = t.substr(1));
  null !== r && 43 === r.charCodeAt(0) && (r = r.substr(1));
  return {
    type: "AnPlusB",
    loc: this.getLocation(e, this.tokenStart),
    a: t,
    b: r
  };
};
lj.structure = {
  a: [String, null],
  b: [String, null]
};
var lH = {};
function lW(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
}
function lV() {
  for (function () {
    let e = 1;
    let t;
  }(); t = this.lookupType(e); e++) {
    if (t === oE.RightCurlyBracket) return !0;
    if (t === oE.LeftCurlyBracket || t === oE.AtKeyword) break;
  }
  return !1;
}
lH.generate = function (e) {
  this.token(oE.AtKeyword, "@" + e.name);
  null !== e.prelude && this.node(e.prelude);
  e.block ? this.node(e.block) : this.token(oE.Semicolon, ";");
};
lH.name = "Atrule";
lH.parse = function () {
  let e;
  let t;
  let r = this.tokenStart;
  let n = null;
  let a = null;
  switch (this.eat(oE.AtKeyword), t = (e = this.substrToCursor(r + 1)).toLowerCase(), this.skipSC(), !1 === this.eof && this.tokenType !== oE.LeftCurlyBracket && this.tokenType !== oE.Semicolon && (n = this.parseAtrulePrelude ? this.parseWithFallback(this.AtrulePrelude.bind(this, e), lW) : lW.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
    case oE.Semicolon:
      this.next();
      break;
    case oE.LeftCurlyBracket:
      hasOwnProperty.call(this.atrule, t) && "function" == typeof this.atrule[t].block ? a = this.atrule[t].block.call(this) : a = this.Block(lV.call(this));
  }
  return {
    type: "Atrule",
    loc: this.getLocation(r, this.tokenStart),
    name: e,
    prelude: n,
    block: a
  };
};
lH.structure = {
  name: String,
  prelude: ["AtrulePrelude", "Raw", null],
  block: ["Block", null]
};
lH.walkContext = "atrule";
var l$ = {};
l$.generate = function (e) {
  this.children(e);
};
l$.name = "AtrulePrelude";
l$.parse = function (e) {
  let t = null;
  null !== e && (e = e.toLowerCase());
  this.skipSC();
  hasOwnProperty.call(this.atrule, e) && "function" == typeof this.atrule[e].prelude ? t = this.atrule[e].prelude.call(this) : t = this.readSequence(this.scope.AtrulePrelude);
  this.skipSC();
  !0 !== this.eof && this.tokenType !== oE.LeftCurlyBracket && this.tokenType !== oE.Semicolon && this.error("Semicolon or block is expected");
  return {
    type: "AtrulePrelude",
    loc: this.getLocationFromList(t),
    children: t
  };
};
l$.structure = {
  children: [[]]
};
l$.walkContext = "atrulePrelude";
var lX = {};
function lY() {
  this.eof && this.error("Unexpected end of input");
  let e = this.tokenStart;
  let t = !1;
  this.isDelim(42) ? (t = !0, this.next()) : this.isDelim(124) || this.eat(oE.Ident);
  this.isDelim(124) ? 61 !== this.charCodeAt(this.tokenStart + 1) ? (this.next(), this.eat(oE.Ident)) : t && this.error("Identifier is expected", this.tokenEnd) : t && this.error("Vertical line is expected");
  return {
    type: "Identifier",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function lK() {
  let e = this.tokenStart;
  let t = this.charCodeAt(e);
  61 !== t && 126 !== t && 94 !== t && 36 !== t && 42 !== t && 124 !== t && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
  this.next();
  61 !== t && (this.isDelim(61) || this.error("Equal sign is expected"), this.next());
  return this.substrToCursor(e);
}
lX.generate = function (e) {
  this.token(oE.Delim, "[");
  this.node(e.name);
  null !== e.matcher && (this.tokenize(e.matcher), this.node(e.value));
  null !== e.flags && this.token(oE.Ident, e.flags);
  this.token(oE.Delim, "]");
};
lX.name = "AttributeSelector";
lX.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = null;
  let n = null;
  let a = null;
  this.eat(oE.LeftSquareBracket);
  this.skipSC();
  e = lY.call(this);
  this.skipSC();
  this.tokenType !== oE.RightSquareBracket && (this.tokenType !== oE.Ident && (r = lK.call(this), this.skipSC(), n = this.tokenType === oE.String ? this.String() : this.Identifier(), this.skipSC()), this.tokenType === oE.Ident && (a = this.consume(oE.Ident), this.skipSC()));
  this.eat(oE.RightSquareBracket);
  return {
    type: "AttributeSelector",
    loc: this.getLocation(t, this.tokenStart),
    name: e,
    matcher: r,
    value: n,
    flags: a
  };
};
lX.structure = {
  name: "Identifier",
  matcher: [String, null],
  value: ["String", "Identifier", null],
  flags: [String, null]
};
var lQ = {};
function lZ(e) {
  return this.Raw(e, null, !0);
}
function lJ() {
  return this.parseWithFallback(this.Rule, lZ);
}
function l0(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
function l1() {
  if (this.tokenType === oE.Semicolon) return l0.call(this, this.tokenIndex);
  let e = this.parseWithFallback(this.Declaration, l0);
  this.tokenType === oE.Semicolon && this.next();
  return e;
}
lQ.generate = function (e) {
  this.token(oE.LeftCurlyBracket, "{");
  this.children(e, e => {
    "Declaration" === e.type && this.token(oE.Semicolon, ";");
  });
  this.token(oE.RightCurlyBracket, "}");
};
lQ.name = "Block";
lQ.parse = function (e) {
  let t = e ? l1 : lJ;
  let r = this.tokenStart;
  let n = this.createList();
  this.eat(oE.LeftCurlyBracket);
  t: for (; !this.eof;) switch (this.tokenType) {
    case oE.RightCurlyBracket:
      break t;
    case oE.WhiteSpace:
    case oE.Comment:
      this.next();
      break;
    case oE.AtKeyword:
      n.push(this.parseWithFallback(this.Atrule, lZ));
      break;
    default:
      n.push(t.call(this));
  }
  this.eof || this.eat(oE.RightCurlyBracket);
  return {
    type: "Block",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
};
lQ.structure = {
  children: [["Atrule", "Rule", "Declaration"]]
};
lQ.walkContext = "block";
var l2 = {};
l2.generate = function (e) {
  this.token(oE.Delim, "[");
  this.children(e);
  this.token(oE.Delim, "]");
};
l2.name = "Brackets";
l2.parse = function (e, t) {
  let r = this.tokenStart;
  let n = null;
  this.eat(oE.LeftSquareBracket);
  n = e.call(this, t);
  this.eof || this.eat(oE.RightSquareBracket);
  return {
    type: "Brackets",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
};
l2.structure = {
  children: [[]]
};
var l3 = {};
l3.generate = function () {
  this.token(oE.CDC, "--\x3e");
};
l3.name = "CDC";
l3.parse = function () {
  let e = this.tokenStart;
  this.eat(oE.CDC);
  return {
    type: "CDC",
    loc: this.getLocation(e, this.tokenStart)
  };
};
l3.structure = [];
var l4 = {};
l4.generate = function () {
  this.token(oE.CDO, "\x3c!--");
};
l4.name = "CDO";
l4.parse = function () {
  let e = this.tokenStart;
  this.eat(oE.CDO);
  return {
    type: "CDO",
    loc: this.getLocation(e, this.tokenStart)
  };
};
l4.structure = [];
var l5 = {};
l5.generate = function (e) {
  this.token(oE.Delim, ".");
  this.token(oE.Ident, e.name);
};
l5.name = "ClassSelector";
l5.parse = function () {
  this.eatDelim(46);
  return {
    type: "ClassSelector",
    loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
    name: this.consume(oE.Ident)
  };
};
l5.structure = {
  name: String
};
var l8 = {};
l8.generate = function (e) {
  this.tokenize(e.name);
};
l8.name = "Combinator";
l8.parse = function () {
  let e;
  let t = this.tokenStart;
  switch (this.tokenType) {
    case oE.WhiteSpace:
      e = " ";
      break;
    case oE.Delim:
      switch (this.charCodeAt(this.tokenStart)) {
        case 62:
        case 43:
        case 126:
          this.next();
          break;
        case 47:
          this.next();
          this.eatIdent("deep");
          this.eatDelim(47);
          break;
        default:
          this.error("Combinator is expected");
      }
      e = this.substrToCursor(t);
  }
  return {
    type: "Combinator",
    loc: this.getLocation(t, this.tokenStart),
    name: e
  };
};
l8.structure = {
  name: String
};
var l6 = {};
l6.generate = function (e) {
  this.token(oE.Comment, "/*" + e.value + "*/");
};
l6.name = "Comment";
l6.parse = function () {
  let e = this.tokenStart;
  let t = this.tokenEnd;
  this.eat(oE.Comment);
  t - e + 2 >= 2 && 42 === this.charCodeAt(t - 2) && 47 === this.charCodeAt(t - 1) && (t -= 2);
  return {
    type: "Comment",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substring(e + 2, t)
  };
};
l6.structure = {
  value: String
};
var l9 = {};
function l7(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
}
function ce(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
}
function ct() {
  let e = this.tokenIndex;
  let t = this.Value();
  "Raw" !== t.type && !1 === this.eof && this.tokenType !== oE.Semicolon && !1 === this.isDelim(33) && !1 === this.isBalanceEdge(e) && this.error();
  return t;
}
function cr() {
  let e = this.tokenStart;
  if (this.tokenType === oE.Delim) switch (this.charCodeAt(this.tokenStart)) {
    case 42:
    case 36:
    case 43:
    case 35:
    case 38:
      this.next();
      break;
    case 47:
      this.next();
      this.isDelim(47) && this.next();
  }
  this.tokenType === oE.Hash ? this.eat(oE.Hash) : this.eat(oE.Ident);
  return this.substrToCursor(e);
}
function cn() {
  this.eat(oE.Delim);
  this.skipSC();
  let e = this.consume(oE.Ident);
  return "important" === e || e;
}
l9.generate = function (e) {
  this.token(oE.Ident, e.property);
  this.token(oE.Colon, ":");
  this.node(e.value);
  e.important && (this.token(oE.Delim, "!"), this.token(oE.Ident, !0 === e.important ? "important" : e.important));
};
l9.name = "Declaration";
l9.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = this.tokenIndex;
  let n = cr.call(this);
  let a = sT.isCustomProperty(n);
  let i = a ? this.parseCustomProperty : this.parseValue;
  let o = a ? ce : l7;
  let s = !1;
  this.skipSC();
  this.eat(oE.Colon);
  let l = this.tokenIndex;
  if (a || this.skipSC(), e = i ? this.parseWithFallback(ct, o) : o.call(this, this.tokenIndex), a && "Value" === e.type && e.children.isEmpty) {
    for (let t = l - this.tokenIndex; t <= 0; t++) if (this.lookupType(t) === oE.WhiteSpace) {
      e.children.appendData({
        type: "WhiteSpace",
        loc: null,
        value: " "
      });
      break;
    }
  }
  this.isDelim(33) && (s = cn.call(this), this.skipSC());
  !1 === this.eof && this.tokenType !== oE.Semicolon && !1 === this.isBalanceEdge(r) && this.error();
  return {
    type: "Declaration",
    loc: this.getLocation(t, this.tokenStart),
    important: s,
    property: n,
    value: e
  };
};
l9.structure = {
  important: [Boolean, String],
  property: String,
  value: ["Value", "Raw"]
};
l9.walkContext = "declaration";
var ca = {};
function ci(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
ca.generate = function (e) {
  this.children(e, e => {
    "Declaration" === e.type && this.token(oE.Semicolon, ";");
  });
};
ca.name = "DeclarationList";
ca.parse = function () {
  let e = this.createList();
  for (; !this.eof;) switch (this.tokenType) {
    case oE.WhiteSpace:
    case oE.Comment:
    case oE.Semicolon:
      this.next();
      break;
    default:
      e.push(this.parseWithFallback(this.Declaration, ci));
  }
  return {
    type: "DeclarationList",
    loc: this.getLocationFromList(e),
    children: e
  };
};
ca.structure = {
  children: [["Declaration"]]
};
var co = {};
co.generate = function (e) {
  this.token(oE.Dimension, e.value + e.unit);
};
co.name = "Dimension";
co.parse = function () {
  let e = this.tokenStart;
  let t = this.consumeNumber(oE.Dimension);
  return {
    type: "Dimension",
    loc: this.getLocation(e, this.tokenStart),
    value: t,
    unit: this.substring(e + t.length, this.tokenStart)
  };
};
co.structure = {
  value: String,
  unit: String
};
var cs = {};
cs.generate = function (e) {
  this.token(oE.Function, e.name + "(");
  this.children(e);
  this.token(oE.RightParenthesis, ")");
};
cs.name = "Function";
cs.parse = function (e, t) {
  let r;
  let n = this.tokenStart;
  let a = this.consumeFunctionName();
  let i = a.toLowerCase();
  r = t.hasOwnProperty(i) ? t[i].call(this, t) : e.call(this, t);
  this.eof || this.eat(oE.RightParenthesis);
  return {
    type: "Function",
    loc: this.getLocation(n, this.tokenStart),
    name: a,
    children: r
  };
};
cs.structure = {
  name: String,
  children: [[]]
};
cs.walkContext = "function";
var cl = {};
cl.generate = function (e) {
  this.token(oE.Hash, "#" + e.value);
};
cl.name = "Hash";
cl.parse = function () {
  let e = this.tokenStart;
  this.eat(oE.Hash);
  return {
    type: "Hash",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e + 1)
  };
};
cl.structure = {
  value: String
};
cl.xxx = "XXX";
var cc = {};
cc.generate = function (e) {
  this.token(oE.Ident, e.name);
};
cc.name = "Identifier";
cc.parse = function () {
  return {
    type: "Identifier",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    name: this.consume(oE.Ident)
  };
};
cc.structure = {
  name: String
};
var cu = {};
cu.generate = function (e) {
  this.token(oE.Delim, "#" + e.name);
};
cu.name = "IdSelector";
cu.parse = function () {
  let e = this.tokenStart;
  this.eat(oE.Hash);
  return {
    type: "IdSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e + 1)
  };
};
cu.structure = {
  name: String
};
var cd = {};
cd.generate = function (e) {
  this.token(oE.LeftParenthesis, "(");
  this.token(oE.Ident, e.name);
  null !== e.value && (this.token(oE.Colon, ":"), this.node(e.value));
  this.token(oE.RightParenthesis, ")");
};
cd.name = "MediaFeature";
cd.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = null;
  if (this.eat(oE.LeftParenthesis), this.skipSC(), e = this.consume(oE.Ident), this.skipSC(), this.tokenType !== oE.RightParenthesis) {
    switch (this.eat(oE.Colon), this.skipSC(), this.tokenType) {
      case oE.Number:
        r = this.lookupNonWSType(1) === oE.Delim ? this.Ratio() : this.Number();
        break;
      case oE.Dimension:
        r = this.Dimension();
        break;
      case oE.Ident:
        r = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
    this.skipSC();
  }
  this.eat(oE.RightParenthesis);
  return {
    type: "MediaFeature",
    loc: this.getLocation(t, this.tokenStart),
    name: e,
    value: r
  };
};
cd.structure = {
  name: String,
  value: ["Identifier", "Number", "Dimension", "Ratio", null]
};
var ch = {};
ch.generate = function (e) {
  this.children(e);
};
ch.name = "MediaQuery";
ch.parse = function () {
  let e = this.createList();
  let t = null;
  this.skipSC();
  t: for (; !this.eof;) {
    switch (this.tokenType) {
      case oE.Comment:
      case oE.WhiteSpace:
        this.next();
        continue;
      case oE.Ident:
        t = this.Identifier();
        break;
      case oE.LeftParenthesis:
        t = this.MediaFeature();
        break;
      default:
        break t;
    }
    e.push(t);
  }
  null === t && this.error("Identifier or parenthesis is expected");
  return {
    type: "MediaQuery",
    loc: this.getLocationFromList(e),
    children: e
  };
};
ch.structure = {
  children: [["Identifier", "MediaFeature", "WhiteSpace"]]
};
var cp = {};
cp.generate = function (e) {
  this.children(e, () => this.token(oE.Comma, ","));
};
cp.name = "MediaQueryList";
cp.parse = function () {
  let e = this.createList();
  for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === oE.Comma);) this.next();
  return {
    type: "MediaQueryList",
    loc: this.getLocationFromList(e),
    children: e
  };
};
cp.structure = {
  children: [["MediaQuery"]]
};
var cm = {};
cm.generate = function (e) {
  this.node(e.nth);
  null !== e.selector && (this.token(oE.Ident, "of"), this.node(e.selector));
};
cm.name = "Nth";
cm.parse = function () {
  let e;
  this.skipSC();
  let t = this.tokenStart;
  let r = t;
  let n = null;
  e = this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? this.Identifier() : this.AnPlusB();
  r = this.tokenStart;
  this.skipSC();
  this.lookupValue(0, "of") && (this.next(), n = this.SelectorList(), r = this.tokenStart);
  return {
    type: "Nth",
    loc: this.getLocation(t, r),
    nth: e,
    selector: n
  };
};
cm.structure = {
  nth: ["AnPlusB", "Identifier"],
  selector: ["SelectorList", null]
};
var cf = {};
cf.generate = function (e) {
  this.token(oE.Number, e.value);
};
cf.name = "Number";
cf.parse = function () {
  return {
    type: "Number",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consume(oE.Number)
  };
};
cf.structure = {
  value: String
};
var cg = {};
cg.generate = function (e) {
  this.tokenize(e.value);
};
cg.name = "Operator";
cg.parse = function () {
  let e = this.tokenStart;
  this.next();
  return {
    type: "Operator",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
};
cg.structure = {
  value: String
};
var cb = {};
cb.generate = function (e) {
  this.token(oE.LeftParenthesis, "(");
  this.children(e);
  this.token(oE.RightParenthesis, ")");
};
cb.name = "Parentheses";
cb.parse = function (e, t) {
  let r = this.tokenStart;
  let n = null;
  this.eat(oE.LeftParenthesis);
  n = e.call(this, t);
  this.eof || this.eat(oE.RightParenthesis);
  return {
    type: "Parentheses",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
};
cb.structure = {
  children: [[]]
};
var cy = {};
cy.generate = function (e) {
  this.token(oE.Percentage, e.value + "%");
};
cy.name = "Percentage";
cy.parse = function () {
  return {
    type: "Percentage",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consumeNumber(oE.Percentage)
  };
};
cy.structure = {
  value: String
};
var ck = {};
ck.generate = function (e) {
  this.token(oE.Colon, ":");
  null === e.children ? this.token(oE.Ident, e.name) : (this.token(oE.Function, e.name + "("), this.children(e), this.token(oE.RightParenthesis, ")"));
};
ck.name = "PseudoClassSelector";
ck.parse = function () {
  let e;
  let t;
  let r = this.tokenStart;
  let n = null;
  this.eat(oE.Colon);
  this.tokenType === oE.Function ? (t = (e = this.consumeFunctionName()).toLowerCase(), hasOwnProperty.call(this.pseudo, t) ? (this.skipSC(), n = this.pseudo[t].call(this), this.skipSC()) : (n = this.createList()).push(this.Raw(this.tokenIndex, null, !1)), this.eat(oE.RightParenthesis)) : e = this.consume(oE.Ident);
  return {
    type: "PseudoClassSelector",
    loc: this.getLocation(r, this.tokenStart),
    name: e,
    children: n
  };
};
ck.structure = {
  name: String,
  children: [["Raw"], null]
};
ck.walkContext = "function";
var cv = {};
cv.generate = function (e) {
  this.token(oE.Colon, ":");
  this.token(oE.Colon, ":");
  null === e.children ? this.token(oE.Ident, e.name) : (this.token(oE.Function, e.name + "("), this.children(e), this.token(oE.RightParenthesis, ")"));
};
cv.name = "PseudoElementSelector";
cv.parse = function () {
  let e;
  let t;
  let r = this.tokenStart;
  let n = null;
  this.eat(oE.Colon);
  this.eat(oE.Colon);
  this.tokenType === oE.Function ? (t = (e = this.consumeFunctionName()).toLowerCase(), hasOwnProperty.call(this.pseudo, t) ? (this.skipSC(), n = this.pseudo[t].call(this), this.skipSC()) : (n = this.createList()).push(this.Raw(this.tokenIndex, null, !1)), this.eat(oE.RightParenthesis)) : e = this.consume(oE.Ident);
  return {
    type: "PseudoElementSelector",
    loc: this.getLocation(r, this.tokenStart),
    name: e,
    children: n
  };
};
cv.structure = {
  name: String,
  children: [["Raw"], null]
};
cv.walkContext = "function";
var cw = {};
function cx() {
  this.skipSC();
  let e = this.consume(oE.Number);
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    oP.isDigit(r) || 46 === r || this.error("Unsigned number is expected", this.tokenStart - e.length + t);
  }
  0 === Number(e) && this.error("Zero number is not allowed", this.tokenStart - e.length);
  return e;
}
cw.generate = function (e) {
  this.token(oE.Number, e.left);
  this.token(oE.Delim, "/");
  this.token(oE.Number, e.right);
};
cw.name = "Ratio";
cw.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = cx.call(this);
  this.skipSC();
  this.eatDelim(47);
  e = cx.call(this);
  return {
    type: "Ratio",
    loc: this.getLocation(t, this.tokenStart),
    left: r,
    right: e
  };
};
cw.structure = {
  left: String,
  right: String
};
var cS = {};
function cC() {
  return this.tokenIndex > 0 && this.lookupType(-1) === oE.WhiteSpace ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
}
cS.generate = function (e) {
  this.tokenize(e.value);
};
cS.name = "Raw";
cS.parse = function (e, t, r) {
  let n;
  let a = this.getTokenStart(e);
  this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd);
  n = r && this.tokenStart > a ? cC.call(this) : this.tokenStart;
  return {
    type: "Raw",
    loc: this.getLocation(a, n),
    value: this.substring(a, n)
  };
};
cS.structure = {
  value: String
};
var cA = {};
function cT(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
}
function cE() {
  let e = this.SelectorList();
  "Raw" !== e.type && !1 === this.eof && this.tokenType !== oE.LeftCurlyBracket && this.error();
  return e;
}
cA.generate = function (e) {
  this.node(e.prelude);
  this.node(e.block);
};
cA.name = "Rule";
cA.parse = function () {
  let e;
  let t;
  let r = this.tokenIndex;
  let n = this.tokenStart;
  e = this.parseRulePrelude ? this.parseWithFallback(cE, cT) : cT.call(this, r);
  t = this.Block(!0);
  return {
    type: "Rule",
    loc: this.getLocation(n, this.tokenStart),
    prelude: e,
    block: t
  };
};
cA.structure = {
  prelude: ["SelectorList", "Raw"],
  block: ["Block"]
};
cA.walkContext = "rule";
var cP = {};
cP.generate = function (e) {
  this.children(e);
};
cP.name = "Selector";
cP.parse = function () {
  let e = this.readSequence(this.scope.Selector);
  null === this.getFirstListNode(e) && this.error("Selector is expected");
  return {
    type: "Selector",
    loc: this.getLocationFromList(e),
    children: e
  };
};
cP.structure = {
  children: [["TypeSelector", "IdSelector", "ClassSelector", "AttributeSelector", "PseudoClassSelector", "PseudoElementSelector", "Combinator", "WhiteSpace"]]
};
var cL = {};
cL.generate = function (e) {
  this.children(e, () => this.token(oE.Comma, ","));
};
cL.name = "SelectorList";
cL.parse = function () {
  let e = this.createList();
  for (; !this.eof;) {
    if (e.push(this.Selector()), this.tokenType === oE.Comma) {
      this.next();
      continue;
    }
    break;
  }
  return {
    type: "SelectorList",
    loc: this.getLocationFromList(e),
    children: e
  };
};
cL.structure = {
  children: [["Selector", "Raw"]]
};
cL.walkContext = "selector";
var cD = {};
var cN = {};
cN.decode = function (e) {
  let t = e.length;
  let r = e.charCodeAt(0);
  let n = 34 === r || 39 === r ? 1 : 0;
  let a = 1 === n && t > 1 && e.charCodeAt(t - 1) === r ? t - 2 : t - 1;
  let i = "";
  for (let r = n; r <= a; r++) {
    let n = e.charCodeAt(r);
    if (92 === n) {
      if (r === a) {
        r !== t - 1 && (i = e.substr(r + 1));
        break;
      }
      if (n = e.charCodeAt(++r), oP.isValidEscape(92, n)) {
        let t = r - 1;
        let n = oF.consumeEscaped(e, t);
        r = n - 1;
        i += oF.decodeEscaped(e.substring(t + 1, n));
      } else 13 === n && 10 === e.charCodeAt(r + 1) && r++;
    } else i += e[r];
  }
  return i;
};
cN.encode = function (e, t) {
  let r = t ? "'" : '"';
  let n = t ? 39 : 34;
  let a = "";
  let i = !1;
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (0 === r) {
      a += "\uFFFD";
      continue;
    }
    if (r <= 31 || 127 === r) {
      a += "\\" + r.toString(16);
      i = !0;
      continue;
    }
    r === n || 92 === r ? a += "\\" + e.charAt(t) : (i && (oP.isHexDigit(r) || oP.isWhiteSpace(r)) && (a += " "), a += e.charAt(t));
    i = !1;
  }
  return r + a + r;
};
cD.generate = function (e) {
  this.token(oE.String, cN.encode(e.value));
};
cD.name = "String";
cD.parse = function () {
  return {
    type: "String",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: cN.decode(this.consume(oE.String))
  };
};
cD.structure = {
  value: String
};
var cO = {};
function cM(e) {
  return this.Raw(e, null, !1);
}
cO.generate = function (e) {
  this.children(e);
};
cO.name = "StyleSheet";
cO.parse = function () {
  let e;
  let t = this.tokenStart;
  let r = this.createList();
  for (; !this.eof;) {
    switch (this.tokenType) {
      case oE.WhiteSpace:
        this.next();
        continue;
      case oE.Comment:
        if (33 !== this.charCodeAt(this.tokenStart + 2)) {
          this.next();
          continue;
        }
        e = this.Comment();
        break;
      case oE.CDO:
        e = this.CDO();
        break;
      case oE.CDC:
        e = this.CDC();
        break;
      case oE.AtKeyword:
        e = this.parseWithFallback(this.Atrule, cM);
        break;
      default:
        e = this.parseWithFallback(this.Rule, cM);
    }
    r.push(e);
  }
  return {
    type: "StyleSheet",
    loc: this.getLocation(t, this.tokenStart),
    children: r
  };
};
cO.structure = {
  children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]]
};
cO.walkContext = "stylesheet";
var cz = {};
function cI() {
  this.tokenType !== oE.Ident && !1 === this.isDelim(42) && this.error("Identifier or asterisk is expected");
  this.next();
}
cz.generate = function (e) {
  this.tokenize(e.name);
};
cz.name = "TypeSelector";
cz.parse = function () {
  let e = this.tokenStart;
  this.isDelim(124) ? (this.next(), cI.call(this)) : (cI.call(this), this.isDelim(124) && (this.next(), cI.call(this)));
  return {
    type: "TypeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
};
cz.structure = {
  name: String
};
var cR = {};
function cq(e, t) {
  let r = 0;
  for (let n = this.tokenStart + e; n < this.tokenEnd; n++) {
    let a = this.charCodeAt(n);
    if (45 === a && t && 0 !== r) {
      cq.call(this, e + r + 1, !1);
      return -1;
    }
    oP.isHexDigit(a) || this.error(t && 0 !== r ? "Hyphen minus" + (r < 6 ? " or hex digit" : "") + " is expected" : r < 6 ? "Hex digit is expected" : "Unexpected input", n);
    ++r > 6 && this.error("Too many hex digits", n);
  }
  this.next();
  return r;
}
function cB(e) {
  let t = 0;
  for (; this.isDelim(63);) {
    ++t > e && this.error("Too many question marks");
    this.next();
  }
}
function cj(e) {
  this.charCodeAt(this.tokenStart) !== e && this.error((43 === e ? "Plus sign" : "Hyphen minus") + " is expected");
}
function cF() {
  let e = 0;
  switch (this.tokenType) {
    case oE.Number:
      if (e = cq.call(this, 1, !0), this.isDelim(63)) {
        cB.call(this, 6 - e);
        break;
      }
      (this.tokenType === oE.Dimension || this.tokenType === oE.Number) && (cj.call(this, 45), cq.call(this, 1, !1));
      break;
    case oE.Dimension:
      (e = cq.call(this, 1, !0)) > 0 && cB.call(this, 6 - e);
      break;
    default:
      if (this.eatDelim(43), this.tokenType === oE.Ident) {
        (e = cq.call(this, 0, !0)) > 0 && cB.call(this, 6 - e);
        break;
      }
      if (this.isDelim(63)) {
        this.next();
        cB.call(this, 5);
        break;
      }
      this.error("Hex digit or question mark is expected");
  }
}
cR.generate = function (e) {
  this.tokenize(e.value);
};
cR.name = "UnicodeRange";
cR.parse = function () {
  let e = this.tokenStart;
  this.eatIdent("u");
  cF.call(this);
  return {
    type: "UnicodeRange",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
};
cR.structure = {
  value: String
};
var c_ = {};
var cU = {};
cU.decode = function (e) {
  let t = e.length;
  let r = 4;
  let n = 41 === e.charCodeAt(t - 1) ? t - 2 : t - 1;
  let a = "";
  for (; r < n && oP.isWhiteSpace(e.charCodeAt(r));) r++;
  for (; r < n && oP.isWhiteSpace(e.charCodeAt(n));) n--;
  for (let i = r; i <= n; i++) {
    let r = e.charCodeAt(i);
    if (92 === r) {
      if (i === n) {
        i !== t - 1 && (a = e.substr(i + 1));
        break;
      }
      if (r = e.charCodeAt(++i), oP.isValidEscape(92, r)) {
        let t = i - 1;
        let r = oF.consumeEscaped(e, t);
        i = r - 1;
        a += oF.decodeEscaped(e.substring(t + 1, r));
      } else 13 === r && 10 === e.charCodeAt(i + 1) && i++;
    } else a += e[i];
  }
  return a;
};
cU.encode = function (e) {
  let t = "";
  let r = !1;
  for (let n = 0; n < e.length; n++) {
    let a = e.charCodeAt(n);
    if (0 === a) {
      t += "\uFFFD";
      continue;
    }
    if (a <= 31 || 127 === a) {
      t += "\\" + a.toString(16);
      r = !0;
      continue;
    }
    32 === a || 92 === a || 34 === a || 39 === a || 40 === a || 41 === a ? t += "\\" + e.charAt(n) : (r && oP.isHexDigit(a) && (t += " "), t += e.charAt(n));
    r = !1;
  }
  return "url(" + t + ")";
};
c_.generate = function (e) {
  this.token(oE.Url, cU.encode(e.value));
};
c_.name = "Url";
c_.parse = function () {
  let e;
  let t = this.tokenStart;
  switch (this.tokenType) {
    case oE.Url:
      e = cU.decode(this.consume(oE.Url));
      break;
    case oE.Function:
      this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`");
      this.eat(oE.Function);
      this.skipSC();
      e = cN.decode(this.consume(oE.String));
      this.skipSC();
      this.eof || this.eat(oE.RightParenthesis);
      break;
    default:
      this.error("Url or Function is expected");
  }
  return {
    type: "Url",
    loc: this.getLocation(t, this.tokenStart),
    value: e
  };
};
c_.structure = {
  value: String
};
var cG = {};
cG.generate = function (e) {
  this.children(e);
};
cG.name = "Value";
cG.parse = function () {
  let e = this.tokenStart;
  let t = this.readSequence(this.scope.Value);
  return {
    type: "Value",
    loc: this.getLocation(e, this.tokenStart),
    children: t
  };
};
cG.structure = {
  children: [[]]
};
var cH = {};
let cW = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
});
cH.generate = function (e) {
  this.token(oE.WhiteSpace, e.value);
};
cH.name = "WhiteSpace";
cH.parse = function () {
  this.eat(oE.WhiteSpace);
  return cW;
};
cH.structure = {
  value: String
};
lB.AnPlusB = lj;
lB.Atrule = lH;
lB.AtrulePrelude = l$;
lB.AttributeSelector = lX;
lB.Block = lQ;
lB.Brackets = l2;
lB.CDC = l3;
lB.CDO = l4;
lB.ClassSelector = l5;
lB.Combinator = l8;
lB.Comment = l6;
lB.Declaration = l9;
lB.DeclarationList = ca;
lB.Dimension = co;
lB.Function = cs;
lB.Hash = cl;
lB.Identifier = cc;
lB.IdSelector = cu;
lB.MediaFeature = cd;
lB.MediaQuery = ch;
lB.MediaQueryList = cp;
lB.Nth = cm;
lB.Number = cf;
lB.Operator = cg;
lB.Parentheses = cb;
lB.Percentage = cy;
lB.PseudoClassSelector = ck;
lB.PseudoElementSelector = cv;
lB.Ratio = cw;
lB.Raw = cS;
lB.Rule = cA;
lB.Selector = cP;
lB.SelectorList = cL;
lB.String = cD;
lB.StyleSheet = cO;
lB.TypeSelector = cz;
lB.UnicodeRange = cR;
lB.Url = c_;
lB.Value = cG;
lB.WhiteSpace = cH;
var cV = {};
var c$ = function (e) {
  switch (this.tokenType) {
    case oE.Hash:
      return this.Hash();
    case oE.Comma:
      return this.Operator();
    case oE.LeftParenthesis:
      return this.Parentheses(this.readSequence, e.recognizer);
    case oE.LeftSquareBracket:
      return this.Brackets(this.readSequence, e.recognizer);
    case oE.String:
      return this.String();
    case oE.Dimension:
      return this.Dimension();
    case oE.Percentage:
      return this.Percentage();
    case oE.Number:
      return this.Number();
    case oE.Function:
      return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case oE.Url:
      return this.Url();
    case oE.Ident:
      if (this.cmpChar(this.tokenStart, 117) && this.cmpChar(this.tokenStart + 1, 43)) return this.UnicodeRange();
      return this.Identifier();
    case oE.Delim:
      {
        let e = this.charCodeAt(this.tokenStart);
        if (47 === e || 42 === e || 43 === e || 45 === e) return this.Operator();
        35 === e && this.error("Hex or identifier is expected", this.tokenStart + 1);
      }
  }
};
function cX(e) {
  return null !== e && "Operator" === e.type && ("-" === e.value[e.value.length - 1] || "+" === e.value[e.value.length - 1]);
}
function cY() {
  return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
}
function cK() {
  return (this.skipSC(), this.tokenType === oE.Ident && this.lookupNonWSType(1) === oE.Colon) ? this.createSingleNodeList(this.Declaration()) : cQ.call(this);
}
function cQ() {
  let e;
  let t = this.createList();
  this.skipSC();
  t: for (; !this.eof;) {
    switch (this.tokenType) {
      case oE.Comment:
      case oE.WhiteSpace:
        this.next();
        continue;
      case oE.Function:
        e = this.Function(cY, this.scope.AtrulePrelude);
        break;
      case oE.Ident:
        e = this.Identifier();
        break;
      case oE.LeftParenthesis:
        e = this.Parentheses(cK, this.scope.AtrulePrelude);
        break;
      default:
        break t;
    }
    t.push(e);
  }
  return t;
}
cV.AtrulePrelude = {
  getNode: c$
};
cV.Selector = {
  onWhiteSpace: function (e, t) {
    null !== t.last && "Combinator" !== t.last.type && null !== e && "Combinator" !== e.type && t.push({
      type: "Combinator",
      loc: null,
      name: " "
    });
  },
  getNode: function () {
    switch (this.tokenType) {
      case oE.LeftSquareBracket:
        return this.AttributeSelector();
      case oE.Hash:
        return this.IdSelector();
      case oE.Colon:
        if (this.lookupType(1) === oE.Colon) return this.PseudoElementSelector();
        return this.PseudoClassSelector();
      case oE.Ident:
        return this.TypeSelector();
      case oE.Number:
      case oE.Percentage:
        return this.Percentage();
      case oE.Dimension:
        46 === this.charCodeAt(this.tokenStart) && this.error("Identifier is expected", this.tokenStart + 1);
        break;
      case oE.Delim:
        switch (this.charCodeAt(this.tokenStart)) {
          case 43:
          case 62:
          case 126:
          case 47:
            return this.Combinator();
          case 46:
            return this.ClassSelector();
          case 42:
          case 124:
            return this.TypeSelector();
          case 35:
            return this.IdSelector();
        }
    }
  }
};
cV.Value = {
  getNode: c$,
  onWhiteSpace(e, t) {
    cX(e) && (e.value = " " + e.value);
    cX(t.last) && (t.last.value += " ");
  },
  expression: function () {
    return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
  },
  var: function () {
    let e = this.createList();
    if (this.skipSC(), e.push(this.Identifier()), this.skipSC(), this.tokenType === oE.Comma) {
      e.push(this.Operator());
      let t = this.tokenIndex;
      let r = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
      if ("Value" === r.type && r.children.isEmpty) {
        for (let e = t - this.tokenIndex; e <= 0; e++) if (this.lookupType(e) === oE.WhiteSpace) {
          r.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
      }
      e.push(r);
    }
    return e;
  }
};
let cZ = {
  parse() {
    return this.createSingleNodeList(this.SelectorList());
  }
};
let cJ = {
  parse() {
    return this.createSingleNodeList(this.Identifier());
  }
};
let c0 = {
  parse() {
    return this.createSingleNodeList(this.Nth());
  }
};
var c1 = {};
c1.AnPlusB = lj.parse;
c1.Atrule = lH.parse;
c1.AtrulePrelude = l$.parse;
c1.AttributeSelector = lX.parse;
c1.Block = lQ.parse;
c1.Brackets = l2.parse;
c1.CDC = l3.parse;
c1.CDO = l4.parse;
c1.ClassSelector = l5.parse;
c1.Combinator = l8.parse;
c1.Comment = l6.parse;
c1.Declaration = l9.parse;
c1.DeclarationList = ca.parse;
c1.Dimension = co.parse;
c1.Function = cs.parse;
c1.Hash = cl.parse;
c1.Identifier = cc.parse;
c1.IdSelector = cu.parse;
c1.MediaFeature = cd.parse;
c1.MediaQuery = ch.parse;
c1.MediaQueryList = cp.parse;
c1.Nth = cm.parse;
c1.Number = cf.parse;
c1.Operator = cg.parse;
c1.Parentheses = cb.parse;
c1.Percentage = cy.parse;
c1.PseudoClassSelector = ck.parse;
c1.PseudoElementSelector = cv.parse;
c1.Ratio = cw.parse;
c1.Raw = cS.parse;
c1.Rule = cA.parse;
c1.Selector = cP.parse;
c1.SelectorList = cL.parse;
c1.String = cD.parse;
c1.StyleSheet = cO.parse;
c1.TypeSelector = cz.parse;
c1.UnicodeRange = cR.parse;
c1.Url = c_.parse;
c1.Value = cG.parse;
c1.WhiteSpace = cH.parse;
let c2 = lq({
  generic: !0,
  generic: !0,
  types: {
    "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
    "alpha-value": "<number>|<percentage>",
    "angle-percentage": "<angle>|<percentage>",
    "angular-color-hint": "<angle-percentage>",
    "angular-color-stop": "<color>&&<color-stop-angle>?",
    "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
    "animateable-feature": "scroll-position|contents|<custom-ident>",
    attachment: "scroll|fixed|local",
    "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
    "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
    "attr-modifier": "i|s",
    "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
    "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
    "baseline-position": "[first|last]? baseline",
    "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
    "bg-image": "none|<image>",
    "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
    "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
    "blur()": "blur( <length> )",
    "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
    box: "border-box|padding-box|content-box",
    "brightness()": "brightness( <number-percentage> )",
    "calc()": "calc( <calc-sum> )",
    "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
    "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
    "calc-value": "<number>|<dimension>|<percentage>|( <calc-sum> )",
    "cf-final-image": "<image>|<color>",
    "cf-mixing-image": "<percentage>?&&<image>",
    "circle()": "circle( [<shape-radius>]? [at <position>]? )",
    "clamp()": "clamp( <calc-sum>#{3} )",
    "class-selector": "'.' <ident-token>",
    "clip-source": "<url>",
    color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
    "color-stop": "<color-stop-length>|<color-stop-angle>",
    "color-stop-angle": "<angle-percentage>{1,2}",
    "color-stop-length": "<length-percentage>{1,2}",
    "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
    combinator: "'>'|'+'|'~'|['||']",
    "common-lig-values": "[common-ligatures|no-common-ligatures]",
    "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
    "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
    "compositing-operator": "add|subtract|intersect|exclude",
    "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
    "compound-selector-list": "<compound-selector>#",
    "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
    "complex-selector-list": "<complex-selector>#",
    "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "contextual-alt-values": "[contextual|no-contextual]",
    "content-distribution": "space-between|space-around|space-evenly|stretch",
    "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
    "content-position": "center|start|end|flex-start|flex-end",
    "content-replacement": "<image>",
    "contrast()": "contrast( [<number-percentage>] )",
    counter: "<counter()>|<counters()>",
    "counter()": "counter( <counter-name> , <counter-style>? )",
    "counter-name": "<custom-ident>",
    "counter-style": "<counter-style-name>|symbols( )",
    "counter-style-name": "<custom-ident>",
    "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
    "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
    "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
    "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
    "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
    "display-box": "contents|none",
    "display-inside": "flow|flow-root|table|flex|grid|ruby",
    "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
    "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
    "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
    "display-outside": "block|inline|run-in",
    "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
    "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
    "east-asian-width-values": "[full-width|proportional-width]",
    "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
    "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
    "ending-shape": "circle|ellipse",
    "env()": "env( <custom-ident> , <declaration-value>? )",
    "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
    "family-name": "<string>|<custom-ident>+",
    "feature-tag-value": "<string> [<integer>|on|off]?",
    "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
    "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
    "feature-value-block-list": "<feature-value-block>+",
    "feature-value-declaration": "<custom-ident> : <integer>+ ;",
    "feature-value-declaration-list": "<feature-value-declaration>",
    "feature-value-name": "<custom-ident>",
    "fill-rule": "nonzero|evenodd",
    "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
    "filter-function-list": "[<filter-function>|<url>]+",
    "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "fit-content()": "fit-content( [<length>|<percentage>] )",
    "fixed-breadth": "<length-percentage>",
    "fixed-repeat": "repeat( [<integer [1,\u221E]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
    "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
    "font-variant-css21": "[normal|small-caps]",
    "font-weight-absolute": "normal|bold|<number [1,1000]>",
    "frequency-percentage": "<frequency>|<percentage>",
    "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
    "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
    "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
    "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
    gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
    "grayscale()": "grayscale( <number-percentage> )",
    "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
    "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
    "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    hue: "<number>|<angle>",
    "hue-rotate()": "hue-rotate( <angle> )",
    "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
    image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
    "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
    "image-set()": "image-set( <image-set-option># )",
    "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
    "image-src": "<url>|<string>",
    "image-tags": "ltr|rtl",
    "inflexible-breadth": "<length>|<percentage>|min-content|max-content|auto",
    "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
    "invert()": "invert( <number-percentage> )",
    "keyframes-name": "<custom-ident>|<string>",
    "keyframe-block": "<keyframe-selector># { <declaration-list> }",
    "keyframe-block-list": "<keyframe-block>+",
    "keyframe-selector": "from|to|<percentage>",
    "layer()": "layer( <layer-name> )",
    "layer-name": "<ident> ['.' <ident>]*",
    "leader()": "leader( <leader-type> )",
    "leader-type": "dotted|solid|space|<string>",
    "length-percentage": "<length>|<percentage>",
    "line-names": "'[' <custom-ident>* ']'",
    "line-name-list": "[<line-names>|<name-repeat>]+",
    "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
    "line-width": "<length>|thin|medium|thick",
    "linear-color-hint": "<length-percentage>",
    "linear-color-stop": "<color> <color-stop-length>?",
    "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
    "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
    "mask-reference": "none|<image>|<mask-source>",
    "mask-source": "<url>",
    "masking-mode": "alpha|luminance|match-source",
    "matrix()": "matrix( <number>#{6} )",
    "matrix3d()": "matrix3d( <number>#{16} )",
    "max()": "max( <calc-sum># )",
    "media-and": "<media-in-parens> [and <media-in-parens>]+",
    "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
    "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
    "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
    "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
    "media-not": "not <media-in-parens>",
    "media-or": "<media-in-parens> [or <media-in-parens>]+",
    "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
    "media-query-list": "<media-query>#",
    "media-type": "<ident>",
    "mf-boolean": "<mf-name>",
    "mf-name": "<ident>",
    "mf-plain": "<mf-name> : <mf-value>",
    "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
    "mf-value": "<number>|<dimension>|<ident>|<ratio>",
    "min()": "min( <calc-sum># )",
    "minmax()": "minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )",
    "name-repeat": "repeat( [<integer [1,\u221E]>|auto-fill] , <line-names>+ )",
    "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
    "namespace-prefix": "<ident>",
    "ns-prefix": "[<ident-token>|'*']? '|'",
    "number-percentage": "<number>|<percentage>",
    "numeric-figure-values": "[lining-nums|oldstyle-nums]",
    "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
    "numeric-spacing-values": "[proportional-nums|tabular-nums]",
    nth: "<an-plus-b>|even|odd",
    "opacity()": "opacity( [<number-percentage>] )",
    "overflow-position": "unsafe|safe",
    "outline-radius": "<length>|<percentage>",
    "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
    "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
    "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
    "page-selector-list": "[<page-selector>#]?",
    "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
    "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
    "path()": "path( [<fill-rule> ,]? <string> )",
    "paint()": "paint( <ident> , <declaration-value>? )",
    "perspective()": "perspective( <length> )",
    "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
    position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
    "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
    "pseudo-element-selector": "':' <pseudo-class-selector>",
    "pseudo-page": ": [left|right|first|blank]",
    quote: "open-quote|close-quote|no-open-quote|no-close-quote",
    "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "relative-selector": "<combinator>? <complex-selector>",
    "relative-selector-list": "<relative-selector>#",
    "relative-size": "larger|smaller",
    "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
    "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
    "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
    "rotate()": "rotate( [<angle>|<zero>] )",
    "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
    "rotateX()": "rotateX( [<angle>|<zero>] )",
    "rotateY()": "rotateY( [<angle>|<zero>] )",
    "rotateZ()": "rotateZ( [<angle>|<zero>] )",
    "saturate()": "saturate( <number-percentage> )",
    "scale()": "scale( <number> , <number>? )",
    "scale3d()": "scale3d( <number> , <number> , <number> )",
    "scaleX()": "scaleX( <number> )",
    "scaleY()": "scaleY( <number> )",
    "scaleZ()": "scaleZ( <number> )",
    "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
    "shape-radius": "<length-percentage>|closest-side|farthest-side",
    "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
    "skewX()": "skewX( [<angle>|<zero>] )",
    "skewY()": "skewY( [<angle>|<zero>] )",
    "sepia()": "sepia( <number-percentage> )",
    shadow: "inset?&&<length>{2,4}&&<color>?",
    "shadow-t": "[<length>{2,3}&&<color>?]",
    shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
    "shape-box": "<box>|margin-box",
    "side-or-corner": "[left|right]||[top|bottom]",
    "single-animation": "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
    "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
    "single-animation-fill-mode": "none|forwards|backwards|both",
    "single-animation-iteration-count": "infinite|<number>",
    "single-animation-play-state": "running|paused",
    "single-animation-timeline": "auto|none|<timeline-name>",
    "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
    "single-transition-property": "all|<custom-ident>",
    size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
    "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
    "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
    "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
    "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
    "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
    "supports-feature": "<supports-decl>|<supports-selector-fn>",
    "supports-decl": "( <declaration> )",
    "supports-selector-fn": "selector( <complex-selector> )",
    symbol: "<string>|<image>|<custom-ident>",
    target: "<target-counter()>|<target-counters()>|<target-text()>",
    "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
    "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
    "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
    "time-percentage": "<time>|<percentage>",
    "timeline-name": "<custom-ident>|<string>",
    "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
    "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
    "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
    "track-repeat": "repeat( [<integer [1,\u221E]>] , [<line-names>? <track-size>]+ <line-names>? )",
    "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )",
    "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
    "transform-list": "<transform-function>+",
    "translate()": "translate( <length-percentage> , <length-percentage>? )",
    "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
    "translateX()": "translateX( <length-percentage> )",
    "translateY()": "translateY( <length-percentage> )",
    "translateZ()": "translateZ( <length> )",
    "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
    "type-selector": "<wq-name>|<ns-prefix>? '*'",
    "var()": "var( <custom-property-name> , <declaration-value>? )",
    "viewport-length": "auto|<length-percentage>",
    "visual-box": "content-box|padding-box|border-box",
    "wq-name": "<ns-prefix>? <ident-token>",
    "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
    "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
    "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
    "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
    "-legacy-radial-gradient-shape": "circle|ellipse",
    "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
    "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
    "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
    "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
    "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
    "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
    "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
    "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
    "-webkit-gradient-radius": "<length>|<percentage>",
    "-webkit-gradient-type": "linear|radial",
    "-webkit-mask-box-repeat": "repeat|stretch|round",
    "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
    "-ms-filter-function-list": "<-ms-filter-function>+",
    "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
    "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
    "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
    "-ms-filter": "<string>",
    age: "child|young|old",
    "attr-name": "<wq-name>",
    "attr-fallback": "<any-value>",
    "bg-clip": "<box>|border|text",
    "border-radius": "<length-percentage>{1,2}",
    bottom: "<length>|auto",
    "generic-voice": "[<age>? <gender> <integer>?]",
    gender: "male|female|neutral",
    "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
    "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
    left: "<length>|auto",
    "mask-image": "<mask-reference>#",
    paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
    ratio: "<number [0,\u221E]> [/ <number [0,\u221E]>]?",
    "reversed-counter-name": "reversed( <counter-name> )",
    right: "<length>|auto",
    "svg-length": "<percentage>|<length>|<number>",
    "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
    top: "<length>|auto",
    "track-group": "'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>",
    "track-list-v0": "[<string>* <track-group> <string>*]+|none",
    "track-minmax": "minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content",
    x: "<number>",
    y: "<number>",
    declaration: "<ident-token> : <declaration-value>? ['!' important]?",
    "declaration-list": "[<declaration>? ';']* <declaration>?",
    url: "url( <string> <url-modifier>* )|<url-token>",
    "url-modifier": "<ident>|<function-token> <any-value> )",
    "number-zero-one": "<number [0,1]>",
    "number-one-or-greater": "<number [1,\u221E]>",
    "positive-integer": "<integer [0,\u221E]>",
    "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
  },
  properties: {
    "--*": "<declaration-value>",
    "-ms-accelerator": "false|true",
    "-ms-block-progression": "tb|rl|bt|lr",
    "-ms-content-zoom-chaining": "none|chained",
    "-ms-content-zooming": "none|zoom",
    "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
    "-ms-content-zoom-limit-max": "<percentage>",
    "-ms-content-zoom-limit-min": "<percentage>",
    "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
    "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
    "-ms-content-zoom-snap-type": "none|proximity|mandatory",
    "-ms-filter": "<string>",
    "-ms-flow-from": "[none|<custom-ident>]#",
    "-ms-flow-into": "[none|<custom-ident>]#",
    "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
    "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
    "-ms-high-contrast-adjust": "auto|none",
    "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
    "-ms-hyphenate-limit-lines": "no-limit|<integer>",
    "-ms-hyphenate-limit-zone": "<percentage>|<length>",
    "-ms-ime-align": "auto|after",
    "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
    "-ms-scrollbar-3dlight-color": "<color>",
    "-ms-scrollbar-arrow-color": "<color>",
    "-ms-scrollbar-base-color": "<color>",
    "-ms-scrollbar-darkshadow-color": "<color>",
    "-ms-scrollbar-face-color": "<color>",
    "-ms-scrollbar-highlight-color": "<color>",
    "-ms-scrollbar-shadow-color": "<color>",
    "-ms-scrollbar-track-color": "<color>",
    "-ms-scroll-chaining": "chained|none",
    "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
    "-ms-scroll-limit-x-max": "auto|<length>",
    "-ms-scroll-limit-x-min": "<length>",
    "-ms-scroll-limit-y-max": "auto|<length>",
    "-ms-scroll-limit-y-min": "<length>",
    "-ms-scroll-rails": "none|railed",
    "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-type": "none|proximity|mandatory",
    "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
    "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
    "-ms-scroll-translation": "none|vertical-to-horizontal",
    "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
    "-ms-touch-select": "grippers|none",
    "-ms-user-select": "none|element|text",
    "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
    "-ms-wrap-margin": "<length>",
    "-ms-wrap-through": "wrap|none",
    "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
    "-moz-binding": "<url>|none",
    "-moz-border-bottom-colors": "<color>+|none",
    "-moz-border-left-colors": "<color>+|none",
    "-moz-border-right-colors": "<color>+|none",
    "-moz-border-top-colors": "<color>+|none",
    "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
    "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
    "-moz-force-broken-image-icon": "0|1",
    "-moz-image-region": "<shape>|auto",
    "-moz-orient": "inline|block|horizontal|vertical",
    "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
    "-moz-outline-radius-bottomleft": "<outline-radius>",
    "-moz-outline-radius-bottomright": "<outline-radius>",
    "-moz-outline-radius-topleft": "<outline-radius>",
    "-moz-outline-radius-topright": "<outline-radius>",
    "-moz-stack-sizing": "ignore|stretch-to-fit",
    "-moz-text-blink": "none|blink",
    "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
    "-moz-user-input": "auto|none|enabled|disabled",
    "-moz-user-modify": "read-only|read-write|write-only",
    "-moz-window-dragging": "drag|no-drag",
    "-moz-window-shadow": "default|menu|tooltip|sheet|none",
    "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
    "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
    "-webkit-border-before-color": "<color>",
    "-webkit-border-before-style": "<'border-style'>",
    "-webkit-border-before-width": "<'border-width'>",
    "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
    "-webkit-line-clamp": "none|<integer>",
    "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
    "-webkit-mask-attachment": "<attachment>#",
    "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
    "-webkit-mask-composite": "<composite-style>#",
    "-webkit-mask-image": "<mask-reference>#",
    "-webkit-mask-origin": "[<box>|border|padding|content]#",
    "-webkit-mask-position": "<position>#",
    "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
    "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
    "-webkit-mask-repeat": "<repeat-style>#",
    "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
    "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
    "-webkit-mask-size": "<bg-size>#",
    "-webkit-overflow-scrolling": "auto|touch",
    "-webkit-tap-highlight-color": "<color>",
    "-webkit-text-fill-color": "<color>",
    "-webkit-text-stroke": "<length>||<color>",
    "-webkit-text-stroke-color": "<color>",
    "-webkit-text-stroke-width": "<length>",
    "-webkit-touch-callout": "default|none",
    "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
    "accent-color": "auto|<color>",
    "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
    "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
    "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
    "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
    all: "initial|inherit|unset|revert|revert-layer",
    animation: "<single-animation>#",
    "animation-delay": "<time>#",
    "animation-direction": "<single-animation-direction>#",
    "animation-duration": "<time>#",
    "animation-fill-mode": "<single-animation-fill-mode>#",
    "animation-iteration-count": "<single-animation-iteration-count>#",
    "animation-name": "[none|<keyframes-name>]#",
    "animation-play-state": "<single-animation-play-state>#",
    "animation-timing-function": "<easing-function>#",
    "animation-timeline": "<single-animation-timeline>#",
    appearance: "none|auto|textfield|menulist-button|<compat-auto>",
    "aspect-ratio": "auto|<ratio>",
    azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
    "backdrop-filter": "none|<filter-function-list>",
    "backface-visibility": "visible|hidden",
    background: "[<bg-layer> ,]* <final-bg-layer>",
    "background-attachment": "<attachment>#",
    "background-blend-mode": "<blend-mode>#",
    "background-clip": "<bg-clip>#",
    "background-color": "<color>",
    "background-image": "<bg-image>#",
    "background-origin": "<box>#",
    "background-position": "<bg-position>#",
    "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
    "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
    "background-repeat": "<repeat-style>#",
    "background-size": "<bg-size>#",
    "block-overflow": "clip|ellipsis|<string>",
    "block-size": "<'width'>",
    border: "<line-width>||<line-style>||<color>",
    "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-color": "<'border-top-color'>{1,2}",
    "border-block-style": "<'border-top-style'>",
    "border-block-width": "<'border-top-width'>",
    "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-end-color": "<'border-top-color'>",
    "border-block-end-style": "<'border-top-style'>",
    "border-block-end-width": "<'border-top-width'>",
    "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-start-color": "<'border-top-color'>",
    "border-block-start-style": "<'border-top-style'>",
    "border-block-start-width": "<'border-top-width'>",
    "border-bottom": "<line-width>||<line-style>||<color>",
    "border-bottom-color": "<'border-top-color'>",
    "border-bottom-left-radius": "<length-percentage>{1,2}",
    "border-bottom-right-radius": "<length-percentage>{1,2}",
    "border-bottom-style": "<line-style>",
    "border-bottom-width": "<line-width>",
    "border-collapse": "collapse|separate",
    "border-color": "<color>{1,4}",
    "border-end-end-radius": "<length-percentage>{1,2}",
    "border-end-start-radius": "<length-percentage>{1,2}",
    "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
    "border-image-outset": "[<length>|<number>]{1,4}",
    "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
    "border-image-slice": "<number-percentage>{1,4}&&fill?",
    "border-image-source": "none|<image>",
    "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
    "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-color": "<'border-top-color'>{1,2}",
    "border-inline-style": "<'border-top-style'>",
    "border-inline-width": "<'border-top-width'>",
    "border-inline-end-color": "<'border-top-color'>",
    "border-inline-end-style": "<'border-top-style'>",
    "border-inline-end-width": "<'border-top-width'>",
    "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-start-color": "<'border-top-color'>",
    "border-inline-start-style": "<'border-top-style'>",
    "border-inline-start-width": "<'border-top-width'>",
    "border-left": "<line-width>||<line-style>||<color>",
    "border-left-color": "<color>",
    "border-left-style": "<line-style>",
    "border-left-width": "<line-width>",
    "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
    "border-right": "<line-width>||<line-style>||<color>",
    "border-right-color": "<color>",
    "border-right-style": "<line-style>",
    "border-right-width": "<line-width>",
    "border-spacing": "<length> <length>?",
    "border-start-end-radius": "<length-percentage>{1,2}",
    "border-start-start-radius": "<length-percentage>{1,2}",
    "border-style": "<line-style>{1,4}",
    "border-top": "<line-width>||<line-style>||<color>",
    "border-top-color": "<color>",
    "border-top-left-radius": "<length-percentage>{1,2}",
    "border-top-right-radius": "<length-percentage>{1,2}",
    "border-top-style": "<line-style>",
    "border-top-width": "<line-width>",
    "border-width": "<line-width>{1,4}",
    bottom: "<length>|<percentage>|auto",
    "box-align": "start|center|end|baseline|stretch",
    "box-decoration-break": "slice|clone",
    "box-direction": "normal|reverse|inherit",
    "box-flex": "<number>",
    "box-flex-group": "<integer>",
    "box-lines": "single|multiple",
    "box-ordinal-group": "<integer>",
    "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
    "box-pack": "start|center|end|justify",
    "box-shadow": "none|<shadow>#",
    "box-sizing": "content-box|border-box",
    "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
    "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
    "caret-color": "auto|<color>",
    clear: "none|left|right|both|inline-start|inline-end",
    clip: "<shape>|auto",
    "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
    color: "<color>",
    "print-color-adjust": "economy|exact",
    "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
    "column-count": "<integer>|auto",
    "column-fill": "auto|balance|balance-all",
    "column-gap": "normal|<length-percentage>",
    "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
    "column-rule-color": "<color>",
    "column-rule-style": "<'border-style'>",
    "column-rule-width": "<'border-width'>",
    "column-span": "none|all",
    "column-width": "<length>|auto",
    columns: "<'column-width'>||<'column-count'>",
    contain: "none|strict|content|[size||layout||style||paint]",
    content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
    "content-visibility": "visible|auto|hidden",
    "counter-increment": "[<counter-name> <integer>?]+|none",
    "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
    "counter-set": "[<counter-name> <integer>?]+|none",
    cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
    direction: "ltr|rtl",
    display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
    "empty-cells": "show|hide",
    filter: "none|<filter-function-list>|<-ms-filter-function-list>",
    flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
    "flex-basis": "content|<'width'>",
    "flex-direction": "row|row-reverse|column|column-reverse",
    "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
    "flex-grow": "<number>",
    "flex-shrink": "<number>",
    "flex-wrap": "nowrap|wrap|wrap-reverse",
    float: "left|right|none|inline-start|inline-end",
    font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
    "font-family": "[<family-name>|<generic-family>]#",
    "font-feature-settings": "normal|<feature-tag-value>#",
    "font-kerning": "auto|normal|none",
    "font-language-override": "normal|<string>",
    "font-optical-sizing": "auto|none",
    "font-variation-settings": "normal|[<string> <number>]#",
    "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
    "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
    "font-smooth": "auto|never|always|<absolute-size>|<length>",
    "font-stretch": "<font-stretch-absolute>",
    "font-style": "normal|italic|oblique <angle>?",
    "font-synthesis": "none|[weight||style||small-caps]",
    "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
    "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
    "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
    "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
    "font-variant-position": "normal|sub|super",
    "font-weight": "<font-weight-absolute>|bolder|lighter",
    "forced-color-adjust": "auto|none",
    gap: "<'row-gap'> <'column-gap'>?",
    grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
    "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
    "grid-auto-columns": "<track-size>+",
    "grid-auto-flow": "[row|column]||dense",
    "grid-auto-rows": "<track-size>+",
    "grid-column": "<grid-line> [/ <grid-line>]?",
    "grid-column-end": "<grid-line>",
    "grid-column-gap": "<length-percentage>",
    "grid-column-start": "<grid-line>",
    "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
    "grid-row": "<grid-line> [/ <grid-line>]?",
    "grid-row-end": "<grid-line>",
    "grid-row-gap": "<length-percentage>",
    "grid-row-start": "<grid-line>",
    "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
    "grid-template-areas": "none|<string>+",
    "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
    height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "hyphenate-character": "auto|<string>",
    hyphens: "none|manual|auto",
    "image-orientation": "from-image|<angle>|[<angle>? flip]",
    "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
    "image-resolution": "[from-image||<resolution>]&&snap?",
    "ime-mode": "auto|normal|active|inactive|disabled",
    "initial-letter": "normal|[<number> <integer>?]",
    "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
    "inline-size": "<'width'>",
    "input-security": "auto|none",
    inset: "<'top'>{1,4}",
    "inset-block": "<'top'>{1,2}",
    "inset-block-end": "<'top'>",
    "inset-block-start": "<'top'>",
    "inset-inline": "<'top'>{1,2}",
    "inset-inline-end": "<'top'>",
    "inset-inline-start": "<'top'>",
    isolation: "auto|isolate",
    "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
    "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
    "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
    "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
    left: "<length>|<percentage>|auto",
    "letter-spacing": "normal|<length-percentage>",
    "line-break": "auto|loose|normal|strict|anywhere",
    "line-clamp": "none|<integer>",
    "line-height": "normal|<number>|<length>|<percentage>",
    "line-height-step": "<length>",
    "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
    "list-style-image": "<image>|none",
    "list-style-position": "inside|outside",
    "list-style-type": "<counter-style>|<string>|none",
    margin: "[<length>|<percentage>|auto]{1,4}",
    "margin-block": "<'margin-left'>{1,2}",
    "margin-block-end": "<'margin-left'>",
    "margin-block-start": "<'margin-left'>",
    "margin-bottom": "<length>|<percentage>|auto",
    "margin-inline": "<'margin-left'>{1,2}",
    "margin-inline-end": "<'margin-left'>",
    "margin-inline-start": "<'margin-left'>",
    "margin-left": "<length>|<percentage>|auto",
    "margin-right": "<length>|<percentage>|auto",
    "margin-top": "<length>|<percentage>|auto",
    "margin-trim": "none|in-flow|all",
    mask: "<mask-layer>#",
    "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
    "mask-border-mode": "luminance|alpha",
    "mask-border-outset": "[<length>|<number>]{1,4}",
    "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
    "mask-border-slice": "<number-percentage>{1,4} fill?",
    "mask-border-source": "none|<image>",
    "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
    "mask-clip": "[<geometry-box>|no-clip]#",
    "mask-composite": "<compositing-operator>#",
    "mask-image": "<mask-reference>#",
    "mask-mode": "<masking-mode>#",
    "mask-origin": "<geometry-box>#",
    "mask-position": "<position>#",
    "mask-repeat": "<repeat-style>#",
    "mask-size": "<bg-size>#",
    "mask-type": "luminance|alpha",
    "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
    "math-style": "normal|compact",
    "max-block-size": "<'max-width'>",
    "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "max-inline-size": "<'max-width'>",
    "max-lines": "none|<integer>",
    "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "min-block-size": "<'min-width'>",
    "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "min-inline-size": "<'min-width'>",
    "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "mix-blend-mode": "<blend-mode>|plus-lighter",
    "object-fit": "fill|contain|cover|none|scale-down",
    "object-position": "<position>",
    offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
    "offset-anchor": "auto|<position>",
    "offset-distance": "<length-percentage>",
    "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
    "offset-position": "auto|<position>",
    "offset-rotate": "[auto|reverse]||<angle>",
    opacity: "<alpha-value>",
    order: "<integer>",
    orphans: "<integer>",
    outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
    "outline-color": "<color>|invert",
    "outline-offset": "<length>",
    "outline-style": "auto|<'border-style'>",
    "outline-width": "<line-width>",
    overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
    "overflow-anchor": "auto|none",
    "overflow-block": "visible|hidden|clip|scroll|auto",
    "overflow-clip-box": "padding-box|content-box",
    "overflow-clip-margin": "<visual-box>||<length [0,\u221E]>",
    "overflow-inline": "visible|hidden|clip|scroll|auto",
    "overflow-wrap": "normal|break-word|anywhere",
    "overflow-x": "visible|hidden|clip|scroll|auto",
    "overflow-y": "visible|hidden|clip|scroll|auto",
    "overscroll-behavior": "[contain|none|auto]{1,2}",
    "overscroll-behavior-block": "contain|none|auto",
    "overscroll-behavior-inline": "contain|none|auto",
    "overscroll-behavior-x": "contain|none|auto",
    "overscroll-behavior-y": "contain|none|auto",
    padding: "[<length>|<percentage>]{1,4}",
    "padding-block": "<'padding-left'>{1,2}",
    "padding-block-end": "<'padding-left'>",
    "padding-block-start": "<'padding-left'>",
    "padding-bottom": "<length>|<percentage>",
    "padding-inline": "<'padding-left'>{1,2}",
    "padding-inline-end": "<'padding-left'>",
    "padding-inline-start": "<'padding-left'>",
    "padding-left": "<length>|<percentage>",
    "padding-right": "<length>|<percentage>",
    "padding-top": "<length>|<percentage>",
    "page-break-after": "auto|always|avoid|left|right|recto|verso",
    "page-break-before": "auto|always|avoid|left|right|recto|verso",
    "page-break-inside": "auto|avoid",
    "paint-order": "normal|[fill||stroke||markers]",
    perspective: "none|<length>",
    "perspective-origin": "<position>",
    "place-content": "<'align-content'> <'justify-content'>?",
    "place-items": "<'align-items'> <'justify-items'>?",
    "place-self": "<'align-self'> <'justify-self'>?",
    "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
    position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
    quotes: "none|auto|[<string> <string>]+",
    resize: "none|both|horizontal|vertical|block|inline",
    right: "<length>|<percentage>|auto",
    rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
    "row-gap": "normal|<length-percentage>",
    "ruby-align": "start|center|space-between|space-around",
    "ruby-merge": "separate|collapse|auto",
    "ruby-position": "[alternate||[over|under]]|inter-character",
    scale: "none|<number>{1,3}",
    "scrollbar-color": "auto|<color>{2}",
    "scrollbar-gutter": "auto|stable&&both-edges?",
    "scrollbar-width": "auto|thin|none",
    "scroll-behavior": "auto|smooth",
    "scroll-margin": "<length>{1,4}",
    "scroll-margin-block": "<length>{1,2}",
    "scroll-margin-block-start": "<length>",
    "scroll-margin-block-end": "<length>",
    "scroll-margin-bottom": "<length>",
    "scroll-margin-inline": "<length>{1,2}",
    "scroll-margin-inline-start": "<length>",
    "scroll-margin-inline-end": "<length>",
    "scroll-margin-left": "<length>",
    "scroll-margin-right": "<length>",
    "scroll-margin-top": "<length>",
    "scroll-padding": "[auto|<length-percentage>]{1,4}",
    "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-block-start": "auto|<length-percentage>",
    "scroll-padding-block-end": "auto|<length-percentage>",
    "scroll-padding-bottom": "auto|<length-percentage>",
    "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-inline-start": "auto|<length-percentage>",
    "scroll-padding-inline-end": "auto|<length-percentage>",
    "scroll-padding-left": "auto|<length-percentage>",
    "scroll-padding-right": "auto|<length-percentage>",
    "scroll-padding-top": "auto|<length-percentage>",
    "scroll-snap-align": "[none|start|end|center]{1,2}",
    "scroll-snap-coordinate": "none|<position>#",
    "scroll-snap-destination": "<position>",
    "scroll-snap-points-x": "none|repeat( <length-percentage> )",
    "scroll-snap-points-y": "none|repeat( <length-percentage> )",
    "scroll-snap-stop": "normal|always",
    "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
    "scroll-snap-type-x": "none|mandatory|proximity",
    "scroll-snap-type-y": "none|mandatory|proximity",
    "shape-image-threshold": "<alpha-value>",
    "shape-margin": "<length-percentage>",
    "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
    "tab-size": "<integer>|<length>",
    "table-layout": "auto|fixed",
    "text-align": "start|end|left|right|center|justify|match-parent",
    "text-align-last": "auto|start|end|left|right|center|justify",
    "text-combine-upright": "none|all|[digits <integer>?]",
    "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
    "text-decoration-color": "<color>",
    "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
    "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
    "text-decoration-skip-ink": "auto|all|none",
    "text-decoration-style": "solid|double|dotted|dashed|wavy",
    "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
    "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
    "text-emphasis-color": "<color>",
    "text-emphasis-position": "[over|under]&&[right|left]",
    "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
    "text-indent": "<length-percentage>&&hanging?&&each-line?",
    "text-justify": "auto|inter-character|inter-word|none",
    "text-orientation": "mixed|upright|sideways",
    "text-overflow": "[clip|ellipsis|<string>]{1,2}",
    "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
    "text-shadow": "none|<shadow-t>#",
    "text-size-adjust": "none|auto|<percentage>",
    "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
    "text-underline-offset": "auto|<length>|<percentage>",
    "text-underline-position": "auto|from-font|[under||[left|right]]",
    top: "<length>|<percentage>|auto",
    "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
    transform: "none|<transform-list>",
    "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
    "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
    "transform-style": "flat|preserve-3d",
    transition: "<single-transition>#",
    "transition-delay": "<time>#",
    "transition-duration": "<time>#",
    "transition-property": "none|<single-transition-property>#",
    "transition-timing-function": "<easing-function>#",
    translate: "none|<length-percentage> [<length-percentage> <length>?]?",
    "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
    "user-select": "auto|text|none|contain|all",
    "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
    visibility: "visible|hidden|collapse",
    "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
    widows: "<integer>",
    width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
    "will-change": "auto|<animateable-feature>#",
    "word-break": "normal|break-all|keep-all|break-word",
    "word-spacing": "normal|<length>",
    "word-wrap": "normal|break-word",
    "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
    "z-index": "auto|<integer>",
    zoom: "normal|reset|<number>|<percentage>",
    "-moz-background-clip": "padding|border",
    "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
    "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
    "-moz-border-radius-topleft": "<'border-top-left-radius'>",
    "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
    "-moz-control-character-visibility": "visible|hidden",
    "-moz-osx-font-smoothing": "auto|grayscale",
    "-moz-user-select": "none|text|all|-moz-none",
    "-ms-flex-align": "start|end|center|baseline|stretch",
    "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
    "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
    "-ms-flex-negative": "<'flex-shrink'>",
    "-ms-flex-pack": "start|end|center|justify|distribute",
    "-ms-flex-order": "<integer>",
    "-ms-flex-positive": "<'flex-grow'>",
    "-ms-flex-preferred-size": "<'flex-basis'>",
    "-ms-interpolation-mode": "nearest-neighbor|bicubic",
    "-ms-grid-column-align": "start|end|center|stretch",
    "-ms-grid-row-align": "start|end|center|stretch",
    "-ms-hyphenate-limit-last": "none|always|column|page|spread",
    "-webkit-background-clip": "[<box>|border|padding|content|text]#",
    "-webkit-column-break-after": "always|auto|avoid",
    "-webkit-column-break-before": "always|auto|avoid",
    "-webkit-column-break-inside": "always|auto|avoid",
    "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
    "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
    "-webkit-print-color-adjust": "economy|exact",
    "-webkit-text-security": "none|circle|disc|square",
    "-webkit-user-drag": "none|element|auto",
    "-webkit-user-select": "auto|none|text|all",
    "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
    "baseline-shift": "baseline|sub|super|<svg-length>",
    behavior: "<url>+",
    "clip-rule": "nonzero|evenodd",
    cue: "<'cue-before'> <'cue-after'>?",
    "cue-after": "<url> <decibel>?|none",
    "cue-before": "<url> <decibel>?|none",
    "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
    fill: "<paint>",
    "fill-opacity": "<number-zero-one>",
    "fill-rule": "nonzero|evenodd",
    "glyph-orientation-horizontal": "<angle>",
    "glyph-orientation-vertical": "<angle>",
    kerning: "auto|<svg-length>",
    marker: "none|<url>",
    "marker-end": "none|<url>",
    "marker-mid": "none|<url>",
    "marker-start": "none|<url>",
    pause: "<'pause-before'> <'pause-after'>?",
    "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    rest: "<'rest-before'> <'rest-after'>?",
    "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
    src: "[<url> [format( <string># )]?|local( <family-name> )]#",
    speak: "auto|none|normal",
    "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
    stroke: "<paint>",
    "stroke-dasharray": "none|[<svg-length>+]#",
    "stroke-dashoffset": "<svg-length>",
    "stroke-linecap": "butt|round|square",
    "stroke-linejoin": "miter|round|bevel",
    "stroke-miterlimit": "<number-one-or-greater>",
    "stroke-opacity": "<number-zero-one>",
    "stroke-width": "<svg-length>",
    "text-anchor": "start|middle|end",
    "unicode-range": "<urange>#",
    "voice-balance": "<number>|left|center|right|leftwards|rightwards",
    "voice-duration": "auto|<time>",
    "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
    "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
    "voice-stress": "normal|strong|moderate|none|reduced",
    "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
  },
  atrules: {
    charset: {
      prelude: "<string>",
      descriptors: null
    },
    "counter-style": {
      prelude: "<counter-style-name>",
      descriptors: {
        "additive-symbols": "[<integer>&&<symbol>]#",
        fallback: "<counter-style-name>",
        negative: "<symbol> <symbol>?",
        pad: "<integer>&&<symbol>",
        prefix: "<symbol>",
        range: "[[<integer>|infinite]{2}]#|auto",
        "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
        suffix: "<symbol>",
        symbols: "<symbol>+",
        system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
      }
    },
    document: {
      prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
      descriptors: null
    },
    "font-face": {
      prelude: null,
      descriptors: {
        "ascent-override": "normal|<percentage>",
        "descent-override": "normal|<percentage>",
        "font-display": "[auto|block|swap|fallback|optional]",
        "font-family": "<family-name>",
        "font-feature-settings": "normal|<feature-tag-value>#",
        "font-variation-settings": "normal|[<string> <number>]#",
        "font-stretch": "<font-stretch-absolute>{1,2}",
        "font-style": "normal|italic|oblique <angle>{0,2}",
        "font-weight": "<font-weight-absolute>{1,2}",
        "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
        "line-gap-override": "normal|<percentage>",
        "size-adjust": "<percentage>",
        src: "[<url> [format( <string># )]?|local( <family-name> )]#",
        "unicode-range": "<urange>#"
      }
    },
    "font-feature-values": {
      prelude: "<family-name>#",
      descriptors: null
    },
    import: {
      prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
      descriptors: null
    },
    keyframes: {
      prelude: "<keyframes-name>",
      descriptors: null
    },
    layer: {
      prelude: "[<layer-name>#|<layer-name>?]",
      descriptors: null
    },
    media: {
      prelude: "<media-query-list>",
      descriptors: null
    },
    namespace: {
      prelude: "<namespace-prefix>? [<string>|<url>]",
      descriptors: null
    },
    page: {
      prelude: "<page-selector-list>",
      descriptors: {
        bleed: "auto|<length>",
        marks: "none|[crop||cross]",
        size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
      }
    },
    property: {
      prelude: "<custom-property-name>",
      descriptors: {
        syntax: "<string>",
        inherits: "true|false",
        "initial-value": "<string>"
      }
    },
    "scroll-timeline": {
      prelude: "<timeline-name>",
      descriptors: null
    },
    supports: {
      prelude: "<supports-condition>",
      descriptors: null
    },
    viewport: {
      prelude: null,
      descriptors: {
        height: "<viewport-length>{1,2}",
        "max-height": "<viewport-length>",
        "max-width": "<viewport-length>",
        "max-zoom": "auto|<number>|<percentage>",
        "min-height": "<viewport-length>",
        "min-width": "<viewport-length>",
        "min-zoom": "auto|<number>|<percentage>",
        orientation: "auto|portrait|landscape",
        "user-zoom": "zoom|fixed",
        "viewport-fit": "auto|contain|cover",
        width: "<viewport-length>{1,2}",
        zoom: "auto|<number>|<percentage>"
      }
    }
  },
  node: lB,
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atrulePrelude(e) {
      return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block() {
      return this.Block(!0);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: "Value"
  },
  scope: cV,
  atrule: {
    "font-face": {
      parse: {
        prelude: null,
        block() {
          return this.Block(!0);
        }
      }
    },
    import: {
      parse: {
        prelude() {
          let e = this.createList();
          switch (this.skipSC(), this.tokenType) {
            case oE.String:
              e.push(this.String());
              break;
            case oE.Url:
            case oE.Function:
              e.push(this.Url());
              break;
            default:
              this.error("String or url() is expected");
          }
          (this.lookupNonWSType(0) === oE.Ident || this.lookupNonWSType(0) === oE.LeftParenthesis) && e.push(this.MediaQueryList());
          return e;
        },
        block: null
      }
    },
    media: {
      parse: {
        prelude() {
          return this.createSingleNodeList(this.MediaQueryList());
        },
        block() {
          return this.Block(!1);
        }
      }
    },
    page: {
      parse: {
        prelude() {
          return this.createSingleNodeList(this.SelectorList());
        },
        block() {
          return this.Block(!0);
        }
      }
    },
    supports: {
      parse: {
        prelude() {
          let e = cQ.call(this);
          null === this.getFirstListNode(e) && this.error("Condition is expected");
          return e;
        },
        block() {
          return this.Block(!1);
        }
      }
    }
  },
  pseudo: {
    dir: cJ,
    has: cZ,
    lang: cJ,
    matches: cZ,
    is: cZ,
    "-moz-any": cZ,
    "-webkit-any": cZ,
    where: cZ,
    not: cZ,
    "nth-child": c0,
    "nth-last-child": c0,
    "nth-last-of-type": c0,
    "nth-of-type": c0,
    slotted: {
      parse() {
        return this.createSingleNodeList(this.Selector());
      }
    }
  },
  node: c1,
  node: lB
});
var c3 = {};
c3.SyntaxError = s1.SyntaxError;
c3.generate = sw.generate;
c3.parse = sJ.parse;
c3.walk = lx.walk;
var c4 = {};
c4.clone = function e(t) {
  let r = {};
  for (let n in t) {
    let a = t[n];
    a && (Array.isArray(a) || a instanceof oJ.List ? a = a.map(e) : a.constructor === Object && (a = e(a)));
    r[n] = a;
  }
  return r;
};
var c5 = {};
c5.decode = function (e) {
  let t = e.length - 1;
  let r = "";
  for (let n = 0; n < e.length; n++) {
    let a = e.charCodeAt(n);
    if (92 === a) {
      if (n === t) break;
      if (a = e.charCodeAt(++n), oP.isValidEscape(92, a)) {
        let t = n - 1;
        let a = oF.consumeEscaped(e, t);
        n = a - 1;
        r += oF.decodeEscaped(e.substring(t + 1, a));
      } else 13 === a && 10 === e.charCodeAt(n + 1) && n++;
    } else r += e[n];
  }
  return r;
};
c5.encode = function (e) {
  let t = "";
  if (1 === e.length && 45 === e.charCodeAt(0)) return "\\-";
  for (let r = 0; r < e.length; r++) {
    let n = e.charCodeAt(r);
    if (0 === n) {
      t += "\uFFFD";
      continue;
    }
    if (n <= 31 || 127 === n || n >= 48 && n <= 57 && (0 === r || 1 === r && 45 === e.charCodeAt(0))) {
      t += "\\" + n.toString(16) + " ";
      continue;
    }
    oP.isName(n) ? t += e.charAt(r) : t += "\\" + e.charAt(r);
  }
  return t;
};
let {
  tokenize: _tokenize,
  parse: _parse,
  generate: _generate,
  lexer: _lexer,
  createLexer: _createLexer,
  walk: _walk,
  find: _find,
  findLast: _findLast,
  findAll: _findAll,
  toPlainObject: _toPlainObject,
  fromPlainObject: _fromPlainObject,
  fork: _fork
} = c2;
oA.version = void 0;
oA.createSyntax = lq;
oA.List = oJ.List;
oA.Lexer = sk.Lexer;
oA.definitionSyntax = c3;
oA.clone = c4.clone;
oA.isCustomProperty = sT.isCustomProperty;
oA.keyword = sT.keyword;
oA.property = sT.property;
oA.vendorPrefix = sT.vendorPrefix;
oA.ident = c5;
oA.string = cN;
oA.url = cU;
oA.tokenTypes = oE;
oA.tokenNames = oV;
oA.TokenStream = oK.TokenStream;
oA.createLexer = _createLexer;
oA.find = _find;
oA.findAll = _findAll;
oA.findLast = _findLast;
oA.fork = _fork;
oA.fromPlainObject = _fromPlainObject;
oA.generate = _generate;
oA.lexer = _lexer;
oA.parse = _parse;
oA.toPlainObject = _toPlainObject;
oA.tokenize = _tokenize;
oA.walk = _walk;
var ul = {};
let {
  hasOwnProperty: _hasOwnProperty2
} = Object.prototype;
function uu(e, t) {
  let r = Object.create(null);
  if (!Array.isArray(e)) return null;
  for (let n of e) {
    t && (n = n.toLowerCase());
    r[n] = !0;
  }
  return r;
}
function ud(e) {
  if (!e) return null;
  let t = uu(e.tags, !0);
  let r = uu(e.ids);
  let n = uu(e.classes);
  return null === t && null === r && null === n ? null : {
    tags: t,
    ids: r,
    classes: n
  };
}
ul.buildIndex = function (e) {
  let t = !1;
  if (e.scopes && Array.isArray(e.scopes)) {
    t = Object.create(null);
    for (let r = 0; r < e.scopes.length; r++) {
      let n = e.scopes[r];
      if (!n || !Array.isArray(n)) throw Error("Wrong usage format");
      for (let e of n) {
        if (_hasOwnProperty2.call(t, e)) throw Error(`Class can't be used for several scopes: ${e}`);
        t[e] = r + 1;
      }
    }
  }
  return {
    whitelist: ud(e),
    blacklist: ud(e.blacklist),
    scopes: t
  };
};
var uh = {};
uh.hasNoChildren = function (e) {
  return !e || !e.children || e.children.isEmpty;
};
uh.isNodeChildrenList = function (e, t) {
  return null !== e && e.children === t;
};
let {
  hasOwnProperty: _hasOwnProperty9
} = Object.prototype;
let um = new Set(["keyframes"]);
let uf = {
  Atrule: function (e, t, r) {
    if (e.block && (null !== this.stylesheet && (this.stylesheet.firstAtrulesAllowed = !1), uh.hasNoChildren(e.block))) {
      r.remove(t);
      return;
    }
    switch (e.name) {
      case "charset":
        if (uh.hasNoChildren(e.prelude) || t.prev) {
          r.remove(t);
          return;
        }
        break;
      case "import":
        if (null === this.stylesheet || !this.stylesheet.firstAtrulesAllowed) {
          r.remove(t);
          return;
        }
        r.prevUntil(t.prev, function (e) {
          if ("Atrule" !== e.type || "import" !== e.name && "charset" !== e.name) {
            this.root.firstAtrulesAllowed = !1;
            r.remove(t);
            return !0;
          }
        }, this);
        break;
      default:
        {
          let n = oA.keyword(e.name).basename;
          ("keyframes" === n || "media" === n || "supports" === n) && (uh.hasNoChildren(e.prelude) || uh.hasNoChildren(e.block)) && r.remove(t);
        }
    }
  },
  Comment: function (e, t, r) {
    r.remove(t);
  },
  Declaration: function (e, t, r) {
    if (e.value.children && e.value.children.isEmpty) {
      r.remove(t);
      return;
    }
    oA.property(e.property).custom && /\S/.test(e.value.value) && (e.value.value = e.value.value.trim());
  },
  Raw: function (e, t, r) {
    (uh.isNodeChildrenList(this.stylesheet, r) || uh.isNodeChildrenList(this.block, r)) && r.remove(t);
  },
  Rule: function (e, t, r, n) {
    if (uh.hasNoChildren(e.prelude) || uh.hasNoChildren(e.block)) {
      r.remove(t);
      return;
    }
    if (this.atrule && um.has(oA.keyword(this.atrule.name).basename)) return;
    let {
      usage
    } = n;
    if (usage && (null !== usage.whitelist || null !== usage.blacklist) && (!function e(t, r) {
      t.children.forEach((n, a, i) => {
        let o = !1;
        oA.walk(n, function (n) {
          if (null === this.selector || this.selector === t) switch (n.type) {
            case "SelectorList":
              (null === this.$$function || "not" !== this.$$function.name.toLowerCase()) && e(n, r) && (o = !0);
              break;
            case "ClassSelector":
              null === r.whitelist || null === r.whitelist.classes || _hasOwnProperty9.call(r.whitelist.classes, n.name) || (o = !0);
              null !== r.blacklist && null !== r.blacklist.classes && _hasOwnProperty9.call(r.blacklist.classes, n.name) && (o = !0);
              break;
            case "IdSelector":
              null === r.whitelist || null === r.whitelist.ids || _hasOwnProperty9.call(r.whitelist.ids, n.name) || (o = !0);
              null !== r.blacklist && null !== r.blacklist.ids && _hasOwnProperty9.call(r.blacklist.ids, n.name) && (o = !0);
              break;
            case "TypeSelector":
              "*" !== n.name.charAt(n.name.length - 1) && (null === r.whitelist || null === r.whitelist.tags || _hasOwnProperty9.call(r.whitelist.tags, n.name.toLowerCase()) || (o = !0), null !== r.blacklist && null !== r.blacklist.tags && _hasOwnProperty9.call(r.blacklist.tags, n.name.toLowerCase()) && (o = !0));
          }
        });
        o && i.remove(a);
      });
      return t.children.isEmpty;
    }(e.prelude, usage), uh.hasNoChildren(e.prelude))) {
      r.remove(t);
      return;
    }
  },
  TypeSelector: function (e, t, r) {
    if ("*" !== t.data.name) return;
    let n = t.next && t.next.data.type;
    ("IdSelector" === n || "ClassSelector" === n || "AttributeSelector" === n || "PseudoClassSelector" === n || "PseudoElementSelector" === n) && r.remove(t);
  },
  WhiteSpace: function (e, t, r) {
    r.remove(t);
  }
};
let ug = function (e) {
  e.block.children.forEach(e => {
    e.prelude.children.forEach(e => {
      e.children.forEach((e, t) => {
        "Percentage" === e.type && "100" === e.value ? t.data = {
          type: "TypeSelector",
          loc: e.loc,
          name: "to"
        } : "TypeSelector" === e.type && "from" === e.name && (t.data = {
          type: "Percentage",
          loc: e.loc,
          value: "0"
        });
      });
    });
  });
};
let ub = /^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/;
let uy = function (e) {
  e.children.forEach((e, t, r) => {
    "Identifier" === e.type && "none" === e.name.toLowerCase() && (r.head === r.tail ? t.data = {
      type: "Number",
      loc: e.loc,
      value: "0"
    } : r.remove(t));
  });
};
let uk = {
  font: function (e) {
    let t = e.children;
    t.forEachRight(function (e, t) {
      if ("Identifier" === e.type) {
        if ("bold" === e.name) t.data = {
          type: "Number",
          loc: e.loc,
          value: "700"
        };else if ("normal" === e.name) {
          let e = t.prev;
          e && "Operator" === e.data.type && "/" === e.data.value && this.remove(e);
          this.remove(t);
        }
      }
    });
    t.isEmpty && t.insert(t.createItem({
      type: "Identifier",
      name: "normal"
    }));
  },
  "font-weight": function (e) {
    let t = e.children.head.data;
    if ("Identifier" === t.type) switch (t.name) {
      case "normal":
        e.children.head.data = {
          type: "Number",
          loc: t.loc,
          value: "400"
        };
        break;
      case "bold":
        e.children.head.data = {
          type: "Number",
          loc: t.loc,
          value: "700"
        };
    }
  },
  background: function (e) {
    function t() {
      n.length || n.unshift({
        type: "Number",
        loc: null,
        value: "0"
      }, {
        type: "Number",
        loc: null,
        value: "0"
      });
      r.push.apply(r, n);
      n = [];
    }
    let r = [];
    let n = [];
    e.children.forEach(e => {
      if ("Operator" === e.type && "," === e.value) {
        t();
        r.push(e);
        return;
      }
      ("Identifier" !== e.type || "transparent" !== e.name && "none" !== e.name && "repeat" !== e.name && "scroll" !== e.name) && n.push(e);
    });
    t();
    e.children = new oA.List().fromArray(r);
  },
  border: uy,
  outline: uy
};
var uv = {};
let uw = /^(?:\+|(-))?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/;
let ux = /^([\+\-])?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/;
let uS = new Set(["Dimension", "Hash", "Identifier", "Number", "Raw", "UnicodeRange"]);
function uC(e, t) {
  let r = t && null !== t.prev && uS.has(t.prev.data.type) ? ux : uw;
  ("" === (e = String(e).replace(r, "$1$2$3")) || "-" === e) && (e = "0");
  return e;
}
uv.Number = function (e) {
  e.value = uC(e.value);
};
uv.packNumber = uC;
let uA = new Set(["calc", "min", "max", "clamp"]);
let uT = new Set(["px", "mm", "cm", "in", "pt", "pc", "em", "ex", "ch", "rem", "vh", "vw", "vmin", "vmax", "vm"]);
let uE = new Set(["width", "min-width", "max-width", "height", "min-height", "max-height", "flex", "-ms-flex"]);
var uP = {};
let uL = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgrey: "a9a9a9",
  darkgreen: "006400",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  grey: "808080",
  green: "008000",
  greenyellow: "adff2f",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgrey: "d3d3d3",
  lightgreen: "90ee90",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
let uD = {
  8e5: "maroon",
  800080: "purple",
  808e3: "olive",
  808080: "gray",
  "00ffff": "cyan",
  f0ffff: "azure",
  f5f5dc: "beige",
  ffe4c4: "bisque",
  "000000": "black",
  "0000ff": "blue",
  a52a2a: "brown",
  ff7f50: "coral",
  ffd700: "gold",
  "008000": "green",
  "4b0082": "indigo",
  fffff0: "ivory",
  f0e68c: "khaki",
  "00ff00": "lime",
  faf0e6: "linen",
  "000080": "navy",
  ffa500: "orange",
  da70d6: "orchid",
  cd853f: "peru",
  ffc0cb: "pink",
  dda0dd: "plum",
  f00: "red",
  ff0000: "red",
  fa8072: "salmon",
  a0522d: "sienna",
  c0c0c0: "silver",
  fffafa: "snow",
  d2b48c: "tan",
  "008080": "teal",
  ff6347: "tomato",
  ee82ee: "violet",
  f5deb3: "wheat",
  ffffff: "white",
  ffff00: "yellow"
};
function uN(e, t, r) {
  return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function uO(e, t, r, n) {
  let a;
  let i;
  let o;
  if (0 === t) a = i = o = r;else {
    let n = r < .5 ? r * (1 + t) : r + t - r * t;
    let s = 2 * r - n;
    a = uN(s, n, e + 1 / 3);
    i = uN(s, n, e);
    o = uN(s, n, e - 1 / 3);
  }
  return [Math.round(255 * a), Math.round(255 * i), Math.round(255 * o), n];
}
function uM(e) {
  return 1 === (e = e.toString(16)).length ? "0" + e : e;
}
function uz(e, t, r) {
  let n = e.head;
  let a = [];
  let i = !1;
  for (; null !== n;) {
    let {
      type,
      value
    } = n.data;
    switch (type) {
      case "Number":
      case "Percentage":
        if (i) return;
        i = !0;
        a.push({
          type,
          value: Number(value)
        });
        break;
      case "Operator":
        if ("," === value) {
          if (!i) return;
          i = !1;
        } else if (i || "+" !== value) return;
        break;
      default:
        return;
    }
    n = n.next;
  }
  if (a.length === t) {
    if (4 === a.length) {
      if ("Number" !== a[3].type) return;
      a[3].type = "Alpha";
    }
    if (r) {
      if (a[0].type !== a[1].type || a[0].type !== a[2].type) return;
    } else {
      if ("Number" !== a[0].type || "Percentage" !== a[1].type || "Percentage" !== a[2].type) return;
      a[0].type = "Angle";
    }
    return a.map(function (e) {
      let t = Math.max(0, e.value);
      switch (e.type) {
        case "Number":
          t = Math.min(t, 255);
          break;
        case "Percentage":
          if (t = Math.min(t, 100) / 100, !r) return t;
          t *= 255;
          break;
        case "Angle":
          return (t % 360 + 360) % 360 / 360;
        case "Alpha":
          return Math.min(t, 1);
      }
      return Math.round(t);
    });
  }
}
function uI(e, t) {
  let r = e.value.toLowerCase();
  6 === r.length && r[0] === r[1] && r[2] === r[3] && r[4] === r[5] && (r = r[0] + r[2] + r[4]);
  uD[r] ? t.data = {
    type: "Identifier",
    loc: e.loc,
    name: uD[r]
  } : e.value = r;
}
uP.compressFunction = function (e, t) {
  let r;
  let n = e.name;
  if ("rgba" === n || "hsla" === n) {
    if (!(r = uz(e.children, 4, "rgba" === n))) return;
    if ("hsla" === n && (r = uO(...r), e.name = "rgba"), 0 === r[3]) {
      let n = this.$$function && this.$$function.name;
      if (0 === r[0] && 0 === r[1] && 0 === r[2] || !/^(?:to|from|color-stop)$|gradient$/i.test(n)) {
        t.data = {
          type: "Identifier",
          loc: e.loc,
          name: "transparent"
        };
        return;
      }
    }
    if (1 !== r[3]) {
      e.children.forEach((e, t, n) => {
        if ("Operator" === e.type) {
          "," !== e.value && n.remove(t);
          return;
        }
        t.data = {
          type: "Number",
          loc: e.loc,
          value: uv.packNumber(r.shift())
        };
      });
      return;
    }
    n = "rgb";
  }
  if ("hsl" === n) {
    if (!(r = r || uz(e.children, 3, !1))) return;
    r = uO(...r);
    n = "rgb";
  }
  if ("rgb" === n) {
    if (!(r = r || uz(e.children, 3, !0))) return;
    t.data = {
      type: "Hash",
      loc: e.loc,
      value: uM(r[0]) + uM(r[1]) + uM(r[2])
    };
    uI(t.data, t);
  }
};
uP.compressHex = uI;
uP.compressIdent = function (e, t) {
  if (null === this.declaration) return;
  let r = e.name.toLowerCase();
  if (uL.hasOwnProperty(r) && oA.lexer.matchDeclaration(this.declaration).isType(e, "color")) {
    let n = uL[r];
    n.length + 1 <= r.length ? t.data = {
      type: "Hash",
      loc: e.loc,
      value: n
    } : ("grey" === r && (r = "gray"), e.name = r);
  }
};
let uR = {
  Atrule: function (e) {
    "keyframes" === oA.keyword(e.name).basename && ug(e);
  },
  AttributeSelector: function (e) {
    var t;
    let r = e.value;
    r && "String" === r.type && "" !== (t = r.value) && "-" !== t && !ub.test(t) && (e.value = {
      type: "Identifier",
      loc: r.loc,
      name: r.value
    });
  },
  Value: function (e) {
    if (!this.declaration) return;
    let t = oA.property(this.declaration.property);
    uk.hasOwnProperty(t.basename) && uk[t.basename](e);
  },
  Dimension: function (e, t) {
    let r = uv.packNumber(e.value);
    if (e.value = r, "0" === r && null !== this.declaration && null === this.atrulePrelude) {
      let n = e.unit.toLowerCase();
      if (!uT.has(n) || "-ms-flex" === this.declaration.property || "flex" === this.declaration.property || this.$$function && uA.has(this.$$function.name)) return;
      t.data = {
        type: "Number",
        loc: e.loc,
        value: r
      };
    }
  },
  Percentage: function (e, t) {
    e.value = uv.packNumber(e.value);
    "0" !== e.value || !this.declaration || uE.has(this.declaration.property) || (t.data = {
      type: "Number",
      loc: e.loc,
      value: e.value
    }, oA.lexer.matchDeclaration(this.declaration).isType(t.data, "length") || (t.data = e));
  },
  Number: uv.Number,
  Url: function (e) {
    e.value = e.value.replace(/\\/g, "/");
  },
  Hash: uP.compressHex,
  Identifier: uP.compressIdent,
  Function: uP.compressFunction
};
class uq {
  constructor() {
    this.map = new Map();
  }
  resolve(e) {
    let t = this.map.get(e);
    void 0 === t && (t = this.map.size + 1, this.map.set(e, t));
    return t;
  }
}
function uB(e) {
  return ("Raw" === e.type ? oA.parse(e.value, {
    context: "selectorList"
  }) : e).children.reduce((e, t) => function (e, t) {
    for (let r = 0; r < 3; r++) if (e[r] !== t[r]) return e[r] > t[r] ? e : t;
    return e;
  }(uj(t), e), [0, 0, 0]);
}
function uj(e) {
  let t = 0;
  let r = 0;
  let n = 0;
  e.children.forEach(e => {
    switch (e.type) {
      case "IdSelector":
        t++;
        break;
      case "ClassSelector":
      case "AttributeSelector":
        r++;
        break;
      case "PseudoClassSelector":
        switch (e.name.toLowerCase()) {
          case "not":
          case "has":
          case "is":
          case "matches":
          case "-webkit-any":
          case "-moz-any":
            {
              let [a, i, o] = uB(e.children.first);
              t += a;
              r += i;
              n += o;
              break;
            }
          case "nth-child":
          case "nth-last-child":
            {
              let a = e.children.first;
              if ("Nth" === a.type && a.selector) {
                let [e, i, o] = uB(a.selector);
                t += e;
                r += i + 1;
                n += o;
              } else r++;
              break;
            }
          case "where":
            break;
          case "before":
          case "after":
          case "first-line":
          case "first-letter":
            n++;
            break;
          default:
            r++;
        }
        break;
      case "TypeSelector":
        !e.name.endsWith("*") && n++;
        break;
      case "PseudoElementSelector":
        n++;
    }
  });
  return [t, r, n];
}
let uF = new Set(["first-letter", "first-line", "after", "before"]);
let u_ = new Set(["link", "visited", "hover", "active", "first-letter", "first-line", "after", "before"]);
var uU = function (e, t) {
  let r = new Set();
  e.prelude.children.forEach(function (e) {
    let n = "*";
    let a = 0;
    e.children.forEach(function (i) {
      switch (i.type) {
        case "ClassSelector":
          if (t && t.scopes) {
            let r = t.scopes[i.name] || 0;
            if (0 !== a && r !== a) throw Error("Selector can't has classes from different scopes: " + oA.generate(e));
            a = r;
          }
          break;
        case "PseudoClassSelector":
          {
            let e = i.name.toLowerCase();
            u_.has(e) || r.add(`:${e}`);
            break;
          }
        case "PseudoElementSelector":
          {
            let e = i.name.toLowerCase();
            uF.has(e) || r.add(`::${e}`);
            break;
          }
        case "TypeSelector":
          n = i.name.toLowerCase();
          break;
        case "AttributeSelector":
          i.flags && r.add(`[${i.flags.toLowerCase()}]`);
          break;
        case "Combinator":
          n = "*";
      }
    });
    e.compareMarker = uj(e).toString();
    e.id = null;
    e.id = oA.generate(e);
    a && (e.compareMarker += ":" + a);
    "*" !== n && (e.compareMarker += "," + n);
  });
  e.pseudoSignature = r.size > 0 && [...r].sort().join(",");
};
let uG = function () {
  let e = new uq();
  return function (t) {
    let r = oA.generate(t);
    t.id = e.resolve(r);
    t.length = r.length;
    t.fingerprint = null;
    return t;
  };
};
let {
  hasOwnProperty: _hasOwnProperty0
} = Object.prototype;
function uW(e, t, r, n) {
  let a = t.data;
  let i = oA.keyword(a.name).basename;
  let o = a.name.toLowerCase() + "/" + (a.prelude ? a.prelude.id : null);
  _hasOwnProperty0.call(e, i) || (e[i] = Object.create(null));
  n && delete e[i][o];
  _hasOwnProperty0.call(e[i], o) || (e[i][o] = new oA.List());
  e[i][o].append(r.remove(t));
}
function uV(e) {
  return "Atrule" === e.type && "media" === e.name;
}
function u$(e, t, r) {
  if (!uV(e)) return;
  let n = t.prev && t.prev.data;
  n && uV(n) && e.prelude && n.prelude && e.prelude.id === n.prelude.id && (n.block.children.appendList(e.block.children), r.remove(t));
}
var uX = {};
let {
  hasOwnProperty: _hasOwnProperty3
} = Object.prototype;
function uK(e, t) {
  let r = e.head;
  for (; null !== r;) {
    let e = t.head;
    for (; null !== e;) {
      if (r.data.compareMarker === e.data.compareMarker) return !0;
      e = e.next;
    }
    r = r.next;
  }
  return !1;
}
function uQ(e, t, r) {
  let n = e.prelude.children;
  let a = e.block.children;
  r.prevUntil(t.prev, function (i) {
    if ("Rule" !== i.type) return uX.unsafeToSkipNode.call(n, i);
    let o = i.prelude.children;
    let s = i.block.children;
    if (e.pseudoSignature === i.pseudoSignature) {
      if (uX.isEqualSelectors(o, n)) {
        s.appendList(a);
        r.remove(t);
        return !0;
      }
      if (uX.isEqualDeclarations(a, s)) {
        uX.addSelectors(o, n);
        r.remove(t);
        return !0;
      }
    }
    return uX.hasSimilarSelectors(n, o);
  });
}
function uZ(e, t, r) {
  let n = e.prelude.children;
  for (; n.head !== n.tail;) {
    let a = new oA.List();
    a.insert(n.remove(n.head));
    r.insert(r.createItem({
      type: "Rule",
      loc: e.loc,
      prelude: {
        type: "SelectorList",
        loc: e.prelude.loc,
        children: a
      },
      block: {
        type: "Block",
        loc: e.block.loc,
        children: e.block.children.copy()
      },
      pseudoSignature: e.pseudoSignature
    }), t);
  }
}
uX.addSelectors = function (e, t) {
  t.forEach(t => {
    let r = t.id;
    let n = e.head;
    for (; n;) {
      let e = n.data.id;
      if (e === r) return;
      if (e > r) break;
      n = n.next;
    }
    e.insert(e.createItem(t), n);
  });
  return e;
};
uX.compareDeclarations = function (e, t) {
  let r = {
    eq: [],
    ne1: [],
    ne2: [],
    ne2overrided: []
  };
  let n = Object.create(null);
  let a = Object.create(null);
  for (let e = t.head; e; e = e.next) a[e.data.id] = !0;
  for (let t = e.head; t; t = t.next) {
    let e = t.data;
    e.fingerprint && (n[e.fingerprint] = e.important);
    a[e.id] ? (a[e.id] = !1, r.eq.push(e)) : r.ne1.push(e);
  }
  for (let e = t.head; e; e = e.next) {
    let t = e.data;
    a[t.id] && (_hasOwnProperty3.call(n, t.fingerprint) && (n[t.fingerprint] || !t.important) || r.ne2.push(t), r.ne2overrided.push(t));
  }
  return r;
};
uX.hasSimilarSelectors = uK;
uX.isEqualDeclarations = function (e, t) {
  let r = e.head;
  let n = t.head;
  for (; null !== r && null !== n && r.data.id === n.data.id;) {
    r = r.next;
    n = n.next;
  }
  return null === r && null === n;
};
uX.isEqualSelectors = function (e, t) {
  let r = e.head;
  let n = t.head;
  for (; null !== r && null !== n && r.data.id === n.data.id;) {
    r = r.next;
    n = n.next;
  }
  return null === r && null === n;
};
uX.unsafeToSkipNode = function e(t) {
  switch (t.type) {
    case "Rule":
      return uK(t.prelude.children, this);
    case "Atrule":
      if (t.block) return t.block.children.some(e, this);
      break;
    case "Declaration":
      return !1;
  }
  return !0;
};
let uJ = ["top", "right", "bottom", "left"];
let u0 = {
  "margin-top": "top",
  "margin-right": "right",
  "margin-bottom": "bottom",
  "margin-left": "left",
  "padding-top": "top",
  "padding-right": "right",
  "padding-bottom": "bottom",
  "padding-left": "left",
  "border-top-color": "top",
  "border-right-color": "right",
  "border-bottom-color": "bottom",
  "border-left-color": "left",
  "border-top-width": "top",
  "border-right-width": "right",
  "border-bottom-width": "bottom",
  "border-left-width": "left",
  "border-top-style": "top",
  "border-right-style": "right",
  "border-bottom-style": "bottom",
  "border-left-style": "left"
};
let u1 = {
  margin: "margin",
  "margin-top": "margin",
  "margin-right": "margin",
  "margin-bottom": "margin",
  "margin-left": "margin",
  padding: "padding",
  "padding-top": "padding",
  "padding-right": "padding",
  "padding-bottom": "padding",
  "padding-left": "padding",
  "border-color": "border-color",
  "border-top-color": "border-color",
  "border-right-color": "border-color",
  "border-bottom-color": "border-color",
  "border-left-color": "border-color",
  "border-width": "border-width",
  "border-top-width": "border-width",
  "border-right-width": "border-width",
  "border-bottom-width": "border-width",
  "border-left-width": "border-width",
  "border-style": "border-style",
  "border-top-style": "border-style",
  "border-right-style": "border-style",
  "border-bottom-style": "border-style",
  "border-left-style": "border-style"
};
class u2 {
  constructor(e) {
    this.name = e;
    this.loc = null;
    this.iehack = void 0;
    this.sides = {
      top: null,
      right: null,
      bottom: null,
      left: null
    };
  }
  getValueSequence(e, t) {
    let r = [];
    let n = "";
    return !("Value" !== e.value.type || e.value.children.some(function (t) {
      let a = !1;
      switch (t.type) {
        case "Identifier":
          switch (t.name) {
            case "\\0":
            case "\\9":
              n = t.name;
              return;
            case "inherit":
            case "initial":
            case "unset":
            case "revert":
              a = t.name;
          }
          break;
        case "Dimension":
          switch (t.unit) {
            case "rem":
            case "vw":
            case "vh":
            case "vmin":
            case "vmax":
            case "vm":
              a = t.unit;
          }
          break;
        case "Hash":
        case "Number":
        case "Percentage":
          break;
        case "Function":
          if ("var" === t.name) return !0;
          a = t.name;
          break;
        default:
          return !0;
      }
      r.push({
        node: t,
        special: a,
        important: e.important
      });
    })) && !(r.length > t) && ("string" != typeof this.iehack || this.iehack === n) && (this.iehack = n, r);
  }
  canOverride(e, t) {
    let r = this.sides[e];
    return !r || t.important && !r.important;
  }
  add(e, t) {
    return !!function () {
      let r = this.sides;
      let n = u0[e];
      if (n) {
        if (n in r == !1) return !1;
        let e = this.getValueSequence(t, 1);
        if (!e || !e.length) return !1;
        for (let t in r) if (null !== r[t] && r[t].special !== e[0].special) return !1;
        return !this.canOverride(n, e[0]) || (r[n] = e[0], !0);
      }
      if (e === this.name) {
        let e = this.getValueSequence(t, 4);
        if (!e || !e.length) return !1;
        switch (e.length) {
          case 1:
            e[1] = e[0];
            e[2] = e[0];
            e[3] = e[0];
            break;
          case 2:
            e[2] = e[0];
            e[3] = e[1];
            break;
          case 3:
            e[3] = e[1];
        }
        for (let t = 0; t < 4; t++) for (let n in r) if (null !== r[n] && r[n].special !== e[t].special) return !1;
        for (let t = 0; t < 4; t++) this.canOverride(uJ[t], e[t]) && (r[uJ[t]] = e[t]);
        return !0;
      }
    }.call(this) && (this.loc || (this.loc = t.loc), !0);
  }
  isOkToMinimize() {
    let e = this.sides.top;
    let t = this.sides.right;
    let r = this.sides.bottom;
    let n = this.sides.left;
    if (e && t && r && n) {
      let a = e.important + t.important + r.important + n.important;
      return 0 === a || 4 === a;
    }
    return !1;
  }
  getValue() {
    let e = new oA.List();
    let t = this.sides;
    let r = [t.top, t.right, t.bottom, t.left];
    let n = [oA.generate(t.top.node), oA.generate(t.right.node), oA.generate(t.bottom.node), oA.generate(t.left.node)];
    n[3] === n[1] && (r.pop(), n[2] === n[0] && (r.pop(), n[1] === n[0] && r.pop()));
    for (let t = 0; t < r.length; t++) e.appendData(r[t].node);
    this.iehack && e.appendData({
      type: "Identifier",
      loc: null,
      name: this.iehack
    });
    return {
      type: "Value",
      loc: null,
      children: e
    };
  }
  getDeclaration() {
    return {
      type: "Declaration",
      loc: this.loc,
      important: this.sides.top.important,
      property: this.name,
      value: this.getValue()
    };
  }
}
function u3(e, t, r, n) {
  let a = e.block.children;
  let i = e.prelude.children.first.id;
  e.block.children.forEachRight(function (e, o) {
    let s;
    let l;
    let c = e.property;
    if (!u1.hasOwnProperty(c)) return;
    let u = u1[c];
    if ((!n || i === n) && u in t && (l = 2, s = t[u]), (!s || !s.add(c, e)) && (l = 1, !(s = new u2(u)).add(c, e))) {
      n = null;
      return;
    }
    t[u] = s;
    r.push({
      operation: l,
      block: a,
      item: o,
      shorthand: s
    });
    n = i;
  });
  return n;
}
let u4 = 1;
let u5 = new Set(["src"]);
let u8 = {
  display: /table|ruby|flex|-(flex)?box$|grid|contents|run-in/i,
  "text-align": /^(start|end|match-parent|justify-all)$/i
};
let u6 = {
  cursor: ["auto", "crosshair", "default", "move", "text", "wait", "help", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "pointer", "progress", "not-allowed", "no-drop", "vertical-text", "all-scroll", "col-resize", "row-resize"],
  overflow: ["hidden", "visible", "scroll", "auto"],
  position: ["static", "relative", "absolute", "fixed"]
};
let u9 = {
  "border-width": ["border"],
  "border-style": ["border"],
  "border-color": ["border"],
  "border-top": ["border"],
  "border-right": ["border"],
  "border-bottom": ["border"],
  "border-left": ["border"],
  "border-top-width": ["border-top", "border-width", "border"],
  "border-right-width": ["border-right", "border-width", "border"],
  "border-bottom-width": ["border-bottom", "border-width", "border"],
  "border-left-width": ["border-left", "border-width", "border"],
  "border-top-style": ["border-top", "border-style", "border"],
  "border-right-style": ["border-right", "border-style", "border"],
  "border-bottom-style": ["border-bottom", "border-style", "border"],
  "border-left-style": ["border-left", "border-style", "border"],
  "border-top-color": ["border-top", "border-color", "border"],
  "border-right-color": ["border-right", "border-color", "border"],
  "border-bottom-color": ["border-bottom", "border-color", "border"],
  "border-left-color": ["border-left", "border-color", "border"],
  "margin-top": ["margin"],
  "margin-right": ["margin"],
  "margin-bottom": ["margin"],
  "margin-left": ["margin"],
  "padding-top": ["padding"],
  "padding-right": ["padding"],
  "padding-bottom": ["padding"],
  "padding-left": ["padding"],
  "font-style": ["font"],
  "font-variant": ["font"],
  "font-weight": ["font"],
  "font-size": ["font"],
  "font-family": ["font"],
  "list-style-type": ["list-style"],
  "list-style-position": ["list-style"],
  "list-style-image": ["list-style"]
};
function u7(e, t, r) {
  let n = oA.property(e).basename;
  if ("background" === n) return e + ":" + oA.generate(t.value);
  let a = t.id;
  let i = r[a];
  if (!i) {
    switch (t.value.type) {
      case "Value":
        let e = {};
        let o = "";
        let s = "";
        let l = !1;
        t.value.children.forEach(function t(r) {
          switch (r.type) {
            case "Value":
            case "Brackets":
            case "Parentheses":
              r.children.forEach(t);
              break;
            case "Raw":
              l = !0;
              break;
            case "Identifier":
              {
                let {
                  name
                } = r;
                o || (o = oA.keyword(name).vendor);
                /\\[09]/.test(name) && (s = RegExp.lastMatch);
                u6.hasOwnProperty(n) ? -1 === u6[n].indexOf(name) && (e[name] = !0) : u8.hasOwnProperty(n) && u8[n].test(name) && (e[name] = !0);
                break;
              }
            case "Function":
              {
                let {
                  name
                } = r;
                o || (o = oA.keyword(name).vendor);
                "rect" !== name || r.children.some(e => "Operator" === e.type && "," === e.value) || (n = "rect-backward");
                e[name + "()"] = !0;
                r.children.forEach(t);
                break;
              }
            case "Dimension":
              {
                let {
                  unit
                } = r;
                switch (/\\[09]/.test(unit) && (s = RegExp.lastMatch), unit) {
                  case "rem":
                  case "vw":
                  case "vh":
                  case "vmin":
                  case "vmax":
                  case "vm":
                    e[unit] = !0;
                }
              }
          }
        });
        i = l ? "!" + u4++ : "!" + Object.keys(e).sort() + "|" + s + o;
        break;
      case "Raw":
        i = "!" + t.value.value;
        break;
      default:
        i = oA.generate(t.value);
    }
    r[a] = i;
  }
  return e + i;
}
function de(e, t, r, n, a) {
  let i = e.block.children;
  i.forEachRight(function (e, t) {
    let {
      property
    } = e;
    let o = u7(property, e, a);
    let s = n[o];
    s && !u5.has(property) ? e.important && !s.item.data.important ? (n[o] = {
      block: i,
      item: t
    }, s.block.remove(s.item)) : i.remove(t) : function (e, t, r) {
      let n = oA.property(t.property);
      if (u9.hasOwnProperty(n.basename)) for (let a of u9[n.basename]) {
        let i = u7(n.prefix + a, t, r);
        let o = e.hasOwnProperty(i) ? e[i] : null;
        if (o && (!t.important || o.item.data.important)) return o;
      }
    }(n, e, a) ? i.remove(t) : (e.fingerprint = o, n[o] = {
      block: i,
      item: t
    });
  });
  i.isEmpty && r.remove(t);
}
function dt(e, t, r) {
  let n = e.prelude.children;
  let a = e.block.children;
  let i = n.first.compareMarker;
  let o = {};
  r.nextUntil(t.next, function (t, s) {
    if ("Rule" !== t.type) return uX.unsafeToSkipNode.call(n, t);
    if (e.pseudoSignature !== t.pseudoSignature) return !0;
    let l = t.prelude.children.head;
    let c = t.block.children;
    let u = l.data.compareMarker;
    if (u in o) return !0;
    if (n.head === n.tail && n.first.id === l.data.id) {
      a.appendList(c);
      r.remove(s);
      return;
    }
    if (uX.isEqualDeclarations(a, c)) {
      let e = l.data.id;
      n.some((t, r) => e < t.id ? (n.insert(l, r), !0) : r.next ? void 0 : (n.insert(l), !0));
      r.remove(s);
      return;
    }
    if (u === i) return !0;
    o[u] = !0;
  });
}
function dr(e) {
  return e.reduce((e, t) => e + t.id.length + 1, 0) - 1;
}
function dn(e) {
  let t = 0;
  for (let r of e) t += r.length;
  return t + e.length - 1;
}
function da(e, t, r) {
  let n = null !== this.block && this.block.avoidRulesMerge;
  let a = e.prelude.children;
  let i = e.block;
  let o = Object.create(null);
  let s = !0;
  let l = !0;
  r.prevUntil(t.prev, function (c, u) {
    let d = c.block;
    let h = c.type;
    if ("Rule" !== h) {
      let e = uX.unsafeToSkipNode.call(a, c);
      !e && "Atrule" === h && d && oA.walk(d, {
        visit: "Rule",
        enter(e) {
          e.prelude.children.forEach(e => {
            o[e.compareMarker] = !0;
          });
        }
      });
      return e;
    }
    if (e.pseudoSignature !== c.pseudoSignature) return !0;
    let p = c.prelude.children;
    if (!(l = !p.some(e => e.compareMarker in o)) && !s) return !0;
    if (s && uX.isEqualSelectors(p, a)) {
      d.children.appendList(i.children);
      r.remove(t);
      return !0;
    }
    let m = uX.compareDeclarations(i.children, d.children);
    if (m.eq.length) {
      if (!m.ne1.length && !m.ne2.length) {
        l && (uX.addSelectors(a, p), r.remove(u));
        return !0;
      }
      if (!n) {
        if (m.ne1.length && !m.ne2.length) {
          let e = dr(a);
          let t = dn(m.eq);
          s && e < t && (uX.addSelectors(p, a), i.children.fromArray(m.ne1));
        } else if (!m.ne1.length && m.ne2.length) {
          let e = dr(p);
          let t = dn(m.eq);
          l && e < t && (uX.addSelectors(a, p), d.children.fromArray(m.ne2));
        } else {
          let n = {
            type: "SelectorList",
            loc: null,
            children: uX.addSelectors(p.copy(), a)
          };
          let o = dr(n.children) + 2;
          if (dn(m.eq) >= o) {
            let a = r.createItem({
              type: "Rule",
              loc: null,
              prelude: n,
              block: {
                type: "Block",
                loc: null,
                children: new oA.List().fromArray(m.eq)
              },
              pseudoSignature: e.pseudoSignature
            });
            i.children.fromArray(m.ne1);
            d.children.fromArray(m.ne2overrided);
            s ? r.insert(a, u) : r.insert(a, t);
            return !0;
          }
        }
      }
    }
    s && (s = !p.some(e => a.some(t => t.compareMarker === e.compareMarker)));
    p.forEach(e => {
      o[e.compareMarker] = !0;
    });
  });
}
let di = function (e, t) {
  let r = uG();
  oA.walk(e, {
    visit: "Rule",
    enter(e) {
      e.block.children.forEach(r);
      uU(e, t.usage);
    }
  });
  oA.walk(e, {
    visit: "Atrule",
    enter(e) {
      e.prelude && (e.prelude.id = null, e.prelude.id = oA.generate(e.prelude));
      "keyframes" === oA.keyword(e.name).basename && (e.block.avoidRulesMerge = !0, e.block.children.forEach(function (e) {
        e.prelude.children.forEach(function (e) {
          e.compareMarker = e.id;
        });
      }));
    }
  });
  return {
    declaration: r
  };
};
let ds = function (e, t) {
  !function (e, t) {
    let r = Object.create(null);
    let n = null;
    for (let a in e.children.forEach(function (e, a, i) {
      if ("Atrule" === e.type) {
        let o = oA.keyword(e.name).basename;
        switch (o) {
          case "keyframes":
            uW(r, a, i, !0);
            return;
          case "media":
            if (t.forceMediaMerge) {
              uW(r, a, i, !1);
              return;
            }
        }
        null === n && "charset" !== o && "import" !== o && (n = a);
      } else null === n && (n = a);
    }), r) for (let t in r[a]) e.children.insertList(r[a][t], "media" === a ? null : n);
  }(e, t);
  oA.walk(e, {
    visit: "Atrule",
    reverse: !0,
    enter: u$
  });
};
let dl = function (e) {
  oA.walk(e, {
    visit: "Rule",
    enter: uQ
  });
};
let dc = function (e) {
  oA.walk(e, {
    visit: "Rule",
    reverse: !0,
    enter: uZ
  });
};
let du = function (e, t) {
  let r = {};
  let n = [];
  oA.walk(e, {
    visit: "Rule",
    reverse: !0,
    enter(e) {
      let t;
      let a;
      let i = this.block || this.stylesheet;
      let o = (e.pseudoSignature || "") + "|" + e.prelude.children.first.id;
      r.hasOwnProperty(i.id) ? t = r[i.id] : (t = {
        lastShortSelector: null
      }, r[i.id] = t);
      t.hasOwnProperty(o) ? a = t[o] : (a = {}, t[o] = a);
      t.lastShortSelector = u3.call(this, e, a, n, t.lastShortSelector);
    }
  });
  (function (e, t) {
    e.forEach(function (e) {
      let r = e.shorthand;
      r.isOkToMinimize() && (1 === e.operation ? e.item.data = t(r.getDeclaration()) : e.block.remove(e.item));
    });
  })(n, t.declaration);
};
let dd = function (e) {
  let t = {};
  let r = Object.create(null);
  oA.walk(e, {
    visit: "Rule",
    reverse: !0,
    enter(e, n, a) {
      let i;
      let o;
      let s = this.block || this.stylesheet;
      let l = (e.pseudoSignature || "") + "|" + e.prelude.children.first.id;
      t.hasOwnProperty(s.id) ? i = t[s.id] : (i = {}, t[s.id] = i);
      i.hasOwnProperty(l) ? o = i[l] : (o = {}, i[l] = o);
      de.call(this, e, n, a, o, r);
    }
  });
};
let dh = function (e) {
  oA.walk(e, {
    visit: "Rule",
    enter: dt
  });
};
let dp = function (e) {
  oA.walk(e, {
    visit: "Rule",
    reverse: !0,
    enter: da
  });
};
let dm = function (e, t) {
  oA.walk(e, {
    leave(e, r, n) {
      uf.hasOwnProperty(e.type) && uf[e.type].call(this, e, r, n, t);
    }
  });
};
let df = function (e) {
  oA.walk(e, {
    leave(e, t, r) {
      uR.hasOwnProperty(e.type) && uR[e.type].call(this, e, t, r);
    }
  });
};
let dg = function (e, t) {
  let r = di(e, t);
  t.logger("prepare", e);
  ds(e, t);
  t.logger("mergeAtrule", e);
  dl(e);
  t.logger("initialMergeRuleset", e);
  dc(e);
  t.logger("disjoinRuleset", e);
  du(e, r);
  t.logger("restructShorthand", e);
  dd(e);
  t.logger("restructBlock", e);
  dh(e);
  t.logger("mergeRuleset", e);
  dp(e);
  t.logger("restructRuleset", e);
};
function db(e) {
  let t = oA.string.encode(e, !0);
  let r = oA.string.encode(e);
  return t.length < r.length ? t : r;
}
let {
  lexer: _lexer2,
  tokenize: _tokenize2,
  parse: _parse2,
  generate: _generate2,
  walk: _walk2,
  find: _find2,
  findLast: _findLast2,
  findAll: _findAll2,
  fromPlainObject: _fromPlainObject2,
  toPlainObject: _toPlainObject2
} = oA.fork({
  node: {
    String: {
      generate(e) {
        this.token(oA.tokenTypes.String, db(e.value));
      }
    },
    Url: {
      generate(e) {
        let t = oA.url.encode(e.value);
        let r = db(e.value);
        this.token(oA.tokenTypes.Url, t.length <= r.length + 5 ? t : "url(" + r + ")");
      }
    }
  }
});
oC.compress = function (e, t) {
  var r;
  var n;
  var a;
  let i;
  let o;
  let s;
  let l;
  e = e || {
    type: "StyleSheet",
    loc: null,
    children: new oA.List()
  };
  let c = {
    logger: "function" == typeof (t = t || {}).logger ? t.logger : function () {},
    restructuring: "restructure" in (r = t) ? r.restructure : !("restructuring" in r) || r.restructuring,
    forceMediaMerge: !!t.forceMediaMerge,
    usage: !!t.usage && ul.buildIndex(t.usage)
  };
  let u = new oA.List();
  "boolean" == typeof (l = "comments" in (n = t) ? n.comments : "exclamation") ? l = !!l && "exclamation" : "exclamation" !== l && "first-exclamation" !== l && (l = !1);
  let d = l;
  let h = !0;
  let p = 1;
  (t.clone && (e = oA.clone(e)), "StyleSheet" === e.type) ? (i = e.children, e.children = u) : (a = e, i = new oA.List().appendData({
    type: "Rule",
    loc: null,
    prelude: {
      type: "SelectorList",
      loc: null,
      children: new oA.List().appendData({
        type: "Selector",
        loc: null,
        children: new oA.List().appendData({
          type: "TypeSelector",
          loc: null,
          name: "x"
        })
      })
    },
    block: a
  }));
  do {
    if (function (e, t, r, n) {
      n.logger(`Compress block #${r}`, null, !0);
      let a = 1;
      "StyleSheet" === e.type && (e.firstAtrulesAllowed = t, e.id = a++);
      oA.walk(e, {
        visit: "Atrule",
        enter(e) {
          null !== e.block && (e.block.id = a++);
        }
      });
      n.logger("init", e);
      dm(e, n);
      n.logger("clean", e);
      df(e);
      n.logger("replace", e);
      n.restructuring && dg(e, n);
    }((o = function (e, t) {
      let r;
      let n = new oA.List();
      let a = !1;
      e.nextUntil(e.head, (e, i, o) => {
        if ("Comment" === e.type) {
          if (!t || "!" !== e.value.charAt(0)) {
            o.remove(i);
            return;
          }
          return !!a || !!r || (o.remove(i), void (r = e));
        }
        "WhiteSpace" !== e.type && (a = !0);
        n.insert(o.remove(i));
      });
      return {
        comment: r,
        stylesheet: {
          type: "StyleSheet",
          loc: null,
          children: n
        }
      };
    }(i, !!d)).stylesheet, h, p++, c), s = o.stylesheet.children, o.comment && (u.isEmpty || u.insert(oA.List.createItem({
      type: "Raw",
      value: "\n"
    })), u.insert(oA.List.createItem(o.comment)), s.isEmpty || u.insert(oA.List.createItem({
      type: "Raw",
      value: "\n"
    }))), h && !s.isEmpty) {
      let e = s.last;
      ("Atrule" !== e.type || "import" !== e.name && "charset" !== e.name) && (h = !1);
    }
    "exclamation" !== d && (d = !1);
    u.appendList(s);
  } while (!i.isEmpty);
  return {
    ast: e
  };
};
oC.specificity = uj;
oC.find = _find2;
oC.findAll = _findAll2;
oC.findLast = _findLast2;
oC.fromPlainObject = _fromPlainObject2;
oC.generate = _generate2;
oC.lexer = _lexer2;
oC.parse = _parse2;
oC.toPlainObject = _toPlainObject2;
oC.tokenize = _tokenize2;
oC.walk = _walk2;
var dP = {};
dP.processSelector = uU;
dP.addSelectors = uX.addSelectors;
dP.compareDeclarations = uX.compareDeclarations;
dP.hasSimilarSelectors = uX.hasSimilarSelectors;
dP.isEqualDeclarations = uX.isEqualDeclarations;
dP.isEqualSelectors = uX.isEqualSelectors;
dP.unsafeToSkipNode = uX.unsafeToSkipNode;
let {
  parse: _parse3,
  generate: _generate3,
  compress
} = oC;
function dO(e, t, r, n) {
  t.debug && console.error(`## ${e} done in %d ms
`, Date.now() - r);
  return n;
}
function dM(e, t, r) {
  Array.isArray(r) || (r = [r]);
  r.forEach(r => r(e, t));
}
function dz(e, t, r) {
  let n = (r = r || {}).filename || "<unknown>";
  let a = dO("parsing", r, Date.now(), _parse3(t, {
    context: e,
    filename: n,
    positions: !!r.sourceMap
  }));
  r.beforeCompress && dO("beforeCompress", r, Date.now(), dM(a, r, r.beforeCompress));
  let i = dO("compress", r, Date.now(), compress(a, function (e) {
    if ("function" != typeof (e = {
      ...e
    }).logger && e.debug) {
      var t;
      let r;
      e.logger = (t = e.debug, function (e, n) {
        let a = e;
        if (n && (a = `[${((Date.now() - r) / 1e3).toFixed(3)}s] ${a}`), t > 1 && n) {
          let e = _generate3(n);
          2 === t && e.length > 256 && (e = e.substr(0, 256) + "...");
          a += `
  ${e}
`;
        }
        console.error(a);
        r = Date.now();
      });
    }
    return e;
  }(r)));
  r.afterCompress && dO("afterCompress", r, Date.now(), dM(i, r, r.afterCompress));
  return r.sourceMap ? dO("generate(sourceMap: true)", r, Date.now(), (() => {
    let e = _generate3(i.ast, {
      sourceMap: !0
    });
    e.map._file = n;
    e.map.setSourceContent(n, t);
    return e;
  })()) : dO("generate", r, Date.now(), {
    css: _generate3(i.ast),
    map: null
  });
}
oS.version = void 0;
oS.syntax = oC;
oS.utils = dP;
oS.minify = function (e, t) {
  return dz("stylesheet", e, t);
};
oS.minifyBlock = function (e, t) {
  return dz("declarationList", e, t);
};
var dI = {};
let {
  syntax: {
    specificity
  }
} = oS;
let {
  visit: _visit2,
  matches
} = I;
let {
  attrsGroups: _attrsGroups3,
  inheritableAttrs: _inheritableAttrs2,
  presentationNonInheritableGroupAttrs: _presentationNonInheritableGroupAttrs
} = f;
let dU = rS.walk.skip;
let dG = (e, t) => {
  let r = [];
  e.block.children.forEach(e => {
    "Declaration" === e.type && r.push({
      name: e.property,
      value: rS.generate(e.value),
      important: !0 === e.important
    });
  });
  let n = [];
  rS.walk(e.prelude, e => {
    if ("Selector" === e.type) {
      let a = rS.clone(e);
      let i = !1;
      rS.walk(a, (e, t, r) => {
        "PseudoClassSelector" === e.type && (i = !0, r.remove(t));
      });
      n.push({
        specificity: specificity(e),
        dynamic: i || t,
        selector: rS.generate(a),
        declarations: r
      });
    }
  });
  return n;
};
let dH = (e, t) => {
  let r = [];
  let n = rS.parse(e, {
    parseValue: !1,
    parseAtrulePrelude: !1
  });
  rS.walk(n, e => "Rule" === e.type ? (r.push(...dG(e, t || !1)), dU) : "Atrule" === e.type ? ("keyframes" === e.name || "-webkit-keyframes" === e.name || rS.walk(e, e => {
    if ("Rule" === e.type) {
      r.push(...dG(e, t || !0));
      return dU;
    }
  }), dU) : void 0);
  return r;
};
let dW = e => {
  let t = [];
  let r = rS.parse(e, {
    context: "declarationList",
    parseValue: !1
  });
  rS.walk(r, e => {
    "Declaration" === e.type && t.push({
      name: e.property,
      value: rS.generate(e.value),
      important: !0 === e.important
    });
  });
  return t;
};
let dV = (e, t) => {
  let r = {};
  let n = new Map();
  for (let [e, a] of Object.entries(t.attributes)) _attrsGroups3.presentation.has(e) && (r[e] = {
    type: "static",
    inherited: !1,
    value: a
  }, n.set(e, !1));
  for (let {
    selector,
    declarations,
    dynamic
  } of e.rules) if (matches(t, selector)) for (let {
    name,
    value,
    important
  } of declarations) {
    let i = r[name];
    if (!i || "dynamic" !== i.type) {
      if (dynamic) {
        r[name] = {
          type: "dynamic",
          inherited: !1
        };
        continue;
      }
      (null == i || !0 === important || !1 === n.get(name)) && (r[name] = {
        type: "static",
        inherited: !1,
        value
      }, n.set(name, important));
    }
  }
  for (let {
    name,
    value,
    important
  } of null == t.attributes.style ? [] : dW(t.attributes.style)) {
    let t = r[name];
    t && "dynamic" === t.type || null != t && !0 !== important && !1 !== n.get(name) || (r[name] = {
      type: "static",
      inherited: !1,
      value
    }, n.set(name, important));
  }
  return r;
};
let d$ = (e, t) => {
  for (let r = 0; r < 4; r += 1) {
    if (e[r] < t[r]) return -1;
    if (e[r] > t[r]) return 1;
  }
  return 0;
};
dI.compareSpecificity = d$;
dI.collectStylesheet = e => {
  let t = [];
  let r = new Map();
  _visit2(e, {
    element: {
      enter: (e, n) => {
        if (r.set(e, n), "style" === e.name && (null == e.attributes.type || "" === e.attributes.type || "text/css" === e.attributes.type)) {
          let r = null != e.attributes.media && "all" !== e.attributes.media;
          for (let n of e.children) ("text" === n.type || "cdata" === n.type) && t.push(...dH(n.value, r));
        }
      }
    }
  });
  t.sort((e, t) => d$(e.specificity, t.specificity));
  return {
    rules: t,
    parents: r
  };
};
dI.computeStyle = (e, t) => {
  let {
    parents
  } = e;
  let n = dV(e, t);
  let a = parents.get(t);
  for (; null != a && "root" !== a.type;) {
    for (let [t, r] of Object.entries(dV(e, a))) null == n[t] && _inheritableAttrs2.has(t) && !_presentationNonInheritableGroupAttrs.has(t) && (n[t] = {
      ...r,
      inherited: !0
    });
    a = parents.get(a);
  }
  return n;
};
dI.includesAttrSelector = (e, t, r = null, n = !1) => {
  for (let a of "string" == typeof e ? tf.parse(e) : tf.parse(rS.generate(e.data))) if (a.some((e, i) => (!n || i !== a.length - 1 && !!tf.isTraversal(a[i + 1])) && "attribute" === e.type && e.name === t && (null == r || e.value === r))) return !0;
  return !1;
};
let {
  syntax: {
    specificity: _specificity
  }
} = oS;
let {
  visitSkip: _visitSkip,
  querySelectorAll: _querySelectorAll,
  detachNodeFromParent: _detachNodeFromParent10
} = I;
let {
  compareSpecificity,
  includesAttrSelector
} = dI;
let {
  attrsGroups: _attrsGroups4,
  pseudoClasses
} = f;
rx.name = "inlineStyles";
rx.description = "inline styles (additional options)";
let d2 = [...pseudoClasses.functional, ...pseudoClasses.treeStructural];
rx.fn = (e, t) => {
  let {
    onlyMatchedOnce = !0,
    removeMatchedSelectors = !0,
    useMqs = ["", "screen"],
    usePseudos = [""]
  } = t;
  let o = [];
  let s = [];
  return {
    element: {
      enter: (e, t) => {
        if ("foreignObject" === e.name) return _visitSkip;
        if ("style" !== e.name || 0 === e.children.length || null != e.attributes.type && "" !== e.attributes.type && "text/css" !== e.attributes.type) return;
        let r = e.children.filter(e => "text" === e.type || "cdata" === e.type).map(e => e.value).join("");
        let n = null;
        try {
          n = rS.parse(r, {
            parseValue: !1,
            parseCustomProperty: !1
          });
        } catch {
          return;
        }
        "StyleSheet" === n.type && o.push({
          node: e,
          parentNode: t,
          cssAst: n
        });
        rS.walk(n, {
          visit: "Rule",
          enter(e) {
            let t = this.atrule;
            let r = "";
            null != t && (r = t.name, null != t.prelude && (r += ` ${rS.generate(t.prelude)}`));
            useMqs.includes(r) && "SelectorList" === e.prelude.type && e.prelude.children.forEach((t, r) => {
              if ("Selector" === t.type) {
                let n = [];
                t.children.forEach((e, t, r) => {
                  "PseudoClassSelector" !== e.type && "PseudoElementSelector" !== e.type || d2.includes(e.name) || n.push({
                    item: t,
                    list: r
                  });
                });
                let a = rS.generate({
                  type: "Selector",
                  children: new rS.List().fromArray(n.map(e => e.item.data))
                });
                if (usePseudos.includes(a)) for (let e of n) e.list.remove(e.item);
                s.push({
                  node: t,
                  rule: e,
                  item: r
                });
              }
            });
          }
        });
      }
    },
    root: {
      exit: () => {
        if (0 === o.length) return;
        let t = s.slice().sort((e, t) => compareSpecificity(_specificity(e.item.data), _specificity(t.item.data))).reverse();
        for (let a of t) {
          let t = rS.generate(a.item.data);
          let i = [];
          try {
            for (let r of _querySelectorAll(e, t)) "element" === r.type && i.push(r);
          } catch (e) {
            continue;
          }
          if (0 !== i.length && (!onlyMatchedOnce || !(i.length > 1))) {
            for (let e of i) {
              let t;
              let r = rS.parse(e.attributes.style ?? "", {
                context: "declarationList",
                parseValue: !1
              });
              if ("DeclarationList" !== r.type) continue;
              let n = new Map();
              rS.walk(r, {
                visit: "Declaration",
                enter(e, r) {
                  null == t && (t = r);
                  n.set(e.property.toLowerCase(), r);
                }
              });
              rS.walk(a.rule, {
                visit: "Declaration",
                enter(a) {
                  let i = a.property;
                  _attrsGroups4.presentation.has(i) && !s.some(e => includesAttrSelector(e.item, i)) && delete e.attributes[i];
                  let o = n.get(i);
                  let l = r.children.createItem(a);
                  null == o ? r.children.insert(l, t) : !0 !== o.data.important && !0 === a.important && (r.children.replace(o, l), n.set(i, l));
                }
              });
              let i = rS.generate(r);
              0 !== i.length && (e.attributes.style = i);
            }
            removeMatchedSelectors && 0 !== i.length && "SelectorList" === a.rule.prelude.type && a.rule.prelude.children.remove(a.item);
            a.matchedElements = i;
          }
        }
        if (removeMatchedSelectors) {
          for (let e of t) if (null != e.matchedElements && (!onlyMatchedOnce || !(e.matchedElements.length > 1))) for (let t of e.matchedElements) {
            let r = new Set(t.attributes.$$class?.split(" "));
            for (let t of e.node.children) "ClassSelector" !== t.type || s.some(e => includesAttrSelector(e.item, "class", t.name, !0)) || r.$$delete(t.name);
            0 === r.size ? delete t.attributes.$$class : t.attributes.$$class = Array.from(r).join(" ");
            let n = e.node.children.first;
            n?.type !== "IdSelector" || t.attributes.id !== n.name || s.some(e => includesAttrSelector(e.item, "id", n.name, !0)) || delete t.attributes.id;
          }
          for (let e of o) if (rS.walk(e.cssAst, {
            visit: "Rule",
            enter: function (e, t, r) {
              "Rule" === e.type && "SelectorList" === e.prelude.type && e.prelude.children.isEmpty && r.remove(t);
            }
          }), e.cssAst.children.isEmpty) _detachNodeFromParent10(e.node, e.parentNode);else {
            let t = e.node.children[0];
            ("text" === t.type || "cdata" === t.type) && (t.value = rS.generate(e.cssAst));
          }
        }
      }
    }
  };
};
var d3 = {};
var d4 = {};
let {
  attrsGroups: _attrsGroups5,
  referencesProps: _referencesProps
} = f;
let d6 = /\burl\((["'])?#(.+?)\1\)/g;
let d9 = /^#(.+?)$/;
let d7 = /(\w+)\.[a-zA-Z]/;
d4.encodeSVGDatauri = (e, t) => {
  var r = "data:image/svg+xml";
  t && "base64" !== t ? "enc" === t ? e = r + "," + encodeURIComponent(e) : "unenc" === t && (e = r + "," + e) : (r += ";base64,", e = r + Buffer.from(e).toString("base64"));
  return e;
};
d4.decodeSVGDatauri = e => {
  var t = /data:image\/svg\+xml(;charset=[^;,]*)?(;base64)?,(.*)/.exec(e);
  if (!t) return e;
  var r = t[3];
  t[2] ? e = Buffer.from(r, "base64").toString("utf8") : "%" === r.charAt(0) ? e = decodeURIComponent(r) : "<" === r.charAt(0) && (e = r);
  return e;
};
d4.cleanupOutData = (e, t, r) => {
  let n;
  let a;
  let i = "";
  e.forEach((e, o) => {
    if (n = " ", 0 == o && (n = ""), t.noSpaceAfterFlags && ("A" == r || "a" == r)) {
      var s = o % 7;
      (4 == s || 5 == s) && (n = "");
    }
    let l = t.leadingZero ? he(e) : e.toString();
    t.negativeExtraSpace && "" != n && (e < 0 || "." === l.charAt(0) && a % 1 != 0) && (n = "");
    a = e;
    i += n + l;
  });
  return i;
};
let he = e => {
  let t = e.toString();
  return 0 < e && e < 1 && t.startsWith("0") ? t.slice(1) : -1 < e && e < 0 && "0" === t[1] ? t[0] + t.slice(2) : t;
};
d4.removeLeadingZero = he;
d4.hasScripts = e => !!("script" === e.name && 0 !== e.children.length || "a" === e.name && Object.entries(e.attributes).some(([e, t]) => ("href" === e || e.endsWith(":href")) && null != t && t.trimStart().startsWith("javascript:"))) || [..._attrsGroups5.animationEvent, ..._attrsGroups5.documentEvent, ..._attrsGroups5.documentElementEvent, ..._attrsGroups5.globalEvent, ..._attrsGroups5.graphicalEvent].some(t => null != e.attributes[t]);
d4.includesUrlReference = e => new RegExp(d6).test(e);
d4.findReferences = (e, t) => {
  let r = [];
  if (_referencesProps.has(e)) for (let e of t.matchAll(d6)) r.push(e[2]);
  if ("href" === e || e.endsWith(":href")) {
    let e = d9.exec(t);
    null != e && r.push(e[1]);
  }
  if ("begin" === e) {
    let e = d7.exec(t);
    null != e && r.push(e[1]);
  }
  return r.map(e => decodeURI(e));
};
d4.toFixed = (e, t) => {
  let r = 10 ** t;
  return Math.round(e * r) / r;
};
let {
  detachNodeFromParent: _detachNodeFromParent11
} = I;
let {
  hasScripts
} = d4;
d3.name = "minifyStyles";
d3.description = "minifies styles and removes unused styles";
d3.fn = (e, {
  usage: t,
  ...r
}) => {
  let n = new Map();
  let a = [];
  let i = new Set();
  let o = new Set();
  let s = new Set();
  let l = !0;
  let c = !0;
  let u = !0;
  let d = !1;
  "boolean" == typeof t ? (l = t, c = t, u = t) : t && (l = null == t.tags || t.tags, c = null == t.ids || t.ids, u = null == t.classes || t.classes, d = null != t.force && t.force);
  let h = !1;
  return {
    element: {
      enter: (e, t) => {
        if (hasScripts(e) && (h = !0), i.add(e.name), null != e.attributes.id && o.add(e.attributes.id), null != e.attributes.$$class) for (let t of e.attributes.$$class.split(/\s+/)) s.add(t);
        "style" === e.name && 0 !== e.children.length ? n.set(e, t) : null != e.attributes.style && a.push(e);
      }
    },
    root: {
      exit: () => {
        let e = {};
        for (let [t, a] of ((!h || d) && (l && (e.tags = Array.from(i)), c && (e.ids = Array.from(o)), u && (e.classes = Array.from(s))), n.entries())) if ("text" === t.children[0].type || "cdata" === t.children[0].type) {
          let n = t.children[0].value;
          let i = oS.minify(n, {
            ...r,
            usage: e
          }).css;
          if (0 === i.length) {
            _detachNodeFromParent11(t, a);
            continue;
          }
          n.indexOf(">") >= 0 || n.indexOf("<") >= 0 ? t.children[0].type = "cdata" : t.children[0].type = "text";
          t.children[0].value = i;
        }
        for (let e of a) {
          let t = e.attributes.style;
          e.attributes.style = oS.minifyBlock(t, {
            ...r
          }).css;
        }
      }
    }
  };
};
var hn = {};
let {
  visitSkip: _visitSkip2
} = I;
let {
  hasScripts: _hasScripts,
  findReferences
} = d4;
hn.name = "cleanupIds";
hn.description = "removes unused IDs and minifies used";
let hs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let hl = hs.length - 1;
let hc = (e, t) => {
  for (let r of t) if (e.startsWith(r)) return !0;
  return !1;
};
let hu = e => {
  if (null == e) return [0];
  e[e.length - 1] += 1;
  for (let t = e.length - 1; t > 0; t--) e[t] > hl && (e[t] = 0, void 0 !== e[t - 1] && e[t - 1]++);
  e[0] > hl && (e[0] = 0, e.unshift(0));
  return e;
};
let hd = e => e.map(e => hs[e]).join("");
hn.fn = (e, t) => {
  let {
    remove = !0,
    minify = !0,
    preserve = [],
    preservePrefixes = [],
    force = !1
  } = t;
  let s = new Set(Array.isArray(preserve) ? preserve : preserve ? [preserve] : []);
  let l = Array.isArray(preservePrefixes) ? preservePrefixes : preservePrefixes ? [preservePrefixes] : [];
  let c = new Map();
  let u = new Map();
  let d = !1;
  return {
    element: {
      enter: e => {
        if (!force) {
          if ("style" === e.name && 0 !== e.children.length || _hasScripts(e)) {
            d = !0;
            return;
          }
          if ("svg" === e.name) {
            let t = !0;
            for (let r of e.children) if ("element" !== r.type || "defs" !== r.name) {
              t = !1;
              break;
            }
            if (t) return _visitSkip2;
          }
        }
        for (let [t, r] of Object.entries(e.attributes)) if ("id" === t) c.has(r) ? delete e.attributes.id : c.set(r, e);else for (let n of findReferences(t, r)) {
          let r = u.get(n);
          null == r && (r = [], u.set(n, r));
          r.push({
            element: e,
            name: t
          });
        }
      }
    },
    root: {
      exit: () => {
        if (d) return;
        let e = e => s.has(e) || hc(e, l);
        let t = null;
        for (let [r, a] of u) {
          let i = c.get(r);
          if (null != i) {
            if (minify && !1 === e(r)) {
              let n = null;
              do n = hd(t = hu(t)); while (e(n) || u.has(n) && null == c.get(n));
              for (let {
                element,
                name
              } of (i.attributes.id = n, a)) {
                let a = element.attributes[name];
                a.includes("#") ? element.attributes[name] = a.replace(`#${encodeURI(r)}`, `#${n}`) : element.attributes[name] = a.replace(`${r}.`, `${n}.`);
              }
            }
            c.$$delete(r);
          }
        }
        if (remove) for (let [t, r] of c) !1 === e(t) && delete r.attributes.id;
      }
    }
  };
};
var hh = {};
let {
  detachNodeFromParent: _detachNodeFromParent12
} = I;
let {
  elemsGroups: _elemsGroups
} = f;
hh.name = "removeUselessDefs";
hh.description = "removes elements in <defs> without id";
hh.fn = () => ({
  element: {
    enter: (e, t) => {
      if ("defs" === e.name) {
        let r = [];
        for (let n of (hf(e, r), 0 === r.length && _detachNodeFromParent12(e, t), r)) Object.defineProperty(n, "parentNode", {
          writable: !0,
          value: e
        });
        e.children = r;
      } else _elemsGroups.nonRendering.has(e.name) && null == e.attributes.id && _detachNodeFromParent12(e, t);
    }
  }
});
let hf = (e, t) => {
  for (let r of e.children) "element" === r.type && (null != r.attributes.id || "style" === r.name ? t.push(r) : hf(r, t));
};
var hg = {};
let {
  removeLeadingZero
} = d4;
hg.name = "cleanupNumericValues";
hg.description = "rounds numeric values to the fixed precision, removes default \u2018px\u2019 units";
let hy = /^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/;
let hk = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  in: 96,
  pt: 4 / 3,
  pc: 16,
  px: 1
};
hg.fn = (e, t) => {
  let {
    floatPrecision = 3,
    leadingZero = !0,
    defaultPx = !0,
    convertToPx = !0
  } = t;
  return {
    element: {
      enter: e => {
        if (null != e.attributes.viewBox) {
          let t = e.attributes.viewBox.split(/\s,?\s*|,\s*/g);
          e.attributes.viewBox = t.map(e => {
            let t = Number(e);
            return Number.isNaN(t) ? e : Number(t.toFixed(floatPrecision));
          }).join(" ");
        }
        for (let [t, o] of Object.entries(e.attributes)) {
          if ("version" === t) continue;
          let s = o.match(hy);
          if (s) {
            let o;
            let l = Number(Number(s[1]).toFixed(floatPrecision));
            let c = s[3] || "";
            if (convertToPx && "" !== c && c in hk) {
              let e = Number((hk[c] * Number(s[1])).toFixed(floatPrecision));
              e.toString().length < s[0].length && (l = e, c = "px");
            }
            o = leadingZero ? removeLeadingZero(l) : l.toString();
            defaultPx && "px" === c && (c = "");
            e.attributes[t] = o + c;
          }
        }
      }
    }
  };
};
var hv = {};
hv.name = "convertColors";
hv.description = "converts colors: rgb() to #rrggbb and #rrggbb to #rgb";
let hw = "([+-]?(?:\\d*\\.\\d+|\\d+\\.?)%?)";
let hx = "\\s*,\\s*";
let hS = RegExp("^rgb\\(\\s*" + hw + hx + hw + hx + hw + "\\s*\\)$");
let hC = /^#(([a-fA-F0-9])\2){3}$/;
let hA = ([e, t, r]) => "#" + ((256 + e << 8 | t) << 8 | r).toString(16).slice(1).toUpperCase();
hv.fn = (e, t) => {
  let {
    currentColor = !1,
    names2hex = !0,
    rgb2hex = !0,
    shorthex = !0,
    shortname = !0
  } = t;
  return {
    element: {
      enter: e => {
        for (let [t, s] of Object.entries(e.attributes)) if (f.colorsProps.has(t)) {
          let l = s;
          if (currentColor && ("string" == typeof currentColor ? l === currentColor : currentColor instanceof RegExp ? null != currentColor.exec(l) : "none" !== l) && (l = "currentColor"), names2hex) {
            let e = l.toLowerCase();
            null != f.colorsNames[e] && (l = f.colorsNames[e]);
          }
          if (rgb2hex) {
            let e = l.match(hS);
            null != e && (l = hA(e.slice(1, 4).map(e => Math.max(0, Math.min(e.indexOf("%") > -1 ? Math.round(2.55 * parseFloat(e)) : Number(e), 255)))));
          }
          if (shorthex) {
            let e = l.match(hC);
            null != e && (l = "#" + e[0][1] + e[0][3] + e[0][5]);
          }
          if (shortname) {
            let e = l.toLowerCase();
            null != f.colorsShortNames[e] && (l = f.colorsShortNames[e]);
          }
          e.attributes[t] = l;
        }
      }
    }
  };
};
var hT = {};
let {
  visitSkip: _visitSkip3,
  detachNodeFromParent: _detachNodeFromParent13
} = I;
let {
  collectStylesheet,
  computeStyle
} = dI;
let {
  elems: _elems,
  attrsGroups: _attrsGroups6,
  elemsGroups: _elemsGroups2,
  attrsGroupsDefaults,
  presentationNonInheritableGroupAttrs: _presentationNonInheritableGroupAttrs2
} = f;
hT.name = "removeUnknownsAndDefaults";
hT.description = "removes unknown elements content and attributes, removes attrs with default values";
let hR = new Map();
let hq = new Map();
let hB = new Map();
for (let [e, t] of Object.entries(_elems)) {
  let r = new Set();
  if (t.content) for (let e of t.content) r.add(e);
  if (t.contentGroups) for (let e of t.contentGroups) {
    let t = _elemsGroups2[e];
    if (t) for (let e of t) r.add(e);
  }
  let n = new Set();
  if (t.attrs) for (let e of t.attrs) n.add(e);
  let a = new Map();
  if (t.defaults) for (let [e, r] of Object.entries(t.defaults)) a.set(e, r);
  for (let e of t.attrsGroups) {
    let t = _attrsGroups6[e];
    if (t) for (let e of t) n.add(e);
    let r = attrsGroupsDefaults[e];
    if (r) for (let [e, t] of Object.entries(r)) a.set(e, t);
  }
  hR.set(e, r);
  hq.set(e, n);
  hB.set(e, a);
}
hT.fn = (e, t) => {
  let {
    unknownContent = !0,
    unknownAttrs = !0,
    defaultAttrs = !0,
    defaultMarkupDeclarations = !0,
    uselessOverrides = !0,
    keepDataAttrs = !0,
    keepAriaAttrs = !0,
    keepRoleAttr = !1
  } = t;
  let u = collectStylesheet(e);
  return {
    instruction: {
      enter: e => {
        defaultMarkupDeclarations && (e.value = e.value.replace(/\s*standalone\s*=\s*(["'])no\1/, ""));
      }
    },
    element: {
      enter: (e, t) => {
        if (e.name.includes(":")) return;
        if ("foreignObject" === e.name) return _visitSkip3;
        if (unknownContent && "element" === t.type) {
          let r = hR.get(t.name);
          if (null == r || 0 === r.size) {
            if (null == hR.get(e.name)) {
              _detachNodeFromParent13(e, t);
              return;
            }
          } else if (!1 === r.has(e.name)) {
            _detachNodeFromParent13(e, t);
            return;
          }
        }
        let i = hq.get(e.name);
        let d = hB.get(e.name);
        let h = "element" === t.type ? computeStyle(u, t) : null;
        for (let [t, r] of Object.entries(e.attributes)) if (!(keepDataAttrs && t.startsWith("data-") || keepAriaAttrs && t.startsWith("aria-")) && (!keepRoleAttr || "role" !== t) && "xmlns" !== t) {
          if (t.includes(":")) {
            let [e] = t.split(":");
            if ("xml" !== e && "xlink" !== e) continue;
          }
          if (unknownAttrs && i && !1 === i.has(t) && delete e.attributes[t], defaultAttrs && null == e.attributes.id && d && d.get(t) === r && h?.[t] == null && delete e.attributes[t], uselessOverrides && null == e.attributes.id) {
            let n = h?.[t];
            !1 === _presentationNonInheritableGroupAttrs2.has(t) && null != n && "static" === n.type && n.value === r && delete e.attributes[t];
          }
        }
      }
    }
  };
};
var hj = {};
let {
  inheritableAttrs,
  attrsGroups,
  presentationNonInheritableGroupAttrs
} = f;
hj.name = "removeNonInheritableGroupAttrs";
hj.description = "removes non-inheritable group\u2019s presentational attributes";
hj.fn = () => ({
  element: {
    enter: e => {
      if ("g" === e.name) for (let t of Object.keys(e.attributes)) !attrsGroups.presentation.has(t) || inheritableAttrs.has(t) || presentationNonInheritableGroupAttrs.has(t) || delete e.attributes[t];
    }
  }
});
var hG = {};
let {
  visit: _visit3,
  visitSkip: _visitSkip4,
  detachNodeFromParent: _detachNodeFromParent14
} = I;
let {
  collectStylesheet: _collectStylesheet,
  computeStyle: _computeStyle
} = dI;
let {
  hasScripts: _hasScripts2
} = d4;
let {
  elemsGroups: _elemsGroups3
} = f;
hG.name = "removeUselessStrokeAndFill";
hG.description = "removes useless stroke and fill attributes";
hG.fn = (e, t) => {
  let {
    stroke = !0,
    fill = !0,
    removeNone = !1
  } = t;
  let i = !1;
  if (_visit3(e, {
    element: {
      enter: e => {
        ("style" === e.name || _hasScripts2(e)) && (i = !0);
      }
    }
  }), i) return null;
  let o = _collectStylesheet(e);
  return {
    element: {
      enter: (e, t) => {
        if (null != e.attributes.id) return _visitSkip4;
        if (!_elemsGroups3.shape.has(e.name)) return;
        let i = _computeStyle(o, e);
        let s = i.stroke;
        let l = i["stroke-opacity"];
        let c = i["stroke-width"];
        let u = i["marker-end"];
        let d = i.fill;
        let h = i["fill-opacity"];
        let p = "element" === t.type ? _computeStyle(o, t) : null;
        let m = p?.stroke;
        if (stroke && (null == s || "static" === s.type && "none" == s.value || null != l && "static" === l.type && "0" === l.value || null != c && "static" === c.type && "0" === c.value) && (null != c && "static" === c.type && "0" === c.value || null == u)) {
          for (let t of Object.keys(e.attributes)) t.startsWith("stroke") && delete e.attributes[t];
          null != m && "static" === m.type && "none" !== m.value && (e.attributes.stroke = "none");
        }
        if (fill && (null != d && "static" === d.type && "none" === d.value || null != h && "static" === h.type && "0" === h.value)) {
          for (let t of Object.keys(e.attributes)) t.startsWith("fill-") && delete e.attributes[t];
          (null == d || "static" === d.type && "none" !== d.value) && (e.attributes.fill = "none");
        }
        removeNone && (null == s || "none" === e.attributes.stroke) && (null != d && "static" === d.type && "none" === d.value || "none" === e.attributes.fill) && _detachNodeFromParent14(e, t);
      }
    }
  };
};
var hQ = {};
hQ.name = "removeViewBox";
hQ.description = "removes viewBox attribute when possible";
let hZ = new Set(["pattern", "svg", "symbol"]);
hQ.fn = () => ({
  element: {
    enter: (e, t) => {
      if (hZ.has(e.name) && null != e.attributes.viewBox && null != e.attributes.width && null != e.attributes.height) {
        if ("svg" === e.name && "root" !== t.type) return;
        let r = e.attributes.viewBox.split(/[ ,]+/g);
        "0" === r[0] && "0" === r[1] && e.attributes.width.replace(/px$/, "") === r[2] && e.attributes.height.replace(/px$/, "") === r[3] && delete e.attributes.viewBox;
      }
    }
  }
});
var hJ = {};
let {
  visit
} = I;
hJ.name = "cleanupEnableBackground";
hJ.description = "remove or cleanup enable-background attribute when possible";
let h1 = /^new\s0\s0\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)$/;
hJ.fn = e => {
  let t = !1;
  visit(e, {
    element: {
      enter: e => {
        "filter" === e.name && (t = !0);
      }
    }
  });
  return {
    element: {
      enter: e => {
        let r = null;
        let n = null;
        if (null != e.attributes.style && "DeclarationList" === (r = rS.parse(e.attributes.style, {
          context: "declarationList"
        })).type) {
          let e = [];
          rS.walk(r, (t, r) => {
            "Declaration" === t.type && "enable-background" === t.property && (e.push(r), n = r);
          });
          for (let t = 0; t < e.length - 1; t++) r.children.remove(e[t]);
        }
        if (!t) {
          delete e.attributes["enable-background"];
          r?.type === "DeclarationList" && (n && r.children.remove(n), r.children.isEmpty ? delete e.attributes.style : e.attributes.style = rS.generate(r));
          return;
        }
        let a = null != e.attributes.width && null != e.attributes.height;
        if (("svg" === e.name || "mask" === e.name || "pattern" === e.name) && a) {
          let t = h2(e.attributes["enable-background"], e.name, e.attributes.width, e.attributes.height);
          if (t ? e.attributes["enable-background"] = t : delete e.attributes["enable-background"], r?.type === "DeclarationList" && n) {
            let t = h2(rS.generate(n.data.value), e.name, e.attributes.width, e.attributes.height);
            t ? n.data.value = {
              type: "Raw",
              value: t
            } : r.children.remove(n);
          }
        }
        r?.type === "DeclarationList" && (r.children.isEmpty ? delete e.attributes.style : e.attributes.style = rS.generate(r));
      }
    }
  };
};
let h2 = (e, t, r, n) => {
  let a = h1.exec(e);
  return null != a && r === a[1] && n === a[3] ? "svg" === t ? void 0 : "new" : e;
};
var h3 = {};
var h4 = {};
let {
  removeLeadingZero: _removeLeadingZero2,
  toFixed
} = d4;
let h6 = {
  M: 2,
  m: 2,
  Z: 0,
  z: 0,
  L: 2,
  l: 2,
  H: 1,
  h: 1,
  V: 1,
  v: 1,
  C: 6,
  c: 6,
  S: 4,
  s: 4,
  Q: 4,
  q: 4,
  T: 2,
  t: 2,
  A: 7,
  a: 7
};
let h9 = e => e in h6;
let h7 = e => {
  let t = e.codePointAt(0);
  return 32 === t || 9 === t || 13 === t || 10 === t;
};
let pe = e => {
  let t = e.codePointAt(0);
  return null != t && 48 <= t && t <= 57;
};
let pt = (e, t) => {
  let r = t;
  let n = "";
  let a = "none";
  for (; r < e.length; r += 1) {
    let t = e[r];
    if ("+" === t || "-" === t) {
      if ("none" === a) {
        a = "sign";
        n += t;
        continue;
      }
      if ("e" === a) {
        a = "exponent_sign";
        n += t;
        continue;
      }
    }
    if (pe(t)) {
      if ("none" === a || "sign" === a || "whole" === a) {
        a = "whole";
        n += t;
        continue;
      }
      if ("decimal_point" === a || "decimal" === a) {
        a = "decimal";
        n += t;
        continue;
      }
      if ("e" === a || "exponent_sign" === a || "exponent" === a) {
        a = "exponent";
        n += t;
        continue;
      }
    }
    if ("." === t && ("none" === a || "sign" === a || "whole" === a)) {
      a = "decimal_point";
      n += t;
      continue;
    }
    if (("E" === t || "e" == t) && ("whole" === a || "decimal_point" === a || "decimal" === a)) {
      a = "e";
      n += t;
      continue;
    }
    break;
  }
  let i = Number.parseFloat(n);
  return Number.isNaN(i) ? [t, null] : [r - 1, i];
};
h4.parsePathData = e => {
  let t = [];
  let r = null;
  let n = [];
  let a = 0;
  let i = !1;
  let o = !1;
  for (let s = 0; s < e.length; s += 1) {
    let l = e.charAt(s);
    if (h7(l)) continue;
    if (i && "," === l) {
      if (o) break;
      o = !0;
      continue;
    }
    if (h9(l)) {
      if (o) return t;
      if (null == r) {
        if ("M" !== l && "m" !== l) return t;
      } else if (0 !== n.length) return t;
      n = [];
      a = h6[r = l];
      i = !1;
      0 === a && t.push({
        command: r,
        args: n
      });
      continue;
    }
    if (null == r) break;
    let c = s;
    let u = null;
    if ("A" === r || "a" === r) {
      let t = n.length;
      (0 === t || 1 === t) && "+" !== l && "-" !== l && ([c, u] = pt(e, s));
      (2 === t || 5 === t || 6 === t) && ([c, u] = pt(e, s));
      (3 === t || 4 === t) && ("0" === l && (u = 0), "1" === l && (u = 1));
    } else [c, u] = pt(e, s);
    if (null == u) break;
    n.push(u);
    i = !0;
    o = !1;
    s = c;
    n.length === a && (t.push({
      command: r,
      args: n
    }), "M" === r && (r = "L"), "m" === r && (r = "l"), n = []);
  }
  return t;
};
let pr = (e, t) => (null != t && (e = toFixed(e, t)), {
  roundedStr: _removeLeadingZero2(e),
  rounded: e
});
let pn = (e, t, r, n) => {
  let a;
  let i = "";
  for (let o = 0; o < t.length; o++) {
    let {
      roundedStr,
      rounded
    } = pr(t[o], r);
    n && ("A" === e || "a" === e) && (o % 7 == 4 || o % 7 == 5) ? i += roundedStr : 0 === o || rounded < 0 ? i += roundedStr : !Number.isInteger(a) && 0 != rounded && rounded < 1 && rounded > -1 ? i += roundedStr : i += ` ${roundedStr}`;
    a = rounded;
  }
  return i;
};
h4.stringifyPathData = ({
  pathData: e,
  precision: t,
  disableSpaceAfterFlags: r
}) => {
  if (1 === e.length) {
    let {
      command,
      args
    } = e[0];
    return command + pn(command, args, t, r);
  }
  let n = "";
  let a = {
    ...e[0]
  };
  "L" === e[1].command ? a.command = "M" : "l" === e[1].command && (a.command = "m");
  for (let i = 1; i < e.length; i++) {
    let {
      command,
      args
    } = e[i];
    a.command === command && "M" !== a.command && "m" !== a.command || "M" === a.command && "L" === command || "m" === a.command && "l" === command ? (a.args = [...a.args, ...args], i === e.length - 1 && (n += a.command + pn(a.command, a.args, t, r))) : (n += a.command + pn(a.command, a.args, t, r), i === e.length - 1 ? n += command + pn(command, args, t, r) : a = {
      command,
      args
    });
  }
  return n;
};
let {
  elemsGroups: _elemsGroups4
} = f;
let {
  visit: _visit4,
  visitSkip: _visitSkip5,
  querySelector,
  detachNodeFromParent: _detachNodeFromParent15
} = I;
let {
  collectStylesheet: _collectStylesheet2,
  computeStyle: _computeStyle2
} = dI;
let {
  parsePathData: _parsePathData
} = h4;
let {
  hasScripts: _hasScripts3,
  findReferences: _findReferences
} = d4;
let pm = _elemsGroups4.nonRendering;
h3.name = "removeHiddenElems";
h3.description = "removes hidden elements (zero sized, with absent attributes)";
h3.fn = (e, t) => {
  let {
    isHidden = !0,
    displayNone = !0,
    opacity0 = !0,
    circleR0 = !0,
    ellipseRX0 = !0,
    ellipseRY0 = !0,
    rectWidth0 = !0,
    rectHeight0 = !0,
    patternWidth0 = !0,
    patternHeight0 = !0,
    imageWidth0 = !0,
    imageHeight0 = !0,
    pathEmptyD = !0,
    polylineEmptyPoints = !0,
    polygonEmptyPoints = !0
  } = t;
  let b = _collectStylesheet2(e);
  let y = new Map();
  let k = new Set();
  let v = new Map();
  let w = new Set();
  let x = new Map();
  let S = !1;
  function C(e, t) {
    "element" === e.type && null != e.attributes.id && "element" === t.type && "defs" === t.name && k.add(e.attributes.id);
    _detachNodeFromParent15(e, t);
  }
  _visit4(e, {
    element: {
      enter: (e, t) => {
        if (pm.has(e.name)) {
          null == e.attributes.id ? _detachNodeFromParent15(e, t) : y.set(e, t);
          return _visitSkip5;
        }
        let r = _computeStyle2(b, e);
        opacity0 && r.opacity && "static" === r.opacity.type && "0" === r.opacity.value && C(e, t);
      }
    }
  });
  return {
    element: {
      enter: (e, t) => {
        if ("style" === e.name && 0 !== e.children.length || _hasScripts3(e)) {
          S = !0;
          return;
        }
        if ("defs" === e.name && v.set(e, t), "use" === e.name) for (let r of Object.keys(e.attributes)) {
          if ("href" !== r && !r.endsWith(":href")) continue;
          let n = e.attributes[r].slice(1);
          let a = x.get(n);
          a || (a = [], x.set(n, a));
          a.push({
            node: e,
            parentNode: t
          });
        }
        let a = _computeStyle2(b, e);
        if (isHidden && a.visibility && "static" === a.visibility.type && "hidden" === a.visibility.value && null == querySelector(e, "[visibility=visible]") || displayNone && a.display && "static" === a.display.type && "none" === a.display.value && "marker" !== e.name || circleR0 && "circle" === e.name && 0 === e.children.length && "0" === e.attributes.r || ellipseRX0 && "ellipse" === e.name && 0 === e.children.length && "0" === e.attributes.rx || ellipseRY0 && "ellipse" === e.name && 0 === e.children.length && "0" === e.attributes.ry || rectWidth0 && "rect" === e.name && 0 === e.children.length && "0" === e.attributes.width || rectHeight0 && rectWidth0 && "rect" === e.name && 0 === e.children.length && "0" === e.attributes.height || patternWidth0 && "pattern" === e.name && "0" === e.attributes.width || patternHeight0 && "pattern" === e.name && "0" === e.attributes.height || imageWidth0 && "image" === e.name && "0" === e.attributes.width || imageHeight0 && "image" === e.name && "0" === e.attributes.height) {
          C(e, t);
          return;
        }
        if (pathEmptyD && "path" === e.name) {
          if (null == e.attributes.d) {
            C(e, t);
            return;
          }
          let r = _parsePathData(e.attributes.d);
          if (0 === r.length || 1 === r.length && null == a["marker-start"] && null == a["marker-end"]) {
            C(e, t);
            return;
          }
        }
        if (polylineEmptyPoints && "polyline" === e.name && null == e.attributes.points || polygonEmptyPoints && "polygon" === e.name && null == e.attributes.points) {
          C(e, t);
          return;
        }
        for (let [t, r] of Object.entries(e.attributes)) for (let e of _findReferences(t, r)) w.add(e);
      }
    },
    root: {
      exit: () => {
        for (let e of k) {
          let t = x.get(e);
          if (t) for (let {
            node,
            parentNode
          } of t) _detachNodeFromParent15(node, parentNode);
        }
        if (!S) for (let [e, t] of y.entries()) {
          let r = e.attributes.id;
          w.has(r) || _detachNodeFromParent15(e, t);
        }
        for (let [e, t] of v.entries()) 0 === e.children.length && _detachNodeFromParent15(e, t);
      }
    }
  };
};
var pf = {};
let {
  detachNodeFromParent: _detachNodeFromParent5
} = I;
pf.name = "removeEmptyText";
pf.description = "removes empty <text> elements";
pf.fn = (e, t) => {
  let {
    text = !0,
    tspan = !0,
    tref = !0
  } = t;
  return {
    element: {
      enter: (e, t) => {
        text && "text" === e.name && 0 === e.children.length && _detachNodeFromParent5(e, t);
        tspan && "tspan" === e.name && 0 === e.children.length && _detachNodeFromParent5(e, t);
        tref && "tref" === e.name && null == e.attributes["xlink:href"] && _detachNodeFromParent5(e, t);
      }
    }
  };
};
var pb = {};
let {
  stringifyPathData: _stringifyPathData
} = h4;
let {
  detachNodeFromParent: _detachNodeFromParent16
} = I;
pb.name = "convertShapeToPath";
pb.description = "converts basic shapes to more compact path form";
let pv = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
pb.fn = (e, t) => {
  let {
    convertArcs = !1,
    floatPrecision
  } = t;
  return {
    element: {
      enter: (e, t) => {
        if ("rect" === e.name && null != e.attributes.width && null != e.attributes.height && null == e.attributes.rx && null == e.attributes.ry) {
          let t = Number(e.attributes.x || "0");
          let r = Number(e.attributes.y || "0");
          let a = Number(e.attributes.width);
          let i = Number(e.attributes.height);
          if (Number.isNaN(t - r + a - i)) return;
          e.name = "path";
          e.attributes.d = _stringifyPathData({
            pathData: [{
              command: "M",
              args: [t, r]
            }, {
              command: "H",
              args: [t + a]
            }, {
              command: "V",
              args: [r + i]
            }, {
              command: "H",
              args: [t]
            }, {
              command: "z",
              args: []
            }],
            precision: floatPrecision
          });
          delete e.attributes.x;
          delete e.attributes.y;
          delete e.attributes.width;
          delete e.attributes.height;
        }
        if ("line" === e.name) {
          let t = Number(e.attributes.x1 || "0");
          let r = Number(e.attributes.y1 || "0");
          let a = Number(e.attributes.x2 || "0");
          let i = Number(e.attributes.y2 || "0");
          if (Number.isNaN(t - r + a - i)) return;
          e.name = "path";
          e.attributes.d = _stringifyPathData({
            pathData: [{
              command: "M",
              args: [t, r]
            }, {
              command: "L",
              args: [a, i]
            }],
            precision: floatPrecision
          });
          delete e.attributes.x1;
          delete e.attributes.y1;
          delete e.attributes.x2;
          delete e.attributes.y2;
        }
        if (("polyline" === e.name || "polygon" === e.name) && null != e.attributes.points) {
          let r = (e.attributes.points.match(pv) || []).map(Number);
          if (r.length < 4) {
            _detachNodeFromParent16(e, t);
            return;
          }
          let a = [];
          for (let e = 0; e < r.length; e += 2) a.push({
            command: 0 === e ? "M" : "L",
            args: r.slice(e, e + 2)
          });
          "polygon" === e.name && a.push({
            command: "z",
            args: []
          });
          e.name = "path";
          e.attributes.d = _stringifyPathData({
            pathData: a,
            precision: floatPrecision
          });
          delete e.attributes.points;
        }
        if ("circle" === e.name && convertArcs) {
          let t = Number(e.attributes.cx || "0");
          let r = Number(e.attributes.cy || "0");
          let a = Number(e.attributes.r || "0");
          if (Number.isNaN(t - r + a)) return;
          e.name = "path";
          e.attributes.d = _stringifyPathData({
            pathData: [{
              command: "M",
              args: [t, r - a]
            }, {
              command: "A",
              args: [a, a, 0, 1, 0, t, r + a]
            }, {
              command: "A",
              args: [a, a, 0, 1, 0, t, r - a]
            }, {
              command: "z",
              args: []
            }],
            precision: floatPrecision
          });
          delete e.attributes.cx;
          delete e.attributes.cy;
          delete e.attributes.r;
        }
        if ("ellipse" === e.name && convertArcs) {
          let t = Number(e.attributes.cx || "0");
          let r = Number(e.attributes.cy || "0");
          let a = Number(e.attributes.rx || "0");
          let i = Number(e.attributes.ry || "0");
          if (Number.isNaN(t - r + a - i)) return;
          e.name = "path";
          e.attributes.d = _stringifyPathData({
            pathData: [{
              command: "M",
              args: [t, r - i]
            }, {
              command: "A",
              args: [a, i, 0, 1, 0, t, r + i]
            }, {
              command: "A",
              args: [a, i, 0, 1, 0, t, r - i]
            }, {
              command: "z",
              args: []
            }],
            precision: floatPrecision
          });
          delete e.attributes.cx;
          delete e.attributes.cy;
          delete e.attributes.rx;
          delete e.attributes.ry;
        }
      }
    }
  };
};
var pw = {};
pw.name = "convertEllipseToCircle";
pw.description = "converts non-eccentric <ellipse>s to <circle>s";
pw.fn = () => ({
  element: {
    enter: e => {
      if ("ellipse" === e.name) {
        let t = e.attributes.rx || "0";
        let r = e.attributes.ry || "0";
        (t === r || "auto" === t || "auto" === r) && (e.name = "circle", delete e.attributes.rx, delete e.attributes.ry, e.attributes.r = "auto" === t ? r : t);
      }
    }
  }
});
var px = {};
let {
  visit: _visit5
} = I;
let {
  inheritableAttrs: _inheritableAttrs3,
  pathElems
} = f;
px.name = "moveElemsAttrsToGroup";
px.description = "Move common attributes of group children to the group";
px.fn = e => {
  let t = !1;
  _visit5(e, {
    element: {
      enter: e => {
        "style" === e.name && (t = !0);
      }
    }
  });
  return {
    element: {
      exit: e => {
        if ("g" !== e.name || e.children.length <= 1 || t) return;
        let r = new Map();
        let n = !0;
        let a = !0;
        for (let t of e.children) if ("element" === t.type) {
          if (pathElems.has(t.name) || (a = !1), n) for (let [e, a] of (n = !1, Object.entries(t.attributes))) _inheritableAttrs3.has(e) && r.set(e, a);else for (let [e, n] of r) t.attributes[e] !== n && r.$$delete(e);
        }
        for (let [t, n] of ((null != e.attributes["clip-path"] || null != e.attributes.mask) && r.$$delete("transform"), a && r.$$delete("transform"), r)) "transform" === t ? null != e.attributes.transform ? e.attributes.transform = `${e.attributes.transform} ${n}` : e.attributes.transform = n : e.attributes[t] = n;
        for (let t of e.children) if ("element" === t.type) for (let [e] of r) delete t.attributes[e];
      }
    }
  };
};
var pT = {};
let {
  pathElems: _pathElems,
  referencesProps: _referencesProps2
} = f;
let {
  includesUrlReference
} = d4;
pT.name = "moveGroupAttrsToElems";
pT.description = "moves some group attributes to the content elements";
let pD = [..._pathElems, "g", "text"];
pT.fn = () => ({
  element: {
    enter: e => {
      if ("g" === e.name && 0 !== e.children.length && null != e.attributes.transform && !1 === Object.entries(e.attributes).some(([e, t]) => _referencesProps2.has(e) && includesUrlReference(t)) && e.children.every(e => "element" === e.type && pD.includes(e.name) && null == e.attributes.id)) {
        for (let t of e.children) {
          let r = e.attributes.transform;
          "element" === t.type && (null != t.attributes.transform ? t.attributes.transform = `${r} ${t.attributes.transform}` : t.attributes.transform = r);
        }
        delete e.attributes.transform;
      }
    }
  }
});
var pN = {};
let {
  inheritableAttrs: _inheritableAttrs,
  elemsGroups
} = f;
pN.name = "collapseGroups";
pN.description = "collapses useless groups";
let pz = (e, t) => {
  if ("element" === e.type) {
    if (elemsGroups.animation.has(e.name) && e.attributes.attributeName === t) return !0;
    for (let r of e.children) if (pz(r, t)) return !0;
  }
  return !1;
};
pN.fn = () => ({
  element: {
    exit: (e, t) => {
      if ("root" !== t.type && "switch" !== t.name && "g" === e.name && 0 !== e.children.length) {
        if (0 !== Object.keys(e.attributes).length && 1 === e.children.length) {
          let t = e.children[0];
          if ("element" === t.type && null == t.attributes.id && null == e.attributes.filter && (null == e.attributes.$$class || null == t.attributes.$$class) && (null == e.attributes["clip-path"] && null == e.attributes.mask || "g" === t.name && null == e.attributes.transform && null == t.attributes.transform)) for (let [r, n] of Object.entries(e.attributes)) {
            if (pz(t, r)) return;
            if (null == t.attributes[r]) t.attributes[r] = n;else if ("transform" === r) t.attributes[r] = n + " " + t.attributes[r];else if ("inherit" === t.attributes[r]) t.attributes[r] = n;else if (!1 === _inheritableAttrs.has(r) && t.attributes[r] !== n) return;
            delete e.attributes[r];
          }
        }
        if (0 === Object.keys(e.attributes).length) {
          for (let t of e.children) if ("element" === t.type && elemsGroups.animation.has(t.name)) return;
          let r = t.children.indexOf(e);
          for (let n of (t.children.splice(r, 1, ...e.children), e.children)) Object.defineProperty(n, "parentNode", {
            writable: !0,
            value: t
          });
        }
      }
    }
  }
});
var pI = {};
var pR = {};
let {
  parsePathData,
  stringifyPathData
} = h4;
pR.path2js = e => {
  if (e.pathJS) return e.pathJS;
  let t = [];
  for (let {
    command,
    args
  } of parsePathData(e.attributes.d)) t.push({
    command,
    args
  });
  t.length && "m" == t[0].command && (t[0].command = "M");
  e.pathJS = t;
  return t;
};
let pj = e => {
  let t = [];
  let r = [0, 0];
  let n = [0, 0];
  for (let {
    command,
    args
  } of e) {
    i = args.slice();
    "m" === command && (args[0] += n[0], args[1] += n[1], a = "M");
    "M" === command && (n[0] = args[0], n[1] = args[1], r[0] = n[0], r[1] = n[1]);
    "h" === command && (args[0] += n[0], a = "H");
    "H" === command && (n[0] = args[0]);
    "v" === command && (args[0] += n[1], a = "V");
    "V" === command && (n[1] = args[0]);
    "l" === command && (args[0] += n[0], args[1] += n[1], a = "L");
    "L" === command && (n[0] = args[0], n[1] = args[1]);
    "c" === command && (args[0] += n[0], args[1] += n[1], args[2] += n[0], args[3] += n[1], args[4] += n[0], args[5] += n[1], a = "C");
    "C" === command && (n[0] = args[4], n[1] = args[5]);
    "s" === command && (args[0] += n[0], args[1] += n[1], args[2] += n[0], args[3] += n[1], a = "S");
    "S" === command && (n[0] = args[2], n[1] = args[3]);
    "q" === command && (args[0] += n[0], args[1] += n[1], args[2] += n[0], args[3] += n[1], a = "Q");
    "Q" === command && (n[0] = args[2], n[1] = args[3]);
    "t" === command && (args[0] += n[0], args[1] += n[1], a = "T");
    "T" === command && (n[0] = args[0], n[1] = args[1]);
    "a" === command && (args[5] += n[0], args[6] += n[1], a = "A");
    "A" === command && (n[0] = args[5], n[1] = args[6]);
    ("z" === command || "Z" === command) && (n[0] = r[0], n[1] = r[1], a = "z");
    t.push({
      command,
      args
    });
  }
  return t;
};
function pF(e, t) {
  e[0] = t[t.length - 2];
  e[1] = t[t.length - 1];
  return e;
}
function p_(e) {
  return [-e[0], -e[1]];
}
function pU(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function pG(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function pH(e, t) {
  var r = [-e[1], e[0]];
  return 0 > pG(r, p_(t)) ? p_(r) : r;
}
function pW(e) {
  let t = {
    list: [],
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0
  };
  let r = (e, r) => {
    (!e.list.length || r[1] > e.list[e.maxY][1]) && (e.maxY = e.list.length, t.maxY = t.list.length ? Math.max(r[1], t.maxY) : r[1]);
    (!e.list.length || r[0] > e.list[e.maxX][0]) && (e.maxX = e.list.length, t.maxX = t.list.length ? Math.max(r[0], t.maxX) : r[0]);
    (!e.list.length || r[1] < e.list[e.minY][1]) && (e.minY = e.list.length, t.minY = t.list.length ? Math.min(r[1], t.minY) : r[1]);
    (!e.list.length || r[0] < e.list[e.minX][0]) && (e.minX = e.list.length, t.minX = t.list.length ? Math.min(r[0], t.minX) : r[0]);
    e.list.push(r);
  };
  for (let i = 0; i < e.length; i += 1) {
    let o = e[i];
    let s = 0 === t.list.length ? {
      list: [],
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0
    } : t.list[t.list.length - 1];
    let l = 0 === i ? null : e[i - 1];
    let c = 0 === s.list.length ? null : s.list[s.list.length - 1];
    let d = o.args;
    let h = c;
    let p = (e, t) => e + c?.[t % 2];
    switch (o.command) {
      case "M":
        s = {
          list: [],
          minX: 0,
          minY: 0,
          maxX: 0,
          maxY: 0
        };
        t.list.push(s);
        break;
      case "H":
        null != c && r(s, [d[0], c[1]]);
        break;
      case "V":
        null != c && r(s, [c[0], d[0]]);
        break;
      case "Q":
        r(s, d.slice(0, 2));
        u = [d[2] - d[0], d[3] - d[1]];
        break;
      case "T":
        null != c && null != l && ("Q" == l.command || "T" == l.command) && (r(s, h = [c[0] + u[0], c[1] + u[1]]), u = [d[0] - h[0], d[1] - h[1]]);
        break;
      case "C":
        null != c && r(s, [.5 * (c[0] + d[0]), .5 * (c[1] + d[1])]);
        r(s, [.5 * (d[0] + d[2]), .5 * (d[1] + d[3])]);
        r(s, [.5 * (d[2] + d[4]), .5 * (d[3] + d[5])]);
        u = [d[4] - d[2], d[5] - d[3]];
        break;
      case "S":
        null != c && null != l && ("C" == l.command || "S" == l.command) && (r(s, [c[0] + .5 * u[0], c[1] + .5 * u[1]]), h = [c[0] + u[0], c[1] + u[1]]);
        null != h && r(s, [.5 * (h[0] + d[0]), .5 * (h[1] + d[1])]);
        r(s, [.5 * (d[0] + d[2]), .5 * (d[1] + d[3])]);
        u = [d[2] - d[0], d[3] - d[1]];
        break;
      case "A":
        if (null != c) for (a = pX.apply(0, c.concat(d)), void 0; (n = a.splice(0, 6).map(p)).length;) {
          var n;
          var a;
          null != c && r(s, [.5 * (c[0] + n[0]), .5 * (c[1] + n[1])]);
          r(s, [.5 * (n[0] + n[2]), .5 * (n[1] + n[3])]);
          r(s, [.5 * (n[2] + n[4]), .5 * (n[3] + n[5])]);
          a.length && r(s, c = n.slice(-2));
        }
    }
    d.length >= 2 && r(s, d.slice(-2));
  }
  return t;
}
function pV(e) {
  e.list.sort(function (e, t) {
    return e[0] == t[0] ? e[1] - t[1] : e[0] - t[0];
  });
  var t = [];
  var r = 0;
  var n = 0;
  for (let a = 0; a < e.list.length; a++) {
    for (; t.length >= 2 && 0 >= p$(t[t.length - 2], t[t.length - 1], e.list[a]);) t.pop();
    e.list[a][1] < e.list[r][1] && (r = a, n = t.length);
    t.push(e.list[a]);
  }
  var a = [];
  var i = e.list.length - 1;
  var o = 0;
  for (let t = e.list.length; t--;) {
    for (; a.length >= 2 && 0 >= p$(a[a.length - 2], a[a.length - 1], e.list[t]);) a.pop();
    e.list[t][1] > e.list[i][1] && (i = t, o = a.length);
    a.push(e.list[t]);
  }
  a.pop();
  t.pop();
  let s = t.concat(a);
  return {
    list: s,
    minX: 0,
    maxX: t.length,
    minY: n,
    maxY: (t.length + o) % s.length
  };
}
function p$(e, t, r) {
  return (t[0] - e[0]) * (r[1] - e[1]) - (t[1] - e[1]) * (r[0] - e[0]);
}
pR.js2path = function (e, t, r) {
  e.pathJS = t;
  let n = [];
  for (let e of t) {
    if (0 !== n.length && ("M" === e.command || "m" === e.command)) {
      let e = n[n.length - 1];
      ("M" === e.command || "m" === e.command) && n.pop();
    }
    n.push({
      command: e.command,
      args: e.args
    });
  }
  e.attributes.d = stringifyPathData({
    pathData: n,
    precision: r.floatPrecision,
    disableSpaceAfterFlags: r.noSpaceAfterFlags
  });
};
pR.intersects = function (e, t) {
  let r = pW(pj(e));
  let n = pW(pj(t));
  if (r.maxX <= n.minX || n.maxX <= r.minX || r.maxY <= n.minY || n.maxY <= r.minY || r.list.every(e => n.list.every(t => e.list[e.maxX][0] <= t.list[t.minX][0] || t.list[t.maxX][0] <= e.list[e.minX][0] || e.list[e.maxY][1] <= t.list[t.minY][1] || t.list[t.maxY][1] <= e.list[e.minY][1]))) return !1;
  let a = r.list.map(pV);
  let i = n.list.map(pV);
  return a.some(function (e) {
    return !(e.list.length < 3) && i.some(function (t) {
      if (t.list.length < 3) return !1;
      for (r = [o(e, t, [1, 0])], n = p_(r[0]), a = 1e4, void 0;;) {
        var r;
        var n;
        var a;
        if (0 == a--) {
          console.error("Error: infinite loop while processing mergePaths plugin.");
          return !0;
        }
        if (r.push(o(e, t, n)), 0 >= pG(n, r[r.length - 1])) return !1;
        if (function (e, t) {
          if (2 == e.length) {
            let r = e[1];
            let n = e[0];
            let a = p_(e[1]);
            let i = pU(n, r);
            pG(a, i) > 0 ? pF(t, pH(i, r)) : (pF(t, a), e.shift());
          } else {
            let r = e[2];
            let n = e[1];
            let a = e[0];
            let i = pU(n, r);
            let o = pU(a, r);
            let s = p_(r);
            let l = pH(i, o);
            let c = pH(o, i);
            if (pG(l, s) > 0) pG(i, s) > 0 ? (pF(t, l), e.shift()) : (pF(t, s), e.splice(0, 2));else {
              if (!(pG(c, s) > 0)) return !0;
              pG(o, s) > 0 ? (pF(t, c), e.splice(1, 1)) : (pF(t, s), e.splice(0, 2));
            }
          }
          return !1;
        }(r, n)) return !0;
      }
    });
  });
  function o(e, t, r) {
    return pU(s(e, r), s(t, p_(r)));
  }
  function s(e, t) {
    for (n = t[1] >= 0 ? t[0] < 0 ? e.maxY : e.maxX : t[0] < 0 ? e.minX : e.minY, a = -1 / 0, void 0; (r = pG(e.list[n], t)) > a;) {
      var r;
      var n;
      var a;
      a = r;
      n = ++n % e.list.length;
    }
    return e.list[(n || e.list.length) - 1];
  }
};
let pX = (e, t, r, n, a, i, o, s, l, c) => {
  let u = 120 * Math.PI / 180;
  let d = Math.PI / 180 * (+a || 0);
  let h = [];
  let p = (e, t, r) => e * Math.cos(r) - t * Math.sin(r);
  let m = (e, t, r) => e * Math.sin(r) + t * Math.cos(r);
  if (c) {
    S = c[0];
    C = c[1];
    w = c[2];
    x = c[3];
  } else {
    t = m(e = p(e, t, -d), t, -d);
    l = m(s = p(s, l, -d), l, -d);
    var f = (e - s) / 2;
    var g = (t - l) / 2;
    var b = f * f / (r * r) + g * g / (n * n);
    b > 1 && (r *= b = Math.sqrt(b), n *= b);
    var y = r * r;
    var k = n * n;
    var v = (i == o ? -1 : 1) * Math.sqrt(Math.abs((y * k - y * g * g - k * f * f) / (y * g * g + k * f * f)));
    var w = v * r * g / n + (e + s) / 2;
    var x = -(v * n) * f / r + (t + l) / 2;
    var S = Math.asin(Number(((t - x) / n).toFixed(9)));
    var C = Math.asin(Number(((l - x) / n).toFixed(9)));
    S = e < w ? Math.PI - S : S;
    C = s < w ? Math.PI - C : C;
    S < 0 && (S = 2 * Math.PI + S);
    C < 0 && (C = 2 * Math.PI + C);
    o && S > C && (S -= 2 * Math.PI);
    !o && C > S && (C -= 2 * Math.PI);
  }
  var A = C - S;
  if (Math.abs(A) > u) {
    var T = C;
    var E = s;
    var P = l;
    h = pX(s = w + r * Math.cos(C = S + u * (o && C > S ? 1 : -1)), l = x + n * Math.sin(C), r, n, a, 0, o, E, P, [C, T, w, x]);
  }
  A = C - S;
  var L = Math.cos(S);
  var D = Math.cos(C);
  var N = Math.tan(A / 4);
  var O = 4 / 3 * r * N;
  var M = 4 / 3 * n * N;
  var z = [-O * Math.sin(S), M * L, s + O * Math.sin(C) - e, l - M * D - t, s - e, l - t];
  if (c) return z.concat(h);
  h = z.concat(h);
  for (I = [], R = 0, q = h.length, void 0; R < q; R++) {
    var I;
    var R;
    var q;
    I[R] = R % 2 ? m(h[R - 1], h[R], d) : p(h[R], h[R + 1], d);
  }
  return I;
};
var pY = {};
var pK = {};
let {
  toFixed: _toFixed
} = d4;
let pZ = new Set(["matrix", "rotate", "scale", "skewX", "skewY", "translate"]);
let pJ = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/;
let p0 = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
pK.transform2js = e => {
  let t = [];
  let r = null;
  for (let n of e.split(pJ)) if (n) {
    if (pZ.has(n)) {
      r = {
        name: n,
        data: []
      };
      t.push(r);
    } else {
      let e;
      for (; e = p0.exec(n);) {
        e = Number(e);
        null != r && r.data.push(e);
      }
    }
  }
  return null == r || 0 == r.data.length ? [] : t;
};
pK.transformsMultiply = e => {
  let t = e.map(e => "matrix" === e.name ? e.data : p2(e));
  return {
    name: "matrix",
    data: t.length > 0 ? t.reduce(p3) : []
  };
};
let p1 = {
  rad: e => e * Math.PI / 180,
  deg: e => 180 * e / Math.PI,
  cos: e => Math.cos(p1.rad(e)),
  acos: (e, t) => _toFixed(p1.deg(Math.acos(e)), t),
  sin: e => Math.sin(p1.rad(e)),
  asin: (e, t) => _toFixed(p1.deg(Math.asin(e)), t),
  tan: e => Math.tan(p1.rad(e)),
  atan: (e, t) => _toFixed(p1.deg(Math.atan(e)), t)
};
pK.matrixToTransform = (e, t) => {
  let r = t.floatPrecision;
  let n = e.data;
  let a = [];
  (n[4] || n[5]) && a.push({
    name: "translate",
    data: n.slice(4, n[5] ? 6 : 5)
  });
  let i = _toFixed(Math.hypot(n[0], n[1]), t.transformPrecision);
  let o = _toFixed((n[0] * n[3] - n[1] * n[2]) / i, t.transformPrecision);
  let s = n[0] * n[2] + n[1] * n[3];
  let l = n[0] * n[1] + n[2] * n[3];
  let c = 0 !== l || i === o;
  if (!n[1] && n[2]) a.push({
    name: "skewX",
    data: [p1.atan(n[2] / o, r)]
  });else if (n[1] && !n[2]) {
    a.push({
      name: "skewY",
      data: [p1.atan(n[1] / n[0], r)]
    });
    i = n[0];
    o = n[3];
  } else if (s && (1 !== i || 1 !== o) && c) {
    if (n[1] || n[2]) return [e];
  } else {
    c || (i = Math.hypot(n[0], n[2]), o = Math.hypot(n[1], n[3]), 0 > _toFixed(n[0], t.transformPrecision) && (i = -i), (n[3] < 0 || Math.sign(n[1]) === Math.sign(n[2]) && 0 === _toFixed(n[3], t.transformPrecision)) && (o = -o), a.push({
      name: "scale",
      data: [i, o]
    }));
    let e = Math.min(Math.max(-1, n[0] / i), 1);
    let u = [p1.acos(e, r) * ((c ? 1 : o) * n[1] < 0 ? -1 : 1)];
    if (u[0] && a.push({
      name: "rotate",
      data: u
    }), l && s && a.push({
      name: "skewX",
      data: [p1.atan(s / (i * i), r)]
    }), u[0] && (n[4] || n[5])) {
      a.shift();
      let e = 1 - n[0] / i;
      let t = n[1] / (c ? i : o);
      let r = n[4] * (c ? 1 : o);
      let s = n[5] * (c ? 1 : i);
      let l = (e ** 2 + t ** 2) * (c ? 1 : i * o);
      u.push((e * r - t * s) / l, (e * s + t * r) / l);
    }
  }
  (c && (1 != i || 1 != o) || !a.length) && a.push({
    name: "scale",
    data: i == o ? [i] : [i, o]
  });
  return a;
};
let p2 = e => {
  if ("matrix" === e.name) return e.data;
  switch (e.name) {
    case "translate":
      return [1, 0, 0, 1, e.data[0], e.data[1] || 0];
    case "scale":
      return [e.data[0], 0, 0, e.data[1] || e.data[0], 0, 0];
    case "rotate":
      var t = p1.cos(e.data[0]);
      var r = p1.sin(e.data[0]);
      var n = e.data[1] || 0;
      var a = e.data[2] || 0;
      return [t, r, -r, t, (1 - t) * n + r * a, (1 - t) * a - r * n];
    case "skewX":
      return [1, 0, p1.tan(e.data[0]), 1, 0, 0];
    case "skewY":
      return [1, p1.tan(e.data[0]), 0, 1, 0, 0];
    default:
      throw Error(`Unknown transform ${e.name}`);
  }
};
pK.transformArc = (e, t, r) => {
  let n = t[5] - e[0];
  let a = t[6] - e[1];
  let i = t[0];
  let o = t[1];
  let s = t[2] * Math.PI / 180;
  let l = Math.cos(s);
  let c = Math.sin(s);
  if (i > 0 && o > 0) {
    let e = Math.pow(n * l + a * c, 2) / (4 * i * i) + Math.pow(a * l - n * c, 2) / (4 * o * o);
    e > 1 && (i *= e = Math.sqrt(e), o *= e);
  }
  let u = p3(r, [i * l, i * c, -o * c, o * l, 0, 0]);
  let d = u[2] * u[2] + u[3] * u[3];
  let h = u[0] * u[0] + u[1] * u[1] + d;
  let p = Math.hypot(u[0] - u[3], u[1] + u[2]) * Math.hypot(u[0] + u[3], u[1] - u[2]);
  if (p) {
    let e = (h + p) / 2;
    let r = (h - p) / 2;
    let n = Math.abs(e - d) > 1e-6;
    let a = (n ? e : r) - d;
    let i = u[0] * u[2] + u[1] * u[3];
    let o = u[0] * a + u[2] * i;
    let s = u[1] * a + u[3] * i;
    t[0] = Math.sqrt(e);
    t[1] = Math.sqrt(r);
    t[2] = ((n ? s < 0 : o > 0) ? -1 : 1) * Math.acos((n ? o : s) / Math.hypot(o, s)) * 180 / Math.PI;
  } else {
    t[0] = t[1] = Math.sqrt(h / 2);
    t[2] = 0;
  }
  r[0] < 0 != r[3] < 0 && (t[4] = 1 - t[4]);
  return t;
};
let p3 = (e, t) => [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]];
let {
  collectStylesheet: _collectStylesheet3,
  computeStyle: _computeStyle3
} = dI;
let {
  transformsMultiply,
  transform2js,
  transformArc
} = pK;
let {
  path2js
} = pR;
let {
  removeLeadingZero: _removeLeadingZero3,
  includesUrlReference: _includesUrlReference
} = d4;
let {
  referencesProps: _referencesProps3,
  attrsGroupsDefaults: _attrsGroupsDefaults
} = f;
let ma = /[-+]?(\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
pY.applyTransforms = (e, t) => {
  let r = _collectStylesheet3(e);
  return {
    element: {
      enter: e => {
        if (null == e.attributes.d || null != e.attributes.id || null == e.attributes.transform || "" === e.attributes.transform || null != e.attributes.style || Object.entries(e.attributes).some(([e, t]) => _referencesProps3.has(e) && _includesUrlReference(t))) return;
        let n = _computeStyle3(r, e);
        let a = n.transform;
        if ("static" === a.type && a.value !== e.attributes.transform) return;
        let i = transformsMultiply(transform2js(e.attributes.transform));
        let o = n.stroke?.type === "static" ? n.stroke.value : null;
        let s = n["stroke-width"]?.type === "static" ? n["stroke-width"].value : null;
        let l = t.transformPrecision;
        if (n.stroke?.type === "dynamic" || n["stroke-width"]?.type === "dynamic") return;
        let c = Number(Math.sqrt(i.data[0] * i.data[0] + i.data[1] * i.data[1]).toFixed(l));
        if (o && "none" != o) {
          if (!t.applyTransformsStroked || (i.data[0] !== i.data[3] || i.data[1] !== -i.data[2]) && (i.data[0] !== -i.data[3] || i.data[1] !== i.data[2])) return;
          1 !== c && "non-scaling-stroke" !== e.attributes["vector-effect"] && (e.attributes["stroke-width"] = (s || _attrsGroupsDefaults.presentation["stroke-width"]).trim().replace(ma, e => _removeLeadingZero3(Number(e) * c)), null != e.attributes["stroke-dashoffset"] && (e.attributes["stroke-dashoffset"] = e.attributes["stroke-dashoffset"].trim().replace(ma, e => _removeLeadingZero3(Number(e) * c))), null != e.attributes["stroke-dasharray"] && (e.attributes["stroke-dasharray"] = e.attributes["stroke-dasharray"].trim().replace(ma, e => _removeLeadingZero3(Number(e) * c))));
        }
        ms(path2js(e), i.data);
        delete e.attributes.transform;
      }
    }
  };
};
let mi = (e, t, r) => [e[0] * t + e[2] * r + e[4], e[1] * t + e[3] * r + e[5]];
let mo = (e, t, r) => [e[0] * t + e[2] * r, e[1] * t + e[3] * r];
let ms = (e, t) => {
  let r = [0, 0];
  let n = [0, 0];
  for (let a of e) {
    let {
      command,
      args
    } = a;
    if ("M" === command) {
      n[0] = args[0];
      n[1] = args[1];
      r[0] = n[0];
      r[1] = n[1];
      let [e, a] = mi(t, args[0], args[1]);
      args[0] = e;
      args[1] = a;
    }
    if ("m" === command) {
      n[0] += args[0];
      n[1] += args[1];
      r[0] = n[0];
      r[1] = n[1];
      let [e, a] = mo(t, args[0], args[1]);
      args[0] = e;
      args[1] = a;
    }
    if ("H" === command && (e = "L", i = [args[0], n[1]]), "h" === command && (e = "l", i = [args[0], 0]), "V" === command && (e = "L", i = [n[0], args[0]]), "v" === command && (e = "l", i = [0, args[0]]), "L" === command) {
      n[0] = args[0];
      n[1] = args[1];
      let [e, r] = mi(t, args[0], args[1]);
      args[0] = e;
      args[1] = r;
    }
    if ("l" === command) {
      n[0] += args[0];
      n[1] += args[1];
      let [e, r] = mo(t, args[0], args[1]);
      args[0] = e;
      args[1] = r;
    }
    if ("C" === command) {
      n[0] = args[4];
      n[1] = args[5];
      let [e, r] = mi(t, args[0], args[1]);
      let [a, o] = mi(t, args[2], args[3]);
      let [s, l] = mi(t, args[4], args[5]);
      args[0] = e;
      args[1] = r;
      args[2] = a;
      args[3] = o;
      args[4] = s;
      args[5] = l;
    }
    if ("c" === command) {
      n[0] += args[4];
      n[1] += args[5];
      let [e, r] = mo(t, args[0], args[1]);
      let [a, o] = mo(t, args[2], args[3]);
      let [s, l] = mo(t, args[4], args[5]);
      args[0] = e;
      args[1] = r;
      args[2] = a;
      args[3] = o;
      args[4] = s;
      args[5] = l;
    }
    if ("S" === command) {
      n[0] = args[2];
      n[1] = args[3];
      let [e, r] = mi(t, args[0], args[1]);
      let [a, o] = mi(t, args[2], args[3]);
      args[0] = e;
      args[1] = r;
      args[2] = a;
      args[3] = o;
    }
    if ("s" === command) {
      n[0] += args[2];
      n[1] += args[3];
      let [e, r] = mo(t, args[0], args[1]);
      let [a, o] = mo(t, args[2], args[3]);
      args[0] = e;
      args[1] = r;
      args[2] = a;
      args[3] = o;
    }
    if ("Q" === command) {
      n[0] = args[2];
      n[1] = args[3];
      let [e, r] = mi(t, args[0], args[1]);
      let [a, o] = mi(t, args[2], args[3]);
      args[0] = e;
      args[1] = r;
      args[2] = a;
      args[3] = o;
    }
    if ("q" === command) {
      n[0] += args[2];
      n[1] += args[3];
      let [e, r] = mo(t, args[0], args[1]);
      let [a, o] = mo(t, args[2], args[3]);
      args[0] = e;
      args[1] = r;
      args[2] = a;
      args[3] = o;
    }
    if ("T" === command) {
      n[0] = args[0];
      n[1] = args[1];
      let [e, r] = mi(t, args[0], args[1]);
      args[0] = e;
      args[1] = r;
    }
    if ("t" === command) {
      n[0] += args[0];
      n[1] += args[1];
      let [e, r] = mo(t, args[0], args[1]);
      args[0] = e;
      args[1] = r;
    }
    if ("A" === command) {
      if (transformArc(n, args, t), n[0] = args[5], n[1] = args[6], Math.abs(args[2]) > 80) {
        let e = args[0];
        let t = args[2];
        args[0] = args[1];
        args[1] = e;
        args[2] = t + (t > 0 ? -90 : 90);
      }
      let [e, r] = mi(t, args[5], args[6]);
      args[5] = e;
      args[6] = r;
    }
    if ("a" === command) {
      if (transformArc([0, 0], args, t), n[0] += args[5], n[1] += args[6], Math.abs(args[2]) > 80) {
        let e = args[0];
        let t = args[2];
        args[0] = args[1];
        args[1] = e;
        args[2] = t + (t > 0 ? -90 : 90);
      }
      let [e, r] = mo(t, args[5], args[6]);
      args[5] = e;
      args[6] = r;
    }
    ("z" === command || "Z" === command) && (n[0] = r[0], n[1] = r[1]);
    a.command = command;
    a.args = args;
  }
};
let {
  collectStylesheet: _collectStylesheet4,
  computeStyle: _computeStyle4
} = dI;
let {
  visit: _visit6
} = I;
let {
  pathElems: _pathElems2
} = f;
let {
  path2js: _path2js,
  js2path
} = pR;
let {
  applyTransforms
} = pY;
let {
  cleanupOutData,
  toFixed: _toFixed2
} = d4;
pI.name = "convertPathData";
pI.description = "optimizes path data: writes in shorter form, applies transformations";
pI.fn = (e, t) => {
  let {
    applyTransforms = !0,
    applyTransformsStroked = !0,
    makeArcs = {
      threshold: 2.5,
      tolerance: .5
    },
    straightCurves = !0,
    convertToQ = !0,
    lineShorthands = !0,
    convertToZ = !0,
    curveSmoothShorthands = !0,
    floatPrecision = 3,
    transformPrecision = 5,
    smartArcRounding = !0,
    removeUseless = !0,
    collapseRepeated = !0,
    utilizeAbsolute = !0,
    leadingZero = !0,
    negativeExtraSpace = !0,
    noSpaceAfterFlags = !1,
    forceAbsolutePath = !1
  } = t;
  let A = {
    applyTransforms,
    applyTransformsStroked,
    makeArcs,
    straightCurves,
    convertToQ,
    lineShorthands,
    convertToZ,
    curveSmoothShorthands,
    floatPrecision,
    transformPrecision,
    smartArcRounding,
    removeUseless,
    collapseRepeated,
    utilizeAbsolute,
    leadingZero,
    negativeExtraSpace,
    noSpaceAfterFlags,
    forceAbsolutePath
  };
  applyTransforms && _visit6(e, applyTransforms(e, {
    transformPrecision,
    applyTransformsStroked
  }));
  let T = _collectStylesheet4(e);
  return {
    element: {
      enter: e => {
        if (_pathElems2.has(e.name) && null != e.attributes.d) {
          let r = _computeStyle4(T, e);
          i = !1 !== (a = floatPrecision) ? +Math.pow(.1, a).toFixed(a) : .01;
          n = a && a > 0 && a < 20 ? mv : mw;
          makeArcs && (o = makeArcs.threshold, s = makeArcs.tolerance);
          let l = null != r["marker-mid"];
          let u = r.stroke && ("dynamic" === r.stroke.type || "none" !== r.stroke.value);
          let d = r["stroke-linecap"] && ("dynamic" === r["stroke-linecap"].type || "butt" !== r["stroke-linecap"].value);
          let h = !u || r["stroke-linecap"]?.type === "static" && "round" === r["stroke-linecap"].value && r["stroke-linejoin"]?.type === "static" && "round" === r["stroke-linejoin"].value;
          var t = _path2js(e);
          t.length && (mb(t), t = function (e, t, {
            isSafeToUseZ: r,
            maybeHasStrokeAndLinecap: l,
            hasMarkerMid: c
          }) {
            let u;
            let d = mN.bind(null, t);
            let h = [0, 0];
            let p = [0, 0];
            let m = {};
            return e = e.filter(function (e, f, g) {
              let b = u;
              u = void 0;
              let y = e.command;
              let k = e.args;
              let v = g[f + 1];
              if ("Z" !== y && "z" !== y) {
                var w;
                var x = k;
                if ("s" === y) {
                  x = [0, 0].concat(k);
                  let e = m.args;
                  let t = e.length;
                  x[0] = e[t - 2] - e[t - 4];
                  x[1] = e[t - 1] - e[t - 3];
                }
                if (t.makeArcs && ("c" == y || "s" == y) && my(x) && (w = function (e) {
                  var t = mE(e, .5);
                  var r = [t[0] / 2, t[1] / 2];
                  var n = [(t[0] + e[4]) / 2, (t[1] + e[5]) / 2];
                  var a = mk([r[0], r[1], r[0] + r[1], r[1] - r[0], n[0], n[1], n[0] + (n[1] - t[1]), n[1] - (n[0] - t[0])]);
                  var l = a && mA([0, 0], a);
                  var c = Math.min(o * i, s * l / 100);
                  if (a && l < 1e15 && [1 / 4, 3 / 4].every(function (t) {
                    return Math.abs(mA(mE(e, t), a) - l) <= c;
                  })) return {
                    center: a,
                    radius: l
                  };
                }(x))) {
                  var S;
                  var C = n([w.radius])[0];
                  var A = mD(x, w);
                  var T = x[5] * x[0] - x[4] * x[1] > 0 ? 1 : 0;
                  var E = {
                    command: "a",
                    args: [C, C, 0, 0, T, x[4], x[5]],
                    coords: e.coords.slice(),
                    base: e.base
                  };
                  var P = [E];
                  var L = [w.center[0] - x[4], w.center[1] - x[5]];
                  var D = {
                    center: L,
                    radius: w.radius
                  };
                  var N = [e];
                  var O = 0;
                  var M = "";
                  if ("c" == m.command && my(m.args) && mL(m.args, w) || "a" == m.command && m.sdata && mL(m.sdata, w)) {
                    N.unshift(m);
                    E.base = m.base;
                    E.args[5] = E.coords[0] - E.base[0];
                    E.args[6] = E.coords[1] - E.base[1];
                    var z = "a" == m.command ? m.sdata : m.args;
                    (A += mD(z, {
                      center: [z[4] + w.center[0], z[5] + w.center[1]],
                      radius: w.radius
                    })) > Math.PI && (E.args[3] = 1);
                    O = 1;
                  }
                  for (var I = f; (v = g[++I]) && ("c" === v.command || "s" === v.command);) {
                    var R = v.args;
                    if ("s" == v.command && (R = (S = mC({
                      command: "s",
                      args: v.args.slice()
                    }, g[I - 1].args)).args, S.args = R.slice(0, 2), M = d([S])), my(R) && mP(R, D)) {
                      if ((A += mD(R, D)) - 2 * Math.PI > .001) break;
                      if (A > Math.PI && (E.args[3] = 1), N.push(v), 2 * Math.PI - A > .001) {
                        E.coords = v.coords;
                        E.args[5] = E.coords[0] - E.base[0];
                        E.args[6] = E.coords[1] - E.base[1];
                      } else {
                        E.args[5] = 2 * (D.center[0] - R[4]);
                        E.args[6] = 2 * (D.center[1] - R[5]);
                        E.coords = [E.base[0] + E.args[5], E.base[1] + E.args[6]];
                        E = {
                          command: "a",
                          args: [C, C, 0, 0, T, v.coords[0] - E.coords[0], v.coords[1] - E.coords[1]],
                          coords: v.coords,
                          base: E.coords
                        };
                        P.push(E);
                        I++;
                        break;
                      }
                      L[0] -= R[4];
                      L[1] -= R[5];
                    } else break;
                  }
                  if ((d(P) + M).length < d(N).length) {
                    if (g[I] && "s" == g[I].command && mC(g[I], g[I - 1].args), O) {
                      var q = P.shift();
                      n(q.args);
                      h[0] += q.args[5] - m.args[m.args.length - 2];
                      h[1] += q.args[6] - m.args[m.args.length - 1];
                      m.command = "a";
                      m.args = q.args;
                      e.base = m.coords = q.coords;
                    }
                    if (E = P.shift(), 1 == N.length ? e.sdata = x.slice() : N.length - 1 - O > 0 && g.splice(f + 1, N.length - 1 - O, ...P), !E) return !1;
                    y = "a";
                    k = E.args;
                    e.coords = E.coords;
                  }
                }
                if (!1 !== a) {
                  if ("m" === y || "l" === y || "t" === y || "q" === y || "s" === y || "c" === y) for (var B = k.length; B--;) k[B] += e.base[B % 2] - h[B % 2];else "h" == y ? k[0] += e.base[0] - h[0] : "v" == y ? k[0] += e.base[1] - h[1] : "a" == y && (k[5] += e.base[0] - h[0], k[6] += e.base[1] - h[1]);
                  n(k);
                  "h" == y ? h[0] += k[0] : "v" == y ? h[1] += k[0] : (h[0] += k[k.length - 2], h[1] += k[k.length - 1]);
                  n(h);
                  ("M" === y || "m" === y) && (p[0] = h[0], p[1] = h[1]);
                }
                let u = "a" === y ? mS(k) : void 0;
                if (t.smartArcRounding && void 0 !== u && a) for (let e = a; e >= 0; e--) {
                  let t = _toFixed2(k[0], e);
                  if (Math.abs(u - mS([t, t, ...k.slice(2)])) < i) {
                    k[0] = t;
                    k[1] = t;
                  } else break;
                }
                if (t.straightCurves && ("c" === y && mx(k) || "s" === y && mx(x) ? (v && "s" == v.command && mC(v, k), y = "l", k = k.slice(-2)) : "q" === y && mx(k) ? (v && "t" == v.command && mC(v, k), y = "l", k = k.slice(-2)) : "t" === y && "q" !== m.command && "t" !== m.command ? (y = "l", k = k.slice(-2)) : "a" === y && (0 === k[0] || 0 === k[1] || void 0 !== u && u < i) && (y = "l", k = k.slice(-2))), t.convertToQ && "c" == y) {
                  let r = .75 * (e.base[0] + k[0]) - .25 * e.base[0];
                  let a = .75 * (e.base[0] + k[2]) - .25 * (e.base[0] + k[4]);
                  if (Math.abs(r - a) < 2 * i) {
                    let o = .75 * (e.base[1] + k[1]) - .25 * e.base[1];
                    let s = .75 * (e.base[1] + k[3]) - .25 * (e.base[1] + k[5]);
                    if (Math.abs(o - s) < 2 * i) {
                      let i = k.slice();
                      i.splice(0, 4, r + a - e.base[0], o + s - e.base[1]);
                      n(i);
                      let l = cleanupOutData(k, t).length;
                      cleanupOutData(i, t).length < l && (y = "q", k = i, v && "s" == v.command && mC(v, k));
                    }
                  }
                }
                if (t.lineShorthands && "l" === y && (0 === k[1] ? (y = "h", k.pop()) : 0 === k[0] && (y = "v", k.shift())), t.collapseRepeated && !1 === c && ("m" === y || "h" === y || "v" === y) && m.command && y == m.command.toLowerCase() && ("h" != y && "v" != y || m.args[0] >= 0 == k[0] >= 0)) {
                  m.args[0] += k[0];
                  "h" != y && "v" != y && (m.args[1] += k[1]);
                  m.coords = e.coords;
                  g[f] = m;
                  return !1;
                }
                if (t.curveSmoothShorthands && m.command) {
                  if ("c" === y) "c" === m.command && Math.abs(k[0] - -(m.args[2] - m.args[4])) < i && Math.abs(k[1] - -(m.args[3] - m.args[5])) < i ? (y = "s", k = k.slice(2)) : "s" === m.command && Math.abs(k[0] - -(m.args[0] - m.args[2])) < i && Math.abs(k[1] - -(m.args[1] - m.args[3])) < i ? (y = "s", k = k.slice(2)) : "c" !== m.command && "s" !== m.command && Math.abs(k[0]) < i && Math.abs(k[1]) < i && (y = "s", k = k.slice(2));else if ("q" === y) {
                    if ("q" === m.command && Math.abs(k[0] - (m.args[2] - m.args[0])) < i && Math.abs(k[1] - (m.args[3] - m.args[1])) < i) {
                      y = "t";
                      k = k.slice(2);
                    } else if ("t" === m.command) {
                      let t = mT(b, e.base);
                      let r = [k[0] + e.base[0], k[1] + e.base[1]];
                      Math.abs(t[0] - r[0]) < i && Math.abs(t[1] - r[1]) < i && (y = "t", k = k.slice(2));
                    }
                  }
                }
                if (t.removeUseless && !l && (("l" === y || "h" === y || "v" === y || "q" === y || "t" === y || "c" === y || "s" === y) && k.every(function (e) {
                  return 0 === e;
                }) || "a" === y && 0 === k[5] && 0 === k[6])) {
                  g[f] = m;
                  return !1;
                }
                t.convertToZ && (r || v?.command === "Z" || v?.command === "z") && ("l" === y || "h" === y || "v" === y) && Math.abs(p[0] - e.coords[0]) < i && Math.abs(p[1] - e.coords[1]) < i && (y = "z", k = []);
                e.command = y;
                e.args = k;
              } else if (h[0] = p[0], h[1] = p[1], "Z" === m.command || "z" === m.command) return !1;
              return !(("Z" === y || "z" === y) && t.removeUseless && r && Math.abs(e.base[0] - e.coords[0]) < i / 10 && Math.abs(e.base[1] - e.coords[1]) < i / 10) && ("q" === y ? u = [k[0] + e.base[0], k[1] + e.base[1]] : "t" === y && (u = b ? mT(b, e.base) : e.coords), m = e, !0);
            });
          }(t, A, {
            isSafeToUseZ: h,
            maybeHasStrokeAndLinecap: u && d,
            hasMarkerMid: l
          }), utilizeAbsolute && (t = function (e, t) {
            var r = e[0];
            return e = e.filter(function (e, a) {
              if (0 == a) return !0;
              if ("Z" === e.command || "z" === e.command) {
                r = e;
                return !0;
              }
              var i = e.command;
              var o = e.args;
              var s = o.slice();
              var l = o.slice();
              if ("m" === i || "l" === i || "t" === i || "q" === i || "s" === i || "c" === i) for (var c = s.length; c--;) s[c] += e.base[c % 2];else "h" == i ? s[0] += e.base[0] : "v" == i ? s[0] += e.base[1] : "a" == i && (s[5] += e.base[0], s[6] += e.base[1]);
              n(s);
              n(l);
              var u = cleanupOutData(s, t);
              var d = cleanupOutData(l, t);
              (t.forceAbsolutePath || u.length < d.length && !(t.negativeExtraSpace && i == r.command && r.command.charCodeAt(0) > 96 && u.length == d.length - 1 && (o[0] < 0 || 0 === Math.floor(o[0]) && !Number.isInteger(o[0]) && r.args[r.args.length - 1] % 1))) && (e.command = i.toUpperCase(), e.args = s);
              r = e;
              return !0;
            });
          }(t, A)), js2path(e, t, A));
        }
      }
    }
  };
};
let mb = e => {
  let t = [0, 0];
  let r = [0, 0];
  let n = [0, 0];
  for (let a = 0; a < e.length; a += 1) {
    let i = e[a];
    let {
      command,
      args
    } = i;
    "m" === command && (r[0] += args[0], r[1] += args[1], t[0] = r[0], t[1] = r[1]);
    "M" === command && (0 !== a && (o = "m"), args[0] -= r[0], args[1] -= r[1], r[0] += args[0], r[1] += args[1], t[0] = r[0], t[1] = r[1]);
    "l" === command && (r[0] += args[0], r[1] += args[1]);
    "L" === command && (o = "l", args[0] -= r[0], args[1] -= r[1], r[0] += args[0], r[1] += args[1]);
    "h" === command && (r[0] += args[0]);
    "H" === command && (o = "h", args[0] -= r[0], r[0] += args[0]);
    "v" === command && (r[1] += args[0]);
    "V" === command && (o = "v", args[0] -= r[1], r[1] += args[0]);
    "c" === command && (r[0] += args[4], r[1] += args[5]);
    "C" === command && (o = "c", args[0] -= r[0], args[1] -= r[1], args[2] -= r[0], args[3] -= r[1], args[4] -= r[0], args[5] -= r[1], r[0] += args[4], r[1] += args[5]);
    "s" === command && (r[0] += args[2], r[1] += args[3]);
    "S" === command && (o = "s", args[0] -= r[0], args[1] -= r[1], args[2] -= r[0], args[3] -= r[1], r[0] += args[2], r[1] += args[3]);
    "q" === command && (r[0] += args[2], r[1] += args[3]);
    "Q" === command && (o = "q", args[0] -= r[0], args[1] -= r[1], args[2] -= r[0], args[3] -= r[1], r[0] += args[2], r[1] += args[3]);
    "t" === command && (r[0] += args[0], r[1] += args[1]);
    "T" === command && (o = "t", args[0] -= r[0], args[1] -= r[1], r[0] += args[0], r[1] += args[1]);
    "a" === command && (r[0] += args[5], r[1] += args[6]);
    "A" === command && (o = "a", args[5] -= r[0], args[6] -= r[1], r[0] += args[5], r[1] += args[6]);
    ("Z" === command || "z" === command) && (r[0] = t[0], r[1] = t[1]);
    i.command = command;
    i.args = args;
    i.base = n;
    i.coords = [r[0], r[1]];
    n = i.coords;
  }
  return e;
};
function my(e) {
  var t = mk([0, 0, e[2], e[3], e[0], e[1], e[4], e[5]]);
  return null != t && e[2] < t[0] == t[0] < 0 && e[3] < t[1] == t[1] < 0 && e[4] < t[0] == t[0] < e[0] && e[5] < t[1] == t[1] < e[1];
}
function mk(e) {
  var t = e[1] - e[3];
  var r = e[2] - e[0];
  var n = e[0] * e[3] - e[2] * e[1];
  var a = e[5] - e[7];
  var i = e[6] - e[4];
  var o = e[4] * e[7] - e[5] * e[6];
  var s = t * i - a * r;
  if (s) {
    var l = [(r * o - i * n) / s, -((t * o - a * n) / s)];
    if (!isNaN(l[0]) && !isNaN(l[1]) && isFinite(l[0]) && isFinite(l[1])) return l;
  }
}
function mv(e) {
  let t = a || 0;
  for (let r = e.length; r-- > 0;) {
    let n = _toFixed2(e[r], t);
    if (n !== e[r]) {
      let a = _toFixed2(e[r], t - 1);
      e[r] = _toFixed2(Math.abs(a - e[r]), t + 1) >= i ? n : a;
    }
  }
  return e;
}
function mw(e) {
  for (var t = e.length; t-- > 0;) e[t] = Math.round(e[t]);
  return e;
}
function mx(e) {
  var t = e.length - 2;
  var r = -e[t + 1];
  var n = e[t];
  var a = 1 / (r * r + n * n);
  if (t <= 1 || !isFinite(a)) return !1;
  for (; (t -= 2) >= 0;) if (Math.sqrt(Math.pow(r * e[t] + n * e[t + 1], 2) * a) > i) return !1;
  return !0;
}
function mS(e) {
  if (1 === e[3]) return;
  let [t, r] = e;
  if (Math.abs(t - r) > i) return;
  let n = Math.sqrt(e[5] ** 2 + e[6] ** 2);
  if (!(n > 2 * t)) return t - Math.sqrt(t ** 2 - .25 * n ** 2);
}
function mC(e, t) {
  switch (e.command) {
    case "s":
      e.command = "c";
      break;
    case "t":
      e.command = "q";
  }
  e.args.unshift(t[t.length - 2] - t[t.length - 4], t[t.length - 1] - t[t.length - 3]);
  return e;
}
function mA(e, t) {
  return Math.sqrt((e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2);
}
function mT(e, t) {
  return [2 * t[0] - e[0], 2 * t[1] - e[1]];
}
function mE(e, t) {
  var r = t * t;
  var n = r * t;
  var a = 1 - t;
  var i = a * a;
  return [3 * i * t * e[0] + 3 * a * r * e[2] + n * e[4], 3 * i * t * e[1] + 3 * a * r * e[3] + n * e[5]];
}
function mP(e, t) {
  var r = Math.min(o * i, s * t.radius / 100);
  return [0, 1 / 4, .5, 3 / 4, 1].every(function (n) {
    return Math.abs(mA(mE(e, n), t.center) - t.radius) <= r;
  });
}
function mL(e, t) {
  return mP(e, {
    center: [t.center[0] + e[4], t.center[1] + e[5]],
    radius: t.radius
  });
}
function mD(e, t) {
  var r = -t.center[0];
  var n = -t.center[1];
  var a = e[4] - t.center[0];
  var i = e[5] - t.center[1];
  return Math.acos((r * a + n * i) / Math.sqrt((r * r + n * n) * (a * a + i * i)));
}
function mN(e, t) {
  return t.reduce(function (t, r) {
    var a = "";
    r.args && (a = cleanupOutData(n(r.args.slice()), e));
    return t + r.command + a;
  }, "");
}
var mO = {};
let {
  cleanupOutData: _cleanupOutData,
  toFixed: _toFixed3
} = d4;
let {
  transform2js: _transform2js,
  transformsMultiply: _transformsMultiply,
  matrixToTransform
} = pK;
mO.name = "convertTransform";
mO.description = "collapses multiple transformations and optimizes it";
mO.fn = (e, t) => {
  let {
    convertToShorts = !0,
    degPrecision,
    floatPrecision = 3,
    transformPrecision = 5,
    matrixToTransform = !0,
    shortTranslate = !0,
    shortScale = !0,
    shortRotate = !0,
    removeUseless = !0,
    collapseIntoOne = !0,
    leadingZero = !0,
    negativeExtraSpace = !1
  } = t;
  let m = {
    convertToShorts,
    degPrecision,
    floatPrecision,
    transformPrecision,
    matrixToTransform,
    shortTranslate,
    shortScale,
    shortRotate,
    removeUseless,
    collapseIntoOne,
    leadingZero,
    negativeExtraSpace
  };
  return {
    element: {
      enter: e => {
        null != e.attributes.transform && mB(e, "transform", m);
        null != e.attributes.gradientTransform && mB(e, "gradientTransform", m);
        null != e.attributes.patternTransform && mB(e, "patternTransform", m);
      }
    }
  };
};
let mB = (e, t, r) => {
  let n = _transform2js(e.attributes[t]);
  (r = mj(n, r)).collapseIntoOne && n.length > 1 && (n = [_transformsMultiply(n)]);
  r.convertToShorts ? n = mH(n, r) : n.forEach(e => m$(e, r));
  r.removeUseless && (n = mW(n));
  n.length ? e.attributes[t] = mV(n, r) : delete e.attributes[t];
};
let mj = (e, {
  ...t
}) => {
  let r = [];
  for (let t of e) "matrix" == t.name && r.push(...t.data.slice(0, 4));
  let n = t.transformPrecision;
  r.length && (t.transformPrecision = Math.min(t.transformPrecision, Math.max.apply(Math, r.map(mG)) || t.transformPrecision), n = Math.max.apply(Math, r.map(e => e.toString().replace(/\D+/g, "").length)));
  null == t.degPrecision && (t.degPrecision = Math.max(0, Math.min(t.floatPrecision, n - 2)));
  return t;
};
let mF = (e, t) => null != t.degPrecision && t.degPrecision >= 1 && t.floatPrecision < 20 ? mY(t.degPrecision, e) : mX(e);
let m_ = (e, t) => t.floatPrecision >= 1 && t.floatPrecision < 20 ? mY(t.floatPrecision, e) : mX(e);
let mU = (e, t) => t.transformPrecision >= 1 && t.floatPrecision < 20 ? mY(t.transformPrecision, e) : mX(e);
let mG = e => {
  let t = e.toString();
  return t.slice(t.indexOf(".")).length - 1;
};
let mH = (e, t) => {
  for (var r = 0; r < e.length; r++) {
    let a = e[r];
    if (t.matrixToTransform && "matrix" === a.name) {
      var n = matrixToTransform(a, t);
      mV(n, t).length <= mV([a], t).length && e.splice(r, 1, ...n);
      a = e[r];
    }
    m$(a, t);
    t.shortTranslate && "translate" === a.name && 2 === a.data.length && !a.data[1] && a.data.pop();
    t.shortScale && "scale" === a.name && 2 === a.data.length && a.data[0] === a.data[1] && a.data.pop();
    t.shortRotate && e[r - 2]?.name === "translate" && "rotate" === e[r - 1].name && "translate" === e[r].name && e[r - 2].data[0] === -e[r].data[0] && e[r - 2].data[1] === -e[r].data[1] && (e.splice(r - 2, 3, {
      name: "rotate",
      data: [e[r - 1].data[0], e[r - 2].data[0], e[r - 2].data[1]]
    }), r -= 2);
  }
  return e;
};
let mW = e => e.filter(e => (!(["translate", "rotate", "skewX", "skewY"].indexOf(e.name) > -1) || 1 != e.data.length && "rotate" != e.name || !!e.data[0]) && ("translate" != e.name || !!e.data[0] || !!e.data[1]) && ("scale" != e.name || 1 != e.data[0] || !(e.data.length < 2) && 1 != e.data[1]) && ("matrix" != e.name || 1 != e.data[0] || 1 != e.data[3] || !!e.data[1] || !!e.data[2] || !!e.data[4] || !!e.data[5]));
let mV = (e, t) => e.map(e => (m$(e, t), `${e.name}(${_cleanupOutData(e.data, t)})`)).join("");
let m$ = (e, t) => {
  switch (e.name) {
    case "translate":
      e.data = m_(e.data, t);
      break;
    case "rotate":
      e.data = [...mF(e.data.slice(0, 1), t), ...m_(e.data.slice(1), t)];
      break;
    case "skewX":
    case "skewY":
      e.data = mF(e.data, t);
      break;
    case "scale":
      e.data = mU(e.data, t);
      break;
    case "matrix":
      e.data = [...mU(e.data.slice(0, 4), t), ...m_(e.data.slice(4), t)];
  }
  return e;
};
let mX = e => e.map(Math.round);
let mY = (e, t) => {
  for (r = t.length, n = +Math.pow(.1, e).toFixed(e), void 0; r--;) {
    var r;
    var n;
    if (_toFixed3(t[r], e) !== t[r]) {
      var a = +t[r].toFixed(e - 1);
      t[r] = +Math.abs(a - t[r]).toFixed(e + 1) >= n ? +t[r].toFixed(e) : a;
    }
  }
  return t;
};
var mK = {};
let {
  attrsGroups: _attrsGroups
} = f;
mK.name = "removeEmptyAttrs";
mK.description = "removes empty attributes";
mK.fn = () => ({
  element: {
    enter: e => {
      for (let [t, r] of Object.entries(e.attributes)) "" !== r || _attrsGroups.conditionalProcessing.has(t) || delete e.attributes[t];
    }
  }
});
var mZ = {};
let {
  detachNodeFromParent: _detachNodeFromParent17
} = I;
let {
  elemsGroups: _elemsGroups5
} = f;
mZ.name = "removeEmptyContainers";
mZ.description = "removes empty container elements";
mZ.fn = () => ({
  element: {
    exit: (e, t) => {
      "svg" !== e.name && _elemsGroups5.container.has(e.name) && 0 === e.children.length && ("pattern" !== e.name || 0 === Object.keys(e.attributes).length) && ("g" !== e.name || null == e.attributes.filter) && ("mask" !== e.name || null == e.attributes.id) && ("element" !== t.type || "switch" !== t.name) && _detachNodeFromParent17(e, t);
    }
  }
});
var m1 = {};
let {
  collectStylesheet: _collectStylesheet5,
  computeStyle: _computeStyle5
} = dI;
let {
  path2js: _path2js2,
  js2path: _js2path,
  intersects
} = pR;
m1.name = "mergePaths";
m1.description = "merges multiple paths in one if possible";
m1.fn = (e, t) => {
  let {
    force = !1,
    floatPrecision,
    noSpaceAfterFlags = !1
  } = t;
  let i = _collectStylesheet5(e);
  return {
    element: {
      enter: e => {
        if (e.children.length <= 1) return;
        let t = [];
        let o = e.children[0];
        let s = null;
        let l = (e, t) => {
          _js2path(e, t, {
            floatPrecision,
            noSpaceAfterFlags
          });
          s = null;
        };
        for (let n = 1; n < e.children.length; n++) {
          let a = e.children[n];
          if ("element" !== o.type || "path" !== o.name || 0 !== o.children.length || null == o.attributes.d) {
            s && "element" === o.type && l(o, s);
            o = a;
            continue;
          }
          if ("element" !== a.type || "path" !== a.name || 0 !== a.children.length || null == a.attributes.d) {
            s && l(o, s);
            o = a;
            continue;
          }
          let c = _computeStyle5(i, a);
          if (c["marker-start"] || c["marker-mid"] || c["marker-end"]) {
            s && l(o, s);
            o = a;
            continue;
          }
          let u = Object.keys(a.attributes);
          if (u.length !== Object.keys(o.attributes).length || u.some(e => "d" !== e && "element" === o.type && o.attributes[e] !== a.attributes[e])) {
            s && l(o, s);
            o = a;
            continue;
          }
          let d = null != s;
          let h = _path2js2(a);
          if (s = s ?? _path2js2(o), force || !intersects(s, h)) {
            s.push(...h);
            t.push(a);
            continue;
          }
          d && l(o, s);
          o = a;
          s = null;
        }
        s && "element" === o.type && l(o, s);
        e.children = e.children.filter(e => !t.includes(e));
      }
    }
  };
};
var m6 = {};
m6.name = "removeUnusedNS";
m6.description = "removes unused namespaces declaration";
m6.fn = () => {
  let e = new Set();
  return {
    element: {
      enter: (t, r) => {
        if ("svg" === t.name && "root" === r.type) {
          for (let r of Object.keys(t.attributes)) if (r.startsWith("xmlns:")) {
            let t = r.slice(6);
            e.add(t);
          }
        }
        if (0 !== e.size) {
          if (t.name.includes(":")) {
            let [r] = t.name.split(":");
            e.has(r) && e.$$delete(r);
          }
          for (let r of Object.keys(t.attributes)) if (r.includes(":")) {
            let [t] = r.split(":");
            e.$$delete(t);
          }
        }
      },
      exit: (t, r) => {
        if ("svg" === t.name && "root" === r.type) for (let r of e) delete t.attributes[`xmlns:${r}`];
      }
    }
  };
};
var m9 = {};
m9.name = "sortAttrs";
m9.description = "Sort element attributes for better compression";
m9.fn = (e, t) => {
  let {
    order = ["id", "width", "height", "x", "x1", "x2", "y", "y1", "y2", "cx", "cy", "r", "fill", "stroke", "marker", "d", "points"],
    xmlnsOrder = "front"
  } = t;
  let a = e => {
    if ("front" === xmlnsOrder) {
      if ("xmlns" === e) return 3;
      if (e.startsWith("xmlns:")) return 2;
    }
    return e.includes(":") ? 1 : 0;
  };
  let i = ([e], [t]) => {
    let n = a(e);
    let i = a(t) - n;
    if (0 !== i) return i;
    let [o] = e.split("-");
    let [s] = t.split("-");
    if (o !== s) {
      let e = order.includes(o) ? 1 : 0;
      let t = order.includes(s) ? 1 : 0;
      if (1 === e && 1 === t) return order.indexOf(o) - order.indexOf(s);
      let n = t - e;
      if (0 !== n) return n;
    }
    return e < t ? -1 : 1;
  };
  return {
    element: {
      enter: e => {
        let t = Object.entries(e.attributes);
        t.sort(i);
        let r = {};
        for (let [e, n] of t) r[e] = n;
        e.attributes = r;
      }
    }
  };
};
var m7 = {};
m7.name = "sortDefsChildren";
m7.description = "Sorts children of <defs> to improve compression";
m7.fn = () => ({
  element: {
    enter: e => {
      if ("defs" === e.name) {
        let t = new Map();
        for (let r of e.children) if ("element" === r.type) {
          let e = t.get(r.name);
          null == e ? t.set(r.name, 1) : t.set(r.name, e + 1);
        }
        e.children.sort((e, r) => {
          if ("element" !== e.type || "element" !== r.type) return 0;
          let n = t.get(e.name);
          let a = t.get(r.name);
          if (null != n && null != a) {
            let e = a - n;
            if (0 !== e) return e;
          }
          let i = r.name.length - e.name.length;
          return 0 !== i ? i : e.name !== r.name ? e.name > r.name ? -1 : 1 : 0;
        });
      }
    }
  }
});
var fe = {};
let {
  detachNodeFromParent: _detachNodeFromParent6
} = I;
fe.name = "removeTitle";
fe.description = "removes <title>";
fe.fn = () => ({
  element: {
    enter: (e, t) => {
      "title" === e.name && _detachNodeFromParent6(e, t);
    }
  }
});
var fr = {};
let {
  detachNodeFromParent: _detachNodeFromParent7
} = I;
fr.name = "removeDesc";
fr.description = "removes <desc>";
let fa = /^(Created with|Created using)/;
fr.fn = (e, t) => {
  let {
    removeAny = !1
  } = t;
  return {
    element: {
      enter: (e, t) => {
        "desc" === e.name && (removeAny || 0 === e.children.length || "text" === e.children[0].type && fa.test(e.children[0].value)) && _detachNodeFromParent7(e, t);
      }
    }
  };
};
let {
  createPreset
} = z;
let fo = createPreset({
  name: "preset-default",
  plugins: [rn, ri, rs, ru, rh, rf, rk, rx, d3, hn, hh, hg, hv, hT, hj, hG, hQ, hJ, h3, pf, pb, pw, px, pT, pN, pI, mO, mK, mZ, m1, m6, m9, m7, fe, fr]
});
var fs = {};
fs.name = "addAttributesToSVGElement";
fs.description = "adds attributes to an outer <svg> element";
var fl = `Error in plugin "addAttributesToSVGElement": absent parameters.
It should have a list of "attributes" or one "attribute".
Config example:

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attribute: "mySvg"
    }
  }
]

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: ["mySvg", "size-big"]
    }
  }
]

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: [
        {
          focusable: false
        },
        {
          'data-image': icon
        }
      ]
    }
  }
]
`;
fs.fn = (e, t) => {
  if (!Array.isArray(t.attributes) && !t.attribute) {
    console.error(fl);
    return null;
  }
  let r = t.attributes || [t.attribute];
  return {
    element: {
      enter: (e, t) => {
        if ("svg" === e.name && "root" === t.type) {
          for (let t of r) if ("string" == typeof t && null == e.attributes[t] && (e.attributes[t] = void 0), "object" == typeof t) for (let r of Object.keys(t)) null == e.attributes[r] && (e.attributes[r] = t[r]);
        }
      }
    }
  };
};
var fc = {};
fc.name = "addClassesToSVGElement";
fc.description = "adds classnames to an outer <svg> element";
var fu = `Error in plugin "addClassesToSVGElement": absent parameters.
It should have a list of classes in "classNames" or one "className".
Config example:

plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      className: "mySvg"
    }
  }
]

plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      classNames: ["mySvg", "size-big"]
    }
  }
]
`;
fc.fn = (e, t) => {
  if (!(Array.isArray(t.classNames) && t.classNames.some(String)) && !t.className) {
    console.error(fu);
    return null;
  }
  let r = t.classNames || [t.className];
  return {
    element: {
      enter: (e, t) => {
        if ("svg" === e.name && "root" === t.type) {
          let t = new Set(e.attributes.$$class?.split(" "));
          for (let e of r) null != e && t.add(e);
          e.attributes.$$class = Array.from(t).join(" ");
        }
      }
    }
  };
};
var fd = {};
let {
  removeLeadingZero: _removeLeadingZero
} = d4;
fd.name = "cleanupListOfValues";
fd.description = "rounds list of values to the fixed precision";
let fp = /^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/;
let fm = /\s+,?\s*|,\s*/;
let ff = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  in: 96,
  pt: 4 / 3,
  pc: 16,
  px: 1
};
fd.fn = (e, t) => {
  let {
    floatPrecision = 3,
    leadingZero = !0,
    defaultPx = !0,
    convertToPx = !0
  } = t;
  let o = e => {
    let t = [];
    for (let o of e.split(fm)) {
      let e = o.match(fp);
      let s = o.match(/new/);
      if (e) {
        let o;
        let s = Number(Number(e[1]).toFixed(floatPrecision));
        let l = e[3] || "";
        if (convertToPx && l && l in ff) {
          let t = Number((ff[l] * Number(e[1])).toFixed(floatPrecision));
          t.toString().length < e[0].length && (s = t, l = "px");
        }
        o = leadingZero ? _removeLeadingZero(s) : s.toString();
        defaultPx && "px" === l && (l = "");
        t.push(o + l);
      } else s ? t.push("new") : o && t.push(o);
    }
    return t.join(" ");
  };
  return {
    element: {
      enter: e => {
        null != e.attributes.points && (e.attributes.points = o(e.attributes.points));
        null != e.attributes["enable-background"] && (e.attributes["enable-background"] = o(e.attributes["enable-background"]));
        null != e.attributes.viewBox && (e.attributes.viewBox = o(e.attributes.viewBox));
        null != e.attributes["stroke-dasharray"] && (e.attributes["stroke-dasharray"] = o(e.attributes["stroke-dasharray"]));
        null != e.attributes.dx && (e.attributes.dx = o(e.attributes.dx));
        null != e.attributes.dy && (e.attributes.dy = o(e.attributes.dy));
        null != e.attributes.x && (e.attributes.x = o(e.attributes.x));
        null != e.attributes.y && (e.attributes.y = o(e.attributes.y));
      }
    }
  };
};
var fg = {};
let {
  attrsGroupsDefaults: _attrsGroupsDefaults2,
  colorsProps
} = f;
let {
  detachNodeFromParent: _detachNodeFromParent18,
  querySelectorAll: _querySelectorAll2,
  querySelector: _querySelector
} = I;
let {
  computeStyle: _computeStyle6,
  collectStylesheet: _collectStylesheet6
} = dI;
fg.name = "convertOneStopGradients";
fg.description = "converts one-stop (single color) gradients to a plain color";
fg.fn = e => {
  let t = _collectStylesheet6(e);
  let r = new Set();
  let n = new Map();
  let a = new Map();
  let i = 0;
  return {
    element: {
      enter: (o, s) => {
        let l;
        if (null != o.attributes["xlink:href"] && i++, "defs" === o.name) {
          n.set(o, s);
          return;
        }
        if ("linearGradient" !== o.name && "radialGradient" !== o.name) return;
        let c = o.children.filter(e => "element" === e.type && "stop" === e.name);
        let u = o.attributes["xlink:href"] || o.attributes.href;
        let d = 0 === c.length && null != u && u.startsWith("#") ? _querySelector(e, u) : o;
        if (null == d || "element" !== d.type) {
          a.set(o, s);
          return;
        }
        let h = d.children.filter(e => "element" === e.type && "stop" === e.name);
        if (1 !== h.length || "element" !== h[0].type) return;
        "element" === s.type && "defs" === s.name && r.add(s);
        a.set(o, s);
        let p = _computeStyle6(t, h[0])["stop-color"];
        null != p && "static" === p.type && (l = p.value);
        let m = `url(#${o.attributes.id})`;
        for (let t of _querySelectorAll2(e, [...colorsProps].map(e => `[${e}="${m}"]`).join(","))) if ("element" === t.type) for (let e of colorsProps) t.attributes[e] === m && (null != l ? t.attributes[e] = l : delete t.attributes[e]);
        for (let t of _querySelectorAll2(e, `[style*=${m}]`)) "element" === t.type && (t.attributes.style = t.attributes.style.replace(m, l || _attrsGroupsDefaults2.presentation["stop-color"]));
      },
      exit: e => {
        if ("svg" === e.name) {
          for (let [e, t] of a.entries()) {
            null != e.attributes["xlink:href"] && i--;
            _detachNodeFromParent18(e, t);
          }
          for (let [t, a] of (0 === i && delete e.attributes["xmlns:xlink"], n.entries())) r.has(t) && 0 === t.children.length && _detachNodeFromParent18(t, a);
        }
      }
    }
  };
};
var fC = {};
let {
  attrsGroups: _attrsGroups2
} = f;
fC.name = "convertStyleToAttrs";
fC.description = "converts style to attributes";
let fT = (...e) => "(?:" + e.join("|") + ")";
let fE = _attrsGroups2.presentation;
let fP = "\\\\(?:[0-9a-f]{1,6}\\s?|\\r\\n|.)";
let fL = "\\s*(" + fT("[^:;\\\\]", fP) + "*?)\\s*";
let fD = "'(?:[^'\\n\\r\\\\]|" + fP + ")*?(?:'|$)";
let fN = '"(?:[^"\\n\\r\\\\]|' + fP + ')*?(?:"|$)';
let fO = RegExp("^" + fT(fD, fN) + "$");
let fM = "\\(" + fT("[^'\"()\\\\]+", fP, fD, fN) + "*?\\)";
let fz = RegExp(fL + ":" + ("\\s*(" + fT("[^!'\"();\\\\]+?", fP, fD, fN, fM, "[^;]*?")) + "*?)(\\s*!important(?![-(\\w]))?\\s*(?:;\\s*|$)", "ig");
let fI = RegExp(fT(fP, fD, fN, "/\\*[^]*?\\*/"), "ig");
fC.fn = (e, t) => {
  let {
    keepImportant = !1
  } = t;
  return {
    element: {
      enter: e => {
        if (null != e.attributes.style) {
          let n = [];
          let a = {};
          let i = e.attributes.style.replace(fI, e => "/" == e[0] ? "" : "\\" == e[0] && /[-g-z]/i.test(e[1]) ? e[1] : e);
          fz.lastIndex = 0;
          for (var t; t = fz.exec(i);) keepImportant && t[3] || n.push([t[1], t[2]]);
          n.length && (n = n.filter(function (e) {
            if (e[0]) {
              var t = e[0].toLowerCase();
              var r = e[1];
              if (fO.test(r) && (r = r.slice(1, -1)), fE.has(t)) {
                a[t] = r;
                return !1;
              }
            }
            return !0;
          }), Object.assign(e.attributes, a), n.length ? e.attributes.style = n.map(e => e.join(":")).join(";") : delete e.attributes.style);
        }
      }
    }
  };
};
var fR = {};
let {
  referencesProps
} = f;
fR.name = "prefixIds";
fR.description = "prefix IDs";
let fB = e => {
  let t = /[/\\]?([^/\\]+)$/.exec(e);
  return t ? t[1] : "";
};
let fj = e => e.replace(/[. ]/g, "_");
let fF = e => e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'") ? e.slice(1, -1) : e;
let f_ = (e, t) => {
  let r = e(t);
  return t.startsWith(r) ? t : r + t;
};
let fU = (e, t) => t.startsWith("#") ? "#" + f_(e, t.slice(1)) : null;
let fG = (e, t, r, n, a, i) => {
  if ("function" == typeof n) {
    let o = i.get(e);
    null != o || (o = n(t, r) + a, i.set(e, o));
    return o;
  }
  return "string" == typeof n ? n + a : !1 === n ? "" : null != r.path && r.path.length > 0 ? fj(fB(r.path)) + a : "prefix" + a;
};
fR.fn = (e, t, r) => {
  let {
    delim = "__",
    prefix,
    prefixIds = !0,
    prefixClassNames = !0
  } = t;
  let s = new Map();
  return {
    element: {
      enter: e => {
        let t = t => fG(t, e, r, prefix, delim, s);
        if ("style" === e.name) {
          if (0 === e.children.length) return;
          for (let r of e.children) {
            if ("text" !== r.type && "cdata" !== r.type) continue;
            let e = r.value;
            let n = null;
            try {
              n = rS.parse(e, {
                parseValue: !0,
                parseCustomProperty: !1
              });
            } catch {
              return;
            }
            rS.walk(n, e => {
              if (prefixIds && "IdSelector" === e.type || prefixClassNames && "ClassSelector" === e.type) {
                e.name = f_(t, e.name);
                return;
              }
              if ("Url" === e.type && e.value.length > 0) {
                let r = fU(t, fF(e.value));
                null != r && (e.value = r);
              }
            });
            r.value = rS.generate(n);
            return;
          }
        }
        for (let r of (prefixIds && null != e.attributes.id && 0 !== e.attributes.id.length && (e.attributes.id = f_(t, e.attributes.id)), prefixClassNames && null != e.attributes.$$class && 0 !== e.attributes.$$class.length && (e.attributes.$$class = e.attributes.$$class.split(/\s+/).map(e => f_(t, e)).join(" ")), ["href", "xlink:href"])) if (null != e.attributes[r] && 0 !== e.attributes[r].length) {
          let n = fU(t, e.attributes[r]);
          null != n && (e.attributes[r] = n);
        }
        for (let r of referencesProps) null != e.attributes[r] && 0 !== e.attributes[r].length && (e.attributes[r] = e.attributes[r].replace(/\burl\((["'])?(#.+?)\1\)/gi, (e, r, n) => {
          let a = fU(t, n);
          return null == a ? e : `url(${a})`;
        }));
        for (let r of ["begin", "end"]) if (null != e.attributes[r] && 0 !== e.attributes[r].length) {
          let n = e.attributes[r].split(/\s*;\s+/).map(e => {
            if (e.endsWith(".end") || e.endsWith(".start")) {
              let [r, n] = e.split(".");
              return `${f_(t, r)}.${n}`;
            }
            return e;
          });
          e.attributes[r] = n.join("; ");
        }
      }
    }
  };
};
var fH = {};
let {
  querySelectorAll
} = I;
fH.name = "removeAttributesBySelector";
fH.description = "removes attributes of elements that match a css selector";
fH.fn = (e, t) => {
  for (let {
    selector,
    attributes
  } of Array.isArray(t.selectors) ? t.selectors : [t]) for (let t of querySelectorAll(e, selector)) if ("element" === t.type) {
    if (Array.isArray(attributes)) for (let e of attributes) delete t.attributes[e];else delete t.attributes[attributes];
  }
  return {};
};
var fV = {};
fV.name = "removeAttrs";
fV.description = "removes specified attributes";
let f$ = `Warning: The plugin "removeAttrs" requires the "attrs" parameter.
It should have a pattern to remove, otherwise the plugin is a noop.
Config example:

plugins: [
  {
    name: "removeAttrs",
    params: {
      attrs: "(fill|stroke)"
    }
  }
]
`;
fV.fn = (e, t) => {
  if (void 0 === t.attrs) {
    console.warn(f$);
    return null;
  }
  let r = "string" == typeof t.elemSeparator ? t.elemSeparator : ":";
  let n = "boolean" == typeof t.preserveCurrentColor && t.preserveCurrentColor;
  let a = Array.isArray(t.attrs) ? t.attrs : [t.attrs];
  return {
    element: {
      enter: e => {
        for (let t of a) {
          t.includes(r) ? t.split(r).length < 3 && (t = [t, ".*"].join(r)) : t = [".*", t, ".*"].join(r);
          let a = t.split(r).map(e => ("*" === e && (e = ".*"), RegExp(["^", e, "$"].join(""), "i")));
          if (a[0].test(e.name)) for (let [t, r] of Object.entries(e.attributes)) {
            let i = n && "fill" == t && "currentColor" == r;
            let o = n && "stroke" == t && "currentColor" == r;
            !i && !o && a[1].test(t) && a[2].test(r) && delete e.attributes[t];
          }
        }
      }
    }
  };
};
var fX = {};
fX.name = "removeDimensions";
fX.description = "removes width and height in presence of viewBox (opposite to removeViewBox, disable it first)";
fX.fn = () => ({
  element: {
    enter: e => {
      if ("svg" === e.name) {
        if (null != e.attributes.viewBox) {
          delete e.attributes.width;
          delete e.attributes.height;
        } else if (null != e.attributes.width && null != e.attributes.height && !1 === Number.isNaN(Number(e.attributes.width)) && !1 === Number.isNaN(Number(e.attributes.height))) {
          let t = Number(e.attributes.width);
          let r = Number(e.attributes.height);
          e.attributes.viewBox = `0 0 ${t} ${r}`;
          delete e.attributes.width;
          delete e.attributes.height;
        }
      }
    }
  }
});
var fY = {};
let {
  detachNodeFromParent: _detachNodeFromParent8
} = I;
fY.name = "removeElementsByAttr";
fY.description = "removes arbitrary elements by ID or className (disabled by default)";
fY.fn = (e, t) => {
  let r = null == t.id ? [] : Array.isArray(t.id) ? t.id : [t.id];
  let n = null == t.$$class ? [] : Array.isArray(t.$$class) ? t.$$class : [t.$$class];
  return {
    element: {
      enter: (e, t) => {
        if (null != e.attributes.id && 0 !== r.length && r.includes(e.attributes.id) && _detachNodeFromParent8(e, t), e.attributes.$$class && 0 !== n.length) {
          let r = e.attributes.$$class.split(" ");
          for (let a of n) if (r.includes(a)) {
            _detachNodeFromParent8(e, t);
            break;
          }
        }
      }
    }
  };
};
var fQ = {};
let {
  visitSkip: _visitSkip6,
  detachNodeFromParent: _detachNodeFromParent19
} = I;
let {
  parsePathData: _parsePathData2
} = h4;
let {
  intersects: _intersects
} = pR;
fQ.name = "removeOffCanvasPaths";
fQ.description = "removes elements that are drawn outside of the viewbox (disabled by default)";
fQ.fn = () => {
  let e = null;
  return {
    element: {
      enter: (t, r) => {
        if ("svg" === t.name && "root" === r.type) {
          let r = "";
          null != t.attributes.viewBox ? r = t.attributes.viewBox : null != t.attributes.height && null != t.attributes.width && (r = `0 0 ${t.attributes.width} ${t.attributes.height}`);
          r = r.replace(/[,+]|px/g, " ").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
          let n = /^(-?\d*\.?\d+) (-?\d*\.?\d+) (\d*\.?\d+) (\d*\.?\d+)$/.exec(r);
          if (null == n) return;
          let a = Number.parseFloat(n[1]);
          let i = Number.parseFloat(n[2]);
          let o = Number.parseFloat(n[3]);
          let s = Number.parseFloat(n[4]);
          e = {
            left: a,
            top: i,
            right: a + o,
            bottom: i + s,
            width: o,
            height: s
          };
        }
        if (null != t.attributes.transform) return _visitSkip6;
        if ("path" === t.name && null != t.attributes.d && null != e) {
          let n = _parsePathData2(t.attributes.d);
          let a = !1;
          for (let t of n) if ("M" === t.command) {
            let [r, n] = t.args;
            r >= e.left && r <= e.right && n >= e.top && n <= e.bottom && (a = !0);
          }
          if (a) return;
          2 === n.length && n.push({
            command: "z",
            args: []
          });
          let {
            left,
            top,
            width,
            height
          } = e;
          !1 === _intersects([{
            command: "M",
            args: [left, top]
          }, {
            command: "h",
            args: [width]
          }, {
            command: "v",
            args: [height]
          }, {
            command: "H",
            args: [left]
          }, {
            command: "z",
            args: []
          }], n) && _detachNodeFromParent19(t, r);
        }
      }
    }
  };
};
var f2 = {};
let {
  detachNodeFromParent: _detachNodeFromParent9
} = I;
f2.name = "removeRasterImages";
f2.description = "removes raster images (disabled by default)";
f2.fn = () => ({
  element: {
    enter: (e, t) => {
      "image" === e.name && null != e.attributes["xlink:href"] && /(\.|image\/)(jpe?g|png|gif)/.test(e.attributes["xlink:href"]) && _detachNodeFromParent9(e, t);
    }
  }
});
var f4 = {};
let {
  detachNodeFromParent: _detachNodeFromParent20
} = I;
let {
  attrsGroups: _attrsGroups7
} = f;
f4.name = "removeScriptElement";
f4.description = "removes scripts (disabled by default)";
let f6 = [..._attrsGroups7.animationEvent, ..._attrsGroups7.documentEvent, ..._attrsGroups7.documentElementEvent, ..._attrsGroups7.globalEvent, ..._attrsGroups7.graphicalEvent];
f4.fn = () => ({
  element: {
    enter: (e, t) => {
      if ("script" === e.name) {
        _detachNodeFromParent20(e, t);
        return;
      }
      for (let t of f6) null != e.attributes[t] && delete e.attributes[t];
    },
    exit: (e, t) => {
      if ("a" === e.name) {
        for (let r of Object.keys(e.attributes)) if ("href" === r || r.endsWith(":href")) {
          if (null == e.attributes[r] || !e.attributes[r].trimStart().startsWith("javascript:")) continue;
          let n = t.children.indexOf(e);
          for (let r of (t.children.splice(n, 1, ...e.children), e.children)) Object.defineProperty(r, "parentNode", {
            writable: !0,
            value: t
          });
        }
      }
    }
  }
});
var f9 = {};
let {
  detachNodeFromParent: _detachNodeFromParent0
} = I;
f9.name = "removeStyleElement";
f9.description = "removes <style> element (disabled by default)";
f9.fn = () => ({
  element: {
    enter: (e, t) => {
      "style" === e.name && _detachNodeFromParent0(e, t);
    }
  }
});
var ge = {};
let {
  elems
} = f;
ge.name = "removeXlink";
ge.description = "remove xlink namespace and replaces attributes with the SVG 2 equivalent where applicable";
let gr = "http://www.w3.org/1999/xlink";
let gn = {
  new: "_blank",
  replace: "_self"
};
let ga = new Set(["cursor", "filter", "font-face-uri", "glyphRef", "tref"]);
let gi = (e, t, r) => t.map(e => `${e}:${r}`).filter(t => null != e.attributes[t]);
ge.fn = (e, t) => {
  let {
    includeLegacy
  } = t;
  let n = [];
  let a = [];
  let i = [];
  return {
    element: {
      enter: e => {
        for (let [t, r] of Object.entries(e.attributes)) if (t.startsWith("xmlns:")) {
          let e = t.split(":", 2)[1];
          if (r === gr) {
            n.push(e);
            continue;
          }
          n.includes(e) && a.push(e);
        }
        if (a.some(e => n.includes(e))) return;
        let t = gi(e, n, "show");
        let o = null != e.attributes.target;
        for (let r = t.length - 1; r >= 0; r--) {
          let n = t[r];
          let a = gn[e.attributes[n]];
          if (o || null == a) {
            delete e.attributes[n];
            continue;
          }
          a !== elems[e.name]?.defaults?.target && (e.attributes.target = a);
          delete e.attributes[n];
          o = !0;
        }
        let s = gi(e, n, "title");
        for (let t = s.length - 1; t >= 0; t--) {
          let r = s[t];
          let n = e.attributes[r];
          if (e.children.filter(e => "element" === e.type && "title" === e.name).length > 0) {
            delete e.attributes[r];
            continue;
          }
          let a = {
            type: "element",
            name: "title",
            attributes: {},
            children: [{
              type: "text",
              value: n
            }]
          };
          Object.defineProperty(a, "parentNode", {
            writable: !0,
            value: e
          });
          e.children.unshift(a);
          delete e.attributes[r];
        }
        let l = gi(e, n, "href");
        if (l.length > 0 && ga.has(e.name) && !includeLegacy) {
          l.map(e => e.split(":", 1)[0]).forEach(e => i.push(e));
          return;
        }
        for (let t = l.length - 1; t >= 0; t--) {
          let r = l[t];
          let n = e.attributes[r];
          if (null != e.attributes.href) {
            delete e.attributes[r];
            continue;
          }
          e.attributes.href = n;
          delete e.attributes[r];
        }
      },
      exit: e => {
        for (let [t, o] of Object.entries(e.attributes)) {
          let [s, l] = t.split(":", 2);
          if (n.includes(s) && !a.includes(s) && !i.includes(s) && !includeLegacy) {
            delete e.attributes[t];
            continue;
          }
          if (t.startsWith("xmlns:") && !i.includes(l)) {
            if (o === gr) {
              let r = n.indexOf(l);
              n.splice(r, 1);
              delete e.attributes[t];
              continue;
            }
            if (a.includes(s)) {
              let e = a.indexOf(l);
              a.splice(e, 1);
            }
          }
        }
      }
    }
  };
};
var go = {};
go.name = "removeXMLNS";
go.description = "removes xmlns attribute (for inline svg, disabled by default)";
go.fn = () => ({
  element: {
    enter: e => {
      "svg" === e.name && delete e.attributes.xmlns;
    }
  }
});
var gs = {};
let {
  collectStylesheet: _collectStylesheet7
} = dI;
let {
  detachNodeFromParent: _detachNodeFromParent21,
  querySelectorAll: _querySelectorAll3
} = I;
gs.name = "reusePaths";
gs.description = "Finds <path> elements with the same d, fill, and stroke, and converts them to <use> elements referencing a single <path> def.";
gs.fn = e => {
  let t;
  let r = _collectStylesheet7(e);
  let n = new Map();
  let a = new Set();
  return {
    element: {
      enter: (e, r) => {
        if ("path" === e.name && null != e.attributes.d) {
          let t = e.attributes.d;
          let r = e.attributes.fill || "";
          let a = t + ";s:" + (e.attributes.stroke || "") + ";f:" + r;
          let i = n.get(a);
          null == i && (i = [], n.set(a, i));
          i.push(e);
        }
        if (null == t && "defs" === e.name && "element" === r.type && "svg" === r.name && (t = e), "use" === e.name) for (let t of ["href", "xlink:href"]) {
          let r = e.attributes[t];
          null != r && r.startsWith("#") && r.length > 1 && a.add(r.slice(1));
        }
      },
      exit: (e, i) => {
        if ("svg" === e.name && "root" === i.type) {
          let i = t;
          null == i && Object.defineProperty(i = {
            type: "element",
            name: "defs",
            attributes: {},
            children: []
          }, "parentNode", {
            writable: !0,
            value: e
          });
          let o = 0;
          for (let t of n.values()) if (t.length > 1) {
            let n = {
              type: "element",
              name: "path",
              attributes: {},
              children: []
            };
            for (let e of ["fill", "stroke", "d"]) null != t[0].attributes[e] && (n.attributes[e] = t[0].attributes[e]);
            let s = t[0].attributes.id;
            for (let l of (null == s || a.has(s) || r.rules.some(e => e.selector === `#${s}`) ? n.attributes.id = "reuse-" + o++ : (n.attributes.id = s, delete t[0].attributes.id), Object.defineProperty(n, "parentNode", {
              writable: !0,
              value: i
            }), i.children.push(n), t)) {
              if (delete l.attributes.d, delete l.attributes.stroke, delete l.attributes.fill, i.children.includes(l) && 0 === l.children.length) {
                if (0 === Object.keys(l.attributes).length) {
                  _detachNodeFromParent21(l, i);
                  continue;
                }
                if (1 === Object.keys(l.attributes).length && null != l.attributes.id) {
                  for (let t of (_detachNodeFromParent21(l, i), _querySelectorAll3(e, `[xlink\\:href=#${l.attributes.id}], [href=#${l.attributes.id}]`))) if ("element" === t.type) for (let e of ["href", "xlink:href"]) null != t.attributes[e] && (t.attributes[e] = "#" + n.attributes.id);
                  continue;
                }
              }
              l.name = "use";
              l.attributes["xlink:href"] = "#" + n.attributes.id;
            }
          }
          0 !== i.children.length && (null == e.attributes["xmlns:xlink"] && (e.attributes["xmlns:xlink"] = "http://www.w3.org/1999/xlink"), null == t && e.children.unshift(i));
        }
      }
    }
  };
};
M.builtin = [fo, fs, fc, rf, hJ, hn, fd, hg, pN, hv, pw, fg, pI, pb, fC, mO, rk, rx, m1, d3, px, pT, fR, fH, fV, rs, fr, fX, rn, rh, fY, mK, mZ, pf, h3, ru, hj, fQ, f2, f4, f9, fe, hT, m6, hh, hG, hQ, ge, go, ri, gs, m9, m7];
let {
  parseSvg
} = p;
let {
  stringifySvg
} = v;
let {
  builtin
} = M;
let {
  invokePlugins
} = z;
let {
  encodeSVGDatauri
} = d4;
let gg = {};
for (let e of builtin) gg[e.name] = e;
let gb = e => {
  if ("string" == typeof e) {
    let t = gg[e];
    if (null == t) throw Error(`Unknown builtin plugin "${e}" specified.`);
    return {
      name: e,
      params: {},
      fn: t.fn
    };
  }
  if ("object" == typeof e && null != e) {
    if (null == e.name) throw Error("Plugin name should be specified");
    let t = e.fn;
    if (null == t) {
      let r = gg[e.name];
      if (null == r) throw Error(`Unknown builtin plugin "${e.name}" specified.`);
      t = r.fn;
    }
    return {
      name: e.name,
      params: e.params,
      fn: t
    };
  }
  return null;
};
export var $$gy1 = $$h0.optimize = (e, t) => {
  if (null == t && (t = {}), "object" != typeof t) throw Error("Config should be an object");
  let r = t.multipass ? 10 : 1;
  let n = Number.POSITIVE_INFINITY;
  let a = "";
  let i = {};
  null != t.path && (i.path = t.path);
  for (let o = 0; o < r; o += 1) {
    i.multipassCount = o;
    let r = parseSvg(e, t.path);
    let s = t.plugins || ["preset-default"];
    if (!Array.isArray(s)) throw Error("malformed config, `plugins` property must be an array.\nSee more info here: https://github.com/svg/svgo#configuration");
    let l = s.filter(e => null != e).map(gb);
    l.length < s.length && console.warn("Warning: plugins list includes null or undefined elements, these will be ignored.");
    let c = {};
    if (null != t.floatPrecision && (c.floatPrecision = t.floatPrecision), invokePlugins(r, i, l, null, c), (a = stringifySvg(r, t.js2svg)).length < n) {
      e = a;
      n = a.length;
    } else break;
  }
  t.datauri && (a = encodeSVGDatauri(a, t.datauri));
  return {
    data: a
  };
};
export const _$$default = $$h0;
export const optimize = $$gy1;