import { declare } from '@babel/helper-plugin-utils'
import * as t from '@babel/types'

export default declare(() => {
  return {
    name: 'transform-optimize-require',
    visitor: {
      // FunctionDeclaration(path) {
      //   const params = path.node.params;
      //   if (params.length === 0) return;
      //   if (t.isIdentifier(params[0], {name: 'e'})) {
      //     path.scope.rename('e', 'opts');
      //   }

      // },
      VariableDeclaration(path) {
        const { node } = path
        if (node.declarations.length > 1) {
          const newDeclarations = node.declarations.map(decl =>
            t.variableDeclaration(node.kind, [decl])
          );
          path.replaceWithMultiple(newDeclarations);
        }
      },
      VariableDeclarator(path) {
        const { node, scope } = path;
        // Handle ArrowFunctionExpression with require as body
        // const a = () => require() console.log(a()) to
        // const a = require(); console.log(a)
        if (
          t.isArrowFunctionExpression(node.init) &&
          t.isCallExpression(node.init.body) &&
          t.isIdentifier(node.init.body.callee, { name: 'require' })
        ) {
          node.init = node.init.body;
          const binding = scope.getBinding(node.id.name);
          if (binding) {
            binding.referencePaths.forEach(refPath => {
              if (
                t.isCallExpression(refPath.parent) 
              ) {
                refPath.parentPath.replaceWith(refPath.node);
              }
            });
          }
        }

        // Handle SequenceExpression in initializer
        if (t.isSequenceExpression(node.init)) {
          const expressions = node.init.expressions;
          if (expressions.length > 0) {
            let lastExpression = expressions[expressions.length - 1];
            node.init = lastExpression;

            // If last expression is ArrowFunctionExpression with require as body
            if (
              t.isArrowFunctionExpression(lastExpression) &&
              t.isCallExpression(lastExpression.body) &&
              t.isIdentifier(lastExpression.body.callee, { name: 'require' })
            ) {
              node.init = lastExpression.body;
              const binding = scope.getBinding(node.id.name);
              if (binding) {
                binding.referencePaths.forEach(refPath => {
                  if (
                    t.isCallExpression(refPath.parent) &&
                    t.isMemberExpression(refPath.parentPath.parent)
                  ) {
                    refPath.parentPath.replaceWith(refPath.node);
                  }
                });
              }
            }
          }
        }
      },
      SequenceExpression(path) {
        if (t.isStatement(path.parentPath) &&  path.node.expressions.every(item => t.isCallExpression(item) && item.callee.name === 'require')) {
          path.parentPath.remove()
          return
        }
        if (path.node.expressions.length === 2
          && t.isNumericLiteral(path.node.expressions[0])
          && t.isMemberExpression(path.node.expressions[1])
          && t.isCallExpression(path.parentPath)
        ) {
          // (0, require('module').default)() -> _require.default()
          if (t.isIdentifier(path.node.expressions[1].object.callee, { name: 'require' })) {
            const program = path.findParent(p => p.isProgram())
            const body = program.node.body
            const id = path.scope.generateUidIdentifier('require')
            body.unshift(
              t.variableDeclaration('const', [
                t.variableDeclarator(id, path.node.expressions[1].object),
              ]),
            )
            path.replaceWith(t.memberExpression(id, path.node.expressions[1].property));
          } else {
            // (0, a.b)() -> a.b()
            path.replaceWith(path.node.expressions[1]);
          }

        }

        // require.d(), require.d(export, { d: ss })
        if (t.isExpressionStatement(path.parentPath)) {
          if (path.node.expressions.length === 1) {
            path.replaceWith(path.node.expressions[0])
          } else if (path.node.expressions.length > 1) {
            if (t.isCallExpression(path.node.expressions[0]) &&
              t.isIdentifier(path.node.expressions[0].arguments[0]) &&
              path.node.expressions[0].arguments[0].name === 'exports') {
              const rest = path.node.expressions.slice(1)
              path.replaceWithMultiple(rest)

            } else if (path.node.expressions.every(item => {
              return (t.isCallExpression(item) && item.callee.name === 'require') || (t.isArrowFunctionExpression(item) && t.isCallExpression(item.body) && t.isIdentifier(item.body.callee, { name: 'require' }))
            })) {
              const last = path.node.expressions.pop()
              if (
                t.isArrowFunctionExpression(last) &&
                t.isCallExpression(last.body) &&
                t.isIdentifier(last.body.callee, { name: 'require' })) {
                path.replaceWith(last.body);
              } else {
                path.parentPath.remove()
              }
            } else {
              path.replaceWithMultiple(path.node.expressions);
            }
          }
        }

        if (t.isReturnStatement(path.parentPath) || t.isThrowStatement(path.parentPath)) {
          const expressions = path.node.expressions;
          const last = expressions.pop()
          path.parentPath.insertBefore(expressions.map(e => t.expressionStatement(e)))
          path.parentPath.replaceWith(t.returnStatement(last))
        }

      },

    }
  }
})
