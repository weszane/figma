/**
* Prism: Lightweight, robust, elegant syntax highlighting
*
* @license MIT <https://opensource.org/licenses/MIT>
* @author Lea Verou <https://lea.verou.me>
* @namespace
* @public
*/
var i = function (e) {
  var r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var n = 0;
  var i = {};
  var s = {
    manual: e.Prism && e.Prism.manual,
    disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
    util: {
      encode: function e(r) {
        return r instanceof o ? new o(r.type, e(r.content), r.alias) : Array.isArray(r) ? r.map(e) : r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        e.__id || Object.defineProperty(e, "__id", {
          value: ++n
        });
        return e.__id;
      },
      clone: function e(r, n) {
        var i;
        var o;
        switch (n = n || {}, s.util.type(r)) {
          case "Object":
            if (n[o = s.util.objId(r)]) return n[o];
            for (var a in i = {}, n[o] = i, r) r.hasOwnProperty(a) && (i[a] = e(r[a], n));
            return i;
          case "Array":
            if (n[o = s.util.objId(r)]) return n[o];
            i = [];
            n[o] = i;
            r.forEach(function (r, s) {
              i[s] = e(r, n);
            });
            return i;
          default:
            return r;
        }
      },
      getLanguage: function (e) {
        for (; e;) {
          var n = r.exec(e.className);
          if (n) return n[1].toLowerCase();
          e = e.parentElement;
        }
        return "none";
      },
      setLanguage: function (e, n) {
        e.className = e.className.replace(RegExp(r, "gi"), "");
        e.classList.add("language-" + n);
      },
      currentScript: function () {
        if ("undefined" == typeof document) return null;
        if (document.currentScript && "SCRIPT" === document.currentScript.tagName) return document.currentScript;
        try {
          throw Error();
        } catch (i) {
          var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack) || [])[1];
          if (e) {
            var r = document.getElementsByTagName("script");
            for (var n in r) if (r[n].src == e) return r[n];
          }
          return null;
        }
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
      plain: i,
      plaintext: i,
      text: i,
      txt: i,
      extend: function (e, r) {
        var n = s.util.clone(s.languages[e]);
        for (var i in r) n[i] = r[i];
        return n;
      },
      insertBefore: function (e, r, n, i) {
        var o = (i = i || s.languages)[e];
        var a = {};
        for (var h in o) if (o.hasOwnProperty(h)) {
          if (h == r) for (var d in n) n.hasOwnProperty(d) && (a[d] = n[d]);
          n.hasOwnProperty(h) || (a[h] = o[h]);
        }
        var p = i[e];
        i[e] = a;
        s.languages.DFS(s.languages, function (r, n) {
          n === p && r != e && (this[r] = a);
        });
        return a;
      },
      DFS: function e(r, n, i, o) {
        o = o || {};
        var a = s.util.objId;
        for (var h in r) if (r.hasOwnProperty(h)) {
          n.call(r, h, r[h], i || h);
          var d = r[h];
          var p = s.util.type(d);
          "Object" !== p || o[a(d)] ? "Array" !== p || o[a(d)] || (o[a(d)] = !0, e(d, n, h, o)) : (o[a(d)] = !0, e(d, n, null, o));
        }
      }
    },
    plugins: {},
    highlightAll: function (e, r) {
      s.highlightAllUnder(document, e, r);
    },
    highlightAllUnder: function (e, r, n) {
      var i = {
        callback: n,
        container: e,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      s.hooks.run("before-highlightall", i);
      i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector));
      s.hooks.run("before-all-elements-highlight", i);
      for (a = 0, void 0; o = i.elements[a++];) {
        var o;
        var a;
        s.highlightElement(o, !0 === r, i.callback);
      }
    },
    highlightElement: function (r, n, i) {
      var o = s.util.getLanguage(r);
      var a = s.languages[o];
      s.util.setLanguage(r, o);
      var h = r.parentElement;
      h && "pre" === h.nodeName.toLowerCase() && s.util.setLanguage(h, o);
      var d = r.textContent;
      var p = {
        element: r,
        language: o,
        grammar: a,
        code: d
      };
      function g(e) {
        p.highlightedCode = e;
        s.hooks.run("before-insert", p);
        p.element.innerHTML = p.highlightedCode;
        s.hooks.run("after-highlight", p);
        s.hooks.run("complete", p);
        i && i.call(p.element);
      }
      if (s.hooks.run("before-sanity-check", p), (h = p.element.parentElement) && "pre" === h.nodeName.toLowerCase() && !h.hasAttribute("tabindex") && h.setAttribute("tabindex", "0"), !p.code) {
        s.hooks.run("complete", p);
        i && i.call(p.element);
        return;
      }
      if (s.hooks.run("before-highlight", p), !p.grammar) {
        g(s.util.encode(p.code));
        return;
      }
      if (n && e.Worker) {
        var m = new Worker(s.filename);
        m.onmessage = function (e) {
          g(e.data);
        };
        m.postMessage(JSON.stringify({
          language: p.language,
          code: p.code,
          immediateClose: !0
        }));
      } else g(s.highlight(p.code, p.grammar, p.language));
    },
    highlight: function (e, r, n) {
      var i = {
        code: e,
        grammar: r,
        language: n
      };
      if (s.hooks.run("before-tokenize", i), !i.grammar) throw Error('The language "' + i.language + '" has no grammar.');
      i.tokens = s.tokenize(i.code, i.grammar);
      s.hooks.run("after-tokenize", i);
      return o.stringify(s.util.encode(i.tokens), i.language);
    },
    tokenize: function (e, r) {
      var n = r.rest;
      if (n) {
        for (var i in n) r[i] = n[i];
        delete r.rest;
      }
      var s = new d();
      p(s, s.head, e);
      h(e, s, r, s.head, 0);
      return m(s);
    },
    hooks: {
      all: {},
      add: function (e, r) {
        var n = s.hooks.all;
        n[e] = n[e] || [];
        n[e].push(r);
      },
      run: function (e, r) {
        var n = s.hooks.all[e];
        if (n && n.length) for (o = 0, void 0; i = n[o++];) {
          var i;
          var o;
          i(r);
        }
      }
    },
    Token: o
  };
  function o(e, r, n, i) {
    this.type = e;
    this.content = r;
    this.alias = n;
    this.length = 0 | (i || "").length;
  }
  function a(e, r, n, i) {
    e.lastIndex = r;
    var s = e.exec(n);
    if (s && i && s[1]) {
      var o = s[1].length;
      s.index += o;
      s[0] = s[0].slice(o);
    }
    return s;
  }
  function h(e, r, n, i, d, m) {
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
        for (E = O.pattern || O, A = i.next, C = d, void 0; A !== r.tail && (!m || !(C >= m.reach)); C += A.value.length, A = A.next) {
          var E;
          var A;
          var C;
          var T;
          var I = A.value;
          if (r.length > e.length) return;
          if (!(I instanceof o)) {
            var P = 1;
            if (k) {
              if (!(T = a(E, C, e, w)) || T.index >= e.length) break;
              var R = T.index;
              var M = T.index + T[0].length;
              var D = C;
              for (D += A.value.length; R >= D;) D += (A = A.next).value.length;
              if (D -= A.value.length, C = D, A.value instanceof o) continue;
              for (var N = A; N !== r.tail && (D < M || "string" == typeof N.value); N = N.next) {
                P++;
                D += N.value.length;
              }
              P--;
              I = e.slice(C, D);
              T.index -= C;
            } else if (!(T = a(E, 0, I, w))) continue;
            var R = T.index;
            var $ = T[0];
            var L = I.slice(0, R);
            var j = I.slice(R + $.length);
            var z = C + I.length;
            m && z > m.reach && (m.reach = z);
            var Z = A.prev;
            if (L && (Z = p(r, Z, L), C += L.length), g(r, Z, P), A = p(r, Z, new o(v, x ? s.tokenize($, x) : $, _, $)), j && p(r, A, j), P > 1) {
              var F = {
                cause: v + "," + b,
                reach: z
              };
              h(e, r, n, A.prev, C, F);
              m && F.reach > m.reach && (m.reach = F.reach);
            }
          }
        }
      }
    }
  }
  function d() {
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
  function p(e, r, n) {
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
  function g(e, r, n) {
    for (i = r.next, s = 0, void 0; s < n && i !== e.tail; s++) {
      var i;
      var s;
      i = i.next;
    }
    r.next = i;
    i.prev = r;
    e.length -= s;
  }
  function m(e) {
    for (r = [], n = e.head.next, void 0; n !== e.tail;) {
      var r;
      var n;
      r.push(n.value);
      n = n.next;
    }
    return r;
  }
  if (e.Prism = s, o.stringify = function e(r, n) {
    if ("string" == typeof r) return r;
    if (Array.isArray(r)) {
      var i = "";
      r.forEach(function (r) {
        i += e(r, n);
      });
      return i;
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
    s.hooks.run("wrap", o);
    var h = "";
    for (var d in o.attributes) h += " " + d + '="' + (o.attributes[d] || "").replace(/"/g, "&quot;") + '"';
    return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + h + ">" + o.content + "</" + o.tag + ">";
  }, !e.document) {
    e.addEventListener && (s.disableWorkerMessageHandler || e.addEventListener("message", function (r) {
      var n = JSON.parse(r.data);
      var i = n.language;
      var o = n.code;
      var a = n.immediateClose;
      e.postMessage(s.highlight(o, s.languages[i], i));
      a && e.close();
    }, !1));
    return s;
  }
  var v = s.util.currentScript();
  function y() {
    s.manual || s.highlightAll();
  }
  if (v && (s.filename = v.src, v.hasAttribute("data-manual") && (s.manual = !0)), !s.manual) {
    var b = document.readyState;
    "loading" === b || "interactive" === b && v && v.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
  }
  return s;
}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
module.exports && (module.exports = i);
void 0 !== require.g && (require.g.Prism = i);
i.languages.markup = {
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
i.languages.markup.tag.inside["attr-value"].inside.entity = i.languages.markup.entity;
i.languages.markup.doctype.inside["internal-subset"].inside = i.languages.markup;
i.hooks.add("wrap", function (e) {
  "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty(i.languages.markup.tag, "addInlined", {
  value: function (e, r) {
    var n = {};
    n["language-" + r] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: i.languages[r]
    };
    n.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var s = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: n
      }
    };
    s["language-" + r] = {
      pattern: /[\s\S]+/,
      inside: i.languages[r]
    };
    var o = {};
    o[e] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return e;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: s
    };
    i.languages.insertBefore("markup", "cdata", o);
  }
});
Object.defineProperty(i.languages.markup.tag, "addAttribute", {
  value: function (e, r) {
    i.languages.markup.tag.inside["special-attr"].push({
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
              inside: i.languages[r]
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
i.languages.html = i.languages.markup;
i.languages.mathml = i.languages.markup;
i.languages.svg = i.languages.markup;
i.languages.xml = i.languages.extend("markup", {});
i.languages.ssml = i.languages.xml;
i.languages.atom = i.languages.xml;
i.languages.rss = i.languages.xml;
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
  var n = e.languages.markup;
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(i);
i.languages.clike = {
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
i.languages.javascript = i.languages.extend("clike", {
  "class-name": [i.languages.clike["class-name"], {
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
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|") + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
i.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
i.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: i.languages.regex
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
    inside: i.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: !0,
    inside: i.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: i.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package||protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: i.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
i.languages.insertBefore("javascript", "string", {
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
          rest: i.languages.javascript
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
i.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
i.languages.markup && (i.languages.markup.tag.addInlined("script", "javascript"), i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript"));
i.languages.js = i.languages.javascript;
(function () {
  if (void 0 !== i && "undefined" != typeof document) {
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var e = "Loading\u2026";
    var r = function (e, r) {
      return "\u2716 Error " + e + " while fetching file: " + r;
    };
    var n = "\u2716 Error: File does not exist or is empty";
    var s = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    };
    var o = "data-src-status";
    var a = "loading";
    var h = "loaded";
    var d = "failed";
    var p = "pre[data-src]:not([" + o + '="' + h + '"]):not([' + o + '="' + a + '"])';
    i.hooks.add("before-highlightall", function (e) {
      e.selector += ", " + p;
    });
    i.hooks.add("before-sanity-check", function (r) {
      var n = r.element;
      if (n.matches(p)) {
        r.code = "";
        n.setAttribute(o, a);
        var g = n.appendChild(document.createElement("CODE"));
        g.textContent = e;
        var y = n.getAttribute("data-src");
        var b = r.language;
        if ("none" === b) {
          var O = (/\.(\w+)$/.exec(y) || [, "none"])[1];
          b = s[O] || O;
        }
        i.util.setLanguage(g, b);
        i.util.setLanguage(n, b);
        var x = i.plugins.autoloader;
        x && x.loadLanguages(b);
        m(y, function (e) {
          n.setAttribute(o, h);
          var r = v(n.getAttribute("data-range"));
          if (r) {
            var s = e.split(/\r\n?|\n/g);
            var a = r[0];
            var d = r[1];
            a < 0 && (a += s.length);
            a = Math.max(0, Math.min(a - 1, s.length));
            d < 0 && (d += s.length);
            d = Math.max(0, Math.min(d, s.length));
            e = s.slice(a, d).join("\n");
            n.hasAttribute("data-start") || n.setAttribute("data-start", String(a + 1));
          }
          g.textContent = e;
          i.highlightElement(g);
        }, function (e) {
          n.setAttribute(o, d);
          g.textContent = e;
        });
      }
    });
    i.plugins.fileHighlight = {
      highlight: function (e) {
        for (n = (e || document).querySelectorAll(p), s = 0, void 0; r = n[s++];) {
          var r;
          var n;
          var s;
          i.highlightElement(r);
        }
      }
    };
    var g = !1;
    i.fileHighlight = function () {
      g || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), g = !0);
      i.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }
  function m(e, i, s) {
    var o = new XMLHttpRequest();
    o.open("GET", e, !0);
    o.onreadystatechange = function () {
      4 == o.readyState && (o.status < 400 && o.responseText ? i(o.responseText) : o.status >= 400 ? s(r(o.status, o.statusText)) : s(n));
    };
    o.send(null);
  }
  function v(e) {
    var r = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
    if (r) {
      var n = Number(r[1]);
      var i = r[2];
      var s = r[3];
      return i ? s ? [n, Number(s)] : [n, void 0] : [n, n];
    }
  }
})();
