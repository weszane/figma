import { declare } from "@babel/helper-plugin-utils";
import * as t from "@babel/types";
import { check } from ".";

export default declare((_, opts) => {
  const state = new Set();
  return {
    name: "transform-require-d",

    visitor: {
      CallExpression(path) {
        const callee = path.node.callee;
        // Handle require.d(exports, { ... })
        const isRequireD =
          t.isMemberExpression(callee) &&
          t.isIdentifier(callee.object, { name: "require" }) &&
          t.isIdentifier(callee.property, { name: "d" }) &&
          t.isIdentifier(path.node.arguments[0], { name: "exports" });
        if (isRequireD) {
          const args = path.node.arguments;
          if (args.length < 2 || !t.isObjectExpression(args[1])) return;

          const objectExpression = args[1];
          const properties = objectExpression.properties || [];
          const result = [];
          const specifiers = new Map()
          properties.forEach((prop) => {
            if (!t.isObjectProperty(prop) || !t.isIdentifier(prop.key)) return;

            const isArrow = t.isArrowFunctionExpression(prop.value);
            const body = isArrow ? prop.value.body : prop.value;
            // if (t.isMemberExpression(body)) {
            //   const object = body.object;
            //   const property = body.property;
            //   if (t.isIdentifier(object) && t.isIdentifier(property) && property.name === prop.key.name) {
            //     // Do something with the member expression
            //     const binding = path.scope.getBinding(object.name);
            //     if (binding && binding.path.isVariableDeclarator() && t.isCallExpression(binding.path.node.init) && binding.path.node.init.callee.name === "require") {
            //       const val = binding.path.node.init.arguments[0].value;
            //       if (specifiers.has(val)) {
            //         specifiers.get(val).push(t.exportSpecifier(prop.key, prop.key));
            //       } else {
            //         specifiers.set(val, [t.exportSpecifier(prop.key, prop.key)]);
            //       }
            //       if (state.has(prop.key.name)) return;
            //       state.add(prop.key.name);
            //       return;
            //     }
            //   }
            // }
    
            const isReserved =
              path.scope.hasBinding(prop.key.name) || check(prop.key.name);
            const newName = isReserved
              ? path.scope.generateUidIdentifier("$$" + prop.key.name)
              : prop.key;
            const decl = t.exportNamedDeclaration(
              t.variableDeclaration("const", [
                t.variableDeclarator(newName, body),
              ]),
            );
            if (state.has(newName.name)) return;
            state.add(newName.name);
            result.push(decl);
          });
          if (specifiers.size > 0) {
            const importDecl = [];
            for (let [modulePath, list] of specifiers.entries()) {
              const n = opts.cache || {}
              const path = n[modulePath] || ''
              importDecl.push(
                t.exportNamedDeclaration(null, list, t.stringLiteral(modulePath + ''))
              );
            }
            result.unshift(...importDecl);
          }
          // Add import declarations at the top of the file
          const program = path.findParent(t.isProgram);
          program.node.body.push(...result);

          path.remove();
          path.skip();
        }
      },
      Identifier(path) {
        const name = path.node.name;
        if (check(name) && t.isMemberExpression(path.parentPath)) {
          path.replaceWith(t.identifier(`$$${name}`));
        }
      },
    },
  };
});
