// Origin: /Users/allen/sigma-main/src/905/823050.ts
// Changes: Renamed variables, added TypeScript types/interfaces, improved readability, added comments, simplified logic, noted assumed dependencies.

// Assumed dependencies: None (pure functions, but may be used in a React-like context).

// Type definitions for props and children
export interface ComponentProps {
  key?: string;
  [prop: string]: any;
}

export interface VirtualNode {
  type: string | Fn;
  props: ComponentProps;
  children: Array<any>;
}

/**
 * Factory function to create a component renderer.
 * - Renamed variables for clarity.
 * - Added type definitions.
 * - Added comments to explain logic.
 * - Simplified children handling.
 */
export function createComponentRenderer(allowedTypes: Iterable<string | Fn>) {
  const allowedTypeSet = new Set(allowedTypes);

  return (
    type: string | Fn,
    props?: ComponentProps,
    ...restChildren: any[]
  ): VirtualNode | any => {
    // Determine children: use restChildren if provided, otherwise props?.children
    let children: any[] =
      restChildren.length > 0
        ? restChildren
        : Array.isArray(props?.children)
        ? props?.children
        : props?.children !== undefined
        ? [props.children]
        : [];

    // If type is in allowedTypeSet, return a virtual node object
    if (allowedTypeSet.has(type)) {
      return {
        type,
        props,
        children,
      } as VirtualNode;
    }

    // If type is a function, treat as a component
    if (typeof type === "function") {
      // Assign keys to children if they have props
      children = children.map((child, idx) => {
        if (typeof child?.props === "object") {
          child.props = {
            key: `children-${idx}`,
            ...child.props,
          };
        }
        return child;
      });

      // Call the component function with props and children
      const result = type({
        ...props,
        children,
      });

      // If result is a virtual node, preserve key from original props
      if (
        result &&
        typeof result === "object" &&
        result.props &&
        props &&
        props.key != null
      ) {
        result.props.key = props.key;
      }
      return result;
    }

    // If type is not a function or allowed type, throw error
    throw new Error("Component is not a function");
  };
}

/**
 * Serializes the component renderer factory call for debugging or code generation.
 * - Renamed variables for clarity.
 * - Added type definitions.
 */
export function serializeComponentRenderer(allowedTypes: Iterable<string | Fn>): string {
  return `(${createComponentRenderer.toString()})(${JSON.stringify(Array.from(allowedTypes))})`;
}

// Export statements preserving original names
export const H = createComponentRenderer;
export const n = serializeComponentRenderer;
