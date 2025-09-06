import { useEffect, useMemo, useRef, useState } from "react";
import { shallowEqual } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { ServiceCategories as _$$e } from "../905/165054";
import { createRemovableAtomFamily, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { wm, ID } from "../905/19536";
import c from "lodash-es/mapValues";
import { reportError } from "../905/11";
import { d as _$$d } from "../905/381451";
import { o as _$$o, A } from "../905/17894";
import { B7 } from "../905/497882";
var u = c;
let f = lQ;
export function $$_0(e) {
  let t = B7(e);
  return function (i, s = {}) {
    f(e);
    let l = wm(() => i, [i]);
    let [c, g] = ID({
      status: "idle"
    }, shallowEqual);
    useEffect(() => {
      g({
        status: "idle"
      });
    }, [l, g]);
    let _ = {};
    for (let i of t) {
      let t = function (e, t, i) {
        return u()(e, e => {
          switch (e.type) {
            case "form":
              return t[e.source];
            case "otherField":
              return i[e.source];
            case "constant":
              return e.value;
            default:
              throwTypeError(e);
          }
        });
      }(e.fieldToDeps[i], l, _);
      let r = useMemo(() => t, Object.values(t));
      _[i] = _$$d(e.fields[i], r, s[i]);
    }
    let A = useMemo(() => _, Object.values(_));
    let y = useRef();
    useEffect(() => {
      if (A !== y.current && "idle" === c.status) {
        y.current = A;
        (async () => {
          let t = [];
          try {
            t.push(...((await e.validate(l, A)) ?? []).map(e => ({
              type: "validation",
              ...e
            })));
          } catch (i) {
            t.push({
              type: "exception",
              source: "validate",
              error: i
            });
            console.error(`Unhandled exception in ${e.displayName}.validate:`, i);
            reportError(_$$e.COMMUNITY, i, {
              extra: {
                source: `${e.displayName}.validate`
              }
            });
          } finally {
            if (y.current !== A) return;
            t.length > 0 ? (console.warn(`Error(s) from ${e.displayName}.validate:`, t), g({
              status: "error",
              errors: t
            })) : g({
              status: "validated"
            });
          }
        })();
        return () => {
          y.current = void 0;
        };
      }
    }, [l, A, g, c.status]);
    useEffect(() => {
      void 0 !== A && g({
        status: "idle"
      });
    }, [A, g]);
    let b = useMemo(() => "validated" === c.status && e.canSubmit(l, A), [l, A, c.status]);
    let [v, I] = useState();
    let E = useMemo(() => b ? async () => {
      g({
        status: "submitting"
      });
      let t = u()(A, ({
        setValue: e,
        resetValue: t,
        ...i
      }) => i);
      I(t);
      let i = [];
      try {
        let n = await e.submit(l, t);
        if (n instanceof _$$o.SubmissionError) {
          i.push({
            type: "submission",
            ...n.error
          });
          console.warn(`Error from ${e.displayName}.submit:`, n.error);
          return {
            result: "failure"
          };
        }
        return {
          result: "success",
          data: n
        };
      } catch (t) {
        if (t instanceof _$$o.SubmissionError) throw Error("Submission errors should be returned from `submit`, not thrown");
        i.push({
          type: "exception",
          source: "submit",
          error: t
        });
        console.error(`Unhandled exception in ${e.displayName}.submit:`, t);
        reportError(_$$e.COMMUNITY, t, {
          extra: {
            source: `${e.displayName}.submit`
          }
        });
        return {
          result: "failure"
        };
      } finally {
        i.length > 0 ? g({
          status: "error",
          errors: i
        }) : g({
          status: "idle"
        });
        I(void 0);
      }
    } : void 0, [b, A, g, l]);
    let x = useMemo(() => "error" === c.status ? () => g({
      status: "idle"
    }) : void 0, [g, c.status]);
    return useMemo(() => ({
      formDisplayName: e.displayName,
      deps: l,
      fieldStates: v || A,
      submit: E,
      clearErrors: x,
      ...c
    }), [x, A, v, l, c, E]);
  };
}
export function $$A1(e, t, i = e => Object.fromEntries(Object.entries(e).filter(([e, t]) => t.currentValue !== A).map(([e, t]) => [e, t.currentValue]))) {
  let r = createRemovableAtomFamily(({
    initialValues: e = {}
  }) => atom(e), (e, t) => e.uniqueKey === t.uniqueKey);
  return function (a, s = {}) {
    let o = t(a);
    let d = r({
      uniqueKey: o,
      initialValues: s
    });
    let [c, u] = useAtomValueAndSetter(d);
    let p = e(a, c);
    useEffect(() => () => {
      u(i(p.fieldStates));
    }, [p.fieldStates, u]);
    let m = useRef(!1);
    useEffect(() => () => {
      m.current && r.remove({
        uniqueKey: o,
        initialValues: s
      });
    }, [o]);
    return {
      ...p,
      submit: useMemo(() => {
        let e = p.submit;
        return e ? async () => {
          let t = await e();
          "success" === t.result ? m.current = !0 : m.current = !1;
          return t;
        } : void 0;
      }, [p.submit])
    };
  };
}
export const T = $$_0;
export const e = $$A1;