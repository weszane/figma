import { Children, Component, createContext, forwardRef, PureComponent, useContext, useEffect, useMemo, useRef } from 'react'
import { shallowEqual } from 'react-redux'
import { Link } from 'react-router-dom'
import { jsx } from 'react/jsx-runtime'
import { getRumLoggingConfig } from '../905/16237'
import { RCSMessageType } from '../905/135526'
import { getI18nString, I18nTextComponent } from '../905/303541'
import { trackEventAnalytics } from '../905/449184'
import { handleAtomEvent } from '../905/502364'
import { logDebug } from '../905/714362'
import { logAndTrackCTA, trackContextViewed, trackInputBlurred } from '../figma_app/314264'

// Original: let h = null
let ctaClickedReferrer: string | null = null

// Original: function m()
function clearCtaClickedReferrer() {
  ctaClickedReferrer = null
}

interface TrackingContextValue {
  name?: string
  properties: Record<string, any>
  trackEvent: (event: string, props: Record<string, any>) => void
}
/**
 * Context for tracking analytics.
 * Original: $$g2
 */
export const TrackingContext = createContext<TrackingContextValue>({
  properties: {},
  trackEvent: () => null,
  name: undefined,
})

/**
 * Provider component for tracking context.
 * Original: $$f4
 */
export function TrackingProvider({
  name: eventName,
  properties: eventProperties = {},
  trackingTargets: targets = RCSMessageType.ALL,
  enabled: isEnabled = true,
  ignoreParent: shouldIgnoreParent = false,
  onlyOnce: trackOnlyOnce = false,
  children,
  trackingOptions,
}: {
  name: string
  properties?: Record<string, any>
  trackingTargets?: RCSMessageType
  enabled?: boolean
  ignoreParent?: boolean
  onlyOnce?: boolean
  children: React.ReactNode
  trackingOptions?: any
}) {
  const { name: parentName, properties: parentProperties } = useContext(TrackingContext)
  const propertiesRef = useRef({})
  const lastTrackedRef = useRef(null)

  if (!shallowEqual(propertiesRef.current, eventProperties)) {
    propertiesRef.current = eventProperties
  }

  const contextValue = useMemo(() => {
    const fullName = parentName && !shouldIgnoreParent ? `${parentName} > ${eventName}` : eventName
    const mergedProperties = {
      ...parentProperties,
      ...propertiesRef.current,
    }
    return {
      name: fullName,
      properties: mergedProperties,
      trackEvent: (event: string, props: Record<string, any>) => trackEventAnalytics(event, {
        trackingContext: fullName,
        ...mergedProperties,
        ...props,
      }),
    }
  }, [eventName, propertiesRef.current, parentName, parentProperties, shouldIgnoreParent])

  useEffect(() => {
    if (!isEnabled || targets === RCSMessageType.NONE)
      return

    const currentName = contextValue.name
    const currentProperties = contextValue.properties

    if (lastTrackedRef.current && lastTrackedRef.current.name === currentName && (trackOnlyOnce || shallowEqual(lastTrackedRef.current.properties, currentProperties)))
      return

    if (targets === RCSMessageType.RCS) {
      const filteredProps = {}
      for (const key of Object.keys(currentProperties)) {
        if (currentProperties[key] !== null && currentProperties[key] !== undefined) {
          filteredProps[key] = currentProperties[key]
        }
      }
      handleAtomEvent({
        id: currentName,
        properties: filteredProps,
      })
      return
    }

    const trackingData = {
      name: currentName,
      ...(ctaClickedReferrer !== null && {
        ctaClickedReferrer,
      }),
      ...currentProperties,
    }
    logDebug('Context Viewed', currentName, trackingData)
    trackContextViewed(trackingData, trackingOptions)
    lastTrackedRef.current = contextValue
  }, [targets, contextValue, isEnabled, trackOnlyOnce, trackingOptions])

  return jsx(TrackingContext.Provider, {
    value: contextValue,
    children,
  })
}

/**
 * Higher-order component to add tracking to a component.
 * Original: $$E8
 */
export function withTracking(WrappedComponent: React.ComponentType<any>, trackingName?: string) {
  class TrackedComponent extends PureComponent {
    static displayName: string
    render() {
      return jsx(TrackingProvider, {
        name: trackingName || WrappedComponent.displayName,
        children: jsx(WrappedComponent, {
          ...this.props,
        }),
      })
    }
  }
  TrackedComponent.displayName = WrappedComponent.displayName
  return TrackedComponent
}

/**
 * Wrapper function to add tracking to JSX elements.
 * Original: $$y3
 */
