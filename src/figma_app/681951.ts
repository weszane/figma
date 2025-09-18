import { useEffect } from "react";
import { df } from "../figma_app/728005";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, Xr, atomStoreManager } from "../figma_app/27355";
import { desktopAPIInstance } from "../figma_app/876459";
import { Tv } from "../figma_app/311375";
import { Jr } from "../figma_app/624361";
import { useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { Kx, iy } from "../figma_app/342355";
import { $w } from "../figma_app/935144";
import { t2 } from "../figma_app/911720";
let $$h1 = atom(null);
let $$m0 = atom(null);
let $$g2 = atom(null);
export function $$f3() {
  (function () {
    let e = Tv()[0] ?? null;
    let {
      tlfGuid,
      pageGuid
    } = useStrictDeepEqualSceneValue((e, t) => {
      if (t) {
        let r = e.get(t);
        if (r) return {
          tlfGuid: r.findContainingTopLevelFrameOrSelf(),
          pageGuid: r.containingCanvas ?? null
        };
      }
      return {
        tlfGuid: null,
        pageGuid: null
      };
    }, e);
    let i = Xr($$h1);
    let a = Xr($$m0);
    let o = Xr($$g2);
    useEffect(() => {
      E(e, i, "autocomplete://selection");
    }, [e, i]);
    useEffect(() => {
      E(tlfGuid, a, "autocomplete://tlf");
    }, [tlfGuid, a]);
    useEffect(() => {
      E(pageGuid, o, "autocomplete://page");
    }, [pageGuid, o]);
  })();
  return null;
}
function E(e, t, r) {
  let n = getSingletonSceneGraph().get(e ?? null);
  if (n) {
    if ("xml" === atomStoreManager.get(Kx)) {
      t(df({
        node: n,
        includeComponents: !0,
        codeConnectMapping: null,
        codebaseSuggestions: null,
        loadImageByHash: e => Jr().loadImageByHash(e),
        configSettings: iy()
      }).content.map(e => e.text).join("\n\n"));
      desktopAPIInstance?.sendMCPUpdate("resource", {
        uri: r
      });
    } else {
      let e = $w(n);
      t2(n, e, "web", () => Promise.resolve([{}, {}])).then(([e]) => {
        t(e.content.map(e => e.text).join("\n\n"));
        desktopAPIInstance?.sendMCPUpdate("resource", {
          uri: r
        });
      });
    }
  } else {
    t(null);
    desktopAPIInstance?.sendMCPUpdate("resource", {
      uri: r
    });
  }
}
export const Lv = $$m0;
export const jb = $$h1;
export const oG = $$g2;
export const y6 = $$f3;