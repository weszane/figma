import classNames from "classnames"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { KindEnum } from "../905/129884"
import { getI18nString, renderI18nText } from "../905/303541"
import { handleStripeManageSubscription } from "../905/581647"
import { SvgComponent } from "../905/714743"
import { A } from "../5724/267849"
import { cI, hI, JL, Jp, qS, QW, x6 } from "../figma_app/522242"
import { ButtonSecondary } from "../figma_app/637027"

interface PaymentButtonProps {
  width?: "constrained" | "auto"
  children: React.ReactNode
}

/**
 * PaymentButton - A button component that handles Stripe subscription management
 * Original name: $$g0
 */
export function PaymentButton({ width = "constrained", children }: PaymentButtonProps) {
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = useCallback(() => {
    dispatch(handleStripeManageSubscription({}))
  }, [dispatch])

  const buttonClass = classNames(x6, {
    [Jp]: width === "constrained",
  })

  return jsx("div", {
    "data-not-draggable": true,
    "children": jsx(ButtonSecondary, {
      onClick: handleClick,
      className: buttonClass,
      children,
    }),
  })
}

/**
 * UpdatePaymentButton - A button that stops event propagation and handles Stripe subscription management
 * Original name: $$f2
 */
export function UpdatePaymentButton() {
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    dispatch(handleStripeManageSubscription({}))
  }, [dispatch])

  return jsx("button", {
    className: qS,
    onClick: handleClick,
    children: renderI18nText("community.buyer.update_payment"),
  })
}

/**
 * PaymentInfoTooltip - A tooltip component displaying payment information
 * Original name: $$E3
 */
export function PaymentInfoTooltip() {
  return jsx("div", {
    "className": QW,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.buyer.update_payment_info_to_retain_access"),
    "children": jsx(SvgComponent, {
      svg: A,
    }),
  })
}

/**
 * PaymentSection - A section containing payment information and action button
 * Original name: $$y1
 */
export function PaymentSection() {
  return jsxs("div", {
    "className": cI,
    "data-not-draggable": true,
    "children": [
      jsx("div", {
        className: QW,
        children: jsx(SvgComponent, {
          svg: A,
        }),
      }),
      jsx("div", {
        className: hI,
        children: renderI18nText("community.buyer.update_payment_info"),
      }),
      jsx("div", {
        className: JL,
        children: jsx(PaymentButton, {
          width: "auto",
          children: renderI18nText("community.buyer.go_to_stripe"),
        }),
      }),
    ],
  })
}

// Export aliases for backward compatibility
export const Vv = PaymentButton
export const cu = PaymentSection
export const ur = UpdatePaymentButton
export const xY = PaymentInfoTooltip
