import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { md } from "../figma_app/27355";
import { Ay } from "../905/612521";
import { Rs } from "../figma_app/288654";
import { h1 } from "../905/986103";
import { $E, w4 } from "../905/445814";
import { tx } from "../905/303541";
import { G } from "../905/720066";
import { Q } from "../905/61477";
import { EN, AR, K4 } from "../905/182534";
import { AS } from "../905/156213";
import { _6 } from "../figma_app/386952";
import { yf7 } from "../figma_app/43951";
import { vj } from "../905/574958";
import { cr } from "../905/703676";
import { a as _$$a } from "../905/682573";
export function $$v0({
  fileResult: e,
  id: t,
  path: i,
  position: l,
  onContextMenuCallback: d
}) {
  let u = wA();
  let _ = d4(e => e.currentUserOrgId || void 0);
  let b = d4(e => e.currentTeamId);
  let v = d4(e => e.user);
  let E = d4(e => e.search.sessionId);
  let x = md(Q);
  let S = $E();
  let w = _6();
  let C = EN(e);
  let T = C ? e.model : e;
  let k = C ? e : T;
  let R = AR(T, v, _, b, w);
  let N = G(R, l, C ? e : void 0);
  let P = useCallback(e => {
    e.preventDefault();
    e.metaKey || 1 === e.button ? Ay.redirect(R, "_blank") : (u(AS()), K4(u, T, _ ?? null, b, v));
  }, [R, _, b, v, u, T]);
  let O = useCallback(e => {
    e.preventDefault();
    u(AS());
    K4(u, T, _ ?? null, b, v);
  }, [_, b, v, u, T]);
  let D = useCallback(e => {
    d({
      index: 0,
      data: k
    }, e);
  }, [k, d]);
  let L = useCallback(t => {
    C ? N(t) : vj.Recents.trackRecentsClick(E, l, e.key, vj.RecentType.FILE);
  }, [e, C, l, E, N]);
  let F = S(T);
  return jsx(cr, {
    breadcrumbElement: jsx(I, {
      file: T
    }),
    icon: jsx(w4, {
      size: 16,
      type: F
    }),
    id: t,
    onClickCallback: P,
    onContextMenuCallback: D,
    onKeyEnterCallback: O,
    path: i,
    text: T.name,
    textToHighlight: x,
    trackInteraction: L
  });
}
function I({
  file: e
}) {
  let {
    data
  } = Rs(yf7, {
    projectId: e.folder_id
  }, {
    enabled: !!e.folder_id
  });
  let i = data?.project?.path || "";
  let r = e.touched_at ? tx("search.preview_item.edited_from_now", {
    relativeTimeString: jsx(h1, {
      date: e.touched_at,
      style: "narrow"
    })
  }) : null;
  return jsx(_$$a, {
    leftElement: i || null,
    rightElement: r
  });
}
export const H = $$v0;