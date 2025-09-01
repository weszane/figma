import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { lz } from "../figma_app/212767";
import { Xl } from "../905/195478";
import { V } from "../3592/617429";
export function $$p0({
  code: e,
  language: t,
  name: r = "Code Connect",
  pills: p = {},
  children: l,
  reformatOnInstanceChange: m = !1,
  noFadeAnimation: c = !1,
  onboardingKey: E
}) {
  let d = lz();
  let f = function (e) {
    let t = e.split("\n");
    let r = [];
    for (let e of t) if (e.includes("_INTERNAL_PILL_KEY_")) {
      let t = e.length - e.trimStart().length;
      for (let n of e.split(/(_INTERNAL_PILL_KEY_\d+_)/g)) (n.startsWith("_INTERNAL_PILL_KEY_") || n.trim()) && r.push(" ".repeat(t) + n.trim());
    } else r.push(e);
    return r.join("\n");
  }(V(e, !["javascript", "jsx", "typescript", "tsx", "html"].includes(t), {
    printWidth: Math.floor(d / 8),
    ...("html" === t ? {
      parser: "html"
    } : {})
  }) || "");
  let u = useMemo(() => {
    if (f) {
      let e = Xl(f.replace(";<", "<").trim());
      let n = Xl(f.replace(/import[\s\S]*?from\s+['"][^'"]+['"];?/g, "").trim().replace(";<", "<").trim());
      for (let t = 0; t < e.length - n.length; t++) e[t].excludeFromCopy = !0;
      return {
        language: t,
        name: r,
        lines: e,
        pills: p
      };
    }
    return {
      language: t,
      name: r,
      lines: []
    };
  }, [f, m ? p : null]);
  return jsx("div", {
    className: c ? void 0 : "code_connect_section--codeSections--ikkbZ",
    "data-onboarding-key": E,
    children: l(u)
  });
}
export const CodeConnectSection = $$p0;