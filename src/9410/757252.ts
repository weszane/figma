import { useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppStateTsApi, DesignGraphElements, Fullscreen, Command } from "../figma_app/763686";
import { useAtomValueAndSetter, Xr, useAtomWithSubscription } from "../figma_app/27355";
import { yE } from "../905/125333";
import { V } from "../905/223767";
import { showModalHandler } from "../905/156213";
import { consumptionPaywallUtils } from "../905/224";
import { fullscreenValue } from "../figma_app/455680";
import { w as _$$w } from "../0c62c2fd/912149";
import { selectCurrentFile } from "../figma_app/516028";
import { t as _$$t } from "../905/851577";
import { N as _$$N } from "../905/645480";
import { getUserId } from "../905/372672";
import { FFileType } from "../figma_app/191312";
import { getObservableValue } from "../figma_app/84367";
import { useCurrentPublicPlan, useIsStarterPlan } from "../figma_app/465071";
import { UpsellModalType } from "../905/165519";
import { FeatureFlag } from "../905/652992";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { fileActionEnum } from "../figma_app/630077";
import { useLibraryName } from "../figma_app/275938";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { n as _$$n } from "../905/347702";
import { oh, Yg as _$$Yg } from "../905/526509";
import { oW, Ai, Hf, Rg, Gn } from "../figma_app/204478";
import { ko, fT, Ln, UH } from "../figma_app/351862";
import { Fu } from "../9410/787735";
export function $$A6() {
  return getObservableValue(AppStateTsApi?.figjamState().isShapesSidebarOpen, !1);
}
export function $$O7() {
  let [e, t] = useAtomValueAndSetter(oh);
  return useCallback(() => {
    AppStateTsApi?.figjamState().isShapesSidebarOpen.set(!0);
    t({
      type: "close",
      source: _$$Yg.OpenedShapesSidebar
    });
  }, [t]);
}
export function $$L9() {
  let e = Xr(oW);
  let t = Xr(Ai);
  let [i, n] = useAtomValueAndSetter(Hf);
  return useCallback(() => {
    ko({
      event: fT.ClosedPanel,
      searchState: i
    });
    n({
      state: "inactive"
    });
    e("");
    t(!1);
    AppStateTsApi?.figjamState().isShapesSidebarOpen.set(!1);
  }, [i, n, e, t]);
}
export function $$R1() {
  let e = getUserId();
  let t = useAtomWithSubscription(Rg);
  let [i, n] = useAtomValueAndSetter(Gn);
  useEffect(() => {
    if (e) return;
    let r = () => {
      n(i.map(e => {
        if (e.lastAddedAtByUserId && t in e.lastAddedAtByUserId) {
          let {
            [t]: t,
            ...r
          } = e.lastAddedAtByUserId;
          return {
            ...e,
            lastAddedAtByUserId: r
          };
        }
        return e;
      }).filter(e => e.lastAddedAtByUserId && Object.keys(e.lastAddedAtByUserId).length > 0));
    };
    window.addEventListener("beforeunload", r);
    return () => window.removeEventListener("beforeunload", r);
  }, [e, i, t, n]);
  let a = e ?? t;
  return useMemo(() => i.filter(e => a in (e.lastAddedAtByUserId ?? {})).map(e => e.id), [i, a]);
}
export function $$D4(e, t) {
  let i = useLibraryName(e);
  return t ? `${i} - ${t}` : i;
}
export function $$M2(e) {
  let t = useAtomWithSubscription(yE);
  if (!useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.SHAPE_WHITEBOARD_PLATFORM) || !t) return !1;
  let i = e.type === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.key;
  let r = e.type;
  let l = e.userFacingVersion.toString();
  return e.library_key === t.libraryKey && l === t.assetVersion && i === t.assetKey && r === t.assetType;
}
export function $$P5() {
  return useCallback(e => {
    let t = e.relatedTarget;
    if (!t || t.classList.contains("focus-target")) return;
    let i = t.classList.contains(Fu);
    for (; !i && t.parentElement;) i = (t = t.parentElement).classList.contains(Fu);
    i || Fullscreen?.triggerActionEnumInUserEditScope(Command.SET_TOOL_DEFAULT_FIGJAM, {});
  }, []);
}
export function $$F3({
  insertAction: e,
  recordingKey: t
}) {
  return _$$t({
    resource: {},
    clickToInsert_DEPRECATED: !1,
    onDragStart: () => fullscreenValue.triggerActionEnum(Command.SET_TOOL_DEFAULT)
  }, {
    insertAction: e,
    getDragPreviewSrc: () => "",
    onPointerDownCallback: Ln,
    onPointerUpCallback: UH,
    dragPreviewPointerPosition: _$$N.CENTERED,
    recordingKey: t
  });
}
export function $$B8() {
  let e = useCurrentPublicPlan("useAreAdvancedShapesLocked");
  return useIsStarterPlan(e).unwrapOr(!1);
}
export function $$U10() {
  let e = selectCurrentFile();
  let t = useDispatch();
  return useCallback(() => {
    e && t(showModalHandler({
      type: V,
      data: {
        upsellSource: UpsellModalType.SHAPES_SIDEBAR,
        teamId: e.team?.id,
        openCheckoutInNewTab: !0
      }
    }));
  }, [e, t]);
}
export function $$G11() {
  let e = selectCurrentFile();
  let t = useDispatch();
  let i = consumptionPaywallUtils.useShouldHideStarterCtaForOpenFile();
  return useCallback(() => {
    e && t(showModalHandler({
      type: ConsumptionPaywallModalPlansPricing,
      data: {
        team: e.team,
        resource: FeatureFlag.ADVANCED_SHAPES,
        action: fileActionEnum.INSERT_ADVANCED_SHAPE,
        editorType: FFileType.WHITEBOARD,
        currentPlan: consumptionPaywallUtils.Plan.STARTER,
        upsellPlan: consumptionPaywallUtils.Plan.PRO,
        hideUpsellPlanCta: i
      }
    }));
  }, [e, t, i]);
}
export function $$K0() {
  return H(_$$w());
}
let H = _$$n(e => "developer" === e);
export const AE = $$K0;
export const B8 = $$R1;
export const HB = $$M2;
export const Kq = $$F3;
export const OP = $$D4;
export const U_ = $$P5;
export const Yg = $$A6;
export const ar = $$O7;
export const es = $$B8;
export const ke = $$L9;
export const uB = $$U10;
export const yX = $$G11;