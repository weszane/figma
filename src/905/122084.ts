import { jsx, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { d as _$$d } from "../vendor/797080";
import { bk } from "../vendor/693164";
import { DF } from "../vendor/463802";
import { ff, Ni, H2 } from "../vendor/408361";
import { mH } from "../figma_app/9619";
import { $D } from "../905/11";
export function $$p0(e, t, i, n) {
  var r = "";
  var l = !1;
  return (t.update(() => {
    let p = mH(e);
    let m = _$$d(t, p);
    let h = m.filter((e) => !!e.getParent() || ff(e));
    h.length !== m.length && $D(_$$e.EXTENSIBILITY, Error("Unable to render some HTML data in Lexical"), {
      extra: {
        htmlString: e,
        generatedNodes: m,
        validNodesToInsert: h
      }
    });
    0 === h.length && (l = !0);
    Ni().clear();
    H2(h);
    r = l || "markdown" !== i ? "" : bk(n, void 0, !0);
  }, {
    discrete: !0
  }), "markdown" === i) ? r : l ? '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}' : JSON.stringify(t.getEditorState().toJSON());
}
export function $$m1({
  htmlString: e
}) {
  let [t] = DF();
  useEffect(() => {
    $$p0(e, t, "json");
  }, [t, e]);
  return jsx(Fragment, {});
}
export const D = $$p0;
export const _ = $$m1;