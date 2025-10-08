import { jsx } from "react/jsx-runtime"

/**
 * Creates a component renderer that selects and renders a component based on view mode
 * @param components - Object mapping view modes to React components
 * @returns A function that takes props and renders the appropriate component based on viewMode prop
 */
export interface ViewModeRendererProps {
  viewMode: string
  [key: string]: any
}

export interface ComponentMap {
  [viewMode: string]: React.ComponentType<any>
}

export function createViewModeRenderer(components: ComponentMap) {
  return function ViewModeComponent(props: ViewModeRendererProps) {
    const { viewMode, ...restProps } = props
    const SelectedComponent = components[viewMode]

    if (!SelectedComponent) {
      console.warn(`No component found for view mode: ${viewMode}`)
      return null
    }

    return jsx(SelectedComponent, restProps)
  }
}

/**
 * Alias for createViewModeRenderer
 * @deprecated Use createViewModeRenderer instead
 */
export const h = createViewModeRenderer
