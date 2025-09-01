import { declare } from "@babel/helper-plugin-utils";
import * as t from "@babel/types";

export default declare(() => {

  function ensureBlock(node) {
    return t.isBlockStatement(node) ? node : t.blockStatement([node]);
  }

  function toStatement(node) {
    return t.isStatement(node) ? node : t.expressionStatement(node);
  }

  function convertToIf(node) {
    const test = node.test;

    const consequent = t.isConditionalExpression(node.consequent)
      ? convertToIf(node.consequent, t)
      : toStatement(node.consequent, t);

    const alternate = t.isConditionalExpression(node.alternate)
      ? convertToIf(node.alternate, t)
      : toStatement(node.alternate, t);

    return t.ifStatement(
      test,
      ensureBlock(consequent, t),
      ensureBlock(alternate, t)
    );
  }

  function convertLogicalReturn(expr, t) {
    if (t.isLogicalExpression(expr)) {
      const { operator, left, right } = expr

      const leftReturn = t.returnStatement(left)
      const rightStmt = convertLogicalReturn(right, t)
      if (operator == '||') {
        return t.ifStatement(
          left,
          t.blockStatement([leftReturn]),
          ensureBlock(rightStmt, t)
        )
      }
    } else if (t.isConditionalExpression(expr)) {
      return convertReturnConditionalToIf(expr, t)
    } else {
      return t.returnStatement(expr)
    }
  }

  function convertReturnConditionalToIf(expr, t) {
    const test = expr.test;
    const toReturn = (v) => t.returnStatement(v);

    const consequent = t.isConditionalExpression(expr.consequent)
      ? convertReturnConditionalToIf(expr.consequent, t)
      : toReturn(expr.consequent);

    const alternate = t.isConditionalExpression(expr.alternate)
      ? convertReturnConditionalToIf(expr.alternate, t)
      : toReturn(expr.alternate);
      
    return t.ifStatement(test, ensureBlock(consequent, t), ensureBlock(alternate, t));
  }

  return {
    name: "babel-plugin-if-statement",
    visitor: {
      ExpressionStatement(path) {
        const expr = path.node.expression;
        if (t.isConditionalExpression(expr)) {
          const ifStmt = convertToIf(expr, t);
          path.replaceWith(ifStmt);
        }
      },
    }
  }
})
