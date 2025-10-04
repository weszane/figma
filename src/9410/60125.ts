import { AppStateTsApi, SelfDesignType } from "../figma_app/763686";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { useWindowDimensions } from "../905/745972";
import { _ as _$$_ } from "../figma_app/658134";
import { S } from "../figma_app/109947";
import { isNotInFocusedNodeView } from "../figma_app/327588";
import { assetCategoryAtom, AssetCategoryEnum } from "../figma_app/639711";
import { getSidebarSplitPosition, getPropertiesPanelSplitPosition } from "../figma_app/740163";
import { getObservableValue } from "../figma_app/84367";
import { C as _$$C } from "../figma_app/859828";
export function $$$$h0() {
  let {
    windowInnerWidth
  } = useWindowDimensions();
  let t = _$$C()?.bottomRightToolsNode;
  let i = useAtomWithSubscription(S);
  let h = getSidebarSplitPosition();
  let m = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  let f = isNotInFocusedNodeView();
  let [g] = useAtomValueAndSetter(assetCategoryAtom);
  let _ = g === AssetCategoryEnum.ASSETS && f && m === SelfDesignType.SELF;
  let x = m === SelfDesignType.DESIGN;
  let y = getPropertiesPanelSplitPosition();
  let b = _ ? _$$_ : h + _$$_;
  let C = getObservableValue(AppStateTsApi?.uiState().showPropertiesPanel, !1);
  let v = x && C ? y : 0;
  if (t) {
    let r = t.getBoundingClientRect();
    let n = windowInnerWidth - b - v;
    let a = i?.current?.getBoundingClientRect().width || 207;
    let s = b + (n - a) / 2 + a + 12 - r.left;
    s > 0 && (v += 2 * s);
  }
  return {
    leftOffset: b,
    rightOffset: v
  };
}
export const h = $$$$h0;