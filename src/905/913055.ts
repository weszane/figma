import { useState, useEffect } from "react";
import { BreakpointFrameHelpersBindings } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { Tv } from "../figma_app/151869";
function o(e) {
  return e.map(e => getSingletonSceneGraph().get(e)).filter(e => !!e);
}
export function $$l2() {
  return o(BreakpointFrameHelpersBindings?.getSelectedNodesWithinSingleBreakpointFrame() ?? []);
}
export function $$d1(e, t) {
  return o(BreakpointFrameHelpersBindings?.getMatchingNodesToUpdateForQuery(e.guid, t) ?? []);
}
export function $$c0() {
  let [e, t] = useState([]);
  let i = Tv();
  useEffect(() => {
    t($$l2());
  }, [i]);
  return e;
}
export const JT = $$c0;
export const Mo = $$d1;
export const i2 = $$l2;