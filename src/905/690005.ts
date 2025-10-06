import { Component } from "react"
import { jsx } from "react/jsx-runtime"
import { ModalCloseButton } from "../905/17223"
import { registerModal } from "../905/102752"
import { showModalHandler } from "../905/156213"
import { AUTH_INIT } from "../905/194276"
import { SvgComponent } from "../905/714743"
import { AuthModal } from "../905/749159"
import { landingFormButton } from "../905/773401"
import { AuthFlowStep } from "../905/862321"
import { ButtonSecondaryTracked } from "../figma_app/637027"
import { SignedOutSignUpModal } from "../figma_app/722506"
import { ModalContainer } from "../figma_app/918700"

let _ = "logged_out_community_modal--communityModal--Gm3U8"
let A = "logged_out_community_modal--graphic--UwG9-"
let y = "logged_out_community_modal--fullWidth--Dv6HD"
let b = "logged_out_community_modal--wideButton--a5SPb logged_out_community_modal--fullWidth--Dv6HD"
let v = "logged_out_community_modal--primaryWideButton--UOUdd logged_out_community_modal--wideButton--a5SPb logged_out_community_modal--fullWidth--Dv6HD"
let I = "logged_out_community_modal--logInButton--B-PK8 logged_out_community_modal--wideButton--a5SPb logged_out_community_modal--fullWidth--Dv6HD"
let E = "logged_out_community_modal--header--Jt85f text--fontPos22--4H4Fc text--_fontBase--QdLsd"
let x = "logged_out_community_modal--subHeader--R1-f6 text--fontPos16--oMC-G text--_fontBase--QdLsd"
let n = {
  communityModal: _,
  fullWidth: y,
  graphic: A,
  header: E,
  logInButton: I,
  primaryWideButton: v,
  subHeader: x,
  wideButton: b,
}
interface LoggedOutCommunityActionModalProps {
  dispatch: (action: any) => void
  redirectPath?: string
  icon?: any
  headerText?: string
}

interface LoggedOutCommunityActionModalState { }

/**
 * Modal component for logged out community actions.
 * Handles login and signup flows for community hub users.
 * @component
 */
class LoggedOutCommunityActionModal extends Component<LoggedOutCommunityActionModalProps, LoggedOutCommunityActionModalState> {
  static displayName = "LoggedOutCommunityActionModal"

  /**
   * Handle login button click event
   * Initializes auth flow for sign in and shows auth modal
   */
  readonly onLogInClick = (): void => {
    const { dispatch, redirectPath } = this.props

    dispatch(AUTH_INIT({
      origin: "community_hub_signed_out_top_bar",
      formState: AuthFlowStep.SIGN_IN,
      redirectUrl: redirectPath,
    }))

    dispatch(showModalHandler({
      type: AuthModal,
      data: {
        headerText: " ",
      },
    }))
  }

  /**
   * Handle signup button click event
   * Initializes auth flow for sign up and shows auth modal
   */
  readonly onSignUpClick = (): void => {
    const { dispatch } = this.props

    dispatch(AUTH_INIT({
      origin: "community_hub_signed_out_top_bar",
      formState: AuthFlowStep.SIGN_UP,
    }))

    dispatch(showModalHandler({
      type: AuthModal,
      data: {
        headerText: " ",
      },
    }))
  }

  render(): JSX.Element {
    const { icon, dispatch, headerText } = this.props

    return jsx(ModalContainer, {
      className: _,
      children: jsx(SignedOutSignUpModal, {
        styles: n,
        props: {
          icon,
          dispatch,
          headerText,
        },
        Event: {
          onLogInClick: this.onLogInClick,
          onSignUpClick: this.onSignUpClick,
        },
        Component: {
          ModalCloseButton,
          BrandButton: landingFormButton,
          ButtonSecondaryTracked,
          Svg: SvgComponent,
        },
      }),
    })
  }
}
export let registerLoggedOutCommunityActionModal = registerModal(LoggedOutCommunityActionModal, "LoggedOutCommunityActionModal")
export const l = registerLoggedOutCommunityActionModal
