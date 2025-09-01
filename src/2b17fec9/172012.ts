import { useEffect } from "react";
import { d4 } from "../vendor/514228";
import { glU, m1T } from "../figma_app/763686";
import { m0 } from "../figma_app/546509";
export function $$o0() {
  let e = m0();
  let t = d4(e => e.mirror.appModel.activeCanvasEditModeType);
  useEffect(() => {
    e && (e._keyboard_will_show_with_height = e => {
      glU.keyboardWillShowWithHeight(e);
    }, e._keyboard_will_hide = () => {
      t === m1T.TEXT && glU.setDefaultEditMode();
    }, window.FigmaAppObj ? (window.FigmaAppObj.keyboardWillShow = () => {
      glU.keyboardWillShow();
    }, window.FigmaAppObj.keyboardWillShowWithHeight = e => {
      glU.keyboardWillShowWithHeight(e);
    }) : window.FigmaAppObj = {
      keyboardWillShow: () => {
        glU.keyboardWillShow();
      },
      keyboardWillShowWithHeight: e => {
        glU.keyboardWillShowWithHeight(e);
      }
    });
  }, [e, t]);
  return null;
}
export const t = $$o0;