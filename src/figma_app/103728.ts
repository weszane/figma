import { jsx, Fragment } from "react/jsx-runtime";
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { useCallback } from "react";
import { qB } from "../905/862321";
import { B } from "../905/714743";
import { fu, $z } from "../figma_app/831799";
import { A } from "../figma_app/722506";
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
  return jsx(fu, {
    name: "community auth modal",
    properties: {
      source: r
    },
    children: jsx(_$$A, {
      className: loggedOutCommunityActionModal,
      onClick: i,
      children: jsx(A, {
        props: {
          headerText: e,
          icon: t
        },
        styles: p,
        Event: {
          onLogInClick: () => {
            FL(qB.SIGN_IN, {
              preventDefaultRedirect: !0
            });
          },
          onSignUpClick: () => {
            FL(qB.SIGN_UP, {
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
          BrandButton: e => jsx($z, {
            ...e,
            children: e.children
          }),
          ButtonSecondaryTracked: e => jsx($z, {
            ...e,
            children: e.children
          }),
          Svg: B
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