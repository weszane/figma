import { createElement, memo, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { useResizeObserverRef } from "../figma_app/708845"

/**
 * CSS class for fixed size truncated text.
 * Original variable: s
 */
const FIXED_SIZE_CLASS = "center_truncated_text--fixedSize--7beVW"

/**
 * Props for CenterTruncatedText component.
 * Original props: text, className, maxWidth, postfix, postElement, tooltipPropsWhenTruncated, onTruncationChange, element, id
 */
export interface CenterTruncatedTextProps {
  text: string
  className?: string
  maxWidth?: number
  postfix?: React.ReactNode
  postElement?: React.ReactNode
  tooltipPropsWhenTruncated?: Record<string, any>
  onTruncationChange?: (isTruncated: boolean) => void
  element?: keyof JSX.IntrinsicElements
  id?: string
}

/**
 * CenterTruncatedText - displays text with center truncation and optional postfix/postElement.
 * Original component: $$o0
 */
export const CenterTruncatedText = memo(({
  text,
  className,
  maxWidth,
  postfix,
  postElement,
  tooltipPropsWhenTruncated,
  onTruncationChange,
  element,
  id,
}: CenterTruncatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const postfixRef = useRef<HTMLSpanElement>(null)
  const postElementRef = useRef<HTMLSpanElement>(null)
  const resize = useResizeObserverRef(containerRef)
  const [isTruncated, setIsTruncated] = useState(false)

  // Notify parent when truncation changes (onTruncationChange)
  useEffect(() => {
    onTruncationChange?.(isTruncated)
  }, [onTruncationChange, isTruncated])

  // Check if text is truncated
  useLayoutEffect(() => {
    if (textRef.current && resize) {
      const postfixWidth = postfixRef.current?.getBoundingClientRect()?.width ?? 0
      const postElementWidth = postElementRef.current?.getBoundingClientRect()?.width ?? 0
      setIsTruncated(
        textRef.current.scrollWidth > Math.ceil(resize.width - postfixWidth - postElementWidth)
      )
    }
  }, [text, resize])

  const widthStyle = maxWidth ? `${maxWidth}px` : "100%"

  return jsx("div", {
    ref: containerRef,
    style: { width: widthStyle },
    className: `${className ?? ""} center_truncated_text--truncateContainer--N-24F`,
    ...(isTruncated ? tooltipPropsWhenTruncated : {}),
    children: createElement(element || "p", {
      className: "center_truncated_text--truncateGroup--Fw18Y",
      id,
      children: [
        jsxs(Fragment, {
          children: [
            jsx("span", {
              ref: textRef,
              className: postElement
                ? "center_truncated_text--truncateLeftWithPostElem--a-9Fx"
                : "center_truncated_text--truncateLeft--zdylN",
              children: text,
            }),
            isTruncated &&
              jsxs("span", {
                className: "center_truncated_text--truncateRight--YK15u",
                "aria-hidden": "true",
                children: [
                  "\u200B",
                  jsx("span", {
                    className: "center_truncated_text--truncateRightContent--v1ra4",
                    children: text,
                  }),
                ],
              }),
            postfix &&
              jsx("span", {
                ref: postfixRef,
                className: FIXED_SIZE_CLASS,
                children: postfix,
              }),
            postElement &&
              jsx("span", {
                ref: postElementRef,
                className: FIXED_SIZE_CLASS,
                children: postElement,
              }),
          ],
        }),
      ],
    }),
  })
})

/**
 * Export for CenterTruncatedText (original export: R)
 */
export const R = CenterTruncatedText
