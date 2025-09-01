import { useEffect, useCallback } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { Iz, eU, zl, md } from "../figma_app/27355";
import { J6 } from "../905/602906";
import { $D } from "../905/11";
import { xi, x1 } from "../905/714362";
import { useSprigWithSampling } from "../905/99656";
import { B } from "../905/969273";
import { sZ } from "../figma_app/948389";
import { JB } from "../905/843553";
import { JT } from "../figma_app/632248";
import { Dl, as, Uu } from "../905/487011";
import { dM, F9 } from "../905/278499";
import { k } from "../905/167644";
import { k as _$$k } from "../905/788559";
var $$E6 = (e => (e.INITIAL = "initial", e.RUNNING = "running", e.CANCELLED = "cancelled", e.ERROR = "error", e.DONE = "done", e))($$E6 || {});
var $$y8 = (e => (e.INCOMPLETE = "incomplete", e.SUCCEEDED = "succeeded", e.FAILED = "failed", e))($$y8 || {});
let b = {
  action: "invalid",
  source: "invalid",
  clientLifecycleId: "invalid",
  quick_actions_session_id: "invalid",
  file_key: "invalid",
  product_type: "invalid"
};
let T = Iz(() => eU({
  state: "initial",
  aiTrackingContext: b,
  tasks: []
}));
let I = {
  [JT.FIRST_DRAFT_MAKE_CHANGES]: _$$e.AI_GENERATION,
  [JT.FIRST_DRAFT_MAKE_KIT]: _$$e.AI_GENERATION,
  [JT.FIRST_DRAFT_COMPONENTIZE]: _$$e.AI_GENERATION,
  [JT.FIRST_DRAFT_SUGGEST_PROPS]: _$$e.AI_GENERATION,
  [JT.MAKE_EDITS]: _$$e.AI_GENERATION,
  [JT.FIRST_DRAFT]: _$$e.AI_GENERATION,
  [JT.IMAGE_TO_DESIGN]: _$$e.AI_GENERATION
};
let S = "__ABORTED__";
export async function $$v0(e, t, r, n) {
  let s = T(e);
  let {
    state,
    aiTrackingContext
  } = zl.get(s);
  if ("running" === state) {
    xi("quick-actions", "Can't start action while another invocation of the same action is running");
    return;
  }
  let g = new AbortController();
  zl.set(s, {
    state: "running",
    abortController: g,
    aiTrackingContext,
    tasks: []
  });
  Dl({
    ...aiTrackingContext,
    ...n
  });
  try {
    let e = new Promise(e => {
      g.signal.addEventListener("abort", () => {
        e(S);
      });
    });
    let i = t({
      params: r,
      abortController: g,
      onTasksUpdate: e => {
        zl.set(s, t => ({
          ...t,
          tasks: e
        }));
      },
      clientLifecycleId: aiTrackingContext.clientLifecycleId
    });
    let o = await Promise.race([i, e]);
    if (o !== S) {
      zl.set(s, e => ({
        state: "done",
        result: o,
        aiTrackingContext,
        tasks: e.tasks
      }));
      _$$k();
      as({
        ...aiTrackingContext,
        ...n,
        status: dM.COMPLETED,
        reason: F9.SUCCESS
      });
      return o;
    }
    zl.set(s, e => ({
      state: "cancelled",
      aiTrackingContext,
      tasks: e.tasks
    }));
    as({
      ...aiTrackingContext,
      ...n,
      status: dM.FAILED,
      reason: F9.STOPPED
    });
    return;
  } catch (t) {
    g.abort();
    x1("quick-actions", "Error encountered running action", {
      error: t
    });
    t instanceof JB && !1 === t.reportToSentry || $D(I[e] ?? _$$e.UNOWNED, t);
    zl.set(s, e => ({
      state: "error",
      error: t,
      originalParams: r,
      aiTrackingContext,
      tasks: e.tasks
    }));
    as({
      ...aiTrackingContext,
      ...n,
      status: dM.FAILED,
      reason: F9.ERROR,
      errorReason: sZ(t),
      errorMessage: sZ(t) === B.GENERIC ? t.message ?? t.toString?.() : void 0
    });
  }
}
export function $$A1(e, t) {
  let r = T(e);
  if ("running" === zl.get(r).state) return;
  let n = Uu(e, t);
  zl.set(r, {
    state: "initial",
    aiTrackingContext: n,
    tasks: []
  });
}
export function $$x5(e) {
  let t = T(e);
  return zl.get(t);
}
export function $$N7(e) {
  let t = T(e);
  let r = md(t);
  let {
    Sprig
  } = useSprigWithSampling();
  useEffect(() => {
    if (r) {
      let {
        state,
        aiTrackingContext
      } = r;
      let {
        ended,
        status,
        reason
      } = function (e) {
        switch (e) {
          case "cancelled":
            return {
              ended: !0,
              status: dM.FAILED,
              reason: F9.STOPPED
            };
          case "error":
            return {
              ended: !0,
              status: dM.FAILED,
              reason: F9.ERROR
            };
          case "done":
            return {
              ended: !0,
              status: dM.COMPLETED,
              reason: F9.SUCCESS
            };
          default:
            return {
              ended: !1,
              status: dM.FAILED,
              reason: F9.ERROR
            };
        }
      }(state);
      ended && k(Sprig, e, aiTrackingContext, status, reason);
    }
  }, [r, Sprig, e]);
  return r;
}
export function $$C3(e) {
  let t = T(e);
  let r = zl.get(t);
  "running" === r.state && r.abortController.abort();
}
export function $$w2(e, t, r) {
  let i = $$N7(e);
  let a = useCallback(async n => (J6.startVital(e, {
    context: r
  }), await $$v0(e, t, n, r)), [e, t, r]);
  let o = useCallback(() => {
    J6.stopVital(e, {
      context: r
    });
    $$C3(e);
  }, [e, r]);
  return {
    ...i,
    start: a,
    stop: o
  };
}
export class $$O4 extends Error {
  constructor(e) {
    super(e || "Long running action aborted");
  }
}
export function $$R9(e, t, r, n) {
  return async (...i) => {
    if (t.signal.aborted) throw new $$O4(n);
    let a = !1;
    let s = e(...i).then(e => (a && r && r(e), e));
    let o = new Promise((e, r) => {
      let i = () => {
        t.signal.removeEventListener("abort", i);
        a = !0;
        r(new $$O4(n));
      };
      t.signal.addEventListener("abort", i);
    });
    try {
      return await Promise.race([s, o]);
    } catch (e) {
      throw e;
    }
  };
}
export const Ag = $$v0;
export const B3 = $$A1;
export const RL = $$w2;
export const cT = $$C3;
export const lc = $$O4;
export const pP = $$x5;
export const qy = $$E6;
export const wj = $$N7;
export const z8 = $$y8;
export const zM = $$R9;