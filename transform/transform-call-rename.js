import { declare } from "@babel/helper-plugin-utils";
import * as t from "@babel/types"

export default declare(() => {
  const isRequire = (node) => {
    return t.isCallExpression(node) &&
      t.isMemberExpression(node.callee) &&
      t.isIdentifier(node.callee.object, { name: "require" }) &&
      t.isIdentifier(node.callee.property, { name: "d" }) &&
      t.isIdentifier(node.arguments[0], { name: "exports" });
  }
  return {
    visitor: {
      CallExpression: {
        enter(path) {
          const { node } = path;
          if (!isRequire(node)) return
          const args = node.arguments
          if (args.length < 2 || !t.isObjectExpression(args[1])) return;
          const objectExpression = args[1];
          const properties = objectExpression.properties || [];
          properties.forEach((prop, index) => {
            if (!t.isObjectProperty(prop) || !t.isIdentifier(prop.key)) return;

            const isArrow = t.isArrowFunctionExpression(prop.value);
            const body = isArrow ? prop.value.body : prop.value;
            if (path.scope.hasBinding(prop.key.name)) {
              path.scope.rename(prop.key.name, '$$' + prop.key.name)
            }
            if (t.isIdentifier(body)) {
              const binding = path.scope.getBinding(body.name);
              if (binding) {
                const newName = '$$' + body.name + index
                path.scope.rename(body.name, newName)
              }
            }
          })
        },
        exit(path) {

          const { node } = path;
          if (!isRequire(node)) return
          const args = node.arguments
          if (args.length < 2 || !t.isObjectExpression(args[1])) return;
          const objectExpression = args[1];
          const properties = objectExpression.properties || [];
          properties.forEach((prop) => {
            if (!t.isObjectProperty(prop) || !t.isIdentifier(prop.key)) return;

            const isArrow = t.isArrowFunctionExpression(prop.value);
            const body = isArrow ? prop.value.body : prop.value;
            if (t.isIdentifier(body)) {
              const binding = path.scope.getBinding(body.name);
              if (binding) {
                if (t.isVariableDeclarator(binding.path.node) && !t.isIdentifier(binding.path.node.id)) return
                if (t.isVariableDeclarator(binding.path.node) && t.isIdentifier(binding.path.node.id)) {
                  if (binding.path.parentPath.removed) return
                  binding.path.parentPath.replaceWith(
                    t.exportNamedDeclaration(
                      binding.path.parent
                    ))
                } else {
                  if (binding.path.removed) return
                  binding.path.replaceWith(
                    t.exportNamedDeclaration(
                      binding.path.node
                    ))
                }
              }
            }
          });

        }
      }
    }
  }
})
