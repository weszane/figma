import { jsx } from "react/jsx-runtime";
import { createContext, useState, useContext, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { useSingleEffect } from "../905/791079";
import { APILoadingStatus } from "../905/520829";
import { XHR } from "../905/910117";
import { batchPutFileAction } from "../figma_app/78808";
import { useCurrentFileKey } from "../figma_app/516028";
import { dU, GS } from "../figma_app/803787";
let $$m3 = createContext({
  status: APILoadingStatus.SUCCESS,
  nodeIdToValidatedMoveInfo: Object.create(null)
});
let h = (e, t) => {
  let i = new Set();
  let n = Object.create(null);
  for (let r of Object.keys(e)) {
    let a = t.local.components[r]?.old_key || t.local.stateGroups[r]?.old_key || t.local.styles[r]?.old_key;
    a && (n[r] = {
      fileKey: e[r],
      publishType: i.has(a) ? "FORCED_COPY" : "MOVE"
    }, i.add(a));
  }
  return n;
};
export function $$g2({
  children: e
}) {
  let t = useSelector(e => e.library);
  let i = useCurrentFileKey();
  let p = useDispatch();
  let [g, f] = useState({
    status: APILoadingStatus.SUCCESS,
    nodeIdToValidatedMoveInfo: Object.create(null)
  });
  useSingleEffect(() => {
    let e = e => e.reduce((e, t) => (t.old_key && (e[t.node_id] = t.old_key), e), Object.create(null));
    let n = e(Object.values(t.local.components));
    let r = e(Object.values(t.local.stateGroups));
    let a = e(Object.values(t.local.styles));
    Object.keys(n).length + Object.keys(r).length + Object.keys(a).length !== 0 && (f({
      status: APILoadingStatus.LOADING
    }), XHR.post("/api/design_systems/move_validity", {
      component_moves: n,
      state_group_moves: r,
      style_moves: a,
      dst_file_key: i
    }).then(e => {
      let {
        files,
        never_movable_node_ids,
        valid_move_id_to_file_key
      } = e.data.meta;
      for (let e of never_movable_node_ids) Fullscreen.clearLibraryMoveInfo(e);
      p(batchPutFileAction({
        files,
        subscribeToRealtime: !0
      }));
      f({
        status: APILoadingStatus.SUCCESS,
        nodeIdToValidatedMoveInfo: h(valid_move_id_to_file_key, t)
      });
    }).catch(() => {
      f({
        status: APILoadingStatus.FAILURE
      });
    }));
  });
  return jsx($$m3.Provider, {
    value: g,
    children: e
  });
}
export function $$f1() {
  let e = useContext($$m3);
  return useMemo(() => e.status === APILoadingStatus.SUCCESS ? e.nodeIdToValidatedMoveInfo : void 0, [e]);
}
export function $$_0() {
  let e = $$f1();
  return useSelector(t => e ? dU(t, e) : GS(t));
}
export const UJ = $$_0;
export const Xm = $$f1;
export const fo = $$g2;
export const og = $$m3;