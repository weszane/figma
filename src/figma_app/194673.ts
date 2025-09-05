import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { b } from "../figma_app/517135";
import { uQ } from "../figma_app/151869";
import { _W, gl } from "../905/216495";
let l = e => "INNER_SHADOW" === e.type || "DROP_SHADOW" === e.type || "BACKGROUND_BLUR" === e.type || "FOREGROUND_BLUR" === e.type;
export function $$d0() {
  let e = useSelector(e => e.mirror.selectionProperties.effects);
  let t = useSelector(e => _W(b(e.mirror.selectionProperties, "inheritEffectStyleKey"), void 0));
  let r = useSelector(e => _W(e.mirror.selectionProperties.inheritEffectStyleKey, void 0));
  let d = uQ();
  return useMemo(() => !d || gl(e) ? [] : [{
    shadowsAndBlurs: (e || []).filter(e => e.visible && l(e)).map((e, n) => ({
      name: t,
      key: r,
      ...e,
      id: `effect-${n}`
    })),
    effects: (e || []).filter(e => e.visible && !l(e)).map((e, n) => ({
      name: t,
      key: r,
      ...e,
      id: `effect-${n}`
    })),
    styleName: t,
    styleKey: r
  }], [d, e, t, r]);
}
export const G = $$d0;