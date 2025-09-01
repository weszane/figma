import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { Lz, bM, sg, CH } from "../figma_app/770359";
import { DP } from "../905/640017";
import { _Z } from "../905/319777";
let d = Lz.theme({
  "&": {
    backgroundColor: "var(--color-bg-primary)"
  },
  "&.cm-editor": {
    height: "100%",
    backgroundColor: "var(--color-bg-primary)"
  },
  "&.cm-focused": {
    outline: "1px solid var(--color-border-selected)",
    borderRadius: "var(--radius-medium)"
  },
  ".cm-gutters": {
    display: "none"
  },
  ".cm-activeLine": {
    backgroundColor: "transparent"
  },
  ".cm-line": {
    padding: "0 var(--spacer-2-5)"
  },
  ".cm-scroller": {
    backgroundColor: "var(--color-bg-secondary)",
    borderRadius: "var(--radius-medium)",
    overflow: "auto"
  },
  ".cm-content": {
    padding: "var(--spacer-2) 0"
  }
});
export function $$t0({
  customExtensions: r,
  minHeight: e,
  minWidth: o,
  maxHeight: t,
  maxWidth: c,
  width: s,
  recordingKey: m,
  ...b
}) {
  let g = DP();
  let h = useMemo(() => function (r) {
    let e = [d];
    "dark" === r ? e.push(bM) : e.push(sg);
    return e;
  }(g), [g]);
  let p = useMemo(() => Lz.theme({
    "&": {
      minHeight: e ?? null,
      minWidth: o ?? null,
      maxHeight: t ?? null,
      maxWidth: c ?? null,
      width: s ?? null
    }
  }), [e, o, t, c, s]);
  let v = useMemo(() => [...(r ?? []), _Z("index.html"), Lz.lineWrapping, p, [d, h]], [r, h, p]);
  return jsx(CH, {
    ...b,
    extensions: v
  });
}
export const _$$default = $$t0;