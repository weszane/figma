import { useContext, useState, useRef, useEffect, useCallback } from "react";
import { noop } from 'lodash-es';
import { SKIP_RECORDING } from "../figma_app/878298";
import { nS } from "../figma_app/274383";
import { T } from "../905/355691";
export function $$l0(e = noop, t = !1, i = !0) {
  let {
    state
  } = useContext(nS);
  let [c, u] = useState({
    isHovered: !1,
    hoverTarget: null
  });
  let p = useRef(0);
  useEffect(() => {
    state.draggedTool || u({
      isHovered: !1,
      hoverTarget: null
    });
  }, [state.draggedTool]);
  useEffect(() => () => clearTimeout(p.current), []);
  let m = useCallback(e => {
    if (t ? (u({
      isHovered: !1,
      hoverTarget: null
    }), clearTimeout(p.current), p.current = setTimeout(() => {
      u({
        isHovered: !0,
        hoverTarget: e.target
      });
    }, 400)) : u({
      isHovered: !0,
      hoverTarget: e.target
    }), !T.RECORD_DETAILED_EVENTS) return SKIP_RECORDING;
  }, [t]);
  let h = useCallback(e => {
    c.isHovered && e.target !== c.hoverTarget && u({
      isHovered: !0,
      hoverTarget: e.target
    });
  }, [c.hoverTarget, c.isHovered]);
  let g = useCallback(() => {
    if (clearTimeout(p.current), u({
      isHovered: !1,
      hoverTarget: null
    }), !T.RECORD_DETAILED_EVENTS) return SKIP_RECORDING;
  }, []);
  let f = useCallback(e => {
    e.preventDefault();
    i && u({
      isHovered: !0,
      hoverTarget: e.target
    });
  }, [i]);
  let _ = useCallback(t => {
    t.preventDefault();
    state.shouldFinishClick && e(t);
    i && u({
      isHovered: !1,
      hoverTarget: null
    });
  }, [i, state.shouldFinishClick, e]);
  return {
    ...c,
    onMouseEnter: m,
    onMouseLeave: g,
    onMouseMove: h,
    onTouchStart: f,
    onTouchEnd: _
  };
}
export const W = $$l0;
