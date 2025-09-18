import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Xr } from "../figma_app/27355";
import { B4 } from "../figma_app/385215";
import { $ } from "../905/532878";
import { KP } from "../figma_app/31103";
import { useDevModeFocusId } from "../figma_app/88239";
import { hideDropdownAction, selectViewAction } from "../905/929976";
import { getSelectedView } from "../figma_app/386952";
import { FEditorType } from "../figma_app/53721";
export function $$m0({
  onShow: e,
  entryPoint: t,
  variableId: i
}) {
  let m = getSelectedView();
  let h = B4();
  let g = useDispatch();
  let f = useDevModeFocusId();
  let _ = Xr($);
  let A = KP("full_table", t);
  return useCallback(() => {
    h();
    g(hideDropdownAction());
    e?.();
    _(t);
    A();
    g(selectViewAction({
      ...m,
      view: "fullscreen",
      editorType: FEditorType.DevHandoff,
      showDevModeVariablesTable: !0,
      devModeVariablesTableSelectedVariable: i,
      devModeVariablesTableBackFocusId: f || void 0,
      devModeFocusId: void 0
    }));
  }, [h, g, e, _, t, A, m, i, f]);
}
export const g = $$m0;