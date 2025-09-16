import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { r as _$$r } from "../905/520829";
import { Spacing } from "../figma_app/637027";
import { X } from "../9420/381913";
import { O } from "../9420/998877";
import { o as _$$o } from "../c5e2cae0/371580";
import { x as _$$x } from "../905/211326";
import { JR } from "../9420/975542";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { d as _$$d } from "../c5e2cae0/841217";
import { J } from "../9420/278106";
import { selectViewAction } from "../905/929976";
import { Az, js, Nj } from "../figma_app/482142";
import { Xw } from "../905/584989";
import { TrackingProvider } from "../figma_app/831799";
import { getUserCurrency } from "../figma_app/514043";
import { A } from "../svg/821527";
let N = e => {
  let t = useSelector(t => {
    let a = Xw.loadingKeyForPayload({
      teamId: e
    });
    return t.loadingState[a];
  });
  let a = useSelector(t => t.teamUserByTeamId[e] || {});
  let s = useDispatch();
  useEffect(() => {
    s(Xw({
      teamId: e
    }));
  }, [s, e]);
  let n = t !== _$$r.SUCCESS;
  useEffect(() => {
    if (!n) {
      let e = Object.keys(a).length;
      s(Az({
        numWhiteboardEditors: e
      }));
      s(js({
        numDesignEditors: e
      }));
    }
  }, [s, n, a]);
  return n;
};
export function $$b0({
  selectedView: e
}) {
  let {
    teamId
  } = e;
  let a = N(teamId);
  let r = useDispatch();
  let l = () => {
    r(Nj({
      teamId,
      onCloseOrComplete: e.onCloseOrComplete
    }));
  };
  return jsx(TrackingProvider, {
    name: "Edu Review",
    properties: {
      teamId
    },
    children: jsx("div", {
      children: jsxs(O, {
        menu: jsx(X, {
          onClick: () => {
            r(selectViewAction({
              view: "team",
              teamId
            }));
            e.onCloseOrComplete?.();
          },
          children: jsx(SvgComponent, {
            svg: A,
            className: "edu_review--modalCloseX--PeJlf",
            dataTestId: "close-button"
          })
        }),
        children: [jsx("span", {
          className: e.showBreadcrumbs ? void 0 : "edu_review--hidden--p1Flp",
          children: jsx(J, {
            index: 3
          })
        }), jsxs("div", {
          className: _$$s.flex.flexColumn.itemsCenter.alignCenter.$,
          children: [jsx(JR, {
            children: renderI18nText("edu.almost_done_everything_look_good")
          }), jsx(Spacing, {
            multiple: 4
          }), jsx(_$$x, {
            isLoading: a,
            children: () => jsx(_$$o, {
              children: jsx(_$$d, {
                selectedView: e,
                onClickConfirm: l,
                currency: getUserCurrency(),
                canSeeBillingAddressExp: !1
              })
            })
          })]
        })]
      })
    })
  });
}
export const EduReviewPage = $$b0;