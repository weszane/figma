import { alphaColorManipulator } from '../905/713722';
import { atomStoreManager } from '../figma_app/27355';
import { colorToHexString } from '../figma_app/191804';
import { variableByIdAtomFamily } from '../figma_app/216057';
import { resolvedTypeToString } from '../figma_app/394327';
import { getPluginCodeSyntax } from '../figma_app/655139';
import { VariableDataType, VariablesBindings } from '../figma_app/763686';
import { getValidStyleNodeId } from '../figma_app/836943';
// Refactored from minified JS: Renamed functions and variables for clarity, added TypeScript interfaces and types for type safety, simplified recursive logic with better structure, added comments explaining logic, preserved original export names but updated function names.

// Define types based on inferred usage from code logic and imports
interface Node {
  visible: boolean;
  childrenNodes: Node[];
  boundVariables: Record<string, any[]>; // Assuming boundVariables is an object with arrays of variable bindings
  inheritedFillStyle?: string;
  inheritedTextStyle?: string;
  sceneGraph: Map<string, any>; // Assuming sceneGraph is a Map with style nodes
}
interface StyleNode {
  name: string;
  fills?: Array<{
    color: any;
  }>;
  fontName?: {
    family: string;
    style: string;
  };
  fontSize?: number;
  fontWeightOrMixed?: any;
  lineHeightOrMixed?: any;
}
interface VariableInfo {
  name: string;
  codeSyntaxName?: string;
  value: string | null;
  type: string;
}
interface ResolvedValue {
  type: VariableDataType;
  value: any;
  resolvedType?: any;
}

// Main function to collect variables and styles from a node tree
export function collectNodeVariablesAndStyles(rootNode: Node, contextMap: Map<string, any>, includeInherited: boolean): Record<string, string> {
  const result: Record<string, string> = {};

  // Recursive helper to traverse the node tree
  function traverseNode(node: Node, result: Record<string, string>, contextMap: Map<string, any>, includeInherited: boolean): void {
    if (!node.visible) return;

    // Recurse on children first
    for (const child of node.childrenNodes) {
      traverseNode(child, result, contextMap, includeInherited);
    }

    // Process bound variables if includeInherited or always (logic seems to always process boundVariables)
    const variables = getBoundVariables(node, contextMap);
    variables.forEach(variable => {
      if (variable && variable.value !== null) {
        result[variable.codeSyntaxName || variable.name] = variable.value;
      }
    });

    // Process inherited fill style
    if (node.inheritedFillStyle) {
      const styleId = getValidStyleNodeId(node.inheritedFillStyle as any);
      if (styleId) {
        const styleNode = node.sceneGraph.get(styleId) as StyleNode;
        if (styleNode && styleNode.fills) {
          result[styleNode.name] = styleNode.fills.map(fill => alphaColorManipulator.format(fill.color)).join(',');
        }
      }
    }

    // Process inherited text style
    if (node.inheritedTextStyle) {
      const styleId = getValidStyleNodeId(node.inheritedTextStyle as any);
      if (styleId) {
        const styleNode = node.sceneGraph.get(styleId) as StyleNode;
        if (styleNode) {
          const lineHeight = styleNode.lineHeightOrMixed === 'mixed' ? 'mixed' : styleNode.lineHeightOrMixed?.value;
          result[styleNode.name] = `Font(family: "${styleNode.fontName?.family}", style: ${styleNode.fontName?.style}, size: ${styleNode.fontSize}, weight: ${styleNode.fontWeightOrMixed}, lineHeight: ${lineHeight})`;
        }
      }
    }
  }
  traverseNode(rootNode, result, contextMap, includeInherited);
  return result;
}

// Function to get bound variables for a node
export function getBoundVariables(node: Node, contextMap: Map<string, any>): VariableInfo[] {
  return Object.values(node.boundVariables).flatMap(bindings => bindings).map((binding: any) => {
    const variable = atomStoreManager.get(variableByIdAtomFamily(binding.id));
    if (variable) {
      const resolved = VariablesBindings.getVariableResolvedValue(binding.id, new Map()) as ResolvedValue | null;
      const resolvedType = resolved?.resolvedType;
      let value: string | null = null;
      if (resolved) {
        switch (resolved.type) {
          case VariableDataType.STRING:
            value = resolved.value;
            break;
          case VariableDataType.BOOLEAN:
          case VariableDataType.FLOAT:
            value = String(resolved.value);
            break;
          case VariableDataType.COLOR:
            value = colorToHexString(resolved.value);
            break;
          default:
            value = null;
        }
      }
      return {
        name: variable.name,
        codeSyntaxName: getPluginCodeSyntax(variable, contextMap),
        value,
        type: resolvedTypeToString(resolvedType)
      };
    }
    return null;
  }).filter(item => item !== null); // Filter out nulls
}

// Preserve original export names
export const a = getBoundVariables;
export const l = collectNodeVariablesAndStyles;