import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { N as _$$N } from "../905/438674";
import { K as _$$K } from "../905/443068";
import { C as _$$C } from "../905/520159";
import { h as _$$h } from "../905/207101";
import { Uz } from "../905/63728";
import { rf } from "../figma_app/806412";
import { ph } from "../figma_app/709893";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { Y as _$$Y } from "../905/830372";
import { d1 } from "../905/766303";
import { fV } from "../figma_app/236178";
import { L1, KP } from "../figma_app/12491";
import { b as _$$b } from "../905/217163";
import { E as _$$E } from "../905/511388";
import { fd } from "../figma_app/255679";
import { dq } from "../905/845253";
import { B as _$$B } from "../905/506188";
import { Ib } from "../905/129884";
import { X } from "../905/257331";
import { B as _$$B2 } from "../905/146468";
import { tq, kz, d_ } from "../905/691188";
import { A as _$$A } from "../6828/858819";
import { A as _$$A2 } from "../3850/669090";
function c({
  label: e
}) {
  let t = useRef(null);
  let [i, a] = useState(!0);
  let [s, o] = useState(!1);
  _$$h(() => {
    t.current && (t.current.focus(), o(!0));
  });
  let l = useCallback(() => {
    a(!0);
    o(!0);
  }, []);
  let c = useCallback(() => {
    a(!1);
  }, []);
  let u = s && !i;
  return jsx("div", {
    "aria-hidden": u || void 0,
    "aria-label": u ? void 0 : e,
    tabIndex: u ? void 0 : 0,
    onFocus: l,
    onBlur: c,
    ref: t
  });
}
function p(e) {
  return useCallback(t => {
    t.keyCode === Uz.ENTER && e();
  }, [e]);
}
export function $$O1({
  canEditSubscriptions: e,
  libraryStat: t,
  libraryKey: i,
  onBackToList: d,
  showingDefaultSubscriptionsForTeamId: u,
  showingDefaultSubscriptionsForUser: g,
  showingDefaultSubscriptionsForOrg: S,
  sharingGroupData: T
}) {
  let N = _$$B(i);
  let P = useSelector(e => d1(e));
  let O = useSelector(e => e.user);
  let [L, F] = useState(!1);
  let M = P?.library_key === i;
  let j = t?.library_file_name ?? N?.data ?? "";
  let U = fV(i, g);
  let B = fd(i);
  let V = _$$b({
    libraryKey: i
  });
  let G = rf("subscriptionFileViewHeader.backCaret", "mousedown", d);
  p(d);
  let z = null;
  T ? z = jsx(_$$B2, {
    resourceConnectionSharingGroupData: T,
    useLabel: !0
  }) : O && (u || g) && (z = jsx(tq, {
    libraryKey: i,
    showingDefaultSubscriptionsForTeamId: u,
    showingDefaultSubscriptionsForUser: g,
    label: getI18nString("design_systems.libraries_modal.enabled_by_default"),
    disabled: !e,
    confirmCalloutShowing: L,
    setConfirmCalloutShowing: F
  }));
  let H = null;
  S || u || g || (M ? H = jsx("div", {
    className: "subscription_file_view_header--currentFileLabel--tbNfz ellipsis--ellipsis--Tjyfa",
    children: renderI18nText("design_systems.libraries_modal.current_file")
  }) : O && (H = jsx(kz, {
    libraryKey: i,
    showingDefaultSubscriptionsForTeamId: u,
    showingDefaultSubscriptionsForUser: g,
    disabled: !e,
    recordingKey: "subscriptionFileViewHeader.toggle",
    buttonStyleType: d_.PRIMARY
  })));
  let W = V?.data?.link;
  let K = S && W ? jsx("div", {
    className: "subscription_file_view_header--openFileSpacing--fs5yN",
    children: jsx(_$$N, {
      href: W,
      newTab: !0,
      children: renderI18nText("design_systems.libraries_modal.open_file")
    })
  }) : null;
  let Y = useMemo(() => B ? jsx("div", {
    className: "subscription_file_view_header--presetLibraryIcon--SLpw1",
    children: jsx(_$$E, {
      libraryKey: i,
      showTooltip: !0,
      redirectToHubFile: !0
    })
  }) : U ? jsx("div", {
    className: _$$s.pl4.$,
    children: g ? jsx(L1, {
      libraryKey: i
    }) : jsx(KP, {
      libraryKey: i
    })
  }) : null, [U, B, i, g]);
  return jsxs("div", {
    className: "subscription_file_view_header--componentOrFileViewHeader_v2--aMnfg",
    children: [jsx(c, {
      label: getI18nString("design_systems.libraries_modal.header_label", {
        fileName: j
      })
    }), jsx("div", {
      className: "subscription_file_view_header--backButton--0M3NV",
      children: jsx(_$$K, {
        onClick: G,
        "aria-label": getI18nString("design_systems.libraries_modal.back"),
        children: jsx(_$$C, {})
      })
    }), jsxs("div", {
      className: "subscription_file_view_header--componentOrFileName--YhI3C text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: [jsxs(_$$Y, {
        verticalAlignItems: "center",
        direction: "horizontal",
        spacing: 0,
        children: [jsx(ph, {
          text: j,
          tooltipPropsWhenTruncated: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": j,
            "data-tooltip-show-immediately": !0
          }
        }), Y]
      }), jsx(D, {
        workspaceId: t?.workspace_id,
        workspaceName: t?.workspace_name,
        teamId: t?.team_id,
        teamName: t?.team_name
      })]
    }), z, H, K]
  });
}
function D({
  workspaceId: e,
  workspaceName: t,
  teamId: i,
  teamName: r
}) {
  let a = dq();
  if (!e && !i) return null;
  let s = `/files/${a}/workspace/${e}/`;
  let o = i ? a ? `/files/${a}/team/${i}` : `/files/team/${i}` : null;
  return jsxs("div", {
    className: "subscription_file_view_header--libraryPath--vp-sy text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [t && jsx(X, {
      href: s,
      tooltipText: t,
      children: t
    }), t && r && jsx(Fragment, {
      children: " / "
    }), r && o && jsx(X, {
      href: o,
      tooltipText: r,
      children: r
    })]
  });
}
export function $$L0(e) {
  let t = p(e.backToList);
  return jsxs("div", {
    className: "subscription_file_view_header--componentOrFileViewHeader--jxKql",
    children: [jsx(c, {
      label: getI18nString("design_systems.libraries_modal.header_label_missing")
    }), jsx(B, {
      svg: _$$A,
      className: "subscription_file_view_header--backCaret--nwuU8",
      onMouseDown: e.backToList,
      onKeyDown: t,
      role: "button",
      tabIndex: 0
    }), jsxs("div", {
      className: "subscription_file_view_header--missingLibrariesHeader--hQ7Uu text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: [jsx(B, {
        className: "subscription_file_view_header--missingLibrariesIcon--AZ8iW replace_libraries_modal--missingLibrariesIcon--1oNrW",
        svg: _$$A2
      }), renderI18nText("design_systems.libraries_modal.plural.missing_library", {
        missingLibCount: e.numMissingLibraries
      })]
    })]
  });
}
export const Y = $$L0;
export const C = $$O1;