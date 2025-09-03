import _require from "../5973/625973";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { wA } from "../vendor/514228";
import { S as _$$S, V } from "../905/802325";
import { zk, l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { j as _$$j } from "../figma_app/602140";
import { Uz, xH } from "../905/63728";
import { xi } from "../905/714362";
import { s as _$$s } from "../cssbuilder/589278";
import { tx } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { Y } from "../905/830372";
import { Ay } from "../figma_app/432652";
import { JT } from "../figma_app/632248";
import { RL, qy } from "../figma_app/862289";
import { r } from "../905/189361";
import { XG } from "../figma_app/360824";
import { A } from "../9410/63984";
import { Ik, r1 } from "../9410/40486";
import { F as _$$F2 } from "../905/382217";
let l = "plugin_playground";
async function d({
  node: e,
  jsx: t,
  oldJsx: a,
  serializerOptions: n,
  clientLifecycleId: i,
  timingManager: d,
  nodeHandlerManager: u,
  transformCustomJSX: c
}) {
  d?.mark("deserializeStart");
  let f = _$$S(t)?.[0];
  if (!f) {
    d?.mark("deserializeEnd");
    return Error("Invalid jsx");
  }
  let m = a ? _$$S(a)?.[0] : void 0;
  c(f);
  m && c(m);
  let h = !!m && V(m) !== V(f);
  let g = await _require;
  let x = await g.reconcileJSXElement({
    jsxElement: f,
    node: e,
    oldJSXElement: m,
    options: n,
    editScopeType: zk.AI,
    outerEditScopeLabel: `afi{name:make-edits,clid:${i}}`
  });
  d?.mark("deserializeEnd");
  let p = x.node;
  if (!p) throw Error("Couldn't parse jsx");
  let b = u.handleNodesForRoot(p);
  l7.ai("make-edits", () => {
    if (e.firstDraftData) {
      p.firstDraftData = e.firstDraftData;
      let t = e.getSharedPluginData(l, "userPrompt");
      p.setSharedPluginData(l, "userPrompt", t);
    }
  });
  return {
    nodeId: p.guid,
    issues: x.issues,
    delayedEdits: b,
    changeMade: h
  };
}
export async function $$E1(e) {
  let t;
  let r = await Ay.design.firstDraftFineTune({
    userPrompt: e.userPrompt
  });
  let a = "";
  let n = r.getReader();
  for (;;) {
    let {
      done,
      value
    } = await n.read();
    if (value?.trace && (t = value.trace), done) break;
    value.jsx && (a += value.jsx);
  }
  return {
    jsx: a,
    trace: t
  };
}
let k = async ({
  params: {
    userPrompt: e,
    shouldContinueStreamRef: t,
    clientLifecycleId: r
  },
  abortController: a
}) => (a.signal.addEventListener("abort", () => {
  t.current = !1;
}), await $$E1({
  userPrompt: e,
  clientLifecycleId: r
}));
export function $$y0() {
  let e = wA();
  let {
    start,
    stop,
    state,
    aiTrackingContext
  } = RL(JT.FIRST_DRAFT_FINE_TUNE, k);
  let l = aiTrackingContext.clientLifecycleId;
  let [w, E] = useState("");
  let y = useRef(!0);
  let D = useCallback(async () => {
    if (state === qy.RUNNING) {
      xi("first-draft-fine-tune", "handleSubmit called while already running");
      return;
    }
    let r = await start({
      userPrompt: w,
      shouldContinueStreamRef: y,
      clientLifecycleId: l
    });
    if (r?.jsx) {
      if (null === Ik) throw Error("No node handler access");
      let t = new Ik({
        clientLifecycleId: l,
        userPrompt: w,
        abortController: new AbortController()
      });
      d({
        node: getSingletonSceneGraph().getRoot(),
        jsx: r.jsx,
        clientLifecycleId: l,
        nodeHandlerManager: t,
        transformCustomJSX: r1 ?? (() => {})
      });
      e(_$$F.enqueue({
        type: "FIRST_DRAFT_FINE_TUNE_JSX",
        message: "Finished!",
        button: {
          text: "Download JSX",
          action: () => {
            _$$j(r?.jsx ?? "", "jsx");
          }
        }
      }));
    }
    r?.trace && getFeatureFlags().cortex_execution_tracing && A(e, r?.trace);
  }, [l, e, w, start, state]);
  switch (state) {
    case qy.INITIAL:
      return jsxs("div", {
        className: _$$s.p8.borderBox.$,
        "data-testid": "readyForPromptView",
        children: [jsx(XG, {
          action: JT.FIRST_DRAFT_FINE_TUNE,
          value: w,
          onChange: E,
          refocusToInput: !1
        }), jsx(Y, {
          horizontalAlignItems: "end",
          children: jsx(r, {
            shortcuts: [{
              key: Uz.ENTER,
              modifier: [xH.META]
            }],
            onAction: D,
            disabled: 0 === w.length,
            children: "Submit"
          })
        })]
      });
    case qy.RUNNING:
      return jsx(_$$F2, {
        onStop: () => {
          stop();
          close();
        },
        aiTrackingContext,
        secondaryMessage: void 0,
        children: tx("first_draft.running")
      });
    default:
      return jsx(Fragment, {});
  }
}
export const _$$default = $$y0;
export const runFirstDraftFineTune = $$E1;