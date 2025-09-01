import { declare } from "@babel/helper-plugin-utils";
import * as t from "@babel/types";

export default declare((_, opts) => {
  function hasBindingInScope(scope, name) {
    let current = scope;
    while (current) {
      if (current.hasBinding(name)) return true;
      current = current.parent;
    }
    return false;
  }

  return {
    visitor: {
      Program: {
        enter(path, s) {
          const state = s;
          state.requireInfo = new Map();
          let i = 0
          path.traverse({
            VariableDeclarator(innerPath) {
              const { node, scope } = innerPath;
              const { id, init } = node;
              if (
                t.isCallExpression(init) &&
                t.isIdentifier(init.callee, { name: "require" }) &&
                init.arguments.length === 1 &&
                t.isStringLiteral(init.arguments[0]) &&
                t.isIdentifier(id)
              ) {
                const varName = id.name;
                const modulePath = init.arguments[0].value;
                const binding = scope.getBinding(varName);
                if (!binding) return;
                const info = {
                  varName,
                  modulePath,
                  declaratorPath: innerPath,
                  references: binding.referencePaths.slice(),
                  memberProps: new Map(), // propName -> [refPath]
                  nonMemberRefs: [],
                  scope,
                };
                // var a = require('a')
                // -> a.b
                for (const ref of info.references) {
                  const { parentPath } = ref;
                  if (
                    parentPath &&
                    parentPath.isMemberExpression() &&
                    parentPath.node.object === ref.node
                  ) {
                    const prop = parentPath.node.property;
                    if (t.isIdentifier(prop)) {
                      const propName = prop.name;
                      if (!info.memberProps.has(propName)) {
                        info.memberProps.set(propName, []);
                      }
                      info.memberProps.get(propName).push(parentPath);
                    }
                  } else {
                    info.nonMemberRefs.push(ref);
                  }
                }
                state.requireInfo.set(varName, info);
              }
            },
          });
        },
        exit(path, s) {
          const state = s;
          const declarations = [];
          let i = 0;
          path.scope.crawl()
          for (const [varName, info] of state.requireInfo.entries()) {
            const { modulePath, memberProps, nonMemberRefs, declaratorPath } =info;
            const importSpecifiers = [];
            const propAliasMap = new Map();
            const defaultImportNeeded = nonMemberRefs.length > 0;
            for (let [propName, refPaths] of memberProps.entries()) {
              let alias = propName;
              if (
                path.getData(propName) ||
                refPaths.some((refPath) =>
                  hasBindingInScope(refPath.scope, propName),
                )
              ) {
                const prefix = opts.prefix || "";
                alias = path.scope.generateUidIdentifier(`${prefix}${propName}${i++}`).name;
              }
              propAliasMap.set(propName, alias);
              importSpecifiers.push(
                t.importSpecifier(
                  t.identifier(alias === propName ? propName : alias),
                  t.identifier(propName),
                ),
              );
              path.setData(propName, true);
            }
            let importDecl;
            if (defaultImportNeeded) {
              importDecl = t.importDeclaration(
                [
                  t.importDefaultSpecifier(t.identifier(varName)),
                  ...importSpecifiers,
                ],
                t.stringLiteral(modulePath),
              );
            } else {
              if (importSpecifiers.length > 0) {
                importDecl = t.importDeclaration(
                  importSpecifiers,
                  t.stringLiteral(modulePath),
                );
              } else {
                importDecl = t.importDeclaration(
                  [t.importDefaultSpecifier(t.identifier(varName))],
                  t.stringLiteral(modulePath),
                );
              }
            }
            declarations.push(importDecl);
            for (const [propName, refPaths] of memberProps.entries()) {
              const alias = propAliasMap.get(propName);
              for (const refPath of refPaths) {
                refPath.replaceWith(
                  t.identifier(alias !== propName ? alias : propName),
                );
              }
            }
            if (
              declaratorPath.parentPath &&
              declaratorPath.parentPath.isVariableDeclaration()
            ) {
              const varDecl = declaratorPath.parentPath;
              varDecl.node.declarations = varDecl.node.declarations.filter(
                (d) => d !== declaratorPath.node,
              );
              if (varDecl.node.declarations.length === 0) {
                varDecl.remove();
              }
            }
          }
          path.node.body.unshift(...declarations);
        },
      },
    },
  };
});
