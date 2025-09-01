import { useState, useCallback, useEffect } from "react";
exports.useInteractionState = void 0;
exports.useInteractionState = function (e) {
  let [t, i] = useState(!1);
  let [r, a] = useState(!1);
  let [s, o] = useState(!1);
  let l = useCallback(() => {
    s && (o(!1), a(!1));
  }, [s, a]);
  useEffect(() => (document.addEventListener("mouseup", l), () => {
    document.removeEventListener("mouseup", l);
  }), [l]);
  return {
    state: r ? e.pressed : t ? e.hover : e.$$default,
    handlers: {
      onPointerEnter: () => {
        i(!0);
        o(!0);
      },
      onPointerLeave: () => {
        i(!1);
      },
      onPointerDown: e => {
        a(!0);
        e.stopPropagation();
      },
      onPointerUp: () => {
        a(!1);
      }
    }
  };
};