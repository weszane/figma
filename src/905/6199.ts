import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useRef, useState, useCallback, useEffect } from "react";
import { f as _$$f } from "../905/167712";
import { j as _$$j } from "../905/253683";
import { s as _$$s } from "../905/702260";
import { N as _$$N } from "../905/430294";
import { Z } from "../905/498136";
import { p as _$$p } from "../905/682418";
import { W as _$$W } from "../905/865092";
import { i as _$$i } from "../905/661697";
import { I as _$$I } from "../905/542485";
import { QC, a5 } from "../vendor/858260";
import { FJ, yW } from "../vendor/491721";
import { Mz, v5, q7, x as _$$x } from "../vendor/231521";
import { DF } from "../vendor/463802";
import { Pi, fi } from "../vendor/871930";
import { Sd } from "../vendor/425002";
import { vJ, lJ, I2, Mv, Ac, cq, mB } from "../vendor/408361";
import { OZ } from "../905/491152";
import { getI18nString } from "../905/303541";
import { OL, Jf } from "../905/999278";
import { zI } from "../vendor/850527";
let d = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M7 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V12h6v5.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0V11H7zm11 6a.5.5 0 0 0-.777-.416l-1.5 1a.5.5 0 1 0 .554.832l.723-.482V17.5a.5.5 0 0 0 1 0z",
      clipRule: "evenodd"
    })
  });
});
function w(e, t) {
  e.update(() => {
    let e = vJ();
    null !== e && zI(e, () => t ? lJ() : QC());
  });
}
function C(e) {
  e.update(() => {
    let e = vJ();
    null !== e && zI(e, () => lJ());
  });
}
export function $$T0({
  setIsLinkEditMode: e
}) {
  let [t] = DF();
  let i = useRef(null);
  let [T, k] = useState(!1);
  let [R, N] = useState(!1);
  let [P, O] = useState(!1);
  let [D, L] = useState(!1);
  let [F, M] = useState(!1);
  let [j, U] = useState(!1);
  let [B, V] = useState(!1);
  let [G, z] = useState(!1);
  let [H, W] = useState(!1);
  let K = useCallback(() => {
    let e = vJ();
    if (I2(e)) {
      let t = function (e) {
        if (Mz(e)) {
          let t = e.getParent();
          if (t instanceof v5) return t.getTag();
        }
        return null;
      };
      let i = OL(e);
      let n = i.getParent();
      FJ(n) || FJ(i) ? V(!0) : V(!1);
      let r = t(i) || t(n);
      M("ul" === r);
      U("ol" === r);
      let a = !!(a5(i) || n && a5(n));
      W(a);
      z(e.hasFormat("code") && !a);
      L(!!(Pi(i) || n && Pi(n)));
      k(e.hasFormat("bold"));
      N(e.hasFormat("italic"));
      O(e.hasFormat("strikethrough"));
    }
  }, []);
  useEffect(() => Sd(t.registerUpdateListener(({
    editorState: e
  }) => {
    e.read(() => {
      K();
    });
  }), t.registerCommand(Mv, (e, t) => (K(), !1), Ac), t.registerCommand(cq, e => e.metaKey && e.shiftKey && "KeyX" === e.code ? (t.dispatchCommand(mB, "strikethrough"), !0) : e.metaKey && e.shiftKey && e.altKey && "KeyC" === e.code ? (w(t, H), !0) : !!e.metaKey && !!e.shiftKey && "KeyC" === e.code && (t.dispatchCommand(mB, "code"), !0), Ac)), [t, K, H]);
  return jsxs("div", {
    className: "toolbar_plugin--toolbar--C-lb8",
    ref: i,
    children: [jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.bold") + OZ({
        keyShortcutKey: "B"
      }),
      onIcon: jsx(_$$j, {}),
      offIcon: jsx(_$$j, {}),
      checked: T,
      variant: "highlighted",
      onChange: () => {
        t.dispatchCommand(mB, "bold");
      }
    }), jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.italic") + OZ({
        keyShortcutKey: "I"
      }),
      onIcon: jsx(_$$s, {}),
      offIcon: jsx(_$$s, {}),
      checked: R,
      variant: "highlighted",
      onChange: () => {
        t.dispatchCommand(mB, "italic");
      }
    }), jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.strikethrough") + OZ({
        keyShortcutShift: !0,
        keyShortcutKey: "X"
      }),
      onIcon: jsx(_$$N, {}),
      offIcon: jsx(_$$N, {}),
      checked: P,
      variant: "highlighted",
      onChange: () => {
        t.dispatchCommand(mB, "strikethrough");
      }
    }), jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.heading"),
      onIcon: jsx(d, {}),
      offIcon: jsx(d, {}),
      checked: D,
      variant: "highlighted",
      onChange: () => {
        !function (e, t) {
          e.update(() => {
            let e = vJ();
            null !== e && zI(e, () => t ? lJ() : fi("h1"));
          });
        }(t, D);
      }
    }), jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.bulleted_list"),
      onIcon: jsx(Z, {}),
      offIcon: jsx(Z, {}),
      checked: F,
      variant: "highlighted",
      onChange: () => {
        F ? C(t) : t.dispatchCommand(q7, void 0);
      }
    }), jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.numbered_list"),
      onIcon: jsx(_$$p, {}),
      offIcon: jsx(_$$p, {}),
      checked: j,
      variant: "highlighted",
      onChange: () => {
        j ? C(t) : t.dispatchCommand(_$$x, void 0);
      }
    }), jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.link") + OZ({
        keyShortcutKey: "U",
        keyShortcutShift: !0
      }),
      onIcon: jsx(_$$W, {}),
      offIcon: jsx(_$$W, {}),
      checked: B,
      variant: "highlighted",
      onChange: () => {
        !function (e, t, i) {
          e.update(() => {
            let n = vJ();
            if (I2(n)) {
              let r = n.getTextContent();
              if (t) {
                i(!1);
                e.dispatchCommand(yW, null);
              } else {
                let t = r ? Jf(r) : "";
                i(!0);
                e.dispatchCommand(yW, t);
              }
            }
          });
        }(t, B, e);
      }
    }), jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.inline_code") + OZ({
        keyShortcutShift: !0,
        keyShortcutKey: "C"
      }),
      onIcon: jsx(_$$i, {}),
      offIcon: jsx(_$$i, {}),
      checked: G,
      variant: "highlighted",
      onChange: () => {
        t.dispatchCommand(mB, "code");
      }
    }), jsx(_$$f, {
      "aria-label": getI18nString("lexical_editor_toolbar.code_block") + OZ({
        keyShortcutShift: !0,
        keyShortcutOption: !0,
        keyShortcutKey: "C"
      }),
      onIcon: jsx(_$$I, {}),
      offIcon: jsx(_$$I, {}),
      checked: H,
      variant: "highlighted",
      onChange: () => {
        w(t, H);
      }
    })]
  });
}
export const A = $$T0;