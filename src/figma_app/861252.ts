import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { noop } from 'lodash-es';
import { U1 } from "../figma_app/343967";
import { AppStateTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useSetAtom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import u from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { selectWithShallowEqual } from "../905/103090";
import { gs } from "../figma_app/624706";
import { EventShield } from "../905/821217";
import { ButtonPrimitive } from "../905/632989";
import { x as _$$x } from "../905/587214";
import { f as _$$f } from "../905/335032";
import { generateRecordingKey } from "../figma_app/878298";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { Zr } from "../figma_app/678782";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { KindEnum } from "../905/129884";
import { q as _$$q } from "../figma_app/57000";
import { consentCounterAtom } from "../905/18800";
import { isMobileCommunity } from "../figma_app/471982";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { U as _$$U } from "../905/492359";
import { S as _$$S } from "../5132/724052";
import { customHistory } from "../905/612521";
import { m as _$$m } from "../figma_app/694193";
import { useCanUseDevModeDemoFile } from "../figma_app/473493";
import { isSitesFileType, isDesignFileType } from "../figma_app/976749";
import { Yk } from "../figma_app/644079";
import { getVisibleTheme } from "../905/640017";
import { getSelectedFile } from "../905/766303";
import { isHelpWidgetHidden } from "../figma_app/740163";
import { fullscreenAlias } from "../905/37051";
import { getSelectedView } from "../figma_app/386952";
import { getObservableValue } from "../figma_app/84367";
import { hasOrgUsersForUser } from "../figma_app/951233";
import { getFilteredTeamMembers } from "../figma_app/598018";
import { m as _$$m2 } from "../905/99004";
import { x as _$$x2 } from "../905/106997";
import { C as _$$C } from "../figma_app/859828";
import { S as _$$S2 } from "../5132/525530";
import { WithTrackedPopupButtonPrimitive } from "../figma_app/617427";
import { UpgradeAction } from "../905/370443";
import { gh } from "../figma_app/598952";
import { Px, Bl, go, HO, aN } from "../figma_app/57551";
import { isFullscreenDevHandoffView } from "../905/782918";
import { useIsFigmakeFullscreenPreview } from "../figma_app/552876";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { TH } from "../figma_app/751648";
import { v as _$$v } from "../905/596134";
import { if6 } from "../figma_app/27776";
var p = u;
let C = "zoom_menu--enabled--ZDTJg";
let w = "zoom_menu--zoomIcon--ZU0yf";
let O = memo(function ({
  recordingKey: e
}) {
  let t = Zr("zoom-out");
  let r = Zr("zoom-in");
  let i = useSelector(e => !1 === e.mirror.appModel.showUi);
  let s = useIsProgressBarHiddenOrLocked();
  return !fullscreenValue.isReady() || i ? null : jsx(EventShield, {
    eventListeners: ["onClick"],
    children: jsxs("div", {
      "data-onboarding-key": _$$q,
      className: p()("zoom_menu--zoomControls--Ob0t9", {
        [cssBuilderInstance.opacity0_3.eventsNone.$]: s
      }),
      children: [jsx(L, {
        recordingKey: e,
        canZoom: t
      }), jsx("div", {
        className: "zoom_menu--zoomMenuDivider--J0mae"
      }), jsx(R, {
        recordingKey: e,
        canZoom: r
      })]
    })
  });
});
function R(e) {
  let {
    recordingKey,
    canZoom
  } = e;
  return jsx(ButtonPrimitive, {
    recordingKey: generateRecordingKey(recordingKey, "zoomInButton"),
    className: p()("zoom_menu--zoomPlus--zMtgE", {
      [C]: canZoom
    }),
    disabled: !canZoom,
    onClick: () => {
      fullscreenValue.triggerAction("zoom-in");
    },
    htmlAttributes: {
      "data-tooltip-type": KindEnum.LOOKUP,
      "data-tooltip": "zoom-in"
    },
    "aria-label": getI18nString("fullscreen_actions.zoom-in"),
    children: jsx("div", {
      className: "zoom_menu--zoomPlusIcon--oPqo4",
      "aria-hidden": !0,
      children: jsx("span", {
        className: w,
        children: jsx(_$$x, {})
      })
    })
  });
}
function L(e) {
  let {
    recordingKey,
    canZoom
  } = e;
  return jsx(ButtonPrimitive, {
    recordingKey: generateRecordingKey(recordingKey, "zoomOutButton"),
    className: p()("zoom_menu--zoomMinus--BrHt4", {
      [C]: canZoom
    }),
    disabled: !canZoom,
    onClick: () => {
      fullscreenValue.triggerAction("zoom-out");
    },
    htmlAttributes: {
      "data-tooltip-type": KindEnum.LOOKUP,
      "data-tooltip": "zoom-out"
    },
    "aria-label": getI18nString("fullscreen_actions.zoom-out"),
    children: jsx("div", {
      className: "zoom_menu--zoomMinusIcon--l-8CN",
      "aria-hidden": !0,
      children: jsx("span", {
        className: w,
        children: jsx(_$$f, {})
      })
    })
  });
}
function B() {
  let e = useIsProgressBarHiddenOrLocked();
  let t = useSelector(e => e.mirror.appModel.showUi);
  return !e && t ? jsxs(ButtonPrimitive, {
    className: "x78zum5 x153ncpu x1q0g3np xl56j7k x6s0dn4 x1jnr06f xgqmno8 xsqpjig",
    onClick: () => {
      customHistory.unsafeRedirect(_$$m, "_blank");
    },
    children: [jsx("div", {
      className: "x1tk3asg x17akokd x1qxcl5b xclx6tv",
      children: renderI18nText("cms.onboarding.give_feedback")
    }), jsx(_$$S, {
      className: "xwa2v1s"
    })]
  }) : null;
}
function es() {
  let e = useSetAtom(Px);
  let t = useSetAtom(Bl);
  let r = useSetAtom(go);
  let [i, a] = useAtomValueAndSetter(HO);
  return i ? jsx(WithTrackedPopupButtonPrimitive, {
    className: "dev_mode_demo_file_restart_button--restartButton--jXEnp",
    onClick: () => {
      e(aN.STATUSES);
      t(!1);
      a(!1);
      r(!1);
    },
    "data-onboarding-key": gh,
    trackingProperties: {
      trackingDescriptor: UpgradeAction.RESTART_TOUR
    },
    children: jsx(_$$S2, {
      className: "dev_mode_demo_file_restart_button--restartIcon--alSdl"
    })
  }) : null;
}
let e_ = parsePxNumber(if6);
let $$eh0 = memo(function () {
  let e = useDispatch<AppDispatch>();
  let t = isSitesFileType();
  let r = useCanUseDevModeDemoFile();
  let i = _$$C()?.setBottomRightToolsNode || noop;
  let u = U1(i);
  let _ = _$$v();
  let h = getFeatureFlags().dev_mode_demo_file || getFeatureFlags().logged_out_dev_mode_demo_file;
  let g = window.FigmaMobile;
  let {
    keyboardShortcuts,
    isEditingFile,
    isDevHandoff,
    modalShown,
    orgUser,
    user,
    unsortedTeams
  } = $$em2();
  let v = isHelpWidgetHidden();
  let A = isDesignFileType();
  let x = _$$U();
  let N = useIsFullscreenSlidesView();
  let C = useIsSelectedViewFullscreenCooper();
  let w = !useSelector(e => e.mirror.appModel.showUi) || v;
  let R = "dark" === getVisibleTheme();
  let L = getSelectedView();
  let F = useIsFigmakeFullscreenPreview(L);
  let j = !!g?.shouldOptimizeForIpadApp || fullscreenAlias.getIsExtension() && isDevHandoff || F || w;
  let U = $$eg1();
  let H = useAtomWithSubscription(consentCounterAtom);
  let W = getObservableValue(AppStateTsApi?.uiState().inProductHelpSidePanelWidth, 0);
  if (isMobileCommunity() || !_ && j) return null;
  let q = jsxs("div", {
    ref: u,
    className: p()("bottom_right_tools_container--container--GhraJ", {
      "bottom_right_tools_container--design--Yvkzk": A || N,
      "bottom_right_tools_container--sites--Uvo6B": t,
      "bottom_right_tools_container--cooper--u2PoH": C
    }),
    style: {
      marginBottom: U,
      "--inProductHelpSidePanelWidth": `${W}px`,
      "--cookieBannerHeight": `${H}px`
    },
    "data-testid": "bottom-right-tools-container",
    children: [_ && jsx(O, {
      recordingKey: "bottomRightToolsZoomMenu"
    }), h && r && jsx(es, {}), t && x && jsx(B, {}), !j && jsx(gs, {
      dispatch: e,
      hide: w,
      isDarkMode: R,
      isEditingFile,
      keyboardShortcuts,
      modalShown,
      orgUser,
      shouldShowBottomRightZoomMenu: _,
      unsortedTeams,
      user
    })]
  });
  return jsx(_$$x2, {
    children: jsx(_$$m2, {
      role: "contentinfo",
      children: q
    })
  });
});
export function $$em2() {
  return selectWithShallowEqual(e => ({
    keyboardShortcuts: e.mirror.appModel.keyboardShortcuts,
    isEditingFile: !!getSelectedFile(e),
    isDevHandoff: isFullscreenDevHandoffView(e.selectedView),
    modalShown: e.modalShown,
    orgUser: hasOrgUsersForUser(e),
    user: e.user,
    unsortedTeams: getFilteredTeamMembers(e.user, e.roles, e.teams)
  }));
}
export function $$eg1() {
  let e = Yk();
  let t = TH();
  let r = _$$C()?.bottomRightToolsNode?.getBoundingClientRect();
  return t && r && t.right + e_ > r.left ? e : 0;
}
export const mv = $$eh0;
export const D = $$eg1;
export const DF = $$em2;