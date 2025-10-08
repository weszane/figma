import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { selectWithShallowEqual } from "../905/103090";
import { stylesAtom } from "../905/125333";
import { y as _$$y } from "../figma_app/404310";
import { v4 } from "../figma_app/655139";
import { t } from "../905/241707";
import { NM, Zl } from "../figma_app/311375";
import { Q } from "../905/217916";
import { getStyleSubscriptionInfo, getStyleSubscriptionName } from "../figma_app/646357";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { cM } from "../figma_app/803787";
import { wi } from "../905/55146";
import { SubscriptionStatusEnum } from "../figma_app/633080";
import { uQ } from "../figma_app/151869";
import { Ig, dc, rP } from "../figma_app/155647";
import { QT } from "../figma_app/152690";
export function $$T0(e = "") {
  let t = useSelector(cM);
  let r = useSelector(wi);
  let a = useMemo(() => Object.values(t).find(t => t.key === e), [t, e]);
  let s = useMemo(() => Object.values(r).find(t => t.key === e), [r, e]);
  return a ?? s;
}
export function $$I1() {
  let {
    selectionColors,
    selectionStyles,
    library,
    sceneGraph
  } = selectWithShallowEqual(e => ({
    selectionColors: e.mirror.selectionPaints.paints,
    selectionStyles: e.mirror.selectionPaints.styles,
    library: e.library,
    sceneGraph: e.mirror.sceneGraph
  }));
  let a = NM();
  let o = Ig();
  let l = uQ();
  let m = useDeepEqualSceneValue((e, t) => {
    let r = e?.get(t ?? "");
    return !!r && r.childCount > 0 && r.visibleChildren.length > 0;
  }, l);
  let g = Q();
  let f = v4();
  let T = useCallback((e, t) => {
    let {
      styleKey,
      styleGUIDs
    } = e;
    let s = getStyleSubscriptionInfo(styleKey, styleGUIDs, library);
    if (!s || styleGUIDs.length < 1) return null;
    let o = Zl(sceneGraph, styleGUIDs[0]);
    if (!o) return null;
    let l = o.fills.map(e => dc(e, t));
    return rP(getStyleSubscriptionName(s, sceneGraph), s, l, styleGUIDs);
  }, [library, sceneGraph]);
  return useMemo(() => {
    let r = a || m ? selectionColors : [];
    let n = r.filter(({
      isOnlyDirectlySelected: e
    }) => !e).filter(({
      paint: e
    }) => !!e.colorVar && !!e.colorVar.value).map(({
      paint: e
    }) => dc(e, o));
    let i = r.filter(({
      isOnlyDirectlySelected: e
    }) => !e).filter(({
      paint: e
    }) => !e.colorVar || !e.colorVar.value).map(({
      paint: e
    }) => dc(e, o));
    let s = (m ? selectionStyles : []).filter(({
      isOnlyDirectlySelected: e
    }) => !e).map(e => T(e, o)).filter(t).sort(S);
    return {
      selectionVariables: n,
      selectionStyles: QT(s, l, g.inspectionMode, f, !0),
      selectionValues: i
    };
  }, [m, a, selectionColors, selectionStyles, l, g.inspectionMode, f, o, T]);
}
let S = (e, t) => e.name.localeCompare(t.name);
export function $$v2(e) {
  let {
    styles
  } = useAtomWithSubscription(stylesAtom);
  let r = useSelector(e => e.library);
  let n = styles.map(e => {
    let t = getStyleSubscriptionInfo(e.key, e.guids, r);
    return t && t.kind !== SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY ? {
      ...e,
      ...t.value,
      styleNodeId: e.guids[0]
    } : null;
  }).filter(t).filter(t => t?.style_type === e).sort((e, t) => e.styleName.localeCompare(t.styleName));
  return _$$y({
    items: n,
    shouldResetOnSelectionChange: !0,
    trackingProperties: {
      name: "Selection styles panel show more",
      resourceType: e,
      count: n.length
    }
  });
}
export const Fj = $$T0;
export const MK = $$I1;
export const q6 = $$v2;