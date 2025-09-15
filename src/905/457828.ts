import { jsx } from "react/jsx-runtime";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useSubscription } from "../figma_app/288654";
import { useState, useRef, useCallback } from "react";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { V } from "../figma_app/385855";
import { F } from "../905/171275";
import { FFileType } from "../figma_app/191312";
import { A as _$$A } from "../905/615098";
import { _ as _$$_ } from "../905/264868";
import { s as _$$s } from "../cssbuilder/589278";
import { N } from "../905/794224";
import { q } from "../905/600041";
import { Tf, nb, hi } from "../figma_app/543100";
import { FilePermissionsLgShadowView } from "../figma_app/43951";
function g({
  thumbnailUrl: e,
  thumbnailType: t,
  clientMeta: i,
  lastTouchedAt: r,
  config: a,
  ...s
}) {
  let [l, c] = useState(1);
  let [u, p] = useState({
    x: 0,
    y: 0
  });
  let m = useRef(null);
  let g = a?.get("FJZoomableThumbnailsScale", 3.5) ?? 3.5;
  let f = useCallback(e => {
    let t = m.current;
    if (!t) return;
    let i = t.getBoundingClientRect();
    p({
      x: e.clientX - i.left,
      y: e.clientY - i.top
    });
  }, [p]);
  let _ = useCallback(() => {
    c(g);
  }, [g, c]);
  let A = useCallback(() => {
    c(1);
  }, [c]);
  return jsx("div", {
    className: _$$s.hFull.wFull.$,
    onMouseMove: f,
    onMouseEnter: _,
    onMouseLeave: A,
    onDragStart: A,
    children: jsx("div", {
      ref: m,
      className: _$$s.hFull.wFull.$,
      children: jsx(V, {
        thumbnailUrl: e,
        thumbnailType: t,
        lastTouchedAt: r,
        clientMeta: i,
        addtlStyles: {
          transform: `scale(${l})`,
          transformOrigin: `${u.x}px ${u.y}px`,
          transition: `transform 0.4s ease ${l > 1 ? .5 : 0}s`
        },
        draggable: !0,
        ...s
      })
    })
  });
}
function f({
  thumbnailUrl: e,
  thumbnailType: t,
  additionalThumbnailUrls: i,
  clientMeta: r,
  lastTouchedAt: a,
  editorType: s,
  ...h
}) {
  let {
    getConfig
  } = selectExperimentConfigHook("exp_search_fb_thumbnail_previews");
  let _ = getConfig();
  let A = _.get("shouldAutoplay", !0);
  let y = useRef(null);
  switch (s) {
    case FFileType.WHITEBOARD:
      if (t === F.WHITEBOARD) break;
      return jsx(g, {
        thumbnailUrl: e,
        clientMeta: r,
        thumbnailType: t,
        lastTouchedAt: a,
        config: _,
        ...h
      });
    default:
      let b = (i || []).slice(0, 6);
      if (b.length < 3) break;
      if (A) return jsx(_$$A, {
        ref: y,
        thumbnailUrl: e,
        additionalThumbnailUrls: b,
        clientMeta: r,
        thumbnailType: t,
        lastTouchedAt: a,
        ...h
      });
      return jsx(_$$_, {
        ref: y,
        thumbnailUrl: e,
        additionalThumbnailUrls: b,
        clientMeta: r,
        thumbnailType: t,
        lastTouchedAt: a,
        ...h
      });
  }
  return jsx(V, {
    thumbnailUrl: e,
    clientMeta: r,
    thumbnailType: t,
    lastTouchedAt: a,
    ...h
  });
}
let v = e => {
  let t = Tf.getIsThumbnailFullWidth(e);
  let i = Tf.getEditorType(e);
  return e.type === nb.PROTOTYPE ? F.PROTOTYPE : e.type === nb.OFFLINE_FILE ? F.OFFLINE : i === FFileType.SLIDES ? F.SLIDES : i === FFileType.WHITEBOARD ? t ? F.WHITEBOARD : F.DEFAULT_WHITEBOARD : t ? F.DESIGN : F.DEFAULT_DESIGN;
};
export function $$I0({
  tile: e,
  interactiveThumbnailsEnabled: t,
  ...i
}) {
  let o = useAtomWithSubscription(hi(e));
  let l = Tf.getThumbnailUrl(e);
  let c = Tf.getTouchedAt(e);
  let u = v(e);
  let p = Tf.getFileOrMainBranchKey(e);
  if (useSubscription(FilePermissionsLgShadowView(getFeatureFlags().iam_pv2_lg_pol_smoke && p ? {
    fileKey: p,
    linkAccessOverrideKey: null
  } : null)), Tf.getIsPasswordProtected(e)) {
    if ("loading" === o.status) return jsx(q, {
      ...i
    });
    if (!o.unwrapOr(!1)) return jsx(N, {
      thumbnailType: u,
      ...i
    });
  }
  let m = Tf.getClientMeta(e);
  let h = Tf.getEditorType(e);
  let g = Tf.getFileOrMainBranchKey(e);
  return getFeatureFlags().scrub_file_browser_search_results && t && l ? jsx(f, {
    thumbnailUrl: l,
    thumbnailType: u,
    additionalThumbnailUrls: Tf.getPreviewThumbnailUrls(e) ?? [],
    clientMeta: m,
    lastTouchedAt: c,
    editorType: h,
    ...i
  }, g) : jsx(V, {
    thumbnailUrl: l,
    clientMeta: m,
    thumbnailType: u,
    lastTouchedAt: c,
    ...i
  }, g);
}
export const e = $$I0;