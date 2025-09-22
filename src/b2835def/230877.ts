import { jsx } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import s from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { lz } from "../figma_app/212767";
import { Dm } from "../figma_app/8833";
import { getSelectedEditorType } from "../figma_app/976749";
import { iT } from "../figma_app/74165";
import { getPropertiesPanelSplitPosition, EditorPreferencesApi } from "../figma_app/740163";
import { getObservableOrFallback } from "../figma_app/84367";
import { FEditorType } from "../figma_app/53721";
import { Ds } from "../1528/88743";
import { M$q, y9S } from "../figma_app/27776";
var l = s;
export function $$_0(e) {
  let t;
  let i = lz();
  let s = getPropertiesPanelSplitPosition();
  let _ = getSelectedEditorType();
  let {
    isPropertiesPanelCollapsed
  } = iT();
  let v = useAtomWithSubscription(Ds);
  let y = getObservableOrFallback(EditorPreferencesApi().renderRulers);
  t = {
    right: `calc(${_ === FEditorType.DevHandoff ? i : s}px + ${parsePxNumber(M$q)}px)`,
    top: `${parsePxNumber(M$q)}px`
  };
  isPropertiesPanelCollapsed && (t = {
    ...t,
    right: `calc(${v}px + ${parsePxNumber(M$q)}px)`
  });
  y && (t = {
    ...t,
    top: `calc(${parsePxNumber(M$q)}px + ${parsePxNumber(y9S)}px)`
  });
  return jsx("div", {
    style: t,
    className: l()("nav_container--flexContainer--3Us-2 nav_container--baseContainer--QideS overflow--overflowYAuto--nfK38 overflow--momentumScroll--qtsu7", Dm, e.className),
    children: e.children
  });
}
export const K = $$_0;