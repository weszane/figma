import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
export function $$$$a0({
  callback: e,
  cleanupCallback: t
}) {
  let i = useRef(null);
  let a = useRef(e);
  let s = useRef(t);
  useEffect(() => {
    a.current = e;
  }, [e]);
  useEffect(() => {
    s.current = t;
  }, [t]);
  useEffect(() => {
    if (!i.current) return;
    let e = new IntersectionObserver((e, t) => {
      a.current(e, t);
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0
    });
    e.observe(i.current);
    return () => {
      e.disconnect();
      s.current?.();
    };
  }, []);
  return jsx("div", {
    ref: i,
    style: {
      width: "0px",
      height: "0px"
    }
  });
}
export const a = $$$$a0;