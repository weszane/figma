import { declare } from "@babel/helper-plugin-utils";
import * as t from "@babel/types"

export default declare(() => {
  return {
    name: "transform-class-arrow-require",
    visitor: {
      CallExpression(path) {
        if (t.isIdentifier(path.node.callee, { name: 'require' }) &&
          t.isArrowFunctionExpression(path.parentPath)
          && t.isCallExpression(path.parentPath.parentPath)
          && path.parentPath.parent.arguments.length === 0
          && t.isMemberExpression(path.parentPath.parentPath.parentPath)) {
          const newName = path.scope.generateUidIdentifier("require")
          const program = path.findParent(t.isProgram)
          program.node.body.unshift(
            t.variableDeclaration(
              "const",
              [t.variableDeclarator(newName, path.node)]
            )
          )
          const p = path.parentPath.parentPath.parentPath
          p.replaceWith(
            t.memberExpression(
              newName,
              p.node.property
            )
          )
          return
        }

        if (t.isIdentifier(path.node.callee, { name: "require" }) &&
          !(t.isVariableDeclarator(path.parentPath) && t.isIdentifier(path.parent.id))) {
          const program = path.scope.getProgramParent().path;
          const newName = path.scope.generateUidIdentifier("require");
          const decl = t.variableDeclaration("const", [
            t.variableDeclarator(newName, path.node),
          ]);
          program.unshiftContainer("body", decl);
          path.replaceWith(
            newName,
          );
          return
        }

        if (t.isIdentifier(path.node.callee, { name: 'require' }) &&
          t.isArrowFunctionExpression(path.parentPath) &&
          t.isCallExpression(path.parentPath.parentPath)
          && path.parentPath.parent.arguments.length === 0) {
          const newName = path.scope.generateUidIdentifier("require")
          const program = path.findParent(t.isProgram)
          program.node.body.unshift(
            t.variableDeclaration(
              "const",
              [t.variableDeclarator(newName, path.node)]
            )
          )
          const p = path.parentPath.parentPath.parentPath
          p.replaceWith(
            newName
          )
        }


      }
    }
  }
})
