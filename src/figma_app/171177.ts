import { jsx } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext, useRef, useCallback, useMemo, useId } from "react";
import { xb } from "../figma_app/465776";
import { useHandleKeyboardEvent, useHandleInputEvent, generateRecordingKey } from "../figma_app/878298";
import { xH } from "../905/63728";
import { Ay } from "../figma_app/778880";
import { jr } from "../figma_app/896988";
import { vL } from "../905/826900";
import { x } from "../905/179739";
import { Jc, Sn } from "../905/946805";
export function $$_4() {
  let [e, t] = useState(!1);
  useEffect(() => {
    let e = e => {
      "Tab" === e.key && g(x()) && t(document.activeElement !== document.body);
    };
    let r = () => {
      t(!1);
    };
    document.addEventListener("keydown", e, !0);
    document.addEventListener("mousedown", r, !0);
    return () => {
      document.removeEventListener("keydown", e, !0);
      document.removeEventListener("mousedown", r, !0);
    };
  }, []);
  return e;
}
let h = createContext({
  registerKeyDownHandler: (e, t, r, n) => {},
  removeKeyDownHandler: (e, t, r) => {},
  setAllowDefaultTabOverride: e => {}
});
export function $$m1(e) {
  let {
    setAllowDefaultTabOverride
  } = useContext(h);
  useEffect(() => (setAllowDefaultTabOverride(e), () => {
    setAllowDefaultTabOverride(void 0);
  }), [e, setAllowDefaultTabOverride]);
}
let g = (e, t) => {
  if (!e) return !1;
  if (void 0 !== t) return t;
  switch (e) {
    case Jc.ALL:
    case Jc.EXTENSIONS:
    case Sn.PLUGIN_PARAMETER_ENTRY:
    case Sn.PLUGIN_SUBMENU_ENTRY:
    case Jc.ASSETS:
    case Sn.ASSETS_TAB_DETAIL_VIEW:
    case Sn.ASSISTANT_CHAT:
    case Sn.FIRST_DRAFT_MAKE_KIT:
    case Sn.FIRST_DRAFT_LINT:
    case Sn.FIRST_DRAFT_DEBUG:
    case Sn.FIRST_DRAFT_MAKE_KIT_DEBUG:
    case Sn.MAKE_EDITS_DEBUG:
    case Sn.MAKE_EDITS_DEBUG_REVIEW:
    case Sn.LINK_TO_COMPONENT:
    case Sn.IMAGE_TO_DESIGN:
    case Sn.IMAGE_TO_DESIGN_ORACLE:
    case Sn.FIRST_DRAFT_KIT_PICKER:
      return !1;
    case Sn.BACKGROUND_REMOVE_TOAST:
    case Sn.UPSCALE_IMAGE_TOAST:
    case Sn.FIRST_DRAFT_MAKE_CHANGES:
    case Sn.MAKE_EDITS:
    case Sn.FIRST_DRAFT_FINE_TUNE:
    case Sn.MAGIC_LINK:
    case Sn.MAGIC_LINK_DONE_TOAST:
    case Sn.REGENERATE_TEXT_TOAST:
    case Sn.RENAME_LAYERS_TOAST:
    case Sn.SHORTEN:
    case Sn.EXTENSION_DETAILS:
    case Sn.TRANSLATE:
    case Sn.VISUAL_SEARCH:
    case Sn.FIGJAM_AI_CONTEXTUAL_FEATURES:
    case Sn.MERMAID_TO_DIAGRAM:
    case Sn.REWRITE:
    case Sn.FIRST_DRAFT:
    case Sn.GENERATE_IMAGE:
    case Sn.EDIT_IMAGE:
    case Sn.MAKE_VIDEO:
    case Sn.LIBRARY_CSS_EXTRACTION:
    case Sn.FOR_TESTING:
      return !0;
    default:
      xb(e);
  }
};
export function $$f5({
  name: e,
  recordingKey: t,
  children: r,
  forwardUnhandledEventsToFullscreen: a = !0
}) {
  let l = useRef(new Map());
  let p = useRef(null);
  let [_, m] = useState(void 0);
  let f = x();
  let E = useCallback(e => {
    "Tab" !== e.key || g(f, _) || e.preventDefault();
    let t = v({
      key: e.keyCode,
      modifier: [e.metaKey ? xH.META : void 0, e.ctrlKey ? xH.CONTROL : void 0, e.altKey ? xH.ALT : void 0, e.shiftKey ? xH.SHIFT : void 0].filter(e => !!e)
    });
    let r = !1;
    for (let [n, i] of l.current) n.endsWith(t) && (i(e), r = !0);
    !r && a && (r = jr(e));
    return r;
  }, [f, _, a]);
  let y = useHandleKeyboardEvent(t, "keydown", e => {
    E(e);
  });
  let b = useHandleInputEvent(generateRecordingKey(t, "fullscreen"), "keydown", e => {
    E(e.event) && e.accept();
  });
  useEffect(() => {
    let e = p.current;
    if (e) {
      e.addEventListener("keydown", y);
      return () => {
        e.removeEventListener("keydown", y);
      };
    }
  }, [y]);
  return jsx(h.Provider, {
    value: {
      registerKeyDownHandler: (e, t, r, n) => {
        let i = S({
          id: e,
          key: t,
          modifier: r
        });
        l.current.set(i, n);
      },
      removeKeyDownHandler: (e, t, r) => {
        let n = S({
          id: e,
          key: t,
          modifier: r
        });
        l.current.$$delete(n);
      },
      setAllowDefaultTabOverride: m
    },
    children: jsx(vL, {
      name: e,
      handleKeyDown: b,
      focusOnMount: !0,
      children: jsx("div", {
        ref: p,
        children: r
      })
    })
  });
}
function E(e) {
  return e !== xH.META || Ay.mac ? e : xH.CONTROL;
}
function y({
  key: e,
  modifier: t
}) {
  return t ? {
    key: e,
    modifier: t.map(E)
  } : {
    key: e
  };
}
function b(e, t, r, n) {
  let s = useMemo(() => t.map(y), [t]);
  let l = useId();
  let {
    registerKeyDownHandler,
    removeKeyDownHandler
  } = useContext(h);
  let u = useCallback(e => {
    for (let {
      key,
      modifier
    } of s) if (e.keyCode === key && (!modifier || modifier.every(t => function (e, t) {
      switch (e) {
        case xH.META:
          return t.metaKey;
        case xH.CONTROL:
          return t.ctrlKey;
        case xH.ALT:
          return t.altKey;
        case xH.SHIFT:
          return t.shiftKey;
        default:
          xb(e);
      }
    }(t, e)))) {
      r(e, {
        key,
        modifier
      });
      return;
    }
  }, [r, s]);
  useEffect(() => (n ? s.forEach(({
    key: e,
    modifier: t
  }) => {
    registerKeyDownHandler(l, e, t ?? [], u);
  }) : s.forEach(({
    key: e,
    modifier: t
  }) => {
    removeKeyDownHandler(l, e, t ?? []);
  }), () => {
    s.forEach(({
      key: e,
      modifier: t
    }) => {
      removeKeyDownHandler(l, e, t ?? []);
    });
  }), [n, s, u, registerKeyDownHandler, removeKeyDownHandler, l]);
}
export function $$T3(e, t, r = !0) {
  b("keydown", [{
    key: e
  }], t, r);
}
export function $$I2(e, t, r = !0) {
  b("keydown", e, t, r);
}
function S({
  id: e,
  key: t,
  modifier: r
}) {
  return `${e}-${v({
    key: t,
    modifier: r
  })}`;
}
function v(e) {
  return `${e.key}-${e.modifier?.join("-") ?? ""}`;
}
export function $$A0(e) {
  return v(e);
}
export const F1 = $$A0;
export const If = $$m1;
export const TH = $$I2;
export const kz = $$T3;
export const qI = $$_4;
export const s3 = $$f5;