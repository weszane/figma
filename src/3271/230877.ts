import { jsx } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import n from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { lz } from "../figma_app/212767";
import { jsFullscreenPreventEventCapture } from "../figma_app/8833";
import { getSelectedEditorType } from "../figma_app/976749";
import { iT } from "../figma_app/74165";
import { getPropertiesPanelSplitPosition, EditorPreferencesApi } from "../figma_app/740163";
import { getObservableOrFallback } from "../figma_app/84367";
import { FEditorType } from "../figma_app/53721";
import { Ds } from "../1528/88743";
import { M$q, y9S } from "../figma_app/27776";
var i = n;
export function $$h0(e) {
  let t;
  let s = lz();
  let n = getPropertiesPanelSplitPosition();
  let h = getSelectedEditorType();
  let {
    isPropertiesPanelCollapsed
  } = iT();
  let f = useAtomWithSubscription(Ds);
  let C = getObservableOrFallback(EditorPreferencesApi().renderRulers);
  t = {
    right: `calc(${h === FEditorType.DevHandoff ? s : n}px + ${parsePxNumber(M$q)}px)`,
    top: `${parsePxNumber(M$q)}px`
  };
  isPropertiesPanelCollapsed && (t = {
    ...t,
    right: `calc(${f}px + ${parsePxNumber(M$q)}px)`
  });
  C && (t = {
    ...t,
    top: `calc(${parsePxNumber(M$q)}px + ${parsePxNumber(y9S)}px)`
  });
  return jsx("div", {
    style: t,
    className: i()("nav_container--flexContainer--3Us-2 nav_container--baseContainer--QideS overflow--overflowYAuto--nfK38 overflow--momentumScroll--qtsu7", jsFullscreenPreventEventCapture, e.className),
    children: e.children
  });
}
export const K = $$h0;