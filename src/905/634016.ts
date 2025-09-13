import { createContext, useLayoutEffect, forwardRef, useMemo, useRef, useCallback, useEffect, useId, useState } from "react";
import { useMergeRefs } from "@floating-ui/react";
import { useRecording } from "../905/959312";
import { preventAndStopEvent } from "../905/955878";
import { mergeProps } from "../905/475481";
import { jsx } from "react/jsx-runtime";
import { S as _$$S } from "../905/823680";
import { useExposedRef } from "../905/581092";
import { ensureContext } from "../905/61417";
import { usePopoverPrimitive, PopoverPrimitiveContainer } from "../905/691059";
import { P } from "../905/143421";
import { defaultComponentAttribute } from "../905/577641";
import { ButtonPrimitive } from "../905/632989";
let l = "[role=option]";
let f = Math.floor(1e3 / 60);
let _ = createContext(null);
function A({
  anchorEl: e,
  offset: t = 8,
  placement: i = "bottom-start",
  ...r
}) {
  let a = function ({
    uuid: e
  }) {
    return `fpl-${e}-popup`;
  }({
    uuid: r.id
  });
  let {
    getContainerProps,
    getTriggerProps
  } = usePopoverPrimitive({
    isOpen: r.expanded,
    offset: t,
    onOpenChange: r.onExpand,
    placement: i,
    nodeId: a,
    type: "dialog"
  });
  useLayoutEffect(() => {
    r.expanded && r.refs?.input.current && r.refs.input.current.focus();
  }, [r.expanded]);
  useLayoutEffect(() => {
    e?.current && getTriggerProps().ref(e.current);
  }, [r.expanded]);
  return jsx(PopoverPrimitiveContainer, {
    ...getContainerProps(),
    children: jsx(b, {
      ...r
    })
  });
}
A.displayName = "ComboboxPrimitive.PopupList";
let y = forwardRef(({
  activeValue: e,
  children: t,
  className: i,
  expanded: r,
  htmlAttributes: a,
  id: s,
  inputMode: o,
  onExpand: l,
  onPointerLeave: u,
  onSelect: p,
  refs: m,
  registerOption: g,
  selected: f,
  setActiveValue: A,
  style: y,
  ...b
}, v) => {
  let I = useMemo(() => ({
    activeValue: e,
    expanded: r,
    id: s,
    inputMode: o,
    setActiveValue: A,
    onExpand: l,
    onPointerLeave: u,
    onSelect: p,
    refs: m,
    selected: f,
    registerOption: g
  }), [e, r, s, o, A, l, u, p, f, g]);
  return jsx(_.Provider, {
    value: I,
    children: jsx(P, {
      ...a,
      ...b,
      role: "listbox",
      id: E({
        uuid: s
      }),
      theme: {
        root: i,
        rootStyle: y
      },
      ref: _$$S(v, m.scroll),
      onPointerLeave: u,
      children: t
    })
  });
});
y.displayName = "ComboboxPrimitive.List";
let b = y;
let v = forwardRef(({
  value: e,
  children: t,
  disabled: i,
  htmlAttributes: r,
  id: s,
  recordingKey: o,
  ...l
}, c) => {
  let m = useExposedRef(c);
  let {
    activeValue,
    inputMode,
    id,
    refs,
    selected,
    onSelect,
    setActiveValue,
    registerOption
  } = ensureContext(_, "ComboboxPrimitiveListContext", "ComboboxPrimitive.List");
  let S = useRecording(t => {
    if (i) {
      r?.onPointerDown?.(t);
      return;
    }
    t.preventDefault();
    onSelect?.(e, {
      event: t
    });
    refs.input.current?.focus();
    r?.onPointerDown?.(t);
  }, {
    eventName: "pointerdown",
    recordingKey: o
  }, [onSelect, i, e]);
  let w = function (e, t, i) {
    let r = useRef(null);
    return useCallback((...i) => (r.current && clearTimeout(r.current), r.current = window.setTimeout(e, t, ...i), () => {
      r.current && clearTimeout(r.current);
    }), [...i, t]);
  }(t => {
    if (i) {
      r?.onPointerMove?.(t);
      return;
    }
    activeValue !== e && "pointer" === inputMode && setActiveValue(e);
    refs.input.current?.focus();
    r?.onPointerMove?.(t);
  }, f, [activeValue, i, inputMode, setActiveValue, e]);
  let C = !!selected?.includes(e) || void 0;
  useEffect(() => registerOption(m.current, e), [e]);
  let T = useId();
  let k = s;
  k || (k = "string" == typeof e ? function ({
    uuid: e,
    localId: t
  }) {
    return `fpl-${e}-option-${t}`;
  }({
    uuid: id,
    localId: e
  }) : T);
  return jsx("div", {
    ...defaultComponentAttribute,
    ...r,
    ...l,
    id: k,
    ref: m,
    role: "option",
    "aria-selected": C,
    "aria-disabled": i,
    onPointerDown: S,
    onPointerMove: w,
    "data-activedescendant": activeValue === e || void 0,
    children: t
  });
});
v.displayName = "ComboboxPrimitive.Option";
let I = forwardRef(({
  children: e,
  htmlAttributes: t,
  ...i
}, n) => jsx("div", {
  ...defaultComponentAttribute,
  ...t,
  ...i,
  role: "group",
  ref: n,
  children: e
}));
function E({
  uuid: e
}) {
  return `fpl-${e}-listbox`;
}
I.displayName = "ComboboxPrimitive.Group";
let x = {
  activeValue: void 0,
  arrowKeyBehavior: "absolute",
  selected: void 0
};
function S(e, t) {
  if (!t) return;
  t.scrollTo({
    top: 0
  });
  let i = t?.querySelector(l);
  return i ? e.get(i) : void 0;
}
function w(e, t) {
  if (!t) return;
  t.scrollTo({
    top: t.offsetHeight
  });
  let i = t?.querySelectorAll(l);
  return e.get(i[i.length - 1]) ?? void 0;
}
function C(e, t) {
  if (!t) return;
  let {
    scrollTop
  } = t;
  for (let n of t.querySelectorAll(l)) if (n.offsetTop + n.offsetHeight >= scrollTop) return e.get(n);
}
function k({
  htmlAttributes: e,
  ...t
}) {
  return jsx(ButtonPrimitive, {
    ...t,
    htmlAttributes: {
      tabIndex: -1,
      ...e
    }
  });
}
k.displayName = "ComboboxPrimitive.Trigger";
export let $$R0 = {
  Group: I,
  List: b,
  Option: v,
  PopupList: A,
  Trigger: k,
  useCombobox: function (e) {
    let t = useId();
    let i = {
      ...x,
      ...e
    };
    let {
      arrowKeyBehavior,
      expandOnFocus,
      selected,
      onSelect,
      onActiveValueChange,
      popupId = t,
      recordingKey
    } = i;
    let f = useRef(null);
    let _ = useRef(null);
    let [A, y] = useState();
    let b = useMergeRefs([f, A]);
    let [v, I] = useState("pointer");
    let T = useRef(new WeakMap());
    let k = useRef(new Map());
    let R = useCallback((e, t) => (e && (T.current.set(e, t), k.current.set(t, new WeakRef(e))), () => {
      e && T.current.$$delete(e);
      k.current.$$delete(t);
    }), []);
    let [N, P] = useState(i.expanded ?? !1);
    let O = i.onExpand && "boolean" == typeof i.expanded ? i.expanded : N;
    let D = useCallback(e => {
      i.onExpand?.(e);
      P(e);
    }, [i.onExpand, P]);
    let [L, F] = useState(void 0);
    let M = i.activeValue || L;
    let j = useCallback(e => {
      I("pointer");
      onActiveValueChange?.(e);
      F(e);
    }, [onActiveValueChange]);
    let U = useCallback(e => {
      if (_.current) {
        if (M) {
          let t = _.current.querySelectorAll(l) || [];
          let i = !1;
          for (let n = 0; n < t.length; n++) {
            let r = t[n];
            let a = T.current.get(r);
            if (a === M) {
              if (n === t.length - 1) {
                if (e?.repeat) return;
                j(S(T.current, _.current));
                return;
              }
              i = !0;
              continue;
            }
            if (i) {
              r.scrollIntoView({
                block: "nearest"
              });
              j(a);
              return;
            }
          }
        } else if ("viewport" === arrowKeyBehavior) {
          let e = C(T.current, _.current);
          if (e) {
            j(e);
            return;
          }
        }
        j(S(T.current, _.current));
      }
    }, [M, arrowKeyBehavior, j]);
    let B = useCallback(e => {
      if (!_.current) return;
      if (M) {
        let t = _.current.querySelectorAll(l) || [];
        let i = !1;
        for (let n = t.length - 1; n >= 0; n--) {
          let r = t[n];
          let a = T.current.get(r);
          if (a === M) {
            if (0 === n) {
              if (e?.repeat) return;
              j(w(T.current, _.current));
              return;
            }
            i = !0;
            continue;
          }
          if (i) {
            r.scrollIntoView({
              block: "nearest"
            });
            j(a);
            return;
          }
        }
      } else if ("viewport" === arrowKeyBehavior) {
        let e = C(T.current, _.current);
        if (e) {
          j(e);
          return;
        }
      }
      let t = w(T.current, _.current);
      t && j(t);
    }, [M, arrowKeyBehavior, j]);
    let V = useCallback(() => {
      !1 !== expandOnFocus && (j(S(T.current, _.current)), D(!0));
    }, [expandOnFocus, D, j]);
    useEffect(() => {
      O && !M && j("viewport" === arrowKeyBehavior ? C(T.current, _.current) : S(T.current, _.current));
    }, [M, arrowKeyBehavior, O, j]);
    let G = useCallback(() => {
      !1 !== expandOnFocus && D(!1);
    }, [expandOnFocus, D]);
    let z = useRecording(e => {
      if (!O && "ArrowDown" === e.key && e.altKey) {
        j(S(T.current, _.current));
        D(!0);
        preventAndStopEvent(e);
        return;
      }
      if (O && !e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey) switch (e.key) {
        case "Home":
          _.current?.scroll({
            top: 0
          });
          j(S(T.current, _.current));
          preventAndStopEvent(e);
          I("keyboard");
          break;
        case "End":
          _.current?.scroll({
            top: _.current?.offsetHeight
          });
          j(w(T.current, _.current));
          preventAndStopEvent(e);
          I("keyboard");
          break;
        case "ArrowDown":
          U(e);
          preventAndStopEvent(e);
          I("keyboard");
          break;
        case "ArrowUp":
          B(e);
          preventAndStopEvent(e);
          I("keyboard");
      }
    }, {
      eventName: "keydown",
      recordingKey
    }, [O, D, U, B, j]);
    let H = useCallback(e => {
      "Enter" === e.key && onSelect && M && (onSelect(M, {
        event: e
      }), preventAndStopEvent(e));
    }, [M, onSelect]);
    let W = useCallback(e => (e?.ref && e.ref !== A && y(e.ref), mergeProps(e ?? {}, {
      ...e?.htmlAttributes,
      ref: b,
      role: "combobox",
      "aria-expanded": O,
      "aria-controls": E({
        uuid: popupId
      }),
      "aria-activedescendant": M ? k.current.get(M)?.deref()?.id : void 0,
      "aria-autocomplete": "list",
      "aria-haspopup": "listbox",
      onFocus: V,
      onBlur: G,
      onKeyDown: z,
      onKeyUp: H
    })), [M, O, b, G, V, z, H, popupId, A]);
    let K = useCallback(() => {
      I("pointer");
    }, []);
    let Y = useCallback(e => mergeProps(e ?? {}, {
      ...e?.htmlAttributes,
      registerOption: R,
      activeValue: M,
      id: popupId,
      inputMode: v,
      setActiveValue: j,
      expanded: O,
      onExpand: D,
      onPointerLeave: K,
      onSelect,
      refs: {
        input: f,
        scroll: _
      },
      selected: selected ?? []
    }), [M, O, v, D, K, onSelect, popupId, R, selected, j]);
    let q = useCallback(e => {
      D(!O);
      preventAndStopEvent(e);
    }, [O, D]);
    let $ = useCallback(e => mergeProps(e ?? {}, {
      onClick: q,
      "aria-controls": E({
        uuid: popupId
      }),
      "aria-expanded": O,
      "aria-haspopup": "listbox"
    }), [O, popupId, q]);
    let Z = useCallback(() => {
      D(!1);
    }, [D]);
    let X = useCallback(e => mergeProps(e ?? {}, {
      onClose: Z
    }), [Z]);
    return useMemo(() => ({
      activeValue: M,
      config: Object.freeze(i),
      getDialogProps: X,
      getInputProps: W,
      getListProps: Y,
      getTriggerProps: $,
      nextItem: U,
      prevItem: B,
      refs: {
        input: f,
        scroll(e) {
          _.current = e;
        }
      },
      registerOption: R,
      selected: selected ?? [],
      setActiveValue: j
    }), [M, X, W, Y, $, U, B, R, selected, j]);
  }
};
export const F = $$R0;