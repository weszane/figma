import { declare } from '@babel/helper-plugin-utils'
import * as t from '@babel/types'

const list = new Set()
export default declare((_, opts) => {
  return {
    name: 'transform-to-require',

    visitor: {
      'ArrowFunctionExpression|FunctionExpression'(path) {
        const { node } = path
        const params = node.params
        const parent = path.parent

        if (t.isObjectProperty(parent)
          && t.isArrayExpression(path.parentPath.parentPath.parent)
          && t.isCallExpression(path.parentPath.parentPath.parentPath.parent)
          && t.isProgram(path.parentPath.parentPath.parentPath.parentPath.parentPath.parent)) {
          if (!params.length) return
          const last = params[params.length - 1]
          const binding = path.scope.getBinding(last.name)
          if (binding) {
            binding.referencePaths.forEach(i => {
              if (t.isMemberExpression(i.parent) && t.isIdentifier(i.parent.property, { name: 'r' })) {
                i.parentPath.parentPath.remove()
              }
            })
          }
          const newNames = ['module', 'exports', 'require']
          const name = path.parent.key.value
          const output = opts.output
          const newName=  opts.filename.toString().split('-')[0]

          output[name] = newName + "/" + name
          params.forEach((param, index) => {
            path.scope.rename(param.name, newNames[index])
          })
        }
      },
    },
  }
})
