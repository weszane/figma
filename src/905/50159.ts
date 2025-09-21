import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import { appendUserIdToUrl, appendNavigationContext, compareValues, navigateToFile } from "../905/508367";
import { customHistory } from "../905/612521";
import { isCommandOrShift } from "../905/63728";
import { h1, Ak } from "../905/986103";
import { $E, w4 } from "../905/445814";
import { NU } from "../figma_app/204891";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { trackFileClicked } from "../figma_app/976345";
import { l as _$$l } from "../905/767868";
import { A as _$$A } from "../905/100919";
import { K } from "../905/226178";
import { setLastVisitedPlan } from "../905/93909";
import { I4 } from "../figma_app/840917";
import { i4 } from "../905/862913";
import { fA } from "../figma_app/543100";
import { OrganizationType } from "../905/833838";
import { KindEnum } from "../905/129884";
import { W } from "../905/244810";
import { gO, m2, ag, Vj, vS, q6, SC, Dv, VA, WM, CK, m4, Tr, FR, yl, XK } from "../figma_app/603826";
var l = o;
export function $$R1(e) {
  let t = _$$l(e.file.folder_id);
  let i = t.data;
  return i4(e.file) ? jsx("span", {
    className: gO,
    children: renderI18nText("tile.file_tile.password_protected")
  }) : "loaded" !== t.status ? null : jsxs("div", {
    className: m2,
    children: [jsx("span", {
      className: cssBuilderInstance.inlineFlex.$,
      children: e.left || null
    }), jsxs("span", {
      className: ag,
      children: [e.file.touched_at && !i && jsx("span", {
        className: gO,
        children: renderI18nText("tile.file_tile.edited_time", {
          time: jsx(h1, {
            date: e.file.touched_at
          })
        })
      }), e.file.touched_at && i && jsx("span", {
        className: Vj,
        children: renderI18nText("tile.file_tile.edited_time_with_separator", {
          time: jsx(h1, {
            date: e.file.touched_at
          })
        })
      }), i && jsx(TextWithTruncation, {
        truncate: !0,
        showTooltipWhenTruncated: !0,
        children: i
      })]
    })]
  });
}
function N(e) {
  let t = e.file.last_published_at;
  let i = $E();
  let a = Ak(t);
  getFeatureFlags().statsig_aa_flag_web_file_tile;
  let {
    file
  } = e;
  let l = e.tile;
  let d = useMemo(() => l || fA(file), [l, file]);
  return jsxs(Fragment, {
    children: [jsx(NU, {
      file: e.file,
      borderRadius: 8,
      noBorder: !0
    }), jsx("div", {
      className: vS,
      children: !e.disableIconOverlays && jsx(w4, {
        type: i(file),
        size: 24,
        "data-tooltip-type": t ? KindEnum.TEXT : void 0,
        "data-tooltip": t ? getI18nString("tile.file_tile.published_as_library", {
          time: a
        }) : void 0
      })
    }), jsxs("div", {
      className: q6,
      children: [jsx(TextWithTruncation, {
        fontWeight: "medium",
        color: e.disabled ? "disabled" : void 0,
        fontSize: e.titleFontSize ? e.titleFontSize : 13,
        truncate: !0,
        children: jsx(_$$A, {
          tile: d,
          ...e,
          isListView: !1
        })
      }), jsxs("div", {
        className: SC,
        children: [e.hasUnsyncedChanges && jsx("div", {
          className: cssBuilderInstance.pr4.$,
          children: jsx(K, {})
        }), jsx("div", {
          className: e.disabled ? Dv : VA,
          children: e.subtitle
        })]
      }), jsx("div", {
        className: WM,
        children: jsx(W, {
          entityList: e.activeFileUsers,
          maxNumHeads: 3,
          currentUser: e.currentUser,
          overlapped: !0
        })
      })]
    })]
  });
}
export function $$P0(e) {
  let t = I4(e.file.key).unwrapOr(!1);
  let i = useSelector(e => e.currentUserOrgId);
  let r = useSelector(e => e.currentTeamId);
  let s = useSelector(e => e.user);
  let o = useSelector(e => e.selectedView);
  let p = useDispatch();
  return jsx("div", {
    className: CK,
    children: jsx("div", {
      onClick: t => {
        if (e.overrideOnClick) {
          t.preventDefault();
          e.onClick(t);
          return;
        }
        if (p(setLastVisitedPlan({
          planId: i || r,
          planType: i ? OrganizationType.ORG : OrganizationType.TEAM
        })), isCommandOrShift(t)) {
          p(trackFileClicked({
            fileKey: e.file.key,
            entrypoint: "standalone file tile",
            viewMode: 0 === e.viewMode ? "list" : "grid"
          }));
          let t = `/file/${e.file.key}`;
          t = appendUserIdToUrl(t, s);
          t = appendNavigationContext(t, i, r, o);
          customHistory.redirect(t, "_blank");
        } else compareValues(i, e.file.parent_org_id, r, e.file.team_id) ? (p(trackFileClicked({
          fileKey: e.file.key,
          entrypoint: "standalone file tile",
          viewMode: 0 === e.viewMode ? "list" : "grid"
        })), navigateToFile({
          file: {
            key: e.file.key,
            editorType: e.file.editor_type || void 0
          }
        }, {
          user: s,
          teamId: r,
          orgId: i,
          selectedView: o
        })) : (t.preventDefault(), e.onClick(t));
      },
      className: l()(m4, Tr, {
        [FR]: e.isSelected
      }),
      role: "link",
      tabIndex: 0,
      children: jsxs("div", {
        className: yl,
        children: [jsx("div", {
          className: XK
        }), jsx("div", {
          "data-tooltip-type": e.tooltipText ? KindEnum.TEXT : void 0,
          "data-tooltip": e.tooltipText,
          "data-tooltip-show-immediately": !!e.tooltipText,
          "data-tooltip-show-above": !!e.tooltipText || void 0,
          children: jsx(N, {
            ...e,
            hasUnsyncedChanges: t
          })
        })]
      })
    })
  });
}
export const GQ = $$P0;
export const lJ = $$R1;