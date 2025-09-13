import _require2 from "../formatter/895744";
import _require from "../formatter/851958";
import { useState, useCallback, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { aq } from "../figma_app/412189";
import { parseLoose } from "../905/253473";
function a(e, t, s) {
  s(e, t);
}
function l(e, t, s) {}
let c = {};
c.Program = c.BlockStatement = c.StaticBlock = (e, t, s) => {
  for (let n of e.body) s(n, t, "Statement");
};
c.Statement = a;
c.EmptyStatement = l;
c.ExpressionStatement = c.ParenthesizedExpression = c.ChainExpression = (e, t, s) => s(e.expression, t, "Expression");
c.IfStatement = (e, t, s) => {
  s(e.test, t, "Expression");
  s(e.consequent, t, "Statement");
  e.alternate && s(e.alternate, t, "Statement");
};
c.LabeledStatement = (e, t, s) => s(e.body, t, "Statement");
c.BreakStatement = c.ContinueStatement = l;
c.WithStatement = (e, t, s) => {
  s(e.object, t, "Expression");
  s(e.body, t, "Statement");
};
c.SwitchStatement = (e, t, s) => {
  for (let n of (s(e.discriminant, t, "Expression"), e.cases)) s(n, t);
};
c.SwitchCase = (e, t, s) => {
  for (let n of (e.test && s(e.test, t, "Expression"), e.consequent)) s(n, t, "Statement");
};
c.ReturnStatement = c.YieldExpression = c.AwaitExpression = (e, t, s) => {
  e.argument && s(e.argument, t, "Expression");
};
c.ThrowStatement = c.SpreadElement = (e, t, s) => s(e.argument, t, "Expression");
c.TryStatement = (e, t, s) => {
  s(e.block, t, "Statement");
  e.handler && s(e.handler, t);
  e.finalizer && s(e.finalizer, t, "Statement");
};
c.CatchClause = (e, t, s) => {
  e.param && s(e.param, t, "Pattern");
  s(e.body, t, "Statement");
};
c.WhileStatement = c.DoWhileStatement = (e, t, s) => {
  s(e.test, t, "Expression");
  s(e.body, t, "Statement");
};
c.ForStatement = (e, t, s) => {
  e.init && s(e.init, t, "ForInit");
  e.test && s(e.test, t, "Expression");
  e.update && s(e.update, t, "Expression");
  s(e.body, t, "Statement");
};
c.ForInStatement = c.ForOfStatement = (e, t, s) => {
  s(e.left, t, "ForInit");
  s(e.right, t, "Expression");
  s(e.body, t, "Statement");
};
c.ForInit = (e, t, s) => {
  "VariableDeclaration" === e.type ? s(e, t) : s(e, t, "Expression");
};
c.DebuggerStatement = l;
c.FunctionDeclaration = (e, t, s) => s(e, t, "Function");
c.VariableDeclaration = (e, t, s) => {
  for (let n of e.declarations) s(n, t);
};
c.VariableDeclarator = (e, t, s) => {
  s(e.id, t, "Pattern");
  e.init && s(e.init, t, "Expression");
};
c.Function = (e, t, s) => {
  for (let n of (e.id && s(e.id, t, "Pattern"), e.params)) s(n, t, "Pattern");
  s(e.body, t, e.expression ? "Expression" : "Statement");
};
c.Pattern = (e, t, s) => {
  "Identifier" === e.type ? s(e, t, "VariablePattern") : "MemberExpression" === e.type ? s(e, t, "MemberPattern") : s(e, t);
};
c.VariablePattern = l;
c.MemberPattern = a;
c.RestElement = (e, t, s) => s(e.argument, t, "Pattern");
c.ArrayPattern = (e, t, s) => {
  for (let n of e.elements) n && s(n, t, "Pattern");
};
c.ObjectPattern = (e, t, s) => {
  for (let n of e.properties) "Property" === n.type ? (n.computed && s(n.key, t, "Expression"), s(n.value, t, "Pattern")) : "RestElement" === n.type && s(n.argument, t, "Pattern");
};
c.Expression = a;
c.ThisExpression = c.Super = c.MetaProperty = l;
c.ArrayExpression = (e, t, s) => {
  for (let n of e.elements) n && s(n, t, "Expression");
};
c.ObjectExpression = (e, t, s) => {
  for (let n of e.properties) s(n, t);
};
c.FunctionExpression = c.ArrowFunctionExpression = c.FunctionDeclaration;
c.SequenceExpression = (e, t, s) => {
  for (let n of e.expressions) s(n, t, "Expression");
};
c.TemplateLiteral = (e, t, s) => {
  for (let n of e.quasis) s(n, t);
  for (let n of e.expressions) s(n, t, "Expression");
};
c.TemplateElement = l;
c.UnaryExpression = c.UpdateExpression = (e, t, s) => {
  s(e.argument, t, "Expression");
};
c.BinaryExpression = c.LogicalExpression = (e, t, s) => {
  s(e.left, t, "Expression");
  s(e.right, t, "Expression");
};
c.AssignmentExpression = c.AssignmentPattern = (e, t, s) => {
  s(e.left, t, "Pattern");
  s(e.right, t, "Expression");
};
c.ConditionalExpression = (e, t, s) => {
  s(e.test, t, "Expression");
  s(e.consequent, t, "Expression");
  s(e.alternate, t, "Expression");
};
c.NewExpression = c.CallExpression = (e, t, s) => {
  if (s(e.callee, t, "Expression"), e.$$arguments) for (let n of e.$$arguments) s(n, t, "Expression");
};
c.MemberExpression = (e, t, s) => {
  s(e.object, t, "Expression");
  e.computed && s(e.property, t, "Expression");
};
c.ExportNamedDeclaration = c.ExportDefaultDeclaration = (e, t, s) => {
  if (e.declaration && s(e.declaration, t, "ExportNamedDeclaration" === e.type || e.declaration.id ? "Statement" : "Expression"), e.source && s(e.source, t, "Expression"), e.attributes) for (let n of e.attributes) s(n, t);
};
c.ExportAllDeclaration = (e, t, s) => {
  for (let n of (e.exported && s(e.exported, t), s(e.source, t, "Expression"), e.attributes)) s(n, t);
};
c.ImportAttribute = (e, t, s) => {
  s(e.value, t, "Expression");
};
c.ImportDeclaration = (e, t, s) => {
  for (let n of e.specifiers) s(n, t);
  for (let n of (s(e.source, t, "Expression"), e.attributes)) s(n, t);
};
c.ImportExpression = (e, t, s) => {
  s(e.source, t, "Expression");
  e.options && s(e.options, t, "Expression");
};
c.ImportSpecifier = c.ImportDefaultSpecifier = c.ImportNamespaceSpecifier = c.Identifier = c.PrivateIdentifier = c.Literal = l;
c.TaggedTemplateExpression = (e, t, s) => {
  s(e.tag, t, "Expression");
  s(e.quasi, t, "Expression");
};
c.ClassDeclaration = c.ClassExpression = (e, t, s) => s(e, t, "Class");
c.Class = (e, t, s) => {
  e.id && s(e.id, t, "Pattern");
  e.superClass && s(e.superClass, t, "Expression");
  s(e.body, t);
};
c.ClassBody = (e, t, s) => {
  for (let n of e.body) s(n, t);
};
c.MethodDefinition = c.PropertyDefinition = c.Property = (e, t, s) => {
  e.computed && s(e.key, t, "Expression");
  e.value && s(e.value, t, "Expression");
};
c.JSXElement = (e, t, s) => {
  for (let n of (s(e.openingElement, t), e.closingElement && s(e.closingElement, t), e.children)) "JSXElement" === n.type ? s(n, t, "Expression") : s(n, t);
};
c.JSXOpeningElement = (e, t, s) => {
  for (let n of ("JSXIdentifier" === e.name.type ? s(e.name, t) : s(e.name, t, "Expression"), e.attributes)) s(n, t);
};
c.JSXClosingElement = (e, t, s) => {
  "JSXIdentifier" === e.name.type ? s(e.name, t) : s(e.name, t, "Expression");
};
c.JSXIdentifier = (e, t, s) => {
  s(e, t, "Identifier");
};
c.JSXMemberExpression = (e, t, s) => {
  "JSXIdentifier" === e.object.type ? s(e.object, t) : s(e.object, t, "Expression");
  s(e.property, t);
};
c.JSXNamespacedName = (e, t, s) => {
  s(e.name, t);
  s(e.namespace, t);
};
c.JSXAttribute = (e, t, s) => {
  "JSXIdentifier" === e.name.type ? s(e.name, t) : s(e.name, t, "Expression");
  e.value && ("JSXExpressionContainer" === e.value.type ? s(e.value, t) : s(e.value, t, "Expression"));
};
c.JSXSpreadAttribute = (e, t, s) => {
  s(e, t, "SpreadElement");
};
c.JSXExpressionContainer = (e, t, s) => {
  "JSXEmptyExpression" === e.expression.type ? s(e.expression, t) : s(e.expression, t, "Expression");
};
c.JSXFragment = (e, t, s) => {
  s(e.openingFragment, t);
  for (let n = 0; n < e.children.length; ++n) s(e.children[n], t);
  s(e.closingFragment, t);
};
c.JSXEmptyExpression = c.JSXSpreadChild = c.JSXText = c.JSXOpeningFragment = c.JSXClosingFragment = c.JSXObject = l;
let d = {
  parser: "typescript",
  semi: !1,
  printWidth: 50
};
class p {
  constructor() {
    this.prettier = _require;
    this.prettierPlugins = Promise.all([require.t.bind(require, 400937, 23), require.t.bind(require, 52675, 23), _require2, require.t.bind(require, 55103, 23)]);
  }
  async formatCode(e, t = {}) {
    let {
      format
    } = await this.prettier;
    let [n, r, o, a] = await this.prettierPlugins;
    let l = {
      parser: t.parser || d.parser,
      semi: t.semi || d.semi,
      printWidth: t.printWidth || d.printWidth
    };
    let p = e;
    "typescript" === l.parser && (p = function (e) {
      let {
        imports,
        jsx
      } = function (e) {
        let t = [];
        let s = e.replace(/^\s*(import\s+.*?\n)$/gm, e => (t.push(e), ""));
        return {
          imports: t,
          jsx: s
        };
      }(e);
      try {
        let e = parseLoose(jsx);
        if (e) {
          var n;
          var r;
          let o = [];
          for (let {
            start,
            end
          } of (n = {
            JSXFragment(e) {
              let t = e.children.filter(e => !("JSXText" === e.type && "" === e.value.replace(/\s+/g, "")));
              1 === t.length && (o.push({
                start: e.openingFragment.start,
                end: e.openingFragment.end
              }), o.push({
                start: e.closingFragment.start,
                end: e.closingFragment.end
              }));
            }
          }, r || (r = c), function e(t, s, o) {
            let i = o || t.type;
            if (!r[i]) throw Error("No visitor found for node type " + i);
            r[i](t, s, e);
            n[i] && n[i](t, s);
          }(e, void 0, void 0), o.sort((e, t) => t.start - e.start))) s = jsx.slice(0, start) + jsx.slice(end);
          return imports.join("\n") + jsx;
        }
      } catch (e) {}
      return e;
    }(p));
    return await format(p, {
      plugins: [r, n, o, a],
      ...l,
      htmlWhitespaceSensitivity: "ignore"
    });
  }
}
export function $$u1(e, t = !1, s) {
  let [i, a] = useState(t ? e : null);
  let l = aq();
  let c = useCallback(async () => {
    if (t) {
      a(e);
      return;
    }
    if (e) {
      let t = e;
      try {
        let n = new p();
        t = await n.formatCode(e, {
          parser: s?.parser,
          semi: s?.semi,
          printWidth: s?.printWidth
        });
      } catch (e) {
        console.warn(e);
      }
      l() && a(t);
    }
  }, [l, e, s?.parser, s?.semi, s?.printWidth, t]);
  let d = useDebouncedCallback(c, 100, {
    leading: !0
  });
  useEffect(() => {
    d();
  }, [d, l, e, s?.parser, s?.semi, s?.printWidth]);
  return i;
}
export function $$m0(e, t) {
  return new p().formatCode(e ?? "", t);
}
export const P = $$m0;
export const V = $$u1;
