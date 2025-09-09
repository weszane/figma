import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { jD } from "../905/765855";
import { LR } from "../figma_app/120210";
import { t as _$$t } from "../905/192333";
export function $$l0(e) {
  let t = useSelector(e => e.universalInsertModal);
  let i = LR();
  let l = useDispatch();
  return useCallback(() => {
    t.pinned === _$$t.NOT_PINNED && (i(), e?.hideTooltips && l(jD()));
  }, [t, i, e, l]);
}
export const b = $$l0;
