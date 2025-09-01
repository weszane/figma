


import { declare } from "@babel/helper-plugin-utils";
import * as t from "@babel/types";

export default declare(() => {
  function isThisAssignment(expr) {
    return (
      t.isAssignmentExpression(expr, { operator: '=' }) &&
      t.isMemberExpression(expr.left) &&
      t.isThisExpression(expr.left.object) &&
      t.isIdentifier(expr.left.property)
    );
  }

  function isFunctionExpressionLike(expr) {
    return t.isArrowFunctionExpression(expr) || t.isFunctionExpression(expr);
  }
  return {
    name: 'transform-this-sequence-in-if',
    visitor: {
      SequenceExpression(path) {
        const { node } = path;
        const {expressions} = node
        const statements = expressions.slice(0, -1)
        if (path.parentPath.isExpressionStatement()) {
          path.parentPath.insertBefore(statements.map(t.expressionStatement))
          path.replaceWith(expressions.pop())
        } else if (path.parentPath.isReturnStatement()) {
          path.parentPath.insertBefore(...statements.map(t.expressionStatement))
          path.parentPath.replaceWith(t.returnStatement(statements.pop()))
        }
      },
      IfStatement(path) {
        const { test } = path.node;
        // 只处理 if 的 test 是 SequenceExpression
        if (!t.isSequenceExpression(test)) return;
        const expressions = test.expressions;
        const classPropDecls = [];  // 收集要提升为 class field 的
        const regularAssignments = []; // 收集普通 this.x = 值（非函数），留在 constructor
        const remainingTests = [];     // 收集剩下的表达式作为 if 条件

        for (const expr of expressions) {
          if (isThisAssignment(expr)) {
            const propName = expr.left.property.name;
            const value = expr.right;

            if (isFunctionExpressionLike(value)) {
              classPropDecls.push(
                t.classProperty(t.identifier(propName), value)
              );
            } else {
              regularAssignments.push(t.expressionStatement(expr));
            }
          } else {
            // 其他表达式（如 h）保留在 if 条件中
            remainingTests.push(expr);
          }
        }
        // 查找当前是否在 constructor 中
        const funcParent = path.getFunctionParent();
        if (!funcParent || funcParent.node.kind !== 'constructor') return;

        // 查找 class body
        const classBodyPath = funcParent.parentPath.parentPath; // ClassBody <- ClassMethod <- Function
        if (!classBodyPath.isClassDeclaration()) return
        // === 第一步：将 class field 插入到 class body 中（去重）===
        const existingNames = new Set(
          classBodyPath.node.body.body
            .filter(p => t.isClassProperty(p) && t.isIdentifier(p.key))
            .map(p => p.key.name)
        );

        const filteredProps = classPropDecls.filter(p => !existingNames.has(p.key.name));
        classBodyPath.node.body.body.unshift(...filteredProps);

        // === 第二步：将普通 this 赋值插入到 constructor 开头 ===
        if (regularAssignments.length > 0) {
          const bodyPath = funcParent.get('body');
          if (t.isBlockStatement(bodyPath.node)) {
            bodyPath.node.body.unshift(...regularAssignments);
          }
        }

        // === 第三步：重构 if 条件 ===
        let newTest;
        if (remainingTests.length === 0) {
          newTest = t.booleanLiteral(true);
        } else if (remainingTests.length === 1) {
          newTest = remainingTests[0];
        } else {
          newTest = t.sequenceExpression(remainingTests);
        }
        path.node.test = newTest
        // path.replaceWith(t.ifStatement(newTest, t.blockStatement([])));
      }
    }
  };
})
