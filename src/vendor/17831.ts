Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: !0,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: !0,
        inside: Prism.languages.markdown
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
Prism.hooks.add("after-tokenize", function (e) {
  if ("graphql" === e.language) for (t = e.tokens.filter(function (e) {
    return "string" != typeof e && "comment" !== e.type && "scalar" !== e.type;
  }), n = 0, void 0; n < t.length;) {
    var t;
    var n;
    var r = t[n++];
    if ("keyword" === r.type && "mutation" === r.content) {
      var i = [];
      if (u(["definition-mutation", "punctuation"]) && "(" === t[n + 1].content) {
        n += 2;
        var A = g(/^\($/, /^\)$/);
        if (-1 === A) continue;
        for (; n < A; n++) {
          var o = t[n + 0];
          "variable" === o.type && (c(o, "variable-input"), i.push(o.content));
        }
        n = A + 1;
      }
      if (u(["punctuation", "property-query"]) && "{" === t[n + 0].content && (c(t[++n + 0], "property-mutation"), i.length > 0)) {
        var s = g(/^\{$/, /^\}$/);
        if (-1 === s) continue;
        for (var a = n; a < s; a++) {
          var l = t[a];
          "variable" === l.type && i.indexOf(l.content) >= 0 && c(l, "variable-input");
        }
      }
    }
  }
  function u(e, r) {
    r = r || 0;
    for (var i = 0; i < e.length; i++) {
      var A = t[n + (i + r)];
      if (!A || A.type !== e[i]) return !1;
    }
    return !0;
  }
  function g(e, r) {
    for (i = 1, A = n, void 0; A < t.length; A++) {
      var i;
      var A;
      var o = t[A];
      var s = o.content;
      if ("punctuation" === o.type && "string" == typeof s) {
        if (e.test(s)) i++;else if (r.test(s) && 0 == --i) return A;
      }
    }
    return -1;
  }
  function c(e, t) {
    var n = e.alias;
    n ? Array.isArray(n) || (e.alias = n = [n]) : e.alias = n = [];
    n.push(t);
  }
});