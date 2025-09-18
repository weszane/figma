import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterNotNullish } from "../figma_app/656233";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager } from "../figma_app/27355";
import { logDebug } from "../905/714362";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { PK } from "../figma_app/124493";
import { Dm } from "../figma_app/8833";
import { consumptionPaywallUtils } from "../905/224";
import { HZ } from "../figma_app/186343";
import { useAppModelProperty } from "../figma_app/722362";
import { selectCurrentFile, openFileAtom } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { hasReachedPageLimit } from "../figma_app/345997";
import { UpsellModalType } from "../905/165519";
import { PageFolderFile } from "../905/652992";
import { fileActionEnum } from "../figma_app/630077";
import { Q } from "../figma_app/320600";
import { hZ } from "../0c62c2fd/646972";
import { cT } from "../figma_app/32128";
import { J } from "../905/521144";
import { A as _$$A } from "../figma_app/965813";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { E as _$$E } from "../figma_app/999099";
import { HZ as _$$HZ, $t } from "../figma_app/29287";
if (443 == require.j) {}
if (443 == require.j) {}
export let $$R1 = atom(!1);
export function $$A0({
  clientX: e,
  clientY: t,
  pageIds: r,
  selectedView: A,
  shouldShowDuplicateOption: O
}) {
  let F = useDispatch();
  let P = useSelector(e => e.mirror.appModel);
  let L = selectCurrentFile();
  let D = useAppModelProperty("pagesList");
  let M = HZ();
  let B = consumptionPaywallUtils.useShouldHideStarterCtaForOpenFile();
  let U = cT();
  let W = hZ();
  let $ = 1 === r.length && void 0 !== r[0] ? function ({
    pageId: e,
    openFile: t,
    pagesList: r,
    team: a,
    shouldShowDuplicateOption: s,
    shouldPaywallForDraftsPageLimitV1: i,
    dispatch: n,
    hideUpsellPlanCta: l,
    isFileReadOnly: _,
    isK12OrgStudent: f
  }) {
    var g;
    let h = r.length;
    let j = r.filter(e => !e.isDivider).length;
    let T = r.find(t => t.nodeId === e);
    let E = !!T && T.isDivider;
    let R = r => _$$HZ() && T && t && t.editorType === FFileType.WHITEBOARD ? [{
      separator: !0
    }, {
      name: "create-slides-outline-from-figjam",
      callback: () => $t({
        pageGuids: [e],
        dispatch: r,
        source: _$$E.FJ_PAGE_MENU
      })
    }] : [];
    if (_ || f) return [{
      action: "page-copy-link",
      args: {
        nodeId: e
      }
    }, ...R(n)];
    let A = () => getFeatureFlags().move_page_to_new_file && T && t ? (logDebug("getPageMoveMenuItem", "Parameters", {
      pageId: e,
      folderId: "1",
      fileKey: t.key
    }), {
      name: "page-move-to-new-file",
      callback: () => {
        !function (e, t, r, a, s = {}, i = !0) {
          if (!e) return;
          let n = {
            ...s,
            type: _$$A.FILE,
            fileKey: e.key,
            file: e,
            afterFileMove: void 0,
            isMovePageToNewFile: i,
            page_id: r
          };
          t(showModalHandler({
            type: J(),
            data: n
          }));
        }({
          key: t.key,
          name: t.name,
          folder_id: t.folderId,
          team_id: t.teamId,
          editor_type: t.editorType
        }, n, e);
      }
    }) : null;
    let O = s ? (g = E ? getI18nString("fullscreen_actions.divider-duplicate") : getI18nString("fullscreen_actions.page-duplicate"), t && (hasReachedPageLimit({
      openFile: t,
      pageCount: h
    }) || i({
      openFile: t,
      pageCount: h
    })) ? {
      name: "page-duplicate",
      callback: () => {
        n(showModalHandler({
          type: ConsumptionPaywallModalPlansPricing,
          data: {
            team: a,
            resource: PageFolderFile.PAGE,
            action: fileActionEnum.DUPLICATE_PAGE,
            editorType: t.editorType,
            currentPlan: consumptionPaywallUtils.Plan.STARTER,
            upsellPlan: consumptionPaywallUtils.Plan.PRO,
            hideUpsellPlanCta: l,
            upsellSource: UpsellModalType.CREATE_NEW_PAGE
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
    return E ? [O, A(), {
      action: "page-delete",
      args: {
        nodeIds: [e]
      },
      loadingIndicatorString: "Deleting",
      displayText: getI18nString("fullscreen_actions.divider-delete")
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
      displayText: getI18nString("fullscreen_actions.pages-rename", {
        pageCount: 1
      })
    }, O, A(), {
      separator: !0
    }, {
      action: "page-delete",
      callback: () => n(PK({})),
      args: {
        nodeIds: [e]
      },
      loadingIndicatorString: "Deleting",
      disabled: 1 === j,
      displayText: getI18nString("fullscreen_actions.pages-delete", {
        pageCount: 1
      })
    }, ...R(n)];
  }({
    pageId: r[0],
    team: L ? L.team : null,
    shouldShowDuplicateOption: O,
    openFile: L,
    pagesList: D,
    shouldPaywallForDraftsPageLimitV1: M,
    dispatch: F,
    hideUpsellPlanCta: B,
    isFileReadOnly: U,
    isK12OrgStudent: W
  }) : function ({
    pageIds: e,
    pagesList: t,
    dispatch: r,
    isFileReadOnly: a,
    isK12OrgStudent: s
  }) {
    if (a || s) return [];
    let i = new Set(t.filter(e => !e.isDivider).map(e => e.nodeId));
    let n = e.filter(e => i.has(e));
    let o = n.length;
    return 0 === o ? [] : [{
      action: "batch-page-rename",
      args: {
        nodeIds: n
      },
      displayText: getI18nString("fullscreen_actions.pages-rename", {
        pageCount: o
      })
    }, {
      separator: !0
    }, {
      action: "page-delete",
      callback: () => r(PK({})),
      args: {
        nodeIds: n
      },
      loadingIndicatorString: "Deleting",
      displayText: getI18nString("fullscreen_actions.pages-delete", {
        pageCount: o
      }),
      disabled: i.size <= o
    }, ...(t => {
      if (!_$$HZ()) return [];
      let r = atomStoreManager.get(openFileAtom);
      return r && r.editorType === FFileType.WHITEBOARD ? [{
        separator: !0
      }, {
        name: "create-slides-outline-from-figjam",
        callback: () => $t({
          pageGuids: Array.from(e),
          dispatch: t,
          source: _$$E.FJ_PAGE_MENU
        })
      }] : [];
    })(r)];
  }({
    pageIds: r,
    pagesList: D,
    dispatch: F,
    isFileReadOnly: U,
    isK12OrgStudent: W
  });
  useEffect(() => (atomStoreManager.set($$R1, !0), () => {
    atomStoreManager.set($$R1, !1);
  }), []);
  return jsx("div", {
    className: `${Dm}`,
    children: jsx(Q, {
      appModel: P,
      menuItems: filterNotNullish($),
      dispatch: F,
      selectedView: A,
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
export const W = $$A0;
export const l = $$R1;