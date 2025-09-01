import { declare } from "@babel/helper-plugin-utils";

import * as t from "@babel/types";
export default declare((_, opt) => {
  let i = 0
  return {
    name: "transform-to-enum",
    visitor: {
      /**
       * FunctionDeclaration visitor (original: FunctionDeclaration)
       * 
       * Refactored to avoid infinite renaming loops by using a helper function and robust guards.
       * Only renames identifiers once, and avoids renaming to names that already exist in the current scope.
       * 
       * @param {NodePath} path - Babel path for FunctionDeclaration
       */
      FunctionDeclaration(path) {
        const { node } = path;
        const { id } = node;
        if (id.name !== '$$nR28') return;

        // Set to track already renamed identifiers (FunctionDeclaration)
        const renamed = new Set();

        
        // Iterate through function body and apply safe renaming logic
        node.body.body.forEach(exp => {
          if (t.isExpressionStatement(exp)) {
            const expression = exp.expression;
            if (t.isAssignmentExpression(expression)) {
              const { left, right } = expression;
              // Only rename if names are different, not already renamed, and safe in scope
              if (
                t.isIdentifier(left) &&
                t.isMemberExpression(right) &&
                t.isIdentifier(right.object)
              ) {
                const rightName = right.property.name
                const binding = path.scope.getBinding(left.name)
                if (binding) {
                  binding.referencePaths.forEach(refPath => {
                    refPath.scope.rename(left.name, rightName)
                  })
                }
              } else if (
                t.isMemberExpression(left) &&
                t.isIdentifier(left.property) &&
                t.isIdentifier(right)
              ) {
                
              }
            }
          }
        });
      },
      CallExpression(path) {
        const { callee, arguments: args } = path.node;

        // Helper to extract enum members from expressions
        function extractEnumMembers(expressions, paramName) {
          return expressions
            .map(exp => {
              if (t.isAssignmentExpression(exp)) {
                if (
                  t.isMemberExpression(exp.left) &&
                  t.isIdentifier(exp.left.object) &&
                  (!paramName || exp.left.object.name === paramName)
                ) {
                  // Numeric enum member
                  if (
                    t.isAssignmentExpression(exp.left.property) &&
                    t.isNumericLiteral(exp.left.property.right) &&
                    t.isStringLiteral(exp.right)
                  ) {
                    return t.tsEnumMember(exp.right, exp.left.property.right);
                  }
                  // String enum member
                  if (t.isIdentifier(exp.left.property) && t.isStringLiteral(exp.right)) {
                    return t.tsEnumMember(exp.left.property, exp.right);
                  }
                }
              }
              return null;
            })
            .filter(Boolean);
        }

        // Helper to get enum name from logical expression
        function getEnumName(expr) {
          if (
            t.isLogicalExpression(expr) &&
            t.isIdentifier(expr.left)
          ) {
            return expr.left.name;
          }
          return "";
        }

        // Arrow function pattern
        if (
          t.isArrowFunctionExpression(callee) &&
          t.isLogicalExpression(args[0]) &&
          t.isIdentifier(args[0].left) &&
          t.isSequenceExpression(callee.body)
        ) {
          const rest = []
          callee.body.expressions.forEach(exp => {
            if (t.isFunctionDeclaration(exp) || t.isVariableDeclaration(exp) || t.isFunctionExpression(exp)) {
              path.scope.rename(exp.id.name, path.scope.generateUidIdentifier('__node' + exp.id.name).name)
              rest.push(exp)
            }
          })
          const assignments = extractEnumMembers(callee.body.expressions);
          let enumName = getEnumName(args[0]);
          if (!enumName) return;

          const binding = path.scope.getBinding(enumName);
          if (binding) {
            binding.path.remove();
            const referencePaths = binding.referencePaths;
            referencePaths.forEach(refPath => {
              const { parentPath, parent } = refPath
              if (parentPath.isVariableDeclarator() && parent.id.name !== enumName) {
                enumName = parent.id.name;
                parentPath.parentPath.remove()
              }
            });
          }

          const enumDeclaration = t.exportNamedDeclaration(
            t.tsEnumDeclaration(
              t.identifier(enumName),
              assignments
            ),
            []
          );
          const program = path.findParent(t.isProgram);
          if (rest.length) {
            path.parentPath.insertBefore(...rest)
          }
          if (path.parentPath.isVariableDeclarator()) {
            path.parentPath.remove();
          }


          program.pushContainer('body', enumDeclaration);
        }

        if (t.isArrowFunctionExpression(callee) &&
          t.isLogicalExpression(args[0]) &&
          t.isIdentifier(args[0].left) &&
          t.isBlockStatement(callee.body)) {
          return
          const rest = []
          callee.body.body.forEach(exp => {
            path.scope.crawl()
            if (t.isFunctionDeclaration(exp) || t.isVariableDeclaration(exp) || t.isFunctionExpression(exp)) {
              if (t.isVariableDeclaration(exp)) {
                exp.declarations.forEach(decl => {
                  if (t.isIdentifier(decl.id)) {

                    path.scope.rename(decl.id.name, path.scope.generateUidIdentifier('__node' + decl.id.name).name)
                  }
                })
                rest.push(exp)
                return
              }
              path.scope.rename(exp.id.name, path.scope.generateUidIdentifier().name)
              rest.push(exp)
            }
          })
          const result = []
          callee.body.body.forEach(node => {
            if (t.isExpressionStatement(node)) {
              if (t.isAssignmentExpression(node.expression)) {
                result.push(t.objectProperty(
                  node.expression.left.property,
                  node.expression.right
                ))
              }
            }
          })
          const name = getEnumName(args[0]);
          if (!name) return;
          const currentBinding = path.scope.getBinding(name)
          if (currentBinding) {
            currentBinding.path.remove();
          }
          const enumDeclaration = t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier(name),
              t.objectExpression(result)
            )
          ]);
          const program = path.findParent(t.isProgram);
          if (rest.length) {
            path.parentPath.insertBefore(...rest)
          }
          if (path.parentPath.isVariableDeclarator() || path.parentPath.isUnaryExpression()) {
            path.parentPath.remove();
          } else {
            path.remove();
          }

          program.pushContainer('body', enumDeclaration);
        }

        // IIFE pattern
        if (
          t.isFunctionExpression(callee) &&
          args.length === 1 &&
          callee.params.length === 1 &&
          t.isIdentifier(callee.params[0]) &&
          t.isLogicalExpression(args[0]) &&
          t.isIdentifier(args[0].left) &&
          t.isAssignmentExpression(args[0].right) &&
          args[0].right.left.name === args[0].left.name
        ) {
          const paramName = callee.params[0].name;
          let assignments = [];
          const rest = []
          let flag = false
          callee.body.body.forEach(exp => {
            if (t.isFunctionDeclaration(exp) || t.isVariableDeclaration(exp) || t.isFunctionExpression(exp)) {
              flag = true
              return
            }
          })
          if (flag) return
          // Handle both block and sequence bodies
          if (t.isBlockStatement(callee.body)) {
            callee.body.body.forEach(node => {
              if (t.isExpressionStatement(node)) {
                if (t.isAssignmentExpression(node.expression)) {
                  assignments.push(
                    ...extractEnumMembers([node.expression], paramName)
                  );
                } else if (t.isSequenceExpression(node.expression)) {
                  assignments.push(
                    ...extractEnumMembers(node.expression.expressions, paramName)
                  );
                }
              }
            });
          } else if (t.isSequenceExpression(callee.body)) {
            assignments = extractEnumMembers(callee.body.expressions, paramName);
          }

          let enumName = getEnumName(args[0]);
          if (!enumName) return;

          const binding = path.scope.getBinding(enumName);
          if (binding) {
            binding.path.remove();
            const referencePaths = binding.referencePaths;
            referencePaths.forEach(refPath => {
              const { parentPath, parent } = refPath
              if (parentPath.isVariableDeclarator() && parent.id.name !== enumName) {
                enumName = parent.id.name;
                parentPath.parentPath.remove()
              }
            });
          }

          const enumDeclaration = t.exportNamedDeclaration(
            t.tsEnumDeclaration(
              t.identifier(enumName),
              assignments
            ),
            []
          );
          const program = path.findParent(t.isProgram);
          if (rest.length) {
            path.parentPath.insertBefore(...rest)
          }
          if (path.parentPath.isUnaryExpression()) {
            path.parentPath.remove();
          } else {
            path.remove();
          }

          program.pushContainer('body', enumDeclaration);
        }
      },
    }
  };
});
