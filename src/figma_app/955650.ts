import { useSelector } from "../vendor/514228";
import { DesignGraphElements } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { L } from "../figma_app/634288";
import { qW } from "../figma_app/27927";
export function $$l6() {
  return !!$$m7();
}
export function $$d9() {
  return useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.STICKY);
}
export function $$c3() {
  return useSelector(e => {
    let t = e?.mirror?.appModel?.currentTool;
    return t === DesignGraphElements.CONNECTOR_ELBOWED || t === DesignGraphElements.CONNECTOR_STRAIGHT || (getFeatureFlags().ad_curved_connectors ?? !1) && t === DesignGraphElements.CONNECTOR_CURVED;
  });
}
export function $$u1() {
  return useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.CONNECTOR_ELBOWED);
}
export function $$p0() {
  return useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.CONNECTOR_STRAIGHT);
}
export function $$_2() {
  return useSelector(e => (getFeatureFlags().ad_curved_connectors ?? !1) && e?.mirror?.appModel?.currentTool === DesignGraphElements.CONNECTOR_CURVED);
}
export function $$h4() {
  return useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.COMMENTS);
}
export function $$m7() {
  return useSelector(e => {
    let t = e?.mirror?.appModel?.currentTool;
    return t && L(t) ? t : null;
  });
}
export function $$g5() {
  return useSelector(e => {
    let t = e?.mirror?.appModel?.currentTool;
    return t && qW(t) ? t : null;
  });
}
export function $$f8() {
  return useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.DROPPER_COLOR);
}
export const AT = $$p0;
export const OD = $$u1;
export const R0 = $$_2;
export const Uo = $$c3;
export const Vi = $$h4;
export const Yt = $$g5;
export const bu = $$l6;
export const ri = $$m7;
export const s3 = $$f8;
export const sT = $$d9;