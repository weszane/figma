import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { nT } from "../figma_app/53721";
import { $A } from "../905/862883";
export function $$$$o1() {
  let e = useSelector(e => e.selectedView.editorType);
  useSelector(e => "orgAdminSettings" === e.selectedView.view) && (e = nT.DevHandoff);
  return useMemo(() => $$l0(e), [e]);
}
export function $$l0(e) {
  switch (e) {
    case nT.Design:
    case nT.Sites:
    case nT.Figmake:
    case nT.Illustration:
      return $A.Design;
    case nT.Cooper:
      return $A.Cooper;
    case nT.Slides:
      return $A.Slides;
    case nT.DevHandoff:
      return $A.Handoff;
    case nT.Whiteboard:
      return $A.FigJam;
  }
}
export const B = $$l0;
export const o = $$$$o1;