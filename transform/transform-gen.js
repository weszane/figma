import generate from '@babel/generator'
import { declare } from '@babel/helper-plugin-utils'
import * as t from '@babel/types'
import fs from 'node:fs'
import { join } from 'node:path'

export default declare((_, opts) => {
  return {
    name: 'transform-gen',
    visitor: {
      'ArrowFunctionExpression|FunctionExpression'(path) {
        const parent = path.parent
        if (t.isObjectProperty(parent)
          && t.isArrayExpression(path.parentPath.parentPath.parent)
          && t.isCallExpression(path.parentPath.parentPath.parentPath.parent)
          && t.isProgram(path.parentPath.parentPath.parentPath.parentPath.parentPath.parent)) {

          const name = path.parent.key.value
          const body = path.node.body.body
          const ast = {
            type: "Program",
            body: [].concat(body),
          };

          const code = generate(ast, {})

          const output = opts.output
          const full = join(output, opts.filename.split('-')[0])

          if (!fs.existsSync(full)) {
            fs.mkdirSync(full, { recursive: true })
          }
          fs.writeFileSync(join(full, `${name}.js`), code.code)
        }
      }
    }
  }
})
