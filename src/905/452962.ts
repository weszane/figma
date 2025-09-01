import { Bll, mSn } from "../figma_app/763686";
import { AP, h9 } from "../figma_app/781512";
export function $$a0(e) {
  return e.preset === Bll.NONE ? e : {
    id: e.id,
    preset: Bll.NONE,
    custom: {
      color: AP(e.preset),
      label: h9(e.preset)
    }
  };
}
export function $$s1(e) {
  return mSn.createUniqueAnnotationCategoryId(e.scene);
}
export const VK = $$a0;
export const fO = $$s1;