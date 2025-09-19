import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { generateUUIDv4 } from "../905/871474";
import { Zn } from "../figma_app/933328";
import { popModalStack, hideModal, showModalHandler } from "../905/156213";
import { isBranchAlt } from "../905/760074";
import { selectCurrentFile } from "../figma_app/516028";
import { getParentOrgId } from "../905/872904";
import { LIBRARY_PREFERENCES_MODAL, LibraryTabEnum } from "../figma_app/633080";
import { Vg } from "../905/300621";
import { r6 } from "../905/542608";
import { T } from "../figma_app/472024";
import { FX } from "../905/753512";
export function $$_0({
  entrypoint: e,
  modalType: t,
  initialTab: i
}) {
  let _ = useDispatch();
  let A = useSelector(e => e.modalShown);
  let y = selectCurrentFile();
  let b = getParentOrgId();
  let v = "editor" === t;
  let I = useMemo(() => "editor" === t && A?.type === LIBRARY_PREFERENCES_MODAL || "figjam" === t && A?.type === Vg.type, [A?.type, t]);
  let E = useCallback(() => {
    let n = generateUUIDv4();
    trackEventAnalytics("toggle_library_modal", {
      action: I ? "close" : "open",
      entrypoint: e,
      libraryModalSessionId: v ? n : void 0,
      fileKey: y?.key,
      orgId: b,
      isBranch: y ? isBranchAlt(y) : void 0,
      isRedesign: v,
      tab: v ? FX(i) : void 0
    }, {
      forwardToDatadog: !0
    });
    I ? e === r6.LEFT_RAIL_FOOTER ? _(popModalStack()) : _(hideModal()) : "editor" === t ? (_(showModalHandler({
      type: T,
      data: {
        entrypoint: e,
        initialTab: i ?? LibraryTabEnum.LIBRARIES,
        sessionId: n
      }
    })), _(Zn())) : _(showModalHandler({
      type: Vg,
      data: {
        tab: LibraryTabEnum.LIBRARIES
      }
    }));
  }, [I, e, v, y, b, _, t, i]);
  return {
    isLibraryModalShown: I,
    onToggleLibraryModal: E
  };
}
export const u = $$_0;