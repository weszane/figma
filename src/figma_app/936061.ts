import { useMemo, useRef, useCallback, useEffect, useState } from "react";
import { wA, d4, Pj } from "../vendor/514228";
import { glU } from "../figma_app/763686";
import { AD } from "../905/871411";
import { dA } from "../figma_app/387100";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { xx } from "../figma_app/815945";
import u from "../vendor/223926";
import { sx } from "../905/449184";
import { Point } from "../905/736624";
import { hY } from "../figma_app/770088";
import { y as _$$y } from "../figma_app/705249";
import { j, N as _$$N } from "../figma_app/261650";
import { Y5 } from "../figma_app/455680";
import { B_, mo, PN, $r } from "../figma_app/141088";
import { eY } from "../figma_app/722362";
import { s as _$$s } from "../905/518538";
import { Qf } from "../figma_app/202626";
import { ro, k0 } from "../figma_app/12220";
import { E as _$$E } from "../905/884338";
import { g as _$$g } from "../figma_app/115586";
import { EE, lB } from "../figma_app/731583";
import { t as _$$t } from "../905/656351";
var p = u;
let C = getFeatureFlags().comments_new_observer;
let w = (e, t) => ({
  anchorPositionById: t(useMemo(() => {
    if ("loaded" !== e.status || !e.data.file) return {
      commentNodeInfoById: {},
      commentNodeIds: new Set(),
      commentThreads: []
    };
    let t = e.data.file;
    let r = Object.create(null);
    let n = new Set();
    let i = t.comments.filter(e => null === e.parentId);
    for (let e of i) if (e.clientMeta) {
      let {
        x,
        y,
        nodeId,
        nodeOffset,
        stablePath
      } = e.clientMeta;
      r[e.id] = {
        canvasPosition: {
          x,
          y
        },
        nodeId,
        nodeOffset,
        stablePath: stablePath ? `[${stablePath.join(",")}]` : void 0
      };
      null != nodeId && n.add(nodeId);
    }
    return {
      commentNodeInfoById: r,
      commentNodeIds: n,
      commentThreads: i
    };
  }, [e]).commentNodeInfoById)
});
let O = "COMMENTS_ABSOLUTE_POSITIONING_UPDATER";
export function $$R1(e, t) {
  let r = useMemo(() => p()(e, e => e.clientMeta?.nodeId), [e]);
  let s = useMemo(() => Object.keys(r), [r]);
  let o = useRef({});
  let l = wA();
  let d = _$$g();
  let c = useCallback(e => {
    let {
      nodeId,
      position,
      eventOrigins
    } = e;
    let a = o.current[nodeId];
    let s = eventOrigins.includes("LOCAL");
    let d = navigator.onLine;
    if (s && d) {
      if (null === position) {
        let e = r[nodeId] || [];
        a && e.forEach(e => {
          let t = e.clientMeta;
          if (t) {
            let r = e.clientMeta?.nodeOffset || {
              x: 0,
              y: 0
            };
            let n = Point.add(a.position, r);
            (t.x !== n.x || t.y !== n.y) && l(hY({
              thread: {
                id: e.id,
                uuid: e.uuid || void 0,
                key: e.key
              },
              clientMeta: {
                x: n.x,
                y: n.y,
                page_id: t.pageId || void 0,
                node_id: t.nodeId || void 0,
                node_offset: t.nodeOffset || void 0,
                in_frame: t.inFrame || void 0,
                selection_box_anchor: t.selectionBoxAnchor || void 0,
                stable_path: t.stablePath || void 0
              }
            }));
          }
        });
      } else position && position.page !== a?.position?.page && (r[nodeId] || []).forEach(e => {
        let t = e.clientMeta;
        if (t) {
          let r = e.clientMeta?.nodeOffset || {
            x: 0,
            y: 0
          };
          let i = Point.add(position, r);
          l(hY({
            thread: {
              id: e.id,
              uuid: e.uuid || void 0,
              key: e.key
            },
            clientMeta: {
              x: i.x,
              y: i.y,
              page_id: position.page,
              node_id: t.nodeId || void 0,
              node_offset: t.nodeOffset || void 0,
              in_frame: t.inFrame || void 0,
              selection_box_anchor: t.selectionBoxAnchor || void 0,
              stable_path: t.stablePath || void 0
            }
          }));
        }
      });
    }
    o.current[nodeId] = e;
  }, [r, o, l]);
  useEffect(() => {
    if (t.enabled && glU && d) {
      let {
        currentNodePosition
      } = EE(O, s, c);
      o.current = currentNodePosition;
    }
    return () => {
      glU && d && lB(O);
    };
  }, [s, c, t.enabled, d]);
}
export function $$L0() {
  let [e, t] = useState(new Date());
  useEffect(() => {
    if (Y5) {
      if (C) return () => {
        lB("comments");
      };
      {
        let e = () => {
          t(new Date());
        };
        B_(e);
        return () => {
          mo(e);
        };
      }
    }
  }, [t]);
  let r = useCallback(e => {
    Y5?.isReady() && (C ? EE("comments", e, e => {
      t(new Date());
    }) : PN(new Set(e)));
  }, []);
  let i = useCallback(e => {
    Y5?.isReady() && $r(new Set(e));
  }, []);
  return {
    anchorPositions: useCallback(xx(t => Y5?.isReady() && e ? glU.getCanvasSpaceCommentLocations(t) : {}), [e]),
    boundingBoxPositions: useCallback(xx((t, r, n) => {
      if (!_$$y() || !r || !e) return {};
      let i = {};
      let a = j(t, r);
      n.forEach(e => {
        if (e.content) {
          let t = _$$N([e]).reduce((e, t) => a[t] ? {
            ...e,
            [t]: a[t]
          } : e, {});
          i[e.publicUuid] = t;
        }
      });
      return i;
    }), [e]),
    DEPRECATED_updateWatchedNodeIds: r,
    updateWatchedStablePaths: i
  };
}
export function $$P4(e, t, r, a, s, o) {
  let l = w(t, a);
  let d = d4(e => e.comments.savingCommentUuids);
  let c = d4(e => e.comments.lgPendingUuidToServerIdMap);
  useEffect(() => {
    if ("errors" === t.status) {
      let e = JSON.stringify(t.errors.map(e => ({
        code: e.code,
        path: e.path,
        message: e.error?.message || ""
      })));
      console.error(`Failed to load comments: ${e}`);
      sx("Livegraph Comments Errors", {
        errors: e
      });
    }
  }, [t]);
  _$$t(e => {
    if ("loading" !== t.status) {
      if ("errors" === t.status) {
        e("comments_fetched", {
          status: t.status
        });
        return;
      }
      e("comments_fetched", {
        count: t.data?.file?.comments?.length,
        status: t.status
      });
    }
  }, [t]);
  let u = useMemo(() => o.filter(e => !!("nodeId" in e ? e.nodeId : e.id)).reduce((e, t) => (e["nodeId" in t ? t.nodeId : t.id] = t.name, e), {}), [o]);
  let p = useMemo(() => ro(e, t, r, l.anchorPositionById, s, u, d, c), [e, t, r, l.anchorPositionById, s, u, d, c]);
  _$$E("loaded" === p.status && p.data || []);
  return p;
}
export function $$D3() {
  return !!d4(e => e.comments).activeThread;
}
export function $$k6(e, t, r) {
  useEffect(() => {
    if (t.errors && t.errors.length) {
      let e = JSON.stringify(t.errors.map(e => ({
        code: e.code,
        path: e.path,
        message: e.error?.message || ""
      })));
      console.error(`Failed to load canvas mentions: ${e}`);
      sx("Livegraph Canvas Mention Comments Errors", {
        errors: e
      });
    }
  }, [t.errors]);
  return useMemo(() => k0(e, t, r), [r, t, e]);
}
export function $$M2(e) {
  let t;
  let r = _$$s();
  let n = eY();
  if (!Qf(n)) return !1;
  switch (r.orphanedBy) {
    case "deleted_pages":
      return !e.pageName;
    case "deleted_anchors":
      if (0 === e.comments.length || !(t = e.comments[0].client_meta?.node_id)) return !1;
      return !n.get(t);
    case "non_slide_anchors":
      if (0 === e.comments.length || !(t = e.comments[0].client_meta?.node_id)) return !0;
      let i = UN().get(t);
      if (!i) return !0;
      return i.containingSlideId === AD;
    default:
      return !1;
  }
}
export function $$F5() {
  let e = Pj();
  return useCallback(t => {
    let r = e.getState().mirror.sceneGraph;
    return dA(r, t);
  }, [e]);
}
export const Cn = $$L0;
export const Hu = $$R1;
export const Kq = $$M2;
export const MP = $$D3;
export const W9 = $$P4;
export const e_ = $$F5;
export const gu = $$k6;