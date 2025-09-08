import { createContext, useState, useRef, useLayoutEffect, useMemo } from "react";
import { cq, rm, SV } from "../vendor/516565";
import { $ } from "../905/61417";
import { R } from "../905/457273";
import { preventAndStopEvent } from "../905/955878";
import { Q } from "../905/586361";
let $$d2 = createContext(null);
let $$c0 = ({
  forwardedRef: e,
  action: t,
  disabled: i,
  closeOnClick: c,
  isLink: u
}) => {
  let p = cq();
  let m = Q().fpl_keep_menu_open;
  let {
    activeIndex,
    allowSelection,
    getItemProps,
    setActiveIndex,
    listRef
  } = $($$d2, "MenuItem", "Menu.Root or Menu.SubContainer");
  let [y, b] = useState("");
  let v = useRef(null);
  let I = useRef(!1);
  let E = R(setActiveIndex);
  let {
    ref,
    index
  } = rm({
    label: y
  });
  let w = SV([ref, e, v]);
  useLayoutEffect(() => {
    v.current && b(v.current.innerText ?? "");
  }, []);
  return useMemo(() => {
    let e = index === activeIndex;
    function n(e) {
      t(e);
      (e.ctrlKey || e.metaKey) && m || setTimeout(() => {
        p && c && p.events.emit("click");
      }, 30);
    }
    return {
      "data-fpl-selected": e || void 0,
      tabIndex: e ? 0 : -1,
      ref: w,
      disabled: i,
      "aria-disabled": i,
      ...getItemProps({
        onClick: e => {
          if (u) {
            p && c && p.events.emit("click");
            return;
          }
          i || I.current || !allowSelection || n(e);
          preventAndStopEvent(e);
        },
        onKeyDown: e => {
          if (" " === e.key && u) {
            i || n(e);
            preventAndStopEvent(e);
            return;
          }
          (" " === e.key || "Enter" === e.key) && (i || n(e), preventAndStopEvent(e));
          E(listRef.current.length, activeIndex, e);
        },
        onPointerLeave: () => {
          I.current = !1;
        },
        onPointerUp: e => {
          if (u && !I.current) {
            n(e);
            preventAndStopEvent(e);
            return;
          }
          0 === e.button && !i && allowSelection && (I.current = !0, n(e));
        },
        onPointerDown: () => {
          u && (I.current = !0);
        }
      })
    };
  }, [t, activeIndex, u, allowSelection, c, i, getItemProps, E, index, listRef, w, p]);
};
export function $$u1(e, t) {
  return !(e.right <= t.left || e.left >= t.right || e.bottom <= t.top || e.top >= t.bottom);
}
export const Os = $$c0;
export const Uw = $$u1;
export const Ym = $$d2;