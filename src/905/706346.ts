import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { E } from "../905/632989";
import { UI3ConditionalWrapper } from "../905/341359";
import { renderI18nText } from "../905/303541";
import { hideModalHandler } from "../905/156213";
import { fu } from "../figma_app/831799";
import { e0 } from "../905/696396";
import { registerModal } from "../905/102752";
import { Rj, RR, jJ, b_, _s, HE, Y1 } from "../905/820658";
export let $$f0 = registerModal(function (e) {
  let t = useDispatch();
  let i = () => {
    t(hideModalHandler());
  };
  let h = useModalManager({
    ...e,
    onClose: i
  });
  return jsx(UI3ConditionalWrapper, {
    children: jsx(fu, {
      name: e0.COMMUNITY_REDIRECT_THIRD_PARTY_PLUGIN_MODAL,
      children: jsx(bL, {
        manager: h,
        width: 440,
        children: jsx(vo, {
          children: jsx(nB, {
            children: jsxs("div", {
              className: Rj,
              children: [jsx("div", {
                className: RR,
                children: renderI18nText("community.detail_view.this_plugin_requires_third_party_payment_if_you_decide_to_upgrade")
              }), jsx("div", {
                className: jJ,
                children: renderI18nText("community.detail_view.you_ll_need_to_work_directly_with_this_provider_to_handle_any_issues_or_refunds")
              }), jsx(E, {
                onClick: e.onContinue,
                className: b_,
                children: jsx("span", {
                  className: _s,
                  children: renderI18nText("community.detail_view.continue")
                })
              }), jsx(E, {
                className: HE,
                onClick: i,
                children: jsx("span", {
                  className: Y1,
                  children: renderI18nText("community.detail_view.go_back")
                })
              })]
            })
          })
        })
      })
    })
  });
});
export const t = $$f0;