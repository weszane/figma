import domtoimage from 'dom-to-image';
import { memo, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useDebounce } from 'use-debounce';
import { useMemoStable } from '../905/19536';
import { permissionScopeHandler } from '../905/189185';
import { trackEventAnalytics } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { getSingletonSceneGraph } from '../905/700578';
import { noop } from 'lodash-es';;
import { v as _$$v, Z } from '../6401/653234';
import { U } from '../6401/846751';
import { getViewportInfo, scaleRect } from '../figma_app/62612';
import { getObservableValue } from '../figma_app/84367';
import { dh } from '../figma_app/186343';
import { useCurrentFileKey } from '../figma_app/516028';
import { processImageWithThumbnail } from '../figma_app/624361';
import { JT } from '../figma_app/632248';
import { useAppModelProperty } from '../figma_app/722362';
import { tB } from '../figma_app/731583';
import { AppStateTsApi, ViewType } from '../figma_app/763686';
import { qy, wj } from '../figma_app/862289';
export function $$w0() {
  let e = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let t = useAppModelProperty('isReadOnly');
  let i = useAppModelProperty('topLevelMode') === ViewType.HISTORY;
  let r = useMemoStable(() => e, [e]);
  let o = document.getElementById('fullscreen-root');
  if (!o) return null;
  let l = o.querySelectorAll('.view.container-view');
  if (l.length === 0) return null;
  let d = l[l.length - 1];
  return d ? createPortal(jsx(T, {
    viewportInfo: r,
    isReadOnly: t || i
  }), d) : null;
}
function T({
  viewportInfo: e,
  shouldRenderMobileFlapps: t,
  isReadOnly: i
}) {
  let a = useCallback((e, t) => {
    let i = getSingletonSceneGraph().get(e.nodeId);
    let n = i?.containingSlideId;
    let r = i?.containingCanvas;
    if (i && e.position && n) {
      return {
        guid: e.nodeId,
        slideId: n,
        pageId: r,
        position: t,
        type: i.interactiveSlideElementType
      };
    }
  }, []);
  let o = getObservableValue(AppStateTsApi?.flappData().nodeIds, []);
  let l = tB('Flapps', o, a, {
    useFlushSyncExpensive: !0
  });
  let u = getObservableValue(AppStateTsApi?.singleSlideView().focusedNodeId, '');
  let m = AppStateTsApi?.singleSlideView().isFocusedNodeViewFocused() ?? !1;
  let p = dh();
  let f = useMemoStable(() => Object.values(l).filter(e => e.pageId === p && (!m || m && e.slideId === u)), [l, m, u, p]);
  return wj(JT.BOARD_TO_DECK).state === qy.RUNNING ? null : jsx(Fragment, {
    children: f.map(r => jsx(R, {
      element: r,
      viewportInfo: e,
      shouldRenderMobileFlapp: t,
      isReadOnly: i
    }, r.guid))
  });
}
let R = memo(({
  element: e,
  viewportInfo: t,
  shouldRenderMobileFlapp: i,
  isReadOnly: a
}) => {
  let o = getObservableValue(AppStateTsApi?.flappData().nodeThumbnailEditCount, new Map()).get(e.guid) ?? 0;
  let [l, c] = useState(0);
  let m = useCallback(() => c(e => e + 1), []);
  let [p, f] = useState(null);
  if (!e || !e.position || !t) return jsx(Fragment, {});
  let E = getSingletonSceneGraph().get(e.guid);
  if (!E) return null;
  let g = scaleRect(t, e.position);
  let y = e.type === 'ALIGNMENT' || e.type === 'POLL' || e.type === 'FACEPILE' || e.type === 'EMBED' && !getFeatureFlags().slides_iframe_embedded_prototypes_thumbnail;
  return jsxs('div', {
    'data-testid': `flapp-${e.guid}`,
    'title': E.name,
    'style': {
      position: 'fixed',
      width: e.position.width,
      height: e.position.height,
      top: t.y,
      left: t.x,
      transform: `translate(${g.x}px, ${g.y}px) rotate(${e.position.angle}deg) scale(${t.zoomScale})`,
      transformOrigin: 'top left',
      pointerEvents: a ? 'none' : 'auto'
    },
    'children': [jsx('div', {
      className: U,
      ref: f,
      children: jsx(O, {
        element: e,
        shouldRenderMobileFlapp: i,
        isReadOnly: a,
        invalidateThumbnail: m
      })
    }), p && y && jsx(D, {
      nodeId: e.guid,
      editCount: o,
      flappDomElement: p,
      isReadOnly: a,
      manualThumbnailInvalidationCount: l
    })]
  });
});
function O({
  element: e,
  shouldRenderMobileFlapp: t,
  isReadOnly: i,
  invalidateThumbnail: r
}) {
  if (e.type === null) return null;
  let {
    EditorFlapp
  } = t ? _$$v(e.type) : Z(e.type);
  return jsx(EditorFlapp, {
    nodeId: e.guid,
    isReadOnly: i,
    invalidateThumbnail: r
  });
}
function D({
  nodeId: e,
  editCount: t,
  manualThumbnailInvalidationCount: i,
  flappDomElement: a,
  isReadOnly: s
}) {
  let [u] = useDebounce(t, 500);
  let [c] = useDebounce(i, 500);
  let m = useCurrentFileKey();
  useEffect(() => {
    let t;
    if (s) return;
    let i = getSingletonSceneGraph().get(e);
    if (!i || i.type !== 'INTERACTIVE_SLIDE_ELEMENT') return;
    let n = noop;
    t = () => {
      n = function (e, t, i) {
        let n = t.interactiveSlideElementType;
        let r = t.guid;
        let a = !1;
        domtoimage.toBlob(e, {
          bgcolor: 'transparent'
        }).then(e => e?.arrayBuffer()).then(e => {
          if (!e || e.byteLength === 0) throw new Error('Cannot decode empty buffer');
          return processImageWithThumbnail(new Uint8Array(e), 'image/png', `${r}thumbnail`);
        }).then(e => {
          t.isAlive && !a && permissionScopeHandler.system('generate-slide-thumbnail', () => {
            t.fills.length === 0 ? t.insertImageInFillPaint(e) : t.setImageInFillPaint(e);
          });
        }).catch(e => {
          trackEventAnalytics('Failed to generate thumbnail in editor for slide', {
            error: e,
            nodeId: r,
            flappType: n,
            fileKey: i
          }, {
            forwardToDatadog: !0
          });
        });
        return () => {
          a = !0;
        };
      }(a, i, m ?? '');
    };
    requestAnimationFrame(() => requestAnimationFrame(t));
    return n;
  }, [s, e, u, c, a, m]);
  return jsx(Fragment, {});
}
export const u = $$w0;
