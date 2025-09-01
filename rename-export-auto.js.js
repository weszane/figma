/* eslint-disable no-console */
/* eslint-disable node/prefer-global/process */
const { spawn } = require('node:child_process')

const fs = require('node:fs')
const path = require('node:path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
// const generate = require('@babel/generator').default
const { transformSync } = require('@babel/core')
const t = require('@babel/types')
const transformImport = require('./transform-import').default

const PROJECT_ROOT = path.resolve('.')
const targetFileArg = process.argv[2]
if (!targetFileArg) {
  console.error('❌ 用法: node rename-export-grep-ast.js src/utils/a.ts')
  process.exit(1)
}

const TARGET_FILE = path.resolve(targetFileArg)

function getRelativePath(file) {
  return path.relative(PROJECT_ROOT, file).replace(/\\/g, '/')
}
function analyzeExports() {
  const content = fs.readFileSync(TARGET_FILE, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module',
    plugins: ['typescript'],
  })

  const renameMap = new Map()

  traverse(ast, {
    ExportNamedDeclaration(p) {
      const decl = p.node.declaration
      if (
        decl
        && t.isVariableDeclaration(decl)
        && decl.kind === 'const'
        && decl.declarations.length === 1
      ) {
        const { id, init } = decl.declarations[0]
        if (t.isIdentifier(id) && t.isIdentifier(init) && id.name !== init.name) {
          renameMap.set(id.name, init.name)
        }
      }
      else if (p.node.specifiers.length) {
        p.node.specifiers.forEach((spec) => {
          if (t.isExportSpecifier(spec)) {
            const localName = spec.local.name
            const exportedName = spec.exported.name
            if (localName !== exportedName) {
              renameMap.set(exportedName, localName)
            }
          }
        })
      }
    },
  })

  return renameMap
}

const formatted = targetFileArg.replace('src/', '').replace(/\.(ts|js)x?$/, '')
console.log(formatted)
// 使用 grep 查找所有导入了指定文件的文件
const grep = spawn('grep', [
  '-Er',
  `import\\s+.*from\\s+[\'\\"](\\.\\./|\\./)?${formatted}[\'\\"]`,
  'src',
])
function updateImportFiles(lines, renameMap, candidateFiles) {
  let updatedCount = 0

  for (const file of candidateFiles) {
    let content
    try {
      content = fs.readFileSync(file, 'utf-8')
      const res = transformSync(content, {
        presets: ['@babel/preset-typescript'],
        sourceType: 'module',
        filename: (file),
        plugins: [
          [transformImport, { lines, renameMap }],
        ],
        compact: false,
      })
      if (res && res.code) {
        fs.writeFileSync(file, res.code, 'utf-8')
        console.log(`🔄 更新导入: ${getRelativePath(file)}`)
        updatedCount++
      }
    }
    catch (e) {
      console.log('读取文件失败:', e)
    }

    // const ast = parser.parse(content, {
    //   sourceType: 'module',
    //   plugins: ['typescript', 'jsx'],
    // })

    // let modified = false

    // console.log(file, '检查中...')
    // traverse(ast, {
    //   ImportDeclaration(p) {
    //     const sourceValue = p.node.source.value
    //     // 快速路径匹配
    //     if (!lines.some(line => line.includes(sourceValue))) {
    //       return
    //     }

    //     p.node.specifiers.forEach((spec) => {
    //       if (t.isImportSpecifier(spec)) {
    //         const importedName = spec.imported.name
    //         for (const [oldName, newName] of renameMap) {
    //           if (importedName === oldName) {
    //             spec.imported = t.identifier(newName)

    //             if (t.isIdentifier(spec.local) && spec.local.name !== spec.imported.name) {
    //               p.scope.rename(spec.local.name, newName)
    //             }
    //             if (spec.local.name === oldName) {
    //               p.scope.rename(oldName, newName)
    //             }
    //             modified = true
    //             fileSet.add(file)
    //           }
    //         }
    //       }
    //     })
    //   },
    // })

    // console.log('modified', modified, file)
    // if (modified) {
    //   const output = generate(ast).code
    //   fs.writeFileSync(file, output, 'utf-8')
    //   console.log(`🔄 更新导入: ${getRelativePath(file)}`)
    //   updatedCount++
    // }
  }

  console.log(`✅ 完成：修改 ${updatedCount} 个引用文件`)
}

const map = analyzeExports()
console.log(map)
grep.stdout.on('data', (data) => {
  const res = data.toString().split('\n').filter(line => line).map((line) => {
    const parts = line.split(':')
    return {
      file: parts[0],
      line: parts.slice(1).join(':'),
    }
  })
  console.log(res)
  const file = res.map(r => r.file)
  const line = res.map(r => r.line)
  updateImportFiles(line, map, file)
})

grep.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

grep.on('close', (code) => {
  console.log(`grep process exited with code ${code}`)
})
