import classNames from "classnames"
import { Component } from "react"
import { jsx } from "react/jsx-runtime"
import { LazyInputForwardRef } from "../905/408237"
import { LoadingSpinner } from "../905/443820"
import { withTrackedClick } from "../figma_app/831799"

interface ButtonProps {
  fullWidth?: boolean
  autoHeight?: boolean
  use?: "hollow" | "normal"
  loading?: boolean
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

/**
 * Button component - A customizable button with loading state and styling options
 * Original name: Button
 */
export class landingFormButton extends Component<ButtonProps> {
  static displayName = "Button"

  static defaultProps = {
    fullWidth: true,
  }

  render() {
    const {
      fullWidth,
      autoHeight,
      use,
      loading,
      disabled,
      className,
      children,
      ...restProps
    } = this.props

    const buttonClasses = classNames(
      "auth_view--brandButton--Le4wb auth_view--brandButtonBase--RAO-j auth_brand--figmaSans--aXdNw",
      {
        "auth_view--fullWidth--ffDfw": fullWidth,
        "landing_form--hollowButton--fo853 auth_view--brandButton--Le4wb auth_view--brandButtonBase--RAO-j auth_brand--figmaSans--aXdNw": use === "hollow",
        "landing_form--autoHeight--uHR-p": autoHeight,
      },
      className,
    )

    const isDisabled = disabled || loading

    return jsx(
      "button",
      {
        ...restProps,
        className: buttonClasses,
        disabled: isDisabled,
        children: loading
          ? jsx("div", {
              className: "landing_form--loadingIconCentered--qUt4Q",
              children: jsx(LoadingSpinner, {}),
            })
          : children,
      },
    )
  }
}

/**
 * Button component wrapped with tracking functionality
 * Original name: $$u1
 */
export const TrackedButton = withTrackedClick(landingFormButton)

interface TextInputProps {
  className?: string
  [key: string]: any
}

/**
 * TextInput component - A styled input field
 * Original name: TextInput
 */
export class LandingFormTextInput extends Component<TextInputProps> {
  static displayName = "TextInput"

  render() {
    const { className, ...restProps } = this.props

    const inputClasses = `landing_form--textInput--QhVAu landing_form--input--yxoaP ${className || ""}`

    return jsx(LazyInputForwardRef, {
      ...restProps,
      className: inputClasses,
    })
  }
}

// Export aliases for backward compatibility
export const Ak = landingFormButton
export const Q9 = TrackedButton
export const ks = LandingFormTextInput
