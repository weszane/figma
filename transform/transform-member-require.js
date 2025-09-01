import { declare } from "@babel/helper-plugin-utils";

import * as t from "@babel/types";
export default declare((_, opt) => {
  return {
    name: "transform-member-require",
    visitor: {
      CallExpression(path) {


        // if (
        //   t.isIdentifier(path.node.callee, { name: "require" }) &&
        //   t.isMemberExpression(path.parentPath)
        // ) {
        //   const program = path.scope.getProgramParent().path;
        //   const newName = path.scope.generateUidIdentifier("require");
        //   const decl = t.variableDeclaration("const", [
        //     t.variableDeclarator(newName, path.node),
        //   ]);
        //   program.unshiftContainer("body", decl);
        //   path.parentPath.replaceWith(
        //     t.memberExpression(newName, path.parent.property, path.parent.computed),
        //   );
        //   return
        // }

        

      },
    },
  };
});
