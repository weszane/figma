import { xb } from "../figma_app/465776";
import { z } from "../905/239603";
import { FProductAccessType, FFileType, FPlanAccessType } from "../figma_app/191312";
export let $$s4 = {
  DESIGN: FProductAccessType.DESIGN,
  WHITEBOARD: FProductAccessType.WHITEBOARD,
  DEV_MODE: FProductAccessType.DEV_MODE
};
z.nativeEnum($$s4);
export let $$o1 = z.union([z.nativeEnum(FProductAccessType), z.literal("figjam")]);
export function $$l7(e) {
  switch (e) {
    case FFileType.DESIGN:
    case FFileType.SLIDES:
    case FFileType.SITES:
    case FFileType.COOPER:
    case FFileType.FIGMAKE:
    case null:
      return $$s4.DESIGN;
    case FFileType.WHITEBOARD:
      return $$s4.WHITEBOARD;
    default:
      xb(e);
  }
}
export function $$d8(e) {
  return $$c0(e) ?? FProductAccessType.DESIGN;
}
export function $$c0(e) {
  switch (e) {
    case FFileType.DESIGN:
      return FProductAccessType.DESIGN;
    case FFileType.WHITEBOARD:
      return FProductAccessType.WHITEBOARD;
    case FFileType.SLIDES:
      return FProductAccessType.SLIDES;
    case FFileType.SITES:
      return FProductAccessType.SITES;
    case FFileType.FIGMAKE:
      return FProductAccessType.FIGMAKE;
    case FFileType.COOPER:
      return FProductAccessType.COOPER;
    case null:
      return null;
    default:
      xb(e);
  }
}
export function $$u6(e) {
  switch (e) {
    case "design":
      return FProductAccessType.DESIGN;
    case "figjam":
    case "whiteboard":
      return FProductAccessType.WHITEBOARD;
    case "dev_mode":
      return FProductAccessType.DEV_MODE;
  }
  return null;
}
export function $$p5(e, t) {
  return e === FFileType.WHITEBOARD ? t?.whiteboardPaidStatus === FPlanAccessType.RESTRICTED : e === FFileType.DESIGN && t?.designPaidStatus === FPlanAccessType.RESTRICTED;
}
export function $$_3(e) {
  return e === FProductAccessType.DESIGN || e === FProductAccessType.WHITEBOARD || e === FProductAccessType.DEV_MODE;
}
let h = {
  [FProductAccessType.DESIGN]: 10,
  [FProductAccessType.SITES]: 20,
  [FProductAccessType.FIGMAKE]: 30,
  [FProductAccessType.DEV_MODE]: 40,
  [FProductAccessType.WHITEBOARD]: 50,
  [FProductAccessType.SLIDES]: 60,
  [FProductAccessType.COOPER]: 70
};
export function $$m2(e, t) {
  return h[e] - h[t];
}
export const Ci = $$c0;
export const DK = $$o1;
export const Hn = $$m2;
export const PO = $$_3;
export const Te = $$s4;
export const _R = $$p5;
export const px = $$u6;
export const vc = $$l7;
export const wR = $$d8;