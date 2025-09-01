import { Mx, Gu } from "../vendor/463802";
import { ie, Ni, lJ, vJ } from "../vendor/408361";
import { useLayoutEffect, useEffect, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
let h = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
let d = h ? useLayoutEffect : useEffect;
let p = {
  tag: "history-merge"
};
export function $$g0({
  initialConfig: e,
  children: r
}) {
  let n = useMemo(() => {
    let {
      theme,
      namespace,
      nodes,
      onError,
      editorState,
      html
    } = e;
    let m = Mx(null, theme);
    let v = ie({
      editable: e.editable,
      html,
      namespace,
      nodes,
      onError: e => onError(e, v),
      theme
    });
    (function (e, r) {
      if (null !== r) {
        if (void 0 === r) e.update(() => {
          let r = Ni();
          if (r.isEmpty()) {
            let n = lJ();
            r.append(n);
            let i = h ? document.activeElement : null;
            (null !== vJ() || null !== i && i === e.getRootElement()) && n.select();
          }
        }, p);else if (null !== r) switch (typeof r) {
          case "string":
            {
              let n = e.parseEditorState(r);
              e.setEditorState(n, p);
              break;
            }
          case "object":
            e.setEditorState(r, p);
            break;
          case "function":
            e.update(() => {
              Ni().isEmpty() && r(e);
            }, p);
        }
      }
    })(v, editorState);
    return [v, m];
  }, []);
  d(() => {
    let r = e.editable;
    let [i] = n;
    i.setEditable(void 0 === r || r);
  }, []);
  return jsx(Gu.Provider, {
    value: n,
    children: r
  });
}
export const n = $$g0;