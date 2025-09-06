import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { FEditorType } from "../figma_app/53721";
import { $A } from "../905/862883";
export function $$$$o1() {
  let e = useSelector(e => e.selectedView.editorType);
  useSelector(e => "orgAdminSettings" === e.selectedView.view) && (e = FEditorType.DevHandoff);
  return useMemo(() => $$l0(e), [e]);
}
export function $$l0(e) {
  switch (e) {
    case FEditorType.Design:
    case FEditorType.Sites:
    case FEditorType.Figmake:
    case FEditorType.Illustration:
      return $A.Design;
    case FEditorType.Cooper:
      return $A.Cooper;
    case FEditorType.Slides:
      return $A.Slides;
    case FEditorType.DevHandoff:
      return $A.Handoff;
    case FEditorType.Whiteboard:
      return $A.FigJam;
  }
}
export const B = $$l0;
export const o = $$$$o1;