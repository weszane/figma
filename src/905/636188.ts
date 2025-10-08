import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import a from "classnames";
import { RecordingScrollContainer } from "../905/347284";
import { useScrollHandler } from "../905/825399";
var s = a;
export function $$d0(e) {
  let {
    onScroll,
    className,
    ...a
  } = e;
  let {
    isScrolled,
    handleScroll
  } = useScrollHandler();
  let u = useCallback((e, i) => {
    handleScroll(e);
    onScroll?.(e, i);
  }, [handleScroll, onScroll]);
  return jsx(RecordingScrollContainer, {
    ...a,
    onScroll: u,
    className: s()(e.className, "scroll_container_with_border--container--bOpnt", {
      "scroll_container_with_border--withBorder--L0j77": isScrolled
    })
  });
}
export const $ = $$d0;
