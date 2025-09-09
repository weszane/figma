import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Fullscreen, LayoutTabType } from "../figma_app/763686";
import { m0 } from "../figma_app/546509";
export function $$o0() {
  let e = m0();
  let t = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  useEffect(() => {
    e && (e._keyboard_will_show_with_height = e => {
      Fullscreen.keyboardWillShowWithHeight(e);
    }, e._keyboard_will_hide = () => {
      t === LayoutTabType.TEXT && Fullscreen.setDefaultEditMode();
    }, window.FigmaAppObj ? (window.FigmaAppObj.keyboardWillShow = () => {
      Fullscreen.keyboardWillShow();
    }, window.FigmaAppObj.keyboardWillShowWithHeight = e => {
      Fullscreen.keyboardWillShowWithHeight(e);
    }) : window.FigmaAppObj = {
      keyboardWillShow: () => {
        Fullscreen.keyboardWillShow();
      },
      keyboardWillShowWithHeight: e => {
        Fullscreen.keyboardWillShowWithHeight(e);
      }
    });
  }, [e, t]);
  return null;
}
export const t = $$o0;
