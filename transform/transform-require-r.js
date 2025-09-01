import { declare } from "@babel/helper-plugin-utils";
import * as t from "@babel/types";
import path from "node:path";

const join = (dir, ...p) => path.join(dir, ...p);

export default declare((_, opts) => {
  const list = new Map()
  list.set(486106, 'react/jsx-runtime');
  list.set(7378, 'react');
  list.set(765289, 'react-reconciler')
  list.set(879124, 'react-dom')
  list.set(455773, 'react-dom')
  list.set(536384, 'classnames')
  list.set(82433, '@stylexjs/stylex')
  function getName(name, cache) {
    if (list.has(name)) return list.get(name)
    return cache[name] ? join('..', cache[name]) : name + ''
  }
  return {
    name: "transform-require-r",
    visitor: {
      MemberExpression(path) {
        const node = path.node;
        const isRequire = t.isIdentifier(node.object, { name: "require" });
        if (
          isRequire &&
          path.node.property.name === "bind" &&
          t.isCallExpression(path.parent) &&
          path.parent.arguments.length === 2 &&
          path.parent.arguments[0].name === "require"
        ) {
          const n = path.parent.arguments[1];
          const cache = opts.cache || {};
          let value = getName(n.value, cache)

          const name = path.scope.generateUidIdentifier("require")
          const decl = t.variableDeclaration(
            "const",
            [t.variableDeclarator(name, t.callExpression(t.identifier("require"), [
              t.stringLiteral(value + '' || n.value + ""),
            ]))]
          )
          path.scope.getProgramParent().path.unshiftContainer('body', decl)
          path.parentPath.replaceWith(
            name,
          );
        }
      },
      CallExpression(path) {
        const callee = path.node.callee;

        if (t.isIdentifier(callee, { name: "require" })
          && t.isNumericLiteral(path.node.arguments[0]) && t.isSequenceExpression(path.parentPath) && t.isExpressionStatement(path.parentPath.parentPath)) {
          path.remove()
          return
        }

        if (t.isIdentifier(callee, { name: "require" })
          && t.isNumericLiteral(path.node.arguments[0]) && t.isExpressionStatement(path.parentPath)) {
          path.parentPath.remove()
          return
        }

        if (
          t.isIdentifier(callee, { name: "require" }) &&
          path.node.arguments.length === 1 &&
          t.isNumericLiteral(path.node.arguments[0])
        ) {
          const arg = path.node.arguments[0];
          const cache = opts.cache || {};
          let value = getName(arg.value, cache)
          path.node.arguments[0] = t.stringLiteral(value + '' || arg.value + "");
        }

        if (
          t.isMemberExpression(callee) &&
          t.isIdentifier(callee.object, { name: "require" }) &&
          t.isIdentifier(callee.property, { name: "n" })
        ) {
          path.replaceWith(path.node.arguments[0]);
          return;
        }

        if (
          t.isMemberExpression(callee) &&
          t.isIdentifier(callee.object, { name: "require" }) &&
          t.isIdentifier(callee.property, { name: "r" })
        ) {
          path.remove();
          return;
        }

        if (
          t.isMemberExpression(callee) &&
          t.isIdentifier(callee.object, { name: "require" }) &&
          t.isIdentifier(callee.property, { name: "e" }) &&
          t.isArrayExpression(path.parentPath)
        ) {
          path.remove();
          return;
        }

        if (
          t.isMemberExpression(callee) &&
          t.isIdentifier(callee.object, { name: "require" }) &&
          t.isIdentifier(callee.property, { name: "e" }) &&
          t.isMemberExpression(path.parentPath) &&
          t.isIdentifier(path.parent.property, { name: "then" })
        ) {
          const args = path.parentPath.parent.arguments[0];
          path.parentPath.parentPath.replaceWith(args);
          return;
        }
      },
    },
  };
});
