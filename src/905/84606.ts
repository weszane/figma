import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { j7 } from "../905/929976";
import { Gq } from "../figma_app/361662";
import { K } from "../905/770444";
export function $$l0(e, t, i, l) {
  let d = useDispatch();
  let {
    query,
    searchSessionId
  } = Gq();
  let p = K();
  return useCallback(n => {
    n.preventDefault();
    n.stopPropagation();
    d(j7({
      type: t,
      data: {
        component: e,
        position: {
          top: n.clientY,
          left: n.clientX
        },
        onJumpToLocalComponent: p,
        searchSessionId,
        query,
        sectionPosition: i,
        sectionNameForTracking: l
      }
    }));
  }, [d, t, e, p, searchSessionId, query, i, l]);
}
export const F = $$l0;
