import _require2 from "../formatter/895744";
import _require from "../formatter/851958";
import { useState, useCallback, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useIsMounted } from "../figma_app/412189";
import { parseLoose } from "../905/253473";
function a(e, t, r) {
  r(e, t);
}
function p(e, t, r) {}
let l = {};
l.Program = l.BlockStatement = l.StaticBlock = (e, t, r) => {
  for (let n of e.body) r(n, t, "Statement");
};
l.Statement = a;
l.EmptyStatement = p;
l.ExpressionStatement = l.ParenthesizedExpression = l.ChainExpression = (e, t, r) => r(e.expression, t, "Expression");
l.IfStatement = (e, t, r) => {
  r(e.test, t, "Expression");
  r(e.consequent, t, "Statement");
  e.alternate && r(e.alternate, t, "Statement");
};
l.LabeledStatement = (e, t, r) => r(e.body, t, "Statement");
l.BreakStatement = l.ContinueStatement = p;
l.WithStatement = (e, t, r) => {
  r(e.object, t, "Expression");
  r(e.body, t, "Statement");
};
l.SwitchStatement = (e, t, r) => {
  for (let n of (r(e.discriminant, t, "Expression"), e.cases)) r(n, t);
};
l.SwitchCase = (e, t, r) => {
  for (let n of (e.test && r(e.test, t, "Expression"), e.consequent)) r(n, t, "Statement");
};
l.ReturnStatement = l.YieldExpression = l.AwaitExpression = (e, t, r) => {
  e.argument && r(e.argument, t, "Expression");
};
l.ThrowStatement = l.SpreadElement = (e, t, r) => r(e.argument, t, "Expression");
l.TryStatement = (e, t, r) => {
  r(e.block, t, "Statement");
  e.handler && r(e.handler, t);
  e.finalizer && r(e.finalizer, t, "Statement");
};
l.CatchClause = (e, t, r) => {
  e.param && r(e.param, t, "Pattern");
  r(e.body, t, "Statement");
};
l.WhileStatement = l.DoWhileStatement = (e, t, r) => {
  r(e.test, t, "Expression");
  r(e.body, t, "Statement");
};
l.ForStatement = (e, t, r) => {
  e.init && r(e.init, t, "ForInit");
  e.test && r(e.test, t, "Expression");
  e.update && r(e.update, t, "Expression");
  r(e.body, t, "Statement");
};
l.ForInStatement = l.ForOfStatement = (e, t, r) => {
  r(e.left, t, "ForInit");
  r(e.right, t, "Expression");
  r(e.body, t, "Statement");
};
l.ForInit = (e, t, r) => {
  "VariableDeclaration" === e.type ? r(e, t) : r(e, t, "Expression");
};
l.DebuggerStatement = p;
l.FunctionDeclaration = (e, t, r) => r(e, t, "Function");
l.VariableDeclaration = (e, t, r) => {
  for (let n of e.declarations) r(n, t);
};
l.VariableDeclarator = (e, t, r) => {
  r(e.id, t, "Pattern");
  e.init && r(e.init, t, "Expression");
};
l.Function = (e, t, r) => {
  for (let n of (e.id && r(e.id, t, "Pattern"), e.params)) r(n, t, "Pattern");
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
l.Pattern = (e, t, r) => {
  "Identifier" === e.type ? r(e, t, "VariablePattern") : "MemberExpression" === e.type ? r(e, t, "MemberPattern") : r(e, t);
};
l.VariablePattern = p;
l.MemberPattern = a;
l.RestElement = (e, t, r) => r(e.argument, t, "Pattern");
l.ArrayPattern = (e, t, r) => {
  for (let n of e.elements) n && r(n, t, "Pattern");
};
l.ObjectPattern = (e, t, r) => {
  for (let n of e.properties) "Property" === n.type ? (n.computed && r(n.key, t, "Expression"), r(n.value, t, "Pattern")) : "RestElement" === n.type && r(n.argument, t, "Pattern");
};
l.Expression = a;
l.ThisExpression = l.Super = l.MetaProperty = p;
l.ArrayExpression = (e, t, r) => {
  for (let n of e.elements) n && r(n, t, "Expression");
};
l.ObjectExpression = (e, t, r) => {
  for (let n of e.properties) r(n, t);
};
l.FunctionExpression = l.ArrowFunctionExpression = l.FunctionDeclaration;
l.SequenceExpression = (e, t, r) => {
  for (let n of e.expressions) r(n, t, "Expression");
};
l.TemplateLiteral = (e, t, r) => {
  for (let n of e.quasis) r(n, t);
  for (let n of e.expressions) r(n, t, "Expression");
};
l.TemplateElement = p;
l.UnaryExpression = l.UpdateExpression = (e, t, r) => {
  r(e.argument, t, "Expression");
};
l.BinaryExpression = l.LogicalExpression = (e, t, r) => {
  r(e.left, t, "Expression");
  r(e.right, t, "Expression");
};
l.AssignmentExpression = l.AssignmentPattern = (e, t, r) => {
  r(e.left, t, "Pattern");
  r(e.right, t, "Expression");
};
l.ConditionalExpression = (e, t, r) => {
  r(e.test, t, "Expression");
  r(e.consequent, t, "Expression");
  r(e.alternate, t, "Expression");
};
l.NewExpression = l.CallExpression = (e, t, r) => {
  if (r(e.callee, t, "Expression"), e.$$arguments) for (let n of e.$$arguments) r(n, t, "Expression");
};
l.MemberExpression = (e, t, r) => {
  r(e.object, t, "Expression");
  e.computed && r(e.property, t, "Expression");
};
l.ExportNamedDeclaration = l.ExportDefaultDeclaration = (e, t, r) => {
  if (e.declaration && r(e.declaration, t, "ExportNamedDeclaration" === e.type || e.declaration.id ? "Statement" : "Expression"), e.source && r(e.source, t, "Expression"), e.attributes) for (let n of e.attributes) r(n, t);
};
l.ExportAllDeclaration = (e, t, r) => {
  for (let n of (e.exported && r(e.exported, t), r(e.source, t, "Expression"), e.attributes)) r(n, t);
};
l.ImportAttribute = (e, t, r) => {
  r(e.value, t, "Expression");
};
l.ImportDeclaration = (e, t, r) => {
  for (let n of e.specifiers) r(n, t);
  for (let n of (r(e.source, t, "Expression"), e.attributes)) r(n, t);
};
l.ImportExpression = (e, t, r) => {
  r(e.source, t, "Expression");
  e.options && r(e.options, t, "Expression");
};
l.ImportSpecifier = l.ImportDefaultSpecifier = l.ImportNamespaceSpecifier = l.Identifier = l.PrivateIdentifier = l.Literal = p;
l.TaggedTemplateExpression = (e, t, r) => {
  r(e.tag, t, "Expression");
  r(e.quasi, t, "Expression");
};
l.ClassDeclaration = l.ClassExpression = (e, t, r) => r(e, t, "Class");
l.Class = (e, t, r) => {
  e.id && r(e.id, t, "Pattern");
  e.superClass && r(e.superClass, t, "Expression");
  r(e.body, t);
};
l.ClassBody = (e, t, r) => {
  for (let n of e.body) r(n, t);
};
l.MethodDefinition = l.PropertyDefinition = l.Property = (e, t, r) => {
  e.computed && r(e.key, t, "Expression");
  e.value && r(e.value, t, "Expression");
};
l.JSXElement = (e, t, r) => {
  for (let n of (r(e.openingElement, t), e.closingElement && r(e.closingElement, t), e.children)) "JSXElement" === n.type ? r(n, t, "Expression") : r(n, t);
};
l.JSXOpeningElement = (e, t, r) => {
  for (let n of ("JSXIdentifier" === e.name.type ? r(e.name, t) : r(e.name, t, "Expression"), e.attributes)) r(n, t);
};
l.JSXClosingElement = (e, t, r) => {
  "JSXIdentifier" === e.name.type ? r(e.name, t) : r(e.name, t, "Expression");
};
l.JSXIdentifier = (e, t, r) => {
  r(e, t, "Identifier");
};
l.JSXMemberExpression = (e, t, r) => {
  "JSXIdentifier" === e.object.type ? r(e.object, t) : r(e.object, t, "Expression");
  r(e.property, t);
};
l.JSXNamespacedName = (e, t, r) => {
  r(e.name, t);
  r(e.namespace, t);
};
l.JSXAttribute = (e, t, r) => {
  "JSXIdentifier" === e.name.type ? r(e.name, t) : r(e.name, t, "Expression");
  e.value && ("JSXExpressionContainer" === e.value.type ? r(e.value, t) : r(e.value, t, "Expression"));
};
l.JSXSpreadAttribute = (e, t, r) => {
  r(e, t, "SpreadElement");
};
l.JSXExpressionContainer = (e, t, r) => {
  "JSXEmptyExpression" === e.expression.type ? r(e.expression, t) : r(e.expression, t, "Expression");
};
l.JSXFragment = (e, t, r) => {
  r(e.openingFragment, t);
  for (let n = 0; n < e.children.length; ++n) r(e.children[n], t);
  r(e.closingFragment, t);
};
l.JSXEmptyExpression = l.JSXSpreadChild = l.JSXText = l.JSXOpeningFragment = l.JSXClosingFragment = l.JSXObject = p;
let m = {
  parser: "typescript",
  semi: !1,
  printWidth: 50
};
class c {
  constructor() {
    this.prettier = _require;
    this.prettierPlugins = Promise.all([require.t.bind(require, 400937, 23), require.t.bind(require, 52675, 23), _require2, require.t.bind(require, 55103, 23)]);
  }
  async formatCode(e, t = {}) {
    let {
      format
    } = await this.prettier;
    let [n, i, s, a] = await this.prettierPlugins;
    let p = {
      parser: t.parser || m.parser,
      semi: t.semi || m.semi,
      printWidth: t.printWidth || m.printWidth
    };
    let c = e;
    "typescript" === p.parser && (c = function (e) {
      let {
        imports,
        jsx
      } = function (e) {
        let t = [];
        let r = e.replace(/^\s*(import\s+.*?\n)$/gm, e => (t.push(e), ""));
        return {
          imports: t,
          jsx: r
        };
      }(e);
      try {
        let e = parseLoose(jsx);
        if (e) {
          var n;
          var i;
          let s = [];
          for (let {
            start,
            end
          } of (n = {
            JSXFragment(e) {
              let t = e.children.filter(e => !("JSXText" === e.type && "" === e.value.replace(/\s+/g, "")));
              1 === t.length && (s.push({
                start: e.openingFragment.start,
                end: e.openingFragment.end
              }), s.push({
                start: e.closingFragment.start,
                end: e.closingFragment.end
              }));
            }
          }, i || (i = l), function e(t, r, s) {
            let o = s || t.type;
            if (!i[o]) throw Error("No visitor found for node type " + o);
            i[o](t, r, e);
            n[o] && n[o](t, r);
          }(e, void 0, void 0), s.sort((e, t) => t.start - e.start))) r = jsx.slice(0, start) + jsx.slice(end);
          return imports.join("\n") + jsx;
        }
      } catch (e) {}
      return e;
    }(c));
    return await format(c, {
      plugins: [i, n, s, a],
      ...p,
      htmlWhitespaceSensitivity: "ignore"
    });
  }
}
export function $$E1(e, t = !1, r) {
  let [o, a] = useState(t ? e : null);
  let p = useIsMounted();
  let l = useCallback(async () => {
    if (t) {
      a(e);
      return;
    }
    if (e) {
      let t = e;
      try {
        let n = new c();
        t = await n.formatCode(e, {
          parser: r?.parser,
          semi: r?.semi,
          printWidth: r?.printWidth
        });
      } catch (e) {
        console.warn(e);
      }
      p() && a(t);
    }
  }, [p, e, r?.parser, r?.semi, r?.printWidth, t]);
  let m = useDebouncedCallback(l, 100, {
    leading: !0
  });
  useEffect(() => {
    m();
  }, [m, p, e, r?.parser, r?.semi, r?.printWidth]);
  return o;
}
export function $$d0(e, t) {
  return new c().formatCode(e ?? "", t);
}
export const P = $$d0;
export const V = $$E1;