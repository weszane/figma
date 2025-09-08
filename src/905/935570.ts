import { jsx } from "react/jsx-runtime";
import { createContext, useState, useContext, useMemo } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { Fullscreen } from "../figma_app/763686";
import { h as _$$h } from "../905/207101";
import { r as _$$r } from "../905/520829";
import { XHR } from "../905/910117";
import { uo } from "../figma_app/78808";
import { tS } from "../figma_app/516028";
import { dU, GS } from "../figma_app/803787";
let $$m3 = createContext({
  status: _$$r.SUCCESS,
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
  let i = tS();
  let p = useDispatch();
  let [g, f] = useState({
    status: _$$r.SUCCESS,
    nodeIdToValidatedMoveInfo: Object.create(null)
  });
  _$$h(() => {
    let e = e => e.reduce((e, t) => (t.old_key && (e[t.node_id] = t.old_key), e), Object.create(null));
    let n = e(Object.values(t.local.components));
    let r = e(Object.values(t.local.stateGroups));
    let a = e(Object.values(t.local.styles));
    Object.keys(n).length + Object.keys(r).length + Object.keys(a).length !== 0 && (f({
      status: _$$r.LOADING
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
      p(uo({
        files,
        subscribeToRealtime: !0
      }));
      f({
        status: _$$r.SUCCESS,
        nodeIdToValidatedMoveInfo: h(valid_move_id_to_file_key, t)
      });
    }).catch(() => {
      f({
        status: _$$r.FAILURE
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
  return useMemo(() => e.status === _$$r.SUCCESS ? e.nodeIdToValidatedMoveInfo : void 0, [e]);
}
export function $$_0() {
  let e = $$f1();
  return useSelector(t => e ? dU(t, e) : GS(t));
}
export const UJ = $$_0;
export const Xm = $$f1;
export const fo = $$g2;
export const og = $$m3;