import { IssueCategory, SceneGraphTsApi } from "../figma_app/763686";
import { getCategoryPresetColor, getCategoryPresetLabel } from "../figma_app/781512";
export function $$a0(e) {
  return e.preset === IssueCategory.NONE ? e : {
    id: e.id,
    preset: IssueCategory.NONE,
    custom: {
      color: getCategoryPresetColor(e.preset),
      label: getCategoryPresetLabel(e.preset)
    }
  };
}
export function $$s1(e) {
  return SceneGraphTsApi.createUniqueAnnotationCategoryId(e.scene);
}
export const VK = $$a0;
export const fO = $$s1;