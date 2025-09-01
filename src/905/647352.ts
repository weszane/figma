import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, useRef } from "react";
import { wA, d4 } from "../vendor/514228";
import { $n } from "../905/521428";
import o from "classnames";
import { R as _$$R } from "../905/103090";
import { Yx } from "../figma_app/930338";
import { NG } from "../figma_app/709893";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { Jl } from "../figma_app/80990";
import { w5 } from "../figma_app/345997";
import { cM, MH, dM } from "../figma_app/803787";
import { Ib } from "../905/129884";
import { ND } from "../figma_app/76115";
import { J } from "../905/270045";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { az } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { sb } from "../figma_app/519839";
import { JT } from "../figma_app/173838";
import { q5 } from "../figma_app/516028";
import { o as _$$o } from "../figma_app/633080";
import { Ju } from "../905/102752";
import { pz } from "../figma_app/825489";
import { U as _$$U } from "../905/29665";
import { T as _$$T } from "../905/485734";
import { t as _$$t2 } from "../905/340158";
import { yX } from "../figma_app/918700";
import { x as _$$x } from "../905/209285";
import { I as _$$I } from "../905/266213";
import { er, sz } from "../905/753512";
import { m3, hx } from "../905/66449";
import { RR } from "../905/514666";
var l = o;
function O() {
  return jsx(_$$T, {
    noMargin: !0,
    text: tx("design_systems.internal_community_unpublish_warning")
  });
}
let F = "confirm_unpublish_modal--modalContent--gX17Y modal--modalContent--P643j";
let M = Ju(function ({
  libraryModalSessionId: e
}) {
  let t = wA();
  let i = q5();
  let r = md(pz);
  let s = md(_$$t2);
  let o = JT();
  _$$h(() => {
    az.trackDefinedEvent("design_systems_modals.unpublish_modal_opened", {
      libraryModalSessionId: e,
      orgId: i?.parentOrgId ?? void 0,
      fileKey: i?.key,
      teamId: i?.teamId ?? void 0,
      workspaceId: i?.team?.workspaceId ?? void 0
    });
  });
  let l = "loading" === s.status;
  return jsx(yX, {
    disableConfirm: l,
    onConfirm: () => t(sb({
      localAssetsWithDenormalizedPublishInfo: s.data ?? {},
      hubFileId: getFeatureFlags().cmty_lib_admin_publish && r === _$$o.HUBFILE && o ? o.id : void 0
    })),
    confirmText: _$$t("design_systems.libraries_modal.remove_library"),
    confirmationTitle: _$$t("design_systems.libraries_modal.remove_library_modal_title"),
    children: getFeatureFlags().cmty_lib_admin_publish && o ? jsxs("div", {
      className: F,
      children: [jsx("div", {
        className: _$$s.mb8.$,
        children: tx("design_systems.libraries_modal.this_action_will_remove_all_of_the_components_in_this_file_from_the_library")
      }), jsx(_$$U, {
        label: jsx(J, {
          children: tx("design_systems.internal_community_library_unpublish")
        })
      }), r === _$$o.HUBFILE && jsx(O, {})]
    }) : jsx("div", {
      className: F,
      children: tx("design_systems.libraries_modal.this_action_will_remove_all_of_the_components_in_this_file_from_the_library")
    })
  });
}, "ConfirmUnpublishModal");
let z = "subscription_file_view_footer--fileViewFooterButtons--qrfWL";
let H = "subscription_file_view_footer--fileViewFooterButton--I2olA";
export function $$W0(e) {
  let t = er();
  let {
    sessionId
  } = sz() ?? {};
  let {
    teams,
    localStyles,
    localComponents,
    localStateGroups
  } = _$$R(e => ({
    teams: e.teams,
    localStyles: cM(e),
    localComponents: MH(e),
    localStateGroups: dM(e)
  }));
  let E = d4(e => e.mirror.appModel.isReadOnly);
  let x = !!e.editingFile && e.editingFile.library_key === e.libraryKey;
  let S = useMemo(() => ND(localStyles), [localStyles]);
  let w = useMemo(() => ND(Jl(localComponents)), [localComponents]);
  let C = useMemo(() => ND(localStateGroups), [localStateGroups]);
  let T = wA();
  let k = useCallback(() => {
    T(to({
      type: M,
      data: {
        libraryModalSessionId: sessionId
      }
    }));
  }, [T, sessionId]);
  let R = function (e, t) {
    let i;
    let n = _$$t("design_systems.libraries_modal.plural.num_component", {
      numComponents: e
    });
    let r = _$$t("design_systems.libraries_modal.plural.num_style", {
      numStyles: t
    });
    if (e > 0 && t > 0) i = Yx([n, r], "unit");else if (e > 0) i = n;else {
      if (!(t > 0)) return "";
      i = r;
    }
    let a = _$$t("design_systems.libraries_modal.used_in_this_file");
    return _$$t("design_systems.libraries_modal.num_assets_used_in_this_file", {
      assetsCountString: i,
      usedInThisFileString: a
    });
  }(e.numUsedComponents, e.numUsedStyles);
  let N = useRef(null);
  let P = NG({
    text: R,
    textRef: N
  });
  let O = l()("subscription_file_view_footer--fileViewFooter--eE0gh file_view_styles--fileViewFooter--y5O8t", {
    "subscription_file_view_footer--footerRedesign--QtVTm": t
  });
  if (!x) return jsxs("div", {
    className: O,
    children: [jsx("div", {
      className: "subscription_file_view_footer--footerTextWithEllipsis--ocx7T ellipsis--ellipsis--Tjyfa",
      ref: N,
      "data-tooltip-type": P && Ib.TEXT,
      "data-tooltip": R,
      "data-tooltip-max-width": 340,
      "data-tooltip-show-immediately": !0,
      children: R
    }), jsxs("div", {
      className: z,
      children: [jsx(_$$x, {
        libraryKey: e.libraryKey
      }), t ? jsx(K, {
        onClick: e.onRemapLibraryClick,
        variant: "secondary",
        kbPath: [m3.TabBodySection.Footer],
        kbColumn: 2,
        children: tx("design_systems.libraries_modal.swap_library")
      }) : jsx("div", {
        className: H,
        children: jsx($n, {
          variant: "secondary",
          recordingKey: "subscriptionFileView.swapLibrary",
          onClick: e.onRemapLibraryClick,
          children: tx("design_systems.libraries_modal.swap_library")
        })
      })]
    })]
  });
  {
    var D;
    let r = S.numUpdates;
    let a = e.editingFile.team_id && teams[e.editingFile.team_id] || null;
    w5(a) && (r += w.numUpdates + C.numUpdates);
    let l = (D = r) > 0 ? tx("design_systems.libraries_modal.current_file_has_x_changes", {
      numChangesText: jsx("div", {
        className: _$$s.fontSemiBold.$,
        children: tx("design_systems.libraries_modal.x_changes", {
          numChanges: D
        })
      })
    }) : _$$t("design_systems.libraries_modal.current_file_is_published");
    return jsxs("div", {
      className: O,
      children: [jsx("div", {
        className: "subscription_file_view_footer--fileViewFooterText--Qn9-M",
        children: l
      }), jsxs("div", {
        className: z,
        children: [t ? jsx(K, {
          disabled: E,
          onClick: k,
          variant: "secondary",
          kbPath: [m3.TabBodySection.Footer],
          kbColumn: 1,
          children: tx("design_systems.libraries_modal.unpublish")
        }) : jsx("div", {
          className: H,
          children: jsx($n, {
            variant: "secondary",
            disabled: E,
            onClick: k,
            children: tx("design_systems.libraries_modal.unpublish")
          })
        }), jsx("div", {
          className: H,
          children: jsx(_$$I, {
            entryPoint: RR.LIBRARY_MODAL_FILE_VIEW,
            publishedState: jsx($n, {
              variant: "primary",
              disabled: !0,
              children: tx("design_systems.libraries_modal.publish_changes")
            }),
            emptyState: jsx($n, {
              variant: "primary",
              disabled: !0,
              children: tx("design_systems.libraries_modal.publish_changes")
            }),
            libraryModalSessionId: sessionId
          })
        })]
      })]
    });
  }
}
function K({
  disabled: e,
  onClick: t,
  variant: i,
  kbPath: r,
  kbColumn: a,
  children: o
}) {
  let {
    setKeyboardNavigationElement
  } = hx({
    path: r,
    column: a
  });
  return jsx("div", {
    className: _$$s.ml6.$,
    children: jsx($n, {
      variant: i,
      disabled: e,
      onClick: t,
      ref: setKeyboardNavigationElement,
      children: o
    })
  });
}
export const G = $$W0;