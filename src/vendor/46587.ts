import { useRef, useMemo } from "react";
var s = Object.create;
var o = Object.defineProperty;
var a = Object.defineProperties;
var h = Object.getOwnPropertyDescriptor;
var d = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertyNames;
var g = Object.getOwnPropertySymbols;
var m = Object.getPrototypeOf;
var v = Object.prototype.hasOwnProperty;
var y = Object.prototype.propertyIsEnumerable;
var b = (e, r, n) => r in e ? o(e, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[r] = n;
var O = (e, r) => {
  for (var n in r || (r = {})) v.call(r, n) && b(e, n, r[n]);
  if (g) for (var n of g(r)) y.call(r, n) && b(e, n, r[n]);
  return e;
};
var x = (e, r) => a(e, d(r));
var w = (e, r) => {
  var n = {};
  for (var i in e) v.call(e, i) && 0 > r.indexOf(i) && (n[i] = e[i]);
  if (null != e && g) for (var i of g(e)) 0 > r.indexOf(i) && y.call(e, i) && (n[i] = e[i]);
  return n;
};
var k = (e, r) => {
  for (var n in r) o(e, n, {
    get: r[n],
    enumerable: !0
  });
};
var _ = (e, r, n, i) => {
  if (r && "object" == typeof r || "function" == typeof r) for (let s of p(r)) v.call(e, s) || s === n || o(e, s, {
    get: () => r[s],
    enumerable: !(i = h(r, s)) || i.enumerable
  });
  return e;
};
var $$S0 = ((e, r, n) => (n = null != e ? s(m(e)) : {}, _(!r && e && e.__esModule ? n : o(n, "default", {
  value: e,
  enumerable: !0
}), e)))(((e, r) => function () {
  r || e[p(e)[0]]((r = {
    exports: {}
  }).exports, r);
  return r.exports;
})({
  "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e, r) {
    var n = function () {
      var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var r = 0;
      var n = {};
      var i = {
        util: {
          encode: function e(r) {
            return r instanceof s ? new s(r.type, e(r.content), r.alias) : Array.isArray(r) ? r.map(e) : r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            e.__id || Object.defineProperty(e, "__id", {
              value: ++r
            });
            return e.__id;
          },
          clone: function e(r, n) {
            var s;
            var o;
            switch (n = n || {}, i.util.type(r)) {
              case "Object":
                if (n[o = i.util.objId(r)]) return n[o];
                for (var a in s = {}, n[o] = s, r) r.hasOwnProperty(a) && (s[a] = e(r[a], n));
                return s;
              case "Array":
                if (n[o = i.util.objId(r)]) return n[o];
                s = [];
                n[o] = s;
                r.forEach(function (r, i) {
                  s[i] = e(r, n);
                });
                return s;
              default:
                return r;
            }
          },
          getLanguage: function (r) {
            for (; r;) {
              var n = e.exec(r.className);
              if (n) return n[1].toLowerCase();
              r = r.parentElement;
            }
            return "none";
          },
          setLanguage: function (r, n) {
            r.className = r.className.replace(RegExp(e, "gi"), "");
            r.classList.add("language-" + n);
          },
          isActive: function (e, r, n) {
            for (var i = "no-" + r; e;) {
              var s = e.classList;
              if (s.contains(r)) return !0;
              if (s.contains(i)) return !1;
              e = e.parentElement;
            }
            return !!n;
          }
        },
        languages: {
          plain: n,
          plaintext: n,
          text: n,
          txt: n,
          extend: function (e, r) {
            var n = i.util.clone(i.languages[e]);
            for (var s in r) n[s] = r[s];
            return n;
          },
          insertBefore: function (e, r, n, s) {
            var o = (s = s || i.languages)[e];
            var a = {};
            for (var h in o) if (o.hasOwnProperty(h)) {
              if (h == r) for (var d in n) n.hasOwnProperty(d) && (a[d] = n[d]);
              n.hasOwnProperty(h) || (a[h] = o[h]);
            }
            var p = s[e];
            s[e] = a;
            i.languages.DFS(i.languages, function (r, n) {
              n === p && r != e && (this[r] = a);
            });
            return a;
          },
          DFS: function e(r, n, s, o) {
            o = o || {};
            var a = i.util.objId;
            for (var h in r) if (r.hasOwnProperty(h)) {
              n.call(r, h, r[h], s || h);
              var d = r[h];
              var p = i.util.type(d);
              "Object" !== p || o[a(d)] ? "Array" !== p || o[a(d)] || (o[a(d)] = !0, e(d, n, h, o)) : (o[a(d)] = !0, e(d, n, null, o));
            }
          }
        },
        plugins: {},
        highlight: function (e, r, n) {
          var o = {
            code: e,
            grammar: r,
            language: n
          };
          if (i.hooks.run("before-tokenize", o), !o.grammar) throw Error('The language "' + o.language + '" has no grammar.');
          o.tokens = i.tokenize(o.code, o.grammar);
          i.hooks.run("after-tokenize", o);
          return s.stringify(i.util.encode(o.tokens), o.language);
        },
        tokenize: function (e, r) {
          var n = r.rest;
          if (n) {
            for (var i in n) r[i] = n[i];
            delete r.rest;
          }
          var s = new h();
          d(s, s.head, e);
          a(e, s, r, s.head, 0);
          return g(s);
        },
        hooks: {
          all: {},
          add: function (e, r) {
            var n = i.hooks.all;
            n[e] = n[e] || [];
            n[e].push(r);
          },
          run: function (e, r) {
            var n = i.hooks.all[e];
            if (n && n.length) for (o = 0, void 0; s = n[o++];) {
              var s;
              var o;
              s(r);
            }
          }
        },
        Token: s
      };
      function s(e, r, n, i) {
        this.type = e;
        this.content = r;
        this.alias = n;
        this.length = 0 | (i || "").length;
      }
      function o(e, r, n, i) {
        e.lastIndex = r;
        var s = e.exec(n);
        if (s && i && s[1]) {
          var o = s[1].length;
          s.index += o;
          s[0] = s[0].slice(o);
        }
        return s;
      }
      function a(e, r, n, h, g, m) {
        for (var v in n) if (n.hasOwnProperty(v) && n[v]) {
          var y = n[v];
          y = Array.isArray(y) ? y : [y];
          for (var b = 0; b < y.length; ++b) {
            if (m && m.cause == v + "," + b) return;
            var O = y[b];
            var x = O.inside;
            var w = !!O.lookbehind;
            var k = !!O.greedy;
            var _ = O.alias;
            if (k && !O.pattern.global) {
              var S = O.pattern.toString().match(/[imsuy]*$/)[0];
              O.pattern = RegExp(O.pattern.source, S + "g");
            }
            for (E = O.pattern || O, A = h.next, C = g, void 0; A !== r.tail && (!m || !(C >= m.reach)); C += A.value.length, A = A.next) {
              var E;
              var A;
              var C;
              var T;
              var I = A.value;
              if (r.length > e.length) return;
              if (!(I instanceof s)) {
                var P = 1;
                if (k) {
                  if (!(T = o(E, C, e, w)) || T.index >= e.length) break;
                  var R = T.index;
                  var M = T.index + T[0].length;
                  var D = C;
                  for (D += A.value.length; R >= D;) D += (A = A.next).value.length;
                  if (D -= A.value.length, C = D, A.value instanceof s) continue;
                  for (var N = A; N !== r.tail && (D < M || "string" == typeof N.value); N = N.next) {
                    P++;
                    D += N.value.length;
                  }
                  P--;
                  I = e.slice(C, D);
                  T.index -= C;
                } else if (!(T = o(E, 0, I, w))) continue;
                var R = T.index;
                var $ = T[0];
                var L = I.slice(0, R);
                var j = I.slice(R + $.length);
                var z = C + I.length;
                m && z > m.reach && (m.reach = z);
                var Z = A.prev;
                if (L && (Z = d(r, Z, L), C += L.length), p(r, Z, P), A = d(r, Z, new s(v, x ? i.tokenize($, x) : $, _, $)), j && d(r, A, j), P > 1) {
                  var F = {
                    cause: v + "," + b,
                    reach: z
                  };
                  a(e, r, n, A.prev, C, F);
                  m && F.reach > m.reach && (m.reach = F.reach);
                }
              }
            }
          }
        }
      }
      function h() {
        var e = {
          value: null,
          prev: null,
          next: null
        };
        var r = {
          value: null,
          prev: e,
          next: null
        };
        e.next = r;
        this.head = e;
        this.tail = r;
        this.length = 0;
      }
      function d(e, r, n) {
        var i = r.next;
        var s = {
          value: n,
          prev: r,
          next: i
        };
        r.next = s;
        i.prev = s;
        e.length++;
        return s;
      }
      function p(e, r, n) {
        for (i = r.next, s = 0, void 0; s < n && i !== e.tail; s++) {
          var i;
          var s;
          i = i.next;
        }
        r.next = i;
        i.prev = r;
        e.length -= s;
      }
      function g(e) {
        for (r = [], n = e.head.next, void 0; n !== e.tail;) {
          var r;
          var n;
          r.push(n.value);
          n = n.next;
        }
        return r;
      }
      s.stringify = function e(r, n) {
        if ("string" == typeof r) return r;
        if (Array.isArray(r)) {
          var s = "";
          r.forEach(function (r) {
            s += e(r, n);
          });
          return s;
        }
        var o = {
          type: r.type,
          content: e(r.content, n),
          tag: "span",
          classes: ["token", r.type],
          attributes: {},
          language: n
        };
        var a = r.alias;
        a && (Array.isArray(a) ? Array.prototype.push.apply(o.classes, a) : o.classes.push(a));
        i.hooks.run("wrap", o);
        var h = "";
        for (var d in o.attributes) h += " " + d + '="' + (o.attributes[d] || "").replace(/"/g, "&quot;") + '"';
        return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + h + ">" + o.content + "</" + o.tag + ">";
      };
      return i;
    }();
    r.exports = n;
    n.$$default = n;
  }
})());
/*! Bundled license information:
prismjs/prism.js:
(**
* Prism: Lightweight, robust, elegant syntax highlighting
*
* @license MIT <https://opensource.org/licenses/MIT>
* @author Lea Verou <https://lea.verou.me>
* @namespace
* @public
*)
*/
$$S0.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [{
            pattern: /^=/,
            alias: "attr-equals"
          }, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: !0
          }]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
};
$$S0.languages.markup.tag.inside["attr-value"].inside.entity = $$S0.languages.markup.entity;
$$S0.languages.markup.doctype.inside["internal-subset"].inside = $$S0.languages.markup;
$$S0.hooks.add("wrap", function (e) {
  "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty($$S0.languages.markup.tag, "addInlined", {
  value: function (e, r) {
    var n = {};
    n["language-" + r] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: $$S0.languages[r]
    };
    n.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: n
      }
    };
    n["language-" + r] = {
      pattern: /[\s\S]+/,
      inside: $$S0.languages[r]
    };
    var r = {};
    r[e] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return e;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: n
    };
    $$S0.languages.insertBefore("markup", "cdata", r);
  }
});
Object.defineProperty($$S0.languages.markup.tag, "addAttribute", {
  value: function (e, r) {
    $$S0.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [r, "language-" + r],
              inside: $$S0.languages[r]
            },
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
});
$$S0.languages.html = $$S0.languages.markup;
$$S0.languages.mathml = $$S0.languages.markup;
$$S0.languages.svg = $$S0.languages.markup;
$$S0.languages.xml = $$S0.languages.extend("markup", {});
$$S0.languages.ssml = $$S0.languages.xml;
$$S0.languages.atom = $$S0.languages.xml;
$$S0.languages.rss = $$S0.languages.xml;
(function (e) {
  var r = {
    pattern: /\\[\\(){}[\]^$+*?|.]/,
    alias: "escape"
  };
  var n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/;
  var i = "(?:[^\\\\-]|" + n.source + ")";
  var i = RegExp(i + "-" + i);
  var s = {
    pattern: /(<|')[^<>']+(?=[>']$)/,
    lookbehind: !0,
    alias: "variable"
  };
  e.languages.regex = {
    "char-class": {
      pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
      lookbehind: !0,
      inside: {
        "char-class-negation": {
          pattern: /(^\[)\^/,
          lookbehind: !0,
          alias: "operator"
        },
        "char-class-punctuation": {
          pattern: /^\[|\]$/,
          alias: "punctuation"
        },
        range: {
          pattern: i,
          inside: {
            escape: n,
            "range-punctuation": {
              pattern: /-/,
              alias: "operator"
            }
          }
        },
        "special-escape": r,
        "char-set": {
          pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
          alias: "class-name"
        },
        escape: n
      }
    },
    "special-escape": r,
    "char-set": {
      pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
      alias: "class-name"
    },
    backreference: [{
      pattern: /\\(?![123][0-7]{2})[1-9]/,
      alias: "keyword"
    }, {
      pattern: /\\k<[^<>']+>/,
      alias: "keyword",
      inside: {
        "group-name": s
      }
    }],
    anchor: {
      pattern: /[$^]|\\[ABbGZz]/,
      alias: "function"
    },
    escape: n,
    group: [{
      pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
      alias: "punctuation",
      inside: {
        "group-name": s
      }
    }, {
      pattern: /\)/,
      alias: "punctuation"
    }],
    quantifier: {
      pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
      alias: "number"
    },
    alternation: {
      pattern: /\|/,
      alias: "keyword"
    }
  };
})($$S0);
$$S0.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0,
    greedy: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
$$S0.languages.javascript = $$S0.languages.extend("clike", {
  "class-name": [$$S0.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package||protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
$$S0.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
$$S0.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: $$S0.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: !0,
    inside: $$S0.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: !0,
    inside: $$S0.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: $$S0.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package||protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: $$S0.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
$$S0.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: $$S0.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
$$S0.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
$$S0.languages.markup && ($$S0.languages.markup.tag.addInlined("script", "javascript"), $$S0.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript"));
$$S0.languages.js = $$S0.languages.javascript;
$$S0.languages.actionscript = $$S0.languages.extend("javascript", {
  keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package||protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
  operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
});
$$S0.languages.actionscript["class-name"].alias = "function";
delete $$S0.languages.actionscript.parameter;
delete $$S0.languages.actionscript["literal-property"];
$$S0.languages.markup && $$S0.languages.insertBefore("actionscript", "string", {
  xml: {
    pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
    lookbehind: !0,
    inside: $$S0.languages.markup
  }
});
(function (e) {
  var r = /#(?!\{).+/;
  var n = {
    pattern: /#\{[^}]+\}/,
    alias: "variable"
  };
  e.languages.coffeescript = e.languages.extend("javascript", {
    comment: r,
    string: [{
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: !0
    }, {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: !0,
      inside: {
        interpolation: n
      }
    }],
    keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": {
      pattern: /@(?!\d)\w+/,
      alias: "variable"
    }
  });
  e.languages.insertBefore("coffeescript", "comment", {
    "multiline-comment": {
      pattern: /###[\s\S]+?###/,
      alias: "comment"
    },
    "block-regex": {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: "regex",
      inside: {
        comment: r,
        interpolation: n
      }
    }
  });
  e.languages.insertBefore("coffeescript", "string", {
    "inline-javascript": {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        delimiter: {
          pattern: /^`|`$/,
          alias: "punctuation"
        },
        script: {
          pattern: /[\s\S]+/,
          alias: "language-javascript",
          inside: e.languages.javascript
        }
      }
    },
    "multiline-string": [{
      pattern: /'''[\s\S]*?'''/,
      greedy: !0,
      alias: "string"
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: !0,
      alias: "string",
      inside: {
        interpolation: n
      }
    }]
  });
  e.languages.insertBefore("coffeescript", "keyword", {
    property: /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete e.languages.coffeescript["template-string"];
  e.languages.coffee = e.languages.coffeescript;
})($$S0);
(function (e) {
  var r = e.languages.javadoclike = {
    parameter: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: !0
    },
    punctuation: /[{}]/
  };
  Object.defineProperty(r, "addSupport", {
    value: function (r, n) {
      (r = "string" == typeof r ? [r] : r).forEach(function (r) {
        var i = function (e) {
          e.inside || (e.inside = {});
          e.inside.rest = n;
        };
        var s = "doc-comment";
        if (o = e.languages[r]) {
          var o;
          var a = o[s];
          if ((a = a || (o = e.languages.insertBefore(r, "comment", {
            "doc-comment": {
              pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              alias: "comment"
            }
          }))[s]) instanceof RegExp && (a = o[s] = {
            pattern: a
          }), Array.isArray(a)) for (h = 0, d = a.length, void 0; h < d; h++) {
            var h;
            var d;
            a[h] instanceof RegExp && (a[h] = {
              pattern: a[h]
            });
            i(a[h]);
          } else i(a);
        }
      });
    }
  });
  r.addSupport(["java", "javascript", "php"], r);
})($$S0);
(function (e) {
  var r = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + r.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + r.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + r.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + r.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: r,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  };
  e.languages.css.atrule.inside.rest = e.languages.css;
  var r = e.languages.markup;
  r && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css"));
})($$S0);
(function (e) {
  var r = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  e.languages.css.selector = {
    pattern: e.languages.css.selector.pattern,
    lookbehind: !0,
    inside: r = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp("\\[(?:[^[\\]\"']|" + r.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0
          },
          "attr-value": [r, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: !0
          }],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: !0,
        inside: {
          number: /[\dn]+/,
          operator: /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: !0
      }],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/
    }
  };
  e.languages.css.atrule.inside["selector-function-argument"].inside = r;
  e.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: !0
    }
  });
  var r = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: !0
  };
  var n = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: !0
  };
  e.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0
    },
    hexcode: {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    color: [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: !0
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        unit: r,
        number: n,
        function: /[\w-]+(?=\()/,
        punctuation: /[(),]/
      }
    }],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: n
  });
})($$S0);
(function (e) {
  var r = /[*&][^\s[\]{},]+/;
  var n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
  var i = "(?:" + n.source + "(?:[ 	]+" + r.source + ")?|" + r.source + "(?:[ 	]+" + n.source + ")?)";
  var s = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function a(e, r) {
    r = (r || "").replace(/m/g, "") + "m";
    return RegExp(/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return i;
    }).replace(/<<value>>/g, function () {
      return e;
    }), r);
  }
  e.languages.yaml = {
    scalar: {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return i;
      })),
      lookbehind: !0,
      alias: "string"
    },
    comment: /#.*/,
    key: {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return i;
      }).replace(/<<key>>/g, function () {
        return "(?:" + s + "|" + o + ")";
      })),
      lookbehind: !0,
      greedy: !0,
      alias: "atrule"
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: !0,
      alias: "important"
    },
    datetime: {
      pattern: a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: !0,
      alias: "number"
    },
    boolean: {
      pattern: a(/false|true/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    null: {
      pattern: a(/null|~/.source, "i"),
      lookbehind: !0,
      alias: "important"
    },
    string: {
      pattern: a(o),
      lookbehind: !0,
      greedy: !0
    },
    number: {
      pattern: a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: !0
    },
    tag: n,
    important: r,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  };
  e.languages.yml = e.languages.yaml;
})($$S0);
(function (e) {
  var r = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function n(e) {
    e = e.replace(/<inner>/g, function () {
      return r;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")");
  }
  var i = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return i;
  });
  var o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  e.languages.markdown = e.languages.extend("markup", {});
  e.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: e.languages.yaml
        }
      }
    },
    blockquote: {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + s + o + "(?:" + s + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + s + o + ")(?:" + s + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(i),
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + s + ")" + o + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + s + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(i),
              alias: "important",
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: !0,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: !0,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: !0
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: !0
        },
        punctuation: /```/
      }
    }],
    title: [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: !0,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    hr: {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  });
  ["url", "bold", "italic", "strike"].forEach(function (r) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (n) {
      r !== n && (e.languages.markdown[r].inside.content.inside[n] = e.languages.markdown[n]);
    });
  });
  e.hooks.add("after-tokenize", function (e) {
    "markdown" !== e.language && "md" !== e.language || function e(r) {
      if (r && "string" != typeof r) for (n = 0, i = r.length, void 0; n < i; n++) {
        var n;
        var i;
        var s;
        var o = r[n];
        "code" !== o.type ? e(o.content) : (s = o.content[1], o = o.content[3], s && o && "code-language" === s.type && "code-block" === o.type && "string" == typeof s.content && (s = s.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), s = "language-" + (s = (/[a-z][\w-]*/i.exec(s) || [""])[0].toLowerCase()), o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]));
      }
    }(e.tokens);
  });
  e.hooks.add("wrap", function (r) {
    if ("code-block" === r.type) {
      for (n = "", i = 0, s = r.classes.length, void 0; i < s; i++) {
        var n;
        var i;
        var s;
        var o = r.classes[i];
        var o = /language-(.+)/.exec(o);
        if (o) {
          n = o[1];
          break;
        }
      }
      var p;
      var g = e.languages[n];
      g ? r.content = e.highlight(function (e) {
        return e = (e = e.replace(a, "")).replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, r) {
          return "#" === (r = r.toLowerCase())[0] ? d("x" === r[1] ? parseInt(r.slice(2), 16) : Number(r.slice(1))) : h[r] || e;
        });
      }(r.content), g, n) : n && "none" !== n && e.plugins.autoloader && (p = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random()), r.attributes.id = p, e.plugins.autoloader.loadLanguages(n, function () {
        var r = document.getElementById(p);
        r && (r.innerHTML = e.highlight(r.textContent, e.languages[n], n));
      }));
    }
  });
  var a = RegExp(e.languages.markup.tag.pattern.source, "gi");
  var h = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  };
  var d = String.fromCodePoint || String.fromCharCode;
  e.languages.md = e.languages.markdown;
})($$S0);
$$S0.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: $$S0.languages.markdown
      }
    }
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: !0
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:false|true)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: !0
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: !0
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: !0,
    alias: "function"
  },
  keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[!(){}\[\]:=,]/,
  property: /\w+/
};
$$S0.hooks.add("after-tokenize", function (e) {
  if ("graphql" === e.language) for (r = e.tokens.filter(function (e) {
    return "string" != typeof e && "comment" !== e.type && "scalar" !== e.type;
  }), n = 0, void 0; n < r.length;) {
    var r;
    var n;
    var i = r[n++];
    if ("keyword" === i.type && "mutation" === i.content) {
      var s = [];
      if (m(["definition-mutation", "punctuation"]) && "(" === g(1).content) {
        n += 2;
        var o = v(/^\($/, /^\)$/);
        if (-1 === o) continue;
        for (; n < o; n++) {
          var a = g(0);
          "variable" === a.type && (y(a, "variable-input"), s.push(a.content));
        }
        n = o + 1;
      }
      if (m(["punctuation", "property-query"]) && "{" === g(0).content && (n++, y(g(0), "property-mutation"), 0 < s.length)) {
        var h = v(/^\{$/, /^\}$/);
        if (-1 !== h) for (var d = n; d < h; d++) {
          var p = r[d];
          "variable" === p.type && 0 <= s.indexOf(p.content) && y(p, "variable-input");
        }
      }
    }
  }
  function g(e) {
    return r[n + e];
  }
  function m(e, r) {
    r = r || 0;
    for (var n = 0; n < e.length; n++) {
      var i = g(n + r);
      if (!i || i.type !== e[n]) return;
    }
    return 1;
  }
  function v(e, i) {
    for (s = 1, o = n, void 0; o < r.length; o++) {
      var s;
      var o;
      var a = r[o];
      var h = a.content;
      if ("punctuation" === a.type && "string" == typeof h) {
        if (e.test(h)) s++; else if (i.test(h) && 0 == --s) return o;
      }
    }
    return -1;
  }
  function y(e, r) {
    var n = e.alias;
    n ? Array.isArray(n) || (e.alias = n = [n]) : e.alias = n = [];
    n.push(r);
  }
});
$$S0.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: !0
  }, /@[\w.$]+/],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function (e) {
  var r = e.languages.javascript["template-string"];
  var n = r.pattern.source;
  var i = r.inside.interpolation;
  var s = i.inside["interpolation-punctuation"];
  var o = i.pattern.source;
  function a(r, i) {
    if (e.languages[r]) return {
      pattern: RegExp("((?:" + i + ")\\s*)" + n),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: r
        }
      }
    };
  }
  function h(r, n, i) {
    r = {
      code: r,
      grammar: n,
      language: i
    };
    e.hooks.run("before-tokenize", r);
    r.tokens = e.tokenize(r.code, r.grammar);
    e.hooks.run("after-tokenize", r);
    return r.tokens;
  }
  function d(r, n, a) {
    var d = e.tokenize(r, {
      interpolation: {
        pattern: RegExp(o),
        lookbehind: !0
      }
    });
    var p = 0;
    var g = {};
    var d = h(d.map(function (e) {
      if ("string" == typeof e) return e;
      for (e = e.content, void 0; -1 !== r.indexOf((i = p++, n = "___" + a.toUpperCase() + "_" + i + "___"));) {
        var n;
        var i;
        var e;
        ;
      }
      g[n] = e;
      return n;
    }).join(""), n, a);
    var m = Object.keys(g);
    p = 0;
    (function r(n) {
      for (var o = 0; o < n.length; o++) {
        if (p >= m.length) return;
        var a;
        var d;
        var v;
        var y;
        var b;
        var O;
        var x;
        var w = n[o];
        "string" == typeof w || "string" == typeof w.content ? (a = m[p], -1 !== (x = (O = "string" == typeof w ? w : w.content).indexOf(a)) && (++p, d = O.substring(0, x), b = g[a], v = void 0, (y = {})["interpolation-punctuation"] = s, 3 === (y = e.tokenize(b, y)).length && ((v = [1, 1]).push.apply(v, h(y[1], e.languages.javascript, "javascript")), y.splice.apply(y, v)), v = new e.Token("interpolation", y, i.alias, b), y = O.substring(x + a.length), b = [], d && b.push(d), b.push(v), y && (r(O = [y]), b.push.apply(b, O)), "string" == typeof w ? (n.splice.apply(n, [o, 1].concat(b)), o += b.length - 1) : w.content = b)) : Array.isArray(x = w.content) ? r(x) : r([x]);
      }
    })(d);
    return new e.Token(a, d, "language-" + a, r);
  }
  e.languages.javascript["template-string"] = [a("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), a("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), a("svg", /\bsvg/.source), a("markdown", /\b(?:markdown|md)/.source), a("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), a("sql", /\bsql/.source), r].filter(Boolean);
  var p = {
    javascript: !0,
    js: !0,
    typescript: !0,
    ts: !0,
    jsx: !0,
    tsx: !0
  };
  function g(e) {
    return "string" == typeof e ? e : Array.isArray(e) ? e.map(g).join("") : g(e.content);
  }
  e.hooks.add("after-tokenize", function (r) {
    r.language in p && function r(n) {
      for (i = 0, s = n.length, void 0; i < s; i++) {
        var i;
        var s;
        var o;
        var a;
        var h;
        var p = n[i];
        "string" != typeof p && (Array.isArray(o = p.content) ? "template-string" === p.type ? (p = o[1], 3 === o.length && "string" != typeof p && "embedded-code" === p.type && (a = g(p), p = Array.isArray(p = p.alias) ? p[0] : p, h = e.languages[p]) && (o[1] = d(a, h, p))) : r(o) : "string" != typeof o && r([o]));
      }
    }(r.tokens);
  });
})($$S0);
(function (e) {
  e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
  delete e.languages.typescript.parameter;
  delete e.languages.typescript["literal-property"];
  var r = e.languages.extend("typescript", {});
  delete r["class-name"];
  e.languages.typescript["class-name"].inside = r;
  e.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: r
        }
      }
    }
  });
  e.languages.ts = e.languages.typescript;
})($$S0);
(function (e) {
  var r = e.languages.javascript;
  var n = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source;
  var i = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", {
    parameter: {
      pattern: RegExp(i + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
  e.languages.insertBefore("jsdoc", "keyword", {
    "optional-parameter": {
      pattern: RegExp(i + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
      lookbehind: !0,
      inside: {
        parameter: {
          pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
          lookbehind: !0,
          inside: {
            punctuation: /\./
          }
        },
        code: {
          pattern: /(=)[\s\S]*(?=\]$)/,
          lookbehind: !0,
          inside: r,
          alias: "language-javascript"
        },
        punctuation: /[=[\]]/
      }
    },
    "class-name": [{
      pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function () {
        return n;
      })),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }, {
      pattern: RegExp("(@[a-z]+\\s+)" + n),
      lookbehind: !0,
      inside: {
        string: r.string,
        number: r.number,
        boolean: r.boolean,
        keyword: e.languages.typescript.keyword,
        operator: /=>|\.\.\.|[&|?:*]/,
        punctuation: /[.,;=<>{}()[\]]/
      }
    }],
    example: {
      pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
      lookbehind: !0,
      inside: {
        code: {
          pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
          lookbehind: !0,
          inside: r,
          alias: "language-javascript"
        }
      }
    }
  });
  e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})($$S0);
(function (e) {
  e.languages.flow = e.languages.extend("javascript", {});
  e.languages.insertBefore("flow", "keyword", {
    type: [{
      pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
      alias: "class-name"
    }]
  });
  e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i;
  delete e.languages.flow.parameter;
  e.languages.insertBefore("flow", "operator", {
    "flow-punctuation": {
      pattern: /\{\||\|\}/,
      alias: "punctuation"
    }
  });
  Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]);
  e.languages.flow.keyword.unshift({
    pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
    lookbehind: !0
  });
})($$S0);
$$S0.languages.n4js = $$S0.languages.extend("javascript", {
  keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package||protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
});
$$S0.languages.insertBefore("n4js", "constant", {
  annotation: {
    pattern: /@+\w+/,
    alias: "operator"
  }
});
$$S0.languages.n4jsd = $$S0.languages.n4js;
(function (e) {
  function r(e, r) {
    return RegExp(e.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), r);
  }
  e.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
      lookbehind: !0,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  });
  e.languages.insertBefore("javascript", "function", {
    method: {
      pattern: RegExp("(\\.\\s*)" + e.languages.javascript.$$function.source),
      lookbehind: !0,
      alias: ["function", "property-access"]
    }
  });
  e.languages.insertBefore("javascript", "constant", {
    "known-class-name": [{
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: "class-name"
    }, {
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: "class-name"
    }]
  });
  e.languages.insertBefore("javascript", "keyword", {
    imports: {
      pattern: r(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: !0,
      inside: e.languages.javascript
    },
    exports: {
      pattern: r(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: !0,
      inside: e.languages.javascript
    }
  });
  e.languages.javascript.keyword.unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: "module"
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: "control-flow"
  }, {
    pattern: /\bnull\b/,
    alias: ["null", "nil"]
  }, {
    pattern: /\bundefined\b/,
    alias: "nil"
  });
  e.languages.insertBefore("javascript", "operator", {
    spread: {
      pattern: /\.{3}/,
      alias: "operator"
    },
    arrow: {
      pattern: /=>/,
      alias: "operator"
    }
  });
  e.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: r(/(\.\s*)#?<ID>/.source),
      lookbehind: !0
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: !0
    },
    dom: {
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    console: {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  for (n = ["function", "function-variable", "method", "method-variable", "property-access"], i = 0, void 0; i < n.length; i++) {
    var n;
    var i;
    var s = n[i];
    var o = e.languages.javascript[s];
    var s = (o = "RegExp" === e.util.type(o) ? e.languages.javascript[s] = {
      pattern: o
    } : o).inside || {};
    (o.inside = s)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})($$S0);
(function (e) {
  var r = e.util.clone(e.languages.javascript);
  var n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var i = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function o(e, r) {
    return RegExp(e = e.replace(/<S>/g, function () {
      return n;
    }).replace(/<BRACES>/g, function () {
      return i;
    }).replace(/<SPREAD>/g, function () {
      return s;
    }), r);
  }
  function a(r) {
    for (n = [], i = 0, void 0; i < r.length; i++) {
      var n;
      var i;
      var s = r[i];
      var o = !1;
      "string" != typeof s && ("tag" === s.type && s.content[0] && "tag" === s.content[0].type ? "</" === s.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === h(s.content[0].content[1]) && n.pop() : "/>" !== s.content[s.content.length - 1].content && n.push({
        tagName: h(s.content[0].content[1]),
        openedBraces: 0
      }) : 0 < n.length && "punctuation" === s.type && "{" === s.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === s.type && "}" === s.content ? n[n.length - 1].openedBraces-- : o = !0);
      (o || "string" == typeof s) && 0 < n.length && 0 === n[n.length - 1].openedBraces && (o = h(s), i < r.length - 1 && ("string" == typeof r[i + 1] || "plain-text" === r[i + 1].type) && (o += h(r[i + 1]), r.splice(i + 1, 1)), 0 < i && ("string" == typeof r[i - 1] || "plain-text" === r[i - 1].type) && (o = h(r[i - 1]) + o, r.splice(i - 1, 1), i--), r[i] = new e.Token("plain-text", o, null, o));
      s.content && "string" != typeof s.content && a(s.content);
    }
  }
  s = o(s).source;
  e.languages.jsx = e.languages.extend("markup", r);
  e.languages.jsx.tag.pattern = o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/;
  e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  e.languages.jsx.tag.inside.comment = r.comment;
  e.languages.insertBefore("inside", "attr-name", {
    spread: {
      pattern: o(/<SPREAD>/.source),
      inside: e.languages.jsx
    }
  }, e.languages.jsx.tag);
  e.languages.insertBefore("inside", "special-attr", {
    script: {
      pattern: o(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: e.languages.jsx
      }
    }
  }, e.languages.jsx.tag);
  var h = function (e) {
    return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(h).join("") : "";
  };
  e.hooks.add("after-tokenize", function (e) {
    "jsx" !== e.language && "tsx" !== e.language || a(e.tokens);
  });
})($$S0);
(function (e) {
  var r = e.util.clone(e.languages.typescript);
  e.languages.tsx = e.languages.extend("jsx", r);
  delete e.languages.tsx.parameter;
  delete e.languages.tsx["literal-property"];
  var r = e.languages.tsx.tag;
  r.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + r.pattern.source + ")", r.pattern.flags);
  r.lookbehind = !0;
})($$S0);
$$S0.languages.swift = {
  comment: {
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [{
    pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source),
    lookbehind: !0,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
        lookbehind: !0,
        inside: null
      },
      "interpolation-punctuation": {
        pattern: /^\)|\\\($/,
        alias: "punctuation"
      },
      punctuation: /\\(?=[\r\n])/,
      string: /[\s\S]+/
    }
  }, {
    pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"),
    lookbehind: !0,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
        lookbehind: !0,
        inside: null
      },
      "interpolation-punctuation": {
        pattern: /^\)|\\#+\($/,
        alias: "punctuation"
      },
      string: /[\s\S]+/
    }
  }],
  directive: {
    pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix||protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
$$S0.languages.swift["string-literal"].forEach(function (e) {
  e.inside.interpolation.inside = $$S0.languages.swift;
});
(function (e) {
  e.languages.kotlin = e.languages.extend("clike", {
    keyword: {
      pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package||protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
      lookbehind: !0
    },
    function: [{
      pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
      greedy: !0
    }, {
      pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
      lookbehind: !0,
      greedy: !0
    }],
    number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
    operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
  });
  delete e.languages.kotlin["class-name"];
  var r = {
    "interpolation-punctuation": {
      pattern: /^\$\{?|\}$/,
      alias: "punctuation"
    },
    expression: {
      pattern: /[\s\S]+/,
      inside: e.languages.kotlin
    }
  };
  e.languages.insertBefore("kotlin", "string", {
    "string-literal": [{
      pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
      alias: "multiline",
      inside: {
        interpolation: {
          pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
          inside: r
        },
        string: /[\s\S]+/
      }
    }, {
      pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
      alias: "singleline",
      inside: {
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
          lookbehind: !0,
          inside: r
        },
        string: /[\s\S]+/
      }
    }],
    char: {
      pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
      greedy: !0
    }
  });
  delete e.languages.kotlin.string;
  e.languages.insertBefore("kotlin", "keyword", {
    annotation: {
      pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
      alias: "builtin"
    }
  });
  e.languages.insertBefore("kotlin", "function", {
    label: {
      pattern: /\b\w+@|@\w+\b/,
      alias: "symbol"
    }
  });
  e.languages.kt = e.languages.kotlin;
  e.languages.kts = e.languages.kotlin;
})($$S0);
$$S0.languages.c = $$S0.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
$$S0.languages.insertBefore("c", "string", {
  char: {
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
$$S0.languages.insertBefore("c", "string", {
  macro: {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [{
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: !0
      }, $$S0.languages.c.string],
      char: $$S0.languages.c.$$char,
      comment: $$S0.languages.c.comment,
      "macro-name": [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: !0
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: !0,
        alias: "function"
      }],
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: $$S0.languages.c
      }
    }
  }
});
$$S0.languages.insertBefore("c", "function", {
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete $$S0.languages.c.boolean;
$$S0.languages.objectivec = $$S0.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete $$S0.languages.objectivec["class-name"];
$$S0.languages.objc = $$S0.languages.objectivec;
$$S0.languages.reason = $$S0.languages.extend("clike", {
  string: {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: !0
  },
  "class-name": /\b[A-Z]\w*/,
  keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or||rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
$$S0.languages.insertBefore("reason", "class-name", {
  char: {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: !0
  },
  constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
  label: {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: "symbol"
  }
});
delete $$S0.languages.reason.$$function;
(function (e) {
  for (r = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0, void 0; n < 2; n++) {
    var r;
    var n;
    r = r.replace(/<self>/g, function () {
      return r;
    });
  }
  r = r.replace(/<self>/g, function () {
    return /[^\s\S]/.source;
  });
  e.languages.rust = {
    comment: [{
      pattern: RegExp(/(^|[^\\])/.source + r),
      lookbehind: !0,
      greedy: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
      }
    },
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [{
      pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
      lookbehind: !0,
      alias: "namespace"
    }, {
      pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
      lookbehind: !0,
      alias: "namespace",
      inside: {
        punctuation: /::/
      }
    }],
    keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  };
  e.languages.rust["closure-params"].inside.rest = e.languages.rust;
  e.languages.rust.attribute.inside.string = e.languages.rust.string;
})($$S0);
$$S0.languages.go = $$S0.languages.extend("clike", {
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: !0,
    greedy: !0
  },
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  boolean: /\b(?:_|false|iota|nil|true)\b/,
  number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
$$S0.languages.insertBefore("go", "string", {
  char: {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: !0
  }
});
delete $$S0.languages.go["class-name"];
(function (e) {
  var r = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override||protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return r.source;
  });
  e.languages.cpp = e.languages.extend("c", {
    "class-name": [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return r.source;
      })),
      lookbehind: !0
    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    keyword: r,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  });
  e.languages.insertBefore("cpp", "string", {
    module: {
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return n;
      }) + ")"),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  });
  e.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: e.languages.cpp
        }
      }
    }
  });
  e.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  });
  e.languages.insertBefore("cpp", "class-name", {
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: e.languages.extend("cpp", {})
    }
  });
  e.languages.insertBefore("inside", "double-colon", {
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, e.languages.cpp["base-clause"]);
})($$S0);
$$S0.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
$$S0.languages.python["string-interpolation"].inside.interpolation.inside.rest = $$S0.languages.python;
$$S0.languages.py = $$S0.languages.python;
k({}, {
  dracula: () => E,
  duotoneDark: () => A,
  duotoneLight: () => C,
  github: () => T,
  jettwaveDark: () => F,
  jettwaveLight: () => U,
  nightOwl: () => I,
  nightOwlLight: () => P,
  oceanicNext: () => M,
  okaidia: () => D,
  oneDark: () => Q,
  oneLight: () => V,
  palenight: () => N,
  shadesOfPurple: () => $,
  synthwave84: () => L,
  ultramin: () => j,
  vsDark: () => z,
  vsLight: () => Z
});
var E = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36"
  },
  styles: [{
    types: ["prolog", "constant", "builtin"],
    style: {
      color: "rgb(189, 147, 249)"
    }
  }, {
    types: ["inserted", "function"],
    style: {
      color: "rgb(80, 250, 123)"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      color: "rgb(248, 248, 242)"
    }
  }, {
    types: ["string", "char", "tag", "selector"],
    style: {
      color: "rgb(255, 121, 198)"
    }
  }, {
    types: ["keyword", "variable"],
    style: {
      color: "rgb(189, 147, 249)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(98, 114, 164)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(241, 250, 140)"
    }
  }]
};
var A = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: .7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};
var C = {
  plain: {
    backgroundColor: "#faf8f5",
    color: "#728fcb"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#b6ad9a"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: .7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#063289"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#b29762"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#2d2006"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#896724"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule"],
    style: {
      color: "#728fcb"
    }
  }, {
    types: ["placeholder", "variable"],
    style: {
      color: "#93abdc"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#896724"
    }
  }]
};
var T = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#999988",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: .7
    }
  }, {
    types: ["string", "attr-value"],
    style: {
      color: "#e3116c"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#393A34"
    }
  }, {
    types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
    style: {
      color: "#36acaa"
    }
  }, {
    types: ["atrule", "keyword", "attr-name", "selector"],
    style: {
      color: "#00a4db"
    }
  }, {
    types: ["function", "deleted", "tag"],
    style: {
      color: "#d73a49"
    }
  }, {
    types: ["function-variable"],
    style: {
      color: "#6f42c1"
    }
  }, {
    types: ["tag", "selector", "keyword"],
    style: {
      color: "#00009f"
    }
  }]
};
var I = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgba(239, 83, 80, 0.56)",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted", "attr-name"],
    style: {
      color: "rgb(173, 219, 103)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(99, 119, 119)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "rgb(173, 219, 103)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(214, 222, 235)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["selector", "doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(255, 203, 139)"
    }
  }, {
    types: ["tag", "operator", "keyword"],
    style: {
      color: "rgb(127, 219, 202)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["property"],
    style: {
      color: "rgb(128, 203, 196)"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }]
};
var P = {
  plain: {
    color: "#403f53",
    backgroundColor: "#FBFBFB"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgba(239, 83, 80, 0.56)",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted", "attr-name"],
    style: {
      color: "rgb(72, 118, 214)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(152, 159, 177)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "builtin", "char", "constant", "url"],
    style: {
      color: "rgb(72, 118, 214)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(201, 103, 101)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(170, 9, 130)"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "rgb(153, 76, 195)"
    }
  }, {
    types: ["function", "selector", "doctype"],
    style: {
      color: "rgb(153, 76, 195)",
      fontStyle: "italic"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(17, 17, 17)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(153, 76, 195)"
    }
  }, {
    types: ["operator", "property", "keyword", "namespace"],
    style: {
      color: "rgb(12, 150, 155)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(188, 84, 84)"
    }
  }]
};
var R = {
  char: "#D8DEE9",
  comment: "#999999",
  keyword: "#c5a5c5",
  primitive: "#5a9bcf",
  string: "#8dc891",
  variable: "#d7deea",
  boolean: "#ff8b50",
  tag: "#fc929e",
  function: "#79b6f2",
  className: "#FAC863"
};
var M = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [{
    types: ["attr-name"],
    style: {
      color: R.keyword
    }
  }, {
    types: ["attr-value"],
    style: {
      color: R.string
    }
  }, {
    types: ["comment", "block-comment", "prolog", "doctype", "cdata", "shebang"],
    style: {
      color: R.comment
    }
  }, {
    types: ["property", "number", "function-name", "constant", "symbol", "deleted"],
    style: {
      color: R.primitive
    }
  }, {
    types: ["boolean"],
    style: {
      color: R.boolean
    }
  }, {
    types: ["tag"],
    style: {
      color: R.tag
    }
  }, {
    types: ["string"],
    style: {
      color: R.string
    }
  }, {
    types: ["punctuation"],
    style: {
      color: R.string
    }
  }, {
    types: ["selector", "char", "builtin", "inserted"],
    style: {
      color: R.$$char
    }
  }, {
    types: ["function"],
    style: {
      color: R.$$function
    }
  }, {
    types: ["operator", "entity", "url", "variable"],
    style: {
      color: R.variable
    }
  }, {
    types: ["keyword"],
    style: {
      color: R.keyword
    }
  }, {
    types: ["atrule", "class-name"],
    style: {
      color: R.className
    }
  }, {
    types: ["important"],
    style: {
      fontWeight: "400"
    }
  }, {
    types: ["bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: .7
    }
  }]
};
var D = {
  plain: {
    color: "#f8f8f2",
    backgroundColor: "#272822"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(162, 191, 252)",
      fontStyle: "italic"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "#f92672",
      fontStyle: "italic"
    }
  }, {
    types: ["inserted"],
    style: {
      color: "rgb(173, 219, 103)",
      fontStyle: "italic"
    }
  }, {
    types: ["comment"],
    style: {
      color: "#8292a2",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "#a6e22e"
    }
  }, {
    types: ["variable"],
    style: {
      color: "#f8f8f2"
    }
  }, {
    types: ["number"],
    style: {
      color: "#ae81ff"
    }
  }, {
    types: ["builtin", "char", "constant", "function", "class-name"],
    style: {
      color: "#e6db74"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "#f8f8f2"
    }
  }, {
    types: ["selector", "doctype"],
    style: {
      color: "#a6e22e",
      fontStyle: "italic"
    }
  }, {
    types: ["tag", "operator", "keyword"],
    style: {
      color: "#66d9ef"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "#ae81ff"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)",
      opacity: .7
    }
  }, {
    types: ["tag", "property"],
    style: {
      color: "#f92672"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#a6e22e !important"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "#8292a2"
    }
  }, {
    types: ["rule"],
    style: {
      color: "#e6db74"
    }
  }]
};
var N = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "inserted"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag", "deleted"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};
var $ = {
  plain: {
    color: "#9EFEFF",
    backgroundColor: "#2D2A55"
  },
  styles: [{
    types: ["changed"],
    style: {
      color: "rgb(255, 238, 128)"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgba(239, 83, 80, 0.56)"
    }
  }, {
    types: ["inserted"],
    style: {
      color: "rgb(173, 219, 103)"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(179, 98, 255)",
      fontStyle: "italic"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "rgb(255, 255, 255)"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(255, 98, 140)"
    }
  }, {
    types: ["string", "url"],
    style: {
      color: "rgb(165, 255, 144)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(255, 238, 128)"
    }
  }, {
    types: ["number", "boolean"],
    style: {
      color: "rgb(255, 98, 140)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(255, 180, 84)"
    }
  }, {
    types: ["keyword", "operator", "property", "namespace", "tag", "selector", "doctype"],
    style: {
      color: "rgb(255, 157, 0)"
    }
  }, {
    types: ["builtin", "char", "constant", "function", "class-name"],
    style: {
      color: "rgb(250, 208, 0)"
    }
  }]
};
var L = {
  plain: {
    backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    backgroundImage: "#34294f",
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
  },
  styles: [{
    types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#495495",
      fontStyle: "italic"
    }
  }, {
    types: ["punctuation"],
    style: {
      color: "#ccc"
    }
  }, {
    types: ["tag", "attr-name", "namespace", "number", "unit", "hexcode", "deleted"],
    style: {
      color: "#e2777a"
    }
  }, {
    types: ["property", "selector"],
    style: {
      color: "#72f1b8",
      textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
    }
  }, {
    types: ["function-name"],
    style: {
      color: "#6196cc"
    }
  }, {
    types: ["boolean", "selector-id", "function"],
    style: {
      color: "#fdfdfd",
      textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
    }
  }, {
    types: ["class-name", "maybe-class-name", "builtin"],
    style: {
      color: "#fff5f6",
      textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
    }
  }, {
    types: ["constant", "symbol"],
    style: {
      color: "#f92aad",
      textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
    }
  }, {
    types: ["important", "atrule", "keyword", "selector-class"],
    style: {
      color: "#f4eee4",
      textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
    }
  }, {
    types: ["string", "char", "attr-value", "regex", "variable"],
    style: {
      color: "#f87c32"
    }
  }, {
    types: ["parameter"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["entity", "url"],
    style: {
      color: "#67cdcc"
    }
  }, {
    types: ["operator"],
    style: {
      color: "ffffffee"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["entity"],
    style: {
      cursor: "help"
    }
  }, {
    types: ["inserted"],
    style: {
      color: "green"
    }
  }]
};
var j = {
  plain: {
    color: "#282a2e",
    backgroundColor: "#ffffff"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(197, 200, 198)"
    }
  }, {
    types: ["string", "number", "builtin", "variable"],
    style: {
      color: "rgb(150, 152, 150)"
    }
  }, {
    types: ["class-name", "function", "tag", "attr-name"],
    style: {
      color: "rgb(40, 42, 46)"
    }
  }]
};
var z = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "rgb(0, 0, 128)"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(106, 153, 85)"
    }
  }, {
    types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["number", "inserted"],
    style: {
      color: "rgb(181, 206, 168)"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(100, 102, 149)"
    }
  }, {
    types: ["attr-name", "variable"],
    style: {
      color: "rgb(156, 220, 254)"
    }
  }, {
    types: ["deleted", "string", "attr-value", "template-punctuation"],
    style: {
      color: "rgb(206, 145, 120)"
    }
  }, {
    types: ["selector"],
    style: {
      color: "rgb(215, 186, 125)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "rgb(212, 212, 212)"
    }
  }, {
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "rgb(220, 220, 170)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["char"],
    style: {
      color: "rgb(209, 105, 105)"
    }
  }]
};
var Z = {
  plain: {
    color: "#000000",
    backgroundColor: "#ffffff"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(0, 128, 0)"
    }
  }, {
    types: ["builtin"],
    style: {
      color: "rgb(0, 112, 193)"
    }
  }, {
    types: ["number", "variable", "inserted"],
    style: {
      color: "rgb(9, 134, 88)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(0, 0, 0)"
    }
  }, {
    types: ["constant", "char"],
    style: {
      color: "rgb(129, 31, 63)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(128, 0, 0)"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "rgb(255, 0, 0)"
    }
  }, {
    types: ["deleted", "string"],
    style: {
      color: "rgb(163, 21, 21)"
    }
  }, {
    types: ["changed", "punctuation"],
    style: {
      color: "rgb(4, 81, 165)"
    }
  }, {
    types: ["function", "keyword"],
    style: {
      color: "rgb(0, 0, 255)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(38, 127, 153)"
    }
  }]
};
var F = {
  plain: {
    color: "#f8fafc",
    backgroundColor: "#011627"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "#000080"
    }
  }, {
    types: ["comment"],
    style: {
      color: "#6A9955"
    }
  }, {
    types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
    style: {
      color: "#569CD6"
    }
  }, {
    types: ["number", "inserted"],
    style: {
      color: "#B5CEA8"
    }
  }, {
    types: ["constant"],
    style: {
      color: "#f8fafc"
    }
  }, {
    types: ["attr-name", "variable"],
    style: {
      color: "#9CDCFE"
    }
  }, {
    types: ["deleted", "string", "attr-value", "template-punctuation"],
    style: {
      color: "#cbd5e1"
    }
  }, {
    types: ["selector"],
    style: {
      color: "#D7BA7D"
    }
  }, {
    types: ["tag"],
    style: {
      color: "#0ea5e9"
    }
  }, {
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "#0ea5e9"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#D4D4D4"
    }
  }, {
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "#7dd3fc"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "#0ea5e9"
    }
  }, {
    types: ["char"],
    style: {
      color: "#D16969"
    }
  }]
};
var U = {
  plain: {
    color: "#0f172a",
    backgroundColor: "#f1f5f9"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "#000080"
    }
  }, {
    types: ["comment"],
    style: {
      color: "#6A9955"
    }
  }, {
    types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
    style: {
      color: "#0c4a6e"
    }
  }, {
    types: ["number", "inserted"],
    style: {
      color: "#B5CEA8"
    }
  }, {
    types: ["constant"],
    style: {
      color: "#0f172a"
    }
  }, {
    types: ["attr-name", "variable"],
    style: {
      color: "#0c4a6e"
    }
  }, {
    types: ["deleted", "string", "attr-value", "template-punctuation"],
    style: {
      color: "#64748b"
    }
  }, {
    types: ["selector"],
    style: {
      color: "#D7BA7D"
    }
  }, {
    types: ["tag"],
    style: {
      color: "#0ea5e9"
    }
  }, {
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "#0ea5e9"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#475569"
    }
  }, {
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "#0e7490"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "#0ea5e9"
    }
  }, {
    types: ["char"],
    style: {
      color: "#D16969"
    }
  }]
};
var Q = {
  plain: {
    backgroundColor: "hsl(220, 13%, 18%)",
    color: "hsl(220, 14%, 71%)",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)"
  },
  styles: [{
    types: ["comment", "prolog", "cdata"],
    style: {
      color: "hsl(220, 10%, 40%)"
    }
  }, {
    types: ["doctype", "punctuation", "entity"],
    style: {
      color: "hsl(220, 14%, 71%)"
    }
  }, {
    types: ["attr-name", "class-name", "maybe-class-name", "boolean", "constant", "number", "atrule"],
    style: {
      color: "hsl(29, 54%, 61%)"
    }
  }, {
    types: ["keyword"],
    style: {
      color: "hsl(286, 60%, 67%)"
    }
  }, {
    types: ["property", "tag", "symbol", "deleted", "important"],
    style: {
      color: "hsl(355, 65%, 65%)"
    }
  }, {
    types: ["selector", "string", "char", "builtin", "inserted", "regex", "attr-value"],
    style: {
      color: "hsl(95, 38%, 62%)"
    }
  }, {
    types: ["variable", "operator", "function"],
    style: {
      color: "hsl(207, 82%, 66%)"
    }
  }, {
    types: ["url"],
    style: {
      color: "hsl(187, 47%, 55%)"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "hsl(220, 14%, 71%)"
    }
  }]
};
var V = {
  plain: {
    backgroundColor: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)"
  },
  styles: [{
    types: ["comment", "prolog", "cdata"],
    style: {
      color: "hsl(230, 4%, 64%)"
    }
  }, {
    types: ["doctype", "punctuation", "entity"],
    style: {
      color: "hsl(230, 8%, 24%)"
    }
  }, {
    types: ["attr-name", "class-name", "boolean", "constant", "number", "atrule"],
    style: {
      color: "hsl(35, 99%, 36%)"
    }
  }, {
    types: ["keyword"],
    style: {
      color: "hsl(301, 63%, 40%)"
    }
  }, {
    types: ["property", "tag", "symbol", "deleted", "important"],
    style: {
      color: "hsl(5, 74%, 59%)"
    }
  }, {
    types: ["selector", "string", "char", "builtin", "inserted", "regex", "attr-value", "punctuation"],
    style: {
      color: "hsl(119, 34%, 47%)"
    }
  }, {
    types: ["variable", "operator", "function"],
    style: {
      color: "hsl(221, 87%, 60%)"
    }
  }, {
    types: ["url"],
    style: {
      color: "hsl(198, 99%, 37%)"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "hsl(230, 8%, 24%)"
    }
  }]
};
var B = null;
var q = /\r\n|\r|\n/;
var W = e => {
  0 === e.length ? e.push({
    types: ["plain"],
    content: "\n",
    empty: !0
  }) : 1 === e.length && "" === e[0].content && (e[0].content = "\n", e[0].empty = !0);
};
var Y = (e, r) => {
  let n = e.length;
  return n > 0 && e[n - 1] === r ? e : e.concat(r);
};
var G = e => {
  let r = [[]];
  let n = [e];
  let i = [0];
  let s = [e.length];
  let o = 0;
  let a = 0;
  let h = [];
  let d = [h];
  for (; a > -1;) {
    for (; (o = i[a]++) < s[a];) {
      let e;
      let p = r[a];
      let g = n[a][o];
      if ("string" == typeof g ? (p = a > 0 ? p : ["plain"], e = g) : (p = Y(p, g.type), g.alias && (p = Y(p, g.alias)), e = g.content), "string" != typeof e) {
        a++;
        r.push(p);
        n.push(e);
        i.push(0);
        s.push(e.length);
        continue;
      }
      let m = e.split(q);
      let v = m.length;
      h.push({
        types: p,
        content: m[0]
      });
      for (let e = 1; e < v; e++) {
        W(h);
        d.push(h = []);
        h.push({
          types: p,
          content: m[e]
        });
      }
    }
    a--;
    r.pop();
    n.pop();
    i.pop();
    s.pop();
  }
  W(h);
  return d;
};
var $$X1 = ({
  prism: e,
  code: r,
  grammar: n,
  language: s
}) => {
  let o = useRef(e);
  return useMemo(() => {
    if (null == n) return G([r]);
    let e = {
      code: r,
      grammar: n,
      language: s,
      tokens: []
    };
    o.current.hooks.run("before-tokenize", e);
    e.tokens = o.current.tokenize(r, n);
    o.current.hooks.run("after-tokenize", e);
    return G(e.tokens);
  }, [r, n, s]);
};
export const My = $$S0;
export const jB = $$X1; 
