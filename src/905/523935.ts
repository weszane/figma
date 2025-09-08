import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { Fullscreen, StylesBindings, CooperHelpers } from "../figma_app/763686";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { NQ } from "../905/508367";
import { getInitialOptions } from "../figma_app/169182";
import { Pt } from "../figma_app/806412";
import { useSprigWithSampling } from "../905/99656";
import { Point } from "../905/736624";
import { b$, FU, Bs, jR, a9, D6 } from "../figma_app/933328";
import { lg } from "../figma_app/976749";
import { Eo } from "../figma_app/80990";
import { o as _$$o } from "../figma_app/915774";
import { X as _$$X } from "../905/853613";
import { Ew } from "../figma_app/361662";
import { fullscreenValue } from "../figma_app/455680";
import { _G } from "../figma_app/516028";
import { t } from "../905/851577";
import { N as _$$N } from "../905/645480";
import { td } from "../figma_app/646357";
import { u2 } from "../figma_app/807786";
import { Do, PW, IV } from "../figma_app/633080";
import { $A } from "../905/862883";
import { r as _$$r } from "../905/632622";
import { r6 } from "../figma_app/517115";
import { tM, k1 } from "../figma_app/984498";
import { TG } from "../905/72677";
import { Nv } from "../figma_app/318590";
import { p as _$$p } from "../905/42189";
import { Kl } from "../figma_app/275938";
import { F5, oM } from "../905/192343";
export function $$$$j0(e) {
  let {
    Sprig
  } = useSprigWithSampling();
  let i = useDispatch();
  let j = useSelector(e => e.library);
  let U = Nv(!0);
  let B = useAtomWithSubscription(TG);
  let V = e.resource;
  let G = Do(V);
  let z = G ? "LIBRARY" !== V.subscriptionStatus : V.isLocal;
  let H = Kl();
  let W = !G && H.has(V.library_key);
  let K = "whiteboard" === lg();
  let Y = function (e) {
    let t = "whiteboard" === lg();
    let i = "slides" === lg();
    let n = "cooper" === lg();
    if (t) {
      if (e) return;
      return $A.FigJam;
    }
    return i ? $A.Slides : n ? $A.Cooper : $A.Design;
  }(W);
  let q = F5();
  let $ = useCallback(async n => {
    let {
      dropPosition,
      pointerPercentageOffset,
      isClick
    } = n;
    let o = (t, i, n) => {
      e.insertionCallback?.(t, i, n);
      fullscreenValue.triggerAction("commit");
    };
    let d = pointerPercentageOffset || (e.useSmartPositioning ? new Point(.5, .5) : new Point());
    if (V.type === PW.STATE_GROUP) i(b$({
      item: V,
      canvasPosition: dropPosition,
      percentageOffset: d,
      insertAsChildOfCanvas: !!e.insertAsChildOfCanvas,
      storeInRecentsKey: Y,
      fromPlayground: e.fromPlayground,
      insertLogArgsOverride: e.insertLogArgsOverride,
      useSmartPositioning: !!e.useSmartPositioning,
      isClick,
      insertionCallback: o,
      sourceForTracking: e.sourceForTracking
    }));else if (V.type === PW.COMPONENT) i(FU({
      item: V,
      canvasPosition: dropPosition,
      percentageOffset: d,
      insertAsChildOfCanvas: !!e.insertAsChildOfCanvas,
      storeInRecentsKey: Y,
      fromPlayground: e.fromPlayground,
      insertLogArgsOverride: e.insertLogArgsOverride,
      selectAfterInsert: e.selectAfterInsert,
      useSmartPositioning: !!e.useSmartPositioning,
      isClick,
      insertionCallback: o,
      sourceForTracking: e.sourceForTracking
    }));else if (V.type === PW.MODULE) i(Bs({
      item: V,
      canvasPosition: dropPosition,
      percentageOffset: d,
      insertAsChildOfCanvas: !!e.insertAsChildOfCanvas,
      storeInRecentsKey: Y,
      fromPlayground: e.fromPlayground,
      insertLogArgsOverride: e.insertLogArgsOverride,
      selectAfterInsert: e.selectAfterInsert,
      useSmartPositioning: !!e.useSmartPositioning,
      isClick,
      insertionCallback: o,
      sourceForTracking: e.sourceForTracking
    }));else if (V.type === PW.RESPONSIVE_SET && Do(V)) {
      getFeatureFlags().sts_sprig_targeted_feedback && Sprig("track", "sites_blocks_insert");
      i(jR({
        item: V,
        cmsCollectionMappings: e.cmsCollectionMappings,
        canvasPosition: dropPosition,
        percentageOffset: pointerPercentageOffset || new Point(),
        insertAsChildOfCanvas: !!e.insertAsChildOfCanvas,
        insertLogArgsOverride: e.insertLogArgsOverride,
        selectAfterInsert: e.selectAfterInsert,
        sourceForTracking: e.sourceForTracking
      }));
    } else throw Error(`Unexpected type for dragging library item: ${V.type}`);
    K && !Do(e.resource) && IV(e.resource) && oM({
      id: e.resource.component_key,
      type: _$$p.STICKERS_AND_COMPONENTS,
      source: e.sourceForTracking,
      options: {
        ...q,
        query: e.searchQuery
      }
    });
    return await Promise.resolve();
  }, [Sprig, i, q, K, e, V, Y]);
  let Z = _G() ?? _$$l("");
  let X = Ew({
    assetKey: u2(V),
    assetLibraryKey: G ? "LIBRARY" === V.subscriptionStatus ? V.sourceLibraryKey : Z : V.library_key,
    assetType: V.type,
    isList: e.isList,
    sectionNameforTracking: e.sectionNameForTracking,
    sectionPosition: e.sectionPosition,
    sourceForTracking: e.sourceForTracking,
    sectionDepth: e.sectionDepth,
    aiScore: G ? void 0 : V.ai_score ?? void 0,
    lexicalScore: G ? void 0 : V.lexical_score ?? void 0,
    isExample: _$$o(V, B),
    partnerType: G ? void 0 : _$$X(V.library_key)
  });
  let Q = e.isList ? _$$N.CENTERED : _$$N.RELATIVE;
  let {
    onInsertableResourcePointerDown,
    dragState
  } = t({
    ...e,
    afterSuccessfulInsert: t => {
      trackEventAnalytics("Instance Dropped", {
        ...(e.insertLogArgsOverride ?? X),
        altKey: t.altKey,
        aiResultsEnabled: U
      }, {
        forwardToDatadog: !0
      });
      let {
        type,
        sectionPosition,
        searchQuery,
        searchSessionId,
        ...s
      } = {
        ...X,
        ...e.insertLogArgsOverride
      };
      e.sourceForTracking !== tM ? analyticsEventManager.trackDefinedEvent("asset_search.result_inserted", {
        ...s,
        aiResultsEnabled: U,
        assetType: type,
        position: sectionPosition,
        reciprocalRank: void 0 !== sectionPosition ? 1 / (1 + sectionPosition) : void 0,
        query: searchQuery,
        sessionId: searchSessionId,
        entryPoint: "assets-panel" === e.sourceForTracking ? "assets-panel" : "actions_assets_tab" === e.sourceForTracking ? "actions-assets-tab" : void 0,
        componentSuggestionSessionId: r6()
      }) : k1({
        assetKey: s.assetKey ?? "",
        libraryKey: s.assetLibraryKey,
        assetType: type,
        position: sectionPosition
      });
      e.afterSuccessfulInsert?.(t);
    }
  }, {
    insertAction: $,
    dragPreviewPointerPosition: e.dragPreviewPointerPosition || Q,
    getDragPreviewSrc: () => G ? "LIBRARY" === V.subscriptionStatus ? V.mainThumbnailInfo.thumbnailUrl ?? "" : j.local.thumbnails[V.assetId]?.url || "" : V.isLocal ? j.local.thumbnails[V.node_id]?.url || "" : function (e, t) {
      let i = function (e) {
        switch (e.type) {
          case PW.COMPONENT:
            return Fullscreen?.getSymbolNodeId(e.component_key, e.content_hash);
          case PW.STATE_GROUP:
            return Fullscreen?.getStateGroupNodeId(e.key, e.version);
          case PW.STYLE:
            return StylesBindings?.getStyleNodeId(e.key, e.content_hash);
          case PW.VARIABLE:
          case PW.VARIABLE_SET:
          case PW.MODULE:
            return;
          default:
            throwTypeError(e, "Unhandled asset type");
        }
      }(e);
      return i && t[i]?.url || (e.thumbnail_url && getInitialOptions().user_data?.id ? NQ(e.thumbnail_url, "fuid", getInitialOptions().user_data.id) : e.thumbnail_url || "");
    }(e.resource, j.local.thumbnails),
    onPointerDownCallback: () => {
      _$$r();
      G ? "LIBRARY" === V.subscriptionStatus && Eo.getCanvas({
        canvas_url: V.canvasUrl
      }) : z || (Eo.getCanvas(V), !td(j.defaultPublished, V.library_key) && (V.type === PW.COMPONENT && V.component_key && i(a9({
        componentKey: V.component_key,
        callsite: "useInsertableLibraryItem"
      })), V.type === PW.STATE_GROUP && V.key && i(D6({
        stateGroupKey: V.key
      }))));
      Fullscreen?.setShowCanvasDragAndDropOutlines(!0);
      Fullscreen?.setComponentDragAssetType(V.type);
      CooperHelpers?.setAllowDroppingOnLockedTemplate(e.allowDroppingOnLockedTemplate || !1);
    },
    onPointerUpCallback: () => {
      Fullscreen?.setShowCanvasDragAndDropOutlines(!1);
      Fullscreen?.setComponentDragAssetType("none");
      e.onPointerUp?.();
    },
    onPointerUpWithoutInsert: e.onPointerUpWithoutInsert,
    recordingKey: Pt("component", G ? V.assetId : V.node_id),
    preloadThumbnail: e.preloadThumbnail
  });
  return useMemo(() => ({
    onInsertableResourcePointerDown,
    dragState,
    insertAction: $
  }), [onInsertableResourcePointerDown, dragState, $]);
}
export const j = $$$$j0;