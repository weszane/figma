import { declare } from '@babel/helper-plugin-utils'
import * as t from '@babel/types'
import { check } from '.'
export default declare(() => {
  return {
    name: 'transform-require',
    visitor: {
      ExpressionStatement(path) {
        const { node } = path
        if (t.isCallExpression(node.expression)) {
          const e = node.expression
          if (t.isMemberExpression(e.callee) && t.isIdentifier(e.callee.object) && e.callee.object.name === 'require' && e.arguments.length >= 2 && t.isIdentifier(e.arguments[0]) && t.isObjectExpression(e.arguments[1])) {
            const property = e.arguments[1].properties.map((prop) => {
              if (check(prop.key.name)) {
                prop.key = path.scope.generateUidIdentifier(prop.key.name)
              }
              if (t.isArrowFunctionExpression(prop.value)) {
                return t.assignmentExpression(
                  '=',
                  t.memberExpression(
                    t.memberExpression(
                      t.identifier('module'),
                      t.identifier('exports'),
                    ),
                    t.identifier(prop.key.name),
                  ),
                  prop.value.body,

                )
              }
              return t.assignmentExpression(
                '=',
                t.memberExpression(
                  t.memberExpression(
                    t.identifier('module'),
                    t.identifier('exports'),
                  ),
                  t.identifier(prop.key.name),
                ),
                prop.value,

              )
            })

            path.replaceWithMultiple(property)
          }
        }
      },
      MemberExpression(path) {
        const node = path.node
        if (t.isCallExpression(node.object)
          && t.isIdentifier(node.object.callee)
          && node.object.callee.name === 'require') {
          const program = path.findParent(p => p.isProgram())
          const body = program.node.body
          const id = path.scope.generateUidIdentifier('require')
          body.unshift(
            t.variableDeclaration('const', [
              t.variableDeclarator(id, node.object),
            ]),
          )
          path.node.object = id
        }
      },
      CallExpression(path) {
        const node = path.node
        if (t.isArrowFunctionExpression(node.callee)
          && t.isCallExpression(node.callee.body)
          && t.isIdentifier(node.callee.body.callee)
          && node.callee.body.callee.name === 'require') {
          const item = node.callee.body
          const program = path.findParent(p => p.isProgram())
          const body = program.node.body
          const id = path.scope.generateUidIdentifier('require')
          body.unshift(
            t.variableDeclaration('const', [
              t.variableDeclarator(id, item),
            ]),
          )
          path.replaceWith(id)
        }
        if (path.parentPath.isNewExpression() || path.parentPath.isUnaryExpression()) {
          const newName = path.scope.generateUidIdentifier('require').name
          const program = path.findParent(p => p.isProgram())
          const body = program.node.body
          body.unshift(
            t.variableDeclaration('const', [
              t.variableDeclarator(t.identifier(newName), node),
            ]),
          )
          path.replaceWith(t.identifier(newName))
        }
        if (path.parentPath.isMemberExpression() && t.isIdentifier(path.node.node, {name: 'require'}) && t.isIdentifier(path.parentPath.node.property)) {
          const newName = path.scope.generateUidIdentifier("require").name
          const program = path.findParent(p => p.isProgram())
          const body = program.node.body
          if (t.isArrowFunctionExpression(node.callee)) {
            body.unshift(
              t.variableDeclaration('const', [
                t.variableDeclarator(t.identifier(newName), node.callee.body),
              ]),
            )

          } else {

            body.unshift(
              t.variableDeclaration('const', [
                t.variableDeclarator(t.identifier(newName), node),
              ]),
            )
          }
          path.parentPath.replaceWith(
            t.memberExpression(
              t.identifier(newName),
              path.parentPath.node.property,
            ),
          )
        }

        if (path.parentPath.isCallExpression()
          && t.isIdentifier(node.callee)
          && node.callee.name === 'require'
        ) {
          const program = path.findParent(p => p.isProgram())
          const body = program.node.body
          const id = path.scope.generateUidIdentifier('require')
          body.unshift(
            t.variableDeclaration('const', [
              t.variableDeclarator(id, node),
            ]),
          )
          path.replaceWith(id)
        }
      },
    },
  }
})
