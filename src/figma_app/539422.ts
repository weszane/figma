import { jsx, Fragment } from "react/jsx-runtime";
import { useId, useMemo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { oB, j7 } from "../905/929976";
import { UV } from "../905/504727";
import { j } from "../905/834956";
export function $$c0(e) {
  let t = useId();
  let r = e || t;
  let c = useDispatch();
  let u = useSelector(e => e.dropdownShown?.type === r);
  let p = useMemo(() => document.createElement("div"), []);
  useEffect(() => (document.body.appendChild(p), () => {
    document.body.removeChild(p);
  }), [p]);
  let _ = useRef(null);
  let h = _.current?.getBoundingClientRect() || null;
  let m = e => {
    e.callback && e.callback("", null, c);
  };
  return {
    toggleDropdown: () => {
      u ? c(oB()) : c(j7({
        type: r
      }));
    },
    dropdownTargetRef: _,
    Dropdown: function (e) {
      let t = UV(e);
      return jsx(Fragment, {
        children: u && h && createPortal(jsx(j, {
          parentRect: h,
          dispatch: c,
          onSelectItem: m,
          ...e,
          ...t
        }), p)
      });
    },
    isDropdownShown: u
  };
}
export const B = $$c0;
