import { registerModal } from "../905/102752";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { trackEventAnalytics } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { getI18nString, renderI18nText } from "../905/303541";
import { e as _$$e } from "../905/579755";
import { V6 } from "../figma_app/487970";
import { Dl } from "../figma_app/471982";
import { V4, QQ } from "../figma_app/808294";
import { c as _$$c } from "../figma_app/11961";
import { G } from "../905/11536";
import { KindEnum } from "../905/129884";
import { C as _$$C } from "../905/180";
import A from "classnames";
import { SvgComponent } from "../905/714743";
import { YE, Aq, sw, tW, pV, a_, Bi, iG, z_, lf, dS } from "../905/427932";
import { A as _$$A } from "../6828/718668";
import { A as _$$A2 } from "../figma_app/122760";
import { workspaceTitleWrapper, avatar, genericSelectorModal, genericSelectorInner, genericSelectorModalCancel } from "../figma_app/727769";
import { hideModal } from "../905/156213";
var y = A;
function E(e) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: YE,
      children: e.title
    }), jsx("div", {
      className: Aq,
      children: e.description
    }), jsx("div", {
      className: sw,
      children: e.options.map(e => {
        let t = !!e.disabledText;
        return jsxs("button", {
          className: tW,
          onClick: t => {
            t.stopPropagation();
            e.onClick();
          },
          disabled: t,
          children: [jsx("div", {
            className: y()({
              [pV]: !0,
              [a_]: t
            }),
            children: e.Avatar
          }), jsxs("div", {
            className: Bi,
            children: [jsx("span", {
              className: iG,
              children: e.title
            }), jsx("span", {
              className: z_,
              children: e.description
            })]
          }), e.disabledText ? jsx("div", {
            className: lf,
            "data-tooltip": e.disabledText.tooltipText,
            "data-tooltip-type": KindEnum.TEXT,
            children: e.disabledText.displayText
          }) : jsx(SvgComponent, {
            className: dS,
            svg: _$$A
          })]
        }, e.id);
      })
    })]
  });
}
function w(e) {
  let t = useSelector(e => e.authedActiveCommunityProfile);
  let i = useSelector(e => e.authedUsers);
  let [o, p] = useState({});
  _$$h(() => {
    _$$C.getBuyerAssociatedPurchases({
      id: e.resource.monetized_resource_metadata.id
    }).then(e => {
      p(e.data.meta);
    }).catch(() => {});
  });
  let A = useMemo(() => G({
    authedActiveCommunityProfile: t,
    authedUsers: i
  }), [t, i]);
  let {
    usersCanPurchase,
    publishers
  } = useMemo(() => V4(A, e.resource), [A, e.resource]);
  let v = usersCanPurchase.map(i => {
    let r = o[i.id] && QQ(o[i.id]);
    return {
      id: i.id,
      title: jsxs("div", {
        className: workspaceTitleWrapper,
        children: [i.name, !_$$c(t) && r && jsx("div", {
          "data-tooltip": getI18nString("community.buyer.this_account_has_already_purchased"),
          "data-tooltip-type": KindEnum.TEXT,
          children: jsx(V6, {})
        })]
      }),
      Avatar: jsx(_$$e, {
        entity: i,
        adtlClassName: avatar
      }),
      description: i.email,
      onClick: () => {
        r || e.onUserSelect(i);
      },
      disabledText: r ? {
        displayText: ""
      } : void 0
    };
  });
  v = v.concat(publishers.map(e => ({
    id: e.id,
    title: e.name,
    Avatar: jsx(_$$e, {
      entity: e,
      adtlClassName: avatar
    }),
    description: e.email,
    onClick: lQ,
    disabledText: {
      displayText: getI18nString("community.try.not_allowed"),
      tooltipText: getI18nString("community.buyer.user_is_a_publisher")
    }
  })));
  return jsx(E, {
    title: getI18nString("community.buyer.confirm_account"),
    description: getI18nString("community.buyer.this_resource_will_only_be_accesible"),
    options: v
  });
}
export let $$T0 = registerModal(function (e) {
  let t = useDispatch();
  let i = useCallback(() => {
    t(hideModal());
  }, [t]);
  let s = useMemo(() => function (e) {
    _$$h(() => {
      trackEventAnalytics("Pre Purchase User Selector Modal - Opened", {
        resourceType: Dl(e.resource),
        resourceId: e.resource.id
      });
    });
    return jsx(_$$A2, {
      className: genericSelectorModal,
      onCloseModal: i,
      children: jsxs("div", {
        className: genericSelectorInner,
        children: [jsx(w, {
          onUserSelect: e.onUserSelect,
          resource: e.resource
        }), jsx("button", {
          className: genericSelectorModalCancel,
          onClick: i,
          children: renderI18nText("community.try.pick_workspace.cancel")
        })]
      })
    });
  }, [i]);
  return jsx(s, {
    onUserSelect: e.onUserSelect,
    resource: e.resource
  });
}, "PrePurchaseUserSelectorModal");
export const I = $$T0;