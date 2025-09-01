import { useState, useCallback, useMemo, useRef, useEffect } from "react";
export function $$$$r0(e, t) {
  let [i, r] = useState();
  let a = useCallback(() => {
    r(void 0);
  }, []);
  let s = useMemo(() => e.submit ? async () => {
    r({
      result: "pending"
    });
    t?.();
    r(await e.submit?.());
  } : void 0, [e, t]);
  let o = useRef(!1);
  let l = useMemo(() => e.clearErrors ? () => {
    e.clearErrors?.();
    o.current = !0;
  } : void 0, [e]);
  useEffect(() => {
    o.current && s && (s(), o.current = !1);
  }, [s]);
  useEffect(() => {
    o.current && "error" === e.status && (o.current = !1);
  }, [e.status]);
  return {
    draftSubmissionResult: i,
    clearDraftSubmissionResult: a,
    submit: s ?? l
  };
}
export const r = $$$$r0;