export function wrapWithTracking(element: React.ReactElement, name: string, properties: Record<string, any> = {}, enabled: boolean = true) {
  return jsx(TrackingProvider, {
    name,
    properties,
    enabled,
    children: element,
  })
}

/**
 * Higher-order component to track clicks on components.
 * Original: $$b10
 */
export function withTrackedClick(WrappedComponent: React.ComponentType<any>, isLink: boolean = false) {
  const TrackedClickComponent = forwardRef((props: any, ref) => {
    const rumConfig = getRumLoggingConfig()
    return jsx(TrackingContext.Consumer, {
      children: (context) => {
        const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
          if (props.disabled)
            return

          const trackingProps = {
            ...context.properties,
            ...props.trackingProperties,
          }
          if (context.name) {
            trackingProps.trackingContext = context.name
          }

          const text = (() => {
            if (props.innerText)
              return props.innerText
            if (props.children && typeof props.children === 'string')
              return props.children
            const mapped = Children.map(props.children, (child) => {
              if (child?.type !== I18nTextComponent)
                return child
              const { id, options } = child.props
              return getI18nString(id, options)
            })
            if (mapped?.every(item => typeof item === 'string'))
              return mapped.join('')
          })()

          if (text) {
            trackingProps.text = text
          }

          let options = props.trackingOptions
          if (props.RUMEnabled) {
            options = {
              ...rumConfig,
              ...(options || {}),
            }
          }

          logAndTrackCTA(trackingProps, props.trackingEventName, isLink, options)
          ctaClickedReferrer = `${trackingProps.trackingContext} : ${trackingProps.text}`
          props.onClick?.(event)
          setTimeout(clearCtaClickedReferrer, 150)
        }

        const {
          trackingProperties,
          innerText,
          useMouseDown,
          trackingEventName,
          trackingOptions,
          RUMEnabled,
          ...restProps
        } = props

        return jsx(WrappedComponent, {
          ref,
          ...restProps,
          ...(props.useMouseDown
            ? { onMouseDown: handleClick }
            : { onClick: handleClick }),
        })
      },
    })
  })
  TrackedClickComponent.displayName = `Tracked(${WrappedComponent.displayName || WrappedComponent.name})`
  return TrackedClickComponent
}

interface TrackedInputProps {
  trackingProperties?: Record<string, any>
  trackingPopulationLevel?: any
  trackingFieldName?: string
  onBlur?: (event: React.FocusEvent) => void
  [key: string]: any // Allow additional props for WrappedComponent
}
/**
 * Higher-order component to track input blur events.
 * Original: $$T5
 */
export function withTrackedInput(WrappedComponent: React.ComponentType<any>) {
  return class TrackedInput extends Component<TrackedInputProps> {
    render() {
      return jsx(TrackingContext.Consumer, {
        children: (context: { name?: string, properties: Record<string, any>, trackEvent: (event: string, props: Record<string, any>) => void }) => {
          const { trackingProperties, trackingPopulationLevel, trackingFieldName, ...restProps } = this.props
          return jsx(WrappedComponent, {
            ...restProps,
            onBlur: (event: React.FocusEvent) => {
              const trackingProps: TrackedInputProps = {
                ...context.properties,
                ...this.props.trackingProperties,
                fieldName: this.props.trackingFieldName,
                populationLevel: this.props.trackingPopulationLevel,
              }
              if (context.name) {
                trackingProps.trackingContext = context.name
              }
              trackInputBlurred(trackingProps)
              this.props.onBlur?.(event)
            },
          })
        },
      })
    }
  }
}

// Pre-built tracked components
// Original: $$I0
export const TrackedButton = withTrackedClick(({ dataTestId, ...props }: any) => jsx('button', { ...props, 'data-testid': dataTestId }))

// Original: $$S7
export const TrackedDiv = withTrackedClick((props: any) => jsx('div', { ...props }))

// Original: $$v1
export const TrackedAnchor = withTrackedClick((props: any) => jsx('a', { ...props, children: props.children }), true)

// Original: $$A9
export const TrackedLink = withTrackedClick((props: any) => jsx(Link, { ...props }))

/**
 * Hook to access tracking context.
 * Original: $$x6
 */
export function useTracking() {
  return useContext(TrackingContext)
}

// Unused tracked input, kept for consistency
withTrackedClick((props: any) => jsx('input', { ...props }))

// Exports with refactored names
export const $z = TrackedButton
export const L0 = TrackedAnchor
export const QE = TrackingContext
export const T8 = wrapWithTracking
export const fu = TrackingProvider
export const h3 = withTrackedInput
export const j6 = useTracking
export const jm = TrackedDiv
export const kp = withTracking
export const o3 = TrackedLink
export const tf = withTrackedClick
