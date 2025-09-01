import { declare } from '@babel/helper-plugin-utils'

import * as t from '@babel/types'

export default declare(() => {
  return {
    name: 'transform-split-var',
    visitor: {
      VariableDeclaration(path) {
        const newDeclarations = []
        const len = path.node.declarations.length
        if (len === 1) {
          const [first] = path.node.declarations
          if (t.isSequenceExpression(first.init)) {
            const exp = first.init.expressions
            const expLen = exp.length
            const rest = exp.slice(0, expLen - 1)
            const last = exp[expLen - 1]
            const list = []
            rest.forEach((e) => {
              list.push(t.expressionStatement(e))
            })
            path.insertBefore(list)
            first.init = last
          }
          return
        }
        path.node.declarations.forEach((item) => {
          if (t.isSequenceExpression(item.init)) {
            const ex = item.init.expressions
            const last = ex[ex.length - 1]
            const rest = ex.slice(0, ex.length - 1)
            rest.forEach((e) => {
              newDeclarations.push(
                t.expressionStatement(e),
              )
            })
            newDeclarations.push(
              t.variableDeclaration(path.node.kind, [
                t.variableDeclarator(item.id, last),
              ]),
            )
          }
          else {
            newDeclarations.push(
              t.variableDeclaration(path.node.kind, [
                t.variableDeclarator(item.id, item.init),
              ]),
            )
          }
        })
        path.replaceWithMultiple(newDeclarations)
      },

    },
  }
})
