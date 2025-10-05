import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { renderI18nText } from "../905/303541"

interface SignUpModalProps {
  styles: {
    graphic: string
    header: string
    subHeader: string
    primaryWideButton: string
    logInButton: string
  }
  props: {
    icon?: string
    headerText?: string
    [key: string]: any
  }
  Event: {
    onSignUpClick: () => void
    onLogInClick: () => void
  }
  Component: {
    ModalCloseButton: React.ComponentType<any>
    BrandButton: React.ComponentType<any>
    ButtonSecondaryTracked: React.ComponentType<any>
    Svg: React.ComponentType<{ svg: string, useOriginalSrcFills_DEPRECATED: boolean }>
  }
}

/**
 * SignUpModal - A modal component for user sign up prompts
 * Original name: $$a0
 */
export function SignedOutSignUpModal({
  styles,
  props,
  Event: {
    onSignUpClick,
    onLogInClick,
  },
  Component: {
    ModalCloseButton,
    BrandButton,
    ButtonSecondaryTracked,
    Svg,
  },
}: SignUpModalProps) {
  return jsxs(Fragment, {
    children: [
      jsx(ModalCloseButton, {
        ...props,
      }),
      jsx("div", {
        className: styles.graphic,
        children: props.icon && jsx(Svg, {
          svg: props.icon,
          useOriginalSrcFills_DEPRECATED: true,
        }),
      }),
      jsx("div", {
        className: styles.header,
        children: props.headerText,
      }),
      jsx("div", {
        className: styles.subHeader,
        children: renderI18nText("community.logged_out.sign_up_modal_body"),
      }),
      jsx(BrandButton, {
        type: "submit",
        className: styles.primaryWideButton,
        onClick: onSignUpClick,
        children: renderI18nText("community.signed_out_modal.sign_up"),
      }),
      jsx(ButtonSecondaryTracked, {
        className: styles.logInButton,
        onClick: onLogInClick,
        children: renderI18nText("community.signed_out_modal.log_in"),
      }),
    ],
  })
}

// Export alias for backward compatibility
export const A = SignedOutSignUpModal
