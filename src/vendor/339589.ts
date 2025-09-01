!function (e) {
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
    ("markdown" === e.language || "md" === e.language) && r(e.tokens);
    function r(e) {
      if (e && "string" != typeof e) for (n = 0, i = e.length, void 0; n < i; n++) {
        var n;
        var i;
        var s = e[n];
        if ("code" !== s.type) {
          r(s.content);
          continue;
        }
        var o = s.content[1];
        var a = s.content[3];
        if (o && a && "code-language" === o.type && "code-block" === a.type && "string" == typeof o.content) {
          var h = o.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
          var d = "language-" + (h = (/[a-z][\w-]*/i.exec(h) || [""])[0].toLowerCase());
          a.alias ? "string" == typeof a.alias ? a.alias = [a.alias, d] : a.alias.push(d) : a.alias = [d];
        }
      }
    }
  });
  e.hooks.add("wrap", function (r) {
    if ("code-block" === r.type) {
      for (n = "", i = 0, s = r.classes.length, void 0; i < s; i++) {
        var n;
        var i;
        var s;
        var o = r.classes[i];
        var a = /language-(.+)/.exec(o);
        if (a) {
          n = a[1];
          break;
        }
      }
      var h = e.languages[n];
      if (h) r.content = e.highlight(p(r.content), h, n);else if (n && "none" !== n && e.plugins.autoloader) {
        var d = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
        r.attributes.id = d;
        e.plugins.autoloader.loadLanguages(n, function () {
          var r = document.getElementById(d);
          r && (r.innerHTML = e.highlight(r.textContent, e.languages[n], n));
        });
      }
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
  function p(e) {
    return e.replace(a, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, r) {
      if ("#" === (r = r.toLowerCase())[0]) {
        var n;
        return d(n = "x" === r[1] ? parseInt(r.slice(2), 16) : Number(r.slice(1)));
      }
      return h[r] || e;
    });
  }
  e.languages.md = e.languages.markdown;
}(Prism);