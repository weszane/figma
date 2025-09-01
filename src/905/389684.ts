import { useMemo, useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { sx } from "../905/449184";
import { g as _$$g } from "../905/880308";
import { Zn } from "../figma_app/933328";
import { Lo, Ce, to } from "../905/156213";
import { Kz } from "../905/760074";
import { q5 } from "../figma_app/516028";
import { LH } from "../905/872904";
import { cX, Wv } from "../figma_app/633080";
import { Vg } from "../905/300621";
import { r6 } from "../905/542608";
import { T } from "../figma_app/472024";
import { FX } from "../905/753512";
export function $$_0({
  entrypoint: e,
  modalType: t,
  initialTab: i
}) {
  let _ = wA();
  let A = d4(e => e.modalShown);
  let y = q5();
  let b = LH();
  let v = "editor" === t;
  let I = useMemo(() => "editor" === t && A?.type === cX || "figjam" === t && A?.type === Vg.type, [A?.type, t]);
  let E = useCallback(() => {
    let n = _$$g();
    sx("toggle_library_modal", {
      action: I ? "close" : "open",
      entrypoint: e,
      libraryModalSessionId: v ? n : void 0,
      fileKey: y?.key,
      orgId: b,
      isBranch: y ? Kz(y) : void 0,
      isRedesign: v,
      tab: v ? FX(i) : void 0
    }, {
      forwardToDatadog: !0
    });
    I ? e === r6.LEFT_RAIL_FOOTER ? _(Lo()) : _(Ce()) : "editor" === t ? (_(to({
      type: T,
      data: {
        entrypoint: e,
        initialTab: i ?? Wv.LIBRARIES,
        sessionId: n
      }
    })), _(Zn())) : _(to({
      type: Vg,
      data: {
        tab: Wv.LIBRARIES
      }
    }));
  }, [I, e, v, y, b, _, t, i]);
  return {
    isLibraryModalShown: I,
    onToggleLibraryModal: E
  };
}
export const u = $$_0;