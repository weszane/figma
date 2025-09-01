!function (e) {
  var t = e.util.clone(e.languages.javascript);
  var n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function A(e, t) {
    return RegExp(e = e.replace(/<S>/g, function () {
      return n;
    }).replace(/<BRACES>/g, function () {
      return r;
    }).replace(/<SPREAD>/g, function () {
      return i;
    }), t);
  }
  i = A(i).source;
  e.languages.jsx = e.languages.extend("markup", t);
  e.languages.jsx.tag.pattern = A(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/;
  e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  e.languages.jsx.tag.inside.comment = t.comment;
  e.languages.insertBefore("inside", "attr-name", {
    spread: {
      pattern: A(/<SPREAD>/.source),
      inside: e.languages.jsx
    }
  }, e.languages.jsx.tag);
  e.languages.insertBefore("inside", "special-attr", {
    script: {
      pattern: A(/=<BRACES>/.source),
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
  var o = function (e) {
    return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(o).join("") : "";
  };
  var s = function (t) {
    for (n = [], r = 0, void 0; r < t.length; r++) {
      var n;
      var r;
      var i = t[r];
      var A = !1;
      if ("string" != typeof i && ("tag" === i.type && i.content[0] && "tag" === i.content[0].type ? "</" === i.content[0].content[0].content ? n.length > 0 && n[n.length - 1].tagName === o(i.content[0].content[1]) && n.pop() : "/>" === i.content[i.content.length - 1].content || n.push({
        tagName: o(i.content[0].content[1]),
        openedBraces: 0
      }) : n.length > 0 && "punctuation" === i.type && "{" === i.content ? n[n.length - 1].openedBraces++ : n.length > 0 && n[n.length - 1].openedBraces > 0 && "punctuation" === i.type && "}" === i.content ? n[n.length - 1].openedBraces-- : A = !0), (A || "string" == typeof i) && n.length > 0 && 0 === n[n.length - 1].openedBraces) {
        var a = o(i);
        r < t.length - 1 && ("string" == typeof t[r + 1] || "plain-text" === t[r + 1].type) && (a += o(t[r + 1]), t.splice(r + 1, 1));
        r > 0 && ("string" == typeof t[r - 1] || "plain-text" === t[r - 1].type) && (a = o(t[r - 1]) + a, t.splice(r - 1, 1), r--);
        t[r] = new e.Token("plain-text", a, null, a);
      }
      i.content && "string" != typeof i.content && s(i.content);
    }
  };
  e.hooks.add("after-tokenize", function (e) {
    ("jsx" === e.language || "tsx" === e.language) && s(e.tokens);
  });
}(Prism);