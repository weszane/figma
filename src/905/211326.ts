import { jsx } from 'react/jsx-runtime'
import { APILoadingStatus } from '../905/520829'
import { LoadingSpinner } from '../figma_app/858013'
/**
 * Props for simple loading state rendering.
 */
interface SimpleLoadingProps {
  isLoading: boolean
  className?: string
  children: () => JSX.Element
}

/**
 * Props for API loading state rendering.
 */
interface ApiLoadingProps {
  state: { status: APILoadingStatus, value?: any }
  className?: string
  children: (value: any) => JSX.Element
  failure?: React.ComponentType
}

/**
 * Renders a loading spinner if isLoading is true, otherwise renders children.
 * Original function: s
 */
function SimpleLoadingRenderer({ isLoading, className, children }: SimpleLoadingProps): JSX.Element {
  if (isLoading) {
    return jsx('div', {
      className,
      children: jsx(LoadingSpinner, {}),
    })
  }
  return children()
}

/**
 * Renders based on API loading status: failure, loading, or success.
 * Original function: o
 */
function ApiLoadingRenderer({ state, className, children, failure }: ApiLoadingProps): JSX.Element {
  switch (state.status) {
    case APILoadingStatus.FAILURE:
      if (failure) {
        return jsx(failure, {})
      }
      return jsx('div', {
        className,
        children: jsx(LoadingSpinner, {}),
      })
    case APILoadingStatus.LOADING:
      return jsx('div', {
        className,
        children: jsx(LoadingSpinner, {}),
      })
    case APILoadingStatus.SUCCESS:
      return children(state.value)
    default:
      // Fallback for unexpected status
      return jsx('div', {
        className,
        children: jsx(LoadingSpinner, {}),
      })
  }
}

/**
 * Main loading renderer that delegates to simple or API loading based on props.
 * Original function: $$l0
 */
export function LoadingRenderer(props: SimpleLoadingProps | ApiLoadingProps): JSX.Element {
  if ('isLoading' in props) {
    return jsx(SimpleLoadingRenderer, props)
  }
  return jsx(ApiLoadingRenderer, props)
}

/**
 * Alias for LoadingRenderer.
 * Original export: x = $$l0
 */
export const x = LoadingRenderer
