module.exports = function ({ types: t }) {
  return {
    name: "restore-optional-chaining",
    visitor: {
      ConditionalExpression(path) {
        // 还原 a == null ? void 0 : a.b  => a?.b
        const { test, consequent, alternate } = path.node;
        // a == null ? void 0 : a.b
        if (
          t.isLogicalExpression(test) &&
          ((test.operator === "||" && (
            (t.isBinaryExpression(test.left, { operator: "===" }) && t.isNullLiteral(test.left.right)) ||
            (t.isBinaryExpression(test.left, { operator: "==" }) && t.isNullLiteral(test.left.right))
          )) ||
            (t.isBinaryExpression(test, { operator: "==" }) && t.isNullLiteral(test.right)) ||
            (t.isBinaryExpression(test, { operator: "===" }) && t.isNullLiteral(test.right)))
        ) {
          // 暂不处理复杂逻辑
          return;
        }
        // null === (t = schema[c.property]) || void 0 === t ? void 0 : t.type
        if (
          t.isLogicalExpression(test, { operator: "||" }) &&
          t.isBinaryExpression(test.left, { operator: "===" }) &&
          t.isNullLiteral(test.left.left) &&
          t.isAssignmentExpression(test.left.right) &&
          t.isBinaryExpression(test.right, { operator: "===" }) &&
          t.isUnaryExpression(test.right.left, { operator: "void" }) &&
          t.isNumericLiteral(test.right.left.argument, { value: 0 }) &&
          t.isIdentifier(test.right.right)
        ) {
          // 形如 null === (t = schema[c.property]) || void 0 === t ? void 0 : t.type
          // alternate: t.type
          // 还原为 schema[c.property]?.type
          const assign = test.left.right;
          const obj = assign.right;
          const prop = alternate.property;
          path.replaceWith(
            t.optionalMemberExpression(obj, prop, alternate.computed, true)
          );
          return;
        }
        // a == null ? void 0 : a.b
        if (
          (t.isBinaryExpression(test, { operator: "==" }) || t.isBinaryExpression(test, { operator: "===" })) &&
          t.isNullLiteral(test.right) &&
          t.isUnaryExpression(consequent, { operator: "void" }) &&
          t.isNumericLiteral(consequent.argument, { value: 0 }) &&
          t.isMemberExpression(alternate)
        ) {
          // 还原为 a?.b
          path.replaceWith(
            t.optionalMemberExpression(
              test.left,
              alternate.property,
              alternate.computed,
              true
            )
          );
          return;
        }
        // a != null ? a : b  => a ?? b
        if (
          (t.isBinaryExpression(test, { operator: "!=" }) || t.isBinaryExpression(test, { operator: "!==" })) &&
          t.isNullLiteral(test.right) &&
          t.isIdentifier(consequent) &&
          t.isIdentifier(alternate)
        ) {
          path.replaceWith(
            t.logicalExpression("??", consequent, alternate)
          );
          return;
        }
      }
    }
  };
};
