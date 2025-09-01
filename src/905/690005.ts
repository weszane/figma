import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { Ts } from "../905/194276";
import { qB } from "../905/862321";
import { s_ } from "../905/17223";
import { tM } from "../figma_app/637027";
import { Ak } from "../905/773401";
import { B } from "../905/714743";
import { to } from "../905/156213";
import { x as _$$x } from "../905/749159";
import { d_ } from "../figma_app/918700";
import { Ju } from "../905/102752";
import { A as _$$A } from "../figma_app/722506";
var n = {};
require.d(n, {
  communityModal: () => _,
  fullWidth: () => y,
  graphic: () => A,
  header: () => E,
  logInButton: () => I,
  primaryWideButton: () => v,
  subHeader: () => x,
  wideButton: () => b
});
let _ = "logged_out_community_modal--communityModal--Gm3U8";
let A = "logged_out_community_modal--graphic--UwG9-";
let y = "logged_out_community_modal--fullWidth--Dv6HD";
let b = "logged_out_community_modal--wideButton--a5SPb logged_out_community_modal--fullWidth--Dv6HD";
let v = "logged_out_community_modal--primaryWideButton--UOUdd logged_out_community_modal--wideButton--a5SPb logged_out_community_modal--fullWidth--Dv6HD";
let I = "logged_out_community_modal--logInButton--B-PK8 logged_out_community_modal--wideButton--a5SPb logged_out_community_modal--fullWidth--Dv6HD";
let E = "logged_out_community_modal--header--Jt85f text--fontPos22--4H4Fc text--_fontBase--QdLsd";
let x = "logged_out_community_modal--subHeader--R1-f6 text--fontPos16--oMC-G text--_fontBase--QdLsd";
class S extends Component {
  constructor() {
    super(...arguments);
    this.onLogInClick = () => {
      this.props.dispatch(Ts({
        origin: "community_hub_signed_out_top_bar",
        formState: qB.SIGN_IN,
        redirectUrl: this.props.redirectPath
      }));
      this.props.dispatch(to({
        type: _$$x,
        data: {
          headerText: " "
        }
      }));
    };
    this.onSignUpClick = () => {
      this.props.dispatch(Ts({
        origin: "community_hub_signed_out_top_bar",
        formState: qB.SIGN_UP
      }));
      this.props.dispatch(to({
        type: _$$x,
        data: {
          headerText: " "
        }
      }));
    };
  }
  render() {
    return jsx(d_, {
      className: _,
      children: jsx(_$$A, {
        styles: n,
        props: {
          icon: this.props.icon,
          dispatch: this.props.dispatch,
          headerText: this.props.headerText
        },
        Event: {
          onLogInClick: this.onLogInClick,
          onSignUpClick: this.onSignUpClick
        },
        Component: {
          ModalCloseButton: s_,
          BrandButton: Ak,
          ButtonSecondaryTracked: tM,
          Svg: B
        }
      })
    });
  }
}
S.displayName = "LoggedOutCommunityActionModal";
export let $$w0 = Ju(S, "LoggedOutCommunityActionModal");
export const l = $$w0;