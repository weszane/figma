import { jsx } from "react/jsx-runtime";
import { useMemo, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ButtonWide } from "../905/521428";
import { k as _$$k } from "../905/443820";
import { AppStateTsApi, BuzzCloneHelpers } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { base64ToUint8Array } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { v as _$$v } from "../6388/913037";
import { jw, kG } from "../figma_app/327588";
import { c3, YB, DG } from "../6388/934960";
import { Uk } from "../6388/447908";
import { PU } from "../figma_app/334505";
import { UD } from "../figma_app/624361";
import { replaceSelection } from "../figma_app/741237";
import { useSceneGraphSelector } from "../figma_app/722362";
import { A as _$$A } from "../905/929620";
import { Vm, ks } from "../figma_app/838407";
let I = "Buzz bulk create update";
export function $$T1(e) {
  let t = new Map();
  for (let [l, o] of Object.entries(e)) for (let e of o) {
    let o = getSingletonSceneGraph().get(e);
    let n = o?.containingCooperFrameId();
    if (n) {
      let o = t.get(n);
      o || (o = new Map(), t.set(n, o));
      let s = o.get(l);
      s || (s = new Set(), o.set(l, s));
      s.add(e);
    }
  }
  return new Map([...t.entries()].sort(([e, t], [l, o]) => {
    let n = AppStateTsApi?.canvasGrid().coordForChild(e);
    let s = AppStateTsApi?.canvasGrid().coordForChild(l);
    return n && s ? n.row === s.row ? n.col - s.col : n.row - s.row : 0;
  }));
}
export function $$C0({
  mappings: e,
  importData: t,
  onCreateFinished: l
}) {
  let c = useDispatch();
  let C = Object.values(t)[0]?.length || 0;
  let N = useMemo(() => $$T1(e), [e]);
  let w = C * N.size;
  let [R, A] = useState(!1);
  let L = jw();
  let k = Xr(_$$v);
  let B = function (e, t, l) {
    let r = useAtomWithSubscription(_$$v);
    let i = kG();
    let c = function () {
      let e = function () {
        let e = useSceneGraphSelector();
        return useCallback((t, l, n, s) => {
          let r = new Set(l.keys());
          let i = BuzzCloneHelpers?.cloneBuzzFrameWithEdits(t, r, n, s) || new Map();
          for (let [t, n] of l) {
            let l = i.get(t);
            if (!l) continue;
            let s = e.get(l);
            if (!s) continue;
            let r = n[0];
            let a = n[1];
            if (r === PU.TEXT) s.characters = a;else if (r === PU.IMAGE) {
              let e = a.split(",")[1];
              let t = a.split(";")[0]?.split(":")[1] || "";
              if (!e || !t) continue;
              Vm(s.guid, jsx(_$$A, {}));
              let l = base64ToUint8Array(e);
              UD(l, t, "File").then(e => {
                let t = -1;
                let l = "FILL";
                if (s.fills) for (let e = s.fills.length - 1; e >= 0; e--) {
                  let o = s.fills[e];
                  if (o && "IMAGE" === o.type) {
                    l = o.imageScaleMode;
                    t = e;
                    break;
                  }
                }
                permissionScopeHandler.user("buzz-add-asset-image", () => {
                  t >= 0 ? s.setImageInFillPaint(e, t, l) : s.insertImageInFillPaint(e, "FILL");
                  ks(s.guid);
                });
              });
            }
          }
          return i?.get(t);
        }, [e]);
      }();
      let t = useDispatch();
      let l = useAtomWithSubscription(_$$v);
      return useCallback((o, n, s, r, i, a, c, u, x, g) => {
        permissionScopeHandler.user("buzz-add-asset-progressive-loading", () => {
          for (let [e, t] of o) {
            let o = n[e] || [];
            let r = Uk(o);
            for (let e of t) {
              let t = o[a];
              if (void 0 !== t) {
                if (a >= c3) {
                  let e = t.split(YB)[1];
                  if (e) {
                    let o = l[e];
                    o && (t = DG(o));
                  }
                }
                s.set(e, [r, t]);
              }
            }
          }
          let t = e(r, s, i, a);
          t && c.push(t);
        });
        a === u - 1 ? (t(VisualBellActions.dequeue({
          matchType: I
        })), g(c)) : (t(VisualBellActions.dequeue({
          matchType: I
        })), t(VisualBellActions.enqueue({
          message: getI18nString("buzz.bulk_create.generating_assets_with_count", {
            count_progress: a,
            count_total: x
          }),
          type: I
        })));
      }, [e, l, t]);
    }();
    return useCallback((e, o, n) => {
      let s = [];
      i && AppStateTsApi?.cooperFocusView().exitFocusedNodeView();
      permissionScopeHandler.user("buzz-add-asset", () => {
        let i = new Map();
        let d = AppStateTsApi?.canvasGrid();
        if (!d) throw Error("Could not find canvas grid");
        let u = [...o.keys()].pop();
        let x = u ? d.coordForChild(u).row + 1 : 0;
        let h = function (e) {
          if (0 === Object.keys(e).length) return 10;
          let t = 10;
          for (let l of Object.keys(e)) {
            let o = e[l];
            let n = o?.buffer;
            n && (t = Math.max(t, n.length / 3e4));
          }
          return t;
        }(r);
        for (let [a, u] of o) {
          let o = x;
          if (d.createRow(o), x++, 0 === Object.keys(r).length) for (let r = 0; r < e; r++) c(u, n, i, a, o, r, s, e, l, t);else for (let r = 0; r < e; r += 10) setTimeout(() => {
            for (let d = 0; d < 10 && !(r + d >= e); d++) c(u, n, i, a, o, r + d, s, e, l, t);
          }, h * r);
        }
      });
    }, [i, r, c, l, t]);
  }(0, useCallback(e => {
    c(VisualBellActions.enqueue({
      message: getI18nString("buzz.bulk_create.success", {
        count: w
      }),
      type: "Buzz bulk create success"
    }));
    L || AppStateTsApi?.cooperFocusView().exitFocusedNodeView();
    replaceSelection(e);
    A(!1);
    l(w);
    k({});
  }, [c, L, w, l, k]), w);
  return jsx("div", {
    className: "x78zum5 xr1yuqi xl56j7k x6s0dn4 xi4r6k5 xdyg6lv",
    children: jsx(ButtonWide, {
      variant: "primary",
      onClick: () => {
        A(!0);
        setTimeout(() => B(C, N, t), 10);
      },
      disabled: 0 === Object.keys(e).length || R,
      children: R ? jsx("div", {
        className: "x78zum5 xl56j7k x6s0dn4",
        children: jsx(_$$k, {})
      }) : getI18nString("buzz.bulk_create.create_assets_button", {
        count: w
      })
    })
  });
}
export const UB = $$C0;
export const gr = $$T1;