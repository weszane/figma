import { useCallback } from "react";
import { hV } from "../figma_app/387100";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useLocalStorageSync } from "../905/657224";
import { debugState } from "../905/407919";
import { subscribeAndAwaitData } from "../905/553831";
import { IT } from "../figma_app/566371";
import { A } from "../905/963262";
import { qZ } from "../figma_app/451396";
import { v4 } from "../figma_app/655139";
import { wJ } from "../figma_app/630951";
import { eY } from "../figma_app/722362";
import { _S } from "../figma_app/516028";
import { FileCanAccessFullCodeConnect, CodeConnectForNodeLk } from "../figma_app/43951";
import { HX, ad, xQ } from "../figma_app/97042";
import { mapPlatformToFramework } from "../905/359509";
export function $$y1(e, t, r = new Set()) {
  hV(e, e => {
    r.has(e.guid) || "INSTANCE" !== e.type && "SYMBOL" !== e.type || t.push(e);
  });
  return t;
}
export function $$b0() {
  let e = debugState.getState();
  let t = "fullscreen" === e.selectedView.view ? e.selectedView.fileKey : null;
  let r = eY();
  let y = useAtomWithSubscription(_S);
  let b = v4();
  let T = mapPlatformToFramework(b.id);
  let [I] = useLocalStorageSync("code-connect-selected-language-storage-key", T);
  let [S] = IT(FileCanAccessFullCodeConnect({
    key: t ?? ""
  }));
  return useCallback(async e => {
    var n;
    if (!e || !y || !t) return {
      imports: [],
      codeConnectForNodes: new Map()
    };
    let a = [];
    let s = new Map();
    for (let o of (n = [], hV(e, e => {
      "INSTANCE" === e.type && n.push(e);
    }), n)) {
      let {
        backingNodeId,
        backingLibraryKey
      } = HX(o.guid, r, y);
      let i = ad(o.guid, r, t, !1, y);
      if (!backingLibraryKey || !backingNodeId) continue;
      let d = await subscribeAndAwaitData(CodeConnectForNodeLk, {
        libraryKey: backingLibraryKey,
        nodeId: backingNodeId,
        instances: i,
        openFileKey: t,
        isCommunityLibrary: wJ(backingLibraryKey)
      });
      if ("loaded" !== d.file.status) continue;
      let p = d.file.data?.code_connect_for_node_lk;
      if (!p) continue;
      let h = xQ({
        node: o,
        codeConnect: p,
        label: I,
        filePermissionData: S.data
      });
      let m = h.doc;
      let E = m.templateData?.imports?.map(e => e) ?? [];
      a.push(...E);
      let b = m.template;
      if (!b) continue;
      let T = await qZ({
        node: o,
        instanceFigmadocs: h.instanceFigmadocs,
        scene: r,
        template: b,
        openLibraryKey: y,
        fileKey: t
      });
      if (T && "SUCCESS" === T.result) {
        let e = {
          ...A({
            output: T,
            sceneGraph: r,
            includeInstancePills: !1,
            unrenderableInstanceMessage: "{/* Code Connect Logic Instance */}"
          }),
          imports: a ?? []
        };
        s.set(o.guid, e);
      }
    }
    return {
      imports: a,
      codeConnectForNodes: s
    };
  }, [r, y, t, I, S]);
}
export const B = $$b0;
export const r = $$y1;