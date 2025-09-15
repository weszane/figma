import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, createRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { N as _$$N } from "../figma_app/469468";
import { renderI18nText, getI18nString } from "../905/303541";
import { lQ } from "../905/934246";
import { e as _$$e } from "../905/435763";
import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { TextWithTruncation } from "../905/984674";
import { Q4 } from "../5132/642384";
import { _ as _$$_ } from "../905/456042";
import { A as _$$A } from "../5132/237216";
import { hideModal, showModalHandler } from "../905/156213";
import { X } from "../905/853613";
import { selectCurrentUser } from "../905/372672";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { ModalView } from "../figma_app/918700";
import { sw, tW } from "../905/427932";
import { A as _$$A2 } from "../6828/718668";
import { A as _$$A3 } from "../svg/310324";
import { Rr, Cc } from "../5430/664984";
import { I as _$$I } from "../figma_app/4253";
import { isSubscriptionActive } from "../figma_app/808294";
import { X_, mA, lT } from "../figma_app/777551";
import { kz } from "../figma_app/427318";
import { YW } from "../figma_app/350203";
import { c as _$$c } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { cs } from "../figma_app/740025";
import { IE } from "../5430/231178";
import { TX } from "../figma_app/255679";
import { KindEnum } from "../905/129884";
import { F as _$$F } from "../5430/926195";
import { T as _$$T } from "../5132/203178";
import { Q } from "../5430/345616";
import { nu, uD } from "../5430/774694";
let L = "use_preset_options_modal--presetOptionsModal__optionText--BPEmi";
let T = "use_preset_options_modal--presetOptionsModal__chevron--dF5v3";
let E = registerModal(function ({
  hubFile: e,
  inResourceHub: t
}) {
  let r = useDispatch();
  let o = selectCurrentUser();
  let j = _$$A(e, !1, !1, t);
  _$$h(() => {
    analyticsEventManager.trackDefinedEvent("preset_libraries.preset_options_modal_displayed", {
      userId: o?.id,
      hubFileId: e.id,
      partnerType: X(e.library_key)
    });
  });
  let E = useCallback(() => {
    r(hideModal());
  }, [r]);
  let S = useCallback(() => {
    E();
    analyticsEventManager.trackDefinedEvent("preset_libraries.preset_options_modal_option_clicked", {
      userId: o?.id,
      hubFileId: e.id,
      partnerType: X(e.library_key),
      option: "cancel"
    });
  }, [E, e, o]);
  let R = useCallback(() => {
    let s = Q4(e => {
      r(showModalHandler({
        type: _$$_,
        data: {
          payload: e
        }
      }));
    }, {
      skipWorkspaceSelection: t,
      userId: o?.id
    });
    E();
    r(s(e));
    analyticsEventManager.trackDefinedEvent("preset_libraries.preset_options_modal_option_clicked", {
      userId: o?.id,
      hubFileId: e.id,
      partnerType: X(e.library_key),
      option: "show_in_figma"
    });
  }, [r, E, e, o, t]);
  let k = useCallback(() => {
    E();
    j();
    analyticsEventManager.trackDefinedEvent("preset_libraries.preset_options_modal_option_clicked", {
      userId: o?.id,
      hubFileId: e.id,
      partnerType: X(e.library_key),
      option: "make_a_copy"
    });
  }, [E, e, o, j]);
  return jsxs(ModalView, {
    hide: lQ,
    disableClickOutsideToHide: !0,
    className: "use_preset_options_modal--presetOptionsModal--MPCAv",
    children: [jsx("div", {
      className: "use_preset_options_modal--presetOptionsModal__header--7Ul9l",
      children: jsx(TextWithTruncation, {
        fontWeight: "medium",
        fontSize: 20,
        children: renderI18nText("community.preset_modal.header")
      })
    }), jsx("div", {
      className: "use_preset_options_modal--presetOptionsModal__description--GD8wZ",
      children: jsx(TextWithTruncation, {
        fontSize: 13,
        children: renderI18nText("community.preset_modal.description")
      })
    }), jsxs("div", {
      className: sw,
      children: [jsxs("button", {
        className: tW,
        onClick: R,
        children: [jsx("div", {
          className: _$$s.pl12.pr12.$,
          children: jsx(_$$e, {})
        }), jsx("div", {
          className: L,
          children: jsx(TextWithTruncation, {
            fontSize: 13,
            children: getFeatureFlags().cmty_preset_modal_revised_copy ? renderI18nText("community.preset_modal.use_ui_kit_in_a_new_file") : renderI18nText("community.preset_modal.show_in_figma")
          })
        }), jsx(SvgComponent, {
          className: T,
          svg: _$$A2
        })]
      }), jsxs("button", {
        className: tW,
        onClick: k,
        children: [jsx(SvgComponent, {
          svg: _$$A3,
          className: "use_preset_options_modal--presetOptionsModal__copyIcon--OFXiM"
        }), jsx("div", {
          className: L,
          children: jsx(TextWithTruncation, {
            fontSize: 13,
            children: getFeatureFlags().cmty_preset_modal_revised_copy ? renderI18nText("community.preset_modal.make_a_copy_of_this_file") : renderI18nText("community.preset_modal.make_a_copy")
          })
        }), jsx(SvgComponent, {
          className: T,
          svg: _$$A2
        })]
      })]
    }), jsx("button", {
      className: "use_preset_options_modal--presetOptionsModal__cancel--vne9o text--fontPos13--xW8hS text--_fontBase--QdLsd",
      onClick: S,
      children: getI18nString("community.try.pick_workspace.cancel")
    })]
  });
}, "USE_PRESET_OPTIONS_MODAL_TYPE", ModalSupportsBackground.YES);
function z({
  text: e
}) {
  return jsx("div", {
    className: nu,
    "data-testid": "disabled-duplicate-button",
    children: jsx("div", {
      className: uD,
      children: e
    })
  });
}
export function $$Q0({
  hubFile: e,
  resourceType: t,
  enableWideButtonForStickyFooter: r
}) {
  let l = createRef();
  let c = useDispatch();
  let [d, u] = useState(!1);
  let m = useSelector(e => cs(e.authedActiveCommunityProfile));
  let _ = useSelector(e => e.userFlags).apple_eula_accepted;
  let p = useSelector(e => !!e.modalShown);
  useEffect(() => {
    p && u(!1);
  }, [p]);
  let h = _$$I(e);
  let x = IE(e);
  let f = Rr(c);
  let v = _$$A(e);
  let b = _$$T();
  let j = _$$N(`(max-width: ${YW}px)`);
  let w = X_(t);
  let {
    isDisabled
  } = Cc(t);
  let L = useCallback(() => {
    u(!0);
    let t = () => {
      TX(e.id) && f && !j ? c(showModalHandler({
        type: E,
        data: {
          hubFile: e,
          inResourceHub: b
        }
      })) : v();
    };
    mA(e) && !_ ? c(showModalHandler({
      type: _$$F,
      data: {
        hubFileId: e.id,
        onUseHubFile: t,
        inResourceHub: b
      }
    })) : t();
  }, [c, e, _, f, j, v, b]);
  if (m || lT(e)) {
    let t;
    lT(e) ? t = getI18nString("community.resource.admin_blocked_resource_banner.this_resource_is_blocked") : m && (t = getI18nString("community.duplicate.to_duplicate_switch_to_your_personal_profile"));
    return jsx("div", {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": t,
      "data-tooltip-show-immediately": !0,
      children: jsx(z, {
        text: w
      })
    });
  }
  return isDisabled ? jsx(z, {
    text: w
  }) : (({
    buttonText: e,
    onClick: i
  }) => jsx(TrackingProvider, {
    name: "Duplicate button",
    properties: {
      trackingDescriptor: _$$c.HUB_FILE_DUPLICATE_BUTTON,
      ...x
    },
    children: jsx("div", {
      ref: l,
      children: jsx(Q, {
        buttonText: e,
        onClick: i,
        useNoIconStyle: !0,
        editorType: kz(t),
        enableWideButtonForStickyFooter: r,
        isLoading: d
      })
    })
  }))(isSubscriptionActive(h) ? {
    buttonText: renderI18nText("community.duplicate.open"),
    onClick: L
  } : {
    buttonText: w,
    onClick: L
  });
}
export const U = $$Q0;