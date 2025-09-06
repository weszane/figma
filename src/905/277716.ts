import { jsx } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { F } from "../905/680873";
import { o3, nt } from "../905/226610";
import { Pu, MF, ps, ET, VC, R8 } from "../905/939257";
import { trackEventAnalytics } from "../905/449184";
import { wu, EM } from "../905/729783";
import { f as _$$f } from "../905/896141";
import { C } from "../905/213457";
import { throttle } from "../905/915765";
import { SD, Ap, qR, Bu } from "../figma_app/243213";
function h(e) {
  let t = SD(e);
  t || console.error(`${JSON.stringify(e)} is not an HTMLElement`);
  return t;
}
function g(e) {
  let t = h(e.target);
  let i = h(e.currentTarget);
  return t && i ? {
    target: t,
    root: i
  } : null;
}
function f(e) {
  return throttle(e);
}
function _(e) {
  return !e.hasAttribute("data-non-interactive") && !e.hasAttribute("disabled");
}
let A = f((e, t) => {
  let {
    target,
    root
  } = e;
  if (!_(target) || target.hasAttribute("data-non-interactive") || Ap(target)) return;
  let r = qR(target, root, Bu);
  t(r ? {
    userInputMethod: "pointer",
    interactionType: "action",
    ...Pu(r)
  } : {
    userInputMethod: "pointer",
    interactionType: "unattributed",
    ...Pu(target)
  });
});
let y = f((e, t) => {
  let {
    target
  } = e;
  _(target) && (t.current = null);
});
let b = f((e, t, i, n) => {
  let {
    target,
    root
  } = e;
  if (!_(target) || target.hasAttribute("data-non-interactive") || Ap(target)) return;
  let s = qR(target, root, Bu);
  if (s && "Enter" === t && n({
    userInputMethod: "keyboard",
    interactionType: "action",
    ...Pu(s)
  }), "Tab" !== t) {
    if (i.current === target) return;
    i.current = target;
    n({
      userInputMethod: "keyboard",
      interactionType: "unattributed",
      ...Pu(target)
    });
  }
});
let v = f((e, t, i) => {
  let {
    target
  } = e;
  if (!(!_(target) || target.hasAttribute("data-non-interactive")) && Ap(target)) {
    if (t.current === target) return;
    t.current = target;
    i({
      userInputMethod: "unknown",
      interactionType: "input",
      ...Pu(target)
    });
  }
});
export function $$I0(e) {
  return jsx($$E, {
    ...e
  });
}
function $$E({
  name: e,
  children: t,
  alsoTrack: i
}) {
  let p = F(i);
  let m = MF({
    name: e,
    alsoTrackRef: p
  });
  let h = ps(m);
  let {
    error,
    trackablePath
  } = h;
  let I = MF(() => ET(trackablePath, m));
  let E = function (e) {
    let t = useRef(null);
    return {
      onKeyDownCapture: useCallback(i => {
        let n = g(i);
        n && b(n, i.key, t, e);
      }, [e]),
      onPointerDownCapture: useCallback(t => {
        let i = g(t);
        i && A(i, e);
      }, [e]),
      onChangeCapture: useCallback(i => {
        let n = g(i);
        n && v(n, t, e);
      }, [e]),
      onBlurCapture: useCallback(e => {
        let i = g(e);
        i && y(i, t);
      }, [])
    };
  }(useCallback(e => {
    !error && VC(trackablePath) && function (e, t) {
      let i = {
        ...e,
        ...t
      };
      wu.trigger(EM, i);
      trackEventAnalytics(EM, i);
    }({
      trackablePath: trackablePath.map(e => e.name),
      interactableId: m.name,
      trackingMethod: "automatic",
      ...e
    }, I());
  }, [trackablePath, m, I, error]));
  let x = o3(nt.trackableDebug);
  let S = MF(() => R8({
    componentName: "AutoInteractable",
    name: e,
    error,
    alsoTrackedProperties: I()
  }));
  t = C({
    children: t,
    isDebugMode: x,
    name: e,
    color: error ? "red" : "blue",
    depth: trackablePath.length + 1,
    getTooltipText: S
  });
  return jsx(_$$f.Provider, {
    value: h,
    children: jsx("div", {
      className: "displayContents",
      ...E,
      children: t
    })
  });
}
export const E = $$I0;