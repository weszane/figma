import { ruz } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { UN } from "../905/700578";
import { zl, eU, Xr, md } from "../figma_app/27355";
import { Vs } from "../figma_app/930338";
import { Ay } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { Y5 } from "../figma_app/455680";
let $$u3 = async ({
  abortController: e,
  params: {
    prompt: t,
    imageUrls: r
  },
  clientLifecycleId: n
}) => {
  let i = {
    ..._$$Ay(),
    clientLifecycleId: n
  };
  let a = Ay.design.generateVideo({
    prompt: t,
    imageUrls: r
  }, i);
  let o = new Promise(t => {
    e.signal.addEventListener("abort", () => t("aborted"));
  });
  let c = await Promise.race([a, o]);
  "aborted" !== c && (zl.set(p, e => ({
    ...e,
    pendingOperations: [...e.pendingOperations, {
      ...c,
      status: "pending",
      prompt: t
    }]
  })), setTimeout(async function e() {
    let r = await Ay.design.pollVideo(c, i);
    if (!r.done) {
      setTimeout(e, 1e3);
      return;
    }
    zl.set(p, e => {
      if (!r.video) return e;
      let n = {
        ...c,
        status: "success",
        prompt: t,
        video: r.video
      };
      return e.currentOperation ? {
        ...e,
        pendingOperations: e.pendingOperations.map(e => e.operationId === n.operationId ? n : e)
      } : {
        ...e,
        currentOperation: n,
        pendingOperations: e.pendingOperations.filter(e => e.operationId !== n.operationId)
      };
    });
  }, 1e3));
};
let p = eU({
  pendingOperations: []
});
let _ = eU(null, (e, t) => {
  let r = e(p).currentOperation;
  r && ("success" === r.status && l7.ai("make video", () => {
    if (!ruz) return;
    let e = UN();
    let t = Y5.getViewportInfo();
    let i = e.createNode("RECTANGLE");
    i.size = {
      x: 1280,
      y: 720
    };
    i.x = t.offsetX - i.size.x / 2;
    i.y = t.offsetY - i.size.y / 2;
    let s = Vs(r.video);
    ruz.insertVideoInNode(i.id, s, r.prompt);
    Y5.triggerAction("commit");
  }), t(h));
});
let h = eU(null, (e, t) => {
  t(p, e => {
    let t = e.pendingOperations.find(e => "success" === e.status || "error" === e.status);
    return t ? {
      ...e,
      currentOperation: t,
      pendingOperations: e.pendingOperations.filter(e => e.operationId !== t.operationId)
    } : {
      ...e,
      currentOperation: void 0
    };
  });
});
export function $$m2() {
  return Xr(_);
}
export function $$g1() {
  return Xr(h);
}
export function $$f0() {
  return md(p).currentOperation;
}
export const XV = $$f0;
export const hk = $$g1;
export const sF = $$m2;
export const wx = $$u3;