import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { wA, d4 } from "../vendor/514228";
import { filterNotNullish } from "../figma_app/656233";
import { getFeatureFlags } from "../905/601108";
import { eU, zl } from "../figma_app/27355";
import { ED } from "../905/714362";
import { t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { PK } from "../figma_app/124493";
import { Dm } from "../figma_app/8833";
import { F as _$$F } from "../905/224";
import { HZ } from "../figma_app/186343";
import { p8 } from "../figma_app/722362";
import { q5, yV } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { J9 } from "../figma_app/345997";
import { b as _$$b } from "../905/165519";
import { vL } from "../905/652992";
import { ZN } from "../figma_app/630077";
import { Q } from "../figma_app/320600";
import { hZ } from "../0c62c2fd/646972";
import { cT } from "../figma_app/32128";
import { J } from "../905/521144";
import { A as _$$A } from "../figma_app/965813";
import { DV } from "../905/739964";
import { E as _$$E } from "../figma_app/999099";
import { HZ as _$$HZ, $t } from "../figma_app/29287";
export let $$A1 = eU(!1);
export function $$O0({
  clientX: e,
  clientY: t,
  pageIds: i,
  selectedView: O,
  shouldShowDuplicateOption: L
}) {
  let R = wA();
  let D = d4(e => e.mirror.appModel);
  let M = q5();
  let P = p8("pagesList");
  let F = HZ();
  let B = _$$F.useShouldHideStarterCtaForOpenFile();
  let U = cT();
  let G = hZ();
  let K = 1 === i.length && void 0 !== i[0] ? function ({
    pageId: e,
    openFile: t,
    pagesList: i,
    team: r,
    shouldShowDuplicateOption: n,
    shouldPaywallForDraftsPageLimitV1: a,
    dispatch: s,
    hideUpsellPlanCta: l,
    isFileReadOnly: h,
    isK12OrgStudent: f
  }) {
    var g;
    let _ = i.length;
    let E = i.filter(e => !e.isDivider).length;
    let T = i.find(t => t.nodeId === e);
    let w = !!T && T.isDivider;
    let A = i => _$$HZ() && T && t && t.editorType === FFileType.WHITEBOARD ? [{
      separator: !0
    }, {
      name: "create-slides-outline-from-figjam",
      callback: () => $t({
        pageGuids: [e],
        dispatch: i,
        source: _$$E.FJ_PAGE_MENU
      })
    }] : [];
    if (h || f) return [{
      action: "page-copy-link",
      args: {
        nodeId: e
      }
    }, ...A(s)];
    let O = () => getFeatureFlags().move_page_to_new_file && T && t ? (ED("getPageMoveMenuItem", "Parameters", {
      pageId: e,
      folderId: "1",
      fileKey: t.key
    }), {
      name: "page-move-to-new-file",
      callback: () => {
        !function (e, t, i, r, n = {}, a = !0) {
          if (!e) return;
          let s = {
            ...n,
            type: _$$A.FILE,
            fileKey: e.key,
            file: e,
            afterFileMove: void 0,
            isMovePageToNewFile: a,
            page_id: i
          };
          t(to({
            type: J(),
            data: s
          }));
        }({
          key: t.key,
          name: t.name,
          folder_id: t.folderId,
          team_id: t.teamId,
          editor_type: t.editorType
        }, s, e);
      }
    }) : null;
    let L = n ? (g = w ? _$$t("fullscreen_actions.divider-duplicate") : _$$t("fullscreen_actions.page-duplicate"), t && (J9({
      openFile: t,
      pageCount: _
    }) || a({
      openFile: t,
      pageCount: _
    })) ? {
      name: "page-duplicate",
      callback: () => {
        s(to({
          type: DV,
          data: {
            team: r,
            resource: vL.PAGE,
            action: ZN.DUPLICATE_PAGE,
            editorType: t.editorType,
            currentPlan: _$$F.Plan.STARTER,
            upsellPlan: _$$F.Plan.PRO,
            hideUpsellPlanCta: l,
            upsellSource: _$$b.CREATE_NEW_PAGE
          }
        }));
      },
      displayText: g
    } : {
      action: "page-duplicate",
      args: {
        nodeId: e
      },
      loadingIndicatorString: "Duplicating",
      displayText: g
    }) : null;
    return w ? [L, O(), {
      action: "page-delete",
      args: {
        nodeIds: [e]
      },
      loadingIndicatorString: "Deleting",
      displayText: _$$t("fullscreen_actions.divider-delete")
    }] : [{
      action: "page-copy-link",
      args: {
        nodeId: e
      }
    }, {
      separator: !0
    }, {
      action: "page-rename",
      args: {
        nodeId: e
      },
      displayText: _$$t("fullscreen_actions.pages-rename", {
        pageCount: 1
      })
    }, L, O(), {
      separator: !0
    }, {
      action: "page-delete",
      callback: () => s(PK({})),
      args: {
        nodeIds: [e]
      },
      loadingIndicatorString: "Deleting",
      disabled: 1 === E,
      displayText: _$$t("fullscreen_actions.pages-delete", {
        pageCount: 1
      })
    }, ...A(s)];
  }({
    pageId: i[0],
    team: M ? M.team : null,
    shouldShowDuplicateOption: L,
    openFile: M,
    pagesList: P,
    shouldPaywallForDraftsPageLimitV1: F,
    dispatch: R,
    hideUpsellPlanCta: B,
    isFileReadOnly: U,
    isK12OrgStudent: G
  }) : function ({
    pageIds: e,
    pagesList: t,
    dispatch: i,
    isFileReadOnly: r,
    isK12OrgStudent: n
  }) {
    if (r || n) return [];
    let a = new Set(t.filter(e => !e.isDivider).map(e => e.nodeId));
    let s = e.filter(e => a.has(e));
    let o = s.length;
    return 0 === o ? [] : [{
      action: "batch-page-rename",
      args: {
        nodeIds: s
      },
      displayText: _$$t("fullscreen_actions.pages-rename", {
        pageCount: o
      })
    }, {
      separator: !0
    }, {
      action: "page-delete",
      callback: () => i(PK({})),
      args: {
        nodeIds: s
      },
      loadingIndicatorString: "Deleting",
      displayText: _$$t("fullscreen_actions.pages-delete", {
        pageCount: o
      }),
      disabled: a.size <= o
    }, ...(t => {
      if (!_$$HZ()) return [];
      let i = zl.get(yV);
      return i && i.editorType === FFileType.WHITEBOARD ? [{
        separator: !0
      }, {
        name: "create-slides-outline-from-figjam",
        callback: () => $t({
          pageGuids: Array.from(e),
          dispatch: t,
          source: _$$E.FJ_PAGE_MENU
        })
      }] : [];
    })(i)];
  }({
    pageIds: i,
    pagesList: P,
    dispatch: R,
    isFileReadOnly: U,
    isK12OrgStudent: G
  });
  useEffect(() => (zl.set($$A1, !0), () => {
    zl.set($$A1, !1);
  }), []);
  return jsx("div", {
    className: `${Dm}`,
    children: jsx(Q, {
      appModel: D,
      menuItems: filterNotNullish(K),
      dispatch: R,
      selectedView: O,
      showPoint: !1,
      targetRect: {
        width: 10,
        height: 10,
        left: e + 100,
        top: t,
        right: e + 110,
        bottom: t - 10
      },
      removeDisabledItems: !1,
      isLimitedDevMode: !1,
      recordingKey: "pageMenu"
    })
  });
}
export const W = $$O0;
export const l = $$A1;