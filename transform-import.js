import { declare } from '@babel/helper-plugin-utils'
import * as t from '@babel/types'

export default declare((_, opts) => {
  return {
    visitor: {
      ImportDeclaration(p) {
        const sourceValue = p.node.source.value
        // 快速路径匹配
        if (!opts.lines.some(line => line.includes(sourceValue))) {
          return
        }

        p.node.specifiers.forEach((spec) => {
          if (t.isImportSpecifier(spec)) {
            const importedName = spec.imported.name
            for (const [oldName, newName] of opts.renameMap) {
              if (importedName === oldName) {
                spec.imported = t.identifier(newName)

                if (t.isIdentifier(spec.local) && spec.local.name !== spec.imported.name) {
                  p.scope.rename(spec.local.name, newName)
                }
                if (spec.local.name === oldName) {
                  p.scope.rename(oldName, newName)
                }
              }
            }
          }
        })
      },
    },
  }
})
