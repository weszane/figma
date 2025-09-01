import { declare } from "@babel/helper-plugin-utils";
import * as t from "@babel/types";
import { analyzeSophisticatedPatternV4 } from "./sophisticated-analyzer-v4";

export default declare((_, opts) => {
  function isNullEquality(node) {
    return (
      (t.isBinaryExpression(node, { operator: "==" }) ||
        t.isBinaryExpression(node, { operator: "===" })) &&
      t.isNullLiteral(node.left)
    );
  }

  function extractLogicalChain(node, chain = []) {
    if (t.isLogicalExpression(node, { operator: "||" })) {
      extractLogicalChain(node.left, chain);
      chain.push(node.right);
    } else {
      chain.push(node);
    }
    return chain;
  }

  function buildOptionalExpression(
    currentExpr,
    node,
    isCall = false,
    args = [],
  ) {
    if (isCall && t.isCallExpression(node)) {
      const callee = t.isMemberExpression(node.callee)
        ? t.optionalMemberExpression(
            currentExpr || node.callee.object,
            node.callee.property,
            node.callee.computed || false,
            true,
          )
        : currentExpr || node.callee;

      return t.optionalCallExpression(
        callee,
        args,
        currentExpr.name === node.callee.name,
      );
    }
    if (t.isMemberExpression(node)) {
      return t.optionalMemberExpression(
        currentExpr || node.object,
        node.property,
        node.computed || false,
        currentExpr ? true : false,
      );
    }
    if (t.isIdentifier(node)) {
      return currentExpr
        ? t.optionalMemberExpression(
            currentExpr,
            t.identifier(node.name),
            false,
            true,
          )
        : node;
    }
    console.warn(
      `Unexpected node type in buildOptionalExpression: ${node.type}`,
    );
    return currentExpr || node;
  }

  function resolveNodeArguments(node, path) {
    if (!node.arguments || node.arguments.length === 0) return [];
    return node.arguments.map((arg) => {
      if (t.isIdentifier(arg)) {
        const binding = path.scope.getBinding(arg.name);
        if (binding && binding.constantViolations.length > 0) {
          const lastViolation =
            binding.constantViolations[binding.constantViolations.length - 1];
          if (t.isAssignmentExpression(lastViolation.node)) {
            return lastViolation.node.right;
          }
        }
      }
      return arg;
    });
  }

  /**
   * 构建 Optional Chaining 表达式：
   * 从 first nullEquality 开始，按顺序对后续 MemberExpression 和 CallExpression 依次应用 ?. 和 ?().
   */
  function buildOptionalChain(chainNodes, path) {
    const startIndex = chainNodes.findIndex(isNullEquality);
    if (startIndex < 0) return null;

    let optionalExpr;
    const startNode = chainNodes[startIndex];
    if (t.isAssignmentExpression(startNode.right)) {
      optionalExpr = startNode.right.right;
    } else {
      optionalExpr = startNode.right;
    }

    for (let i = startIndex + 1; i < chainNodes.length; i++) {
      const chainNode = chainNodes[i];

      if (t.isCallExpression(chainNode)) {
        const args = resolveNodeArguments(chainNode, path);
        if (t.isMemberExpression(chainNode.callee)) {
          optionalExpr = buildOptionalExpression(
            optionalExpr,
            chainNode,
            true,
            args,
          );
        } else if (t.isIdentifier(chainNode.callee)) {
          optionalExpr = buildOptionalExpression(
            optionalExpr,
            chainNode,
            true,
            args || [],
          );
        } else {
          console.warn(
            `Skipping unexpected callee type in call expression: ${chainNode.callee.type}`,
          );
          continue;
        }
      } else if (t.isMemberExpression(chainNode)) {
        optionalExpr = buildOptionalExpression(optionalExpr, chainNode);
      } else if (
        t.isBinaryExpression(chainNode, { operator: "==" }) &&
        t.isIdentifier(chainNode.right)
      ) {
        // Handle simple case: null == o
        optionalExpr = buildOptionalExpression(
          optionalExpr,
          t.identifier(chainNode.right.name),
        );
      } else {
        // Handle complex case: null checks in logical chain
        const { left, right } = chainNode;
        if (t.isCallExpression(chainNode)) {
          const args = resolveNodeArguments(chainNode, path);
          if (t.isMemberExpression(chainNode.callee)) {
            if (
              t.isNodesEquivalent(
                chainNode.callee.object,
                optionalExpr.object,
              ) &&
              t.isNodesEquivalent(
                chainNode.callee.property,
                optionalExpr.property,
              )
            ) {
              // 如果是同一个对象的调用，直接使用之前的 optionalExpr
              optionalExpr = t.optionalCallExpression(
                optionalExpr,
                chainNode.arguments,
                true,
              );
            } else {
              optionalExpr = buildOptionalExpression(
                optionalExpr,
                chainNode,
                true,
                args,
              );
            }
          } else if (t.isIdentifier(chainNode.callee)) {
            optionalExpr = buildOptionalExpression(
              optionalExpr,
              chainNode,
              true,
              args || [],
            );
          } else {
            console.warn(
              `Skipping unexpected callee type in call expression: ${chainNode.callee.type}`,
            );
            continue;
          }
        } else if (t.isUnaryExpression(chainNode)) {
          continue;
        } else if (t.isNullLiteral(left)) {
          if (t.isAssignmentExpression(right)) {
            optionalExpr = buildOptionalExpression(
              optionalExpr,
              right.right,
              t.isCallExpression(right.right),
              right.right.arguments || [],
            );
          } else if (t.isIdentifier(right)) {
            optionalExpr = buildOptionalExpression(optionalExpr, right);
          } else if (t.isMemberExpression(right)) {
            optionalExpr = buildOptionalExpression(optionalExpr, right);
          } else {
            //console.warn(`Skipping unexpected right node type in logical chain: ${right.type}`);
            continue;
          }
        }
      }
    }

    return optionalExpr;
  }

  /**
   * 处理 ConditionalExpression，包括逻辑 OR 和单一测试情形。
   */
  function handleConditionalExpression(path) {
    const { node } = path;

    // 匹配 (null==x || void 0===temp) ? void 0 : alternate
    if (
      t.isLogicalExpression(node.test, { operator: "||" }) &&
      t.isUnaryExpression(node.consequent, { operator: "void" })
    ) {
      opts.list.add(path.getSource());
      const testParts = extractLogicalChain(node.test);
      const altParts = t.isLogicalExpression(node.alternate, { operator: "||" })
        ? extractLogicalChain(node.alternate)
        : [node.alternate];
      const chainNodes = [...testParts, ...altParts];
      const optionalExpr = buildOptionalChain(chainNodes, path);
      if (optionalExpr) path.replaceWith(optionalExpr);

      // 匹配 null==x ? void 0 : alternate
    } else if (
      isNullEquality(node.test) &&
      t.isUnaryExpression(node.consequent, { operator: "void" }) &&
      t.isNumericLiteral(node.consequent.argument, { value: 0 })
    ) {
      opts.list.add(path.getSource());
      const altParts = t.isLogicalExpression(node.alternate, { operator: "||" })
        ? extractLogicalChain(node.alternate)
        : [node.alternate];
      const chainNodes = [node.test, ...altParts];

      const optionalExpr = buildOptionalChain(chainNodes, path);
      if (optionalExpr) path.replaceWith(optionalExpr);
    }
  }
  return {
    name: "restore-deep-optional-chaining",
    visitor: {
      ConditionalExpression(path) {
        const res = analyzeSophisticatedPatternV4(path.node);
        if (res) {
          path.replaceWith(res);
        }
        //handleConditionalExpression(path);
      },
      LogicalExpression(path) {
        const res = analyzeSophisticatedPatternV4(path.node);
        if (res) {
          path.replaceWith(res);
        }
        //handleLogicalExpression(path);
      },
    },
  };
  // function isValidExpression(node) {
  //   return (t.isBinaryExpression(node) && ['===', '=='].includes(node.operator)) && t.isNullLiteral(node.left)
  // }
  // /**
  //  * Builds a chain of nodes from logical OR (||) or binary (==) expressions.
  //  * @param {import("@babel/types").Node} node - The AST node to process.
  //  * @param {Array} chain - Array to collect nodes representing the chain.
  //  */
  // function buildLogicalPath(node, chain) {
  //   if (!t.isLogicalExpression(node, { operator: "||" })) return
  //   if (t.isLogicalExpression(node.left, { operator: "||" })) {
  //     chain.push(node.right);
  //     if (t.isBinaryExpression(node.left) || t.isLogicalExpression(node.left, { operator: "||" })) {
  //       buildLogicalPath(node.left, chain);
  //     }
  //   } else {
  //     chain.push(node.right);
  //     chain.push(node.left);
  //   }
  // }

  // /**
  //  * Builds an optional chaining expression from a node.
  //  * @param {import("@babel/types").Node} currentExpr - Current expression in the chain.
  //  * @param {import("@babel/types").Node} node - Node to process (MemberExpression, CallExpression, or Identifier).
  //  * @param {boolean} isCall - Whether to create an OptionalCallExpression.
  //  * @param {Array} args - Arguments for a call expression.
  //  * @returns {import("@babel/types").Node} The constructed optional expression.
  //  */
  // function buildOptionalExpression(currentExpr, node, isCall = false, args = []) {
  //   if (isCall && t.isCallExpression(node)) {
  //     const callee = t.isMemberExpression(node.callee)
  //       ? t.optionalMemberExpression(currentExpr || node.callee.object, node.callee.property, node.callee.computed || false, true)
  //       : currentExpr || node.callee;

  //     return t.optionalCallExpression(callee, args, false);
  //   }
  //   if (t.isMemberExpression(node)) {
  //     return t.optionalMemberExpression(currentExpr || node.object, node.property, node.computed || false, currentExpr? true : false);
  //   }
  //   if (t.isIdentifier(node)) {
  //     return currentExpr ? t.optionalMemberExpression(currentExpr, t.identifier(node.name), false, true) : node;
  //   }
  //   console.warn(`Unexpected node type in buildOptionalExpression: ${node.type}`);
  //   return currentExpr || node;
  // }

  // /**
  //  * Replaces an object in a MemberExpression or CallExpression with an identifier.
  //  * @param {import("@babel/types").Node} node - The node to process.
  //  * @param {string} identifierName - The identifier to replace with.
  //  * @param {Array<boolean>} foundIdentifiers - Tracks if the identifier was found.
  //  * @param {boolean} isTop - Whether this is the top-level node.
  //  * @returns {import("@babel/types").Node} The transformed node.
  //  */
  // function replaceMemberOrCallObjectWithIdentifier(node, identifierName, foundIdentifiers, isTop = true) {

  //   if (t.isMemberExpression(node)) {
  //     const newObj = replaceMemberOrCallObjectWithIdentifier(node.object, identifierName, foundIdentifiers, false);

  //     return t.optionalMemberExpression(newObj, node.property, node.computed, isTop);
  //   }
  //   if (t.isCallExpression(node)) {
  //     const newCallee = replaceMemberOrCallObjectWithIdentifier(node.callee, identifierName, foundIdentifiers, false);
  //     return t.optionalCallExpression(newCallee, node.arguments, false);
  //   }
  //   if (t.isIdentifier(node)) {
  //     foundIdentifiers.push(node.name === identifierName);
  //     return t.identifier(identifierName);
  //   }

  //   return node;
  // }

  // function resolveNodeArguments(node, path) {
  //   if (!node.arguments || node.arguments.length === 0) return [];
  //   return node.arguments.map(arg => {
  //     if (t.isIdentifier(arg)) {
  //       const binding = path.scope.getBinding(arg.name);
  //       if (binding && binding.constantViolations.length > 0) {
  //         const lastViolation = binding.constantViolations[binding.constantViolations.length - 1];
  //         if (t.isAssignmentExpression(lastViolation.node)) {
  //           return lastViolation.node.right;
  //         }
  //       }
  //     }
  //     return arg;
  //   });
  // }
  // /**
  //  * Transforms a conditional expression into an optional chaining expression.
  //  * @param {import("@babel/core").NodePath} path - The Babel path for the ConditionalExpression node.
  //  */
  // function resolveOptionalChain(path, isConditional = false) {
  //   const { node } = path;
  //   const { test, alternate } = node;
  //   const chainNodes = [];

  //   buildLogicalPath(test || node, chainNodes);
  //   if (!chainNodes.find(node => isValidExpression(node))) return;

  //   if (chainNodes.length === 0) return;
  //   let optionalExpr;

  //   for (const chainNode of chainNodes.reverse()) {

  //     if (t.isBinaryExpression(chainNode, { operator: "==" }) && t.isIdentifier(chainNode.right)) {
  //       // Handle simple case: null == o
  //       optionalExpr = buildOptionalExpression(optionalExpr, t.identifier(chainNode.right.name));

  //     } else {
  //       // Handle complex case: null checks in logical chain
  //       const { left, right } = chainNode;
  //       if (t.isCallExpression(chainNode)) {
  //         const args = resolveNodeArguments(chainNode, path);
  //         if (t.isMemberExpression(chainNode.callee)) {
  //           optionalExpr = buildOptionalExpression(optionalExpr, chainNode, true, args);
  //         } else if (t.isIdentifier(chainNode.callee)) {
  //           optionalExpr = buildOptionalExpression(optionalExpr, chainNode, true, args || []);
  //         } else {
  //           console.warn(`Skipping unexpected callee type in call expression: ${chainNode.callee.type}`);
  //           continue;
  //         }
  //       }
  //       else if (t.isUnaryExpression(chainNode)) {
  //         continue;
  //       } else if (t.isNullLiteral(left)) {
  //         if (t.isAssignmentExpression(right)) {
  //           optionalExpr = buildOptionalExpression(optionalExpr, right.right, t.isCallExpression(right.right), right.right.arguments || []);
  //         } else if (t.isIdentifier(right)) {
  //           optionalExpr = buildOptionalExpression(optionalExpr, right);
  //         } else if (t.isMemberExpression(right)) {
  //           optionalExpr = buildOptionalExpression(optionalExpr, right);
  //         } else {
  //           //console.warn(`Skipping unexpected right node type in logical chain: ${right.type}`);
  //           continue;
  //         }
  //       }
  //     }
  //   }

  //   if (!optionalExpr) return;
  //   if (!isConditional) {
  //     path.replaceWith(optionalExpr)
  //     return
  //   }
  //   if (t.isCallExpression(alternate)) {
  //     const args = resolveNodeArguments(alternate, path);
  //     const callee = t.isMemberExpression(alternate.callee)
  //       ? t.optionalMemberExpression(optionalExpr, alternate.callee.property, alternate.callee.computed || false, true)
  //       : optionalExpr;
  //     optionalExpr = t.optionalCallExpression(callee, args, false);
  //   } else if (t.isMemberExpression(alternate)) {
  //     optionalExpr = t.optionalMemberExpression(optionalExpr, alternate.property, alternate.computed || false, true);
  //   } else {
  //     console.warn(`Unexpected alternate node type: ${alternate}`);
  //     return;
  //   }
  //   path.replaceWith(optionalExpr);
  // }

  // return {
  //   name: "restore-deep-optional-chaining",
  //   visitor: {
  //     LogicalExpression(path) {
  //       resolveOptionalChain(path);
  //     },
  //     ConditionalExpression(path) {
  //       if (
  //         t.isUnaryExpression(path.node.consequent, { operator: "void" }) &&
  //         t.isNumericLiteral(path.node.consequent.argument, { value: 0 })
  //       ) {
  //         if (t.isBinaryExpression(path.node.test, { operator: "==" }) && t.isIdentifier(path.node.test.right)) {
  //           // Handle simple case directly with replaceMemberOrCallObjectWithIdentifier
  //           const identifierName = path.node.test.right.name;
  //           const foundIdentifiers = [];
  //           if (t.isMemberExpression(path.node.alternate)) {
  //             const newExpr = replaceMemberOrCallObjectWithIdentifier(path.node.alternate, identifierName, foundIdentifiers);
  //             if (foundIdentifiers.length > 0 && foundIdentifiers.pop()) {
  //               path.replaceWith(newExpr);
  //             }
  //           } else if (t.isCallExpression(path.node.alternate)) {
  //             let newCallee;
  //             if (t.isMemberExpression(path.node.alternate.callee)) {
  //               newCallee = replaceMemberOrCallObjectWithIdentifier(path.node.alternate.callee, identifierName, foundIdentifiers);
  //             } else if (t.isIdentifier(path.node.alternate.callee)) {
  //               newCallee = t.identifier(identifierName);
  //               foundIdentifiers.push(true);
  //             }
  //             if (foundIdentifiers.length > 0 && foundIdentifiers.pop()) {

  //               path.replaceWith(t.optionalCallExpression(newCallee, path.node.alternate.arguments, false));
  //             }
  //           }
  //         } else {
  //           // Delegate complex cases to resolveOptionalChain
  //           resolveOptionalChain(path, true);
  //         }
  //       }
  //     }
  //   }
  // };
});
