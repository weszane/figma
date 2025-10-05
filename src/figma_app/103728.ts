import { jsx, Fragment } from "react/jsx-runtime";
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { useCallback } from "react";
import { AuthFlowStep } from "../905/862321";
import { SvgComponent } from "../905/714743";
import { TrackingProvider, TrackedButton } from "../figma_app/831799";
import { SignedOutSignUpModal } from "../figma_app/722506";
import { FL } from "../figma_app/248365";
import { A as _$$A } from "../figma_app/122760";
import p, { loggedOutCommunityActionModal, modalCloseButton } from "../figma_app/727769";
function _({
  headerText: e,
  icon: t,
  source: r
}) {
  let i = useCallback(() => {
    $$m1();
  }, []);
  return jsx(TrackingProvider, {
    name: "community auth modal",
    properties: {
      source: r
    },
    children: jsx(_$$A, {
      className: loggedOutCommunityActionModal,
      onClick: i,
      children: jsx(SignedOutSignUpModal, {
        props: {
          headerText: e,
          icon: t
        },
        styles: p,
        Event: {
          onLogInClick: () => {
            FL(AuthFlowStep.SIGN_IN, {
              preventDefaultRedirect: !0
            });
          },
          onSignUpClick: () => {
            FL(AuthFlowStep.SIGN_UP, {
              preventDefaultRedirect: !0
            });
          }
        },
        Component: {
          ModalCloseButton: () => jsx("button", {
            className: modalCloseButton,
            onClick: i,
            children: "\xd7"
          }),
          BrandButton: e => jsx(TrackedButton, {
            ...e,
            children: e.children
          }),
          ButtonSecondaryTracked: e => jsx(TrackedButton, {
            ...e,
            children: e.children
          }),
          Svg: SvgComponent
        }
      })
    })
  });
}
let h = atom(null);
export function $$m1() {
  atomStoreManager.set(h, null);
}
export function $$g0() {
  let e = useAtomWithSubscription(h);
  if (null === e) return jsx(Fragment, {});
  let {
    type,
    data
  } = e;
  return "COMMUNITY_AUTH_MODAL" === type ? jsx(_, {
    headerText: data.headerText,
    icon: data.icon,
    source: data.source
  }) : jsx(Fragment, {});
}
export const Ay = $$g0;
export const fW = $$m1;