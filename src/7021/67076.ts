import { useState, useEffect } from "react";
export function $$i0(e = "minute") {
  let [t, a] = useState(new Date());
  useEffect(() => {
    let t = setInterval(() => {
      a(new Date());
    }, function (e) {
      if ("number" == typeof e) return e;
      switch (e) {
        case "second":
          return 1e3;
        case "minute":
          return 6e4;
        case "hour":
          return 36e5;
        case "day":
          return 864e5;
      }
    }(e));
    return () => clearInterval(t);
  }, [e]);
  return t;
}
export const R = $$i0;