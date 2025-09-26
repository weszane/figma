import { jsx } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from "react";
import { SKIP_RECORDING } from "../figma_app/878298";
import { useSingleEffect } from "../905/791079";
import { dP } from "../figma_app/119475";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { Um } from "../905/848862";
import { JB } from "../figma_app/604494";
import { Yf, Uz } from "../905/479155";
import { U } from "../905/172092";
export function $$m0({
  children: e,
  fillHeight: t = !1,
  fillWidth: i = !1
}) {
  let m = useRef(null);
  let h = useRef(new Yf());
  let [g, f] = useState(0);
  let _ = JB();
  let A = U();
  useSingleEffect(() => () => {
    _();
  });
  let y = Um();
  let b = useCallback(() => {
    if (!y) {
      f(e => e + 1);
      return SKIP_RECORDING;
    }
  }, [y]);
  useEffect(() => {
    b();
  }, [b]);
  return jsx(dP, {
    allowHorizontalNavigationWhileInputFocused: !0,
    ref: m,
    className: cssBuilderInstance.$$if(t, cssBuilderInstance.flex.flexColumn.hFull.overflowHidden).$$if(i, cssBuilderInstance.wFull).$,
    onClick: e => {
      0 !== e.detail && b();
    },
    recordingKey: A,
    disabled: !!y,
    useKeyNavFauxFocusSync: !0,
    children: jsx(Uz.Provider, {
      value: {
        tracker: h.current,
        renderId: g,
        setRenderId: f
      },
      children: e
    })
  });
}
export const _ = $$m0;