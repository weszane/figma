import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { shallowEqual } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { useMemoShallow, useStableState } from "../905/19536";
import { reportError } from "../905/11";
import { A as _$$A } from "../905/17894";
let $$d = Symbol("RESET");
export function $$c0(e, t, i = _$$A) {
  let u = useMemoShallow(() => t, [t]);
  let [p, m] = useStableState({
    status: "idle"
  }, shallowEqual);
  useEffect(() => {
    m({
      status: "idle"
    });
  }, [u, m]);
  let [h, g] = useState(i);
  useEffect(() => {
    if (h === _$$A || h === $$d) {
      m({
        status: "loading"
      });
      let t = !1;
      (async () => {
        let i;
        let n = _$$A;
        try {
          n = await e.fetchInitialValue(u);
        } catch (t) {
          i = {
            type: "exception",
            source: "fetchInitialValue",
            error: t
          };
          console.error(`Unhandled exception in ${e.displayName}.fetchInitialValue:`, t);
          reportError(ServiceCategories.COMMUNITY, t, {
            extra: {
              source: `${e.displayName}.fetchInitialValue`
            }
          });
        } finally {
          if (t) return;
          if (i) {
            m({
              status: "error",
              errors: [i]
            });
            return;
          }
          (n !== _$$A || h === $$d) && g(n);
          m({
            status: "idle"
          });
        }
      })();
      return () => {
        t = !0;
      };
    }
  }, [e, h, u, g, m]);
  let f = useRef(_$$A);
  useEffect(() => {
    if (h !== _$$A && h !== $$d && h !== f.current && "idle" === p.status) {
      f.current = h;
      (async () => {
        let t = [];
        try {
          t.push(...((await e.validate(u, h)) ?? []).map(e => ({
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
          reportError(ServiceCategories.COMMUNITY, i, {
            extra: {
              source: `${e.displayName}.validate`
            }
          });
        } finally {
          if (f.current !== h) return;
          t.length > 0 ? (console.warn(`Error(s) from ${e.displayName}.validate:`, t), m({
            status: "error",
            errors: t
          })) : m({
            status: "validated"
          });
        }
      })();
      return () => {
        f.current = _$$A;
      };
    }
  }, [e, h, u, m, p.status]);
  useEffect(() => {
    h !== _$$A && m({
      status: "idle"
    });
  }, [h, m]);
  let _ = useMemo(() => h !== _$$A && h !== $$d && e.canSet(u, h), [e, u, h]);
  let A = useMemo(() => _ ? t => {
    t === h || h !== _$$A && h !== $$d && e.isEqual?.(t, h) || (g(t), m({
      status: "idle"
    }));
  } : void 0, [e, _, h, m]);
  let y = useCallback(() => {
    g($$d);
    m({
      status: "idle"
    });
  }, [g, m]);
  let b = useMemo(() => "error" === p.status ? () => m({
    status: "idle"
  }) : void 0, [m, p.status]);
  return useMemo(() => ({
    fieldDisplayName: e.displayName,
    deps: u,
    currentValue: h === $$d ? _$$A : h,
    setValue: A,
    resetValue: y,
    clearErrors: b,
    ...p
  }), [e.displayName, b, h, y, A, u, p]);
}
export const d = $$c0;
