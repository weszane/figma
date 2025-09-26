import type { ReactNode, Ref } from 'react'
import { forwardRef, useMemo, useRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { LayoutProvider, ListLayoutContext, useLayoutRegistration } from '../905/479155'
import { cssBuilderInstance } from '../cssbuilder/589278'

interface FlexBoxProps {
  justify?: 'space-between' | 'end' | 'center'
  align?: 'center' | 'end'
  fullWidth?: boolean
  fullHeight?: boolean
  gap?: number
  children?: ReactNode
}

interface LayoutContainerProps extends FlexBoxProps {
  primary?: boolean
}

export function LayoutContainer(props: LayoutContainerProps) {
  const layoutRef = useRef(null)
  const {
    tracker,
    index,
    isPrimaryLayout,
  } = useLayoutRegistration(layoutRef, props.primary)

  const contextValue = useMemo(() => ({
    trackerRef: tracker,
    layoutIndex: index,
    primary: isPrimaryLayout,
  }), [isPrimaryLayout, index, tracker])

  return jsx(ListLayoutContext.Provider, {
    value: contextValue,
    children: jsx(LayoutProvider, {
      children: jsx(FlexBox, {
        ...props,
        ref: layoutRef,
        children: props.children,
      }),
    }),
  })
}

export const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>((props, ref: Ref<HTMLDivElement>) => jsx('div', {
  ref,
  className: cssBuilderInstance.flex
    .if(props.justify === 'space-between', cssBuilderInstance.justifyBetween)
    .if(props.justify === 'end', cssBuilderInstance.justifyEnd)
    .if(props.justify === 'center', cssBuilderInstance.justifyCenter)
    .if(props.align === 'center', cssBuilderInstance.itemsCenter)
    .if(props.align === 'end', cssBuilderInstance.itemsEnd)
    .if(props.fullWidth, cssBuilderInstance.wFull)
    .if(props.fullHeight, cssBuilderInstance.hFull)
    .$,
  style: {
    gap: props.gap ?? 8,
  },
  children: props.children,
}))

export const B = FlexBox
export const b = LayoutContainer
