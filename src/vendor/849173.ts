function n(e, r) {
  if (!(e instanceof r)) throw TypeError("Cannot call a class as a function");
}
function i(e, r) {
  for (var n = 0; n < r.length; n++) {
    var i = r[n];
    i.enumerable = i.enumerable || !1;
    i.configurable = !0;
    "value" in i && (i.writable = !0);
    Object.defineProperty(e, i.key, i);
  }
}
function s(e, r, n) {
  r && i(e.prototype, r);
  n && i(e, n);
  return e;
}
exports.generate = P;
exports.baseGenerator = exports.GENERATOR = exports.EXPRESSIONS_PRECEDENCE = exports.NEEDS_PARENTHESES = void 0;
var o;
var a;
var h;
var d;
var p;
var g;
var m = JSON.stringify;
if (!String.prototype.repeat) throw Error("String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation");
if (!String.prototype.endsWith) throw Error("String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation");
var v = {
  "||": 2,
  "??": 3,
  "&&": 4,
  "|": 5,
  "^": 6,
  "&": 7,
  "==": 8,
  "!=": 8,
  "===": 8,
  "!==": 8,
  "<": 9,
  ">": 9,
  "<=": 9,
  ">=": 9,
  in: 9,
  instanceof: 9,
  "<<": 10,
  ">>": 10,
  ">>>": 10,
  "+": 11,
  "-": 11,
  "*": 12,
  "%": 12,
  "/": 12,
  "**": 13
};
var y = 17;
exports.NEEDS_PARENTHESES = y;
var b = {
  ArrayExpression: 20,
  TaggedTemplateExpression: 20,
  ThisExpression: 20,
  Identifier: 20,
  PrivateIdentifier: 20,
  Literal: 18,
  TemplateLiteral: 20,
  Super: 20,
  SequenceExpression: 20,
  MemberExpression: 19,
  ChainExpression: 19,
  CallExpression: 19,
  NewExpression: 19,
  ArrowFunctionExpression: y,
  ClassExpression: y,
  FunctionExpression: y,
  ObjectExpression: y,
  UpdateExpression: 16,
  UnaryExpression: 15,
  AwaitExpression: 15,
  BinaryExpression: 14,
  LogicalExpression: 13,
  ConditionalExpression: 4,
  AssignmentExpression: 3,
  YieldExpression: 2,
  RestElement: 1
};
function O(e, r) {
  var n = e.generator;
  if (e.write("("), null != r && r.length > 0) {
    n[r[0].type](r[0], e);
    for (i = r.length, s = 1, void 0; s < i; s++) {
      var i;
      var s;
      var o = r[s];
      e.write(", ");
      n[o.type](o, e);
    }
  }
  e.write(")");
}
function x(e, r, n, i) {
  var s = e.expressionsPrecedence[r.type];
  if (s === y) return !0;
  var o = e.expressionsPrecedence[n.type];
  return s !== o ? !i && 15 === s && 14 === o && "**" === n.operator || s < o : (13 === s || 14 === s) && ("**" === r.operator && "**" === n.operator ? !i : 13 === s && 13 === o && ("??" === r.operator || "??" === n.operator) || (i ? v[r.operator] <= v[n.operator] : v[r.operator] < v[n.operator]));
}
function w(e, r, n, i) {
  var s = e.generator;
  x(e, r, n, i) ? (e.write("("), s[r.type](r, e), e.write(")")) : s[r.type](r, e);
}
function k(e, r, n, i) {
  var s = r.split("\n");
  var o = s.length - 1;
  if (e.write(s[0].trim()), o > 0) {
    e.write(i);
    for (var a = 1; a < o; a++) e.write(n + s[a].trim() + i);
    e.write(n + s[o].trim());
  }
}
function _(e, r, n, i) {
  for (s = r.length, o = 0, void 0; o < s; o++) {
    var s;
    var o;
    var a = r[o];
    e.write(n);
    "L" === a.type[0] ? e.write("// " + a.value.trim() + "\n", a) : (e.write("/*"), k(e, a.value, n, i), e.write("*/" + i));
  }
}
function S(e) {
  for (var r = e; null != r;) {
    var n = r.type;
    if ("C" === n[0] && "a" === n[1]) return !0;
    if ("M" !== n[0] || "e" !== n[1] || "m" !== n[2]) return !1;
    r = r.object;
  }
}
function E(e, r) {
  var n = e.generator;
  var i = r.declarations;
  e.write(r.kind + " ");
  var s = i.length;
  if (s > 0) {
    n.VariableDeclarator(i[0], e);
    for (var o = 1; o < s; o++) {
      e.write(", ");
      n.VariableDeclarator(i[o], e);
    }
  }
}
exports.EXPRESSIONS_PRECEDENCE = b;
var A = {
  Program: function (e, r) {
    var n = r.indent.repeat(r.indentLevel);
    var i = r.lineEnd;
    var s = r.writeComments;
    s && null != e.comments && _(r, e.comments, n, i);
    for (o = e.body, a = o.length, h = 0, void 0; h < a; h++) {
      var o;
      var a;
      var h;
      var d = o[h];
      s && null != d.comments && _(r, d.comments, n, i);
      r.write(n);
      this[d.type](d, r);
      r.write(i);
    }
    s && null != e.trailingComments && _(r, e.trailingComments, n, i);
  },
  BlockStatement: g = function (e, r) {
    var n = r.indent.repeat(r.indentLevel++);
    var i = r.lineEnd;
    var s = r.writeComments;
    var o = n + r.indent;
    r.write("{");
    var a = e.body;
    if (null != a && a.length > 0) {
      r.write(i);
      s && null != e.comments && _(r, e.comments, o, i);
      for (h = a.length, d = 0, void 0; d < h; d++) {
        var h;
        var d;
        var p = a[d];
        s && null != p.comments && _(r, p.comments, o, i);
        r.write(o);
        this[p.type](p, r);
        r.write(i);
      }
      r.write(n);
    } else s && null != e.comments && (r.write(i), _(r, e.comments, o, i), r.write(n));
    s && null != e.trailingComments && _(r, e.trailingComments, o, i);
    r.write("}");
    r.indentLevel--;
  },
  ClassBody: g,
  StaticBlock: function (e, r) {
    r.write("static ");
    this.BlockStatement(e, r);
  },
  EmptyStatement: function (e, r) {
    r.write(";");
  },
  ExpressionStatement: function (e, r) {
    var n = r.expressionsPrecedence[e.expression.type];
    n === y || 3 === n && "O" === e.expression.left.type[0] ? (r.write("("), this[e.expression.type](e.expression, r), r.write(")")) : this[e.expression.type](e.expression, r);
    r.write(";");
  },
  IfStatement: function (e, r) {
    r.write("if (");
    this[e.test.type](e.test, r);
    r.write(") ");
    this[e.consequent.type](e.consequent, r);
    null != e.alternate && (r.write(" else "), this[e.alternate.type](e.alternate, r));
  },
  LabeledStatement: function (e, r) {
    this[e.label.type](e.label, r);
    r.write(": ");
    this[e.body.type](e.body, r);
  },
  BreakStatement: function (e, r) {
    r.write("break");
    null != e.label && (r.write(" "), this[e.label.type](e.label, r));
    r.write(";");
  },
  ContinueStatement: function (e, r) {
    r.write("continue");
    null != e.label && (r.write(" "), this[e.label.type](e.label, r));
    r.write(";");
  },
  WithStatement: function (e, r) {
    r.write("with (");
    this[e.object.type](e.object, r);
    r.write(") ");
    this[e.body.type](e.body, r);
  },
  SwitchStatement: function (e, r) {
    var n = r.indent.repeat(r.indentLevel++);
    var i = r.lineEnd;
    var s = r.writeComments;
    r.indentLevel++;
    var o = n + r.indent;
    var a = o + r.indent;
    r.write("switch (");
    this[e.discriminant.type](e.discriminant, r);
    r.write(") {" + i);
    for (h = e.cases, d = h.length, p = 0, void 0; p < d; p++) {
      var h;
      var d;
      var p;
      var g = h[p];
      s && null != g.comments && _(r, g.comments, o, i);
      g.test ? (r.write(o + "case "), this[g.test.type](g.test, r), r.write(":" + i)) : r.write(o + "default:" + i);
      for (m = g.consequent, v = m.length, y = 0, void 0; y < v; y++) {
        var m;
        var v;
        var y;
        var b = m[y];
        s && null != b.comments && _(r, b.comments, a, i);
        r.write(a);
        this[b.type](b, r);
        r.write(i);
      }
    }
    r.indentLevel -= 2;
    r.write(n + "}");
  },
  ReturnStatement: function (e, r) {
    r.write("return");
    e.argument && (r.write(" "), this[e.argument.type](e.argument, r));
    r.write(";");
  },
  ThrowStatement: function (e, r) {
    r.write("throw ");
    this[e.argument.type](e.argument, r);
    r.write(";");
  },
  TryStatement: function (e, r) {
    if (r.write("try "), this[e.block.type](e.block, r), e.handler) {
      var n = e.handler;
      null == n.param ? r.write(" catch ") : (r.write(" catch ("), this[n.param.type](n.param, r), r.write(") "));
      this[n.body.type](n.body, r);
    }
    e.finalizer && (r.write(" finally "), this[e.finalizer.type](e.finalizer, r));
  },
  WhileStatement: function (e, r) {
    r.write("while (");
    this[e.test.type](e.test, r);
    r.write(") ");
    this[e.body.type](e.body, r);
  },
  DoWhileStatement: function (e, r) {
    r.write("do ");
    this[e.body.type](e.body, r);
    r.write(" while (");
    this[e.test.type](e.test, r);
    r.write(");");
  },
  ForStatement: function (e, r) {
    if (r.write("for ("), null != e.init) {
      var n = e.init;
      "V" === n.type[0] ? E(r, n) : this[n.type](n, r);
    }
    r.write("; ");
    e.test && this[e.test.type](e.test, r);
    r.write("; ");
    e.update && this[e.update.type](e.update, r);
    r.write(") ");
    this[e.body.type](e.body, r);
  },
  ForInStatement: o = function (e, r) {
    r.write("for ".concat(e.await ? "await " : "", "("));
    var n = e.left;
    "V" === n.type[0] ? E(r, n) : this[n.type](n, r);
    r.write("I" === e.type[3] ? " in " : " of ");
    this[e.right.type](e.right, r);
    r.write(") ");
    this[e.body.type](e.body, r);
  },
  ForOfStatement: o,
  DebuggerStatement: function (e, r) {
    r.write("debugger;", e);
  },
  FunctionDeclaration: a = function (e, r) {
    r.write((e.async ? "async " : "") + (e.generator ? "function* " : "function ") + (e.id ? e.id.name : ""), e);
    O(r, e.params);
    r.write(" ");
    this[e.body.type](e.body, r);
  },
  FunctionExpression: a,
  VariableDeclaration: function (e, r) {
    E(r, e);
    r.write(";");
  },
  VariableDeclarator: function (e, r) {
    this[e.id.type](e.id, r);
    null != e.init && (r.write(" = "), this[e.init.type](e.init, r));
  },
  ClassDeclaration: function (e, r) {
    if (r.write("class " + (e.id ? "".concat(e.id.name, " ") : ""), e), e.superClass) {
      r.write("extends ");
      var n = e.superClass;
      var i = n.type;
      var s = r.expressionsPrecedence[i];
      ("C" !== i[0] || "l" !== i[1] || "E" !== i[5]) && (s === y || s < r.expressionsPrecedence.ClassExpression) ? (r.write("("), this[e.superClass.type](n, r), r.write(")")) : this[n.type](n, r);
      r.write(" ");
    }
    this.ClassBody(e.body, r);
  },
  ImportDeclaration: function (e, r) {
    r.write("import ");
    var n = e.specifiers;
    var i = n.length;
    var s = 0;
    if (i > 0) {
      for (; s < i;) {
        s > 0 && r.write(", ");
        var o = n[s];
        var a = o.type[6];
        if ("D" === a) {
          r.write(o.local.name, o);
          s++;
        } else if ("N" === a) {
          r.write("* as " + o.local.name, o);
          s++;
        } else break;
      }
      if (s < i) {
        for (r.write("{");;) {
          var h = n[s];
          var d = h.imported.name;
          if (r.write(d, h), d !== h.local.name && r.write(" as " + h.local.name), ++s < i) r.write(", ");else break;
        }
        r.write("}");
      }
      r.write(" from ");
    }
    this.Literal(e.source, r);
    r.write(";");
  },
  ImportExpression: function (e, r) {
    r.write("import(");
    this[e.source.type](e.source, r);
    r.write(")");
  },
  ExportDefaultDeclaration: function (e, r) {
    r.write("export default ");
    this[e.declaration.type](e.declaration, r);
    null != r.expressionsPrecedence[e.declaration.type] && "F" !== e.declaration.type[0] && r.write(";");
  },
  ExportNamedDeclaration: function (e, r) {
    if (r.write("export "), e.declaration) this[e.declaration.type](e.declaration, r);else {
      r.write("{");
      var n = e.specifiers;
      var i = n.length;
      if (i > 0) for (var s = 0;;) {
        var o = n[s];
        var a = o.local.name;
        if (r.write(a, o), a !== o.exported.name && r.write(" as " + o.exported.name), ++s < i) r.write(", ");else break;
      }
      r.write("}");
      e.source && (r.write(" from "), this.Literal(e.source, r));
      r.write(";");
    }
  },
  ExportAllDeclaration: function (e, r) {
    null != e.exported ? r.write("export * as " + e.exported.name + " from ") : r.write("export * from ");
    this.Literal(e.source, r);
    r.write(";");
  },
  MethodDefinition: function (e, r) {
    e.$$static && r.write("static ");
    var n = e.kind[0];
    ("g" === n || "s" === n) && r.write(e.kind + " ");
    e.value.async && r.write("async ");
    e.value.generator && r.write("*");
    e.computed ? (r.write("["), this[e.key.type](e.key, r), r.write("]")) : this[e.key.type](e.key, r);
    O(r, e.value.params);
    r.write(" ");
    this[e.value.body.type](e.value.body, r);
  },
  ClassExpression: function (e, r) {
    this.ClassDeclaration(e, r);
  },
  ArrowFunctionExpression: function (e, r) {
    r.write(e.async ? "async " : "", e);
    var n = e.params;
    null != n && (1 === n.length && "I" === n[0].type[0] ? r.write(n[0].name, n[0]) : O(r, e.params));
    r.write(" => ");
    "O" === e.body.type[0] ? (r.write("("), this.ObjectExpression(e.body, r), r.write(")")) : this[e.body.type](e.body, r);
  },
  ThisExpression: function (e, r) {
    r.write("this", e);
  },
  Super: function (e, r) {
    r.write("super", e);
  },
  RestElement: h = function (e, r) {
    r.write("...");
    this[e.argument.type](e.argument, r);
  },
  SpreadElement: h,
  YieldExpression: function (e, r) {
    r.write(e.delegate ? "yield*" : "yield");
    e.argument && (r.write(" "), this[e.argument.type](e.argument, r));
  },
  AwaitExpression: function (e, r) {
    r.write("await ", e);
    w(r, e.argument, e);
  },
  TemplateLiteral: function (e, r) {
    var n = e.quasis;
    var i = e.expressions;
    r.write("`");
    for (s = i.length, o = 0, void 0; o < s; o++) {
      var s;
      var o;
      var a = i[o];
      var h = n[o];
      r.write(h.value.raw, h);
      r.write("${");
      this[a.type](a, r);
      r.write("}");
    }
    var d = n[n.length - 1];
    r.write(d.value.raw, d);
    r.write("`");
  },
  TemplateElement: function (e, r) {
    r.write(e.value.raw, e);
  },
  TaggedTemplateExpression: function (e, r) {
    w(r, e.tag, e);
    this[e.quasi.type](e.quasi, r);
  },
  ArrayExpression: p = function (e, r) {
    if (r.write("["), e.elements.length > 0) for (n = e.elements, i = n.length, s = 0, void 0;;) {
      var n;
      var i;
      var s;
      var o = n[s];
      if (null != o && this[o.type](o, r), ++s < i) r.write(", ");else {
        null == o && r.write(", ");
        break;
      }
    }
    r.write("]");
  },
  ArrayPattern: p,
  ObjectExpression: function (e, r) {
    var n = r.indent.repeat(r.indentLevel++);
    var i = r.lineEnd;
    var s = r.writeComments;
    var o = n + r.indent;
    if (r.write("{"), e.properties.length > 0) {
      r.write(i);
      s && null != e.comments && _(r, e.comments, o, i);
      for (a = "," + i, h = e.properties, d = h.length, p = 0, void 0;;) {
        var a;
        var h;
        var d;
        var p;
        var g = h[p];
        if (s && null != g.comments && _(r, g.comments, o, i), r.write(o), this[g.type](g, r), ++p < d) r.write(a);else break;
      }
      r.write(i);
      s && null != e.trailingComments && _(r, e.trailingComments, o, i);
      r.write(n + "}");
    } else s ? null != e.comments ? (r.write(i), _(r, e.comments, o, i), null != e.trailingComments && _(r, e.trailingComments, o, i), r.write(n + "}")) : null != e.trailingComments ? (r.write(i), _(r, e.trailingComments, o, i), r.write(n + "}")) : r.write("}") : r.write("}");
    r.indentLevel--;
  },
  Property: function (e, r) {
    e.method || "i" !== e.kind[0] ? this.MethodDefinition(e, r) : (e.shorthand || (e.computed ? (r.write("["), this[e.key.type](e.key, r), r.write("]")) : this[e.key.type](e.key, r), r.write(": ")), this[e.value.type](e.value, r));
  },
  PropertyDefinition: function (e, r) {
    if (e.$$static && r.write("static "), e.computed && r.write("["), this[e.key.type](e.key, r), e.computed && r.write("]"), null == e.value) {
      "F" !== e.key.type[0] && r.write(";");
      return;
    }
    r.write(" = ");
    this[e.value.type](e.value, r);
    r.write(";");
  },
  ObjectPattern: function (e, r) {
    if (r.write("{"), e.properties.length > 0) for (n = e.properties, i = n.length, s = 0, void 0;;) {
      var n;
      var i;
      var s;
      if (this[n[s].type](n[s], r), ++s < i) r.write(", ");else break;
    }
    r.write("}");
  },
  SequenceExpression: function (e, r) {
    O(r, e.expressions);
  },
  UnaryExpression: function (e, r) {
    if (e.prefix) {
      var n = e.operator;
      var i = e.argument;
      var s = e.argument.type;
      r.write(n);
      var o = x(r, i, e);
      !o && (n.length > 1 || "U" === s[0] && ("n" === s[1] || "p" === s[1]) && i.prefix && i.operator[0] === n && ("+" === n || "-" === n)) && r.write(" ");
      o ? (r.write(n.length > 1 ? " (" : "("), this[s](i, r), r.write(")")) : this[s](i, r);
    } else {
      this[e.argument.type](e.argument, r);
      r.write(e.operator);
    }
  },
  UpdateExpression: function (e, r) {
    e.prefix ? (r.write(e.operator), this[e.argument.type](e.argument, r)) : (this[e.argument.type](e.argument, r), r.write(e.operator));
  },
  AssignmentExpression: function (e, r) {
    this[e.left.type](e.left, r);
    r.write(" " + e.operator + " ");
    this[e.right.type](e.right, r);
  },
  AssignmentPattern: function (e, r) {
    this[e.left.type](e.left, r);
    r.write(" = ");
    this[e.right.type](e.right, r);
  },
  BinaryExpression: d = function (e, r) {
    var n = "in" === e.operator;
    n && r.write("(");
    w(r, e.left, e, !1);
    r.write(" " + e.operator + " ");
    w(r, e.right, e, !0);
    n && r.write(")");
  },
  LogicalExpression: d,
  ConditionalExpression: function (e, r) {
    var n = e.test;
    var i = r.expressionsPrecedence[n.type];
    i === y || i <= r.expressionsPrecedence.ConditionalExpression ? (r.write("("), this[n.type](n, r), r.write(")")) : this[n.type](n, r);
    r.write(" ? ");
    this[e.consequent.type](e.consequent, r);
    r.write(" : ");
    this[e.alternate.type](e.alternate, r);
  },
  NewExpression: function (e, r) {
    r.write("new ");
    var n = r.expressionsPrecedence[e.callee.type];
    n === y || n < r.expressionsPrecedence.CallExpression || S(e.callee) ? (r.write("("), this[e.callee.type](e.callee, r), r.write(")")) : this[e.callee.type](e.callee, r);
    O(r, e.$$arguments);
  },
  CallExpression: function (e, r) {
    var n = r.expressionsPrecedence[e.callee.type];
    n === y || n < r.expressionsPrecedence.CallExpression ? (r.write("("), this[e.callee.type](e.callee, r), r.write(")")) : this[e.callee.type](e.callee, r);
    e.optional && r.write("?.");
    O(r, e.$$arguments);
  },
  ChainExpression: function (e, r) {
    this[e.expression.type](e.expression, r);
  },
  MemberExpression: function (e, r) {
    var n = r.expressionsPrecedence[e.object.type];
    n === y || n < r.expressionsPrecedence.MemberExpression ? (r.write("("), this[e.object.type](e.object, r), r.write(")")) : this[e.object.type](e.object, r);
    e.computed ? (e.optional && r.write("?."), r.write("["), this[e.property.type](e.property, r), r.write("]")) : (e.optional ? r.write("?.") : r.write("."), this[e.property.type](e.property, r));
  },
  MetaProperty: function (e, r) {
    r.write(e.meta.name + "." + e.property.name, e);
  },
  Identifier: function (e, r) {
    r.write(e.name, e);
  },
  PrivateIdentifier: function (e, r) {
    r.write("#".concat(e.name), e);
  },
  Literal: function (e, r) {
    null != e.raw ? r.write(e.raw, e) : null != e.regex ? this.RegExpLiteral(e, r) : null != e.bigint ? r.write(e.bigint + "n", e) : r.write(m(e.value), e);
  },
  RegExpLiteral: function (e, r) {
    var n = e.regex;
    r.write("/".concat(n.pattern, "/").concat(n.flags), e);
  }
};
exports.GENERATOR = A;
var C = {};
var T = A;
exports.baseGenerator = T;
var I = function () {
  function e(r) {
    n(this, e);
    var i = r;
    this.output = "";
    null != i.output ? (this.output = i.output, this.write = this.writeToStream) : this.output = "";
    this.generator = null != i.generator ? i.generator : A;
    this.expressionsPrecedence = null != i.expressionsPrecedence ? i.expressionsPrecedence : b;
    this.indent = null != i.indent ? i.indent : "  ";
    this.lineEnd = null != i.lineEnd ? i.lineEnd : "\n";
    this.indentLevel = null != i.startingIndentLevel ? i.startingIndentLevel : 0;
    this.writeComments = !!i.comments && i.comments;
    null != i.sourceMap && (this.write = null == i.output ? this.writeAndMap : this.writeToStreamAndMap, this.sourceMap = i.sourceMap, this.line = 1, this.column = 0, this.lineEndSize = this.lineEnd.split("\n").length - 1, this.mapping = {
      original: null,
      generated: this,
      name: void 0,
      source: i.sourceMap.file || i.sourceMap._file
    });
  }
  s(e, [{
    key: "write",
    value: function (e) {
      this.output += e;
    }
  }, {
    key: "writeToStream",
    value: function (e) {
      this.output.write(e);
    }
  }, {
    key: "writeAndMap",
    value: function (e, r) {
      this.output += e;
      this.map(e, r);
    }
  }, {
    key: "writeToStreamAndMap",
    value: function (e, r) {
      this.output.write(e);
      this.map(e, r);
    }
  }, {
    key: "map",
    value: function (e, r) {
      if (null != r) {
        var n = r.type;
        if ("L" === n[0] && "n" === n[2]) {
          this.column = 0;
          this.line++;
          return;
        }
        if (null != r.loc) {
          var i = this.mapping;
          i.original = r.loc.start;
          i.name = r.name;
          this.sourceMap.addMapping(i);
        }
        if ("T" === n[0] && "E" === n[8] || "L" === n[0] && "i" === n[1] && "string" == typeof r.value) {
          for (s = e.length, o = this.column, a = this.line, h = 0, void 0; h < s; h++) {
            var s;
            var o;
            var a;
            var h;
            "\n" === e[h] ? (o = 0, a++) : o++;
          }
          this.column = o;
          this.line = a;
          return;
        }
      }
      var d = e.length;
      var p = this.lineEnd;
      d > 0 && (this.lineEndSize > 0 && (1 === p.length ? e[d - 1] === p : e.endsWith(p)) ? (this.line += this.lineEndSize, this.column = 0) : this.column += d);
    }
  }, {
    key: "toString",
    value: function () {
      return this.output;
    }
  }]);
  return e;
}();
function P(e, r) {
  var n = new I(r);
  n.generator[e.type](e, n);
  return n.output;
}