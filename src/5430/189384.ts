import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, createRef, useState, useEffect } from "react";
import { wA, d4 } from "../vendor/514228";
import { N as _$$N } from "../figma_app/469468";
import { tx, t as _$$t } from "../905/303541";
import { lQ } from "../905/934246";
import { e as _$$e } from "../905/435763";
import { getFeatureFlags } from "../905/601108";
import { az } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { E as _$$E } from "../905/984674";
import { Q4 } from "../5132/642384";
import { _ as _$$_ } from "../905/456042";
import { A as _$$A } from "../5132/237216";
import { Ce, to } from "../905/156213";
import { X } from "../905/853613";
import { iZ } from "../905/372672";
import { Ju, ZU } from "../905/102752";
import { ey } from "../figma_app/918700";
import { sw, tW } from "../905/427932";
import { A as _$$A2 } from "../6828/718668";
import { A as _$$A3 } from "../svg/310324";
import { Rr, Cc } from "../5430/664984";
import { I as _$$I } from "../figma_app/4253";
import { QQ } from "../figma_app/808294";
import { X_, mA, lT } from "../figma_app/777551";
import { kz } from "../figma_app/427318";
import { YW } from "../figma_app/350203";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { cs } from "../figma_app/740025";
import { IE } from "../5430/231178";
import { TX } from "../figma_app/255679";
import { Ib } from "../905/129884";
import { F as _$$F } from "../5430/926195";
import { T as _$$T } from "../5132/203178";
import { Q } from "../5430/345616";
import { nu, uD } from "../5430/774694";
let L = "use_preset_options_modal--presetOptionsModal__optionText--BPEmi";
let T = "use_preset_options_modal--presetOptionsModal__chevron--dF5v3";
let E = Ju(function ({
  hubFile: e,
  inResourceHub: t
}) {
  let r = wA();
  let o = iZ();
  let j = _$$A(e, !1, !1, t);
  _$$h(() => {
    az.trackDefinedEvent("preset_libraries.preset_options_modal_displayed", {
      userId: o?.id,
      hubFileId: e.id,
      partnerType: X(e.library_key)
    });
  });
  let E = useCallback(() => {
    r(Ce());
  }, [r]);
  let S = useCallback(() => {
    E();
    az.trackDefinedEvent("preset_libraries.preset_options_modal_option_clicked", {
      userId: o?.id,
      hubFileId: e.id,
      partnerType: X(e.library_key),
      option: "cancel"
    });
  }, [E, e, o]);
  let R = useCallback(() => {
    let s = Q4(e => {
      r(to({
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
    az.trackDefinedEvent("preset_libraries.preset_options_modal_option_clicked", {
      userId: o?.id,
      hubFileId: e.id,
      partnerType: X(e.library_key),
      option: "show_in_figma"
    });
  }, [r, E, e, o, t]);
  let k = useCallback(() => {
    E();
    j();
    az.trackDefinedEvent("preset_libraries.preset_options_modal_option_clicked", {
      userId: o?.id,
      hubFileId: e.id,
      partnerType: X(e.library_key),
      option: "make_a_copy"
    });
  }, [E, e, o, j]);
  return jsxs(ey, {
    hide: lQ,
    disableClickOutsideToHide: !0,
    className: "use_preset_options_modal--presetOptionsModal--MPCAv",
    children: [jsx("div", {
      className: "use_preset_options_modal--presetOptionsModal__header--7Ul9l",
      children: jsx(_$$E, {
        fontWeight: "medium",
        fontSize: 20,
        children: tx("community.preset_modal.header")
      })
    }), jsx("div", {
      className: "use_preset_options_modal--presetOptionsModal__description--GD8wZ",
      children: jsx(_$$E, {
        fontSize: 13,
        children: tx("community.preset_modal.description")
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
          children: jsx(_$$E, {
            fontSize: 13,
            children: getFeatureFlags().cmty_preset_modal_revised_copy ? tx("community.preset_modal.use_ui_kit_in_a_new_file") : tx("community.preset_modal.show_in_figma")
          })
        }), jsx(_$$B, {
          className: T,
          svg: _$$A2
        })]
      }), jsxs("button", {
        className: tW,
        onClick: k,
        children: [jsx(_$$B, {
          svg: _$$A3,
          className: "use_preset_options_modal--presetOptionsModal__copyIcon--OFXiM"
        }), jsx("div", {
          className: L,
          children: jsx(_$$E, {
            fontSize: 13,
            children: getFeatureFlags().cmty_preset_modal_revised_copy ? tx("community.preset_modal.make_a_copy_of_this_file") : tx("community.preset_modal.make_a_copy")
          })
        }), jsx(_$$B, {
          className: T,
          svg: _$$A2
        })]
      })]
    }), jsx("button", {
      className: "use_preset_options_modal--presetOptionsModal__cancel--vne9o text--fontPos13--xW8hS text--_fontBase--QdLsd",
      onClick: S,
      children: _$$t("community.try.pick_workspace.cancel")
    })]
  });
}, "USE_PRESET_OPTIONS_MODAL_TYPE", ZU.YES);
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
  let c = wA();
  let [d, u] = useState(!1);
  let m = d4(e => cs(e.authedActiveCommunityProfile));
  let _ = d4(e => e.userFlags).apple_eula_accepted;
  let p = d4(e => !!e.modalShown);
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
      TX(e.id) && f && !j ? c(to({
        type: E,
        data: {
          hubFile: e,
          inResourceHub: b
        }
      })) : v();
    };
    mA(e) && !_ ? c(to({
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
    lT(e) ? t = _$$t("community.resource.admin_blocked_resource_banner.this_resource_is_blocked") : m && (t = _$$t("community.duplicate.to_duplicate_switch_to_your_personal_profile"));
    return jsx("div", {
      "data-tooltip-type": Ib.TEXT,
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
  }) => jsx(fu, {
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
  }))(QQ(h) ? {
    buttonText: tx("community.duplicate.open"),
    onClick: L
  } : {
    buttonText: w,
    onClick: L
  });
}
export const U = $$Q0;